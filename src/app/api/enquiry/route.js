import nodemailer from 'nodemailer'

const submissionLog = new Map()

function rateLimited(ip, maxPerHour = 3) {
  if (!ip) return false
  const now = Date.now()
  const windowMs = 60 * 60 * 1000
  const hits = (submissionLog.get(ip) || []).filter((t) => now - t < windowMs)
  hits.push(now)
  submissionLog.set(ip, hits)
  if (submissionLog.size > 5000) {
    for (const [k, v] of submissionLog) {
      if (!v.some((t) => now - t < windowMs)) submissionLog.delete(k)
    }
  }
  return hits.length > maxPerHour
}

function looksGibberish(s = '') {
  const str = String(s).trim()
  if (str.length <= 8) return false
  const noSpaces = !/\s/.test(str)
  const mixedCase = /[a-z]/.test(str) && /[A-Z]/.test(str)
  const vowelRatio = (str.match(/[aeiou]/gi) || []).length / str.length
  return noSpaces && mixedCase && vowelRatio < 0.3
}

function getClientIp(request) {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return request.headers.get('x-real-ip') || ''
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET
  if (!secret) return { ok: true, skipped: true }
  if (!token) return { ok: false, reason: 'missing_token' }
  try {
    const params = new URLSearchParams({ secret, response: token })
    if (ip) params.append('remoteip', ip)
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    })
    const data = await res.json().catch(() => ({}))
    if (data.success) return { ok: true }
    return { ok: false, reason: (data['error-codes'] || []).join(',') || 'verify_failed' }
  } catch (err) {
    console.error('[enquiry] Turnstile verify error:', err.message)
    return { ok: false, reason: 'verify_error' }
  }
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
  })
}

function adminEmail(name, phone, email, service, message) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0B1F4B;padding:24px 28px;border-radius:12px 12px 0 0;">
        <h2 style="color:#fff;margin:0;font-size:20px;">New Project Enquiry</h2>
        <p style="color:rgba(255,255,255,.5);margin:6px 0 0;font-size:13px;">From nakshatranamahacreations.com</p>
      </div>
      <div style="background:#f8fafc;padding:28px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;width:120px;">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;color:#0B1F4B;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;color:#0B1F4B;">${phone}</td>
          </tr>
          ${email ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0B1F4B;">${email}</td>
          </tr>` : ''}
          ${service ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;">Service</td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0B1F4B;">${service}</td>
          </tr>` : ''}
          ${message ? `<tr>
            <td style="padding:10px 0;font-size:13px;color:#64748b;vertical-align:top;">Message</td>
            <td style="padding:10px 0;font-size:14px;color:#0B1F4B;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>
      </div>
      <p style="font-size:11px;color:#94a3b8;margin-top:16px;text-align:center;">
        This enquiry was submitted via the NNC website contact form.
      </p>
    </div>
  `
}

function thankYouEmail(name, service) {
  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">

      <!-- Header -->
      <div style="background:linear-gradient(135deg,#0B1F4B 0%,#142D6B 100%);padding:40px 36px 32px;text-align:center;border-radius:12px 12px 0 0;">
        <img src="https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png" alt="NNC" width="52" height="52" style="border-radius:12px;margin-bottom:16px;" />
        <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0 0 6px;letter-spacing:-.02em;">Thank you, ${name}!</h1>
        <p style="color:rgba(255,255,255,.6);font-size:14px;margin:0;">We've received your enquiry and we're on it.</p>
      </div>

      <!-- Body -->
      <div style="padding:36px;border:1px solid #e2e8f0;border-top:none;">

        <div style="background:#F0F7FF;border:1px solid #DBEAFE;border-radius:10px;padding:20px 24px;margin-bottom:28px;">
          <p style="font-size:15px;color:#0B1F4B;line-height:1.7;margin:0;">
            Our team is reviewing your ${service ? `<strong>${service}</strong> ` : ''}requirements right now. You'll hear from a dedicated project consultant within <strong>24 hours</strong>.
          </p>
        </div>

        <h3 style="font-size:15px;color:#0B1F4B;font-weight:700;margin:0 0 16px;">What happens next?</h3>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;width:36px;">
              <div style="width:28px;height:28px;border-radius:50%;background:#E3F2FD;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#2196F3;">1</div>
            </td>
            <td style="padding:12px 0 12px 12px;border-bottom:1px solid #f1f5f9;">
              <strong style="font-size:13.5px;color:#0B1F4B;">Discovery call</strong>
              <p style="font-size:12.5px;color:#64748b;margin:3px 0 0;line-height:1.5;">A project consultant will call you to understand your goals, timeline and budget.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
              <div style="width:28px;height:28px;border-radius:50%;background:#E3F2FD;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#2196F3;">2</div>
            </td>
            <td style="padding:12px 0 12px 12px;border-bottom:1px solid #f1f5f9;">
              <strong style="font-size:13.5px;color:#0B1F4B;">Scope &amp; fixed-price quote</strong>
              <p style="font-size:12.5px;color:#64748b;margin:3px 0 0;line-height:1.5;">You'll receive a detailed scope document with a fixed price no surprises, no hourly billing.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;vertical-align:top;">
              <div style="width:28px;height:28px;border-radius:50%;background:#E3F2FD;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#2196F3;">3</div>
            </td>
            <td style="padding:12px 0 12px 12px;">
              <strong style="font-size:13.5px;color:#0B1F4B;">Kick-off &amp; weekly updates</strong>
              <p style="font-size:12.5px;color:#64748b;margin:3px 0 0;line-height:1.5;">Once approved, your dedicated team starts building with weekly progress updates on a live staging site.</p>
            </td>
          </tr>
        </table>

        <!-- CTA -->
        <div style="text-align:center;margin:32px 0 24px;">
          <p style="font-size:14px;color:#475569;margin:0 0 16px;">Can't wait? Talk to us right now:</p>
          <a href="tel:+919900566466" style="display:inline-block;background:#2196F3;color:#fff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:8px;text-decoration:none;letter-spacing:.01em;">
            Call +91 99005 66466
          </a>
          <p style="font-size:12.5px;color:#94a3b8;margin:12px 0 0;">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
        </div>

        <!-- Divider -->
        <div style="border-top:1px solid #f1f5f9;margin:8px 0 24px;"></div>

        <!-- Trust signals -->
        <table style="width:100%;text-align:center;">
          <tr>
            <td style="padding:8px;">
              <div style="font-size:22px;font-weight:800;color:#0B1F4B;letter-spacing:-.03em;">565+</div>
              <div style="font-size:11px;color:#94a3b8;">Projects</div>
            </td>
            <td style="padding:8px;">
              <div style="font-size:22px;font-weight:800;color:#0B1F4B;letter-spacing:-.03em;">4.9★</div>
              <div style="font-size:11px;color:#94a3b8;">Google Rating</div>
            </td>
            <td style="padding:8px;">
              <div style="font-size:22px;font-weight:800;color:#0B1F4B;letter-spacing:-.03em;">35+</div>
              <div style="font-size:11px;color:#94a3b8;">In-house Team</div>
            </td>
            <td style="padding:8px;">
              <div style="font-size:22px;font-weight:800;color:#0B1F4B;letter-spacing:-.03em;">4</div>
              <div style="font-size:11px;color:#94a3b8;">City Offices</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background:#F8FAFC;padding:24px 36px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;text-align:center;">
        <p style="font-size:12px;color:#94a3b8;margin:0 0 6px;line-height:1.5;">
          <strong style="color:#64748b;">Nakshatra Namaha Creations Pvt. Ltd.</strong><br />
          Bengaluru &middot; Mumbai &middot; Mysuru &middot; Hyderabad
        </p>
        <p style="font-size:11px;color:#CBD5E1;margin:0;">
          <a href="https://www.nakshatranamahacreations.com" style="color:#2196F3;text-decoration:none;">nakshatranamahacreations.com</a>
          &nbsp;&middot;&nbsp;
          <a href="https://wa.me/919900566466" style="color:#2196F3;text-decoration:none;">WhatsApp</a>
        </p>
      </div>
    </div>
  `
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name, phone, email, service, message, landingPage, source,
      company_website, renderedAt, cfToken,
    } = body

    if (company_website) {
      return Response.json({ success: true })
    }

    const ip = getClientIp(request)

    const renderedAtNum = Number(renderedAt)
    if (renderedAtNum && Date.now() - renderedAtNum < 3000) {
      return Response.json({ error: 'spam_detected' }, { status: 400 })
    }

    if (rateLimited(ip)) {
      return Response.json({ error: 'too_many_requests' }, { status: 429 })
    }

    const isChatbot = source === 'chatbot'

    if (!isChatbot) {
      const captcha = await verifyTurnstile(cfToken, ip)
      if (!captcha.ok) {
        return Response.json({ error: 'challenge_failed', reason: captcha.reason }, { status: 400 })
      }
    }

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required.' }, { status: 400 })
    }
    if (!isChatbot) {
      const cleanPhone = String(phone).replace(/[\s\-()]/g, '')
      const phoneOk = /^(\+91)?[6-9]\d{9}$/.test(cleanPhone)
      if (!phoneOk) {
        return Response.json({ error: 'invalid_contact' }, { status: 400 })
      }
    }

    if (email) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))
      if (!emailOk) {
        return Response.json({ error: 'invalid_contact' }, { status: 400 })
      }
    }

    if (looksGibberish(name) || (!isChatbot && looksGibberish(message))) {
      return Response.json({ error: 'invalid_content' }, { status: 400 })
    }

    // Determine the landing page label prefer explicit landingPage field,
    // fall back to source if it looks like a URL path
    const pagePath = landingPage || (source && String(source).startsWith('/') ? source : null)

    // Forward enquiry to CRM first (always succeeds regardless of email status)
    const crmUrl = process.env.CRM_BACKEND_URL
    if (!crmUrl) {
      console.error('[enquiry] CRM_BACKEND_URL is not set — enquiry will NOT be saved to the CRM. Set CRM_BACKEND_URL in .env.local or hosting env vars.')
    } else {
      fetch(`${crmUrl}/api/website-enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email: email || '',
          service,
          requirements: message || '',
          landingPage: pagePath || '/',
        }),
      })
        .then(async (r) => {
          if (!r.ok) {
            const text = await r.text().catch(() => '')
            console.error(`[enquiry] CRM responded ${r.status}: ${text.slice(0, 200)}`)
          } else {
            console.log(`[enquiry] forwarded to CRM (${name}, ${phone})`)
          }
        })
        .catch(err => console.error('[enquiry] CRM forward error:', err.message))
    }

    // Send emails non-blocking, errors are logged but don't fail the request
    try {
      const transporter = getTransporter()
      const fromAddress = `"Nakshatra Namaha Creations" <${process.env.SMTP_USER}>`

      // Admin notification
      await transporter.sendMail({
        from: `"NNC Website Enquiry" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email || process.env.SMTP_USER,
        subject: `New Enquiry: ${service || 'General'} ${name} (${phone})`,
        html: adminEmail(name, phone, email, service, message),
        text: `New enquiry from ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nService: ${service || 'N/A'}\nMessage: ${message || 'N/A'}`,
      })

      // Thank-you email FROM info@ TO customer (different addresses, no loop)
      if (email) {
        await transporter.sendMail({
          from: `"Nakshatra Namaha Creations" <${process.env.SMTP_USER}>`,
          to: email,
          replyTo: process.env.SMTP_USER,
          subject: `Thank you ${name} We've received your enquiry`,
          html: thankYouEmail(name, service),
          text: `Hi ${name},\n\nThank you for reaching out to Nakshatra Namaha Creations. We have received your${service ? ' ' + service : ''} enquiry and our team will get back to you within 24 hours.\n\nCall us: +91 99005 66466 (Mon-Sat, 9AM-7PM IST)\n\nBest regards,\nNakshatra Namaha Creations Pvt. Ltd.`,
        })
      }
    } catch (emailErr) {
      // Log the email error but don't fail enquiry is already saved to CRM
      console.error('Email send error (non-fatal):', emailErr.message)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Enquiry error:', err.message)
    return Response.json({ error: `Something went wrong: ${err.message}` }, { status: 500 })
  }
}

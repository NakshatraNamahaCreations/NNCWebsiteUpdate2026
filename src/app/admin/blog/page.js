'use client'
import { useState } from 'react'

const CATEGORIES = ['Mobile Apps','Website Development','SEO','Design','Tech','Animation','Digital Marketing','Business']
const READ_TIMES = ['3 min','4 min','5 min','6 min','7 min','8 min','9 min','10 min','12 min','15 min']
const CATEGORY_COLORS = {
  'Mobile Apps':'#10B981','Website Development':'#2196F3','SEO':'#7C3AED',
  'Design':'#EC4899','Tech':'#F59E0B','Animation':'#F97316',
  'Digital Marketing':'#6366F1','Business':'#14B8A6',
}

function slugify(t) {
  return t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-')
}

function makeEmptyForm() {
  return { title:'', slug:'', category:'Website Development', date: new Date().toISOString().slice(0,10), readTime:'6 min', description:'', bodyContent:'' }
}

export default function AdminBlogPage() {
  const [secret, setSecret]         = useState('')
  const [authed, setAuthed]         = useState(false)
  const [authError, setAuthError]   = useState('')
  const [showPass, setShowPass]     = useState(false)
  const [form, setForm]             = useState(makeEmptyForm)
  const [autoSlug, setAutoSlug]     = useState(true)
  const [loading, setLoading]       = useState(false)
  const [result, setResult]         = useState(null)
  const [allPosts, setAllPosts]     = useState([])
  const [existingSlugs, setExistingSlugs] = useState([])
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)
  const [deleteResult, setDeleteResult]   = useState(null)
  const [editSlug, setEditSlug]     = useState(null)
  const [editLoading, setEditLoading] = useState(false)
  const [editResult, setEditResult]   = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCat, setFilterCat]   = useState('All')
  const [sortBy, setSortBy]         = useState('newest')

  async function loadPosts(pwd) {
    try {
      const res  = await fetch(`/api/admin/blog?secret=${encodeURIComponent(pwd)}`)
      const data = await res.json()
      if (data.posts) {
        setAllPosts([...data.posts].sort((a,b)=>new Date(b.date)-new Date(a.date)))
        setExistingSlugs(data.slugs)
      }
    } catch {}
  }

  function handleAuth(e) {
    e.preventDefault()
    if (!secret.trim()) { setAuthError('Enter the admin password'); return }
    setAuthed(true); setAuthError(''); loadPosts(secret)
  }

  function handleTitleChange(val) {
    setForm(f=>({...f, title:val, slug: autoSlug ? slugify(val) : f.slug}))
  }
  function handleSlugChange(val) {
    setAutoSlug(false)
    setForm(f=>({...f, slug:val.toLowerCase().replace(/[^a-z0-9-]/g,'')}))
  }

  async function handleSubmit(e) {
    e.preventDefault(); setResult(null)
    if (!form.title.trim()||!form.slug.trim()) { setResult({error:'Title and slug are required.'}); return }
    if (existingSlugs.includes(form.slug)) { setResult({error:`Slug "${form.slug}" already exists.`}); return }
    setLoading(true)
    try {
      const res  = await fetch('/api/admin/blog',{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form,secret}) })
      const data = await res.json()
      if (data.success) {
        setResult({success:true, message:data.message, url:data.url})
        setExistingSlugs(s=>[...s,form.slug])
        setAllPosts(p=>[{slug:form.slug,title:form.title,category:form.category,date:form.date,readTime:form.readTime},...p])
        setForm(makeEmptyForm()); setAutoSlug(true)
      } else { setResult({error:data.error||'Something went wrong'}) }
    } catch(err) { setResult({error:'Network error: '+err.message}) }
    finally { setLoading(false) }
  }

  async function handleDelete(slug) {
    setDeleteLoading(slug); setDeleteResult(null)
    try {
      const res  = await fetch('/api/admin/blog',{ method:'DELETE', headers:{'Content-Type':'application/json'}, body:JSON.stringify({secret,slug}) })
      const data = await res.json()
      if (data.success) {
        setAllPosts(p=>p.filter(x=>x.slug!==slug))
        setExistingSlugs(s=>s.filter(x=>x!==slug))
        setDeleteResult({success:true,message:data.message})
        setTimeout(()=>setDeleteResult(null),3000)
      } else { setDeleteResult({error:data.error}) }
    } catch(err) { setDeleteResult({error:'Network error: '+err.message}) }
    finally { setDeleteLoading(null); setDeleteConfirm(null) }
  }

  function startEdit(post) {
    setEditSlug(post.slug)
    setForm({ title:post.title, slug:post.slug, category:post.category, date:post.date, readTime:post.readTime, description:post.description||'', bodyContent:post.body||'' })
    setAutoSlug(false); setResult(null)
    window.scrollTo({top:0,behavior:'smooth'})
  }
  function cancelEdit() {
    setEditSlug(null); setForm(makeEmptyForm()); setAutoSlug(true); setResult(null)
  }

  async function handleUpdate(e) {
    e.preventDefault(); setEditResult(null)
    if (!form.title.trim()) { setEditResult({error:'Title is required.'}); return }
    setEditLoading(true)
    try {
      const res  = await fetch('/api/admin/blog',{ method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form, originalSlug:editSlug, secret}) })
      const data = await res.json()
      if (data.success) {
        setAllPosts(p=>p.map(x=> x.slug===editSlug ? {...x,...form} : x))
        setEditResult({success:true, message:'Post updated successfully'})
        setTimeout(()=>{ setEditSlug(null); setForm(makeEmptyForm()); setAutoSlug(true); setEditResult(null) }, 1500)
      } else { setEditResult({error:data.error}) }
    } catch(err) { setEditResult({error:'Network error: '+err.message}) }
    finally { setEditLoading(false) }
  }

  const slugConflict = form.slug && !editSlug && existingSlugs.includes(form.slug)
  const isEditing    = !!editSlug
  const catColor     = CATEGORY_COLORS[form.category]||'#2196F3'

  // ── LOGIN PAGE ─────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <>
        <style suppressHydrationWarning>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          *{box-sizing:border-box;margin:0;padding:0;}
          body{font-family:'Inter',sans-serif;}
          .lg-bg{
            min-height:100vh;background:#fff;
            display:flex;align-items:stretch;
          }
          /* Left decorative panel */
          .lg-left{
            width:420px;flex-shrink:0;
            background:linear-gradient(160deg,#0B1F4B 0%,#1a3a7a 60%,#1565C0 100%);
            display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;
            padding:48px 44px;position:relative;overflow:hidden;
          }
          .lg-left::before{
            content:'';position:absolute;
            width:320px;height:320px;border-radius:50%;
            background:rgba(255,255,255,0.04);
            top:-80px;right:-80px;
          }
          .lg-left::after{
            content:'';position:absolute;
            width:200px;height:200px;border-radius:50%;
            background:rgba(33,150,243,0.15);
            bottom:60px;left:-60px;
          }
          .lg-left-logo{display:flex;align-items:center;gap:12px;position:relative;z-index:1;}
          .lg-left-logo-img{width:46px;height:46px;background:#fff;border-radius:12px;padding:5px;overflow:hidden;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity 0.15s;text-decoration:none;}
          .lg-left-logo-img:hover{opacity:0.9;}
          .lg-left-logo-img img{width:100%;height:100%;object-fit:contain;}
          .lg-left-logo-text{}
          .lg-left-logo-name{font-size:14px;font-weight:800;color:#fff;letter-spacing:-0.02em;line-height:1.2;}
          .lg-left-logo-tag{font-size:11px;color:rgba(255,255,255,0.45);margin-top:2px;}
          .lg-left-body{position:relative;z-index:1;}
          .lg-left-heading{font-size:32px;font-weight:900;color:#fff;letter-spacing:-0.05em;line-height:1.15;margin-bottom:16px;}
          .lg-left-heading span{color:#60A5FA;}
          .lg-left-desc{font-size:14px;color:rgba(255,255,255,0.5);line-height:1.7;margin-bottom:32px;}
          .lg-left-pills{display:flex;flex-direction:column;gap:10px;}
          .lg-left-pill{display:flex;align-items:center;gap:10px;font-size:13px;color:rgba(255,255,255,0.7);}
          .lg-left-pill-dot{width:6px;height:6px;border-radius:50%;background:#60A5FA;flex-shrink:0;}
          .lg-left-foot{font-size:11.5px;color:rgba(255,255,255,0.25);position:relative;z-index:1;}
          /* Right form panel */
          .lg-right{flex:1;display:flex;align-items:center;justify-content:center;padding:48px 40px;background:#fff;}
          .lg-form-wrap{width:100%;max-width:380px;}
          .lg-form-title{font-size:26px;font-weight:900;color:#0B1F4B;letter-spacing:-0.05em;margin-bottom:6px;}
          .lg-form-sub{font-size:13.5px;color:#94A3B8;margin-bottom:36px;line-height:1.6;}
          .lg-label{font-size:11.5px;font-weight:700;color:#334155;letter-spacing:0.04em;text-transform:uppercase;display:block;margin-bottom:9px;}
          .lg-wrap{position:relative;margin-bottom:6px;}
          .lg-input{
            width:100%;padding:14px 46px 14px 16px;
            background:#F8FAFC;border:1.5px solid #E2E8F0;
            border-radius:12px;font-size:14.5px;color:#0B1F4B;outline:none;
            transition:border 0.18s,box-shadow 0.18s,background 0.18s;
            font-family:'Inter',sans-serif;
          }
          .lg-input:focus{border-color:#2196F3;background:#fff;box-shadow:0 0 0 4px rgba(33,150,243,0.1);}
          .lg-input::placeholder{color:#94A3B8;}
          .lg-eye{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#94A3B8;padding:4px;}
          .lg-eye:hover{color:#475569;}
          .lg-err{font-size:12.5px;color:#EF4444;margin:8px 0 0;padding:10px 12px;background:#FEF2F2;border-radius:8px;border:1px solid #FECACA;}
          .lg-btn{
            width:100%;padding:14px;margin-top:20px;
            background:linear-gradient(135deg,#0B1F4B,#1565C0);
            color:#fff;border:none;border-radius:12px;
            font-weight:700;font-size:15px;cursor:pointer;
            font-family:'Inter',sans-serif;
            transition:opacity 0.18s,transform 0.12s;
            letter-spacing:0.01em;box-shadow:0 4px 20px rgba(11,31,75,0.25);
          }
          .lg-btn:hover{opacity:0.9;transform:translateY(-1px);}
          .lg-badge{margin-top:28px;font-size:12.5px;color:#64748B;text-align:center;font-weight:500;display:flex;align-items:center;justify-content:center;gap:6px;}
          @media(max-width:700px){
            .lg-left{display:none;}
            .lg-right{padding:32px 24px;}
          }
        `}</style>
        <div className="lg-bg">
          {/* Left panel */}
          <div className="lg-left">
            <div className="lg-left-logo">
              <a href="/" className="lg-left-logo-img">
                <img src="https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png" alt="NNC" />
              </a>
              <div className="lg-left-logo-text">
                <div className="lg-left-logo-name">Nakshatra Namaha Creations</div>
                <div className="lg-left-logo-tag">Your digital solutions partner</div>
              </div>
            </div>
            <div className="lg-left-body">
              <div className="lg-left-heading">Blog &<br/><span>Insights</span><br/>Manager</div>
              <div className="lg-left-desc">Manage your blog content, publish new posts and track everything — all in one place.</div>
              <div className="lg-left-pills">
                {['Publish blog posts instantly','Edit & delete anytime','Auto SEO metadata','8 content categories'].map(t=>(
                  <div key={t} className="lg-left-pill"><span className="lg-left-pill-dot"/>{t}</div>
                ))}
              </div>
            </div>
            <div className="lg-left-foot">Internal Admin Panel · NNC Digital © 2026</div>
          </div>

          {/* Right form */}
          <div className="lg-right">
            <div className="lg-form-wrap">
              <div className="lg-form-title">Welcome back</div>
              <div className="lg-form-sub">Sign in to manage your blog & insights content.</div>
              <form onSubmit={handleAuth}>
                <label className="lg-label">Admin Password</label>
                <div className="lg-wrap">
                  <input type={showPass?'text':'password'} value={secret} onChange={e=>setSecret(e.target.value)} placeholder="Enter your password" className="lg-input" autoFocus />
                  <button type="button" className="lg-eye" onClick={()=>setShowPass(s=>!s)}>
                    {showPass
                      ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>
                      : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>
                {authError && <div className="lg-err">⚠ {authError}</div>}
                <button type="submit" className="lg-btn">Sign In to Admin →</button>
              </form>
              <div className="lg-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                Secure internal admin panel · NNC Digital
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // ── ADMIN PANEL ────────────────────────────────────────────────────────────
  const filtered = allPosts
    .filter(p => filterCat==='All' || p.category===filterCat)
    .filter(p => !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.slug.includes(searchTerm.toLowerCase()))
    .sort((a,b) => {
      if (sortBy==='newest') return new Date(b.date) - new Date(a.date)
      if (sortBy==='oldest') return new Date(a.date) - new Date(b.date)
      if (sortBy==='az')     return a.title.localeCompare(b.title)
      if (sortBy==='za')     return b.title.localeCompare(a.title)
      return 0
    })

  return (
    <>
      <style suppressHydrationWarning>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Inter',sans-serif;background:#F8FAFC;}
        .aw{min-height:100vh;background:#F8FAFC;}

        /* ── Topbar ── */
        .tb{
          background:#fff;
          border-bottom:1.5px solid #F1F5F9;
          padding:0 40px;height:66px;
          display:flex;align-items:center;justify-content:space-between;
          position:sticky;top:0;z-index:100;
          box-shadow:0 2px 16px rgba(11,31,75,0.07);
        }
        .tb-l{display:flex;align-items:center;gap:14px;}
        .tb-logo{
          width:44px;height:44px;border-radius:11px;overflow:hidden;
          flex-shrink:0;display:flex;align-items:center;justify-content:center;
          background:#F8FAFC;border:1.5px solid #E2E8F0;padding:5px;
          text-decoration:none;transition:border-color 0.15s,box-shadow 0.15s;
        }
        .tb-logo:hover{border-color:#2196F3;box-shadow:0 2px 10px rgba(33,150,243,0.18);}
        .tb-logo img{width:100%;height:100%;object-fit:contain;}
        .tb-divider{width:1px;height:28px;background:#E2E8F0;}
        .tb-name{font-size:15px;font-weight:800;color:#0B1F4B;letter-spacing:-0.03em;}
        .tb-tag{font-size:11px;color:#94A3B8;margin-top:1px;}
        .tb-badge{
          font-size:11px;font-weight:700;color:#2196F3;
          background:#EFF6FF;border:1.5px solid #BFDBFE;
          border-radius:20px;padding:3px 10px;letter-spacing:0.02em;
        }
        .tb-r{display:flex;align-items:center;gap:8px;}
        .tb-link{
          font-size:13px;color:#475569;text-decoration:none;
          padding:8px 16px;border:1.5px solid #E2E8F0;
          border-radius:9px;font-weight:600;transition:all 0.15s;
          display:flex;align-items:center;gap:6px;
        }
        .tb-link:hover{border-color:#2196F3;color:#2196F3;background:#EFF6FF;}
        .tb-out{
          font-size:13px;color:#64748B;background:none;
          border:1.5px solid #E2E8F0;border-radius:9px;
          padding:8px 16px;cursor:pointer;font-family:'Inter',sans-serif;
          font-weight:600;transition:all 0.15s;
        }
        .tb-out:hover{border-color:#EF4444;color:#EF4444;background:#FEF2F2;}

        /* ── Body ── */
        .ab{max-width:960px;margin:0 auto;padding:40px 28px 100px;}

        /* ── Page header ── */
        .ph-wrap{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:32px;gap:16px;flex-wrap:wrap;}
        .pg-title{font-size:28px;font-weight:900;color:#0B1F4B;letter-spacing:-0.05em;margin-bottom:4px;}
        .pg-sub{font-size:13.5px;color:#94A3B8;line-height:1.6;}
        .pg-date{font-size:12px;color:#CBD5E1;margin-top:4px;}

        /* ── Stats ── */
        .sr{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px;}
        .sc{
          background:#fff;border:1.5px solid #F1F5F9;
          border-radius:18px;padding:22px 26px;
          transition:border 0.15s,box-shadow 0.2s;
          position:relative;overflow:hidden;
        }
        .sc::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:18px 18px 0 0;}
        .sc:nth-child(1)::before{background:linear-gradient(90deg,#2196F3,#60A5FA);}
        .sc:nth-child(2)::before{background:linear-gradient(90deg,#10B981,#34D399);}
        .sc:nth-child(3)::before{background:linear-gradient(90deg,#7C3AED,#A78BFA);}
        .sc:hover{border-color:#E2E8F0;box-shadow:0 6px 24px rgba(11,31,75,0.08);}
        .sn{font-size:32px;font-weight:900;letter-spacing:-0.04em;margin-bottom:4px;margin-top:4px;}
        .sl{font-size:12px;color:#94A3B8;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;}

        /* ── Section label ── */
        .section-label{font-size:11px;font-weight:800;color:#94A3B8;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;}

        /* ── Card ── */
        .card{
          background:#fff;border:1.5px solid #F1F5F9;
          border-radius:20px;overflow:hidden;margin-bottom:24px;
          box-shadow:0 2px 16px rgba(11,31,75,0.05);
        }
        .ch{
          padding:20px 28px;border-bottom:1.5px solid #F8FAFC;
          display:flex;align-items:center;gap:10px;
          background:linear-gradient(135deg,#FAFBFF 0%,#fff 100%);
        }
        .ch-icon{
          width:34px;height:34px;border-radius:10px;
          display:flex;align-items:center;justify-content:center;flex-shrink:0;
        }
        .ch-title{font-size:15px;font-weight:800;color:#0B1F4B;letter-spacing:-0.03em;}
        .ch-sub{font-size:12px;color:#94A3B8;margin-top:1px;}
        .ch-badge{font-size:11px;color:#64748B;background:#F1F5F9;padding:3px 10px;border-radius:20px;margin-left:auto;font-weight:600;}
        .cb{padding:28px;}

        /* ── Edit banner ── */
        .edit-banner{
          background:linear-gradient(135deg,#FFFBEB,#FEF3C7);
          border:1.5px solid #FDE68A;border-radius:14px;
          padding:14px 18px;margin-bottom:24px;
          display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;
        }
        .edit-banner-left{display:flex;align-items:center;gap:10px;}
        .edit-banner-icon{width:32px;height:32px;background:#F59E0B;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .edit-banner-txt{font-size:13px;font-weight:700;color:#92400E;}
        .edit-banner-slug{font-size:11.5px;color:#B45309;margin-top:2px;font-family:monospace;}
        .edit-cancel{font-size:12.5px;color:#64748B;background:#fff;border:1.5px solid #E2E8F0;border-radius:8px;padding:7px 14px;cursor:pointer;font-family:'Inter',sans-serif;font-weight:600;transition:all 0.15s;}
        .edit-cancel:hover{border-color:#EF4444;color:#EF4444;}

        /* ── Field label ── */
        .fl{font-size:11.5px;font-weight:700;color:#374151;letter-spacing:0.03em;display:block;margin-bottom:8px;}
        .fn{font-size:11px;color:#CBD5E1;font-weight:400;margin-left:6px;}

        /* ── Inputs ── */
        .fi,.fs,.ft{
          width:100%;padding:12px 16px;
          background:#F8FAFC;border:1.5px solid #E8EDF2;
          border-radius:12px;font-size:14px;color:#0B1F4B;outline:none;
          font-family:'Inter',sans-serif;
          transition:border 0.18s,background 0.18s,box-shadow 0.18s;
          appearance:none;
        }
        .fi::placeholder,.ft::placeholder{color:#94A3B8;}
        .fi:focus,.fs:focus,.ft:focus{
          border-color:#2196F3;background:#fff;
          box-shadow:0 0 0 4px rgba(33,150,243,0.08);
        }
        .fs{
          cursor:pointer;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat:no-repeat;background-position:right 14px center;padding-right:36px;
        }
        .ft{resize:vertical;min-height:82px;line-height:1.65;}
        .fm{margin-bottom:22px;}
        .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;}

        /* ── Slug field ── */
        .sw{position:relative;}
        .sp{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:13px;color:#94A3B8;pointer-events:none;font-family:'Inter',sans-serif;}
        .si{padding-left:58px !important;}
        .slug-ok{display:flex;align-items:center;gap:5px;font-size:12px;color:#10B981;margin-top:6px;font-weight:600;}
        .slug-err{display:flex;align-items:center;gap:5px;font-size:12px;color:#EF4444;margin-top:6px;font-weight:600;}

        /* ── Category pill ── */
        .cp{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:20px;font-size:11.5px;font-weight:700;margin-bottom:8px;}
        .cd{width:6px;height:6px;border-radius:50%;}

        /* ── Char counter ── */
        .cc{font-size:11px;text-align:right;margin-top:5px;font-weight:500;}

        /* ── Result banners ── */
        .rs{padding:14px 18px;border-radius:12px;background:#F0FDF4;border:1.5px solid #BBF7D0;margin-bottom:22px;font-size:13.5px;color:#15803D;display:flex;align-items:flex-start;gap:10px;}
        .re{padding:14px 18px;border-radius:12px;background:#FEF2F2;border:1.5px solid #FECACA;margin-bottom:22px;font-size:13.5px;color:#DC2626;display:flex;align-items:center;gap:10px;}
        .rl{color:#2196F3;font-weight:700;margin-left:6px;text-decoration:none;}
        .rn{margin-top:4px;font-size:12px;color:#16A34A;opacity:0.8;}

        /* ── Submit button ── */
        .sbtn{
          display:inline-flex;align-items:center;gap:8px;
          padding:13px 28px;
          background:linear-gradient(135deg,#0B1F4B,#1565C0);
          color:#fff;border:none;border-radius:12px;
          font-weight:700;font-size:14px;cursor:pointer;
          font-family:'Inter',sans-serif;
          transition:opacity 0.18s,transform 0.12s;
          box-shadow:0 4px 16px rgba(11,31,75,0.2);
          letter-spacing:0.01em;
        }
        .sbtn:hover:not(:disabled){opacity:0.88;transform:translateY(-1px);}
        .sbtn:disabled{background:#CBD5E1;cursor:not-allowed;box-shadow:none;}
        .sbtn.edit-mode{background:linear-gradient(135deg,#D97706,#F59E0B);box-shadow:0 4px 16px rgba(217,119,6,0.25);}
        @keyframes spin{to{transform:rotate(360deg);}}
        .spin{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite;}

        /* ── Posts list ── */
        .list-toolbar{
          padding:16px 24px;border-bottom:1.5px solid #F8FAFC;
          display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;
          background:#FAFBFF;
        }
        .list-toolbar-l{display:flex;align-items:center;gap:10px;}
        .psearch{
          padding:9px 14px;background:#fff;
          border:1.5px solid #E8EDF2;border-radius:9px;
          font-size:13px;color:#0B1F4B;outline:none;
          font-family:'Inter',sans-serif;width:200px;
          transition:border 0.15s,box-shadow 0.15s;
        }
        .psearch:focus{border-color:#2196F3;box-shadow:0 0 0 3px rgba(33,150,243,0.08);}
        .psearch::placeholder{color:#CBD5E1;}
        .pfilt{
          padding:9px 32px 9px 13px;background:#fff;
          border:1.5px solid #E8EDF2;border-radius:9px;
          font-size:13px;color:#475569;outline:none;
          font-family:'Inter',sans-serif;cursor:pointer;appearance:none;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat:no-repeat;background-position:right 10px center;
          transition:border 0.15s;
        }
        .pfilt:focus{border-color:#2196F3;}
        .post-row{
          display:flex;align-items:center;justify-content:space-between;gap:12px;
          padding:15px 24px;border-bottom:1.5px solid #F8FAFC;
          transition:background 0.12s;
        }
        .post-row:last-child{border-bottom:none;}
        .post-row:hover{background:#FAFBFF;}
        .post-info{flex:1;min-width:0;}
        .post-title{font-size:13.5px;font-weight:600;color:#0B1F4B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:5px;}
        .post-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
        .pcat{font-size:10.5px;font-weight:700;padding:2px 9px;border-radius:20px;}
        .pdate{font-size:11.5px;color:#94A3B8;display:flex;align-items:center;gap:4px;}
        .post-actions{display:flex;align-items:center;gap:6px;flex-shrink:0;}
        .vbtn{font-size:12px;color:#475569;text-decoration:none;padding:6px 12px;border:1.5px solid #E2E8F0;border-radius:8px;font-weight:600;transition:all 0.12s;}
        .vbtn:hover{color:#2196F3;border-color:#BFDBFE;background:#EFF6FF;}
        .ebtn{font-size:12px;color:#D97706;background:#FFFBEB;border:1.5px solid #FDE68A;border-radius:8px;padding:6px 12px;cursor:pointer;font-family:'Inter',sans-serif;font-weight:600;display:flex;align-items:center;gap:5px;transition:all 0.12s;}
        .ebtn:hover{background:#FEF3C7;border-color:#F59E0B;}
        .dbtn{font-size:12px;color:#DC2626;background:#FEF2F2;border:1.5px solid #FECACA;border-radius:8px;padding:6px 12px;cursor:pointer;font-family:'Inter',sans-serif;font-weight:600;display:flex;align-items:center;gap:5px;transition:all 0.12s;}
        .dbtn:hover{background:#FEE2E2;border-color:#EF4444;}
        .dbtn:disabled{opacity:0.4;cursor:not-allowed;}
        .cfm-row{padding:13px 24px;background:#FEF2F2;border-bottom:1.5px solid #FECACA;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}
        .cfm-txt{font-size:13px;color:#DC2626;font-weight:500;}
        .cfm-y{padding:7px 18px;background:#EF4444;color:#fff;border:none;border-radius:8px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;transition:opacity 0.15s;}
        .cfm-y:hover{opacity:0.88;}
        .cfm-n{padding:7px 14px;background:#fff;color:#64748B;border:1.5px solid #E2E8F0;border-radius:8px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:all 0.15s;}
        .cfm-n:hover{border-color:#94A3B8;color:#374151;}
        .p-empty{padding:48px 24px;text-align:center;font-size:14px;color:#CBD5E1;}

        /* ── Footer ── */
        .af{margin-top:40px;text-align:center;font-size:12px;color:#CBD5E1;display:flex;align-items:center;justify-content:center;gap:8px;}

        @media(max-width:640px){
          .sr{grid-template-columns:1fr 1fr;}
          .g3{grid-template-columns:1fr;}
          .tb{padding:0 16px;}
          .ab{padding:24px 16px 60px;}
          .cb{padding:20px 16px;}
          .psearch{width:130px;}
          .post-row{padding:12px 14px;}
          .list-toolbar{padding:14px;}
        }
      `}</style>

      <div className="aw">
        {/* ── Topbar ── */}
        <div className="tb">
          <div className="tb-l">
            <a href="/" className="tb-logo">
              <img src="https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png" alt="NNC" />
            </a>
            <div className="tb-divider" />
            <div>
              <div className="tb-name">Nakshatra Namaha Creations</div>
              <div className="tb-tag">Your digital solutions partner</div>
            </div>
            <span className="tb-badge">Admin</span>
          </div>
          <div className="tb-r">
            <a href="/blog" target="_blank" rel="noreferrer" className="tb-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              View Blog
            </a>
            <button onClick={()=>{setAuthed(false);setSecret('')}} className="tb-out">Logout</button>
          </div>
        </div>

        <div className="ab">
          {/* Page header */}
          <div className="ph-wrap">
            <div>
              <div className="pg-title">Blog Manager</div>
              <div className="pg-sub">Add, edit and delete posts — published instantly to /blog</div>
            </div>
          </div>

          {/* Stats */}
          <div className="sr">
            <div className="sc">
              <div className="sl">Total Posts</div>
              <div className="sn" style={{color:'#2196F3'}}>{allPosts.length}</div>
            </div>
            <div className="sc">
              <div className="sl">Status</div>
              <div className="sn" style={{color:'#10B981'}}>Live</div>
            </div>
            <div className="sc">
              <div className="sl">Categories</div>
              <div className="sn" style={{color:'#7C3AED'}}>{CATEGORIES.length}</div>
            </div>
          </div>

          {/* ── Add / Edit Form ── */}
          <div className="section-label">{isEditing ? '✏ Editing Post' : '+ New Post'}</div>
          <div className="card">
            <div className="ch">
              <div className="ch-icon" style={{background: isEditing ? '#FEF3C7' : '#EFF6FF'}}>
                {isEditing
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                }
              </div>
              <div>
                <div className="ch-title">{isEditing ? 'Edit Blog Post' : 'Add New Blog Post'}</div>
                <div className="ch-sub">{isEditing ? `Editing: /${editSlug}` : 'Fill the form below and publish instantly'}</div>
              </div>
              {isEditing && <button onClick={cancelEdit} className="edit-cancel" style={{marginLeft:'auto'}}>✕ Cancel</button>}
            </div>
            <div className="cb">
              {isEditing && (
                <div className="edit-banner">
                  <div className="edit-banner-left">
                    <div className="edit-banner-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </div>
                    <div>
                      <div className="edit-banner-txt">Editing existing post — slug is locked</div>
                      <div className="edit-banner-slug">/blog/{editSlug}</div>
                    </div>
                  </div>
                  <button onClick={cancelEdit} className="edit-cancel">Cancel Edit</button>
                </div>
              )}

              <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
                {/* Title */}
                <div className="fm">
                  <label className="fl">Blog Title <span style={{color:'#EF4444'}}>*</span></label>
                  <input type="text" value={form.title} onChange={e=>handleTitleChange(e.target.value)} placeholder="e.g. Top 10 Web Development Trends in 2026" className="fi" required />
                </div>

                {/* Slug */}
                <div className="fm">
                  <label className="fl">URL Slug <span style={{color:'#EF4444'}}>*</span><span className="fn">{isEditing ? 'locked while editing' : 'auto-generated from title'}</span></label>
                  <div className="sw">
                    <span className="sp">/blog/</span>
                    <input type="text" value={form.slug} onChange={e=>handleSlugChange(e.target.value)} placeholder="url-slug-here" className="fi si" style={{borderColor:slugConflict?'#FECACA':undefined}} readOnly={isEditing} required />
                  </div>
                  {slugConflict && <div className="slug-err"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Slug already exists — choose a different one</div>}
                  {form.slug && !slugConflict && <div className="slug-ok"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> {isEditing ? 'Slug locked for editing' : 'Slug is available'}</div>}
                </div>

                {/* Category / Date / Read Time */}
                <div className="g3 fm">
                  <div>
                    <label className="fl">Category <span style={{color:'#EF4444'}}>*</span></label>
                    <div className="cp" style={{background:`${catColor}12`,border:`1.5px solid ${catColor}30`,color:catColor}}>
                      <span className="cd" style={{background:catColor}}/>{form.category}
                    </div>
                    <select value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} className="fs">
                      {CATEGORIES.map(c=><option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="fl">Publish Date <span style={{color:'#EF4444'}}>*</span></label>
                    <input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} className="fi" required />
                  </div>
                  <div>
                    <label className="fl">Read Time <span style={{color:'#EF4444'}}>*</span></label>
                    <select value={form.readTime} onChange={e=>setForm(f=>({...f,readTime:e.target.value}))} className="fs">
                      {READ_TIMES.map(t=><option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* SEO Description */}
                <div className="fm">
                  <label className="fl">SEO Description<span className="fn">optional · shown on blog list & Google</span></label>
                  <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} placeholder="Short description for SEO and blog card (120–160 characters recommended)" className="ft" maxLength={200} />
                  <div className="cc" style={{color:form.description.length>160?'#F59E0B':'#CBD5E1'}}>{form.description.length} / 160 characters</div>
                </div>

                {/* Blog Body Content */}
                <div className="fm">
                  <label className="fl">Blog Body Content<span className="fn">optional · replaces auto-generated text on the post page</span></label>
                  <textarea
                    value={form.bodyContent}
                    onChange={e=>setForm(f=>({...f,bodyContent:e.target.value}))}
                    placeholder={'Write your full blog post here...\n\nEach new line becomes a new paragraph on the post page.\n\nLeave blank to use auto-generated content.'}
                    className="ft"
                    style={{minHeight:220}}
                  />
                  <div style={{marginTop:6,fontSize:11.5,color:'#94A3B8',display:'flex',alignItems:'center',gap:5}}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Each line break = new paragraph on the blog post page
                  </div>
                </div>

                {/* Results */}
                {!isEditing && result && (
                  result.success
                    ? <div className="rs"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg><div>Post published!<a href={result.url} target="_blank" rel="noreferrer" className="rl">View post →</a><div className="rn">Live at /blog/{result.url?.replace('/blog/','')}</div></div></div>
                    : <div className="re"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>{result.error}</div>
                )}
                {isEditing && editResult && (
                  editResult.success
                    ? <div className="rs"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg><div>{editResult.message}</div></div>
                    : <div className="re"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>{editResult.error}</div>
                )}

                <button type="submit" disabled={loading||editLoading||(!isEditing&&(slugConflict||!form.title||!form.slug))} className={`sbtn${isEditing?' edit-mode':''}`}>
                  {(loading||editLoading)
                    ? <><span className="spin"/> {isEditing?'Saving Changes…':'Publishing…'}</>
                    : isEditing
                      ? <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Save Changes</>
                      : <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg> Publish Blog Post</>
                  }
                </button>
              </form>
            </div>
          </div>

          {/* ── All Posts ── */}
          <div className="section-label">All Posts ({filtered.length})</div>
          <div className="card">
            <div className="list-toolbar">
              <div className="list-toolbar-l">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <span style={{fontSize:13,fontWeight:700,color:'#0B1F4B'}}>{filtered.length} posts</span>
              </div>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                <input type="text" placeholder="Search posts…" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} className="psearch" />
                <select value={filterCat} onChange={e=>setFilterCat(e.target.value)} className="pfilt">
                  <option value="All">All Categories</option>
                  {CATEGORIES.map(c=><option key={c} value={c}>{c}</option>)}
                </select>
                <select value={sortBy} onChange={e=>setSortBy(e.target.value)} className="pfilt">
                  <option value="newest">↓ Newest First</option>
                  <option value="oldest">↑ Oldest First</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
              </div>
            </div>

            {deleteResult && (
              deleteResult.success
                ? <div style={{padding:'10px 24px',background:'#F0FDF4',borderBottom:'1.5px solid #BBF7D0',fontSize:13,color:'#15803D',fontWeight:600}}>✓ {deleteResult.message}</div>
                : <div style={{padding:'10px 24px',background:'#FEF2F2',borderBottom:'1.5px solid #FECACA',fontSize:13,color:'#DC2626',fontWeight:600}}>✗ {deleteResult.error}</div>
            )}

            {filtered.length === 0
              ? <div className="p-empty">No posts found matching your search.</div>
              : filtered.map(post => {
                  const color = CATEGORY_COLORS[post.category]||'#94A3B8'
                  const isConfirming = deleteConfirm===post.slug
                  const isDeleting   = deleteLoading===post.slug
                  return (
                    <div key={post.slug}>
                      <div className="post-row">
                        <div className="post-info">
                          <div className="post-title" title={post.title}>{post.title}</div>
                          <div className="post-meta">
                            <span className="pcat" style={{background:`${color}12`,color,border:`1.5px solid ${color}28`}}>{post.category}</span>
                            <span className="pdate">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                              {new Date(post.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
                            </span>
                            <span className="pdate">{post.readTime} read</span>
                          </div>
                        </div>
                        <div className="post-actions">
                          <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer" className="vbtn">View →</a>
                          <button onClick={()=>startEdit(post)} className="ebtn">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                            Edit
                          </button>
                          <button onClick={()=>setDeleteConfirm(isConfirming?null:post.slug)} disabled={isDeleting} className="dbtn">
                            {isDeleting ? <><span className="spin" style={{width:10,height:10,borderWidth:1.5}}/> Deleting</> : <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/></svg> Delete</>}
                          </button>
                        </div>
                      </div>
                      {isConfirming && (
                        <div className="cfm-row">
                          <div className="cfm-txt">⚠ Delete &quot;<strong>{post.title}</strong>&quot;? This cannot be undone.</div>
                          <div style={{display:'flex',gap:8}}>
                            <button onClick={()=>handleDelete(post.slug)} className="cfm-y">Yes, Delete</button>
                            <button onClick={()=>setDeleteConfirm(null)} className="cfm-n">Cancel</button>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })
            }
          </div>

          <div className="af">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            NNC Admin Panel · Blog Manager · Internal Use Only
          </div>
        </div>
      </div>
    </>
  )
}

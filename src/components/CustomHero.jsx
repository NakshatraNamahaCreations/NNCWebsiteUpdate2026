'use client'

import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa'

import Link from 'next/link'

import { SiNextdotjs } from 'react-icons/si'
import { MdSpeed, MdOutlineWorkspacePremium } from 'react-icons/md'
import { FiTrendingUp } from 'react-icons/fi'

export default function CustomHero({ title, accent, description }) {



  return (
    <>
        <style jsx global>{`
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

@keyframes gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

  @keyframes pulseGlow {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.2); }
  }
`}</style>


    <section
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(33,150,243,.15), transparent 40%), linear-gradient(135deg,#050d2b 0%,#0b1f4d 50%,#0e2d6a 100%)',
        padding: '110px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* 🔥 ANIMATED GRID */}
        <div
        style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
            'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            animation: 'gridMove 25s linear infinite',
            zIndex: 0, // 🔥 ADD THIS
        }}
        />

      {/* 🔥 GLOW ORBS */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: 300,
          height: 300,
          background: '#2196F3',
          filter: 'blur(120px)',
          opacity: 0.25,
          animation: 'pulseGlow 8s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          right: '-120px',
          width: 350,
          height: 350,
          background: '#6c5ce7',
          filter: 'blur(140px)',
          opacity: 0.2,
          animation: 'pulseGlow 10s ease-in-out infinite',
        }}
      />

      {/* 🔥 ADVANCED FLOATING TECH ICONS */}
        {[
        { icon: <FaReact color="#acd9e6"/>, top: '20%', left: '8%', size: 42, delay: '0s' },
        { icon: <FaNodeJs color="#a4deed"/>, top: '60%', left: '40%', size: 38, delay: '1s' },
        { icon: <SiNextdotjs color="#fff"/>, top: '35%', right: '32%', size: 36, delay: '2s' },
        { icon: <FaLaptopCode color="#00e5ff"/>, top: '130%', right: '60%', size: 34, delay: '3s' },
        { icon: <FaRocket color="rgb(171, 227, 243)"/>, top: '15%', right: '25%', size: 30, delay: '1.5s' },
        ].map((item, i) => (
        <div
            key={i}
            style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            opacity: 0.25,
            fontSize: item.size,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: item.delay,
            filter: 'drop-shadow(0 0 20px rgba(33,150,243,0.4))',
            zIndex: 1,
            }}
        >
            {item.icon}
        </div>
        ))}


      {/* MAIN CONTENT */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">

          <h1 style={{
            fontSize: 'clamp(34px,4.5vw,56px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            {title} <br />
            <span style={{ color: '#2196F3' }}>{accent}</span>
          </h1>

          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,.65)',
            lineHeight: 1.7,
            marginBottom: 30,
            maxWidth: 520,
          }}>
            {description}
          </p>

            {/* CTA */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}
            style={{
                padding: '14px 30px',
                background: '#2196F3',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(33,150,243,.4)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
            }}
            >
            <FaRocket /> Get Free Quote
            </button>

             <Link href="/our-works">
            <button
                style={{
                padding: '14px 24px',
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.2)',
                borderRadius: 10,
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                }}
            >
                <FaLaptopCode /> View Work
            </button>
            </Link>
            </div>

            {/* TECH STACK */}
            <div style={{
              marginTop: 30,
              display: 'flex',
              gap: 18,
              color: '#9fb3ff',
              fontSize: 22,
            }}>
              <FaReact />
              <SiNextdotjs />
              <FaNodeJs />
              <FaLaptopCode />
              <FaRocket />
            </div>

            {/* TRUST BADGES */}
            <div style={{
              marginTop: 30,
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
            }}>
              {[
                { icon: <FiTrendingUp />, label: '565+ Projects' },
                { icon: <MdOutlineWorkspacePremium />, label: '4.9★ Rating' },
                { icon: <FaCheckCircle />, label: '8+ Years Experience' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 16px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  fontSize: 13,
                }}>
                  <span style={{ color: '#2196F3' }}>
                    {item.icon}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT VIDEO */}
          <div className="col-lg-6">
            <div style={{
              position: 'relative',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,.7)',
            }}>

              <video
                src="/assets/images/videos1.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* OVERLAY */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,.6), transparent)',
              }} />

              {/* TAG */}
              <div style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                padding: '8px 14px',
                background: 'rgba(0,0,0,.6)',
                borderRadius: 8,
                color: '#fff',
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}>
                <FaRocket color="#2196F3" />
                Live Project Preview
              </div>

              {/* TOP BADGE */}
              <div style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'rgba(255,255,255,.05)',
                padding: '10px 14px',
                borderRadius: 10,
                color: '#fff',
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}>
                <MdSpeed color="#4CAF50" />
                Fast & SEO Optimized
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
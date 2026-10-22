'use client'

import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdRocketLaunch } from 'react-icons/md'

export default function PremiumCTA({ title, highlight, description }) {
  return (
    <>
      <style jsx global>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          padding: '50px 20px',
          overflow: 'hidden',
          background:
            'linear-gradient(135deg,#050d2b 0%,#0b1f4d 50%,#0e2d6a 100%)',
        }}
      >

        {/* 🔥 Animated Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            animation: 'gridMove 25s linear infinite',
            zIndex: 0,
          }}
        />

        {/* 🔥 Glow blobs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-120px',
            width: 350,
            height: 350,
            background: '#2196F3',
            filter: 'blur(140px)',
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-150px',
            width: 400,
            height: 400,
            background: '#6c5ce7',
            filter: 'blur(160px)',
          }}
        />

        {/* 🔥 CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >

          {/* TOP PILL */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '8px 18px',
              borderRadius: 50,
              background: 'rgba(255,255,255,.06)',
              border: '1px solid rgba(255,255,255,.12)',
              color: '#9fb3ff',
              fontSize: 13,
              marginBottom: 20,
              backdropFilter: 'blur(8px)',
            }}
          >
            🚀 Talk to our Experts
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(30px,4vw,52px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
           {title} <br />
            <span
              style={{
                background:
                  'linear-gradient(90deg,#2196F3,#00e5ff)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {highlight}
            </span>
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              color: 'rgba(255,255,255,.65)',
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 700,
              margin: '0 auto 40px',
            }}
          >
          {description}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 14,
              flexWrap: 'wrap',
            }}
          >

            {/* CALL BUTTON */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919900566466"
              style={{
                padding: '14px 26px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,.2)',
                color: '#fff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backdropFilter: 'blur(6px)',
              }}
            >
              <FaPhoneAlt /> Call Now
            </motion.a>

            {/* PRIMARY BUTTON */}
            <motion.button
            onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
                padding: '14px 32px',
                borderRadius: 10,
                border: 'none',
                background: 'linear-gradient(90deg,#2196F3,#00e5ff)',
                color: '#fff',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 10px 30px rgba(33,150,243,.4)',
                cursor: 'pointer',
            }}
            >
            <MdRocketLaunch /> Request Free Quote
            </motion.button>

          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
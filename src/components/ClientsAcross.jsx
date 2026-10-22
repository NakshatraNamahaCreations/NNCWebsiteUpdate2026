'use client'

import { motion } from 'framer-motion'
import {
  FaRocket,
  FaShoppingCart,
  FaBuilding,
  FaHeartbeat,
  FaGraduationCap,
  FaPlane,
  FaLaptopCode,
  FaIndustry,
} from 'react-icons/fa'

const clients = [
  { icon: FaRocket, title: 'Startups & SMEs' },
  { icon: FaShoppingCart, title: 'E-commerce Brands' },
  { icon: FaBuilding, title: 'Real Estate Companies' },
  { icon: FaHeartbeat, title: 'Healthcare & Diagnostics' },
  { icon: FaGraduationCap, title: 'Education & Training' },
  { icon: FaPlane, title: 'Hospitality & Travel' },
  { icon: FaLaptopCode, title: 'IT & Tech Enterprises' },
  { icon: FaIndustry, title: 'Manufacturing & Industrial' },
]

export default function ClientsAcross() {
  return (
    <section
      style={{
        padding: '50px 0',
        background: '#f8fbff',
        position: 'relative',
      }}
    >
      {/* subtle texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(0,0,0,.04) 1px,transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: 'auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(28px,4vw,40px)',
            fontWeight: 800,
            color: '#0b1f4d',
            marginBottom: 60,
          }}
        >
          We Serve Clients Across
        </motion.h2>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 30,
          }}
        >
          {clients.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover="hover"
                style={{
                  position: 'relative',
                  padding: '32px 20px',
                  borderRadius: 20,
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,.06)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: `
  0 8px 20px rgba(0,0,0,0.06),
  0 20px 40px rgba(0,0,0,0.08),
  0 40px 80px rgba(0,0,0,0.10),
  inset 0 1px 0 rgba(255,255,255,0.6)
`
                }}
              >
                {/* HOVER GLOW */}
                <motion.div
                  variants={{
                    hover: { opacity: 1, scale: 1.2 },
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(circle at center, rgba(33,150,243,.15), transparent 70%)',
                    zIndex: 0,
                  }}
                />

                {/* ICON */}
                <motion.div
                  variants={{
                    hover: { y: -8, rotate: 6 },
                  }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{
                    width: 70,
                    height: 70,
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg,#2196F3,#00c6ff)',
                    color: '#fff',
                    fontSize: 26,
                    boxShadow: '0 10px 30px rgba(33,150,243,.35)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Icon />
                </motion.div>

                {/* TITLE */}
                <motion.h4
                  variants={{
                    hover: { y: -3 },
                  }}
                  style={{
                    color: '#0b1f4d',
                    fontSize: 15.5,
                    fontWeight: 600,
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {item.title}
                </motion.h4>

                {/* BORDER GLOW */}
                <motion.div
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  initial={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 20,
                    border:
                      '1px solid rgba(33,150,243,.3)',
                    zIndex: 1,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
'use client';

import { motion } from 'framer-motion';

export function EraIntro() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="watermark select-none pointer-events-none"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(4rem, 18vw, 14rem)',
          fontFamily: 'var(--font-serif), serif',
          fontWeight: 300,
          color: '#000',
          opacity: 0.04,
          whiteSpace: 'nowrap',
          zIndex: 0,
          letterSpacing: '0.1em',
        }}
      >
        IX MISSIONS
      </div>

      <div
        className="relative z-10 section-padding"
        style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="chapter-label mb-6"
                style={{
                  color: 'var(--color-grey-light)',
                }}
              >
                CHAPTER II
              </p>

              <h2
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  color: '#000',
                  marginBottom: '1.5rem',
                }}
              >
                WELCOME
                <br />
                TO THE
                <br />
                <span className="relative inline-block">
                  <span style={{ fontStyle: 'italic' }}>ERA</span>
                  <svg
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '110%',
                      height: '130%',
                      overflow: 'visible',
                    }}
                    viewBox="0 0 100 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <ellipse
                      cx="50"
                      cy="25"
                      rx="52"
                      ry="27"
                      stroke="#000"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: '340',
                        strokeDashoffset: '340',
                        animation: 'drawEllipse 1.2s ease forwards 0.6s',
                      }}
                    />
                  </svg>
                </span>
                <br />
                OF
                <br />
                SAFE&apos;ETHICS
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-6"
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: 'var(--color-charcoal)',
                }}
              >
                Neuf missions. Un seul objectif : construire une culture de
                sécurité qui libère l&apos;innovation plutôt qu&apos;elle ne la
                freine. Chaque mission est déclinée en plans d&apos;action
                concrets sur 4 horizons temporels.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'var(--color-grey)',
                }}
              >
                Du diagnostic initial à la certification ISO 45001, de la
                digitalisation du reporting à l&apos;innovation pédagogique —
                voici comment je compte contribuer à l&apos;excellence EHS de
                L&apos;Oréal Recherche &amp; Innovation.
              </p>

              <div
                className="grid grid-cols-3 gap-4 pt-4"
                style={{ borderTop: '1px solid var(--color-warm-grey)', marginLeft: '2cm' }}
              >
                {[
                  { number: '9', label: 'Missions' },
                  { number: '4', label: 'Horizons' },
                  { number: '108', label: 'Actions' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 300,
                        lineHeight: 1,
                        color: '#C8A97E',
                      }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="text-label mt-1"
                      style={{ color: 'var(--color-grey-light)' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawEllipse {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}

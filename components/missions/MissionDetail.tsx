'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mission } from '@/src/data/missions';

interface MissionDetailProps {
  mission: Mission;
}

export function MissionDetail({ mission }: MissionDetailProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mission.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{ background: 'var(--color-cream)' }}
      >
        <div
          style={{
            maxWidth: 'var(--container-xl)',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 6vw, 4rem) var(--section-padding-x)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <p
                  className="mission-label mb-3"
                  style={{ color: 'var(--color-grey-light)' }}
                >
                  MISSION {String(mission.id).padStart(2, '0')}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                    fontWeight: 400,
                    color: '#000',
                    lineHeight: 1.15,
                    marginBottom: '0.4rem',
                  }}
                >
                  {mission.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--color-grey)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {mission.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--text-body-leading)',
                    color: 'var(--color-charcoal)',
                    marginBottom: '2rem',
                  }}
                >
                  {mission.description}
                </p>

                <div
                  style={{
                    background: 'var(--color-warm-grey)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <p
                    className="text-label mb-3"
                    style={{ color: 'var(--color-grey-dark)' }}
                  >
                    ENJEUX
                  </p>
                  <ul className="space-y-2">
                    {mission.context.enjeux.map((enjeu, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'var(--font-sans), sans-serif',
                          fontSize: '0.9375rem',
                          color: 'var(--color-charcoal)',
                          paddingLeft: '1rem',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: '#000',
                          }}
                        >
                          —
                        </span>
                        {enjeu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className="text-label mb-3"
                    style={{ color: 'var(--color-grey-dark)' }}
                  >
                    BESOINS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mission.context.besoins.map((besoin, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-sans), sans-serif',
                          fontSize: '0.8125rem',
                          color: '#000',
                          border: '1px solid #000',
                          padding: '0.3rem 0.75rem',
                          display: 'inline-block',
                          lineHeight: 1.4,
                        }}
                      >
                        {besoin}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderLeft: '3px solid #000',
                }}
              >
                <p
                  className="text-label mb-3"
                  style={{ color: 'var(--color-grey-dark)' }}
                >
                  MON EXPÉRIENCE
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    color: 'var(--color-charcoal)',
                  }}
                >
                  {mission.myExperience}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

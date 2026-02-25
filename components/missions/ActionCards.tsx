'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mission, Horizon } from '@/src/data/missions';

interface ActionCardsProps {
  mission: Mission;
  horizon: Horizon;
}

export function ActionCards({ mission, horizon }: ActionCardsProps) {
  const actions = mission.actions[Number(horizon) as 30 | 90 | 180 | 365];

  const horizonLabel: Record<Horizon, string> = {
    '30': '30 JOURS',
    '90': '90 JOURS',
    '180': '180 JOURS',
    '365': '365 JOURS',
  };

  return (
    <div
      style={{
        background: '#fff',
        padding: 'clamp(3rem, 6vw, 5rem) var(--section-padding-x)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p
            className="text-label mb-1"
            style={{ color: 'var(--color-grey-light)' }}
          >
            PLAN D&apos;ACTION
          </p>
          <h4
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: '#000',
            }}
          >
            Mission {String(mission.id).padStart(2, '0')} —{' '}
            <em>{horizonLabel[horizon]}</em>
          </h4>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${mission.id}-${horizon}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {actions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  background: 'var(--color-cream)',
                  borderLeft: '3px solid #000',
                  padding: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#000',
                    lineHeight: 1.4,
                    marginBottom: '1rem',
                  }}
                >
                  {item.action}
                </p>

                <div
                  style={{
                    borderTop: '1px solid var(--color-warm-grey)',
                    paddingTop: '0.875rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <p
                    className="text-label mb-1"
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--color-grey-light)',
                    }}
                  >
                    LIVRABLE
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--color-grey-dark)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.deliverable}
                  </p>
                </div>

                <div>
                  <p
                    className="text-label mb-1"
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--color-grey-light)',
                    }}
                  >
                    KPI
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: '#000',
                      border: '1px solid #000',
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {item.kpi}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

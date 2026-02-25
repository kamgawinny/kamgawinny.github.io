'use client';

import { motion } from 'framer-motion';
import { missions } from '@/src/data/missions';

interface MissionGridProps {
  activeMissionId: number;
  onSelect: (id: number) => void;
}

export function MissionGrid({ activeMissionId, onSelect }: MissionGridProps) {
  return (
    <div className="bg-white" style={{ paddingBottom: 0 }}>
      <div
        style={{
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          padding: '0 var(--section-padding-x)',
          paddingBottom: '2rem',
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid var(--color-warm-grey)',
          }}
        >
          {missions.map((mission, index) => {
            const isActive = mission.id === activeMissionId;
            return (
              <motion.button
                key={mission.id}
                onClick={() => onSelect(mission.id)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                aria-pressed={isActive}
                className="text-left transition-all"
                style={{
                  padding: 'clamp(1rem, 2vw, 1.5rem)',
                  background: isActive ? '#000' : '#fff',
                  borderRight:
                    (index + 1) % 3 !== 0
                      ? '1px solid var(--color-warm-grey)'
                      : 'none',
                  borderBottom:
                    index < 6 ? '1px solid var(--color-warm-grey)' : 'none',
                  transition: 'background 0.25s ease, color 0.25s ease',
                  cursor: 'pointer',
                  outline: 'none',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      'var(--color-cream)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      '#fff';
                  }
                }}
              >
                <span
                  className="block"
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    color: isActive
                      ? 'rgba(255,255,255,0.5)'
                      : 'var(--color-grey-light)',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {String(mission.id).padStart(2, '0')}
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 'clamp(0.7rem, 1.2vw, 0.875rem)',
                    fontWeight: 500,
                    color: isActive ? '#fff' : 'var(--color-grey-dark)',
                    lineHeight: 1.3,
                  }}
                >
                  {mission.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

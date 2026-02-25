'use client';

import { motion } from 'framer-motion';
import { Horizon, HORIZONS } from '@/src/data/missions';

const horizonLabels: Record<Horizon, { days: string; label: string; description: string }> = {
  '30': {
    days: '30',
    label: 'JOURS',
    description: 'Diagnostic, immersion, premiers jalons',
  },
  '90': {
    days: '90',
    label: 'JOURS',
    description: 'Structuration, déploiement pilotes, livraisons clés',
  },
  '180': {
    days: '180',
    label: 'JOURS',
    description: 'Généralisation, consolidation, montée en puissance',
  },
  '365': {
    days: '365',
    label: 'JOURS',
    description: 'Excellence, certification, impact mesurable',
  },
};

interface HorizonSelectorProps {
  activeHorizon: Horizon;
  onSelect: (horizon: Horizon) => void;
}

export function HorizonSelector({ activeHorizon, onSelect }: HorizonSelectorProps) {
  return (
    <div style={{ background: '#000', padding: 'clamp(3rem, 7vw, 5rem) var(--section-padding-x)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            CHOISISSEZ VOTRE HORIZON
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Sélectionnez une période pour afficher le plan d&apos;action correspondant
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {HORIZONS.map((horizon, index) => {
            const isActive = horizon === activeHorizon;
            const info = horizonLabels[horizon];
            return (
              <motion.button
                key={horizon}
                onClick={() => onSelect(horizon)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                aria-selected={isActive}
                style={{
                  padding: '1.75rem 1.25rem',
                  border: isActive ? '1px solid #fff' : '1px solid rgba(255,255,255,0.18)',
                  background: isActive ? '#fff' : 'transparent',
                  color: isActive ? '#000' : '#fff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  outline: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.borderColor = 'rgba(255,255,255,0.7)';
                    btn.style.background = 'rgba(255,255,255,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.borderColor = 'rgba(255,255,255,0.18)';
                    btn.style.background = 'transparent';
                  }
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: isActive ? '#000' : '#fff',
                    marginBottom: '0.2rem',
                  }}
                >
                  {info.days}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    color: isActive ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {info.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    color: isActive ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.6)',
                  }}
                >
                  {info.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

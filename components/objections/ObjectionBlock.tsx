'use client';

import { motion } from 'framer-motion';
import { StatNumber } from './StatNumber';

interface ObjectionBlockProps {
  index: number;
  objection: string;
  stat: number;
  statPrefix?: string;
  statSuffix?: string;
  statDecimals?: number;
  rebuttalHeadline: string;
  proof: string;
  dark?: boolean;
}

export function ObjectionBlock({
  index,
  objection,
  stat,
  statPrefix,
  statSuffix,
  statDecimals,
  rebuttalHeadline,
  proof,
  dark = false,
}: ObjectionBlockProps) {
  const bg = dark ? 'bg-black' : index % 2 === 0 ? 'bg-cream' : 'bg-white';
  const borderColor = dark ? 'border-white/10' : 'border-[var(--color-grey-lighter)]';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.6 }}
      className={`${bg} section-padding relative overflow-hidden`}
    >
      {dark && (
        <div
          className="watermark select-none pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 text-white"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-8 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-label ${dark ? 'text-white/40' : 'text-[var(--color-grey-light)]'}`}
            >
              OBJECTION {String(index + 1).padStart(2, '0')}
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-h2 italic leading-relaxed border-l-2 pl-6 ${
                dark
                  ? 'text-white/30 border-white/20'
                  : 'text-[var(--color-grey)] border-[var(--color-grey-lighter)]'
              }`}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "{objection}"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={`h-px origin-left ${dark ? 'bg-white/20' : 'bg-[var(--color-grey-lighter)]'}`}
            />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className={`text-h1 leading-tight ${dark ? 'text-white' : 'text-black'}`}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {rebuttalHeadline}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className={`text-body leading-relaxed max-w-xl ${dark ? 'text-white/60' : 'text-[var(--color-grey)]'}`}
            >
              {proof}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:text-right relative z-10"
          >
            <StatNumber
              value={stat}
              prefix={statPrefix}
              suffix={statSuffix}
              decimals={statDecimals}
              light={dark}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

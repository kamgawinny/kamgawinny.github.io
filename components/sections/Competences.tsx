'use client';

import { motion } from 'framer-motion';
import { SkillColumn } from '@/components/competences/SkillColumn';
import { competencesData } from '@/src/data/competences';

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export function Competences() {
  return (
    <section id="competences" className="relative bg-[var(--color-cream)] overflow-hidden">
      <div
        className="watermark select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{ opacity: '0.06' }}
      >
        Excellence
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="chapter-label text-[var(--color-grey-light)] mb-6"
          >
            CHAPTER IV
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
            <motion.h2
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-chapter leading-none"
            >
              COMPÉTENCES
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <p className="text-grey leading-relaxed">
                L'expertise technique au service de l'excellence EHS
              </p>
              <p className="text-grey-light text-sm leading-relaxed">
                Quatre dimensions alignées sur les qualités comportementales recherchées par L'Oréal R&I.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: '1px solid var(--color-grey-lighter)' }}
          >
            {competencesData.map((item, index) => (
              <div
                key={item.id}
                className={[
                  'border-b md:border-b-0',
                  index % 2 === 0 && index < competencesData.length - 1 ? 'md:border-r' : '',
                  index < competencesData.length - 1 ? 'lg:border-r lg:border-b-0' : '',
                  index === 1 ? 'md:border-r-0' : '',
                  index === 2 && 'md:border-t md:border-r-0 lg:border-t-0 lg:border-r',
                  index === 3 && 'md:border-t lg:border-t-0',
                ].filter(Boolean).join(' ')}
                style={{ borderColor: 'var(--color-grey-lighter)' }}
              >
                <SkillColumn {...item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

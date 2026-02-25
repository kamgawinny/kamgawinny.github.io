'use client';

import { motion } from 'framer-motion';
import { adnData } from '@/src/data/adn';
import { QualityCard } from '@/components/adn/QualityCard';

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export function MonADN() {
  return (
    <section id="mon-adn" className="relative bg-[var(--color-cream)] overflow-hidden">
      <div
        className="watermark select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{ opacity: '0.04', fontSize: 'clamp(8rem, 28vw, 22rem)' }}
      >
        ADN
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
            CHAPTER V
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
            <motion.h2
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-chapter leading-none"
            >
              THE{' '}
              <em className="text-accent">HUMAN</em>
              <br />
              FACTOR
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <p className="text-grey leading-relaxed">
                Ce qui me définit au-delà des compétences techniques
              </p>
              <p className="text-grey-light text-sm leading-relaxed">
                Les 4 qualités comportementales recherchées par L'Oréal R&I — illustrées par des preuves concrètes issues de mon parcours.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {adnData.map((quality, index) => (
            <QualityCard
              key={quality.id}
              data={quality}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

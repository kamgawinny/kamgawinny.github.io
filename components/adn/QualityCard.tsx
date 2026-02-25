'use client';

import { motion } from 'framer-motion';
import { QualityData, SectorItem, FlowStep, LevelItem, CreationItem } from '@/src/data/adn';

interface QualityCardProps {
  data: QualityData;
  index: number;
}

export function QualityCard({ data, index }: QualityCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`relative border-l-[3px] border-black ${isEven ? 'bg-white' : 'bg-[var(--color-warm-grey)]'}`}
      style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? 'lg:[direction:rtl]' : ''}`}>

        <div className={!isEven ? 'lg:[direction:ltr]' : ''}>
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-label text-[var(--color-grey-light)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {data.number}
            </span>
            <div className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
            <h3
              className="text-sm font-semibold tracking-[0.08em] text-black uppercase"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {data.title}
            </h3>
          </div>

          <svg
            viewBox="0 0 120 10"
            className="w-24 h-2.5 mb-5 text-[var(--color-grey-lighter)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M0,5 Q30,0 60,5 T120,5" />
          </svg>

          <p
            className="text-[var(--color-grey-dark)] mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.5,
            }}
          >
            &laquo;&nbsp;{data.tagline}&nbsp;&raquo;
          </p>

          <div className="space-y-4">
            {data.description.map((para, i) => (
              <p
                key={i}
                className="text-[var(--color-grey)] leading-relaxed"
                style={{ fontSize: 'var(--text-body)' }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className={`space-y-6 ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
          {data.visual.type === 'sectors' && data.visual.sectors && (
            <SectorsVisual data={data.visual.sectors} />
          )}
          {data.visual.type === 'flow' && data.visual.flow && (
            <FlowVisual steps={data.visual.flow.steps} />
          )}
          {data.visual.type === 'levels' && data.visual.levels && (
            <LevelsVisual data={data.visual.levels} />
          )}
          {data.visual.type === 'creations' && data.visual.creations && (
            <CreationsVisual data={data.visual.creations} />
          )}

          {data.stat && (
            <div className="pt-5 border-t border-[var(--color-grey-lighter)]">
              <span
                className="block leading-none font-light text-black"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                }}
              >
                {data.stat.value}
              </span>
              <svg
                viewBox="0 0 80 12"
                className="w-16 h-3 my-2 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M0,8 Q20,0 40,8 T80,8" />
              </svg>
              <span
                className="text-[var(--color-grey)] text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {data.stat.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SectorsVisual({ data }: { data: SectorItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {data.map((sector, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex flex-col gap-1 p-4 border border-[var(--color-grey-lighter)] bg-white hover:-translate-y-0.5 transition-transform duration-300"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest text-black"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {sector.name}
          </span>
          <span
            className="text-[var(--color-grey)] text-sm"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            {sector.company}
          </span>
          <span className="text-[var(--color-grey-light)] text-xs mt-auto">
            {sector.period}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function FlowVisual({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="border border-[var(--color-grey-lighter)] bg-white p-5">
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex flex-col items-center text-center min-w-0 flex-1">
              <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center mb-2 flex-shrink-0">
                <span
                  className="text-xs font-bold text-black"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <span
                className="text-xs font-semibold text-black uppercase tracking-wide leading-tight"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {step.label}
              </span>
              <span className="text-[var(--color-grey-light)] text-xs mt-1 leading-tight">
                {step.desc}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="text-[var(--color-grey-lighter)] text-xl flex-shrink-0 font-light">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-[var(--color-grey-lighter)] flex items-center gap-2">
        <div className="w-full h-px bg-[var(--color-grey-lighter)] relative">
          <div className="absolute inset-y-0 left-0 w-3/4 bg-black h-px" />
        </div>
        <span className="text-[var(--color-grey-light)] text-xs whitespace-nowrap">
          Pipeline EHS
        </span>
      </div>
    </div>
  );
}

function LevelsVisual({ data }: { data: LevelItem[] }) {
  return (
    <div className="space-y-2">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex gap-4 p-4 bg-white border-l-2 border-black"
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest text-black w-20 flex-shrink-0 pt-0.5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {item.level}
          </span>
          <span className="text-[var(--color-grey)] text-sm leading-relaxed">
            {item.content}
          </span>
        </motion.div>
      ))}
      <div className="flex items-center justify-center gap-4 pt-3">
        {data.map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div
              className="w-2 h-2 rounded-full bg-black"
              style={{ opacity: 1 - i * 0.25 }}
            />
            {i < data.length - 1 && (
              <div className="w-8 h-px bg-[var(--color-grey-lighter)]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreationsVisual({ data }: { data: CreationItem[] }) {
  return (
    <div className="border border-[var(--color-grey-lighter)] bg-white">
      <div className="px-5 py-3 border-b border-[var(--color-grey-lighter)]">
        <span
          className="text-[var(--color-grey-light)] text-xs font-semibold uppercase tracking-[0.15em]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Mes créations
        </span>
      </div>
      <div className="divide-y divide-[var(--color-grey-lighter)]">
        {data.map((creation, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex gap-3 px-5 py-4"
          >
            <span className="text-black font-medium flex-shrink-0 mt-0.5">→</span>
            <div className="min-w-0">
              <span
                className="block text-sm font-semibold text-black mb-1 leading-snug"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {creation.title}
              </span>
              <span className="block text-xs text-[var(--color-grey)] leading-relaxed">
                {creation.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

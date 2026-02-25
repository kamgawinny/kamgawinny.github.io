'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { CompetenceItem } from '@/src/data/competences';

interface SkillColumnProps extends CompetenceItem {
  index: number;
}

function StatCurve() {
  return (
    <svg
      viewBox="0 0 80 12"
      aria-hidden="true"
      style={{ width: '80px', height: '12px' }}
      className="text-[var(--color-grey-light)]"
    >
      <path
        d="M0 8 Q20 0, 40 8 T80 8"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function AnimatedStat({ numericValue, prefix, suffix }: { numericValue: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <span
      ref={ref}
      className="leading-none font-light tabular-nums text-black"
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      }}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: 'easeOut' as const,
    },
  }),
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (skillIndex: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.3 + skillIndex * 0.05,
      ease: 'easeOut' as const,
    },
  }),
};

export function SkillColumn({
  id,
  tagline,
  taglineDescription,
  title,
  subtitle,
  skills,
  stat,
  proof,
  index,
}: SkillColumnProps) {
  return (
    <motion.div
      custom={index}
      variants={columnVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5% 0px' }}
      className="flex flex-col px-6 py-8 lg:px-7 lg:py-10"
    >
      <span
        className="text-label text-[var(--color-grey-light)] mb-5 block"
      >
        {id}
      </span>

      <span
        className="block mb-1"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-black)',
        }}
      >
        {tagline}
      </span>

      <p
        className="mb-5"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          color: 'var(--color-grey-light)',
          lineHeight: 1.4,
        }}
      >
        {taglineDescription}
      </p>

      <h3
        className="leading-none mb-0"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 600,
          color: 'var(--color-black)',
        }}
      >
        {title}
      </h3>

      <span
        className="mb-5 block"
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--color-grey)',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        }}
      >
        {subtitle.split('&').map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'normal' }}>&</span>
            </span>
          ) : part
        )}
      </span>

      <div
        className="mb-6"
        style={{
          borderTop: '1px solid var(--color-grey-lighter)',
          width: '40px',
        }}
      />

      <ul className="flex-1 space-y-2 mb-8">
        {skills.map((skill, skillIndex) => (
          <motion.li
            key={skillIndex}
            custom={skillIndex}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-start gap-2 group cursor-default"
          >
            <span
              className="mt-0.5 shrink-0 transition-colors duration-200"
              style={{
                color: 'var(--color-grey-light)',
                fontSize: '0.75rem',
                lineHeight: '1.6',
              }}
            >
              –
            </span>
            <span
              className="transition-all duration-200 group-hover:translate-x-1 group-hover:text-black"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--color-grey-dark)',
                lineHeight: 1.6,
              }}
            >
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex flex-col items-start mb-1">
          <AnimatedStat
            numericValue={stat.numericValue}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        </div>

        <div className="mb-1">
          <StatCurve />
        </div>

        <p
          className="mb-5"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'var(--color-grey)',
          }}
        >
          {stat.label}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontStyle: 'italic',
            fontSize: '0.8rem',
            color: 'var(--color-grey-light)',
            lineHeight: 1.5,
          }}
        >
          {proof}
        </p>
      </div>
    </motion.div>
  );
}

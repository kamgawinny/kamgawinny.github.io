'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  light?: boolean;
}

export function StatNumber({ value, prefix = '', suffix = '', decimals = 0, light = false }: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <span
      ref={ref}
      className={`text-stat leading-none font-light tabular-nums ${light ? 'text-white' : 'text-black'}`}
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

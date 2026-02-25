'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Menu } from 'lucide-react';

interface SidebarProps {
  onChaptersClick: () => void;
}

export function Sidebar({ onChaptersClick }: SidebarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(Math.round(progress), 100));
    };

    const handleScroll = () => {
      calculateScrollProgress();
      setIsVisible(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex fixed left-0 top-0 bottom-0 w-16 bg-black z-50 flex-col items-center justify-between py-8"
      >
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleHomeClick}
            className="text-white hover:text-[var(--color-grey-light)] transition-colors p-2"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </button>

          <button
            onClick={onChaptersClick}
            className="text-white hover:text-[var(--color-grey-light)] transition-colors p-2"
            aria-label="Chapters"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center py-12">
          <div
            className="text-white text-[10px] tracking-[0.3em] uppercase font-bold"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            MA VISION QEHS
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="text-white text-[9px] tracking-wider text-center leading-tight">
            WINNY
            <br />
            KAMGA
          </div>

          <div className="relative w-12 h-12">
            <svg
              viewBox="0 0 60 60"
              className="transform -rotate-90"
            >
              <circle
                cx="30"
                cy="30"
                r="28"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <circle
                cx="30"
                cy="30"
                r="28"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                strokeDasharray={`${scrollProgress * 1.76} 176`}
                style={{ transition: 'stroke-dasharray 0.1s linear' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-medium">
              {scrollProgress}%
            </div>
          </div>
        </div>
      </motion.aside>

      <div className="md:ml-16" />
    </>
  );
}

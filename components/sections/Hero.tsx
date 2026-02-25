'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Microscope } from 'lucide-react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!reducedMotion && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [reducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="w-full grid md:grid-cols-2 gap-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#000',
          }}
        >
          {!reducedMotion && (
            <video
              ref={videoRef}
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero-poster.jpg"
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="https://res.cloudinary.com/da4sxrykl/video/upload/v1771512666/hero-lab.webm_ly62qh.webm" type="video/webm" />
              <source src="https://res.cloudinary.com/da4sxrykl/video/upload/v1771512665/hero-lab.mp4_zphf6b.mp4" type="video/mp4" />
            </video>
          )}

          <div className="absolute inset-0 bg-black/50 z-20" />

          <div className="relative z-30 w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-[var(--color-grey-lighter)] flex items-center justify-center">
                <Microscope className="w-12 h-12 text-[var(--color-grey-lighter)]" />
              </div>
              <p className="text-[var(--color-grey-light)] text-sm tracking-[0.3em] uppercase">
                Environnement laboratoire R&I
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative min-h-[50vh] md:min-h-screen bg-white flex items-center section-padding"
        >
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="chapter-label text-grey-light inline-block mb-6"
            >
              CHAPTER I
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-display mb-8 leading-[0.95]"
            >
              SAFETY IS A<br />
              <em className="text-accent">LIFE</em> STORY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-grey text-lg mb-8 max-w-xl leading-relaxed"
            >
              Une feuille de route concrète pour contribuer à l'excellence
              QEHS de L'Oréal Recherche & Innovation.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onClick={() => {
                document.getElementById('conviction')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="text-label inline-flex items-center gap-3 px-8 py-4 border border-black hover:bg-black hover:text-white transition-all duration-300 group"
            >
              DÉCOUVRIR LA VISION
              <span className="text-xl">⊞</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 text-caption text-grey-light tracking-wider"
            >
              Candidature Ingénieur QEHS • L'Oréal R&I
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-grey-light"
          >
            <span className="text-caption tracking-wider">SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

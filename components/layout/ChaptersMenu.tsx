'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ChaptersMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const chapters = [
  { id: 1, number: 'I', title: 'Introduction', anchor: 'hero' },
  { id: 2, number: 'II', title: 'Les 9 Missions', anchor: 'missions' },
  { id: 3, number: 'III', title: 'Transparence', anchor: 'objections' },
  { id: 4, number: 'IV', title: 'Compétences', anchor: 'competences' },
  { id: 5, number: 'V', title: 'Contact', anchor: 'contact' },
];

export function ChaptersMenu({ isOpen, onClose }: ChaptersMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChapterClick = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 md:left-16 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl"
          >
            <div className="h-full flex flex-col p-8 md:p-12">
              <div className="flex items-center justify-between mb-12">
                <h2 className="chapter-label text-grey-dark">CHAPTERS</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-cream rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1">
                <ol className="space-y-1">
                  {chapters.map((chapter, index) => (
                    <motion.li
                      key={chapter.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleChapterClick(chapter.anchor)}
                        className="w-full text-left py-4 px-6 hover:bg-cream transition-colors group"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-label text-grey-light group-hover:text-black transition-colors">
                            {chapter.number}.
                          </span>
                          <span className="text-h2 text-black group-hover:translate-x-2 transition-transform">
                            {chapter.title}
                          </span>
                        </div>
                      </button>
                    </motion.li>
                  ))}
                </ol>
              </nav>

              <div className="mt-auto pt-8 border-t border-[var(--color-grey-lighter)]">
                <p className="text-caption text-grey-light">
                  Candidature Ingénieur QEHS
                  <br />
                  L'Oréal Recherche & Innovation
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

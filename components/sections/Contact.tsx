'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle, Linkedin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' as const } },
};

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen grid md:grid-cols-2">
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="bg-black text-white section-padding flex items-center"
      >
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="chapter-label text-grey-light inline-block mb-6"
          >
            CHAPTER VI
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="text-chapter mb-8"
          >
            ACCORDEZ-MOI
            <br />
            <em className="text-accent md:-mt-8 md:block md:relative">30 MINUTES</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-grey-light leading-relaxed mb-8"
          >
            Je suis convaincu qu'un échange direct vous permettra de mesurer ma
            motivation, mon professionnalisme, et ma capacité à contribuer à
            l'excellence EHS de L'Oréal R&I.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.65, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="h-px bg-white/20 w-24"
          />
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="bg-cream section-padding flex items-center"
      >
        <div className="max-w-xl w-full">
          <div className="space-y-6 mb-10">
            <motion.a
              variants={itemVariants}
              href="mailto:kamga.winny@gmail.com"
              className="flex items-center gap-4 text-grey-dark hover:text-black transition-colors group"
            >
              <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg">kamga.winny@gmail.com</span>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="tel:+33659096091"
              className="flex items-center gap-4 text-grey-dark hover:text-black transition-colors group"
            >
              <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg">+33 6 59 09 60 91</span>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="https://www.linkedin.com/in/winnykamga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-grey-dark hover:text-black transition-colors group"
            >
              <Linkedin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg">linkedin.com/in/winnykamga</span>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-grey-dark"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">Disponible immédiatement</span>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="border-t border-grey-lighter pt-10"
          >
            <motion.a
              href="mailto:kamga.winny@gmail.com?subject=Suite%20candidature%20Ing%C3%A9nieur%20QEHS%20-%20Demande%20d'%C3%A9change"
              className="text-label inline-flex items-center gap-3 px-8 py-4 border border-black hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              PLANIFIER UN ÉCHANGE
              <motion.span
                className="text-xl"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

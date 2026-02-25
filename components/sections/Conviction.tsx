'use client';

import { motion } from 'framer-motion';

export function Conviction() {
  return (
    <section id="conviction" className="relative bg-cream section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          <div className="space-y-6">
            <p className="text-grey leading-relaxed">
              Beaucoup pensent que l'EHS est un frein à l'innovation. En
              réalité, ils ne regardent pas assez profondément. L'EHS est un
              besoin essentiel de la recherche depuis toujours.
            </p>
            <p className="text-grey leading-relaxed">
              Notre journée commence par des rituels de sécurité, et elle se
              termine par eux, nous permettant de nous connecter avec
              l'environnement de travail qui nous entoure.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-grey leading-relaxed">
              L'EHS, c'est bien plus qu'un simple besoin réglementaire. C'est
              aussi un sentiment d'appartenance. Nous pouvons suivre les
              standards de sécurité pour montrer notre engagement.
            </p>
            <p className="text-grey leading-relaxed">
              Pour moi chez L'Oréal, l'Éthique dans la sécurité est un
              engagement important — et ce que j'appelle le{' '}
              <strong>Safe'Ethics</strong> est quelque chose de profondément
              ancré dans ma culture.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-[var(--color-grey-lighter)]"
        >
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-h2 text-black font-bold">
              Ma mission est de{' '}
              <em className="text-accent font-bold italic" style={{ fontFamily: 'var(--font-serif)' }}>Créer la sécurité qui protège</em>
            </p>
            <footer className="mt-6 text-grey-light text-sm tracking-wider uppercase font-bold">
              Winny Kamga
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

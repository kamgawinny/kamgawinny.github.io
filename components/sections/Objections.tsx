'use client';

import { motion } from 'framer-motion';
import { ObjectionBlock } from '@/components/objections/ObjectionBlock';

const objections = [
  {
    objection: 'Vous manquez d\'expérience dans le secteur cosmétique et pharmaceutique.',
    stat: 7,
    statSuffix: ' ans',
    rebuttalHeadline: 'Sept ans à maîtriser les environnements les plus exigeants.',
    proof:
      'Industrie chimique, agroalimentaire, bâtiment : chaque secteur m\'a forgé une culture EHS multi-risques. Les exigences ISO 45001, la gestion des produits CMR et les protocoles d\'urgence ne connaissent pas les frontières sectorielles. L\'Oréal R&I bénéficiera d\'une perspective croisée qu\'un profil purement cosmétique ne peut pas apporter.',
    dark: false,
  },
  {
    objection: 'Votre parcours est trop éclectique — nous recherchons un spécialiste.',
    stat: 9,
    statSuffix: '/9',
    rebuttalHeadline: 'Chacune des 9 missions du poste, déjà exercée.',
    proof:
      'Système documentaire, audits, plans de prévention, formation, enquêtes d\'accidents, reporting digital — ce n\'est pas une projection, c\'est mon quotidien documenté. La polyvalence n\'est pas une faiblesse : c\'est exactement ce que demande un Ingénieur QEHS qui coordonne la sécurité d\'un site de R&I complet.',
    dark: true,
  },
  {
    objection: 'Nous cherchons quelqu\'un d\'immédiatement opérationnel, pas un stratège.',
    stat: 30,
    statSuffix: ' j',
    rebuttalHeadline: 'Opérationnel dès les 30 premiers jours — plan en main.',
    proof:
      'Audit de l\'existant, identification des écarts réglementaires, premières actions correctives : la feuille de route est prête avant même le premier jour. Chacune des 9 missions est déclinée sur 4 horizons : 30, 90, 180 et 365 jours. L\'excellence ne s\'improvise pas — elle se planifie.',
    dark: false,
  },
];

export function Objections() {
  return (
    <section id="objections" className="relative">
      <div className="bg-warm-grey section-padding relative overflow-hidden">
        <div
          className="watermark select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          III
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="chapter-label text-grey-light mb-6"
          >
            CHAPTER III
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-chapter leading-none"
            >
              TRANS<em className="text-accent">PARENCE</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
            >
              <p className="text-grey leading-relaxed">
                Trois objections que vous vous posez peut-être. Trois réponses directes, chiffrées, sans esquive.
              </p>
              <p className="text-grey-light text-sm leading-relaxed">
                Parce que la transparence est le premier acte de confiance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {objections.map((item, index) => (
        <ObjectionBlock
          key={index}
          index={index}
          objection={item.objection}
          stat={item.stat}
          statSuffix={item.statSuffix}
          rebuttalHeadline={item.rebuttalHeadline}
          proof={item.proof}
          dark={item.dark}
        />
      ))}

      <div className="bg-black section-padding relative overflow-hidden">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <p
            className="text-h1 text-white leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            La meilleure garantie que je puisse offrir,{' '}
            <em className="text-accent opacity-80">c'est la preuve par l'acte.</em>
          </p>
          <footer className="mt-8 text-label text-white/40 tracking-wider">
            WINNY KAMGA — CANDIDAT INGÉNIEUR QEHS
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

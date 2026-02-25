# Ma Vision QEHS pour L'Oréal R&I

Site de candidature premium pour le poste d'Ingénieur QEHS à L'Oréal Recherche & Innovation.

## 🎯 Objectif

Présenter une feuille de route concrète et détaillée démontrant ma compréhension approfondie des enjeux EHS de L'Oréal R&I, avec des plans d'action précis sur 4 horizons temporels pour chacune des 9 missions du poste.

## ✨ Caractéristiques

- **Design Premium** : Inspiré du style éditorial de L'Oréal avec typographie expressive et palette monochrome élégante
- **Navigation Immersive** : Sidebar verticale fixe avec progression de scroll en temps réel
- **Storytelling en Chapitres** : Structure narrative en 5 chapitres pour une expérience engageante
- **Animations Fluides** : Transitions et effets au scroll avec Framer Motion
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance** : Built avec Next.js 14 pour des temps de chargement optimaux

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS avec variables CSS personnalisées
- **Animations** : Framer Motion
- **Typographie** : Playfair Display & DM Sans (Google Fonts)
- **Icons** : Lucide React
- **Language** : TypeScript

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en mode production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout principal avec polices
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux et variables CSS
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Navigation principale
│   │   ├── Sidebar.tsx     # Sidebar verticale fixe
│   │   ├── ChaptersMenu.tsx # Menu des chapitres
│   │   └── Footer.tsx      # Footer minimaliste
│   └── sections/
│       ├── Hero.tsx        # Section hero split-screen
│       ├── Conviction.tsx  # Section "Ma Conviction"
│       └── Contact.tsx     # Section contact/CTA
└── src/
    └── data/
        └── missions.ts     # Données des 9 missions
```

## 🎨 Design System

### Palette de Couleurs

- **Noir** : #000000 (textes principaux et accents)
- **Crème** : #F5F3EF (sections claires)
- **Gris Chaud** : #E8E4DC (statistiques)
- **Gris** : #6B6B6B (corps de texte)

### Typographie

- **Serif (Titres)** : Playfair Display
- **Sans (Corps)** : DM Sans
- **Hiérarchie** : 6 niveaux avec clamp() pour le responsive

### Espacements

- Système généreux style magazine (0.5rem à 12rem)
- Sections avec padding clamp(4rem, 10vh, 8rem)

## 📄 Contenu

### Les 5 Chapitres

1. **Introduction** : Hero + Ma Conviction sur le Safe'Ethics
2. **Les 9 Missions** : Plans d'action détaillés sur 4 horizons (30/90/180/365 jours)
3. **Transparence** : Réponses aux 3 objections RH
4. **Compétences** : 4 domaines d'expertise clés
5. **Contact** : CTA et coordonnées

### Les 9 Missions

1. Conformité & Standards EHS (ISO 45001)
2. Système Documentaire
3. Organisation Qualité
4. Formation & Sensibilisation
5. Enquêtes & Analyses de Risques
6. Audits & Plans d'Actions
7. Plans de Prévention (Entreprises Extérieures)
8. Reporting & Digitalisation
9. Amélioration Continue

## 🚀 Déploiement

Le site est optimisé pour un déploiement sur Vercel, Netlify ou toute plateforme supportant Next.js.

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 📊 Performance

- **Lighthouse Score Cible** : > 90
- **First Contentful Paint** : < 1.5s
- **Time to Interactive** : < 3s

## 👤 Contact

**Winny KAMGA**
Candidat Ingénieur QEHS
L'Oréal Recherche & Innovation

- Email : kamga.winny@gmail.com
- Téléphone : +33 6 59 09 60 91
- LinkedIn : [linkedin.com/in/winnykamga](https://linkedin.com/in/winnykamga)

---

*Site créé avec passion pour démontrer ma vision concrète et mes compétences digitales au service de l'excellence EHS.*

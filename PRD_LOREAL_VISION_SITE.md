# PRD — Site de Candidature L'Oréal R&I
## "Ma Vision QEHS pour L'Oréal Recherche & Innovation"

---

## 📋 Table des matières

1. [Contexte & Objectifs](#1-contexte--objectifs)
2. [Public Cible](#2-public-cible)
3. [Positionnement & Ton](#3-positionnement--ton)
4. [Architecture du Site](#4-architecture-du-site)
5. [Design System](#5-design-system)
6. [Contenu Détaillé](#6-contenu-détaillé)
7. [Fonctionnalités Techniques](#7-fonctionnalités-techniques)
8. [Structure des Fichiers](#8-structure-des-fichiers)
9. [Assets & Ressources](#9-assets--ressources)
10. [Règles de Développement](#10-règles-de-développement)
11. [Déploiement](#11-déploiement)
12. [Critères de Succès](#12-critères-de-succès)

---

## 1. Contexte & Objectifs

### 1.1 Contexte

**Candidat** : Winny KAMGA, Ingénieur QEHS avec ~5 ans d'expérience
- Expérience récente : 18 mois à l'ONERA (laboratoires R&D aérospatiale)
- Expériences précédentes : Bouygues E&S, Bouygues International, Lafarge Holcim
- Formation : Mastère Spécialisé QSE-RSE (CESI), Mastère Risques Professionnels (IMT Nord Europe)

**Poste visé** : Ingénieur QEHS - L'Oréal Recherche & Innovation (Aulnay-sous-Bois)
- Département : QEHS & ETN (Qualité Environnement Hygiène Sécurité et Travaux Neufs)
- Prise de fonction : Mars 2026

**Situation** : Candidature refusée par les RH malgré un bon feeling avec la manager (Carla Rodrigues). Le candidat souhaite démontrer sa valeur ajoutée de manière audacieuse mais mesurée.

### 1.2 Objectifs du site

| Objectif | Priorité | Mesure de succès |
|----------|----------|------------------|
| Décrocher un entretien | P0 | Invitation à un échange |
| Démontrer la valeur ajoutée concrète | P0 | Compréhension des plans d'action |
| Laisser une impression mémorable | P1 | Mémorisation du profil |
| Prouver les compétences digitales | P1 | Qualité du site lui-même |
| Répondre aux objections RH | P1 | Traitement des freins identifiés |

### 1.3 Proposition de valeur unique

> "Un site interactif présentant une feuille de route détaillée pour chacune des 9 missions du poste, avec des plans d'action concrets sur 4 horizons temporels (30-90-180-365 jours), démontrant une compréhension approfondie des enjeux EHS de L'Oréal R&I."

---

## 2. Public Cible

### 2.1 Cibles primaires

#### Carla RODRIGUES — QEHS Manager Recherche Avancée
- **Rôle** : Manager direct du poste, décisionnaire opérationnel
- **Attentes** : Compétences techniques, fit culturel, capacité d'intégration
- **Points d'attention** : Expérience labo R&I, autonomie, innovation
- **Relation actuelle** : Bon feeling établi, a transmis la candidature aux RH

#### Pierre VOISIN — Recruteur RH
- **Rôle** : Décisionnaire RH, a envoyé le refus
- **Attentes** : Conformité aux critères, justification des écarts
- **Points d'attention** : 5 ans d'expérience, formation chimie/biologie
- **Relation actuelle** : A refusé la candidature

### 2.2 Cibles secondaires

- **Joel COCAGNE** — Directeur ETNEHS de la Recherche Avancée (a relayé un message du candidat)
- **Cyril MENARD** — Responsable ETN-S-EHS
- **Équipe EHS ETN** — Futurs collègues potentiels

### 2.3 Personas & Parcours utilisateur

**Scénario principal** :
1. Réception du lien par email/LinkedIn
2. Ouverture sur mobile ou desktop
3. Scroll rapide pour évaluer la pertinence (< 10 secondes)
4. Si intéressé : exploration des missions, plans d'action
5. Si convaincu : prise de contact (email, téléphone)

**Temps d'attention estimé** : 2-5 minutes maximum

---

## 3. Positionnement & Ton

### 3.1 Positionnement

- **Audacieux mais mesuré** : Prendre des initiatives sans paraître arrogant
- **Professionnel et premium** : À la hauteur de l'image L'Oréal
- **Concret et actionnable** : Plans d'action précis, pas de généralités
- **Confiant sans être présomptueux** : Démontrer sans imposer

### 3.2 Ton éditorial

| Caractéristique | Application |
|-----------------|-------------|
| **Assertif** | "Je suis convaincu de pouvoir contribuer..." |
| **Humble** | "Je comprends vos réserves, permettez-moi d'y répondre..." |
| **Passionné** | "Cette offre a été un véritable coup de cœur..." |
| **Précis** | Actions, livrables, KPIs mesurables |
| **L'Oréal-friendly** | Vocabulaire aligné (beauté, innovation, excellence) |

### 3.3 Messages clés

1. **"L'EHS doit être un accélérateur d'innovation, pas un frein."**
2. **"Protéger ceux qui créent la beauté de demain."**
3. **"Une feuille de route concrète pour chacune des 9 missions."**
4. **"Sérénité et créativité vont de pair."**

---

## 4. Architecture du Site

### 4.1 Structure des pages

```
/ (Single Page Application)
├── Hero Section
├── Section "Ma Conviction"
├── Section "Les 9 Missions" (interactive)
│   ├── Grille de sélection des missions
│   ├── Détail mission sélectionnée
│   │   ├── Description & Enjeux
│   │   ├── Sélecteur d'horizon (30/90/180/365)
│   │   └── Plans d'action détaillés
│   └── Mon expérience associée
├── Section "Réponse aux Objections"
├── Section "Compétences"
├── Section "Contact / CTA"
└── Footer
```

### 4.2 Navigation

- **Navigation fixe** : Logo/Nom + liens sections (Vision, Missions, Compétences, Contact)
- **Comportement scroll** : Background transparent → opaque au scroll
- **Smooth scroll** : Ancres avec défilement fluide
- **Mobile** : Menu hamburger ou navigation simplifiée

### 4.3 Responsive Design

| Breakpoint | Comportement |
|------------|--------------|
| Mobile (< 768px) | Stack vertical, grille missions 2 colonnes |
| Tablet (768-1024px) | Grille missions 3 colonnes |
| Desktop (> 1024px) | Layout complet, grille missions 9 colonnes |

---

## 5. Design System

### 5.1 Palette de couleurs

```css
:root {
  /* Couleurs principales */
  --color-black: #000000;
  --color-dark-grey: #1A1A1A;
  --color-gold: #C8A45C;
  --color-gold-light: #D4B86A;
  --color-gold-dark: #A6894A;
  
  /* Couleurs neutres */
  --color-white: #FFFFFF;
  --color-off-white: #F8F6F3;
  --color-cream: #FAF8F5;
  --color-grey: #6B6B6B;
  --color-grey-light: #E8E8E8;
  
  /* Couleurs fonctionnelles */
  --color-success: #4A7C59;
  --color-warning: #D4A84B;
  --color-error: #C44536;
}
```

### 5.2 Typographie

```css
/* Titres - Élégance et premium */
--font-heading: 'Playfair Display', Georgia, serif;

/* Corps et UI - Modernité et lisibilité */
--font-body: 'Montserrat', 'Helvetica Neue', sans-serif;

/* Hiérarchie typographique */
--text-hero: clamp(2.5rem, 7vw, 5rem);      /* Hero title */
--text-h1: clamp(2rem, 4vw, 3rem);           /* Section titles */
--text-h2: 1.8rem;                            /* Mission titles */
--text-h3: 1.2rem;                            /* Subsection titles */
--text-body: 1rem;                            /* Body text */
--text-small: 0.85rem;                        /* Labels, captions */
--text-xs: 0.75rem;                           /* Tags, metadata */

/* Espacement des lettres */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.1em;
--tracking-wider: 0.2em;
--tracking-widest: 0.3em;
```

### 5.3 Espacements

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
--space-5xl: 8rem;     /* 128px */
```

### 5.4 Effets & Animations

```css
/* Transitions */
--transition-fast: 0.2s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slower: 1s cubic-bezier(0.4, 0, 0.2, 1);

/* Ombres */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.08);
--shadow-gold: 0 4px 20px rgba(200, 164, 92, 0.2);

/* Bordures */
--border-subtle: 1px solid rgba(200, 164, 92, 0.2);
--border-accent: 3px solid var(--color-gold);
```

### 5.5 Composants UI

#### Boutons

```css
/* Bouton primaire */
.btn-primary {
  padding: 1.2rem 3rem;
  background-color: var(--color-gold);
  color: var(--color-black);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: var(--transition-base);
}

/* Bouton secondaire */
.btn-secondary {
  padding: 1.2rem 3rem;
  background-color: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  /* ... mêmes propriétés typographiques */
}

/* Bouton mission (grille) */
.btn-mission {
  padding: 1.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(200, 164, 92, 0.3);
  color: var(--color-white);
  text-align: center;
  transition: var(--transition-base);
}

.btn-mission.active {
  background-color: var(--color-gold);
  color: var(--color-black);
  border-color: var(--color-gold);
}
```

#### Cards

```css
/* Card mission détail */
.card-mission {
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(200, 164, 92, 0.2);
  padding: var(--space-2xl);
}

/* Card action */
.card-action {
  background-color: rgba(255, 255, 255, 0.05);
  padding: var(--space-lg);
  border-left: 3px solid var(--color-gold);
}

/* Card compétence */
.card-competence {
  background-color: var(--color-white);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
}
```

---

## 6. Contenu Détaillé

### 6.1 Hero Section

```yaml
headline_pre: "Candidature • Ingénieur QEHS • L'Oréal Recherche & Innovation"
headline_main: "Ma Vision pour"
headline_accent: "L'Excellence EHS"
subheadline: "Une feuille de route détaillée pour chacune des 9 missions du poste. Protéger ceux qui créent la beauté de demain."
cta_primary: 
  text: "Explorer les 9 missions"
  link: "#missions"
cta_secondary:
  text: "Me contacter"
  link: "#contact"
```

### 6.2 Section "Ma Conviction"

```yaml
section_label: "Ma conviction"
headline: "L'EHS doit être un accélérateur d'innovation, pas un frein."
content: |
  Après 18 mois au cœur des laboratoires R&D de l'ONERA, j'ai compris que l'EHS 
  n'est pas là pour ralentir les chercheurs, mais pour leur offrir un environnement 
  où sérénité et créativité vont de pair. Cette philosophie s'aligne parfaitement 
  avec la mission du département QEHS & ETN de L'Oréal R&I.

stats:
  - value: "9"
    label: "Missions analysées"
  - value: "36"
    label: "Plans d'action détaillés"
  - value: "4"
    label: "Horizons temporels"
  - value: "100+"
    label: "Actions concrètes"
```

### 6.3 Les 9 Missions — Contenu complet

#### Mission 1 : Conformité & Standards EHS (ISO 45001)

```yaml
id: 1
title: "Conformité & Standards EHS"
subtitle: "ISO 45001"
icon: "🏛️"
description: "Garantir le respect, l'application et la conformité des standards EHS en accord avec les exigences réglementaires et celles du groupe."

context:
  enjeux:
    - "Environnement R&I multi-risques : chimique, biologique, physique"
    - "Exigences réglementaires cosmétiques (REACH, CLP, ICPE)"
    - "Standards Groupe L'Oréal (SHAP, SIO, MESUR)"
    - "Objectif Zéro Accident aligné avec la politique mondiale"
  besoins:
    - "Veille réglementaire permanente"
    - "Traduction des exigences en actions terrain"
    - "Accompagnement des chercheurs sans freiner l'innovation"
    - "Harmonisation avec les autres entités du campus"

actions:
  "30":
    - action: "Cartographie complète des exigences réglementaires applicables"
      deliverable: "Matrice de conformité"
      kpi: "100% des textes identifiés"
    - action: "Audit flash du niveau de conformité actuel"
      deliverable: "Note de diagnostic"
      kpi: "Scoring initial établi"
    - action: "Rencontre des correspondants métiers R&I"
      deliverable: "Mapping des interlocuteurs"
      kpi: "100% des labos couverts"
  "90":
    - action: "Mise en place d'une veille réglementaire automatisée (IA)"
      deliverable: "Workflow de veille opérationnel"
      kpi: "Alertes J+1"
    - action: "Création d'un référentiel EHS unifié L'Oréal R&I"
      deliverable: "Manuel EHS digital"
      kpi: "Validation Direction"
    - action: "Déploiement des standards SHAP sur les laboratoires prioritaires"
      deliverable: "Grilles SHAP adaptées"
      kpi: "5 labos pilotes"
  "180":
    - action: "Généralisation des standards EHS à tous les laboratoires"
      deliverable: "Couverture totale"
      kpi: "100% des labos"
    - action: "Intégration des exigences dans les projets R&I dès la conception"
      deliverable: "Checklist projet EHS"
      kpi: "100% nouveaux projets"
    - action: "Préparation à la certification ISO 45001"
      deliverable: "Dossier de certification"
      kpi: "Gap analysis < 10%"
  "365":
    - action: "Audit blanc ISO 45001"
      deliverable: "Rapport d'audit"
      kpi: "Zéro non-conformité majeure"
    - action: "Benchmark avec les sites L'Oréal les plus performants"
      deliverable: "Best practices intégrées"
      kpi: "Top 3 campus"
    - action: "Certification ISO 45001 obtenue"
      deliverable: "Certificat"
      kpi: "Certification validée"

my_experience: "Pilotage du SME ISO 45001 à l'ONERA et chez Bouygues. Conformité réglementaire ICPE, audits internes et externes."
```

#### Mission 2 : Système Documentaire

```yaml
id: 2
title: "Système Documentaire"
subtitle: "Animation & Dynamisation"
icon: "📚"
description: "Dynamiser le système documentaire et l'animer en collaboration avec les managers et les correspondants métiers."

context:
  enjeux:
    - "Volume documentaire important en environnement R&I"
    - "Multiplicité des acteurs (chercheurs, techniciens, managers)"
    - "Besoin d'accessibilité et de simplicité"
    - "Obsolescence rapide des procédures en contexte d'innovation"
  besoins:
    - "Simplification et harmonisation des documents"
    - "Accessibilité digitale (SharePoint, QR codes)"
    - "Processus de mise à jour fluide"
    - "Appropriation par les équipes terrain"

actions:
  "30":
    - action: "Audit du système documentaire existant"
      deliverable: "État des lieux complet"
      kpi: "100% docs inventoriés"
    - action: "Identification des documents obsolètes/redondants"
      deliverable: "Liste de purge"
      kpi: "Taux d'obsolescence mesuré"
    - action: "Rencontre des managers et correspondants métiers"
      deliverable: "Besoins documentaires collectés"
      kpi: "100% services consultés"
  "90":
    - action: "Refonte de la structure documentaire (arborescence)"
      deliverable: "Nouvelle architecture"
      kpi: "Validation managers"
    - action: "Création de templates harmonisés L'Oréal R&I"
      deliverable: "Kit templates"
      kpi: "10 templates clés"
    - action: "Mise en place d'un SharePoint EHS optimisé"
      deliverable: "Plateforme opérationnelle"
      kpi: "Temps accès < 30s"
  "180":
    - action: "Déploiement du système documentaire digital"
      deliverable: "Plateforme généralisée"
      kpi: "100% docs migrés"
    - action: "Formation des correspondants à la gestion documentaire"
      deliverable: "Sessions formation"
      kpi: "100% formés"
    - action: "Mise en place d'alertes de révision automatiques"
      deliverable: "Workflow de révision"
      kpi: "Zéro doc obsolète"
  "365":
    - action: "Évaluation de l'adoption du système"
      deliverable: "Enquête satisfaction"
      kpi: "Satisfaction > 80%"
    - action: "Optimisation continue basée sur les retours"
      deliverable: "Améliorations V2"
      kpi: "5 améliorations/an"
    - action: "Intégration avec les autres entités du campus"
      deliverable: "Système unifié campus"
      kpi: "Interopérabilité"

my_experience: "Animation du système documentaire à l'ONERA et Bouygues. Création de SharePoint EHS, fiches sécurité, consignes simplifiées."
```

#### Mission 3 : Organisation Qualité

```yaml
id: 3
title: "Organisation Qualité"
subtitle: "Création & Structuration"
icon: "⭐"
description: "Participer à la création d'une organisation Qualité au sein du département QEHS & ETN."

context:
  enjeux:
    - "Environnement R&I exigeant en termes de qualité des process"
    - "Synergie EHS-Qualité pour une approche intégrée"
    - "Standards qualité cosmétiques (BPF, ISO 22716)"
    - "Traçabilité des activités de recherche"
  besoins:
    - "Définition des processus qualité clés"
    - "Intégration avec le système EHS existant"
    - "Outils de pilotage qualité adaptés R&I"
    - "Culture qualité partagée par les chercheurs"

actions:
  "30":
    - action: "Benchmark des organisations Qualité R&I existantes (Groupe)"
      deliverable: "Rapport benchmark"
      kpi: "5 sites benchmarkés"
    - action: "Identification des processus clés à documenter"
      deliverable: "Cartographie processus"
      kpi: "Processus critiques identifiés"
    - action: "Analyse des interfaces EHS-Qualité"
      deliverable: "Matrice d'interfaces"
      kpi: "Synergies identifiées"
  "90":
    - action: "Proposition d'organisation Qualité R&I"
      deliverable: "Projet d'organisation"
      kpi: "Validation Direction"
    - action: "Définition des rôles et responsabilités"
      deliverable: "Fiches de fonction"
      kpi: "RACI établi"
    - action: "Création des premiers processus qualité"
      deliverable: "3 processus documentés"
      kpi: "Processus validés"
  "180":
    - action: "Déploiement de l'organisation Qualité"
      deliverable: "Organisation opérationnelle"
      kpi: "Équipe en place"
    - action: "Mise en place d'indicateurs qualité"
      deliverable: "Dashboard Qualité"
      kpi: "KPIs définis"
    - action: "Formation des acteurs clés"
      deliverable: "Sessions formation"
      kpi: "100% formés"
  "365":
    - action: "Revue de direction Qualité"
      deliverable: "Bilan annuel"
      kpi: "Objectifs atteints"
    - action: "Audit de maturité de l'organisation"
      deliverable: "Scoring maturité"
      kpi: "Niveau cible atteint"
    - action: "Plan d'amélioration N+1"
      deliverable: "Feuille de route"
      kpi: "Actions priorisées"

my_experience: "Contribution au SMI chez Lafarge et Bouygues. Approche intégrée QSE. Mastère Spécialisé Management QSE-RSE (CESI)."
```

#### Mission 4 : Formation & Sensibilisation

```yaml
id: 4
title: "Formation & Sensibilisation"
subtitle: "Animation & Création"
icon: "🎓"
description: "Participer à l'animation et/ou à la création de formations EHS adaptées au contexte R&I."

context:
  enjeux:
    - "Population de chercheurs hautement qualifiés à sensibiliser"
    - "Diversité des risques selon les laboratoires"
    - "Contraintes de temps des équipes R&I"
    - "Besoin de formats innovants et engageants"
  besoins:
    - "Contenus adaptés au niveau scientifique"
    - "Formats courts et impactants"
    - "Digitalisation (e-learning, vidéos)"
    - "Mesure de l'efficacité des formations"

actions:
  "30":
    - action: "Audit des formations EHS existantes"
      deliverable: "État des lieux formation"
      kpi: "100% formations auditées"
    - action: "Identification des besoins de formation prioritaires"
      deliverable: "Plan de formation draft"
      kpi: "Priorités définies"
    - action: "Benchmark des formats innovants (VR, microlearning)"
      deliverable: "Veille formats"
      kpi: "5 formats identifiés"
  "90":
    - action: "Création du module e-learning risque chimique labo"
      deliverable: "E-learning opérationnel"
      kpi: "Module validé"
    - action: "Développement de capsules vidéo '5 min Sécurité'"
      deliverable: "5 capsules vidéo"
      kpi: "Diffusion hebdo"
    - action: "Lancement du programme de sensibilisation CMR"
      deliverable: "Kit CMR complet"
      kpi: "100% labos sensibilisés"
  "180":
    - action: "Déploiement de la plateforme de formation digitale"
      deliverable: "LMS opérationnel"
      kpi: "100% collaborateurs accès"
    - action: "Formation des formateurs internes (correspondants)"
      deliverable: "15 formateurs certifiés"
      kpi: "Autonomie acquise"
    - action: "Création du parcours d'intégration EHS nouveaux arrivants"
      deliverable: "Onboarding EHS"
      kpi: "100% nouveaux formés"
  "365":
    - action: "Bilan annuel des formations"
      deliverable: "Rapport efficacité"
      kpi: "Taux complétion > 90%"
    - action: "Innovation : pilote réalité virtuelle"
      deliverable: "Module VR pilote"
      kpi: "1 module opérationnel"
    - action: "Plan de formation N+1"
      deliverable: "Programme annuel"
      kpi: "Besoins couverts"

my_experience: "Création de modules e-learning, vidéos immersives, flash sécurité. 150+ collaborateurs sensibilisés. Outils CMR à l'ONERA."
```

#### Mission 5 : Enquêtes & Analyses de Risques

```yaml
id: 5
title: "Enquêtes & Analyses de Risques"
subtitle: "Accidents, Incidents, Projets"
icon: "🔍"
description: "Participer aux enquêtes accidents, incidents et apporter son expertise lors des analyses de risques projets."

context:
  enjeux:
    - "Environnement R&I avec risques spécifiques (nouveaux produits, procédés)"
    - "Culture du retour d'expérience essentielle"
    - "Analyse de risques dès la conception des projets"
    - "Capitalisation et partage des enseignements"
  besoins:
    - "Méthodologie d'enquête rigoureuse"
    - "Analyse de risques projets R&I adaptée"
    - "Système SIO efficace (Safety Improvement Opportunity)"
    - "Diffusion des REX à toutes les équipes"

actions:
  "30":
    - action: "Appropriation de la méthodologie L'Oréal (arbre des causes)"
      deliverable: "Maîtrise des outils"
      kpi: "Certification interne"
    - action: "Revue des incidents récents et analyse des tendances"
      deliverable: "Rapport tendances"
      kpi: "12 mois analysés"
    - action: "Participation aux premières analyses de risques projets"
      deliverable: "Contribution opérationnelle"
      kpi: "3 projets"
  "90":
    - action: "Pilotage autonome des enquêtes accidents/incidents"
      deliverable: "Rapports d'enquête"
      kpi: "100% incidents traités < 48h"
    - action: "Création d'un template d'analyse de risques projets R&I"
      deliverable: "Template AR projets"
      kpi: "Validation Direction"
    - action: "Animation du système SIO (Safety Improvement Opportunity)"
      deliverable: "SIO actif"
      kpi: "+20% remontées"
  "180":
    - action: "Mise en place de REX flash (diffusion rapide)"
      deliverable: "Processus REX flash"
      kpi: "Diffusion J+3"
    - action: "Formation des chefs de projets à l'analyse de risques"
      deliverable: "15 chefs de projets formés"
      kpi: "Autonomie acquise"
    - action: "Dashboard temps réel des incidents"
      deliverable: "Dashboard PowerBI"
      kpi: "Mise à jour auto"
  "365":
    - action: "Bilan annuel accidents/incidents"
      deliverable: "Rapport annuel"
      kpi: "Réduction de 20%"
    - action: "Capitalisation des REX dans une base de données"
      deliverable: "Base REX searchable"
      kpi: "100% REX capitalisés"
    - action: "Benchmark avec les autres sites R&I"
      deliverable: "Best practices"
      kpi: "3 pratiques adoptées"

my_experience: "Enquêtes accidents et arbre des causes dans toutes mes expériences. Analyses de risques projets R&D à l'ONERA. Modélisation des risques industriels."
```

#### Mission 6 : Audits & Plans d'Actions

```yaml
id: 6
title: "Audits & Plans d'Actions"
subtitle: "Contribution & Suivi"
icon: "✅"
description: "Contribuer et participer à la réalisation d'audits & suivi des plans d'actions associés."

context:
  enjeux:
    - "Programme d'audits internes L'Oréal Groupe"
    - "Préparation aux audits de certification"
    - "Suivi rigoureux des actions correctives"
    - "Culture de l'amélioration continue"
  besoins:
    - "Compétences d'auditeur interne"
    - "Outils de suivi des plans d'actions"
    - "Coordination avec les autres entités"
    - "Reporting efficace à la Direction"

actions:
  "30":
    - action: "Formation auditeur interne L'Oréal"
      deliverable: "Certification auditeur"
      kpi: "Habilitation obtenue"
    - action: "Revue du programme d'audits existant"
      deliverable: "Planning audits"
      kpi: "Visibilité 12 mois"
    - action: "Analyse des plans d'actions en cours"
      deliverable: "État des lieux PA"
      kpi: "100% PA identifiés"
  "90":
    - action: "Réalisation des premiers audits terrain (SHAP)"
      deliverable: "5 audits réalisés"
      kpi: "5 labos audités"
    - action: "Mise en place d'un outil de suivi des plans d'actions"
      deliverable: "Outil PA digital"
      kpi: "100% PA suivis"
    - action: "Création d'un dashboard suivi des audits"
      deliverable: "Dashboard audits"
      kpi: "Temps réel"
  "180":
    - action: "Audits croisés avec autres entités du campus"
      deliverable: "3 audits croisés"
      kpi: "Synergie campus"
    - action: "Taux de clôture des plans d'actions > 80%"
      deliverable: "KPI PA"
      kpi: "> 80% clôturés"
    - action: "Préparation à l'audit de certification"
      deliverable: "Dossier pré-audit"
      kpi: "Gap < 10%"
  "365":
    - action: "Bilan annuel du programme d'audits"
      deliverable: "Rapport annuel audits"
      kpi: "100% programme réalisé"
    - action: "100% des plans d'actions clôturés ou re-planifiés"
      deliverable: "Suivi PA complet"
      kpi: "Zéro PA > 12 mois"
    - action: "Amélioration du processus d'audit"
      deliverable: "Processus V2"
      kpi: "Retours intégrés"

my_experience: "Audits internes et externes chez Lafarge, Bouygues et ONERA. Suivi des plans d'actions. Contribution aux certifications ISO 14001/45001."
```

#### Mission 7 : Plans de Prévention

```yaml
id: 7
title: "Plans de Prévention"
subtitle: "Entreprises Extérieures"
icon: "🤝"
description: "Assurer le suivi des plans de prévention annuel des entreprises extérieures."

context:
  enjeux:
    - "Nombreuses interventions d'entreprises extérieures en R&I"
    - "Risques de co-activité spécifiques aux laboratoires"
    - "Exigences réglementaires (décret du 20/02/1992)"
    - "Responsabilité de l'entreprise utilisatrice"
  besoins:
    - "Processus de gestion des plans de prévention fluide"
    - "Coordination des interventions"
    - "Formation des entreprises extérieures aux risques spécifiques"
    - "Suivi et contrôle des interventions"

actions:
  "30":
    - action: "Inventaire des entreprises extérieures intervenant"
      deliverable: "Liste EE à jour"
      kpi: "100% EE identifiées"
    - action: "Audit des plans de prévention existants"
      deliverable: "État des lieux PP"
      kpi: "100% PP revus"
    - action: "Identification des risques de co-activité"
      deliverable: "Matrice co-activité"
      kpi: "Risques cartographiés"
  "90":
    - action: "Mise en place d'un processus de gestion des PP digitalisé"
      deliverable: "Workflow PP digital"
      kpi: "100% PP digitalisés"
    - action: "Création d'une fiche d'accueil EE spécifique R&I"
      deliverable: "Fiche accueil EE"
      kpi: "100% EE briefées"
    - action: "Formation des donneurs d'ordre internes"
      deliverable: "Sessions formation"
      kpi: "100% formés"
  "180":
    - action: "Inspections inopinées des interventions EE"
      deliverable: "Rapports inspections"
      kpi: "10 inspections/mois"
    - action: "Dashboard de suivi des PP et interventions"
      deliverable: "Dashboard PP"
      kpi: "Visibilité temps réel"
    - action: "Amélioration du taux de conformité EE"
      deliverable: "KPI conformité"
      kpi: "> 90% conformité"
  "365":
    - action: "Bilan annuel gestion des EE"
      deliverable: "Rapport annuel EE"
      kpi: "Zéro accident EE"
    - action: "Évaluation et notation des entreprises extérieures"
      deliverable: "Système de notation"
      kpi: "100% EE évaluées"
    - action: "Benchmark et optimisation du processus"
      deliverable: "Processus V2"
      kpi: "Temps -30%"

my_experience: "Coordination des plans de prévention sur 12+ sites chez Bouygues. Suivi des entreprises extérieures. Briefings sécurité."
```

#### Mission 8 : Reporting & Digitalisation

```yaml
id: 8
title: "Reporting & Digitalisation"
subtitle: "Indicateurs & PowerBI"
icon: "📊"
description: "Assurer le reporting des indicateurs & digitaliser ce reporting."

context:
  enjeux:
    - "Pilotage de la performance EHS par les données"
    - "Exigences de reporting Groupe L'Oréal"
    - "Besoin de visibilité temps réel pour le management"
    - "Harmonisation avec les autres entités"
  besoins:
    - "Définition des KPIs pertinents R&I"
    - "Automatisation de la collecte de données"
    - "Dashboards visuels et interactifs"
    - "Reporting régulier à différents niveaux"

actions:
  "30":
    - action: "Audit du système de reporting actuel"
      deliverable: "État des lieux reporting"
      kpi: "Process actuel documenté"
    - action: "Définition des KPIs EHS clés pour R&I"
      deliverable: "Liste KPIs validée"
      kpi: "10 KPIs définis"
    - action: "Identification des sources de données"
      deliverable: "Cartographie data"
      kpi: "100% sources identifiées"
  "90":
    - action: "Création du dashboard PowerBI EHS R&I"
      deliverable: "Dashboard V1 opérationnel"
      kpi: "Dashboard live"
    - action: "Automatisation de la collecte de données"
      deliverable: "Workflow auto"
      kpi: "80% données auto"
    - action: "Formation des utilisateurs au dashboard"
      deliverable: "Sessions formation"
      kpi: "100% managers formés"
  "180":
    - action: "Dashboard V2 avec fonctionnalités avancées"
      deliverable: "Dashboard enrichi"
      kpi: "Prédictif intégré"
    - action: "Intégration avec les systèmes Groupe"
      deliverable: "Connexion SI Groupe"
      kpi: "Interopérabilité"
    - action: "Reporting automatisé mensuel"
      deliverable: "Rapports auto"
      kpi: "Zéro saisie manuelle"
  "365":
    - action: "Bilan annuel data-driven"
      deliverable: "Rapport annuel data"
      kpi: "Insights actionnables"
    - action: "IA prédictive sur les incidents"
      deliverable: "Module IA pilote"
      kpi: "Prédictions validées"
    - action: "Benchmark avec les sites les plus digitalisés"
      deliverable: "Best practices"
      kpi: "Top 3 Groupe"

my_experience: "Maîtrise native PowerBI. Dashboards EHS chez Bouygues et ONERA. Automatisation IA de la veille réglementaire. Réduction de 30% du traitement manuel."
```

#### Mission 9 : Amélioration Continue

```yaml
id: 9
title: "Amélioration Continue"
subtitle: "Propositions & Innovation"
icon: "🚀"
description: "Proposer des actions de mise en conformité ou d'amélioration."

context:
  enjeux:
    - "Culture d'innovation L'Oréal à intégrer dans l'EHS"
    - "Amélioration continue comme pilier du système"
    - "Anticipation des évolutions réglementaires"
    - "Benchmark et veille constante"
  besoins:
    - "Capacité à identifier les opportunités d'amélioration"
    - "Force de proposition et créativité"
    - "Capacité à porter des projets innovants"
    - "Mesure de l'impact des améliorations"

actions:
  "30":
    - action: "Identification des quick wins à fort impact"
      deliverable: "Liste quick wins"
      kpi: "5 quick wins identifiés"
    - action: "Benchmark des innovations EHS dans l'industrie cosmétique"
      deliverable: "Rapport veille"
      kpi: "10 innovations identifiées"
    - action: "Proposition d'un premier projet pilote"
      deliverable: "Note de cadrage projet"
      kpi: "1 projet validé"
  "90":
    - action: "Déploiement des 3 premiers quick wins"
      deliverable: "Quick wins opérationnels"
      kpi: "3 quick wins déployés"
    - action: "Lancement du projet pilote innovant"
      deliverable: "Projet en cours"
      kpi: "Jalons respectés"
    - action: "Mise en place d'une boîte à idées EHS"
      deliverable: "Système BAI actif"
      kpi: "10 idées/mois"
  "180":
    - action: "Bilan des quick wins et mesure d'impact"
      deliverable: "ROI quick wins"
      kpi: "Impact mesuré"
    - action: "Projet pilote terminé et évalué"
      deliverable: "REX projet pilote"
      kpi: "Objectifs atteints"
    - action: "Programme d'innovation EHS formalisé"
      deliverable: "Programme annuel"
      kpi: "Budget alloué"
  "365":
    - action: "Bilan annuel des améliorations"
      deliverable: "Rapport impact"
      kpi: "20 améliorations réalisées"
    - action: "Reconnaissance interne (prix, communication)"
      deliverable: "Visibilité"
      kpi: "1 prix/distinction"
    - action: "Roadmap innovation N+1"
      deliverable: "Feuille de route"
      kpi: "5 projets planifiés"

my_experience: "Innovation EHS : automatisation IA, création d'applications métier, e-learning immersif. Référent IA à l'ONERA. Réduction de 15% des non-conformités."
```

### 6.4 Section "Réponse aux Objections"

```yaml
section_label: "Transparence"
headline: "Je comprends vos réserves"
subheadline: "Permettez-moi d'y répondre directement"

objections:
  - objection: '"5 ans d''expérience minimum requis"'
    response: "Mon parcours totalise près de 5 ans d'expérience post-diplôme, dont 18 mois en environnement R&D laboratoires. La densité et la diversité de mes missions (ONERA, Bouygues, Lafarge) m'ont exposé à une variété de contextes EHS que beaucoup n'acquièrent qu'en 7-8 ans."
    proof: "4 environnements différents maîtrisés : R&I aérospatiale, construction internationale, industrie lourde, multi-sites"
  
  - objection: '"Formation initiale en chimie/biologie"'
    response: "Ma formation d'ingénieur QHSE inclut une spécialisation en toxicologie industrielle et analyse des risques chimiques (IMT Nord Europe). J'ai géré opérationnellement le risque chimique sur chaque poste : CMR, VLEP, FDS, SEIRICH, substitution."
    proof: "Déploiement d'une plateforme complète de gestion du risque chimique chez Bouygues (catalogue, FDS simplifiées, section CMR)"
  
  - objection: '"Expérience en laboratoire cosmétique/pharma"'
    response: "L'environnement R&I de l'ONERA présente des similitudes structurelles avec L'Oréal R&I : chercheurs, pluralité des risques, équipements sensibles, culture de l'innovation. Les fondamentaux EHS sont transférables ; les spécificités cosmétiques s'apprennent rapidement."
    proof: "18 mois en laboratoires de recherche aérospatiale — accompagnement quotidien de chercheurs, adaptation aux contraintes R&D"
```

### 6.5 Section Compétences

```yaml
competences:
  - title: "Systèmes de Management"
    icon: "🏛️"
    skills: ["ISO 45001", "ISO 14001", "Audits", "Système documentaire", "Amélioration continue"]
  
  - title: "Risque Chimique & Labo"
    icon: "🧪"
    skills: ["CMR", "Toxicologie", "VLEP", "FDS", "SEIRICH", "REACH/CLP"]
  
  - title: "Formation & Animation"
    icon: "🎓"
    skills: ["E-learning", "Vidéos immersives", "Flash sécurité", "Sensibilisation 150+ personnes"]
  
  - title: "Digitalisation & Data"
    icon: "📊"
    skills: ["PowerBI natif", "Automatisation IA", "Dashboards", "KPIs", "Veille digitale"]
```

### 6.6 Section Contact / CTA

```yaml
section_label: "Prochaine étape"
headline: "Accordez-moi 30 minutes"
content: "Je suis convaincu qu'un échange direct vous permettra de mesurer ma motivation, mon professionnalisme, et ma capacité à contribuer à l'excellence EHS de L'Oréal R&I."

contact_info:
  email: "kamga.winny@gmail.com"
  phone: "+33 6 59 09 60 91"
  availability: "Disponible immédiatement"

cta:
  text: "Planifier un échange"
  mailto: "mailto:kamga.winny@gmail.com?subject=Suite candidature Ingénieur QEHS - Demande d'échange"
```

---

## 7. Fonctionnalités Techniques

### 7.1 Interactions

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| **Sélection de mission** | Grille cliquable, changement de contenu dynamique | P0 |
| **Switch d'horizon** | Boutons 30/90/180/365 jours, mise à jour des actions | P0 |
| **Smooth scroll** | Navigation fluide entre sections | P0 |
| **Animations au scroll** | Fade-in des éléments au scroll (Intersection Observer) | P1 |
| **Navigation sticky** | Header fixe avec changement d'état au scroll | P1 |
| **Particules animées** | Canvas avec particules dorées dans le hero | P2 |
| **Hover effects** | Transitions sur les boutons et cards | P1 |

### 7.2 Performance

| Critère | Objectif |
|---------|----------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive** | < 3s |
| **Cumulative Layout Shift** | < 0.1 |
| **Lighthouse Score** | > 90 |

### 7.3 SEO & Accessibilité

- **Balises meta** : title, description, og:image
- **Structure sémantique** : header, nav, main, section, footer
- **Alt text** : Sur toutes les images
- **Contraste** : WCAG AA minimum
- **Focus states** : Visibles pour la navigation clavier

---

## 8. Structure des Fichiers

### 8.1 Architecture recommandée (React/Next.js)

```
loreal-vision/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # Image Open Graph (1200x630)
│   └── fonts/
│       ├── PlayfairDisplay-Regular.woff2
│       ├── PlayfairDisplay-Italic.woff2
│       ├── PlayfairDisplay-Bold.woff2
│       ├── Montserrat-Regular.woff2
│       ├── Montserrat-Medium.woff2
│       └── Montserrat-SemiBold.woff2
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Page d'accueil
│   │   └── globals.css           # Styles globaux
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx    # Navigation sticky
│   │   │   └── Footer.tsx        # Footer
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Section hero avec particules
│   │   │   ├── Conviction.tsx    # Section "Ma conviction"
│   │   │   ├── Missions.tsx      # Section missions interactive
│   │   │   ├── Objections.tsx    # Section réponse aux objections
│   │   │   ├── Competences.tsx   # Section compétences
│   │   │   └── Contact.tsx       # Section CTA
│   │   │
│   │   ├── missions/
│   │   │   ├── MissionGrid.tsx   # Grille de sélection
│   │   │   ├── MissionDetail.tsx # Détail d'une mission
│   │   │   ├── HorizonSelector.tsx # Sélecteur 30/90/180/365
│   │   │   └── ActionCard.tsx    # Card d'action
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx        # Composants boutons
│   │   │   ├── Card.tsx          # Composants cards
│   │   │   ├── Badge.tsx         # Tags/badges
│   │   │   └── AnimatedSection.tsx # Wrapper animation scroll
│   │   │
│   │   └── effects/
│   │       └── ParticleCanvas.tsx # Animation particules
│   │
│   ├── data/
│   │   └── missions.ts           # Données des 9 missions
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.ts  # Hook position scroll
│   │   └── useIntersectionObserver.ts # Hook visibility
│   │
│   ├── styles/
│   │   └── variables.css         # Variables CSS
│   │
│   └── lib/
│       └── utils.ts              # Fonctions utilitaires
│
├── package.json
├── tailwind.config.js            # Config Tailwind (optionnel)
├── next.config.js                # Config Next.js
└── README.md
```

### 8.2 Architecture alternative (HTML/CSS/JS vanilla)

```
loreal-vision/
├── index.html                    # Page unique
├── css/
│   ├── styles.css                # Styles principaux
│   ├── variables.css             # Variables CSS
│   ├── components.css            # Styles composants
│   └── animations.css            # Animations
├── js/
│   ├── main.js                   # Script principal
│   ├── missions.js               # Logique missions
│   ├── particles.js              # Animation particules
│   └── scroll.js                 # Effets scroll
├── data/
│   └── missions.json             # Données missions
├── assets/
│   └── fonts/
│       └── ...
└── README.md
```

---

## 9. Assets & Ressources

### 9.1 Polices Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 9.2 Icônes

Les icônes utilisées sont des emojis natifs pour la simplicité :
- 🏛️ Systèmes de management
- 📚 Système documentaire
- ⭐ Organisation Qualité
- 🎓 Formation
- 🔍 Enquêtes & Analyses
- ✅ Audits
- 🤝 Plans de prévention
- 📊 Reporting
- 🚀 Amélioration continue

Alternative : Lucide Icons ou Heroicons si besoin d'icônes vectorielles.

### 9.3 Image Open Graph

- **Dimensions** : 1200 x 630 px
- **Contenu** : "Ma Vision QEHS pour L'Oréal R&I" + nom du candidat
- **Style** : Fond noir, texte or et blanc, aligné avec le design du site

---

## 10. Règles de Développement

### 10.1 Code Style

```javascript
// Conventions de nommage
- Components: PascalCase (MissionCard.tsx)
- Functions: camelCase (handleMissionClick)
- CSS classes: kebab-case ou BEM (.mission-card, .mission-card__title)
- Constants: SCREAMING_SNAKE_CASE (const HORIZONS = ['30', '90', '180', '365'])

// Imports
- Grouper par type (React, composants, hooks, utils, styles)
- Ordre alphabétique dans chaque groupe

// Components
- Functional components avec hooks
- Props destructurées
- Types/interfaces pour TypeScript
```

### 10.2 Performance Guidelines

```javascript
// Lazy loading des images (si ajoutées)
<img loading="lazy" src="..." alt="..." />

// Debounce scroll events
const handleScroll = debounce(() => {...}, 16);

// Memoization pour les composants lourds
const MissionDetail = memo(({ mission }) => {...});

// CSS-only animations quand possible
// Préférer transform et opacity pour les animations
```

### 10.3 Responsive Guidelines

```css
/* Mobile-first approach */
/* Base styles = mobile */
/* Media queries pour tablette et desktop */

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large desktop */ }
```

---

## 11. Déploiement

### 11.1 Options de déploiement

| Plateforme | Avantages | Inconvénients |
|------------|-----------|---------------|
| **Vercel** | Deploy instantané, preview URLs, analytics | - |
| **Netlify** | CI/CD intégré, forms, functions | - |
| **GitHub Pages** | Gratuit, simple | Pas de server-side |
| **Cloudflare Pages** | CDN global, rapide | Moins connu |

### 11.2 Recommandation : Vercel

```bash
# Installation
npm i -g vercel

# Déploiement
vercel

# Déploiement production
vercel --prod
```

### 11.3 Domaine personnalisé (optionnel)

Options de domaines :
- `winny-kamga-loreal.vercel.app` (gratuit)
- `winny-kamga.com` (payant, ~12€/an)
- `vision-qehs-loreal.com` (payant)

### 11.4 Checklist pré-déploiement

- [ ] Tous les liens fonctionnent
- [ ] Images optimisées
- [ ] Meta tags configurés
- [ ] Favicon en place
- [ ] Test mobile
- [ ] Test desktop
- [ ] Lighthouse score > 90
- [ ] Pas d'erreurs console
- [ ] Formulaire de contact fonctionnel (mailto)

---

## 12. Critères de Succès

### 12.1 Objectifs quantitatifs

| Métrique | Objectif |
|----------|----------|
| Temps de chargement | < 3s |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 90 |
| Lighthouse SEO | > 90 |
| Taux de rebond | < 50% |
| Temps sur page | > 2 min |

### 12.2 Objectifs qualitatifs

- [ ] Le site transmet professionnalisme et sérieux
- [ ] Les plans d'action sont clairs et compréhensibles
- [ ] L'expérience du candidat est mise en valeur
- [ ] Les objections RH sont adressées de manière convaincante
- [ ] Le CTA est visible et incitatif
- [ ] Le site fonctionne parfaitement sur mobile

### 12.3 Objectif ultime

**Obtenir un entretien avec L'Oréal R&I suite à l'envoi du lien du site.**

---

## Annexes

### A. Liens de référence design L'Oréal

- https://www.loreal.com/en/beauty-science-and-technology/beauty-research-and-innovation/
- https://essentiality-of-beauty.loreal.com/
- https://www.loreal.com/en/group/

### B. Ressources techniques

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [GSAP](https://greensock.com/gsap/) (animations avancées)

### C. Contact candidat

- **Nom** : Winny KAMGA
- **Email** : kamga.winny@gmail.com
- **Téléphone** : +33 6 59 09 60 91
- **Disponibilité** : Immédiate

---

*Document PRD v1.0 — Février 2025*
*Préparé pour le vibe coding avec Bolt / Claude Code*

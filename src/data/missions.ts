export interface Action {
  action: string;
  deliverable: string;
  kpi: string;
}

export interface Mission {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  context: {
    enjeux: string[];
    besoins: string[];
  };
  actions: {
    30: Action[];
    90: Action[];
    180: Action[];
    365: Action[];
  };
  myExperience: string;
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "Conformité et Standards EHS",
    subtitle: "ISO 45001",
    icon: "🏛️",
    description:
      "Garantir le respect, l'application et la conformité des standards EHS en accord avec les exigences réglementaires et celles du groupe.",
    context: {
      enjeux: [
        "Environnement R&I multi-risques : chimique, biologique, physique",
        "Exigences réglementaires cosmétiques (REACH, CLP, ICPE)",
        "Standards Groupe L'Oréal (SHAP, SIO, MESUR)",
        "Objectif Zéro Accident aligné avec la politique mondiale",
      ],
      besoins: [
        "Veille réglementaire permanente",
        "Traduction des exigences en actions terrain",
        "Accompagnement des chercheurs sans freiner l'innovation",
        "Harmonisation avec les autres entités du campus",
      ],
    },
    actions: {
      30: [
        {
          action:
            "Cartographie complète des exigences réglementaires applicables",
          deliverable: "Matrice de conformité",
          kpi: "100% des textes identifiés",
        },
        {
          action: "Audit flash du niveau de conformité actuel",
          deliverable: "Note de diagnostic",
          kpi: "Scoring initial établi",
        },
        {
          action: "Rencontre des correspondants métiers R&I",
          deliverable: "Mapping des interlocuteurs",
          kpi: "100% des labos couverts",
        },
      ],
      90: [
        {
          action: "Mise en place d'une veille réglementaire automatisée (IA)",
          deliverable: "Workflow de veille opérationnel",
          kpi: "Alertes J+1",
        },
        {
          action: "Création d'un référentiel EHS unifié L'Oréal R&I",
          deliverable: "Manuel EHS digital",
          kpi: "Validation Direction",
        },
        {
          action:
            "Déploiement des standards SHAP sur les laboratoires prioritaires",
          deliverable: "Grilles SHAP adaptées",
          kpi: "5 labos pilotes",
        },
      ],
      180: [
        {
          action: "Généralisation des standards EHS à tous les laboratoires",
          deliverable: "Couverture totale",
          kpi: "100% des labos",
        },
        {
          action:
            "Intégration des exigences dans les projets R&I dès la conception",
          deliverable: "Checklist projet EHS",
          kpi: "100% nouveaux projets",
        },
        {
          action: "Préparation à la certification ISO 45001",
          deliverable: "Dossier de certification",
          kpi: "Gap analysis < 10%",
        },
      ],
      365: [
        {
          action: "Audit blanc ISO 45001",
          deliverable: "Rapport d'audit",
          kpi: "Zéro non-conformité majeure",
        },
        {
          action:
            "Benchmark avec les sites L'Oréal les plus performants",
          deliverable: "Best practices intégrées",
          kpi: "Top 3 campus",
        },
        {
          action: "Certification ISO 45001 obtenue",
          deliverable: "Certificat",
          kpi: "Certification validée",
        },
      ],
    },
    myExperience:
      "Pilotage du SME ISO 45001 à l'ONERA et chez Bouygues. Conformité réglementaire ICPE, audits internes et externes.",
  },
  {
    id: 2,
    title: "Système Documentaire",
    subtitle: "Animation & Dynamisation",
    icon: "📚",
    description:
      "Dynamiser le système documentaire et l'animer en collaboration avec les managers et les correspondants métiers.",
    context: {
      enjeux: [
        "Volume documentaire important en environnement R&I",
        "Multiplicité des acteurs (chercheurs, techniciens, managers)",
        "Besoin d'accessibilité et de simplicité",
        "Obsolescence rapide des procédures en contexte d'innovation",
      ],
      besoins: [
        "Simplification et harmonisation des documents",
        "Accessibilité digitale (SharePoint, QR codes)",
        "Processus de mise à jour fluide",
        "Appropriation par les équipes terrain",
      ],
    },
    actions: {
      30: [
        {
          action: "Audit du système documentaire existant",
          deliverable: "État des lieux complet",
          kpi: "100% docs inventoriés",
        },
        {
          action: "Identification des documents obsolètes/redondants",
          deliverable: "Liste de purge",
          kpi: "Taux d'obsolescence mesuré",
        },
        {
          action: "Rencontre des managers et correspondants métiers",
          deliverable: "Besoins documentaires collectés",
          kpi: "100% services consultés",
        },
      ],
      90: [
        {
          action: "Refonte de la structure documentaire (arborescence)",
          deliverable: "Nouvelle architecture",
          kpi: "Validation managers",
        },
        {
          action: "Création de templates harmonisés L'Oréal R&I",
          deliverable: "Kit templates",
          kpi: "10 templates clés",
        },
        {
          action: "Mise en place d'un SharePoint EHS optimisé",
          deliverable: "Plateforme opérationnelle",
          kpi: "Temps accès < 30s",
        },
      ],
      180: [
        {
          action: "Déploiement du système documentaire digital",
          deliverable: "Plateforme généralisée",
          kpi: "100% docs migrés",
        },
        {
          action: "Formation des correspondants à la gestion documentaire",
          deliverable: "Sessions formation",
          kpi: "100% formés",
        },
        {
          action: "Mise en place d'alertes de révision automatiques",
          deliverable: "Workflow de révision",
          kpi: "Zéro doc obsolète",
        },
      ],
      365: [
        {
          action: "Évaluation de l'adoption du système",
          deliverable: "Enquête satisfaction",
          kpi: "Satisfaction > 80%",
        },
        {
          action: "Optimisation continue basée sur les retours",
          deliverable: "Améliorations V2",
          kpi: "5 améliorations/an",
        },
        {
          action: "Intégration avec les autres entités du campus",
          deliverable: "Système unifié campus",
          kpi: "Interopérabilité",
        },
      ],
    },
    myExperience:
      "Animation du système documentaire à l'ONERA et Bouygues. Création de SharePoint EHS, fiches sécurité, consignes simplifiées.",
  },
  {
    id: 3,
    title: "Organisation Qualité",
    subtitle: "Création & Structuration",
    icon: "⭐",
    description:
      "Participer à la création d'une organisation Qualité au sein du département QEHS & ETN.",
    context: {
      enjeux: [
        "Environnement R&I exigeant en termes de qualité des process",
        "Synergie EHS-Qualité pour une approche intégrée",
        "Standards qualité cosmétiques (BPF, ISO 22716)",
        "Traçabilité des activités de recherche",
      ],
      besoins: [
        "Définition des processus qualité clés",
        "Intégration avec le système EHS existant",
        "Outils de pilotage qualité adaptés R&I",
        "Culture qualité partagée par les chercheurs",
      ],
    },
    actions: {
      30: [
        {
          action:
            "Benchmark des organisations Qualité R&I existantes (Groupe)",
          deliverable: "Rapport benchmark",
          kpi: "5 sites benchmarkés",
        },
        {
          action: "Identification des processus clés à documenter",
          deliverable: "Cartographie processus",
          kpi: "Processus critiques identifiés",
        },
        {
          action: "Analyse des interfaces EHS-Qualité",
          deliverable: "Matrice d'interfaces",
          kpi: "Synergies identifiées",
        },
      ],
      90: [
        {
          action: "Proposition d'organisation Qualité R&I",
          deliverable: "Projet d'organisation",
          kpi: "Validation Direction",
        },
        {
          action: "Définition des rôles et responsabilités",
          deliverable: "Fiches de fonction",
          kpi: "RACI établi",
        },
        {
          action: "Création des premiers processus qualité",
          deliverable: "3 processus documentés",
          kpi: "Processus validés",
        },
      ],
      180: [
        {
          action: "Déploiement de l'organisation Qualité",
          deliverable: "Organisation opérationnelle",
          kpi: "Équipe en place",
        },
        {
          action: "Mise en place d'indicateurs qualité",
          deliverable: "Dashboard Qualité",
          kpi: "KPIs définis",
        },
        {
          action: "Formation des acteurs clés",
          deliverable: "Sessions formation",
          kpi: "100% formés",
        },
      ],
      365: [
        {
          action: "Revue de direction Qualité",
          deliverable: "Bilan annuel",
          kpi: "Objectifs atteints",
        },
        {
          action: "Audit de maturité de l'organisation",
          deliverable: "Scoring maturité",
          kpi: "Niveau cible atteint",
        },
        {
          action: "Plan d'amélioration N+1",
          deliverable: "Feuille de route",
          kpi: "Actions priorisées",
        },
      ],
    },
    myExperience:
      "Contribution au SMI chez Lafarge et Bouygues. Approche intégrée QSE. Mastère Spécialisé Management QSE-RSE (CESI).",
  },
  {
    id: 4,
    title: "Formation & Sensibilisation",
    subtitle: "Animation & Création",
    icon: "🎓",
    description:
      "Participer à l'animation et/ou à la création de formations EHS adaptées au contexte R&I.",
    context: {
      enjeux: [
        "Population de chercheurs hautement qualifiés à sensibiliser",
        "Diversité des risques selon les laboratoires",
        "Contraintes de temps des équipes R&I",
        "Besoin de formats innovants et engageants",
      ],
      besoins: [
        "Contenus adaptés au niveau scientifique",
        "Formats courts et impactants",
        "Digitalisation (e-learning, vidéos)",
        "Mesure de l'efficacité des formations",
      ],
    },
    actions: {
      30: [
        {
          action: "Audit des formations EHS existantes",
          deliverable: "État des lieux formation",
          kpi: "100% formations auditées",
        },
        {
          action: "Identification des besoins de formation prioritaires",
          deliverable: "Plan de formation draft",
          kpi: "Priorités définies",
        },
        {
          action: "Benchmark des formats innovants (VR, microlearning)",
          deliverable: "Veille formats",
          kpi: "5 formats identifiés",
        },
      ],
      90: [
        {
          action: "Création du module e-learning risque chimique labo",
          deliverable: "E-learning opérationnel",
          kpi: "Module validé",
        },
        {
          action: "Développement de capsules vidéo '5 min Sécurité'",
          deliverable: "5 capsules vidéo",
          kpi: "Diffusion hebdo",
        },
        {
          action: "Lancement du programme de sensibilisation CMR",
          deliverable: "Kit CMR complet",
          kpi: "100% labos sensibilisés",
        },
      ],
      180: [
        {
          action: "Déploiement de la plateforme de formation digitale",
          deliverable: "LMS opérationnel",
          kpi: "100% collaborateurs accès",
        },
        {
          action: "Formation des formateurs internes (correspondants)",
          deliverable: "15 formateurs certifiés",
          kpi: "Autonomie acquise",
        },
        {
          action:
            "Création du parcours d'intégration EHS nouveaux arrivants",
          deliverable: "Onboarding EHS",
          kpi: "100% nouveaux formés",
        },
      ],
      365: [
        {
          action: "Bilan annuel des formations",
          deliverable: "Rapport efficacité",
          kpi: "Taux complétion > 90%",
        },
        {
          action: "Innovation : pilote réalité virtuelle",
          deliverable: "Module VR pilote",
          kpi: "1 module opérationnel",
        },
        {
          action: "Plan de formation N+1",
          deliverable: "Programme annuel",
          kpi: "Besoins couverts",
        },
      ],
    },
    myExperience:
      "Création de modules e-learning, vidéos immersives, flash sécurité. 150+ collaborateurs sensibilisés. Outils CMR à l'ONERA.",
  },
  {
    id: 5,
    title: "Enquêtes & Analyses de Risques",
    subtitle: "Accidents, Incidents, Projets",
    icon: "🔍",
    description:
      "Participer aux enquêtes accidents, incidents et apporter son expertise lors des analyses de risques projets.",
    context: {
      enjeux: [
        "Environnement R&I avec risques spécifiques (nouveaux produits, procédés)",
        "Culture du retour d'expérience essentielle",
        "Analyse de risques dès la conception des projets",
        "Capitalisation et partage des enseignements",
      ],
      besoins: [
        "Méthodologie d'enquête rigoureuse",
        "Analyse de risques projets R&I adaptée",
        "Système SIO efficace (Safety Improvement Opportunity)",
        "Diffusion des REX à toutes les équipes",
      ],
    },
    actions: {
      30: [
        {
          action:
            "Appropriation de la méthodologie L'Oréal (arbre des causes)",
          deliverable: "Maîtrise des outils",
          kpi: "Certification interne",
        },
        {
          action: "Revue des incidents récents et analyse des tendances",
          deliverable: "Rapport tendances",
          kpi: "12 mois analysés",
        },
        {
          action:
            "Participation aux premières analyses de risques projets",
          deliverable: "Contribution opérationnelle",
          kpi: "3 projets",
        },
      ],
      90: [
        {
          action: "Pilotage autonome des enquêtes accidents/incidents",
          deliverable: "Rapports d'enquête",
          kpi: "100% incidents traités < 48h",
        },
        {
          action: "Création d'un template d'analyse de risques projets R&I",
          deliverable: "Template AR projets",
          kpi: "Validation Direction",
        },
        {
          action: "Animation du système SIO (Safety Improvement Opportunity)",
          deliverable: "SIO actif",
          kpi: "+20% remontées",
        },
      ],
      180: [
        {
          action: "Mise en place de REX flash (diffusion rapide)",
          deliverable: "Processus REX flash",
          kpi: "Diffusion J+3",
        },
        {
          action: "Formation des chefs de projets à l'analyse de risques",
          deliverable: "15 chefs de projets formés",
          kpi: "Autonomie acquise",
        },
        {
          action: "Dashboard temps réel des incidents",
          deliverable: "Dashboard PowerBI",
          kpi: "Mise à jour auto",
        },
      ],
      365: [
        {
          action: "Bilan annuel accidents/incidents",
          deliverable: "Rapport annuel",
          kpi: "Réduction de 20%",
        },
        {
          action: "Capitalisation des REX dans une base de données",
          deliverable: "Base REX searchable",
          kpi: "100% REX capitalisés",
        },
        {
          action: "Benchmark avec les autres sites R&I",
          deliverable: "Best practices",
          kpi: "3 pratiques adoptées",
        },
      ],
    },
    myExperience:
      "Enquêtes accidents et arbre des causes dans toutes mes expériences. Analyses de risques projets R&D à l'ONERA. Modélisation des risques industriels.",
  },
  {
    id: 6,
    title: "Audits & Plans d'Actions",
    subtitle: "Contribution & Suivi",
    icon: "✅",
    description:
      "Contribuer et participer à la réalisation d'audits & suivi des plans d'actions associés.",
    context: {
      enjeux: [
        "Programme d'audits internes L'Oréal Groupe",
        "Préparation aux audits de certification",
        "Suivi rigoureux des actions correctives",
        "Culture de l'amélioration continue",
      ],
      besoins: [
        "Compétences d'auditeur interne",
        "Outils de suivi des plans d'actions",
        "Coordination avec les autres entités",
        "Reporting efficace à la Direction",
      ],
    },
    actions: {
      30: [
        {
          action: "Formation auditeur interne L'Oréal",
          deliverable: "Certification auditeur",
          kpi: "Habilitation obtenue",
        },
        {
          action: "Revue du programme d'audits existant",
          deliverable: "Planning audits",
          kpi: "Visibilité 12 mois",
        },
        {
          action: "Analyse des plans d'actions en cours",
          deliverable: "État des lieux PA",
          kpi: "100% PA identifiés",
        },
      ],
      90: [
        {
          action: "Réalisation des premiers audits terrain (SHAP)",
          deliverable: "5 audits réalisés",
          kpi: "5 labos audités",
        },
        {
          action: "Mise en place d'un outil de suivi des plans d'actions",
          deliverable: "Outil PA digital",
          kpi: "100% PA suivis",
        },
        {
          action: "Création d'un dashboard suivi des audits",
          deliverable: "Dashboard audits",
          kpi: "Temps réel",
        },
      ],
      180: [
        {
          action: "Audits croisés avec autres entités du campus",
          deliverable: "3 audits croisés",
          kpi: "Synergie campus",
        },
        {
          action: "Taux de clôture des plans d'actions > 80%",
          deliverable: "KPI PA",
          kpi: "> 80% clôturés",
        },
        {
          action: "Préparation à l'audit de certification",
          deliverable: "Dossier pré-audit",
          kpi: "Gap < 10%",
        },
      ],
      365: [
        {
          action: "Bilan annuel du programme d'audits",
          deliverable: "Rapport annuel audits",
          kpi: "100% programme réalisé",
        },
        {
          action:
            "100% des plans d'actions clôturés ou re-planifiés",
          deliverable: "Suivi PA complet",
          kpi: "Zéro PA > 12 mois",
        },
        {
          action: "Amélioration du processus d'audit",
          deliverable: "Processus V2",
          kpi: "Retours intégrés",
        },
      ],
    },
    myExperience:
      "Audits internes et externes chez Lafarge, Bouygues et ONERA. Suivi des plans d'actions. Contribution aux certifications ISO 14001/45001.",
  },
  {
    id: 7,
    title: "Plans de Prévention",
    subtitle: "Entreprises Extérieures",
    icon: "🤝",
    description:
      "Assurer le suivi des plans de prévention annuel des entreprises extérieures.",
    context: {
      enjeux: [
        "Nombreuses interventions d'entreprises extérieures en R&I",
        "Risques de co-activité spécifiques aux laboratoires",
        "Exigences réglementaires (décret du 20/02/1992)",
        "Responsabilité de l'entreprise utilisatrice",
      ],
      besoins: [
        "Processus de gestion des plans de prévention fluide",
        "Coordination des interventions",
        "Formation des entreprises extérieures aux risques spécifiques",
        "Suivi et contrôle des interventions",
      ],
    },
    actions: {
      30: [
        {
          action: "Inventaire des entreprises extérieures intervenant",
          deliverable: "Liste EE à jour",
          kpi: "100% EE identifiées",
        },
        {
          action: "Audit des plans de prévention existants",
          deliverable: "État des lieux PP",
          kpi: "100% PP revus",
        },
        {
          action: "Identification des risques de co-activité",
          deliverable: "Matrice co-activité",
          kpi: "Risques cartographiés",
        },
      ],
      90: [
        {
          action: "Mise en place d'un processus de gestion des PP digitalisé",
          deliverable: "Workflow PP digital",
          kpi: "100% PP digitalisés",
        },
        {
          action: "Création d'une fiche d'accueil EE spécifique R&I",
          deliverable: "Fiche accueil EE",
          kpi: "100% EE briefées",
        },
        {
          action: "Formation des donneurs d'ordre internes",
          deliverable: "Sessions formation",
          kpi: "100% formés",
        },
      ],
      180: [
        {
          action: "Inspections inopinées des interventions EE",
          deliverable: "Rapports inspections",
          kpi: "10 inspections/mois",
        },
        {
          action: "Dashboard de suivi des PP et interventions",
          deliverable: "Dashboard PP",
          kpi: "Visibilité temps réel",
        },
        {
          action: "Amélioration du taux de conformité EE",
          deliverable: "KPI conformité",
          kpi: "> 90% conformité",
        },
      ],
      365: [
        {
          action: "Bilan annuel gestion des EE",
          deliverable: "Rapport annuel EE",
          kpi: "Zéro accident EE",
        },
        {
          action: "Évaluation et notation des entreprises extérieures",
          deliverable: "Système de notation",
          kpi: "100% EE évaluées",
        },
        {
          action: "Benchmark et optimisation du processus",
          deliverable: "Processus V2",
          kpi: "Temps -30%",
        },
      ],
    },
    myExperience:
      "Coordination des plans de prévention sur 12+ sites chez Bouygues. Suivi des entreprises extérieures. Briefings sécurité.",
  },
  {
    id: 8,
    title: "Reporting & Digitalisation",
    subtitle: "Indicateurs & PowerBI",
    icon: "📊",
    description:
      "Assurer le reporting des indicateurs & digitaliser ce reporting.",
    context: {
      enjeux: [
        "Pilotage de la performance EHS par les données",
        "Exigences de reporting Groupe L'Oréal",
        "Besoin de visibilité temps réel pour le management",
        "Harmonisation avec les autres entités",
      ],
      besoins: [
        "Définition des KPIs pertinents R&I",
        "Automatisation de la collecte de données",
        "Dashboards visuels et interactifs",
        "Reporting régulier à différents niveaux",
      ],
    },
    actions: {
      30: [
        {
          action: "Audit du système de reporting actuel",
          deliverable: "État des lieux reporting",
          kpi: "Process actuel documenté",
        },
        {
          action: "Définition des KPIs EHS clés pour R&I",
          deliverable: "Liste KPIs validée",
          kpi: "10 KPIs définis",
        },
        {
          action: "Identification des sources de données",
          deliverable: "Cartographie data",
          kpi: "100% sources identifiées",
        },
      ],
      90: [
        {
          action: "Création du dashboard PowerBI EHS R&I",
          deliverable: "Dashboard V1 opérationnel",
          kpi: "Dashboard live",
        },
        {
          action: "Automatisation de la collecte de données",
          deliverable: "Workflow auto",
          kpi: "80% données auto",
        },
        {
          action: "Formation des utilisateurs au dashboard",
          deliverable: "Sessions formation",
          kpi: "100% managers formés",
        },
      ],
      180: [
        {
          action: "Dashboard V2 avec fonctionnalités avancées",
          deliverable: "Dashboard enrichi",
          kpi: "Prédictif intégré",
        },
        {
          action: "Intégration avec les systèmes Groupe",
          deliverable: "Connexion SI Groupe",
          kpi: "Interopérabilité",
        },
        {
          action: "Reporting automatisé mensuel",
          deliverable: "Rapports auto",
          kpi: "Zéro saisie manuelle",
        },
      ],
      365: [
        {
          action: "Bilan annuel data-driven",
          deliverable: "Rapport annuel data",
          kpi: "Insights actionnables",
        },
        {
          action: "IA prédictive sur les incidents",
          deliverable: "Module IA pilote",
          kpi: "Prédictions validées",
        },
        {
          action: "Benchmark avec les sites les plus digitalisés",
          deliverable: "Best practices",
          kpi: "Top 3 Groupe",
        },
      ],
    },
    myExperience:
      "Maîtrise native PowerBI. Dashboards EHS chez Bouygues et ONERA. Automatisation IA de la veille réglementaire. Réduction de 30% du traitement manuel.",
  },
  {
    id: 9,
    title: "Amélioration Continue",
    subtitle: "Propositions & Innovation",
    icon: "🚀",
    description:
      "Proposer des actions de mise en conformité ou d'amélioration.",
    context: {
      enjeux: [
        "Culture d'innovation L'Oréal à intégrer dans l'EHS",
        "Amélioration continue comme pilier du système",
        "Anticipation des évolutions réglementaires",
        "Benchmark et veille constante",
      ],
      besoins: [
        "Capacité à identifier les opportunités d'amélioration",
        "Force de proposition et créativité",
        "Capacité à porter des projets innovants",
        "Mesure de l'impact des améliorations",
      ],
    },
    actions: {
      30: [
        {
          action: "Identification des quick wins à fort impact",
          deliverable: "Liste quick wins",
          kpi: "5 quick wins identifiés",
        },
        {
          action:
            "Benchmark des innovations EHS dans l'industrie cosmétique",
          deliverable: "Rapport veille",
          kpi: "10 innovations identifiées",
        },
        {
          action: "Proposition d'un premier projet pilote",
          deliverable: "Note de cadrage projet",
          kpi: "1 projet validé",
        },
      ],
      90: [
        {
          action: "Déploiement des 3 premiers quick wins",
          deliverable: "Quick wins opérationnels",
          kpi: "3 quick wins déployés",
        },
        {
          action: "Lancement du projet pilote innovant",
          deliverable: "Projet en cours",
          kpi: "Jalons respectés",
        },
        {
          action: "Mise en place d'une boîte à idées EHS",
          deliverable: "Système BAI actif",
          kpi: "10 idées/mois",
        },
      ],
      180: [
        {
          action: "Bilan des quick wins et mesure d'impact",
          deliverable: "ROI quick wins",
          kpi: "Impact mesuré",
        },
        {
          action: "Projet pilote terminé et évalué",
          deliverable: "REX projet pilote",
          kpi: "Objectifs atteints",
        },
        {
          action: "Programme d'innovation EHS formalisé",
          deliverable: "Programme annuel",
          kpi: "Budget alloué",
        },
      ],
      365: [
        {
          action: "Bilan annuel des améliorations",
          deliverable: "Rapport impact",
          kpi: "20 améliorations réalisées",
        },
        {
          action: "Reconnaissance interne (prix, communication)",
          deliverable: "Visibilité",
          kpi: "1 prix/distinction",
        },
        {
          action: "Roadmap innovation N+1",
          deliverable: "Feuille de route",
          kpi: "5 projets planifiés",
        },
      ],
    },
    myExperience:
      "Innovation EHS : automatisation IA, création d'applications métier, e-learning immersif. Référent IA à l'ONERA. Réduction de 15% des non-conformités.",
  },
];

export const HORIZONS = ["30", "90", "180", "365"] as const;
export type Horizon = (typeof HORIZONS)[number];

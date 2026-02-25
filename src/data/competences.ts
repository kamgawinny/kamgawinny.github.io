export interface CompetenceStat {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface CompetenceItem {
  id: string;
  tagline: string;
  taglineDescription: string;
  title: string;
  subtitle: string;
  skills: string[];
  stat: CompetenceStat;
  proof: string;
}

export const competencesData: CompetenceItem[] = [
  {
    id: "01",
    tagline: "ANALYTIQUE & RIGOUREUX",
    taglineDescription: "La donnée est ma boussole pour piloter la performance",
    title: "CHIMIQUE",
    subtitle: "& Risques",
    skills: [
      "Évaluation du risque chimique",
      "Prévention CMR & Toxicologie",
      "FDS simplifiées & étiquetage CLP",
      "VLEP & métrologie d'exposition",
      "SEIRICH & outils d'évaluation",
      "Conseil EPI & protections collectives"
    ],
    stat: {
      value: "12+",
      numericValue: 12,
      suffix: "+",
      label: "sites pilotés en risque chimique"
    },
    proof: "Déploiement d'une plateforme complète de gestion du risque chimique sur 12 sites (Bouygues Energies)"
  },
  {
    id: "02",
    tagline: "CURIEUX DE TECHNOLOGIE",
    taglineDescription: "Les environnements techniques me stimulent",
    title: "LABORATOIRE",
    subtitle: "& Recherche",
    skills: [
      "Accompagnement de chercheurs",
      "Analyse de risques projets R&I",
      "ICPE & installations classées",
      "Modélisation incendie/explosion",
      "Gestion des déchets dangereux",
      "Ergonomie poste de travail R&D"
    ],
    stat: {
      value: "18",
      numericValue: 18,
      label: "mois en R&I aérospatiale (ONERA)"
    },
    proof: "Appui quotidien aux chercheurs sur les risques projets, modélisation Flumilog/ALOHA/PHAST"
  },
  {
    id: "03",
    tagline: "COMMUNIQUANT D'IMPACT",
    taglineDescription: "Convaincre, fédérer, diffuser avec enthousiasme",
    title: "SYSTÈMES",
    subtitle: "& Conformité",
    skills: [
      "ISO 45001 / ISO 14001",
      "Audits internes & externes",
      "Document Unique (DUERP)",
      "Plans de prévention (EE)",
      "Consignes & protocoles sécurité",
      "Veille réglementaire"
    ],
    stat: {
      value: "3",
      numericValue: 3,
      label: "certifications ISO accompagnées"
    },
    proof: "Animation du système documentaire avec managers et correspondants métiers — réduction de 15% des NC"
  },
  {
    id: "04",
    tagline: "INVENTIF & ORIENTÉ SERVICE",
    taglineDescription: "Créer des solutions sur mesure pour mes clients internes",
    title: "DIGITAL",
    subtitle: "& Innovation",
    skills: [
      "Power BI & dashboards EHS",
      "Automatisation IA (n8n, Make)",
      "Veille réglementaire automatisée",
      "Outils métier (SEIRICH, Kizeo, Cority)",
      "E-learning & vidéos immersives",
      "Formation & sensibilisation (150+)"
    ],
    stat: {
      value: "+30%",
      numericValue: 30,
      prefix: "+",
      suffix: "%",
      label: "taux de rapportage incidents"
    },
    proof: "Déploiement d'un outil digital de suivi incidents à l'international + veille réglementaire IA sur mesure"
  }
];

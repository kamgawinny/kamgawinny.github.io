export interface SectorItem {
  name: string;
  company: string;
  period: string;
}

export interface FlowStep {
  label: string;
  desc: string;
}

export interface LevelItem {
  level: string;
  content: string;
}

export interface CreationItem {
  title: string;
  desc: string;
}

export type VisualType = 'sectors' | 'flow' | 'levels' | 'creations';

export interface QualityVisual {
  type: VisualType;
  sectors?: SectorItem[];
  flow?: { steps: FlowStep[] };
  levels?: LevelItem[];
  creations?: CreationItem[];
}

export interface QualityStat {
  value: string;
  label: string;
}

export interface QualityData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string[];
  visual: QualityVisual;
  stat?: QualityStat;
}

export const adnData: QualityData[] = [
  {
    id: "curious",
    number: "01",
    title: "CURIEUX DE TECHNOLOGIE",
    tagline: "Les environnements techniques me stimulent",
    description: [
      "Mon parcours m'a conduit à travers 4 secteurs aux technologies radicalement différentes : l'industrie lourde chez Lafarge Holcim, la construction internationale chez Bouygues Bâtiment, l'énergie et les services, puis l'aérospatiale à l'ONERA.",
      "Cette diversité démontre ma capacité d'adaptation rapide aux environnements technologiques complexes, rendue possible par une curiosité insatiable.",
      "Aujourd'hui, j'explore l'IA générative et l'automatisation pour réinventer les process EHS."
    ],
    visual: {
      type: 'sectors',
      sectors: [
        { name: "Industrie", company: "Lafarge Holcim", period: "2018–2021" },
        { name: "Construction", company: "Bouygues Bâtiment", period: "2022" },
        { name: "Énergie", company: "Bouygues Energies", period: "2022–2023" },
        { name: "Aérospatial", company: "ONERA", period: "2024–2026" }
      ]
    },
    stat: {
      value: "4",
      label: "secteurs technologiques maîtrisés"
    }
  },
  {
    id: "analytical",
    number: "02",
    title: "ANALYTIQUE & RIGOUREUX",
    tagline: "La donnée est ma boussole",
    description: [
      "Je suis profondément data-driven. La donnée matérielle est au cœur de mes process EHS — elle oriente nos actions, notre stratégie, et permet de recalibrer en continu.",
      "Dans mes expériences, j'ai su collecter des données brutes EHS, les transformer et les exploiter dans des dashboards Power BI pour transmettre des insights pertinents aux collaborateurs et au management."
    ],
    visual: {
      type: 'flow',
      flow: {
        steps: [
          { label: "Collecte", desc: "Données EHS brutes" },
          { label: "Transformation", desc: "Power BI" },
          { label: "Insights", desc: "Décisions éclairées" }
        ]
      }
    },
    stat: {
      value: "-15%",
      label: "non-conformités par pilotage data"
    }
  },
  {
    id: "communicator",
    number: "03",
    title: "COMMUNIQUANT D'IMPACT",
    tagline: "Adapter le message à l'audience",
    description: [
      "J'ai affiné mes compétences en communication tout au long de mon parcours. Je sais m'adresser à des collaborateurs de tous niveaux hiérarchiques et fonctions — du technicien terrain au COMEX.",
      "J'adapte mon discours selon la population et je crée des canaux de diffusion impactants pour véhiculer les messages de façon mémorable."
    ],
    visual: {
      type: 'levels',
      levels: [
        { level: "Terrain", content: "Causeries, Flash sécurité, Sensibilisations" },
        { level: "Managers", content: "Reporting, KPIs, Plans d'action" },
        { level: "Direction", content: "Stratégie, Vision, Arbitrages" }
      ]
    },
    stat: {
      value: "150+",
      label: "collaborateurs sensibilisés"
    }
  },
  {
    id: "inventive",
    number: "04",
    title: "INVENTIF & ORIENTÉ SERVICE",
    tagline: "Créer des solutions sur mesure",
    description: [
      "C'est une qualité qui me définit complètement. Je sais saisir les besoins des collaborateurs, identifier leurs pain points, et y répondre avec des solutions taillées sur mesure."
    ],
    visual: {
      type: 'creations',
      creations: [
        {
          title: "Application Remontées Dangereuses",
          desc: "Système de signalement avec cotation automatique des risques"
        },
        {
          title: "Matrice de Matérialité RSE",
          desc: "Outil d'aide à la décision COMEX pour les enjeux ESG prioritaires"
        },
        {
          title: "App Modélisation Risques Labo",
          desc: "Application dédiée à l'environnement Recherche & laboratoires"
        },
        {
          title: "E-learning Chercheurs",
          desc: "Modules digitaux adaptés aux scientifiques avec validation des acquis"
        }
      ]
    },
    stat: {
      value: "4",
      label: "solutions créées de A à Z"
    }
  }
];

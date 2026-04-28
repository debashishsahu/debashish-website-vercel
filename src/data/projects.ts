export type ProjectTier = 'key' | 'other' | 'side'

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  duration: string
  period: string
  team: string
  role: string
  tags: string[]
  descriptor: string
  tier: ProjectTier
  prev: string | null
  next: string | null
  heroImage?: string
  cardImage?: string
}

export const projects: Project[] = [
  // KEY PROJECTS
  {
    slug: 'imicampaign',
    cardImage: '/images/work/imicampaign-card.png',
    title: 'Campaign Management System',
    client: 'IMImobile',
    category: 'Enterprise · UX Design',
    duration: '16 months',
    period: 'Sep 2017 – Jan 2019',
    team: '2 Interaction Designers, 1 Visual Designer',
    role: 'Project Lead, Requirement Analysis, User Research, Interaction Design, Visual Design',
    tags: ['Enterprise', 'UX Design'],
    descriptor:
      'Redesigning a multi-channel campaign management platform used by enterprise marketing teams.',
    tier: 'key',
    prev: null,
    next: 'smart-cities',
  },
  {
    slug: 'smart-cities',
    cardImage: '/images/work/smart-cities-card.png',
    title: 'Smart Cities',
    client: 'Honeywell',
    category: 'Enterprise · UX Strategy',
    duration: '6 months',
    period: '2019',
    team: 'Cross-functional',
    role: 'Researcher & UX Strategist',
    tags: ['Enterprise', 'IoT'],
    descriptor:
      'A research-driven initiative to redesign urban operations through integrated digital infrastructure.',
    tier: 'key',
    prev: 'imicampaign',
    next: 'customs-clearance',
  },
  {
    slug: 'customs-clearance',
    cardImage: '/images/work/customs-clearance-card.png',
    title: 'Customs Clearance Application',
    client: 'Agility Logistics',
    category: 'Enterprise · Interaction Design',
    duration: '5 weeks',
    period: '2018',
    team: '2 Interaction Designers, 1 Visual Designer',
    role: 'Project Lead, Requirement Analysis, Interaction Design, Visual Design',
    tags: ['Enterprise', 'Legacy Systems'],
    descriptor:
      'Redefining user experience for a customs management system used by trade facilitation officials.',
    tier: 'key',
    prev: 'smart-cities',
    next: 'fzholidays',
  },
  {
    slug: 'fzholidays',
    cardImage: '/images/work/fzholidays-card.jpg',
    title: 'FlyDubai Holidays',
    client: 'FlyDubai',
    category: 'B2C · UX Design',
    duration: '6 months',
    period: 'Sep 2016 – Mar 2017',
    team: '1 Design Manager, 2 Design Leads, 3 Interaction Designers, 2 Visual Designers',
    role: 'Requirement Analysis, User Research, Competitive Research, Interaction Design',
    tags: ['B2C', 'Travel'],
    descriptor:
      'Designing a one-stop holiday booking experience for a major Middle Eastern airline.',
    tier: 'key',
    prev: 'customs-clearance',
    next: 'space-explorer',
  },
  {
    slug: 'space-explorer',
    cardImage: '/images/work/space-explorer-card.png',
    title: 'Space Explorer',
    client: 'Nehru Planetarium',
    category: 'Interaction Design · NID',
    duration: '~7 months',
    period: '2013',
    team: 'Solo project',
    role: 'Researcher, UX Strategist, Game & Interaction Designer, Prototyping',
    tags: ['NID Project', 'Interaction'],
    descriptor:
      'A gesture-based game for Nehru Planetarium that transforms museum learning into interactive play.',
    tier: 'key',
    prev: 'fzholidays',
    next: 'ezili',
  },

  // OTHER PROJECTS
  {
    slug: 'ezili',
    cardImage: '/images/work/ezili-card.png',
    title: 'Ezili — Shopping App',
    client: 'Imaginea Design',
    category: 'B2C · Mobile',
    duration: 'N/A',
    period: '2016',
    team: 'Internal',
    role: 'Interaction Design',
    tags: ['B2C', 'Mobile'],
    descriptor:
      'A shopping app reconceptualised around note-making and discovery behaviour.',
    tier: 'other',
    prev: 'space-explorer',
    next: 'unaccompanied-minor',
  },
  {
    slug: 'unaccompanied-minor',
    cardImage: '/images/work/unaccompanied-minor-card.png',
    title: 'Unaccompanied Minors',
    client: 'Imaginea Design',
    category: 'IoT · UX Design',
    duration: 'N/A',
    period: '2015',
    team: 'Internal',
    role: 'Interaction Design',
    tags: ['IoT', 'B2C'],
    descriptor:
      'An IoT-based solution for the challenges of children travelling solo.',
    tier: 'other',
    prev: 'ezili',
    next: 'touch-retail',
  },
  {
    slug: 'touch-retail',
    cardImage: '/images/work/touch-retail-card.png',
    title: 'Touch Kiosk for Retail',
    client: 'Imaginea Design',
    category: 'Retail · Kiosk',
    duration: 'N/A',
    period: '2016',
    team: 'Internal',
    role: 'Interaction Design, Visual Design',
    tags: ['Retail', 'Kiosk'],
    descriptor:
      'A kiosk-based shopping application designed to elevate brick & mortar experiences.',
    tier: 'other',
    prev: 'unaccompanied-minor',
    next: 'sensit',
  },
  {
    slug: 'sensit',
    cardImage: '/images/work/sensit-card.png',
    title: 'Sensit',
    client: 'Imaginea Design',
    category: 'IoT · Wellbeing',
    duration: 'N/A',
    period: '2015',
    team: 'Internal IoT Lab',
    role: 'Interaction Design',
    tags: ['IoT', 'Wellbeing'],
    descriptor:
      'A smart sensor product tackling back problems caused by improper sitting habits.',
    tier: 'other',
    prev: 'touch-retail',
    next: 'smart-companion',
  },
  {
    slug: 'smart-companion',
    cardImage: '/images/work/smart-companion-card.png',
    title: 'Context Smart Companion',
    client: 'L&T Infotech',
    category: 'Mobile · Transit',
    duration: 'N/A',
    period: '2015',
    team: 'Internal',
    role: 'Interaction Design',
    tags: ['Mobile', 'Transit'],
    descriptor:
      'End-to-end connectivity for daily metro commuters — a PoC for a client.',
    tier: 'other',
    prev: 'sensit',
    next: 'zakoopi',
  },
  {
    slug: 'zakoopi',
    cardImage: '/images/work/zakoopi-card.png',
    title: 'Zakoopi',
    client: 'Freelance',
    category: 'Web App · NID',
    duration: 'N/A',
    period: '2013',
    team: '2 stakeholders',
    role: 'UX Design, Information Architecture',
    tags: ['Web App', 'NID'],
    descriptor:
      'A local search engine and comprehensive database for finding designers, boutiques and tailors.',
    tier: 'other',
    prev: 'smart-companion',
    next: 'vox',
  },

  // SIDE PROJECTS
  {
    slug: 'vox',
    cardImage: '/images/work/vox-card.png',
    title: 'VOX',
    client: 'Mindtree / NID',
    category: 'Physical Product · IoT',
    duration: 'N/A',
    period: '2014',
    team: 'Internal',
    role: 'Interaction Design',
    tags: ['Physical', 'IoT'],
    descriptor:
      'A physical multi-lingual speech conversion device — VOX Ear and VOX Jacket.',
    tier: 'side',
    prev: 'zakoopi',
    next: 'shadow-eaters',
  },
  {
    slug: 'shadow-eaters',
    cardImage: '/images/work/shadow-eaters-card.png',
    title: 'Shadow Eaters',
    client: 'NID / Mindtree',
    category: 'Interactive Installation',
    duration: 'N/A',
    period: '2014',
    team: 'Internal',
    role: 'Interaction Design',
    tags: ['Installation', 'Creative'],
    descriptor:
      'An interactive installation translating Japanese folklore of decay into a digital shadow-consuming swarm.',
    tier: 'side',
    prev: 'vox',
    next: 'ozchi-paper',
  },
  {
    slug: 'ozchi-paper',
    cardImage: '/images/work/ozchi-card.png',
    title: 'Semantic Emails',
    client: 'OZCHI',
    category: 'Research · Paper',
    duration: '24 hours',
    period: '2013',
    team: 'NID team',
    role: 'Concept, Interaction Design',
    tags: ['Research', 'Academic'],
    descriptor:
      'A semantic email system designed as a response to the OZCHI 24-hour challenge.',
    tier: 'side',
    prev: 'shadow-eaters',
    next: 'drawing-canvas',
  },
  {
    slug: 'drawing-canvas',
    cardImage: '/images/work/drawing-canvas-card.png',
    title: '3D Drawing Canvas',
    client: 'NID',
    category: 'Interaction Design · NID',
    duration: 'N/A',
    period: '2012',
    team: 'Classroom project',
    role: 'Interaction Design',
    tags: ['NID', 'Gesture'],
    descriptor:
      'A 3D canvas for drawing using gestures instead of mouse or keyboard.',
    tier: 'side',
    prev: 'ozchi-paper',
    next: 'soundscape-bitten',
  },
  {
    slug: 'soundscape-bitten',
    cardImage: '/images/work/bitten-card.png',
    title: 'Bitten — Soundscape',
    client: 'NID',
    category: 'Sound Design · NID',
    duration: 'N/A',
    period: '2012',
    team: 'Classroom project',
    role: 'Sound & Interaction Design',
    tags: ['NID', 'Sound'],
    descriptor:
      'Soundscape design exploring the dimensions of sound with a defined narrative.',
    tier: 'side',
    prev: 'drawing-canvas',
    next: null,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getKeyProjects(): Project[] {
  return projects.filter((p) => p.tier === 'key')
}

export function getOtherProjects(): Project[] {
  return projects.filter((p) => p.tier === 'other')
}

export function getSideProjects(): Project[] {
  return projects.filter((p) => p.tier === 'side')
}

export const tagColors: Record<string, { bg: string; text: string }> = {
  Enterprise:   { bg: 'bg-[#E6F1FB]', text: 'text-[#185FA5]' },
  'UX Design':  { bg: 'bg-[#EAF3DE]', text: 'text-[#3B6D11]' },
  IoT:          { bg: 'bg-[#FAEEDA]', text: 'text-[#854F0B]' },
  B2C:          { bg: 'bg-[#EAF3DE]', text: 'text-[#3B6D11]' },
  Travel:       { bg: 'bg-[#E6F1FB]', text: 'text-[#185FA5]' },
  'NID Project':{ bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  Interaction:  { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  Mobile:       { bg: 'bg-[#E6F1FB]', text: 'text-[#185FA5]' },
  'Legacy Systems': { bg: 'bg-[#FAEEDA]', text: 'text-[#854F0B]' },
  Retail:       { bg: 'bg-[#EAF3DE]', text: 'text-[#3B6D11]' },
  Kiosk:        { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  Wellbeing:    { bg: 'bg-[#EAF3DE]', text: 'text-[#3B6D11]' },
  Transit:      { bg: 'bg-[#E6F1FB]', text: 'text-[#185FA5]' },
  'Web App':    { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  NID:          { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  Physical:     { bg: 'bg-[#FAEEDA]', text: 'text-[#854F0B]' },
  Installation: { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  Creative:     { bg: 'bg-[#EAF3DE]', text: 'text-[#3B6D11]' },
  Research:     { bg: 'bg-[#E6F1FB]', text: 'text-[#185FA5]' },
  Academic:     { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
  Gesture:      { bg: 'bg-[#FAEEDA]', text: 'text-[#854F0B]' },
  Sound:        { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' },
}

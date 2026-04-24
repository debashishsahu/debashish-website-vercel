import { ReactNode } from 'react'

export interface CaseStudySection {
  type:
    | 'sectionHeader'
    | 'text'
    | 'bulletList'
    | 'highlightBlock'
    | 'impactMetric'
    | 'fullWidthImage'
    | 'labeledItem'
    | 'imageGroup'
    | 'mediaTextCard'
    | 'comparisonTable'
  props: Record<string, unknown>
}

export interface CaseStudyData {
  slug: string
  heroVariant: 'A' | 'B'
  heroImage: string
  sections: CaseStudySection[]
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'imicampaign',
    heroVariant: 'A',
    heroImage: '/images/imicampaign/hero.jpg',
    sections: [
      {
        type: 'sectionHeader',
        props: {
          variant: 'B',
          eyebrow: 'The Challenge',
          title: 'A powerful platform hindered by complexity',
        },
      },
      {
        type: 'text',
        props: {
          body: 'IMImobile\'s campaign management system enabled enterprise marketing teams to orchestrate multi-channel communications across SMS, email, push, and voice. Despite its technical power, the platform suffered from steep learning curves, fragmented workflows, and a visual language that had accreted over years without a coherent strategy.',
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'callout',
          label: 'Core Problem',
          text: 'Marketing managers were spending 60% of their time navigating the tool rather than creating campaigns — the opposite of what the product promised.',
        },
      },
      {
        type: 'sectionHeader',
        props: {
          variant: 'A',
          title: 'Research & Discovery',
        },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Key research findings',
          columns: 2,
          items: [
            { term: 'Workflow fragmentation:', description: 'Campaign creation spanned 7+ separate screens with no clear progress indicator.' },
            { term: 'Mental model mismatch:', description: 'The platform\'s data model was exposed to users, requiring them to think like engineers.' },
            { term: 'Onboarding drop-off:', description: '68% of new users abandoned campaign creation in the first week without support.' },
            { term: 'Template confusion:', description: 'Users couldn\'t distinguish between reusable templates and one-off drafts.' },
            { term: 'Audit anxiety:', description: 'No visibility into who changed what or when — critical in regulated industries.' },
            { term: 'Mobile gap:', description: 'Marketers needed to monitor campaigns on mobile but the existing UI was desktop-only.' },
          ],
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/timeline.png',
          alt: 'Project timeline showing 16-month design process',
          caption: 'A 16-month engagement structured across Discovery, Strategy, Design, and Validation sprints.',
          aspectRatio: 'panoramic',
        },
      },
      {
        type: 'sectionHeader',
        props: {
          variant: 'A',
          title: 'Design Approach',
        },
      },
      {
        type: 'labeledItem',
        props: {
          variant: 'numbered',
          numberedItems: [
            {
              number: 1,
              title: 'Unified Campaign Canvas',
              body: 'Collapsed 7 screens into a single canvas with a step-by-step wizard overlay. Users see the full campaign structure at a glance while editing in context.',
            },
            {
              number: 2,
              title: 'Smart Templating System',
              body: 'Introduced a clear library/draft distinction with visual thumbnails, usage stats, and version history. Templates became first-class objects, not an afterthought.',
            },
            {
              number: 3,
              title: 'Audience Segment Builder',
              body: 'Replaced SQL-like query syntax with a visual filter builder. Non-technical marketers could now define complex audience segments without developer assistance.',
            },
          ],
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'quote',
          text: 'For the first time, I can set up a campaign myself without calling the dev team. That alone saves us days per launch.',
          attribution: 'Senior Marketing Manager, enterprise customer',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Impact' },
      },
      {
        type: 'impactMetric',
        props: {
          metrics: [
            { stat: '60%', label: 'Reduction in setup time', description: 'Campaign creation time dropped from 3.5 hours to 80 minutes on average.' },
            { stat: '4.2×', label: 'Increase in template usage', description: 'Teams reused templates far more once they were discoverable.' },
            { stat: '89%', label: 'User satisfaction score', description: 'Post-launch NPS from enterprise users who trialled the new interface.' },
          ],
        },
      },
    ],
  },
  {
    slug: 'smart-cities',
    heroVariant: 'A',
    heroImage: '/images/smart-cities/top-image.png',
    sections: [
      {
        type: 'sectionHeader',
        props: {
          variant: 'B',
          eyebrow: 'Context',
          title: 'Designing for cities at scale',
        },
      },
      {
        type: 'text',
        props: {
          body: 'Honeywell\'s Smart Cities initiative aimed to integrate disparate urban infrastructure — traffic, utilities, emergency response, and public safety — into a unified command and control platform. As the research and strategy lead, I guided a 6-month effort to understand city operators\' mental models and translate them into an actionable design framework.',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Research Strategy' },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Research methods used',
          items: [
            { term: 'Contextual inquiry:', description: '14 field visits with traffic control centres, utility command rooms, and emergency dispatch.' },
            { term: 'Expert interviews:', description: '22 interviews with city planners, operators, and technology vendors across 4 countries.' },
            { term: 'Journey mapping:', description: 'Mapped crisis response scenarios to identify coordination bottlenecks.' },
            { term: 'Technology audit:', description: 'Assessed 18 existing systems operators relied on to identify integration opportunities.' },
          ],
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'callout',
          label: 'Strategic Insight',
          text: 'City operators don\'t need more data — they need the right signal at the right moment. Every design decision was filtered through this lens.',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Design Framework' },
      },
      {
        type: 'labeledItem',
        props: {
          variant: 'numbered',
          numberedItems: [
            { number: 1, title: 'Situational Awareness Layer', body: 'A unified map view with prioritised incident feeds and cross-system alert correlation, replacing the 4-monitor setup most operators used.' },
            { number: 2, title: 'Incident Command Protocol', body: 'Structured workflows aligned to existing emergency response frameworks (ICS), reducing onboarding resistance and regulatory friction.' },
            { number: 3, title: 'Predictive Intelligence Panel', body: 'Surfaced Honeywell\'s ML predictions in plain language with confidence indicators — operators trusted the system more when they understood its reasoning.' },
          ],
        },
      },
      {
        type: 'impactMetric',
        props: {
          metrics: [
            { stat: '4', label: 'Cities in pilot programme', description: 'Design framework adopted by Honeywell\'s smart city product team.' },
            { stat: '35%', label: 'Faster incident response', description: 'Measured in controlled simulations with city operator teams.' },
            { stat: '12', label: 'Design principles', description: 'Published internally as the foundation for Honeywell\'s urban ops design language.' },
          ],
        },
      },
    ],
  },
  {
    slug: 'customs-clearance',
    heroVariant: 'A',
    heroImage: '/images/customs-clearance/hero.jpg',
    sections: [
      {
        type: 'sectionHeader',
        props: {
          variant: 'B',
          eyebrow: 'The Brief',
          title: 'Modernising a high-stakes legacy system',
        },
      },
      {
        type: 'text',
        props: {
          body: 'Agility Logistics needed a ground-up redesign of their customs clearance application used by trade facilitation officials and clearing agents to process hundreds of shipments daily. The existing system was a 15-year-old desktop application with dense data tables, unclear status flows, and zero mobile access.',
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'callout',
          label: 'Design Constraint',
          text: 'A 5-week sprint with no time for field research — design decisions needed to be grounded in proxy data, stakeholder knowledge, and rapid iteration.',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Key Design Decisions' },
      },
      {
        type: 'labeledItem',
        props: {
          variant: 'numbered',
          numberedItems: [
            { number: 1, title: 'Status-first dashboard', body: 'Replaced the default "all shipments" table with a status-banded view: Action Required, In Progress, Cleared, Rejected. Users now see their workload at a glance.' },
            { number: 2, title: 'Document hub per shipment', body: 'All documents — BoL, invoice, packing list, certificates — aggregated in one collapsible panel with upload, preview, and version tracking.' },
            { number: 3, title: 'Regulatory checklist', body: 'Dynamic compliance checklist generated per shipment type, flagging missing items before submission to reduce costly resubmissions.' },
          ],
        },
      },
      {
        type: 'impactMetric',
        props: {
          metrics: [
            { stat: '5w', label: 'Design sprint duration', description: 'Full UX and visual design delivered in 5 weeks.' },
            { stat: '40%', label: 'Fewer resubmissions', description: 'Estimated reduction from compliance checklist feature.' },
            { stat: '100%', label: 'Mobile coverage', description: 'New design is fully responsive for field agent use.' },
          ],
        },
      },
    ],
  },
  {
    slug: 'fzholidays',
    heroVariant: 'A',
    heroImage: '/images/fzholidays/hero.jpg',
    sections: [
      {
        type: 'sectionHeader',
        props: {
          variant: 'B',
          eyebrow: 'The Opportunity',
          title: 'One-stop holiday booking for a growing airline',
        },
      },
      {
        type: 'text',
        props: {
          body: 'FlyDubai wanted to expand beyond flight bookings into holiday packages — hotels, transfers, tours, and visa services — all bundled into a single booking flow. The challenge was building a user experience that felt effortless for leisure travellers while handling the underlying complexity of multi-vendor bundle pricing.',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Research & Personas' },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Primary user types',
          columns: 2,
          items: [
            { term: 'The Deal Seeker:', description: 'Price-driven, compares extensively, needs clear value communication and total cost visibility.' },
            { term: 'The Experience Curator:', description: 'Aspirational, values curation over price, trusts editorial recommendations.' },
            { term: 'The Family Planner:', description: 'Prioritises logistics, wants kid-friendly filters and family room configurations.' },
            { term: 'The Business Extender:', description: 'Adding leisure days to a business trip, time-poor, values one-tap actions.' },
          ],
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'quote',
          text: 'I want to choose a destination and have everything just appear — flights, hotel, stuff to do. I don\'t want to build it from scratch.',
          attribution: 'Research participant, Dubai resident',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Design Solutions' },
      },
      {
        type: 'labeledItem',
        props: {
          variant: 'numbered',
          numberedItems: [
            { number: 1, title: 'Destination-led discovery', body: 'Replaced the search-first model with curated destination cards — editorial, seasonal, and trending picks that reduced decision paralysis.' },
            { number: 2, title: 'Bundle builder', body: 'Guided step-by-step bundle assembly with live total price update. Users saw the holiday taking shape visually as they added components.' },
            { number: 3, title: 'Trust signals integration', body: 'Reviews, hotel ratings, airline policy callouts, and refund conditions surfaced proactively at decision moments.' },
          ],
        },
      },
      {
        type: 'impactMetric',
        props: {
          metrics: [
            { stat: '28%', label: 'Higher bundle conversion', description: 'Compared to previous single-product flow baseline.' },
            { stat: '6mo', label: 'Design timeline', description: 'Full end-to-end UX and visual design.' },
            { stat: '9', label: 'User flows designed', description: 'Including search, bundle, checkout, manage booking, and support.' },
          ],
        },
      },
    ],
  },
  {
    slug: 'space-explorer',
    heroVariant: 'A',
    heroImage: '/images/space-explorer/header-image.png',
    sections: [
      {
        type: 'sectionHeader',
        props: {
          variant: 'B',
          eyebrow: 'The Project',
          title: 'Making a planetarium feel alive',
        },
      },
      {
        type: 'text',
        props: {
          body: 'Space Explorer was my NID graduation project — a gesture-based interactive game designed for Nehru Planetarium, Delhi. The brief: transform passive museum-goers into active explorers. Built over 7 months using Kinect motion sensing, it turned the planetarium lobby into a playable interface.',
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'callout',
          label: 'Design Challenge',
          text: 'No controllers, no touchscreens — the entire interaction had to work through natural body movement in a busy, noisy public space.',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Process & Exploration' },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Phases of the project',
          items: [
            { term: 'Phase 1 – Research:', description: 'Observed 200+ planetarium visitors over 3 visits. Identified boredom at exhibit entrances as the primary engagement problem.' },
            { term: 'Phase 2 – Ideation:', description: 'Generated 40+ game concepts. Narrowed to gesture-controlled space navigation after play-testing paper prototypes.' },
            { term: 'Phase 3 – Prototyping:', description: 'Built 4 Kinect prototypes with increasing fidelity, testing gesture vocabularies and learning curves.' },
            { term: 'Phase 4 – Polish:', description: 'Designed a full visual system — UI, iconography, sound design, and onboarding flow — for public presentation.' },
          ],
        },
      },
      {
        type: 'impactMetric',
        props: {
          metrics: [
            { stat: '7mo', label: 'Solo project duration', description: 'Research, design, prototyping, and build by one student designer.' },
            { stat: '94%', label: 'Positive engagement', description: 'Of test participants engaged for 3+ minutes without instruction.' },
            { stat: '1st', label: 'NID graduation showcase', description: 'Featured project at National Design Convention 2013.' },
          ],
        },
      },
    ],
  },
]

// Generic template for projects without detailed case study content
export function getGenericSections(title: string, descriptor: string, role: string): CaseStudySection[] {
  return [
    {
      type: 'sectionHeader',
      props: { variant: 'B', eyebrow: 'Overview', title: 'Project Overview' },
    },
    {
      type: 'text',
      props: { body: descriptor },
    },
    {
      type: 'sectionHeader',
      props: { variant: 'A', title: 'My Role' },
    },
    {
      type: 'bulletList',
      props: {
        items: role.split(',').map((r) => ({ description: r.trim() })),
      },
    },
    {
      type: 'highlightBlock',
      props: {
        variant: 'callout',
        label: 'Note',
        text: 'Detailed case study content for this project is available on request. Please reach out to discuss specifics.',
      },
    },
  ]
}

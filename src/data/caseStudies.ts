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
          eyebrow: 'The Context',
          title: 'Enterprise campaign management, rebuilt from first principles',
        },
      },
      {
        type: 'text',
        props: {
          body: "IMImobile's campaign platform orchestrated millions of cross-channel communications — SMS, push, MMS, and email — for enterprise marketing teams. Campaign managers relied on it daily to build, launch, and track complex multi-step campaigns. The system worked, but it was working against its users.",
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'callout',
          label: 'The Core Problem',
          text: 'A form-wizard paradigm designed for simple deployments had been stretched to handle branching, multi-channel campaign logic — forcing power users to mentally reconstruct flows that the tool refused to show them.',
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/existing-platform.png',
          alt: 'Screenshots of the existing IMImobile campaign management platform showing the legacy form-based interface',
          caption: '📌 IMAGE SLOT 1 — existing-platform.png: Screenshots of the old form-based platform. Use a side-by-side or annotated screenshot of the legacy UI to show the problem state.',
          aspectRatio: 'wide',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Research & Discovery' },
      },
      {
        type: 'text',
        props: {
          body: "Rather than requesting direct user access upfront, we first built credibility through internal collaboration — consulting one Product Manager, two Account Managers, four Operations staff, and five Project Managers and Lead Developers. That foundation of trust opened the door to genuine insight about where the system was failing.",
        },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Key research findings',
          columns: 2,
          items: [
            { term: 'No high-level visibility:', description: 'Leadership had no single view of campaign performance across P&Ls. Reporting meant compiling Excel files manually.' },
            { term: 'Linear forms, non-linear thinking:', description: 'Campaign managers think in branching flowcharts. The tool forced them through sequential form steps with no way to see the whole picture.' },
            { term: 'Drill-down was impossible:', description: 'Users needed to move fluidly from high-level metrics to row-level deployment data. The existing structure made that journey slow and indirect.' },
            { term: 'No unified calendar:', description: 'Campaign scheduling was fragmented across teams with no single source of truth, causing coordination overhead and missed dependencies.' },
            { term: 'Asset management was scattered:', description: 'Rich media assets had no centralised library, forcing repetitive uploads and inconsistent usage across campaigns.' },
            { term: 'Modification requests were constant:', description: 'Operators needed to adjust live campaigns frequently, but the form-based system made even small edits a multi-step process prone to error.' },
          ],
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/research-process.png',
          alt: 'Research synthesis process showing affinity mapping, card sorting exercise, and stakeholder interview notes',
          caption: '📌 IMAGE SLOT 2 — research-process.png: Photo or scan of the research process — card sorting exercise, affinity map, whiteboard synthesis, or stakeholder interview documentation.',
          aspectRatio: 'wide',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'The People We Designed For' },
      },
      {
        type: 'text',
        props: {
          body: 'Two personas shaped every major design decision — one who needed to see the forest, one who lived in the trees. Getting the tool right for both meant solving fundamentally different problems within a single interface.',
        },
      },
      {
        type: 'bulletList',
        props: {
          columns: 2,
          items: [
            { term: 'Aaron Loeb — Marketing Head:', description: 'Needs aggregated performance across all campaigns and P&Ls at a glance, with clear ROI visualisation. Currently drowning in Excel reports assembled by his team every week.' },
            { term: 'Marie Walter — Campaign Manager:', description: 'Builds and manages complex, multi-channel journeys daily. Frustrated by constant modification requests and a form-based system that forces linear thinking onto non-linear work.' },
          ],
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/personas.png',
          alt: 'User persona documents for Aaron Loeb (Marketing Head) and Marie Walter (Campaign Manager)',
          caption: '📌 IMAGE SLOT 3 — personas.png: The two persona documents — Aaron Loeb and Marie Walter. Export from Figma or use a photo of the printed personas.',
          aspectRatio: 'wide',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Information Architecture' },
      },
      {
        type: 'text',
        props: {
          body: 'We ran a card-sorting exercise with stakeholders and end-users to decode their actual mental models — not the system\'s internal data model. The IA went through three distinct iterations before it was ready to drive screen-level design.',
        },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Three iterations to the right structure',
          items: [
            { term: 'Iteration 1 — Existing audit:', description: 'Experienced the product first-hand across all critical use cases. Mapped the current IA to expose structural assumptions baked into the legacy system.' },
            { term: 'Iteration 2 — Card sorting:', description: 'Users grouped and labelled content independently. This surfaced a clear mismatch between how the system organised information and how users expected to find it.' },
            { term: 'Iteration 3 — Final architecture:', description: 'Produced a three-tier hierarchy: P&L → Campaign Groups → Deployments. Every subsequent screen and interaction pattern was anchored to this structure.' },
          ],
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/information-architecture.png',
          alt: 'Information architecture diagram showing the three-tier hierarchy of P&L, Campaign Groups, and Deployments with the card sorting process',
          caption: '📌 IMAGE SLOT 3b — information-architecture.png: The IA diagram showing before/after structure, or the card sorting exercise output. The three-tier hierarchy diagram works well here.',
          aspectRatio: 'wide',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Design Approach' },
      },
      {
        type: 'labeledItem',
        props: {
          variant: 'numbered',
          numberedItems: [
            {
              number: 1,
              title: 'Centralised Performance Dashboard',
              body: 'Co-designed iteratively with stakeholders, the dashboard gave every user tier what they actually needed. Strategic leaders got a real-time overview across Campaign Groups and P&Ls. Tactical users got donut, line, area, and funnel charts they could interact with and download directly — eliminating the Excel reporting workflow that had consumed hours each week.',
            },
            {
              number: 2,
              title: 'Visual Campaign Builder',
              body: 'We replaced the form-wizard entirely with a node-based canvas. Monolithic form steps were deconstructed into atomic nodes — SMS trigger, segment filter, time delay, and more — each with its own properties panel. Users could now drag, connect, and visualise an entire campaign flow, including complex branching logic, on a single interactive canvas. The mental model users already had finally matched the tool they were using.',
            },
            {
              number: 3,
              title: 'Intelligent Setup Wizard',
              body: "To remove blank-canvas fatigue, we introduced an objective-driven setup wizard. Users select a campaign type — Promotion, Instant Deployment, or similar — and receive a pre-configured template as a starting point. Common patterns are built in; nothing needs to be built from scratch.",
            },
            {
              number: 4,
              title: 'Smart Truncation for Long Names',
              body: 'Enterprise campaigns often carry deployment names 64–128 characters long, with version identifiers and dates appended at the end. Standard end-truncation buried that critical information. We implemented middle-weighted ellipses — preserving both the beginning and end of the string — so users could identify campaigns at a glance without opening them.',
            },
          ],
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/dashboard.png',
          alt: 'Redesigned campaign management dashboard showing real-time performance metrics, donut charts, and funnel visualisations',
          caption: '📌 IMAGE SLOT 4 — dashboard.png: Final dashboard design. Ideally a full-screen or annotated screenshot of the live performance dashboard with charts visible.',
          aspectRatio: 'panoramic',
        },
      },
      {
        type: 'fullWidthImage',
        props: {
          src: '/images/imicampaign/campaign-builder.png',
          alt: 'Visual Campaign Builder showing the node-based canvas with connected SMS, email, and segment filter nodes forming a branching campaign flow',
          caption: '📌 IMAGE SLOT 5 — campaign-builder.png: The Visual Campaign Builder canvas. Show the node-based flow with multiple node types connected — this is the hero design of the project.',
          aspectRatio: 'panoramic',
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'quote',
          text: 'The new interaction experience with the canvas and draggable nodes is both highly usable and a genuine wow factor. You can visualise the entire campaign and trace exactly which node needs tweaking — without digging through a long series of clickable forms and wizards.',
          attribution: 'Enterprise Campaign Manager, IMImobile client — Usability Testing',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Design Deliverables' },
      },
      {
        type: 'text',
        props: {
          body: "Knowing our engagement was temporary, we designed for handoff from day one. Every decision was documented so the system could survive and evolve without us.",
        },
      },
      {
        type: 'bulletList',
        props: {
          columns: 2,
          items: [
            { term: 'Wireframe Specification:', description: 'A comprehensive technical blueprint covering every component, data visualisation, and interaction. Went beyond visuals to define expected data formats and outcomes for every table and chart — the primary source of truth for the development team.' },
            { term: 'Visual Specification + Styleguide:', description: 'Every visual value translated into pixels and percentages — colour palettes, shadow depths, component dimensions, chart rendering rules. Developers could implement directly into CSS without interpretation or guesswork.' },
          ],
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Validation' },
      },
      {
        type: 'text',
        props: {
          body: "We ran 10 remote usability tests with active campaign managers across IMImobile's enterprise client base in multiple geographies. Participants worked through real campaign scenarios using the new interface. The response was overwhelmingly positive — validating not just the usability improvements, but the fundamental shift in interaction paradigm.",
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'quote',
          text: 'Dynamic, relevant graphs that can be downloaded and archived directly for client use. Previously, we spent significant time in Excel just making the graphs presentable.',
          attribution: 'Enterprise Campaign Manager, IMImobile client — Usability Testing',
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
            { stat: '50%', label: 'Faster navigation', description: 'Reduction in time spent finding information and completing tasks across the platform.' },
            { stat: '30%', label: 'Faster campaign creation', description: 'Reduction in time to build and configure new campaigns end-to-end.' },
            { stat: '45%', label: 'Faster handoff', description: 'Reduction in collaboration overhead between design, development, and client teams.' },
          ],
        },
      },
      {
        type: 'highlightBlock',
        props: {
          variant: 'callout',
          label: 'Acquisition',
          text: '4–5 new enterprise clients — including O2 and Cingular UK — were won in the months following launch. Approximately eight months post-release, Cisco acquired IMImobile. The redesigned campaign platform was cited as a key differentiator. The designs remain live today.',
        },
      },
      {
        type: 'sectionHeader',
        props: { variant: 'A', title: 'Reflections' },
      },
      {
        type: 'bulletList',
        props: {
          title: 'What worked',
          items: [
            { term: 'Build trust before demanding access:', description: 'Starting with internal stakeholders before requesting client interviews built credibility that eventually opened the door to real users — and richer, more honest insights.' },
            { term: 'Advocate for fundamental change:', description: 'The visual campaign builder was not the safe choice. It required rebuilding core functionality from scratch. But research showed that optimising the existing form system would only marginally improve a fundamentally flawed paradigm.' },
            { term: 'Preserve familiar mental models:', description: 'We kept the "Who, What, When" framework users already understood — transforming the interaction paradigm while retaining the conceptual vocabulary. This reduced the learning curve for existing users significantly.' },
            { term: 'Design systems as force multipliers:', description: 'Investing in rigorous documentation paid dividends well beyond our engagement, enabling the platform to evolve and expand to new products without us in the room.' },
          ],
        },
      },
      {
        type: 'bulletList',
        props: {
          title: 'Key learnings',
          items: [
            { term: 'Visual paradigms unlock enterprise complexity:', description: 'When users already think in flowcharts and diagrams, forcing linear forms creates unnecessary cognitive translation. Meeting users\' mental models directly reduces training time and errors.' },
            { term: 'Senior design is advocacy:', description: 'The biggest impact came from making the case for the right solution — not just executing what was requested. Research-grounded advocacy for the visual builder created outsized business value.' },
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

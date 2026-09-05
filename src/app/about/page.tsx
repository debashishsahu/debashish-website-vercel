import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import TimelineEntry from '@/components/TimelineEntry'
import ParallaxHero from '@/components/ParallaxHero'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Sr. Staff Product Designer at ServiceNow with 15+ years of experience. NID and ISB alumnus. Passionate about AI-powered enterprise products, design systems, and human-centred interaction design.',
  openGraph: {
    title: 'About — Debashish Sahu Portfolio',
    description:
      'Sr. Staff Product Designer at ServiceNow. NID · ISB · 15+ years designing enterprise and consumer products.',
    images: ['/images/about/singapore-skyline.jpg'],
  },
}

const workHistory = [
  {
    date: 'April 2025 – Current',
    company: 'ServiceNow',
    role: 'Sr. Staff Product Designer',
    isCurrent: true,
    lead: 'Leading design across multiple business units, spearheading two flagship enterprise platforms — Strategic Planning Workspace (SPW) and Enterprise Architecture Workspace (EAW).',
    bullets: [
      'Own end-to-end design for complex enterprise applications serving diverse stakeholder needs and organisational workflows',
      'Pioneering next-generation experiences that leverage agentic AI and conversational UX as the primary interaction layer',
      'Actively build and mentor the design team through hiring, onboarding, and ongoing coaching',
    ],
  },
  {
    date: 'May 2020 – April 2025',
    company: 'ServiceNow',
    role: 'Staff Product Designer',
    isCurrent: false,
    lead: 'Owned design for key modules within the Strategic Planning Workspace — Portfolio Plans, Goals & Targets Management, and Financials.',
    bullets: [
      'Designed and maintained a foundational Data Grid component now used across multiple modules and applications business-unit wide',
      'Balanced complex, data-intensive workflows with usability through careful design systems thinking',
      'Contributed to team growth by evaluating candidates and leading design interviews',
    ],
  },
  {
    date: 'July 2019 – May 2020',
    company: 'Honeywell Technology Solutions',
    role: 'Lead Interaction Designer',
    isCurrent: false,
    lead: 'Designed next-generation interactions for Forge Portal — a unified software suite for the Connected Buildings domain.',
    bullets: [
      'Worked across IoT-connected building management products within Honeywell\'s broader enterprise suite',
    ],
  },
  {
    date: 'December 2015 – July 2019',
    company: 'Imaginea Design Labs (Pramati Technologies)',
    role: 'Lead Interaction Designer',
    isCurrent: false,
    lead: 'Led UX and interaction design for a diverse range of software and digital products across Imaginea Design Labs.',
    bullets: [
      'Drove design from concept through delivery across enterprise, consumer, and emerging-tech products',
      'Led design direction and contributed to practice-building within the studio',
    ],
  },
  {
    date: 'November 2013 – December 2015',
    company: 'Mindtree Ltd. (now LTI Mindtree)',
    role: 'User Experience Designer',
    isCurrent: false,
    lead: 'Part of The Digital Pumpkin — a CoE focused on emerging technology including Tangible Media, IoT, gesture-based devices, and AR/VR.',
    bullets: [
      'Designed interaction and UX for PoC & prototypes bridging experience, end-users, and business outcomes',
      'Worked across a wide range of emerging technology domains as part of the innovation lab',
    ],
  },
  {
    date: 'July 2010 – June 2011',
    company: 'Nagarro Softwares Pvt. Ltd.',
    role: 'Senior Software Engineer',
    isCurrent: false,
    lead: 'Developed SharePoint web portals using MOSS 2007 and SharePoint Server 2010.',
    bullets: [
      'Built custom web parts, site and page templates, and master page customisations for enterprise clients',
    ],
  },
  {
    date: 'November 2007 – April 2010',
    company: 'L&T Infotech',
    role: 'Software Engineer',
    isCurrent: false,
    lead: 'Built internet and intranet web portals for Viacom Inc., MTV, and Paramount Pictures.',
    bullets: [
      'Worked exclusively on high-profile media portals within a dedicated SharePoint delivery team',
    ],
  },
]

const education = [
  {
    date: '2020 – 2022',
    company: 'Indian School of Business',
    role: 'PGPPro',
    isCurrent: false,
    lead: 'Post Graduate Programme for Professionals — building strategic business acumen alongside design leadership.',
    bullets: [
      'Strengthened ability to align design initiatives with business objectives and organisational strategy',
      'Improved communication with cross-functional stakeholders at the executive level',
    ],
  },
  {
    date: '2011 – 2013',
    company: 'National Institute of Design',
    role: 'PGDPD — New Media Design',
    isCurrent: false,
    lead: 'Trans-disciplinary program blending design, art, science, and technology — the foundation of my design thinking.',
    bullets: [
      'Learned to integrate knowledge across disciplines and move beyond siloed thinking',
      'Bridged creative vision with technical implementation — a defining skill throughout my career',
    ],
  },
  {
    date: '2004 – 2007',
    company: "Lingaya's Institute of Mgmt. & Tech.",
    role: 'B.Tech — Computer Science & Engineering',
    isCurrent: false,
    lead: 'Computer Science engineering degree providing a strong technical foundation for my later design work.',
    bullets: [
      'Built depth in software development, systems thinking, and structured problem-solving',
    ],
  },
]


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero image — parallax */}
        <div className="px-page-sm md:px-page-md lg:px-page pt-8">
          <div className="max-w-content mx-auto">
            <ParallaxHero
              src="/images/about/singapore-skyline.jpg"
              alt="Singapore skyline — Marina Bay Sands in the background"
              objectPosition="center 55%"
            />
          </div>
        </div>

        {/* Personal intro */}
        <section className="px-page-sm md:px-page-md lg:px-page py-[60px]">
          <div className="max-w-content mx-auto">
            <h1 className="font-display text-[clamp(1.75rem,5.5vw,2.5rem)] font-medium text-ink tracking-tight leading-[1.15] mb-5">
              <span aria-hidden="true">👋</span> Hi, I&apos;m Debashish.
            </h1>
            {/* Interest tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { emoji: '🔧', label: 'Electronics tinkerer' },
                { emoji: '🎮', label: 'Avid gamer' },
                { emoji: '✈️', label: 'Avid traveller' },
                { emoji: '👨‍👧', label: 'Girl dad' },
                { emoji: '🏋️', label: 'Gym regular' },
                { emoji: '📺', label: 'TV & movies binger' },
              ].map(({ emoji, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-13 font-medium text-slate bg-linen/60 border border-linen rounded-full px-3.5 py-1.5">
                  <span aria-hidden="true">{emoji}</span>{label}
                </span>
              ))}
            </div>
            <div className="max-w-[720px] space-y-6 text-16 text-slate leading-[1.75]">
              <p>
                I&apos;m passionate about tinkering with electronics — Raspberry Pi, BeagleBone
                boards, and Arduino are my go-to tools for weekend projects. I&apos;m also an
                avid gamer who&apos;s completed the Lara Croft series, Prince of Persia series,
                and multiple Need for Speed titles over the years.
              </p>
              <p>
                I&apos;m also experiencing the joy of growing up all over again with my 5-year-old
                daughter, Arya. She&apos;s given me a fresh perspective on the world and reminded
                me to find wonder in the everyday.
              </p>
              <p>
                When I&apos;m not at the gym or binging TV shows and movies, I&apos;m exploring the
                world. I&apos;ve traveled to the US, Dubai, Bali, Singapore, Azerbaijan, Vietnam,
                and more, with plans to tick off many more countries and cities across the
                globe. Whether it&apos;s a planned holiday or a spontaneous weekend road trip
                closer to home, I&apos;m always ready for the next adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="px-page-sm md:px-page-md lg:px-page pb-[80px]">
          <div className="max-w-content mx-auto">
            <SectionHeader variant="A" title="Professional Journey" />
            <TimelineEntry entries={workHistory} />
          </div>
        </section>

        {/* Educational Details */}
        <section className="px-page-sm md:px-page-md lg:px-page pb-[80px]">
          <div className="max-w-content mx-auto">
            <SectionHeader variant="A" title="Educational Details" />
            <TimelineEntry entries={education} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

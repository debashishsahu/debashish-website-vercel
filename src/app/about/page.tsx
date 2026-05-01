import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import TimelineEntry from '@/components/TimelineEntry'
import FullWidthImage from '@/components/FullWidthImage'

export const metadata: Metadata = {
  title: 'About — Debashish Sahu',
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
    description: `As a Senior Staff Designer, I lead design efforts across multiple business units, spearheading two flagship applications: Strategic Planning Workspace (SPW) and Enterprise Architecture Workspace (EAW). These enterprise-level platforms require a deep understanding of complex user workflows, stakeholder needs, and organizational dynamics.

Beyond individual contributor work, I play a pivotal role in building and nurturing our design team. I actively participate in hiring processes to bring in talented designers who align with our vision, and mentor new team members as they onboard and grow into their roles.

Currently, I'm focused on designing the next generation of enterprise applications that leverage agentic AI and conversational experiences powered by AI.`,
  },
  {
    date: 'May 2020 – April 2025',
    company: 'ServiceNow',
    role: 'Staff Product Designer',
    isCurrent: false,
    description: `As a Staff Designer, I focussed on designing crucial modules within the Strategic Planning Workspace (SPW), a comprehensive enterprise platform. My primary areas of ownership included Portfolio Plans, Goals & Targets Management, and Financials — each representing complex, data-intensive workflows that require careful balance between functionality and usability.

One of my key contributions has been designing and maintaining a robust Data Grid component that has become a foundational element across the business unit. This component is extensively used across multiple modules and applications, making it critical that the design is both flexible enough to accommodate diverse use cases and consistent enough to provide a cohesive user experience.

I actively contributed to growing our design team by participating in the hiring process. I help evaluate candidates, conduct interviews, and ensure we're bringing in designers who not only have strong skills but also align with our team culture and design philosophy.`,
  },
  {
    date: 'July 2019 – May 2020',
    company: 'Honeywell Technology Solutions',
    role: 'Lead Interaction Designer',
    isCurrent: false,
    description: `As a Lead Interaction Designer, Connected Buildings domain, wherein I am involved in designing next generation interactions for Forge Portal which is a unified software suite for all products under the umbrella.`,
  },
  {
    date: 'December 2015 – July 2019',
    company: 'Imaginea Design Labs (Pramati Technologies Pvt. Ltd.)',
    role: 'Lead Interaction Designer',
    isCurrent: false,
    description: `As a Lead Interaction Designer, a major portion of my work involves coming up with new and best experiences for the varied software or digital products in Imaginea Design and leading from the front.`,
  },
  {
    date: 'November 2013 – December 2015',
    company: 'Mindtree Ltd. (now LTI Mindtree)',
    role: 'User Experience Designer',
    isCurrent: false,
    description: `Worked as Interaction Designer/User Experience Designer in a co-innovation lab called The Digital Pumpkin.

The Digital Pumpkin was a CoE of the upcoming technology — be it Tangible Media, IoT, gesture based devices, AR/VR etc. The idea was to create a working showcase of products and solutions which could link experience, end-users and business together.

Majorly worked on interaction and UX of all the PoC & prototypes which were built under the banner.`,
  },
  {
    date: 'July 2010 – June 2011',
    company: 'Nagarro Softwares Pvt. Ltd.',
    role: 'Senior Software Engineer',
    isCurrent: false,
    description: `Design and Development of SharePoint Web Portals.

Worked as a Senior Software Engineer, Member Delivery Group in developing Web based applications in Microsoft Technologies in MOSS 2007 and SharePoint Server 2010. The task mainly involved customization of master pages, design and development of custom webparts, site templates, page templates etc.`,
  },
  {
    date: 'November 2007 – April 2010',
    company: 'L&T Infotech',
    role: 'Software Engineer',
    isCurrent: false,
    description: `Design and Development of SharePoint Web Portals.

Worked as a Software Engineer in the Team which worked exclusively on the various internet and intranet webportals for Viacom Inc., MTV, Paramount Pictures.`,
  },
]

const education = [
  {
    date: '2020 – 2022',
    company: 'Indian School of Business',
    role: 'PGPPro',
    isCurrent: false,
    description: `I further enhanced my professional capabilities by completing the PGPPro (Post Graduate Programme for Professionals) from the Indian School of Business (ISB).

This program provided me with strategic business acumen and leadership skills, helping me understand the broader organizational context in which design decisions are made. It strengthened my ability to align design initiatives with business objectives and communicate effectively with cross-functional stakeholders.`,
  },
  {
    date: '2011 – 2013',
    company: 'National Institute of Design',
    role: 'PGDPD — New Media Design',
    isCurrent: false,
    description: `My foundation in design was shaped by the New Media Design Program, a trans-disciplinary curriculum that seamlessly blended design, art, science, and technology.

This unique approach taught me to integrate knowledge across various disciplines, moving beyond siloed thinking to create holistic solutions. It was here that I learned to bridge the gap between creative vision and technical implementation — a skill that continues to define my work today.`,
  },
  {
    date: '2004 – 2007',
    company: "Lingaya's Institute of Mgmt. & Tech.",
    role: 'B.Tech — Computer Science & Engineering',
    isCurrent: false,
    description: `I completed my B.E. in Computer Science from Lingaya's Institute of Technology, affiliated to Maharishi Dayanand University, Rohtak.

This technical foundation gave me a strong understanding of software development, systems thinking, and problem-solving — skills that would later prove invaluable in my design career.`,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero image */}
        <div className="px-page-sm md:px-page-md lg:px-page pt-8">
          <div className="max-w-content mx-auto">
            <FullWidthImage
              src="/images/about/singapore-skyline.jpg"
              alt="Singapore skyline — Marina Bay Sands in the background"
              aspectRatio="wide"
              objectFit="cover"
              objectPosition="center 55%"
            />
          </div>
        </div>

        {/* Personal intro */}
        <section className="px-page-sm md:px-page-md lg:px-page py-[60px]">
          <div className="max-w-content mx-auto">
            <h2 className="font-display text-[32px] md:text-[28px] font-medium text-ink tracking-tighter leading-[1.15] mb-8">
              👋 Hi, I&apos;m Debashish.
            </h2>
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

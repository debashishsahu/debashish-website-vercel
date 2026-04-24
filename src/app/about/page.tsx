import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import TimelineEntry from '@/components/TimelineEntry'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Sr. Staff Product Designer with 15+ years of experience — electronics tinkerer, gamer, traveller, and father to Arya.',
}

const workHistory = [
  {
    date: 'Apr 2025 – Now',
    company: 'ServiceNow',
    role: 'Sr. Staff Product Designer',
    isCurrent: true,
    description:
      'Lead design across SPW and EAW flagship applications. Drive strategic UX vision, mentor design teams, and collaborate with engineering leadership to ship features used by thousands of enterprise customers globally.',
  },
  {
    date: 'May 2020 – Apr 2025',
    company: 'ServiceNow',
    role: 'Staff Product Designer',
    description:
      'Owned Portfolio Plans, Goals & Targets, Financials, and Resource Management features. Established design patterns and contributed to the Seismic design system. Delivered measurable improvements in task completion and adoption.',
  },
  {
    date: 'Jul 2019 – May 2020',
    company: 'Honeywell',
    role: 'Lead Interaction Designer',
    description:
      'Designed next-gen interactions for Forge Portal — Honeywell\'s enterprise IoT platform. Led research with field operators and translated insights into a redesigned dashboard and alerting experience.',
  },
  {
    date: 'Dec 2015 – Jul 2019',
    company: 'Imaginea Design',
    role: 'Lead Interaction Designer',
    description:
      'Led UX for varied software and digital products across e-commerce, travel, retail, and IoT. Managed end-to-end design process from research through delivery, mentoring junior designers along the way.',
  },
  {
    date: 'Nov 2013 – Dec 2015',
    company: 'Mindtree',
    role: 'UX Designer',
    description:
      'IoT, AR/VR, and gesture-based PoCs at Digital Pumpkin innovation lab. Rapid prototyping of novel interaction paradigms including the award-winning Space Explorer and Shadow Eaters installations.',
  },
  {
    date: 'Jul 2010 – Jun 2011',
    company: 'Nagarro',
    role: 'Senior Software Engineer',
    description:
      'Developed SharePoint web portals, master pages, and custom web parts for enterprise clients. This engineering foundation later became integral to my design thinking and developer collaboration approach.',
  },
]

const education = [
  {
    date: '2020–2022',
    company: 'ISB',
    role: 'PGPPro — Indian School of Business',
    description:
      'Post Graduate Programme for Professionals. Developed strategic business acumen, leadership skills, and a frameworks-based approach to problem solving in complex organisational contexts.',
  },
  {
    date: '2011–2013',
    company: 'NID Ahmedabad',
    role: 'PGDPD — New Media Design',
    description:
      'Trans-disciplinary programme blending design, art, science and technology at India\'s premier design institution. Graduated with multiple award-winning projects including OZCHI paper acceptance.',
  },
  {
    date: '2007–2011',
    company: "Lingaya's Institute",
    role: 'B.Tech — Computer Science',
    description:
      'Foundation in software development, data structures, algorithms, and systems thinking. Dual background in CS and design is a defining strength of my design approach.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="relative w-full aspect-[16/5] overflow-hidden">
          <Image
            src="/images/about/singapore_skyline.jpg"
            alt="Singapore skyline at dusk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/30" />
        </div>

        {/* Personal intro */}
        <section className="px-page-sm md:px-page-md lg:px-page py-12 border-b border-linen">
          <div className="max-w-content mx-auto">
            <h2 className="font-display text-32 font-medium text-ink tracking-tighter mb-6">
              👋 Hi, I&apos;m Debashish.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[880px]">
              <p className="text-16 text-slate leading-[1.75]">
                I&apos;m a Sr. Staff Product Designer based in Singapore, currently leading design
                at ServiceNow. I&apos;ve spent the last 15+ years obsessing over how people interact
                with complex systems — enterprise software, IoT devices, kiosks, gesture interfaces,
                and everything in between.
              </p>
              <p className="text-16 text-slate leading-[1.75]">
                Outside of design, I&apos;m an electronics tinkerer who builds stuff with Raspberry
                Pi and Arduino, a gamer who loves story-driven RPGs, and an avid traveller with
                Singapore as my home base. Most importantly, I&apos;m a father to Arya, who reminds
                me every day that the best interfaces are the ones that feel like magic.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">
            <SectionHeader variant="A" title="Professional Journey" />
            <div className="pl-[17px]">
              <TimelineEntry entries={workHistory} />
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-linen/20 border-t border-linen px-page-sm md:px-page-md lg:px-page py-section-sm md:py-section-md pb-section">
          <div className="max-w-content mx-auto">
            <SectionHeader variant="A" title="Education" />
            <div className="pl-[17px]">
              <TimelineEntry entries={education} />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">
            <SectionHeader variant="A" title="Skills & Tools" />
            <div className="pl-[17px] grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: 'Design',
                  skills: [
                    'UX / Product Design',
                    'Interaction Design',
                    'Design Systems',
                    'User Research',
                    'Information Architecture',
                    'Prototyping',
                    'Visual Design',
                    'Service Design',
                  ],
                },
                {
                  label: 'Tools',
                  skills: [
                    'Figma',
                    'FigJam',
                    'Framer',
                    'Maze / UserTesting',
                    'Miro',
                    'Zeplin',
                    'Adobe XD',
                    'Principle',
                  ],
                },
                {
                  label: 'Domain',
                  skills: [
                    'Enterprise Software',
                    'IoT & Devices',
                    'E-commerce & Travel',
                    'AI-powered Features',
                    'Accessibility (WCAG)',
                    'Kiosk / Touch Interfaces',
                    'B2B SaaS',
                    'Mobile Apps',
                  ],
                },
              ].map((group) => (
                <div key={group.label}>
                  <p className="text-12 font-medium uppercase tracking-label text-amber mb-4">
                    {group.label}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-14 text-ink"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import FullWidthImage from '@/components/FullWidthImage'
import ImageGroup from '@/components/ImageGroup'
import DocumentEmbed from '@/components/DocumentEmbed'
import PageScrollNav from '@/components/PageScrollNav'

export const metadata: Metadata = {
  title: 'Zakoopi — Debashish Sahu',
  description:
    'Designing a hyper-local discovery platform for custom-wear designers, boutiques, and tailors in Indian cities — a 6-week freelance project from NID covering gorilla research, personas, user flows, and wireframes.',
  openGraph: {
    title: 'Zakoopi — Debashish Sahu Portfolio',
    description:
      'A hyper-local apparel discovery platform bridging the Online-to-Offline gap in Indian fashion retail.',
    images: ['/images/zakoopi/hero.jpg'],
  },
}

const SECTIONS = [
  { id: 'problem',    label: 'Problem Space' },
  { id: 'research',   label: 'User Research' },
  { id: 'synthesis',  label: 'Research Synthesis' },
  { id: 'ideation',   label: 'Ideation & Solution' },
  { id: 'conclusion', label: 'Conclusion' },
]

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function ZakoopPage() {
  return (
    <>
      <Navbar />
      <PageScrollNav sections={SECTIONS} />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              Freelance · NID Project · 2013
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Zakoopi
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              Creating a hyper-local discovery platform for custom-wear designers, boutiques and tailors across Indian cities
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="User Research · Interaction Design"
          team="1 Interaction Designer (Freelance)"
          duration="6 weeks"
          client="Zakoopi · B2C Web App"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Problem Space ── */}
            <div id="problem" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Problem Space" />

            <SectionHeader variant="B" eyebrow="Context" title="Context and Opportunity" />

            <Prose>
              The Indian apparel retail market is undergoing a massive digital shift. While
              e-commerce offers convenience, it lacks the tactile experience and personalisation
              of local boutiques and bespoke designers. However, local retailers struggle to
              compete with the &ldquo;one-click&rdquo; ease of global online giants, often failing to reach
              or retain customers in a fragmented physical market.
            </Prose>

            <Prose>
              Zakoopi was envisioned as a hyper-local discovery platform designed to bridge this
              Online-to-Offline (O2O) gap — empowering Indian apparel retailers with intelligent
              marketing while offering consumers a trusted way to discover local fashion.
            </Prose>

            <SectionHeader variant="B" eyebrow="Challenge" title="Design Challenge" />

            <Prose>
              Retailers are finding it increasingly difficult to acquire and retain customers in
              an era of digital distraction. For the consumer, finding a high-quality local
              designer, boutique, or tailor is often a matter of trial and error or word-of-mouth —
              which is not scalable.
            </Prose>

            <BulletListBlock
              title="Core UX objectives"
              items={[
                {
                  term: 'Centralise a fragmented database',
                  description: 'Build a searchable, user-friendly interface for discovering designers and tailors.',
                },
                {
                  term: 'Build trust through social proof',
                  description: 'Integrate a community-driven rating and review system.',
                },
                {
                  term: 'Seamless discovery-to-visit flow',
                  description: 'Works across both web and mobile platforms without friction.',
                },
              ]}
              columns={1}
            />

            <Prose>
              The primary objective was to design a web application specifically for users in need
              of customised and tailored wear. The challenge lay in creating a platform that not
              only catalogues designers but also serves as a social medium for fashion enthusiasts
              and experienced shoppers to interact directly with designers and boutique owners.
            </Prose>

            <FullWidthImage
              src="/images/zakoopi/design-challenge.jpg"
              alt="Zakoopi design challenge diagram showing the O2O gap between online and offline apparel retail"
              objectFit="natural"
              caption="Design challenge — bridging the Online-to-Offline gap in Indian apparel retail"
            />

            {/* ── Section 2 — User Research ── */}
            <div id="research" className="scroll-mt-24" />
            <SectionHeader variant="A" title="User Research" />

            <SectionHeader variant="B" eyebrow="Field Research" title="Gorilla User Research" />

            <Prose>
              The foremost challenge was to identify user groups, understand how they think,
              and learn their opinions around tailored wear. The only way to find out was to
              talk to real users.
            </Prose>

            <Prose>
              To do this, me and 2 stakeholders prepared a set of questionnaires targeting
              users. The questions served two purposes — to float online in our friend circle
              and to conduct in-person user interviews. We travelled across Delhi&apos;s malls and
              major fashion streets to get hold of users who had come out for shopping.
              Interviews were kept short and minimal to avoid users losing interest.
            </Prose>

            <Prose>Within a week we covered several major locations:</Prose>

            <BulletListBlock
              title="Research locations — Delhi"
              items={[
                { description: 'Sarojini Nagar Market — popular for affordable tailored fashion' },
                { description: 'Shahpur Jat Market — known for boutique designers and independent labels' },
                { description: 'Promenade Mall — mid-to-premium retail, mixed shopper profiles' },
              ]}
              columns={1}
            />

            <Prose>
              The collected information gave us rich insights to create user personas and map
              different touch-points across the discovery and purchase journey.
            </Prose>

            <SectionHeader variant="B" eyebrow="Personas" title="User Personas" />

            <FullWidthImage
              src="/images/zakoopi/personas.jpg"
              alt="User personas for Zakoopi showing two primary user types and their goals"
              objectFit="natural"
              caption="User personas — developed from gorilla research across Delhi markets"
            />

            {/* ── Section 3 — Research Synthesis ── */}
            <div id="synthesis" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Research Synthesis" />

            <SectionHeader variant="B" eyebrow="Overview" title="Creating an Overarching Picture" />

            <Prose>
              From the field research, a detailed user journey of the entire use-case was
              mapped out with appropriate touch-points against a hypothetical system for the
              to-be web application. Emphasis was placed on what information should be
              provided to the user and what the business viability of each decision was.
            </Prose>

            <SectionHeader variant="B" eyebrow="Journey" title="User Journey Map" />

            <FullWidthImage
              src="/images/zakoopi/user-journey.jpg"
              alt="User journey map showing all touch-points from discovery to post-visit"
              objectFit="natural"
              caption="User journey map — from fashion discovery to store visit and review"
            />

            {/* ── Section 4 — Ideation & Solution ── */}
            <div id="ideation" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Ideation & Solution" />

            <SectionHeader variant="B" eyebrow="Structure" title="Application Flow & Design" />

            <Prose>
              As the end product was a website, ideation was done based on the entire structure
              and flow of the application — mapping the different pages and interactions.
            </Prose>

            <Prose>
              Ideation was based on different flows for the zeroed-down user personas. The
              starting flow was basic — only key important actions listed. The flow was fleshed
              out with subsequent iterations and discussions with the 2 key stakeholders.
            </Prose>

            <BulletListBlock
              title="Information architecture decisions"
              items={[
                {
                  term: '2-level deep IA',
                  description: 'Kept deliberately simple — Homepage → Search Results → Shop Details. No unnecessary depth.',
                },
                {
                  term: 'Two primary page templates',
                  description: 'Search results page and shop/boutique details page cover all user needs.',
                },
              ]}
              columns={1}
            />

            <SectionHeader variant="B" eyebrow="User Flows" title="User Flows" />

            <ImageGroup
              variant="sequence"
              images={[
                {
                  src: '/images/zakoopi/user-flow-01.jpg',
                  caption: 'User flow 01 — discovery and search journey',
                },
                {
                  src: '/images/zakoopi/user-flow-02.jpg',
                  caption: 'User flow 02 — boutique details and review flow',
                },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Wireframes" title="Web Design — Wireframes" />

            <Prose>
              Wireframes were developed for both the search results and boutique detail
              page templates — the two building blocks of the entire platform.
            </Prose>

            <HighlightBlock
              variant="callout"
              label="Design output"
              text="Wireframes were delivered for both primary page templates — search results and boutique details. The output was well received by stakeholders who requested visual designs as well, which could not be completed within the project timeline."
            />

            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777382703/Zakoopi_WF_fdz6ll.pdf',
                  title: 'Wireframe Document',
                  body: 'Page-level wireframes for the two primary templates — search results and boutique details — covering layout, hierarchy, and key interactions across the Zakoopi web application.',
                },
              ]}
            />

            {/* ── Section 5 — Conclusion ── */}
            <div id="conclusion" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Conclusion" />

            <BulletListBlock
              title="Reflections"
              items={[
                {
                  term: 'First web application project',
                  description:
                    'This was my very first project designing a web application — done as a freelance project during the final semester of my PG at NID. Challenging in its own way, though the research part was familiar from NID classroom projects.',
                },
                {
                  term: 'Responsive design was new territory',
                  description:
                    'Responsive web apps were a fairly new concept in 2013 — significant time was spent understanding how responsive web applications work before the design could progress.',
                },
                {
                  term: 'Stakeholder satisfaction',
                  description:
                    'The output was well received. Stakeholders wanted visual designs as well but time constraints prevented it. The web application was launched in the second half of 2013.',
                },
              ]}
              columns={1}
            />

            <HighlightBlock
              variant="quote"
              text="Responsive web apps were fairly a new concept at the time — there was a lot of time spent understanding how the responsive web application works before the design could progress."
              attribution="Debashish Sahu, Freelance Designer"
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Context Smart Companion', descriptor: 'Mobile · L&T Infotech',    href: '/work/smart-companion' }}
          next={{ title: 'Campaign Management System', descriptor: 'Enterprise · IMImobile', href: '/work/imicampaign' }}
        />
      </main>
      <Footer />
    </>
  )
}

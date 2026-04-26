import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import FullWidthImage from '@/components/FullWidthImage'
import LabeledItem from '@/components/LabeledItem'
import ImageCarousel from '@/components/ImageCarousel'
import DocumentEmbed from '@/components/DocumentEmbed'
import PageScrollNav from '@/components/PageScrollNav'

export const metadata: Metadata = {
  title: 'Customs Clearance — Debashish Sahu',
  description:
    "Redefining UX for Agility Logistics's Microclear Suite customs management system — a 5-week engagement covering discovery, stakeholder workshops, wireframes, and visual design.",
  openGraph: {
    title: 'Customs Clearance — Debashish Sahu Portfolio',
    description:
      'Redefining user experience for a customs management system used by trade facilitation officials.',
    images: ['/images/customs-clearance/hero.jpg'],
  },
}

const SECTIONS = [
  { id: 'problem-space',    label: 'Problem Space' },
  { id: 'design-approach',  label: 'Design Approach' },
  { id: 'understanding',    label: 'Understanding' },
  { id: 'ideation',         label: 'Ideation' },
  { id: 'conclusion',       label: 'Conclusion' },
]

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function CustomsClearancePage() {
  return (
    <>
      <Navbar />
      <PageScrollNav sections={SECTIONS} />
      <main>
        <CaseStudyHero
          variant="A"
          image="/images/customs-clearance/hero.jpg"
          eyebrow="Agility Logistics · 2018"
          title="Customs Management System"
          descriptor="Redefining user experience for Microclear Suite's customs management system"
          imageAlt="Customs management system — Agility Logistics Microclear Suite"
        />

        <ProjectMetaBar
          role="Project Lead · Requirement Analysis · Interaction Design · Visual Design"
          team="2 Interaction Designers · 1 Visual Designer"
          duration="5 weeks"
          client="Agility Logistics · Enterprise"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Problem Space ── */}
            <div id="problem-space" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Problem Space" />

            <SectionHeader variant="B" eyebrow="Overview" title="Microclear Suite's Customs Management System" />
            <Prose>
              Customs Management System is a trade facilitation application which allows automation
              of customs operations and advanced customs management techniques using information
              analytics and Artificial Intelligence (AI).
            </Prose>
            <Prose>
              The system helps goods carriers process customs &amp; clearance, while offering customs
              officials access to submitted applications to review declarations and validate them.
              It allows different customs officials at different organisational levels to be connected
              and work in-sync on the same platform throughout the journey of any goods being
              exported or imported from one country to another.
            </Prose>

            <SectionHeader variant="B" eyebrow="Challenges" title="Key Challenges" />
            <FullWidthImage
              src="/images/customs-clearance/challenges.png"
              alt="Key challenges identified in the existing customs management system"
              aspectRatio="wide"
              caption="Key challenges — legacy system pain points across usability, workflow, and technology"
            />

            {/* ── Section 2 — Design Approach ── */}
            <div id="design-approach" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Design Approach" />
            <div className="relative rounded-xl overflow-hidden my-8 aspect-video">
              <Image
                src="/images/customs-clearance/approach.jpg"
                alt="Design approach — collaborative, lean, goal-focused"
                fill
                sizes="(min-width: 1280px) 800px, 100vw"
                className="object-cover object-top"
              />
              {/* Gradient overlay — dark at bottom-left, fades to transparent top-right */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/95 via-ink/70 to-ink/10" />
              {/* Text pinned to bottom-left */}
              <div className="absolute inset-0 flex items-end">
                <div className="p-10 pb-12 max-w-[600px]">
                  <h3 className="font-display text-[42px] font-medium text-white leading-[1.15] mb-5">
                    Collaborative, Lean
                  </h3>
                  <p className="text-18 text-white/75 leading-[1.75] mb-5">
                    Collaboration was one of the key elements of the engagement. It was crucial
                    that the design outputs were in coherence with multiple departments as well
                    as the development teams so as each works under a focused goal.
                  </p>
                  <p className="text-18 font-medium text-amber leading-[1.6]">
                    The design strategy was more of a Goal Focused Design.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Section 3 — Understanding and Synthesis ── */}
            <div id="understanding" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Understanding and Synthesis" />

            <SectionHeader variant="B" eyebrow="Discovery" title="Understanding the Current System" />
            <Prose>
              To understand the domain and functional model, the focus was on putting all ears
              into listening to domain experts in e-services.
            </Prose>
            <BulletListBlock
              title="Key activities performed"
              items={[
                {
                  term: 'User task flow maps',
                  description: 'Created to understand the main priority of each persona & department involved in the system.',
                },
                {
                  term: 'Stakeholder workshops',
                  description: 'Performed with the stakeholders and core team to understand key pain points across the workflow.',
                },
              ]}
              columns={1}
            />
            <ImageCarousel
              images={[
                { src: '/images/customs-clearance/workshop-01.jpg', alt: 'Affinity map — sticky notes organised into themes on the wall', caption: 'Affinity mapping — insights clustered into themes: suggestive info-task, clear mental model, priority-based' },
                { src: '/images/customs-clearance/workshop-02.jpg', alt: 'Designer sketching wireframes on paper', caption: 'Sketching wireframes — rapid low-fi exploration on paper before moving to digital' },
                { src: '/images/customs-clearance/workshop-03.jpg', alt: 'Designer writing on orange sticky notes during ideation', caption: 'Pain point capture — categorising operational issues across user roles and departments' },
                { src: '/images/customs-clearance/workshop-04.jpg', alt: 'Two designers sketching module flow on the whiteboard', caption: 'Sketching module flow on whiteboard — mapping process dependencies across customs workflow stages' },
                { src: '/images/customs-clearance/workshop-05.jpg', alt: 'Team reviewing current system flow — forms unorganised, module-driven confusion', caption: 'Current system critique — identifying fragmented forms, unorganised modules, and confusion points' },
                { src: '/images/customs-clearance/workshop-06.jpg', alt: 'Small group reviewing journey maps and redesign flow diagrams on the wall', caption: 'Journey map review — team walks through as-is and to-be flows with cross-functional stakeholders' },
                { src: '/images/customs-clearance/workshop-07.jpg', alt: 'Full group walkthrough — designer presenting the system map to the team', caption: 'Full team presentation — designer walks through the synthesised system map and task flows' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Synthesis" title="Listing Down and Problem Definition" />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Listing Down',
                  body: 'Listed expectations of end-users after reviewing the current system from a usability point of view. These helped gain a direction to evaluate the existing product.',
                },
                {
                  number: '02',
                  title: 'Problem Definition',
                  body: 'A workshop with the Agility team and stakeholders revealed the most critical problems. Open-ended questions, observations, and discussion helped to understand and detail out the workflow of the entire system.',
                },
              ]}
            />

            {/* ── Section 4 — Ideation and Prototyping ── */}
            <div id="ideation" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Ideation and Prototyping" />
            <BulletListBlock
              title="Hypothesis"
              items={[
                {
                  term: 'Distinct information flow',
                  description: 'A system with distinct information flow showing real-time status of each goods consignment.',
                },
                {
                  term: 'Role-based UI',
                  description: "Show only the relevant content based on each user's role and organisational level.",
                },
                {
                  term: 'Wizard-based approach',
                  description: 'Wizard-based form filling with the ability to drop off anywhere and resume when needed.',
                },
              ]}
              columns={1}
            />

            <SectionHeader variant="B" eyebrow="Prototyping" title="Initial Prototypes & Wireframes" />
            <Prose>
              Once the low-fi wireframes and information architecture was done, they were presented
              to stakeholders for feedback. Using low-fi wireframes and paper prototypes, feedback
              loops were shorter and much more effective.
            </Prose>
            <Prose>
              At a later point, final hi-fidelity wireframes were created to flesh out different
              sections of the pages and get final buy-out from stakeholders and developers.
            </Prose>
            <FullWidthImage
              src="/images/customs-clearance/wireframes.jpg"
              alt="High-fidelity wireframes for the customs clearance management system"
              aspectRatio="wide"
              caption="High-fidelity wireframes — customs declarations, validation workflows, and role-based views"
            />
            <HighlightBlock
              variant="callout"
              label="Visual Design"
              text="Following stakeholder sign-off on wireframes, the visual design for the entire system was created — translating the structural decisions into a polished, role-appropriate interface."
            />
            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777172977/Agility_VD_qaq2sn.pdf',
                  title: 'Visual Design Specification',
                  body: 'Full visual design document for the Microclear Suite customs management system — covering UI components, colour system, typography, and role-based screen layouts.',
                },
              ]}
            />

            {/* ── Section 5 — Conclusion ── */}
            <div id="conclusion" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Conclusion" />

            <SectionHeader variant="B" eyebrow="Reflections" title="Key Learnings" />
            <BulletListBlock
              title="What this project taught"
              items={[
                {
                  term: 'Workshop-first mode',
                  description: 'A major portion of the work was in workshop mode — requiring constant presence on the floor, interacting with stakeholders and simultaneously churning out ideas in brainstorming exercises. A big opportunity to learn and think on the feet.',
                },
                {
                  term: 'Designing for legacy applications',
                  description: "Legacy applications are much more difficult than B2C, B2B, or standard enterprise apps — they've been in constant evolution from the client's functional requirements, leaving very little room for user-centred thinking.",
                },
                {
                  term: 'Technology constraints are design constraints',
                  description: 'The technology stack is a crucial aspect of legacy applications — they are dated, and it\'s very difficult to agree on upgrading technology based on design changes alone. Learning the basics of the underlying technology before proposing modern interactions is essential.',
                },
                {
                  term: 'Design thinking must be embedded in teams',
                  description: 'Design doesn\'t stop with screens and deliverables. It is more important to inculcate design thinking among the people working on applications every day — developers, sales people, and marketing teams alike.',
                },
              ]}
              columns={1}
            />
            <HighlightBlock
              variant="quote"
              text="Design doesn't stop with a few screens and deliverables — it is more important to inculcate design thinking among the people working on the applications every day."
              attribution="Debashish Sahu, Project Lead"
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Smart Cities',    descriptor: 'Enterprise · Honeywell',          href: '/work/smart-cities' }}
          next={{ title: 'FlyDubai Holidays', descriptor: 'B2C · Imaginea Design',           href: '/work/fzholidays' }}
        />
      </main>
      <Footer />
    </>
  )
}

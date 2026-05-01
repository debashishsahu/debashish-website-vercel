import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import HighlightBlock from '@/components/HighlightBlock'
import LabeledItem from '@/components/LabeledItem'
import DocumentEmbed from '@/components/DocumentEmbed'

export const metadata: Metadata = {
  title: 'Semantic Emails — Debashish Sahu',
  description:
    'A design paper published at OZCHI introducing semantic email agents — emails that interact with each other in a user-controlled digital landscape. Built in 24 hours at NID.',
  openGraph: {
    title: 'Semantic Emails — Debashish Sahu Portfolio',
    images: ['/images/ozchi-paper/hero.png'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function OzchiPaperPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              OZCHI 24-Hour Challenge · NID · 2013
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Semantic Emails
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              Agent Technology in Email Systems — Design paper published at OZCHI
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Concept · Interaction Design · Research"
          team="NID team"
          duration="24 hours"
          client="OZCHI — Australasian Computer-Human Interaction Conference"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — The Challenge ── */}
            <SectionHeader variant="A" title="The Challenge" />

            <Prose>
              The OZCHI 24-hour design challenge tasks multidisciplinary teams with conceptualising
              and presenting a fully-formed design solution within a single day. The constraint
              forces clarity of thinking — there is no time for ambiguity or scope creep.
            </Prose>

            <HighlightBlock
              variant="callout"
              label="Our response"
              text='"Individual emails act as agents — interacting with each other within a digital landscape controlled by the user."'
            />

            {/* ── Section 2 — The Concept ── */}
            <SectionHeader variant="A" title="The Concept" />

            <Prose>
              The paper introduces a semantic email system as our response to the OZCHI 24-hour
              challenge — an attempt to look into the problems of categorisation, task management,
              context awareness, and the aesthetics of email by redefining what an individual
              email actually is.
            </Prose>

            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777626676/Semantic_Emails_v_2.0_zwzsdh.pdf',
                  title: 'Design Paper',
                  body: 'Full OZCHI submission — semantic email agents, the digital landscape interface, and the conceptual framework developed during the 24-hour challenge.',
                },
              ]}
            />

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Emails as Agents',
                  body: 'Rather than treating emails as passive containers of information, the concept envisions each email as an active agent — capable of interacting with other emails, detecting relationships, and self-organising within a user-defined landscape.',
                },
                {
                  number: '02',
                  title: 'Semantic Awareness',
                  body: 'Each email agent understands its own context — sender, topic, urgency, relationships — and uses that understanding to cluster, prioritise, and surface itself at the right moment.',
                },
                {
                  number: '03',
                  title: 'The Digital Landscape',
                  body: 'The user interface moves away from a linear inbox toward a spatial landscape where email agents live, cluster, and interact — controlled by the user but driven by semantic relationships.',
                },
              ]}
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Shadow Eaters',    descriptor: 'Interactive Installation · NID',  href: '/work/shadow-eaters' }}
          next={{ title: '3D Drawing Canvas', descriptor: 'Interaction Design · NID',         href: '/work/drawing-canvas' }}
        />
      </main>
      <Footer />
    </>
  )
}

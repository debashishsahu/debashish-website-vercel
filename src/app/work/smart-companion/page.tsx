import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import LabeledItem from '@/components/LabeledItem'
import DocumentEmbed from '@/components/DocumentEmbed'

export const metadata: Metadata = {
  title: 'Context Smart Companion — Debashish Sahu',
  description:
    'Re-thinking the ideal wearable — a research-based PoC under Digital Pumpkin at L&T Infotech, exploring emotionally-aware, context-sensitive companion devices for the North US market.',
  openGraph: {
    title: 'Context Smart Companion — Debashish Sahu Portfolio',
    description:
      'A wearables PoC that connects emotionally with users based on their context — not just their data.',
    images: ['/images/smart-companion/hero.png'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function SmartCompanionPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              L&amp;T Infotech · Digital Pumpkin · 2015
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Context Smart Companion
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              Re-thinking the ideal wearable — emotionally connected, contextually aware
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="User Research · Persona Creation · Interaction Design · Prototyping"
          team="Digital Pumpkin — L&T Infotech"
          duration="Internal PoC"
          client="Client PoC · North US Market"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Background ── */}
            <SectionHeader variant="A" title="Background" />

            <Prose>
              Context Smart Companion (CSC) is a research-based project done under the
              technology and design excellence group called Digital Pumpkin at L&amp;T Infotech.
            </Prose>

            <Prose>
              The idea was to re-think what an ideal wearable could be for people — one that
              is not only usable and functional, but also connects with them emotionally
              in relation to the context around them. Rather than designing yet another
              fitness tracker or notification mirror, the brief pushed toward something
              more human.
            </Prose>

            <HighlightBlock
              variant="callout"
              label="Design question"
              text="What would a wearable look like if it was designed around emotional context — not just data collection?"
            />

            {/* ── Section 2 — Research Process ── */}
            <SectionHeader variant="A" title="Research Process" />

            <SectionHeader variant="B" eyebrow="Discovery" title="Demographic Study" />

            <Prose>
              The project started with a demographic study of North US — pulling excerpts
              from different research writings and categorising people across age groups,
              from kids to the elderly. This broad sweep identified patterns in how different
              cohorts relate to technology, context, and emotional connection.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Demographic Mapping',
                  body: 'North US population studied across age groups — kids, young adults, working professionals, seniors. Each group profiled for technology affinity, lifestyle context, and emotional needs.',
                },
                {
                  number: '02',
                  title: 'Research Synthesis',
                  body: 'Excerpts from multiple research writings were categorised to identify consistent patterns. The goal was to find where a contextually-aware wearable could provide the most meaningful value.',
                },
                {
                  number: '03',
                  title: 'Persona Development',
                  body: 'From the demographic data, a set of ideal personas was created — each representing a distinct user group with specific contextual needs and emotional triggers.',
                },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Focus" title="Narrowing to a Single Persona" />

            <Prose>
              Among the list of ideal personas, one was shortlisted through a discussion
              with the key stakeholders — the Programme Manager and Design Head. The
              selection was based on which persona offered the most compelling and
              commercially viable design opportunity.
            </Prose>

            <Prose>
              Against this focused persona, several concepts were detailed out in user flows.
              The entire process resulted in many different concepts — of which this is the
              one that could be fully detailed and prototyped.
            </Prose>

            <BulletListBlock
              title="Concept selection criteria"
              items={[
                {
                  term: 'Emotional resonance',
                  description:
                    "Does the concept genuinely connect with the user's daily emotional context — not just their tasks?",
                },
                {
                  term: 'Technical feasibility',
                  description:
                    'Can this be prototyped with available wearable hardware within the PoC scope?',
                },
                {
                  term: 'Commercial viability',
                  description:
                    'Is there a realistic path to a client engagement or product opportunity?',
                },
              ]}
              columns={1}
            />

            {/* ── Section 3 — The Concept ── */}
            <SectionHeader variant="A" title="The Concept" />

            <Prose>
              The Context Smart Companion is a wearable designed to understand and respond
              to the emotional and situational context of its user — acting less like a
              device and more like a companion that adapts to what the user is going through.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Context Awareness',
                  body: 'The wearable reads contextual signals — location, time of day, calendar events, movement patterns — to understand what the user is doing and feeling.',
                },
                {
                  number: '02',
                  title: 'Emotional Responsiveness',
                  body: "Rather than firing generic notifications, the companion adapts its behaviour to the user's emotional state — quieter when stressed, more active when the user is receptive.",
                },
                {
                  number: '03',
                  title: 'Companion Metaphor',
                  body: 'The product language deliberately avoids the cold utility of most wearables. The design language and interaction model are warm, personal, and human-like.',
                },
              ]}
            />

            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777384174/Smart_Companion_optimized_yogrd7.pdf',
                  title: 'Concept Document',
                  body: 'Full concept overview — demographic research, persona development, wearable design, and the emotional context interaction model for the North US market.',
                },
              ]}
            />

            {/* ── Section 4 — Conclusion ── */}
            <SectionHeader variant="A" title="Conclusion" />

            <BulletListBlock
              title="Key learnings"
              items={[
                {
                  term: 'Emotional design is hard to prototype',
                  description:
                    'Technical prototyping of a wearable is straightforward — prototyping the emotional quality of an interaction is significantly harder and requires different methods.',
                },
                {
                  term: 'Demographic research shapes product direction',
                  description:
                    'Starting broad with demographic mapping before narrowing to a persona prevented premature focus on a niche that might not represent the best opportunity.',
                },
                {
                  term: 'PoC work is about learning, not shipping',
                  description:
                    'The value of internal PoC projects is in what they reveal about design and technology possibilities — not in producing a finished product.',
                },
              ]}
              columns={1}
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Unaccompanied Minors',   descriptor: 'IoT · Imaginea Design',    href: '/work/unaccompanied-minor' }}
          next={{ title: 'Touch Kiosk for Retail',  descriptor: 'Retail · Imaginea Design',  href: '/work/touch-retail' }}
        />
      </main>
      <Footer />
    </>
  )
}

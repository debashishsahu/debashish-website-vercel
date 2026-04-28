import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import FullWidthImage from '@/components/FullWidthImage'
import LabeledItem from '@/components/LabeledItem'
import ImpactMetric from '@/components/ImpactMetric'
import DocumentEmbed from '@/components/DocumentEmbed'

export const metadata: Metadata = {
  title: 'Unaccompanied Minors — Debashish Sahu',
  description:
    'A beacon-based IoT solution giving parents real-time peace of mind when their children fly alone — funded by a UK airline and later commercialised by a German carrier.',
  openGraph: {
    title: 'Unaccompanied Minors — Debashish Sahu Portfolio',
    description:
      'Giving parents peace of mind when their children fly alone — a beacon IoT concept.',
    images: ['/images/unaccompanied-minor/hero.png'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function UnaccompaniedMinorPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              Imaginea Design Labs · IoT · 2015
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Unaccompanied Minors
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              Giving parents peace of mind when their children fly alone
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Interaction Design · IoT Concept"
          team="Imaginea Design Labs"
          duration="Internal project"
          client="Funded by UK airline giant"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — The Challenge ── */}
            <SectionHeader variant="A" title="The Challenge" />

            <Prose>
              In countries like the US, UK, and across Europe, thousands of children
              travel alone every year — handed over to airline staff at check-in and
              expected to arrive safely at their destination hours later. For parents,
              this journey is filled with anxiety. For airlines, managing unaccompanied
              minors is a complex, staff-intensive process with multiple handoffs.
            </Prose>

            <HighlightBlock
              variant="callout"
              label="Design opportunity"
              text="A small addition to the entire flow of a child's journey can bring immense relief to parents — knowing their child is traveling safely and will reach their destination without fail."
            />

            <BulletListBlock
              title="Core problems to solve"
              items={[
                {
                  term: 'Parental anxiety',
                  description:
                    'No real-time visibility into where their child is during the journey — only a phone call at departure and arrival.',
                },
                {
                  term: 'Staff handoff gaps',
                  description:
                    'The child is passed between multiple airline staff during transit — each handoff is a point of potential disconnection.',
                },
                {
                  term: 'No emotional continuity',
                  description:
                    'The child feels alone during the journey — no connection to parents beyond a brief call.',
                },
              ]}
              columns={1}
            />

            {/* ── Section 2 — The Solution ── */}
            <SectionHeader variant="A" title="The Solution" />

            <Prose>
              The concept is built around a small Bluetooth beacon device — small enough
              to be placed inside a toy, which is gifted to the child by the airline at
              check-in when they are handed over to the airline staff.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'The Beacon Toy',
                  body: 'A small Bluetooth Low Energy (BLE) beacon is embedded inside a soft toy presented to the child as a gift from the airline at check-in. The child carries it naturally — no wearable to lose, no device to manage.',
                },
                {
                  number: '02',
                  title: 'Real-Time Check-ins',
                  body: 'As the child moves through the journey — security, gate, boarding, transit lounge, arrival — the beacon pings the system at each checkpoint. Parents receive a real-time update on their phone app at every stage.',
                },
                {
                  number: '03',
                  title: 'Staff Handoff Tracking',
                  body: 'Each airline staff member who takes custody of the child logs the handoff digitally. Parents see exactly who is responsible for their child at every point in the journey.',
                },
                {
                  number: '04',
                  title: 'Emotional Connect',
                  body: "Beyond tracking, the app allows parents to send short messages or stickers to the child's in-flight screen or device — maintaining an emotional thread throughout the journey.",
                },
              ]}
            />

            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777383581/Unaccompanied_Minor_optimized_m2fkkc.pdf',
                  title: 'Concept Document',
                  body: 'Full concept overview — beacon toy, real-time check-in updates, staff handoff tracking, and the parent companion app.',
                },
              ]}
            />

            {/* ── Section 3 — Impact ── */}
            <SectionHeader variant="A" title="Impact" />

            <ImpactMetric
              statColor="linen"
              metrics={[
                {
                  stat: '01',
                  label: 'UK Airline Funding',
                  description: 'Project was funded by one of the leading airline giants in the UK',
                },
                {
                  stat: '02',
                  label: 'Well Appreciated',
                  description: 'Solution was well received by stakeholders and airline staff',
                },
                {
                  stat: '03',
                  label: 'Commercialised',
                  description: 'A part of the solution was commercialised by a German airline a year later',
                },
              ]}
            />

            <HighlightBlock
              variant="quote"
              text="The project was funded by one of the leading airline giants in the UK and it was well appreciated. The same solution got commercialised — a part of it — by a German airline a year later."
              attribution="Debashish Sahu, Interaction Designer"
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Sensit',                  descriptor: 'IoT · Imaginea Design Labs', href: '/work/sensit' }}
          next={{ title: 'Context Smart Companion',  descriptor: 'Mobile · L&T Infotech',       href: '/work/smart-companion' }}
        />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import HighlightBlock from '@/components/HighlightBlock'
import FullWidthImage from '@/components/FullWidthImage'
import LabeledItem from '@/components/LabeledItem'

export const metadata: Metadata = {
  title: 'SENSiT / Spine Chair — Debashish Sahu',
  description:
    "A smart IoT chair that detects incorrect posture and alerts users — a pilot project from Imaginea Design Labs' IoT Lab under Pramati Technologies, Hyderabad.",
  openGraph: {
    title: 'SENSiT — Debashish Sahu Portfolio',
    description:
      'A smart chair that understands posture and alerts users to incorrect sitting habits.',
    images: ['/images/sensit/sensit-flyer-01.jpg'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function SensitPage() {
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
              SENSiT / Spine Chair
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              A smart chair that understands posture and alerts users to incorrect sitting — built at the IoT Lab under Pramati Technologies
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Interaction Design"
          team="IoT Lab — Imaginea Design Labs, Hyderabad"
          duration="Pilot project"
          client="Internal · Pramati Technologies"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Description ── */}
            <SectionHeader variant="A" title="Description" />

            <HighlightBlock
              variant="callout"
              label="Research insight"
              text='"According to research, sitting over 6 hours a day increases the chances of chronic back ailments by up to 40%."'
            />

            <Prose>
              Spine Chair — or SENSiT as it came to be known — originated as a pilot project
              within the Internet of Things (IoT) lab at Imaginea Design Labs, under Pramati
              Technologies, Hyderabad.
            </Prose>

            <Prose>
              The project originated from common complaints about back problems among individuals
              primarily working in mainstream desk jobs — having to sit for prolonged periods in
              front of computers. The result was a smart chair that understands the posture of
              the user, and alerts them if they sit incorrectly for long periods of time.
            </Prose>

            <Prose>
              The project also doubles as a resource management tool within an organisation —
              tracking seat usage and occupancy in real time across office spaces.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Posture Detection',
                  body: "Embedded sensors monitor the user's sitting posture in real time, identifying incorrect positions before they cause strain.",
                },
                {
                  number: '02',
                  title: 'Smart Alerts',
                  body: 'When incorrect posture is held for a sustained period, the system alerts the user — through the app, a wearable, or ambient feedback.',
                },
                {
                  number: '03',
                  title: 'Resource Management',
                  body: 'Beyond personal health, SENSiT tracks seat occupancy across the office — providing facilities teams with utilisation data.',
                },
              ]}
            />

            {/* ── Section 2 — Design Output ── */}
            <div className="py-4" />
            <SectionHeader variant="A" title="Design Output" />

            <FullWidthImage
              src="/images/sensit/sensit-flyer-01.jpg"
              alt="SENSiT Spine Chair — product flyer showing the smart chair concept and sensor placement"
              objectFit="natural"
              caption="SENSiT / Spine Chair — product concept flyer showing sensor integration and posture detection"
            />

            <FullWidthImage
              src="/images/sensit/sensit-flyer-02.jpg"
              alt="SENSiT Spine Chair — product flyer showing the companion app interface and alert system"
              objectFit="natural"
              caption="Companion app — posture alerts, usage tracking, and organisational resource management"
            />

            <div className="my-8 flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/250231115?title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="SENSiT / Spine Chair — Concept Video"
                />
              </div>
              <p className="text-12 text-mist leading-[1.5]">Concept Video — SENSiT / Spine Chair</p>
            </div>

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Touch Kiosk for Retail',  descriptor: 'Retail · Imaginea Design', href: '/work/touch-retail' }}
          next={{ title: 'Unaccompanied Minors',    descriptor: 'IoT · Imaginea Design',   href: '/work/unaccompanied-minor' }}
        />
      </main>
      <Footer />
    </>
  )
}

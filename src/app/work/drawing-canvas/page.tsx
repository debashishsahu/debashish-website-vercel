import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import LabeledItem from '@/components/LabeledItem'
import ImageGroup from '@/components/ImageGroup'

export const metadata: Metadata = {
  title: '3D Drawing Canvas — Debashish Sahu',
  description:
    'Liberating 3D digital sketching from traditional peripherals using Microsoft Kinect, Processing, and a custom gesture library — an NID interaction design classroom project.',
  openGraph: {
    title: '3D Drawing Canvas — Debashish Sahu Portfolio',
    images: ['/images/drawing-canvas/hero.png'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function DrawingCanvasPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              NID · Classroom Project · Interaction Design · 2012
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              3D Drawing Canvas
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              Liberating 3D digital sketching from the physical constraints of traditional peripherals
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Concept · Interaction Design · Prototyping · Custom Library Development"
          team="Solo — NID Classroom Project"
          duration="Classroom project"
          client="NID — Interaction Design"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — The Objective ── */}
            <SectionHeader variant="A" title="The Objective" />

            <Prose>
              The objective was to liberate 3D digital sketching from the physical constraints
              of traditional peripherals like mice and electronic pens — bridging the gap between
              physical movement and digital rendering, allowing designers to &ldquo;step into&rdquo; their work
              and manipulate 3D space as intuitively as they would in the physical world.
            </Prose>

            <Prose>
              The concept crystallised while exploring the Kinect sensor and its various
              capabilities — specifically how far it could be &ldquo;hacked&rdquo; to create a 3D canvas
              for quick spatial sketching.
            </Prose>

            {/* ── Section 2 — Technical Evolution ── */}
            <SectionHeader variant="A" title="Technical Evolution" />

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Phase 1 — Geometry Engine (Processing)',
                  body: 'Built the initial engine in Processing (Java). Created a system to plot points, calculate distances to form lines, and generate surfaces from three or more coordinates. Started 2D — established the core geometry logic before adding spatial depth.',
                },
                {
                  number: '02',
                  title: 'Phase 2 — Depth Integration (Kinect)',
                  body: "Integrated Microsoft Kinect to transition from 2D to 3D. Mapped the sensor's depth data to the Z-axis, translating a user's physical reach into digital depth — creating a true 3D coordinate system for hand-based input.",
                },
                {
                  number: '03',
                  title: 'Phase 3 — Gesture Logic & Custom Libraries',
                  body: 'Explored OpenCV for finger-tracking to enable tool selection (mapping each digit to a drawing function). When existing libraries proved insufficient for the precision required in Processing, custom library functions were authored to improve detection accuracy.',
                },
              ]}
            />

            {/* ── Section 3 — Prototypes ── */}
            <SectionHeader variant="A" title="Prototypes" />

            <ImageGroup
              variant="workshop"
              fit="contain"
              tileRatio="4 / 3"
              images={[
                {
                  src: '/images/drawing-canvas/prototype-01.png',
                  caption: 'Phase 1 — basic geometry engine in Processing: points, lines, and surfaces',
                },
                {
                  src: '/images/drawing-canvas/prototype-02.png',
                  caption: 'Phase 2 — Kinect depth integration: hand coordinates mapped to 3D canvas',
                },
                {
                  src: '/images/drawing-canvas/prototype-03.png',
                  caption: 'Phase 3 — gesture logic: finger tracking for tool mode selection',
                },
                {
                  src: '/images/drawing-canvas/prototype-04.png',
                  caption: 'Hybrid prototype — Touch OSC for mode selection + Kinect for spatial tracking',
                },
                {
                  src: '/images/drawing-canvas/prototype-05.png',
                  caption: 'Final prototype — functional 3D canvas with multi-modal input system',
                },
              ]}
              caption="Prototype progression — from 2D geometry engine to full 3D multi-modal canvas"
            />

            {/* ── Section 4 — Design Challenges & Pivots ── */}
            <SectionHeader variant="A" title="Design Challenges & Pivots" />

            <HighlightBlock
              variant="callout"
              label="The problem"
              text='"While finger-tracking was functional, it lacked the fidelity needed for professional sketching — false positives caused jitter in the 3D model."'
            />

            <Prose>
              To maintain the &ldquo;hassle-free&rdquo; feel while ensuring precision, the solution
              transitioned to a hybrid interface — Touch OSC on a mobile device for stable
              mode selection (switching between points, lines, and planes), while keeping
              the Kinect dedicated to high-motion spatial tracking and point manipulation.
            </Prose>

            {/* ── Section 5 — Concept Video ── */}
            <SectionHeader variant="A" title="Concept Video" />

            <div className="my-8 flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/77954908?title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="3D Drawing Canvas — Concept Video"
                />
              </div>
              <p className="text-12 text-mist leading-[1.5]">Concept Video — 3D Drawing Canvas prototype walkthrough</p>
            </div>

            {/* ── Section 6 — Key Takeaways ── */}
            <SectionHeader variant="A" title="Key Takeaways" />

            <BulletListBlock
              title="UX insights"
              items={[
                {
                  term: 'Gorilla Arm Effect',
                  description:
                    'Sustained mid-air gestures fatigue the arm quickly. 3D spatial UIs need to minimise held postures and allow users to rest between interactions.',
                },
                {
                  term: 'Multimodal wins over pure gesture',
                  description:
                    'For complex creative tasks, combining tactile feedback (touch) with spatial movement (NUI) consistently outperforms pure gesture-based systems — each modality does what it does best.',
                },
              ]}
              columns={1}
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Semantic Emails',      descriptor: 'Research · OZCHI',       href: '/work/ozchi-paper' }}
          next={{ title: 'Bitten — Soundscape',  descriptor: 'Sound Design · NID',      href: '/work/soundscape-bitten' }}
        />
      </main>
      <Footer />
    </>
  )
}

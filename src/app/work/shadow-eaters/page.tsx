import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import LabeledItem from '@/components/LabeledItem'
import ImageGroup from '@/components/ImageGroup'

export const metadata: Metadata = {
  title: 'Shadow Eaters — Debashish Sahu',
  description:
    "An immersive interactive installation where a swarm of generative insects consumes the observer's shadow — inspired by Japanese folklore, built at NID.",
  openGraph: {
    title: 'Shadow Eaters — Debashish Sahu Portfolio',
    images: ['/images/shadow-eaters/shadow-02.jpg'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function ShadowEatersPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              NID · Classroom Project · Interactive Art · 2014
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Shadow Eaters
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              An immersive installation where a swarm of digital insects consumes the observer&apos;s shadow
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Concept · Interaction Design · Installation"
          team="NID Classroom Project"
          duration="Classroom project"
          client="NID — Interactive Art"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Folklore Inspiration ── */}
            <SectionHeader variant="A" title="The Folklore Inspiration" />

            <Prose>
              Shadow Eaters draws from the visceral imagery found in early Japanese naturalistic myths,
              where life is not merely extinguished but transformed. The project is inspired by ancient
              Japanese folklore regarding the Mushi — swarms of flies birthed from the marrow of
              decaying carcasses.
            </Prose>

            <Prose>
              In these tales, the death of a great beast provides the literal atmospheric conditions
              for a new, collective life form to emerge. These &ldquo;Shadow Eaters&rdquo; represent the ultimate
              form of recycling — entities that exist only to consume the remnants of what once was,
              ensuring that nothing, not even a silhouette, is left to the void.
            </Prose>

            <Prose>
              In this installation, the &ldquo;carcass&rdquo; is no longer physical flesh, but the silhouette
              of the observer: the shadow.
            </Prose>

            {/* ── Section 2 — The Experience ── */}
            <SectionHeader variant="A" title="The Experience" />

            <Prose>
              Upon entering the space, viewers encounter a stark, illuminated wall crawling with
              a frenetic, generative swarm of kinetic insects.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'The Hunt',
                  body: "As a viewer's shadow is cast upon the surface, the swarm detects the dark void. The insects break their patterns and descend upon the edges of the silhouette.",
                },
                {
                  number: '02',
                  title: 'The Consumption',
                  body: "Through real-time tracking, the insects appear to 'bite' into the shadow — tearing away fragments of the viewer's projected self.",
                },
                {
                  number: '03',
                  title: 'Regeneration',
                  body: 'Each &lsquo;morsel&rsquo; of shadow consumed fuels the swarm, causing the insects to multiply and grow more aggressive.',
                },
                {
                  number: '04',
                  title: 'The Erasure',
                  body: 'If the viewer remains still, the swarm systematically devours the entire shadow until the wall returns to a blank, blinding white — leaving the viewer physically present but visually erased from the space.',
                },
              ]}
            />

            {/* ── Section 3 — Technical & Visual Narrative ── */}
            <SectionHeader variant="A" title="Technical & Visual Narrative" />

            <BulletListBlock
              title="Implementation details"
              items={[
                {
                  term: 'Visuals',
                  description:
                    'High-contrast, monochromatic aesthetic. Insects move with flocking algorithms (Boids) — mimicking the erratic yet unified movement of real carrion flies.',
                },
                {
                  term: 'Audio',
                  description:
                    'A spatialized, binaural soundscape of thousands of fluttering wings that increases in volume and frequency as the shadow is consumed.',
                },
                {
                  term: 'Metaphor',
                  description:
                    'The installation serves as a memento mori — reminding the participant that our presence in the world is ephemeral, and that time — the ultimate Shadow Eater — is constantly eroding our footprint.',
                },
              ]}
              columns={1}
            />

            {/* ── Section 4 — Documentation ── */}
            <SectionHeader variant="A" title="Documentation" />

            <ImageGroup
              variant="workshop"
              fit="cover"
              tileRatio="16 / 9"
              images={[
                { src: '/images/shadow-eaters/shadow-02.jpg' },
                { src: '/images/shadow-eaters/shadow-03.jpg' },
                { src: '/images/shadow-eaters/shadow-01.jpg' },
                { src: '/images/shadow-eaters/shadow-04.jpg' },
                { src: '/images/shadow-eaters/shadow-05.jpg' },
                { src: '/images/shadow-eaters/shadow-06.jpg' },
              ]}
              caption="Shadow Eaters installation — NID, 2014"
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Zakoopi',          descriptor: 'Web App · Freelance',               href: '/work/zakoopi' }}
          next={{ title: 'Semantic Emails', descriptor: 'Research · OZCHI',                  href: '/work/ozchi-paper' }}
        />
      </main>
      <Footer />
    </>
  )
}

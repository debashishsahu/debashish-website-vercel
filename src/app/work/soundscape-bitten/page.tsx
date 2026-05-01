import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import HighlightBlock from '@/components/HighlightBlock'
import LabeledItem from '@/components/LabeledItem'

export const metadata: Metadata = {
  title: 'Bitten — Soundscape — Debashish Sahu',
  description:
    'A 2-minute soundscape following an apple from fruit market to customer — a narrative audio design exercise from NID.',
  openGraph: {
    title: 'Bitten Soundscape — Debashish Sahu Portfolio',
    images: ['/images/soundscape-bitten/hero.png'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function SoundscapeBittenPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              NID · Audio Design · 2012
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Bitten — Soundscape
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              A 2-minute soundscape following an apple from fruit market to customer
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Sound Design · Narrative Design"
          team="Solo — NID Classroom Project"
          duration="2 weeks"
          client="NID — Audio Design"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — The Concept ── */}
            <SectionHeader variant="A" title="The Concept" />

            <HighlightBlock
              variant="callout"
              label="The narrative"
              text='"Bitten — it&apos;s a story of an Apple in due course from a Fruit Market to the Customer."'
            />

            <Prose>
              Bitten is a soundscape design exercise built around a defined narrative arc —
              the journey of a single apple from the moment it sits in a busy fruit market,
              through selection, transport, and finally the act of being eaten.
            </Prose>

            <Prose>
              The 2-minute composition captures each stage through carefully chosen sound
              layers — ambient market noise, handling, movement, and the final crisp bite
              that gives the piece its name. No words, no music — only designed sound that
              tells the story.
            </Prose>

            {/* ── Audio embed ── */}
            <SectionHeader variant="A" title="Listen" />

            <div className="my-8 flex flex-col gap-3">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/debashish/bitten-final-cut&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                  title="Bitten — Soundscape"
                />
              </div>
              <p className="text-12 text-mist leading-[1.5]">Bitten — Final Cut · SoundCloud</p>
            </div>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'The Market',
                  body: 'Ambient chaos of a fruit market — vendors, footsteps, the texture of fruit being handled and weighed.',
                },
                {
                  number: '02',
                  title: 'The Selection',
                  body: 'The soundscape narrows — crowd fades, a single pair of hands picks up the apple. The focus shifts from macro to micro.',
                },
                {
                  number: '03',
                  title: 'The Journey',
                  body: 'Movement sounds — a bag, a vehicle, the transition from market to home. The apple in transit.',
                },
                {
                  number: '04',
                  title: 'The Bite',
                  body: 'The piece ends with the defining sound — the crisp, clean bite. The narrative complete.',
                },
              ]}
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: '3D Drawing Canvas',           descriptor: 'Interaction Design · NID',  href: '/work/drawing-canvas' }}
          next={{ title: 'Campaign Management System',   descriptor: 'Enterprise · IMImobile',    href: '/work/imicampaign' }}
        />
      </main>
      <Footer />
    </>
  )
}

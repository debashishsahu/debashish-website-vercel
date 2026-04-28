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
  title: 'Touch the Retail — Debashish Sahu',
  description:
    'A kiosk-based showrooming concept for a vitamins and nutritional supplements retailer — using the mobile phone as shopping cart to elevate the brick and mortar experience.',
  openGraph: {
    title: 'Touch the Retail — Debashish Sahu Portfolio',
    description: 'Showrooming for brick and mortar stores — the mobile phone as shopping cart.',
    images: ['/images/touch-retail/hero.png'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function TouchRetailPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-canvas px-page-sm md:px-page-md lg:px-page py-10">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-3">
              Imaginea Design · Retail · 2016
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[800px]">
              Touch the Retail
            </h1>
            <p className="text-20 font-light text-slate mt-3 max-w-[640px]">
              Showrooming for brick and mortar stores — the mobile phone as shopping cart
            </p>
          </div>
        </div>

        <ProjectMetaBar
          role="Interaction Design · Visual Design"
          team="Imaginea Design"
          duration="Concept project"
          client="Vitamins & nutritional supplements retailer"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — The Concept ── */}
            <SectionHeader variant="A" title="The Concept" />

            <Prose>
              Touch the Retail is a showcase concept exploring the possibilities of
              showrooming in brick and mortar stores. The client — a sales and distribution
              company for vitamins and nutritional supplement products — wanted to explore
              a kiosk-based shopping concept for their next-generation retail stores.
            </Prose>

            <HighlightBlock
              variant="callout"
              label="Core idea"
              text="The mobile phone as shopping cart — touch-enabled kiosk displays that leverage the WOW factor of in-store technology to elevate the retail experience."
            />

            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777385776/Touch_the_Retail_Optimized_vkisuq.pdf',
                  title: 'Concept Document',
                  body: 'Full concept overview — kiosk interaction model, mobile integration, product discovery flow, and the end-to-end shopper journey.',
                },
              ]}
            />

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Showrooming Reimagined',
                  body: 'Rather than fighting the showrooming trend — where customers browse in-store but buy online — the concept embraces it. The kiosk becomes a high-quality product discovery surface that enhances, not replaces, the in-store experience.',
                },
                {
                  number: '02',
                  title: 'Mobile as Cart',
                  body: 'The shopper uses their mobile phone as the primary interface — scanning, saving, and purchasing through the phone while the kiosk display provides rich product information, comparisons, and recommendations.',
                },
                {
                  number: '03',
                  title: 'The WOW Factor',
                  body: "Touch-enabled large format displays create a premium in-store experience. The visual richness and interactivity signal quality — reinforcing the brand's positioning in the health and wellness space.",
                },
              ]}
            />

            {/* ── Section 2 — Concept Video ── */}
            <SectionHeader variant="A" title="Concept Video" />

            <Prose>
              The concept was prototyped and presented as a video walkthrough showing
              the kiosk interaction model, mobile integration, and end-to-end shopper journey.
            </Prose>

            <div className="my-8 flex flex-col gap-3">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Cz6mEh8utkU"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Touch the Retail — Concept Video"
                />
              </div>
              <p className="text-12 text-mist leading-[1.5]">Concept Video — Touch the Retail kiosk interaction walkthrough</p>
            </div>

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Context Smart Companion', descriptor: 'Mobile · L&T Infotech',   href: '/work/smart-companion' }}
          next={{ title: 'Zakoopi',                 descriptor: 'Web App · Freelance',       href: '/work/zakoopi' }}
        />
      </main>
      <Footer />
    </>
  )
}

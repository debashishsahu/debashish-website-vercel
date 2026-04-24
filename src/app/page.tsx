import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { getKeyProjects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Debashish Sahu — Sr. Staff Product Designer',
  description:
    '15+ years designing enterprise and consumer products — from AI-powered features to ground-up design systems.',
}

export default function HomePage() {
  const featured = getKeyProjects().slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-canvas px-page-sm md:px-page-md lg:px-page py-20 border-b border-linen">
          <div className="max-w-content mx-auto">
            <p className="text-12 font-medium uppercase tracking-label text-amber mb-5">
              Sr. Staff Product Designer · ServiceNow
            </p>
            <h1 className="font-display text-[36px] md:text-[44px] lg:text-[56px] font-medium text-ink tracking-tight leading-[1.05] max-w-[760px] mb-5">
              I make complex systems<br className="hidden md:block" /> feel effortless
            </h1>
            <p className="text-20 font-light text-slate max-w-[580px] mb-10 leading-[1.6]">
              15+ years designing enterprise and consumer products —
              from AI-powered features to ground-up design systems.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink text-canvas text-14 font-medium px-6 py-3 rounded-md hover:bg-amber hover:text-ink transition-colors min-h-[44px]"
            >
              View selected work →
            </a>
          </div>
        </section>

        {/* Selected work */}
        <section
          id="work"
          className="px-page-sm md:px-page-md lg:px-page pb-section"
        >
          <div className="max-w-content mx-auto">
            <SectionHeader variant="A" title="Selected Work" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-[17px]">
              {featured.map((project) => (
                <ProjectCard
                  key={project.slug}
                  variant="featured"
                  image={project.cardImage}
                  title={project.title}
                  description={project.descriptor}
                  tags={project.tags}
                  meta={`${project.client} · ${project.period}`}
                  href={`/work/${project.slug}`}
                />
              ))}
            </div>
            <div className="pl-[17px] mt-10 text-center">
              <a
                href="/work"
                className="inline-flex items-center gap-2 border border-ink text-ink text-14 font-medium px-6 py-3 rounded-md hover:bg-ink hover:text-canvas transition-colors min-h-[44px]"
              >
                View all projects →
              </a>
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="bg-linen/30 border-y border-linen px-page-sm md:px-page-md lg:px-page py-section-sm md:py-section-md">
          <div className="max-w-content mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-12 font-medium uppercase tracking-label text-amber mb-4">
                About me
              </p>
              <h2 className="font-display text-32 font-medium text-ink tracking-tighter mb-4">
                Designing with purpose,<br />thinking in systems.
              </h2>
              <p className="text-16 text-slate leading-[1.75] max-w-[520px] mb-6">
                I&apos;m a Sr. Staff Product Designer at ServiceNow with 15+ years of experience.
                I specialise in enterprise UX, design systems, and turning ambiguous problems into
                clear, elegant solutions.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-amber text-14 font-medium hover:underline"
              >
                More about me →
              </a>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 text-center">
              {[
                { stat: '15+', label: 'Years of experience' },
                { stat: '50+', label: 'Products designed' },
                { stat: '3', label: 'Countries worked in' },
                { stat: '∞', label: 'Cups of coffee' },
              ].map((item) => (
                <div key={item.label} className="bg-canvas border border-linen rounded-xl px-8 py-6">
                  <div className="font-display text-[36px] font-medium text-amber tracking-tight leading-none">
                    {item.stat}
                  </div>
                  <p className="text-12 text-slate mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

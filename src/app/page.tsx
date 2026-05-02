import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Debashish Sahu — Sr. Staff Product Designer',
  description:
    'Sr. Staff Product Designer at ServiceNow with 15+ years shaping complex enterprise products — now at the intersection of agentic AI, conversational UX, and design systems that scale. NID · ISB.',
  openGraph: {
    title: 'Debashish Sahu — Product Designer',
    description: 'Designing AI-native enterprise experiences that actually work.',
    images: ['/images/work/imicampaign-card.png'],
  },
}

const selectedSlugs = ['imicampaign', 'smart-cities', 'fzholidays', 'space-explorer']
const selectedProjects = selectedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as typeof projects

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Section 1 — Hero ── */}
        <section className="px-page-sm md:px-page-md lg:px-page py-[80px] md:py-[60px]">
          <div className="max-w-content mx-auto">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-amber flex-shrink-0" />
              <span className="text-12 font-medium uppercase tracking-label text-amber">
                Sr. Staff Product Designer · ServiceNow
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-medium text-ink leading-[1.06] tracking-tight mb-5 max-w-[760px] text-[52px] md:text-[40px]">
              Designing{' '}
              <em className="not-italic text-amber">AI-native</em>
              {' '}enterprise experiences
              <br className="hidden sm:block" /> that actually work.
            </h1>

            {/* Descriptor */}
            <p className="text-[18px] md:text-[16px] font-light text-slate leading-[1.65] max-w-[560px] mb-8">
              15+ years shaping complex enterprise products — now at the
              intersection of agentic AI, conversational UX, and design
              systems that scale.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 mb-9 flex-wrap">
              <Link
                href="#selected-work"
                className="inline-flex items-center gap-2 bg-ink text-canvas text-13 font-medium px-6 py-[10px] rounded-md hover:bg-slate transition-colors duration-200"
              >
                View selected work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-transparent text-amber border-[1.5px] border-amber text-13 font-medium px-6 py-[10px] rounded-md hover:bg-[#FAEEDA] transition-colors duration-200"
              >
                About me
              </Link>
            </div>

            {/* Meta strip */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-14 font-medium text-ink">Debashish Sahu</span>
              <div className="w-px h-4 bg-linen" />
              <span className="text-13 text-mist">ServiceNow · Hyderabad</span>
              <div className="w-px h-4 bg-linen" />
              <span className="text-13 text-mist">NID · ISB</span>
            </div>

          </div>
        </section>

        {/* ── Section 2 — Current Focus ── */}
        <section className="bg-[#1A2530] py-[72px] md:py-[56px] px-page-sm md:px-page-md lg:px-page">
          <div className="max-w-content mx-auto">

            {/* Section header */}
            <div className="flex items-end justify-between mb-10 flex-col md:flex-row gap-4">
              <div>
                <div className="text-12 font-medium uppercase tracking-label text-amber mb-3">
                  What I&apos;m working on
                </div>
                <h2 className="font-display font-medium text-[#F7F5F2] text-[32px] md:text-[28px] tracking-tighter leading-[1.15]">
                  Currently deep in<br />AI × Enterprise Design.
                </h2>
              </div>
              <div className="text-13 text-[#5C6B7A] md:text-right leading-[1.6] flex-shrink-0">
                ServiceNow<br />
                Strategic Planning Workspace<br />
                2025 →
              </div>
            </div>

            {/* 3-card grid */}
            <div className="grid grid-cols-3 md:grid-cols-3 grid-cols-1 border border-white/[0.06] rounded-xl overflow-hidden divide-x divide-white/[0.06]">

              <div className="bg-[#1A2530] hover:bg-[#243040] transition-colors duration-200 p-7">
                <h3 className="text-16 font-medium text-[#F7F5F2] mb-2.5 leading-[1.3]">
                  AI-native product experiences
                </h3>
                <p className="text-13 font-light text-mist leading-[1.7] mb-3.5">
                  Designing next-generation enterprise applications where AI is
                  the primary interaction layer — not a feature bolted on, but
                  the foundation the experience is built on.
                </p>
                <span className="inline-block text-10 font-medium px-2 py-[3px] rounded-sm bg-amber/15 text-amber">
                  Agentic AI · Conversational UX
                </span>
              </div>

              <div className="bg-[#1A2530] hover:bg-[#243040] transition-colors duration-200 p-7">
                <h3 className="text-16 font-medium text-[#F7F5F2] mb-2.5 leading-[1.3]">
                  Enabling designers to use AI
                </h3>
                <p className="text-13 font-light text-mist leading-[1.7] mb-3.5">
                  Building the workflows and mental models that help design
                  teams work with AI as a creative partner — faster synthesis,
                  smarter iteration, better outcomes.
                </p>
                <span className="inline-block text-10 font-medium px-2 py-[3px] rounded-sm bg-amber/15 text-amber">
                  Design × AI · Workflow
                </span>
              </div>

              <div className="bg-[#1A2530] hover:bg-[#243040] transition-colors duration-200 p-7">
                <h3 className="text-16 font-medium text-[#F7F5F2] mb-2.5 leading-[1.3]">
                  AI-assisted prototyping
                </h3>
                <p className="text-13 font-light text-mist leading-[1.7] mb-3.5">
                  Developing AI-driven prototyping pipelines that compress the
                  gap between idea and testable experience — getting to
                  validation faster without losing design quality.
                </p>
                <span className="inline-block text-10 font-medium px-2 py-[3px] rounded-sm bg-amber/15 text-amber">
                  Prototyping · Design Systems
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 3 — Selected Work ── */}
        <section id="selected-work" className="px-page-sm md:px-page-md lg:px-page py-[72px] md:py-[56px]">
          <div className="max-w-content mx-auto">

            <SectionHeader variant="A" title="Selected work" />

            <div className="pl-[17px]">
              <div className="grid grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mb-7">
                {selectedProjects.map((project) => (
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

              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-13 font-medium text-ink border border-ink px-6 py-[10px] rounded-md hover:bg-ink hover:text-canvas transition-colors duration-200"
              >
                View all work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

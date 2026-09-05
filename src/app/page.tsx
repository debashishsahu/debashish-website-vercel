'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { viewport } from '@/lib/animations'

// Leads with the most enterprise-relevant work; recency and relevance first.
const selectedSlugs = ['imicampaign', 'smart-cities', 'customs-clearance', 'fzholidays']
const selectedProjects = selectedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as typeof projects

const focusCards = [
  {
    title: 'AI-native product experiences',
    body: 'Designing next-generation enterprise applications where AI is the primary interaction layer — not a feature bolted on, but the foundation the experience is built on.',
    tag: 'Agentic AI · Conversational UX',
  },
  {
    title: 'Enabling designers to use AI',
    body: 'Building the workflows and mental models that help design teams work with AI as a creative partner — faster synthesis, smarter iteration, better outcomes.',
    tag: 'Design × AI · Workflow',
  },
  {
    title: 'AI-assisted prototyping',
    body: 'Developing AI-driven prototyping pipelines that compress the gap between idea and testable experience — getting to validation faster without losing design quality.',
    tag: 'Prototyping · Design Systems',
  },
]

export default function HomePage() {
  const reduce = useReducedMotion()
  const EASE = [0.22, 1, 0.36, 1] as const
  // Reduced motion / SSR-safe: no hidden initial state, content is always painted.
  const rise = (y = 16, delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        }

  return (
    <>
      <Navbar />
      <main>

        {/* ── Section 1 — Hero ── */}
        <section className="px-page-sm md:px-page-md lg:px-page pt-[72px] pb-[88px] md:pt-[88px] md:pb-[104px]">
          <div className="max-w-content mx-auto">

            <motion.h1
              {...rise(24, 0)}
              className="font-display font-medium text-ink leading-[1.03] tracking-tight max-w-[15ch] text-[clamp(2.5rem,8vw,4.75rem)]"
            >
              Designing{' '}
              <span className="text-amber-text">AI-native</span>{' '}
              enterprise experiences that actually work.
            </motion.h1>

            <motion.p
              {...rise(16, reduce ? 0 : 0.12)}
              className="text-[17px] md:text-[19px] text-slate leading-[1.6] max-w-[52ch] mt-7"
            >
              15+ years shaping complex enterprise software — now designing where
              agentic AI, conversational UX, and design systems at scale meet, as
              Sr.&nbsp;Staff Product Designer at ServiceNow.
            </motion.p>

            <motion.div
              {...rise(16, reduce ? 0 : 0.2)}
              className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-9"
            >
              <Link
                href="#selected-work"
                className="inline-flex items-center gap-2 bg-ink text-canvas text-13 font-medium px-6 py-[11px] rounded-md hover:bg-slate transition-colors duration-200"
              >
                View selected work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
              </Link>
              <a
                href="mailto:debashishsahu@outlook.com"
                className="inline-flex items-center gap-1.5 text-13 font-medium text-ink underline decoration-linen decoration-2 underline-offset-[5px] hover:decoration-amber transition-colors duration-200 px-1 py-[11px]"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              {...rise(12, reduce ? 0 : 0.28)}
              className="flex items-center flex-wrap gap-x-3 gap-y-1.5 mt-12 text-13 text-mist"
            >
              <span className="font-medium text-slate">Debashish Sahu</span>
              <span className="w-1 h-1 rounded-full bg-mist/60" />
              <span>ex-Honeywell</span>
              <span className="w-1 h-1 rounded-full bg-mist/60" />
              <span>Mindtree</span>
              <span className="w-1 h-1 rounded-full bg-mist/60" />
              <span>NID · ISB</span>
              <span className="w-1 h-1 rounded-full bg-mist/60" />
              <span>Hyderabad</span>
            </motion.div>

          </div>
        </section>

        {/* ── Section 2 — Current Focus ── */}
        <section className="bg-[#161F29] text-[#E7ECF1] py-[84px] md:py-[100px] px-page-sm md:px-page-md lg:px-page">
          <div className="max-w-content mx-auto">

            <motion.div
              {...rise(20, 0)}
              {...(reduce ? {} : { whileInView: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 20 }, viewport })}
              className="max-w-[760px]"
            >
              <div className="text-12 font-medium uppercase tracking-label text-amber-bright mb-4">
                At ServiceNow · Sr. Staff Product Designer · 2020 – present
              </div>
              <h2 className="font-display font-medium text-[#F7F5F2] text-[clamp(1.5rem,4vw,2.5rem)] tracking-tight leading-[1.12] text-balance">
                Designing where agentic AI becomes the enterprise interface.
              </h2>
              <p className="text-[15px] md:text-16 text-[#AEBFCC] leading-[1.75] mt-5">
                I lead design on two flagship platforms — the Strategic Planning
                and Enterprise Architecture Workspaces — and built a foundational
                Data Grid component now used across the business unit. This work
                is under NDA;{' '}
                <Link href="/about" className="text-[#F7F5F2] underline decoration-[#4A5A68] decoration-2 underline-offset-4 hover:decoration-amber-bright transition-colors">
                  the full account is on the about page
                </Link>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 border border-white/[0.07] rounded-xl overflow-hidden bg-white/[0.07]">
              {focusCards.map((card, i) => (
                <div key={i} className="bg-[#161F29] p-7">
                  <h3 className="text-15 font-semibold text-[#F7F5F2] mb-2.5 leading-[1.3]">
                    {card.title}
                  </h3>
                  <p className="text-13 text-[#A6B7C4] leading-[1.7] mb-4">
                    {card.body}
                  </p>
                  <span className="inline-block text-11 font-medium tracking-snug text-amber-bright">
                    {card.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3 — Selected Work ── */}
        <section id="selected-work" className="px-page-sm md:px-page-md lg:px-page py-[72px] md:py-[56px]">
          <div className="max-w-content mx-auto">

            <SectionHeader variant="A" title="Selected work" />

            <div className="pl-[17px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
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

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-block"
              >
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-13 font-medium text-ink border border-ink px-6 py-[10px] rounded-md hover:bg-ink hover:text-canvas transition-colors duration-200"
                >
                  View all work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
                </Link>
              </motion.div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

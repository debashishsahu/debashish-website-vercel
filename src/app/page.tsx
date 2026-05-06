'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { staggerContainer, viewport } from '@/lib/animations'

const selectedSlugs = ['imicampaign', 'smart-cities', 'fzholidays', 'space-explorer']
const selectedProjects = selectedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean) as typeof projects

// Word segments for headline — each word individually animated
const headlineSegments: { text: string; amber?: boolean; br?: boolean }[] = [
  { text: 'Designing' },
  { text: 'AI-native', amber: true },
  { text: 'enterprise' },
  { text: 'experiences' },
  { text: '__br__', br: true },
  { text: 'that' },
  { text: 'actually' },
  { text: 'work.' },
]

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
  return (
    <>
      <Navbar />
      <main>

        {/* ── Section 1 — Hero ── */}
        <section className="px-page-sm md:px-page-md lg:px-page py-[80px] md:py-[60px]">
          <div className="max-w-content mx-auto">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-[1.5px] bg-amber flex-shrink-0" />
              <span className="text-12 font-medium uppercase tracking-label text-amber">
                Sr. Staff Product Designer · ServiceNow
              </span>
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="font-display font-medium text-ink leading-[1.06] tracking-tight mb-5 max-w-[760px] text-[52px] md:text-[40px]">
              {headlineSegments.map((seg, i) => {
                if (seg.br) {
                  return <br key={i} className="hidden sm:block" />
                }
                const wordIndex = headlineSegments.slice(0, i).filter(s => !s.br).length
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + wordIndex * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: 'inline-block', marginRight: '0.28em' }}
                    className={seg.amber ? 'not-italic text-amber' : ''}
                  >
                    {seg.text}
                  </motion.span>
                )
              })}
            </h1>

            {/* Descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[16px] font-light text-slate leading-[1.65] max-w-[560px] mb-8"
            >
              15+ years shaping complex enterprise products — now at the
              intersection of agentic AI, conversational UX, and design
              systems that scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-3 mb-9 flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  href="#selected-work"
                  className="inline-flex items-center gap-2 bg-ink text-canvas text-13 font-medium px-6 py-[10px] rounded-md hover:bg-slate transition-colors duration-200"
                >
                  View selected work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-transparent text-amber border-[1.5px] border-amber text-13 font-medium px-6 py-[10px] rounded-md hover:bg-[#FAEEDA] transition-colors duration-200"
                >
                  About me
                </Link>
              </motion.div>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <span className="text-14 font-medium text-ink">Debashish Sahu</span>
              <div className="w-px h-4 bg-linen" />
              <span className="text-13 text-mist">ServiceNow · Hyderabad</span>
              <div className="w-px h-4 bg-linen" />
              <span className="text-13 text-mist">NID · ISB</span>
            </motion.div>

          </div>
        </section>

        {/* ── Section 2 — Current Focus ── */}
        <section className="bg-[#1A2530] py-[72px] md:py-[56px] px-page-sm md:px-page-md lg:px-page">
          <div className="max-w-content mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-end justify-between mb-10 flex-col md:flex-row gap-4"
            >
              <div>
                <div className="text-12 font-medium uppercase tracking-label text-amber mb-3">
                  What I&apos;m working on
                </div>
                <h2 className="font-display font-medium text-[#F7F5F2] text-[32px] md:text-[28px] tracking-tighter leading-[1.15]">
                  Currently deep in<br />AI × Enterprise Design.
                </h2>
              </div>
              <div className="text-13 text-slate md:text-right leading-[1.6] flex-shrink-0">
                ServiceNow<br />
                Strategic Planning Workspace<br />
                2025 →
              </div>
            </motion.div>

            {/* 3-card grid — staggered */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-3 md:grid-cols-3 grid-cols-1 border border-white/[0.06] rounded-xl overflow-hidden divide-x divide-white/[0.06]"
            >
              {focusCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="bg-[#1A2530] hover:bg-[#243040] transition-colors duration-200 p-7"
                >
                  <h3 className="text-16 font-medium text-[#F7F5F2] mb-2.5 leading-[1.3]">
                    {card.title}
                  </h3>
                  <p className="text-13 font-light text-mist leading-[1.7] mb-3.5">
                    {card.body}
                  </p>
                  <span className="inline-block text-10 font-medium px-2 py-[3px] rounded-sm bg-amber/15 text-amber">
                    {card.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>
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

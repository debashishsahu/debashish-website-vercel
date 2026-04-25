'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import FadeUp from '@/components/FadeUp'
import HeroCursorGlow from '@/components/HeroCursorGlow'
import { getKeyProjects } from '@/data/projects'
import { motion } from 'framer-motion'

const specialisms = [
  { label: 'Enterprise UX', icon: '⬡' },
  { label: 'Design Systems', icon: '⬡' },
  { label: 'AI Features', icon: '⬡' },
  { label: 'User Research', icon: '⬡' },
  { label: 'IoT & Devices', icon: '⬡' },
  { label: 'B2B SaaS', icon: '⬡' },
]

export default function HomePage() {
  const featured = getKeyProjects().slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-canvas px-page-sm md:px-page-md lg:px-page pt-12 pb-14 border-b border-linen">
          <HeroCursorGlow />
          <div className="max-w-content mx-auto relative z-10">
            <motion.p
              className="text-12 font-medium uppercase tracking-label text-amber mb-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            >
              Sr. Staff Product Designer · ServiceNow
            </motion.p>

            <motion.h1
              className="font-display text-[42px] md:text-[52px] lg:text-[64px] font-medium text-ink tracking-tight leading-[1.02] max-w-[780px] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              I make complex systems<br className="hidden md:block" /> feel effortless
            </motion.h1>

            <motion.p
              className="text-18 font-light text-slate max-w-[520px] mb-8 leading-[1.65]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              15+ years designing enterprise and consumer products —
              from AI-powered features to ground-up design systems.
            </motion.p>

            <motion.a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink text-canvas text-14 font-medium px-6 py-3 rounded-md hover:bg-amber hover:text-ink transition-colors min-h-[44px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View selected work →
            </motion.a>
          </div>
        </section>

        {/* ── Specialisms strip ── */}
        <motion.div
          className="border-b border-linen bg-canvas overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="max-w-content mx-auto px-page-sm md:px-page-md lg:px-page">
            <div className="flex flex-wrap items-center gap-0 divide-x divide-linen">
              {specialisms.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-5 py-3.5 first:pl-0 last:pr-0"
                >
                  <span className="text-amber text-[9px]">◆</span>
                  <span className="text-12 font-medium uppercase tracking-label text-slate whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Selected work ── */}
        <section id="work" className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">
            <FadeUp>
              <SectionHeader variant="A" title="Selected Work" />
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-[17px]">
              {featured.map((project, i) => (
                <FadeUp key={project.slug} delay={i * 0.1}>
                  <ProjectCard
                    variant="featured"
                    image={project.cardImage}
                    title={project.title}
                    description={project.descriptor}
                    tags={project.tags}
                    meta={`${project.client} · ${project.period}`}
                    href={`/work/${project.slug}`}
                  />
                </FadeUp>
              ))}
            </div>
            <FadeUp className="pl-[17px] mt-10 text-center">
              <a
                href="/work"
                className="inline-flex items-center gap-2 border border-ink text-ink text-14 font-medium px-6 py-3 rounded-md hover:bg-ink hover:text-canvas transition-colors min-h-[44px]"
              >
                View all projects →
              </a>
            </FadeUp>
          </div>
        </section>

        {/* ── About teaser ── */}
        <section className="bg-linen/30 border-y border-linen px-page-sm md:px-page-md lg:px-page py-section-sm md:py-section-md">
          <div className="max-w-content mx-auto flex flex-col md:flex-row items-center gap-10">
            <FadeUp className="flex-1">
              <p className="text-12 font-medium uppercase tracking-label text-amber mb-4">About me</p>
              <h2 className="font-display text-32 font-medium text-ink tracking-tighter mb-4">
                Designing with purpose,<br />thinking in systems.
              </h2>
              <p className="text-16 text-slate leading-[1.75] max-w-[520px] mb-6">
                I&apos;m a Sr. Staff Product Designer at ServiceNow with 15+ years of experience.
                I specialise in enterprise UX, design systems, and turning ambiguous problems into
                clear, elegant solutions.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-amber text-14 font-medium hover:underline">
                More about me →
              </a>
            </FadeUp>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 text-center">
              {[
                { stat: '15+', label: 'Years of experience' },
                { stat: '50+', label: 'Products designed' },
                { stat: '3',   label: 'Countries worked in' },
                { stat: '∞',   label: 'Cups of coffee' },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.08}>
                  <div className="bg-canvas border border-linen rounded-xl px-8 py-6">
                    <div className="font-display text-[36px] font-medium text-amber tracking-tight leading-none">
                      {item.stat}
                    </div>
                    <p className="text-12 text-slate mt-2">{item.label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

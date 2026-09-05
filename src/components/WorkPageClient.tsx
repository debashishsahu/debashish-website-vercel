'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import FadeUp from '@/components/FadeUp'
import SectionHeader from '@/components/SectionHeader'
import { tagColors } from '@/data/projects'
import type { Project } from '@/data/projects'

interface WorkPageClientProps {
  keyProjects: Project[]
  otherProjects: Project[]
  sideProjects: Project[]
}

export default function WorkPageClient({ keyProjects, otherProjects, sideProjects }: WorkPageClientProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allProjects = useMemo(
    () => [...keyProjects, ...otherProjects, ...sideProjects],
    [keyProjects, otherProjects, sideProjects],
  )

  // Collect unique tags sorted by frequency then alphabetically
  const allTags = useMemo(() => {
    const count: Record<string, number> = {}
    allProjects.forEach((p) => p.tags.forEach((t) => { count[t] = (count[t] || 0) + 1 }))
    return Object.entries(count)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag]) => tag)
  }, [allProjects])

  const filteredProjects = activeTag
    ? allProjects.filter((p) => p.tags.includes(activeTag))
    : null

  // The very first key project gets the hero treatment
  const heroProject = keyProjects[0]
  const remainingKeyProjects = keyProjects.slice(1)

  return (
    <>
      {/* ── Featured hero card (default view only) ── */}
      {!activeTag && heroProject && (
        <FadeUp>
          <div className="pl-[17px] mb-10">
            <Link href={`/work/${heroProject.slug}`} className="group block">
              <motion.div
                className="flex flex-col md:flex-row border border-linen rounded-xl overflow-hidden bg-white/40"
                whileHover={{ borderColor: '#D4882A', y: -4 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Content */}
                <div className="flex flex-col justify-center px-8 py-10 md:w-[44%] flex-shrink-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-5 h-[1.5px] bg-amber flex-shrink-0" />
                    <span className="text-11 font-semibold uppercase tracking-label text-amber">
                      Featured Project
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {heroProject.tags.map((tag) => {
                      const style = tagColors[tag] || { bg: 'bg-[#F1EFE8]', text: 'text-[#5F5E5A]' }
                      return (
                        <span key={tag} className={`text-12 font-medium px-2.5 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                  <h2 className="font-display text-[24px] md:text-[28px] font-medium text-ink tracking-tight leading-[1.2] mb-3">
                    {heroProject.title}
                  </h2>
                  <p className="text-14 text-slate leading-[1.7] mb-6 max-w-[360px]">
                    {heroProject.descriptor}
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="inline-flex items-center gap-2 bg-ink text-canvas text-13 font-medium px-5 py-2.5 rounded-md"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      View case study
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" /></svg>
                    </motion.span>
                    <span className="text-12 text-mist">{heroProject.client} · {heroProject.period}</span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative flex-1 min-h-[240px] md:min-h-0 overflow-hidden">
                  {heroProject.cardImage ? (
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={heroProject.cardImage}
                        alt={`${heroProject.title} project thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, 56vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A2530] to-[#2E3F50]" />
                  )}
                </div>
              </motion.div>
            </Link>
          </div>
        </FadeUp>
      )}

      {/* ── Filter bar ── horizontal scroller on narrow screens, wraps at md */}
      <div
        role="group"
        aria-label="Filter projects by tag"
        className="flex md:flex-wrap gap-2 mb-10 md:ml-[17px] -mx-page-sm px-page-sm md:mx-0 md:px-0 overflow-x-auto md:overflow-visible snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* All pill */}
        <button
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className={`shrink-0 snap-start text-12 font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
            activeTag === null
              ? 'bg-ink text-canvas border-ink'
              : 'bg-transparent text-slate border-linen hover:border-ink/40 hover:text-ink'
          }`}
        >
          All
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            aria-pressed={activeTag === tag}
            className={`shrink-0 snap-start text-12 font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
              activeTag === tag
                ? 'bg-ink text-canvas border-ink'
                : 'bg-transparent text-slate border-linen hover:border-ink/40 hover:text-ink'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <AnimatePresence mode="wait">
        {filteredProjects ? (
          /* Filtered flat grid */
          <motion.div
            key={`filtered-${activeTag}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-12 font-medium text-mist uppercase tracking-label mb-5 pl-[17px]">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} tagged &ldquo;{activeTag}&rdquo;
            </p>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-[17px]">
                {filteredProjects.map((project, i) => (
                  <FadeUp key={project.slug} delay={i * 0.06}>
                    <ProjectCard
                      variant={project.tier === 'key' ? 'featured' : 'standard'}
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
            ) : (
              <p className="text-14 text-mist pl-[17px]">No projects found for this tag.</p>
            )}
          </motion.div>
        ) : (
          /* Default sectioned view */
          <motion.div
            key="all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Key Projects — remaining after the featured hero */}
            {remainingKeyProjects.length > 0 && (
              <>
                <FadeUp>
                  <SectionHeader
                    variant="B"
                    eyebrow="Portfolio"
                    title="Key Projects"
                    subtitle="In-depth case studies across enterprise, consumer, and emerging tech."
                  />
                </FadeUp>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-[17px]">
                  {remainingKeyProjects.map((project, i) => (
                    <FadeUp key={project.slug} delay={i * 0.08}>
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
              </>
            )}

            {/* Other Projects */}
            <FadeUp>
              <SectionHeader variant="A" title="Other Projects" />
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-[17px]">
              {otherProjects.map((project, i) => (
                <FadeUp key={project.slug} delay={i * 0.06}>
                  <ProjectCard
                    variant="standard"
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

            {/* Side Projects */}
            <FadeUp>
              <SectionHeader variant="A" title="Side Projects" />
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-[17px]">
              {sideProjects.map((project, i) => (
                <FadeUp key={project.slug} delay={i * 0.06}>
                  <ProjectCard
                    variant="standard"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

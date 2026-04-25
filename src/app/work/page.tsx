import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import FadeUp from '@/components/FadeUp'
import { getKeyProjects, getOtherProjects, getSideProjects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies and projects spanning enterprise UX, mobile, IoT, physical computing, and more.',
}

export default function WorkPage() {
  const keyProjects   = getKeyProjects()
  const otherProjects = getOtherProjects()
  const sideProjects  = getSideProjects()

  return (
    <>
      <Navbar />
      <main className="px-page-sm md:px-page-md lg:px-page pb-section">
        <div className="max-w-content mx-auto">

          <FadeUp>
            <SectionHeader
              variant="B"
              eyebrow="Portfolio"
              title="Key Projects"
              subtitle="In-depth case studies across enterprise, consumer, and emerging tech."
            />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-[17px]">
            {keyProjects.map((project, i) => (
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

        </div>
      </main>
      <Footer />
    </>
  )
}

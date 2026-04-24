import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import ImpactMetric from '@/components/ImpactMetric'
import FullWidthImage from '@/components/FullWidthImage'
import LabeledItem from '@/components/LabeledItem'
import { getProjectBySlug, projects } from '@/data/projects'
import { caseStudies, getGenericSections, CaseStudySection } from '@/data/caseStudies'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.descriptor,
  }
}

function TextBlock({ body }: { body: string }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-4 max-w-[720px]">{body}</p>
  )
}

function renderSection(section: CaseStudySection, i: number) {
  const { type, props } = section

  switch (type) {
    case 'sectionHeader':
      return (
        <SectionHeader
          key={i}
          variant={props.variant as 'A' | 'B' | 'C'}
          eyebrow={props.eyebrow as string | undefined}
          title={props.title as string}
          subtitle={props.subtitle as string | undefined}
        />
      )

    case 'text':
      return <TextBlock key={i} body={props.body as string} />

    case 'bulletList':
      return (
        <BulletListBlock
          key={i}
          title={props.title as string | undefined}
          items={props.items as { term?: string; description: string }[]}
          columns={props.columns as 1 | 2 | undefined}
        />
      )

    case 'highlightBlock':
      return (
        <HighlightBlock
          key={i}
          variant={props.variant as 'quote' | 'callout'}
          text={props.text as string}
          attribution={props.attribution as string | undefined}
          label={props.label as string | undefined}
        />
      )

    case 'impactMetric':
      return (
        <ImpactMetric
          key={i}
          metrics={props.metrics as { stat: string; label: string; description?: string }[]}
        />
      )

    case 'fullWidthImage':
      return (
        <FullWidthImage
          key={i}
          src={props.src as string}
          alt={props.alt as string}
          caption={props.caption as string | undefined}
          aspectRatio={props.aspectRatio as 'panoramic' | 'wide' | 'standard' | 'portrait' | undefined}
        />
      )

    case 'labeledItem':
      return (
        <LabeledItem
          key={i}
          variant={props.variant as 'numbered' | 'priority' | 'stakeholder'}
          numberedItems={props.numberedItems as { number: number | string; title: string; body: string }[] | undefined}
          priorityItems={props.priorityItems as { label: 'Must' | 'Should' | 'Could' | "Won't"; content: string }[] | undefined}
          stakeholderItems={props.stakeholderItems as { number: number | string; purpose: string; outcome: string }[] | undefined}
        />
      )

    default:
      return null
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug)
  const sections = caseStudy
    ? caseStudy.sections
    : getGenericSections(project.title, project.descriptor, project.role)

  const heroImage = caseStudy?.heroImage || project.heroImage || '/images/placeholder.jpg'
  const heroVariant = caseStudy?.heroVariant || 'A'

  const prevProject = project.prev ? getProjectBySlug(project.prev) : undefined
  const nextProject = project.next ? getProjectBySlug(project.next) : undefined

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyHero
          variant={heroVariant}
          image={heroImage}
          eyebrow={project.category}
          title={project.title}
          descriptor={project.descriptor}
          imageAlt={`${project.title} hero image`}
        />

        <ProjectMetaBar
          role={project.role}
          team={project.team}
          duration={project.duration}
          client={project.client}
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">
            {sections.map((section, i) => renderSection(section, i))}
          </div>
        </article>

        <PrevNextNav
          prev={
            prevProject
              ? {
                  title: prevProject.title,
                  descriptor: prevProject.descriptor,
                  href: `/work/${prevProject.slug}`,
                }
              : undefined
          }
          next={
            nextProject
              ? {
                  title: nextProject.title,
                  descriptor: nextProject.descriptor,
                  href: `/work/${nextProject.slug}`,
                }
              : undefined
          }
        />
      </main>
      <Footer />
    </>
  )
}

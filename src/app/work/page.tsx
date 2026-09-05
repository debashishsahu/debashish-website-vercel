import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkPageClient from '@/components/WorkPageClient'
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
          <header className="pt-10 md:pt-14 pb-8 md:pb-12 md:pl-[17px] max-w-[720px]">
            <h1 className="font-display text-[clamp(1.875rem,6vw,3rem)] font-medium text-ink tracking-tight leading-[1.08]">
              Selected work
            </h1>
            <p className="text-16 md:text-18 text-slate leading-[1.65] mt-4">
              Case studies across enterprise UX, mobile, IoT, physical computing, and
              interaction research — spanning 15 years and a shift from building
              software to designing it.
            </p>
          </header>
          <WorkPageClient
            keyProjects={keyProjects}
            otherProjects={otherProjects}
            sideProjects={sideProjects}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

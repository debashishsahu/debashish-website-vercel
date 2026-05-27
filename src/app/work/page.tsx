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

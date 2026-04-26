import type { Metadata } from 'next'
import Image from 'next/image'
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
import ImageGroup from '@/components/ImageGroup'
import MediaTextCard from '@/components/MediaTextCard'
import ComparisonTable from '@/components/ComparisonTable'
import PageScrollNav from '@/components/PageScrollNav'

export const metadata: Metadata = {
  title: 'Smart Cities — Debashish Sahu',
  description:
    'Revolutionizing urban living through digital design — a research-driven UX initiative for Honeywell Smart Cities covering incident management, SOP design, and citizen engagement.',
  openGraph: {
    title: 'Smart Cities — Debashish Sahu Portfolio',
    description: 'Redefining Urban Interaction through Digital Design: The Smart Cities Initiative.',
    images: ['/images/smart-cities/hero.png'],
  },
}

const SECTIONS = [
  { id: 'introduction',       label: 'Introduction' },
  { id: 'urban-challenge',    label: 'Urban Challenge' },
  { id: 'research',           label: 'Research' },
  { id: 'competitor',         label: 'Competitors' },
  { id: 'personas',           label: 'Personas' },
  { id: 'ideation',           label: 'Ideation' },
  { id: 'wireframes',         label: 'Wireframes' },
  { id: 'execution',          label: 'Execution' },
  { id: 'impact',             label: 'Impact' },
  { id: 'conclusion',         label: 'Conclusion' },
]

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function SmartCitiesPage() {
  return (
    <>
      <Navbar />
      <PageScrollNav sections={SECTIONS} />
      <main>
        <CaseStudyHero
          variant="A"
          image="/images/smart-cities/hero.png"
          eyebrow="Honeywell · 2019"
          title="Revolutionizing Urban Living"
          descriptor="Redefining Urban Interaction through Digital Design: The Smart Cities Initiative"
          imageAlt="Smart Cities initiative — Honeywell urban command and control platform"
        />

        <ProjectMetaBar
          role="Researcher & UX Strategist"
          team="Cross-functional — HUE Bangalore & HUE Sydney"
          duration="6 months"
          client="Honeywell · Enterprise"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Introduction ── */}
            <div id="introduction" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Introduction" />
            <div className="flex flex-col lg:flex-row gap-10 items-start my-8">
              <div className="flex-1 min-w-0">
                <p className="text-16 text-slate leading-[1.75] mb-6">
                  In today&apos;s rapidly urbanizing world, cities are grappling with congestion,
                  fragmented services, and outdated systems. Honeywell&apos;s Smart Cities initiative
                  emerged as a visionary response — a research-driven project that evolved into a set
                  of high-level wireframes, designed to seamlessly integrate urban operations.
                </p>
                <p className="text-16 text-slate leading-[1.75]">
                  This case study chronicles the journey from in-depth research to conceptual design,
                  demonstrating how strategic UX can transform city management for a smarter, safer,
                  and more sustainable urban future.
                </p>
              </div>
              <div className="w-full lg:w-[30%] flex-shrink-0 rounded-xl overflow-hidden border border-linen">
                <Image
                  src="/images/smart-cities/intro-image.png"
                  alt="Smart Cities Mission launch — Prime Minister Narendra Modi, June 2016"
                  width={0}
                  height={0}
                  sizes="(min-width: 1280px) 42vw, 100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* ── Section 2 — The Urban Challenge ── */}
            <div id="urban-challenge" className="scroll-mt-24" />
            <SectionHeader variant="A" title="The Urban Challenge — Unpacking Complexity" />
            <Prose>
              Before designing a smarter interface, it was crucial to define the problem. Urban
              environments today are plagued by fragmented digital services that do not fully
              engage or inform citizens.
            </Prose>
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Fragmented Urban Operations',
                  body: 'Cities have long suffered from disjointed systems where departments work in silos. From waste management to traffic monitoring, the lack of integration resulted in slow response times and inefficient service delivery.',
                },
                {
                  number: '02',
                  title: 'Interdepartmental Coordination Issues',
                  body: 'Municipal teams struggled with communication hurdles — manual processes, language barriers, and inadequate digital tools created gaps leading to delays and operational errors.',
                },
                {
                  number: '03',
                  title: 'Citizen Engagement and Operational Gaps',
                  body: 'Residents were left with no centralized platform to report issues or track progress — a decrease in trust and satisfaction, with critical urban challenges going unaddressed.',
                },
              ]}
            />
            <BulletListBlock
              title="Project Goals"
              items={[
                { description: 'Create an integrated, real-time command center.' },
                { description: 'Enhance incident management across domains such as traffic, waste, water, and lighting.' },
                { description: 'Foster seamless interdepartmental coordination and citizen engagement.' },
                { description: 'Leverage advanced analytics to improve operational efficiency.' },
              ]}
              columns={2}
            />
            <HighlightBlock
              variant="callout"
              label="Problem Statement"
              text='"How can technology transform everyday urban experiences into smart, seamless, and engaging interactions?"'
            />

            {/* ── Section 3 — Research & Discovery ── */}
            <div id="research" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Research & Discovery" />
            <LabeledItem
              variant="priority"
              priorityItems={[
                {
                  label: 'Should',
                  content: 'Phase 01 — Primary Research · Field Observations (10-day period noting citizen navigation and kiosk interactions) · User Interviews (city residents, public service users, urban planners) · Usability Testing (early prototypes in real-life settings).',
                },
                {
                  label: 'Must',
                  content: 'Phase 02 — Secondary Research · Literature & Benchmarking (existing urban digital interface studies) · Data Analysis (quantitative metrics validating observational insights).',
                },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Existing Solutions" title="Existing Solutions & Implementations" />
            <Prose>
              Honeywell&apos;s current solution is a robust, integrated command console already being deployed:
            </Prose>
            <MediaTextCard
              variant="feature"
              image="/images/smart-cities/gis-maps.png"
              title="GIS Maps"
              imagePosition="top"
              bullets={[
                'Load multiple layers',
                'Provide search capabilities',
                'Nearby elements/cameras/sensors search',
                'Third-party map integration',
              ]}
            />
            <MediaTextCard
              variant="feature"
              image="/images/smart-cities/orchestration.png"
              title="Orchestration"
              imagePosition="top"
              bullets={[
                'Navigate seamlessly through different screens',
                'Track an incident on the map using DVM and viz.',
                'Search for nearby cameras',
                'From incident, see map location and associated videos',
              ]}
            />
            <FullWidthImage
              src="/images/smart-cities/command-console.png"
              alt="Honeywell command console interface — existing implementation"
              aspectRatio="wide"
              caption="Command Console — collaboration between HUE Bangalore and HUE Sydney"
            />

            <SectionHeader variant="B" eyebrow="User Research" title="Mapping the Journey — Deep Dive into User Research" />
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/smart-cities/user-research-01.png', caption: 'VOC & OVOC studies — interviews with municipal officials and control room operators' },
                { src: '/images/smart-cities/user-research-02.png', caption: 'Workshops & field studies mapping urban complexities' },
              ]}
            />
            <BulletListBlock
              title="Key Insights"
              items={[
                { term: 'Unified Communication is Critical',  description: 'The lack of integrated tools significantly delayed incident response.' },
                { term: 'Localized Urban Challenges',         description: 'Detailed city mapping revealed that each urban area has unique infrastructure issues requiring bespoke solutions.' },
                { term: 'Need for Real-Time Data',            description: 'Stakeholders emphasized the importance of real-time data visualization and predictive analytics.' },
                { term: 'Citizen Engagement',                 description: 'A centralized platform for reporting and resolving issues is vital for restoring public trust.' },
              ]}
              columns={2}
            />
            <FullWidthImage
              src="/images/smart-cities/stakeholder-mapping.png"
              alt="Stakeholder mapping diagram showing relationships between urban departments"
              aspectRatio="wide"
              caption="Stakeholder mapping — connecting municipal officials, operators, and field engineers"
            />
            <BulletListBlock
              title="Challenges Faced and Pain Points"
              items={[
                { term: 'Fragmented Operations',       description: 'Disconnected systems resulted in slow, error-prone responses.' },
                { term: 'Language & Tech Barriers',    description: 'Many operators found current systems cumbersome due to language challenges.' },
                { term: 'Manual Tracking',             description: 'Reliance on legacy systems and manual entry led to inefficiencies.' },
                { term: 'Citizen Disengagement',       description: 'The absence of a unified platform left residents frustrated and disconnected.' },
                { term: 'Limited Real-Time Visibility', description: 'Inadequate data access hampered quick decision-making.' },
              ]}
              columns={2}
            />

            <SectionHeader variant="B" eyebrow="India Context" title="Understanding Indian Cities — A Tapestry of Diversity" />
            <Prose>
              The India Smart Cities Mission aims to transform 100 cities into citizen-friendly,
              sustainable urban hubs — this initiative provided the backdrop for our research.
            </Prose>
            <FullWidthImage
              src="/images/smart-cities/city-kochi.png"
              alt="Kochi city profile showing urban infrastructure and challenges"
              objectFit="natural"
            />
            <FullWidthImage
              src="/images/smart-cities/cities-strip.png"
              alt="Indian cities strip showing diversity across Vizag, Ahmedabad, and others"
              objectFit="natural"
              caption="City profiles — each Indian city's unique demographic and economic context informed tailored solutions"
            />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'City Profiles',
                  body: "Detailed profiles (e.g., Vizag's ancient legacy vs. Ahmedabad's industrial might) highlighted varied challenges and opportunities.",
                },
                {
                  number: '02',
                  title: 'Economic & Cultural Context',
                  body: "Each city's unique demographic, economic drivers, and cultural nuances informed tailored smart solutions.",
                },
                {
                  number: '03',
                  title: 'Workshops & Stakeholder Engagement',
                  body: "Collaborative sessions with local authorities showed the need for localized, scalable tech that respects each city's distinct identity.",
                },
              ]}
            />
            <FullWidthImage
              src="/images/smart-cities/cities-asking-for.png"
              alt="Research synthesis showing what Indian cities are asking for from smart city platforms"
              objectFit="natural"
              caption="What our cities are asking for — highlights from research synthesis"
            />

            {/* ── Section 4 — Competitor Analysis ── */}
            <div id="competitor" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Competitor Analysis" />
            <Prose>
              To design an effective solution, we conducted a series of interviews with stakeholders
              and analysed what others are doing across key capability areas.
            </Prose>
            <ComparisonTable
              headers={['IBM IOC', 'Trinity ICCC', 'Our Design']}
              ourDesignIndex={2}
              rows={[
                { category: 'Incident Management' },
                { feature: 'Workflow customisation',            values: ['✓', '✓', '✓+'] },
                { feature: 'Dispatch to field teams',           values: ['✓', '✓', '✓'] },
                { feature: 'Collaboration with response teams', values: ['✓', '✓', '✓+'] },
                { category: 'Dashboards & Analytics' },
                { feature: 'Operational dashboards with drill-down', values: ['✓', '✓', '✓+'] },
                { feature: 'Emergency responders readiness',         values: ['✓', '✗', '✓'] },
                { feature: 'KPI monitoring and incident heat maps',  values: ['✓', '✗', '✓+'] },
                { category: 'Citizen Interactions' },
                { feature: 'Grievance redressal',  values: ['✓', '✓', '✓+'] },
                { feature: 'Citizen broadcasts',   values: ['✓', '✓', '✓'] },
                { category: 'Deployment' },
                { feature: 'Cloud & on-premise options', values: ['✓', '✓', '✓'] },
              ]}
            />

            {/* ── Section 5 — Personas ── */}
            <div id="personas" className="scroll-mt-24" />
            <SectionHeader variant="A" title="User Personas" />
            <FullWidthImage
              src="/images/smart-cities/persona-01.png"
              alt="Primary persona — city operations manager profile with goals and pain points"
              aspectRatio="wide"
              objectFit="natural"
              caption="Primary persona — City Operations Manager"
            />
            <FullWidthImage
              src="/images/smart-cities/persona-02.png"
              alt="Secondary primary persona — field engineer profile with goals and pain points"
              aspectRatio="wide"
              objectFit="natural"
              caption="Primary persona — Field Engineer"
            />
            <FullWidthImage
              src="/images/smart-cities/persona-other.png"
              alt="Secondary personas overview — citizen, department head, city administrator"
              aspectRatio="wide"
              objectFit="natural"
              caption="Secondary personas — Citizen, Department Head, City Administrator"
            />

            {/* ── Section 6 — Ideation ── */}
            <div id="ideation" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Ideation and Conceptualization" />
            <Prose>
              &ldquo;As-Is&rdquo; vs. &ldquo;To-Be&rdquo; journey maps illustrate the transformative
              potential of the Smart Cities platform, capturing three key workflows:
            </Prose>
            <BulletListBlock
              title="Journey maps cover"
              items={[
                { term: 'Incident Response',      description: 'From initial alerts to dispatch and resolution.' },
                { term: 'Citizen Engagement',     description: 'Transitioning from fragmented, manual reporting to an integrated digital platform.' },
                { term: 'Operational Workflow',   description: 'The shift from disjointed processes to seamless, real-time management.' },
              ]}
              columns={1}
            />
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/smart-cities/journey-map-as-is-01.png', caption: 'As-Is journey map — current incident response workflow' },
                { src: '/images/smart-cities/journey-map-as-is-02.png', caption: 'As-Is journey map — citizen engagement and service delivery' },
              ]}
            />
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/smart-cities/journey-map-to-be-01.png', caption: 'To-Be journey map — integrated incident response' },
                { src: '/images/smart-cities/journey-map-to-be-02.png', caption: 'To-Be journey map — seamless citizen engagement' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="CEO Dashboard" title="Designing for Smart City CEO's Dashboard" />
            <FullWidthImage
              src="/images/smart-cities/ceo-dashboard.png"
              alt="High-level wireframe of the smart city CEO dashboard"
              aspectRatio="wide"
              objectFit="natural"
              caption="CEO Dashboard wireframe — city-wide operational overview"
            />
            <FullWidthImage
              src="/images/smart-cities/journey-map-ceo-dashboard.png"
              alt="Journey map for the CEO dashboard showing information flow and decision points"
              aspectRatio="wide"
              objectFit="natural"
              caption="CEO Dashboard journey map — from city alerts to executive decision"
            />

            {/* ── Section 7 — Wireframes ── */}
            <div id="wireframes" className="scroll-mt-24" />
            <SectionHeader variant="A" title="High-Level Wireframes & UX Conceptualization" />
            <BulletListBlock
              title="The objective was to create high-level wireframes capturing:"
              items={[
                { term: 'Alerts Landing Page',        description: 'Dual views (map and list) for quick incident assessment.' },
                { term: 'Incident Details Panel',     description: 'Visual breakdown of incident specifics, SOP guidance, and communication channels.' },
                { term: 'User Interaction Flows',     description: 'Detailed user journeys from alert reception to incident closure.' },
              ]}
              columns={1}
            />
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/smart-cities/wireframes-01.png', caption: 'High-level workflow wireframes — alert listing views' },
                { src: '/images/smart-cities/wireframes-02.png', caption: 'High-level workflow wireframes — incident management flow' },
                { src: '/images/smart-cities/wireframes-03.png', caption: 'High-level workflow wireframes — SOP designer canvas' },
                { src: '/images/smart-cities/wireframes-04.png', caption: 'High-level workflow wireframes — multi-screen dashboard layout' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="New Concepts" title="New Concepts and Innovations" />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Advanced SOP Designer',
                  body: 'An intuitive, visual canvas allows users to create and modify Standard Operating Procedures through block-diagram representations. Auto-connected activity cards and if-else conditions simplify workflow creation, reducing errors and training time.',
                },
                {
                  number: '02',
                  title: 'Enhanced Multi-Screen Functionality',
                  body: 'New wireframes illustrate the capability to separate video feeds and maps across different screens. This multi-screen approach enables operators to monitor various data streams simultaneously, boosting situational awareness.',
                },
                {
                  number: '03',
                  title: 'Refined Incident Detail Panels',
                  body: 'Redesigned layouts offer richer, more accessible details — including comprehensive SOP information, evidence attachments, and real-time commentary — ensuring users can respond more effectively.',
                },
                {
                  number: '04',
                  title: 'Interactive & Customizable Dashboards',
                  body: 'The updated interface supports dynamic layering and filtering, allowing users to tailor the display to operational needs. Enhanced iconography, colour coding, and visual cues improve navigation and reduce cognitive load.',
                },
                {
                  number: '05',
                  title: 'Task-Based Design Enhancements',
                  body: 'Focused on intuitive interaction, these innovations emphasize ease-of-use through clear visual hierarchies and customizable views, enhancing the overall user experience.',
                },
              ]}
            />

            {/* ── Section 8 — Execution ── */}
            <div id="execution" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Execution Details — Phased Rollout" />
            <BulletListBlock
              title="UX and Technology Integration"
              items={[
                { term: 'Real-Time Analytics',         description: 'Leverages IoT sensors and AI-driven insights for predictive analytics and rapid decision-making.' },
                { term: 'Collaborative Tools',          description: 'Integrated communication channels foster seamless coordination among departments.' },
                { term: 'Citizen-Centric Interface',    description: 'Empowers residents to report issues and stay informed through an engaging, user-friendly portal.' },
              ]}
              columns={1}
            />

            <SectionHeader variant="B" eyebrow="Phase 1" title="Alert Listing and Details" />
            <Prose>Discover city alerts — easily.</Prose>
            <ImageGroup
              variant="beforeafter"
              before={{
                src: '/images/smart-cities/alert-listing.png',
                caption: 'Alert Listing — tabular format with Priority, Source, Type, Date & Time, Timeout columns',
              }}
              after={{
                src: '/images/smart-cities/alert-listing-details.png',
                caption: 'Alert Details — right panel with location sub-section that can pop-out to a second screen',
              }}
            />

            <SectionHeader variant="B" eyebrow="Phase 2" title="Incidents Listing and Details" />
            <Prose>Act on smart city alerts — quickly.</Prose>
            <ImageGroup
              variant="beforeafter"
              before={{
                src: '/images/smart-cities/incident-listing.png',
                caption: 'Incidents Listing — card list alongside live map, incidents highlighted with source icons',
              }}
              after={{
                src: '/images/smart-cities/incident-details.png',
                caption: 'Incident Details — overlay panel with SOP details, evidence, and comments sections',
              }}
            />

            <SectionHeader variant="B" eyebrow="Phase 3" title="SOP Designer" />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'SOP Designer Canvas',
                  body: 'The SOP Designer consists of a canvas and config panel. The canvas can be visualized in block diagram form and the config panel provides contextual actions to create the flow.',
                },
                {
                  number: '02',
                  title: 'If-Else Condition',
                  body: "An if-else condition can be added between two cards by invoking the action via the plus '+' sign — enabling complex conditional workflows.",
                },
                {
                  number: '03',
                  title: 'Creating a SOP Activity',
                  body: "SOP creation starts by clicking 'Start Creating SOP' which provides options for adding an activity. Each activity card shows a '+' sign to automatically add and connect the next activity.",
                },
              ]}
            />
            <ImageGroup
              variant="beforeafter"
              before={{
                src: '/images/smart-cities/incident-listing.png',
                caption: 'SOP canvas — block diagram representation of the workflow',
              }}
              after={{
                src: '/images/smart-cities/incident-details.png',
                caption: 'SOP config panel — contextual actions to create and link activities',
              }}
            />

            {/* ── Section 9 — Impact ── */}
            <div id="impact" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Impact, Reflections and the Road Ahead" />
            <ImpactMetric
              statColor="linen"
              metrics={[
                { stat: '01', label: 'Reduced Response Time',    description: 'Incident response improved from hours to mere minutes.' },
                { stat: '02', label: 'Operational Efficiency',   description: 'Streamlined processes reduced manual effort and cross-team errors.' },
                { stat: '03', label: 'Enhanced Collaboration',   description: 'Integrated communication channels fostered better interdepartmental coordination.' },
                { stat: '04', label: 'Citizen Satisfaction',     description: 'Direct citizen engagement channels bolstered trust and transparency.' },
              ]}
            />

            {/* ── Section 10 — Conclusion ── */}
            <div id="conclusion" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Conclusion — A Vision Realized Through Thoughtful Design" />
            <HighlightBlock
              variant="quote"
              text="Honeywell's Smart Cities initiative stands as a powerful example of how in-depth research and visionary design can converge to create transformative urban solutions."
            />
            <Prose>
              By addressing the intricacies of urban challenges and crafting a user-centric interface,
              this project not only enhances operational efficiency but also redefines the citizen
              experience. The journey from comprehensive research to high-level wireframes demonstrates
              the profound impact that thoughtful UX can have on shaping the cities of tomorrow.
            </Prose>

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Campaign Management System', descriptor: 'Enterprise · IMImobile',      href: '/work/imicampaign' }}
          next={{ title: 'Customs Clearance',          descriptor: 'Enterprise · Agility Logistics', href: '/work/customs-clearance' }}
        />
      </main>
      <Footer />
    </>
  )
}

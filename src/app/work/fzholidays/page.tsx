import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectMetaBar from '@/components/ProjectMetaBar'
import PrevNextNav from '@/components/PrevNextNav'
import SectionHeader from '@/components/SectionHeader'
import BulletListBlock from '@/components/BulletListBlock'
import HighlightBlock from '@/components/HighlightBlock'
import FullWidthImage from '@/components/FullWidthImage'
import LabeledItem from '@/components/LabeledItem'
import ImageGroup from '@/components/ImageGroup'
import ImageCarousel from '@/components/ImageCarousel'
import ImpactMetric from '@/components/ImpactMetric'
import PageScrollNav from '@/components/PageScrollNav'

export const metadata: Metadata = {
  title: 'FlyDubai Holidays — Debashish Sahu',
  description:
    'Designing a one-stop holiday booking experience for FlyDubai — a 6-month B2C engagement covering user research, competitive analysis, design principles, wireframes, visual design, and usability testing with 36 participants.',
  openGraph: {
    title: 'FlyDubai Holidays — Debashish Sahu Portfolio',
    description:
      'Creating a brand new holiday booking experience for a major Middle Eastern airline.',
    images: ['/images/fzholidays/hero.jpg'],
  },
}

const SECTIONS = [
  { id: 'background',        label: 'Background' },
  { id: 'research',          label: 'Research' },
  { id: 'define',            label: 'Define' },
  { id: 'design',            label: 'Design' },
  { id: 'usability-testing', label: 'Usability Testing' },
  { id: 'conclusion',        label: 'Conclusion' },
]

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function FzHolidaysPage() {
  return (
    <>
      <Navbar />
      <PageScrollNav sections={SECTIONS} />
      <main>
        <CaseStudyHero
          variant="A"
          image="/images/fzholidays/hero.jpg"
          eyebrow="FlyDubai · Sept 2016 – March 2017"
          title="FlyDubai Holidays"
          descriptor="Creating a brand new holiday booking experience for a major Middle Eastern airline"
          imageAlt="FlyDubai Holidays — holiday booking platform"
        />

        <ProjectMetaBar
          role="Requirement Analysis · User Research · Competitive Research · Interaction Design"
          team="1 Design Manager · 2 Design Leads · 3 Interaction Designers · 2 Visual Designers"
          duration="6 months (Sept 2016 – March 2017)"
          client="FlyDubai · B2C · Middle East"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Background ── */}
            <div id="background" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Background" />

            <Prose>
              FlyDubai was seeking to expand its services by venturing into the holiday booking
              solution. This involved providing a platform for customers to not only book flights
              but also plan and book their entire holiday — including accommodations, activities,
              and other travel essentials.
            </Prose>

            <BulletListBlock
              title="Objectives"
              items={[
                {
                  description: 'Provide a one-stop platform for customers to plan and book their holidays, including flights, accommodations, and activities.',
                },
                {
                  description: 'Increase average booking value by bundling flights with holiday packages.',
                },
                {
                  description: 'Enhance customer engagement and satisfaction by offering a comprehensive holiday booking solution.',
                },
              ]}
              columns={1}
            />

            <BulletListBlock
              title="Key Features"
              items={[
                {
                  term: 'Integrated Booking System',
                  description: 'A user-friendly platform that allows customers to book flights, accommodations, and activities in one place.',
                },
                {
                  term: 'Customization Options',
                  description: 'The ability for customers to personalise their holiday itineraries based on their preferences.',
                },
                {
                  term: 'Collaboration Tools',
                  description: 'Features that enable group travel planning and coordination.',
                },
                {
                  term: 'Payment Integration',
                  description: 'Seamless and secure payment processing for all bookings.',
                },
              ]}
              columns={2}
            />

            {/* ── Section 2 — Research ── */}
            <div id="research" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Research" />

            <SectionHeader variant="B" eyebrow="Discovery" title="Where Are We Today?" />
            <Prose>
              The first step was to understand the current state of flight booking in Middle Eastern
              countries and the reasons behind FlyDubai's interest in transitioning to a comprehensive
              holiday booking platform. We held multiple remote meetings with the FlyDubai team —
              including a project manager, management, the marketing team, customer service
              representatives, and the technical team.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Initial Research and Discovery',
                  body: "Thorough understanding of FlyDubai's objectives, target audience, and market positioning — reviewing existing documentation, conducting stakeholder interviews, and gathering initial user research data.",
                },
                {
                  number: '02',
                  title: 'Defining the Problem',
                  body: 'Identifying key problems and challenges the platform needed to address — articulating clear problem statements that would guide the entire design process.',
                },
              ]}
            />

            <FullWidthImage
              src="/images/fzholidays/opportunity-defining-success.webp"
              alt="Opportunity areas and success metrics framework for FlyDubai Holidays"
              aspectRatio="wide"
              caption="Opportunity areas and defining success — research synthesis framework"
            />

            <SectionHeader variant="B" eyebrow="Competitive Research" title="Secondary Research — Competitor Analysis" />
            <Prose>
              Conducting secondary research on competitors was crucial for understanding the market
              landscape and identifying opportunities for differentiation. We identified major
              competitors in the travel booking industry focusing on the Middle East and globally —
              both direct competitors (other airlines with booking platforms) and indirect
              competitors (general travel booking websites).
            </Prose>

            <FullWidthImage
              src="/images/fzholidays/secondary-research-competitors.webp"
              alt="Competitor analysis matrix covering booking process, customisation, UI, and services"
              objectFit="natural"
              caption="Competitive analysis — feature matrix comparing direct and indirect competitors"
            />

            {/* ── Section 3 — Define ── */}
            <div id="define" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Define" />

            <SectionHeader variant="B" eyebrow="Personas" title="User Personas" />
            <Prose>
              The creation of user personas was a crucial step in ensuring the Holidays platform
              met the diverse needs and preferences of its target audience. By developing detailed
              personas, we could tailor features and design to resonate with users' goals,
              behaviours, and pain points.
            </Prose>

            <ImageCarousel
              images={[
                {
                  src: '/images/fzholidays/persona-01.webp',
                  alt: 'Kiaan — The Adventurer',
                  caption: 'Kiaan — The Adventurer · Leisure traveller, Middle East, spontaneous and experience-driven',
                },
                {
                  src: '/images/fzholidays/persona-02.webp',
                  alt: 'Jasmine — Family\'s Trip Planner',
                  caption: 'Jasmine — Family\'s Trip Planner · Organised traveller seeking planned, structured holidays',
                },
                {
                  src: '/images/fzholidays/persona-03.webp',
                  alt: 'Third persona — independent traveller',
                  caption: 'Third persona — independent traveller, efficiency-focused',
                },
              ]}
            />

            <Prose>
              By creating these personas, we were able to align the platform's design and
              functionality with the distinct needs and expectations of our users. This
              persona-driven approach enhanced user satisfaction and enabled FlyDubai to
              effectively cater to a broader audience.
            </Prose>

            <SectionHeader variant="B" eyebrow="Workshop" title="Brainstorming and Ideation Workshop" />
            <Prose>
              To foster idea generation and collaboration, we organised a two-day workshop involving
              stakeholders from both FlyDubai and the Imaginea team. The workshop aimed to set the
              context, create detailed user flows, and identify key opportunity areas.
            </Prose>

            <FullWidthImage
              src="/images/fzholidays/ideation-workshop.png"
              alt="Two-day ideation workshop with FlyDubai and Imaginea team"
              aspectRatio="wide"
              caption="Two-day ideation workshop — Dubai, 2016"
            />

            <ImageGroup
              variant="workshop"
              images={[
                { src: '/images/fzholidays/workshop-01.jpg', alt: 'Workshop session — field photo 1' },
                { src: '/images/fzholidays/workshop-02.jpg', alt: 'Workshop session — field photo 2' },
                { src: '/images/fzholidays/workshop-03.jpg', alt: 'Workshop session — field photo 3' },
                { src: '/images/fzholidays/workshop-04.jpg', alt: 'Workshop session — field photo 4' },
                { src: '/images/fzholidays/workshop-05.jpg', alt: 'Workshop session — field photo 5' },
                { src: '/images/fzholidays/workshop-06.jpg', alt: 'Workshop session — field photo 6' },
                { src: '/images/fzholidays/workshop-07.jpg', alt: 'Workshop session — field photo 7' },
                { src: '/images/fzholidays/workshop-08.jpg', alt: 'Workshop session — field photo 8' },
                { src: '/images/fzholidays/workshop-09.jpg', alt: 'Workshop session — field photo 9' },
              ]}
              caption="Ideation workshop sessions — collaborative activities, user flow mapping, and brainstorming"
            />

            <Prose>
              At the end of the workshop, we reviewed and discussed findings and proposed user flows
              with the FlyDubai team. This collaborative effort allowed us to align on a shared
              vision and finalise the approach for the next design steps.
            </Prose>

            <SectionHeader variant="B" eyebrow="Journey Mapping" title="Defining User Journey" />
            <Prose>
              To ground our ideas in reality, we mapped out user journeys simultaneously with the
              ideation process — ensuring personas' paths were aligned with both stakeholder
              business goals and the creative concepts generated during brainstorming.
            </Prose>

            <FullWidthImage
              src="/images/fzholidays/user-journey.avif"
              alt="End-to-end user journey map for holiday booking from discovery to post-booking"
              aspectRatio="portrait"
              caption="User journey map — from holiday inspiration to post-booking experience"
            />

            {/* ── Section 4 — Design ── */}
            <div id="design" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Design" />

            <SectionHeader variant="B" eyebrow="Design Principles" title="Design Principles" />

            <div className="flex justify-center my-8">
              <div style={{ width: '100%', maxWidth: '480px' }}>
                <FullWidthImage
                  src="/images/fzholidays/design-principles.png"
                  alt="Five design principles diagram for FlyDubai Holidays platform"
                  objectFit="natural"
                />
              </div>
            </div>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Focus on Users',
                  body: "As FlyDubai transitions into a one-stop holiday platform, understanding and prioritising the needs of diverse users — families, adventurers, travel agents — ensures each group finds the platform valuable and easy to use.",
                },
                {
                  number: '02',
                  title: 'Clarity of Information',
                  body: 'Presenting clear information about flights, accommodations, packages, and services is essential. Users need to quickly grasp the options available, benefits of each choice, and associated costs — reducing frustration and abandonment.',
                },
                {
                  number: '03',
                  title: 'Clarity of Process',
                  body: 'Users should easily navigate through planning, selecting, and booking holidays without confusion or unnecessary steps. Clear process flows enhance user confidence and streamline the booking experience.',
                },
                {
                  number: '04',
                  title: 'Easy Comparison',
                  body: 'Offering easy comparison for flights, hotels, excursions, and services allows users to weigh options effectively — helping them quickly find the best options that meet their needs.',
                },
                {
                  number: '05',
                  title: 'Helpful and Relevant',
                  body: 'Whether through contextual tips, FAQs, customer support, or personalised recommendations, timely and relevant assistance builds trust and reliability — encouraging users to return for future bookings.',
                },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Application Design" title="Application Designs" />

            <FullWidthImage
              src="/images/fzholidays/screen-flows.png"
              alt="Application screen flows showing key booking journey steps"
              objectFit="natural"
              caption="Screen flows — key application journeys from search to booking confirmation"
            />

            <SectionHeader variant="B" eyebrow="Wireframes" title="Wireframes" />

            <ImageCarousel
              images={[
                { src: '/images/fzholidays/Design-Home-01.png', alt: 'Home page wireframe — hero and search widget', caption: 'Home page — hero section with immersive destination imagery and search widget' },
                { src: '/images/fzholidays/Design-Home-02.png', alt: 'Home page wireframe — package discovery and promotions', caption: 'Home page — location-aware package suggestions and promotional layout' },
                { src: '/images/fzholidays/Design-Home-03.png', alt: 'Home page wireframe — editorial and inspirational section', caption: 'Home page — inspirational editorial push and explore & discover section' },
                { src: '/images/fzholidays/Design-Home-04.png', alt: 'Home page wireframe — footer and navigation', caption: 'Home page — other package types and footer navigation' },
                { src: '/images/fzholidays/Design-Hotel-05.png', alt: 'Hotel detail and room selection wireframe', caption: 'Hotel detail page — room selection, amenities, and booking flow' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Visual Design" title="Visual Designs" />

            <ImageCarousel
              images={[
                { src: '/images/fzholidays/vd-01.png', alt: 'Visual design — Homepage and search', caption: 'Visual design — Homepage and search' },
                { src: '/images/fzholidays/vd-02.png', alt: 'Visual design — Package listing and filters', caption: 'Visual design — Package listing and filters' },
                { src: '/images/fzholidays/vd-03.png', alt: 'Visual design — Package detail and booking flow', caption: 'Visual design — Package detail and booking flow' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Responsive & i18n" title="Responsive & Internationalisation" />

            <FullWidthImage
              src="/images/fzholidays/vd-responsive.png"
              alt="Responsive design showing desktop, tablet, and mobile breakpoints"
              aspectRatio="wide"
              caption="Responsive design — adapted layouts across desktop, tablet, and mobile"
            />

            <FullWidthImage
              src="/images/fzholidays/internationalisation.jpg"
              alt="Internationalisation design showing Arabic RTL and English LTR layouts"
              objectFit="natural"
              caption="Internationalisation — English LTR and Arabic RTL layout adaptations"
            />

            {/* ── Section 5 — Usability Testing ── */}
            <div id="usability-testing" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Usability Testing" />

            <Prose>
              The usability testing for Holidays by FlyDubai was a rigorous research initiative
              conducted at the FlyDubai premises to evaluate the platform's performance through
              the lens of potential users. Findings were formally presented to FlyDubai stakeholders
              and used as a primary roadmap to further refine the application's interface and user flows.
            </Prose>

            <SectionHeader variant="B" eyebrow="Preparation" title="Pre-Testing — Setup & Preparation" />
            <Prose>
              The research team comprised me and 3 other senior members of the Design team.
              Before engaging with participants, we developed a comprehensive suite of artifacts
              and conducted pilot testing to ensure study validity.
            </Prose>

            <BulletListBlock
              title="Pre-testing artifacts"
              items={[
                {
                  term: 'User Screening',
                  description: 'A formal Screener used to recruit 40 frequent or potential travellers.',
                },
                {
                  term: 'Moderator Scripting',
                  description: 'Detailed scripts created to ensure consistent briefing and scenario delivery across all sessions.',
                },
                {
                  term: 'Pilot Testing',
                  description: "A dedicated 'Day 1' allocated for setup and a pilot test to refine task scenarios before full-scale execution.",
                },
                {
                  term: 'Pre-Test Questionnaire',
                  description: 'Administered to capture user profiles, tech affinity, and existing travel habits.',
                },
              ]}
              columns={2}
            />

            <SectionHeader variant="B" eyebrow="Execution" title="Research Execution & Participant Overview" />
            <Prose>
              The core testing was executed over four days, with the research team divided into
              two UT teams — each with one moderator and one observer/logger — to maximise efficiency.
            </Prose>

            <ImpactMetric
              metrics={[
                {
                  stat: '40',
                  label: 'Users Recruited',
                  description: 'Frequent or potential travellers screened and recruited',
                },
                {
                  stat: '36',
                  label: 'Active Participants',
                  description: 'In-person sessions completed after 4 no-shows',
                },
                {
                  stat: '35',
                  label: 'Problem Areas',
                  description: 'Distinct issues uncovered across the booking journey',
                },
                {
                  stat: '66%',
                  label: 'Major or Critical',
                  description: 'Of identified issues requiring immediate design iteration',
                },
              ]}
            />

            <FullWidthImage
              src="/images/fzholidays/ut-records.png"
              alt="Usability testing records showing participant distribution and session breakdown"
              objectFit="natural"
              caption="Usability testing records — participant breakdown across 4 testing days"
            />

            <div style={{ width: '100%', maxWidth: '560px' }} className="my-8">
              <FullWidthImage
                src="/images/fzholidays/ut-summary.png"
                alt="Quantitative results summary showing 35 problem areas categorised by severity"
                objectFit="natural"
                caption="UT results summary — 35 problem areas categorised by severity level"
              />
            </div>

            <SectionHeader variant="B" eyebrow="Refinement" title="Strategic Design Refinement" />

            <BulletListBlock
              title="Key refinements from UT findings"
              items={[
                {
                  term: 'Mental Model Correction',
                  description: "The design team focused on clarifying the 'Holiday' package concept (flights + hotel) vs. standalone services — a persistent point of confusion for users.",
                },
                {
                  term: 'Simplifying Complex Flows',
                  description: 'Based on high error rates, the team prioritised re-engineering the Room Selection process — identified as the most complex part of the user journey.',
                },
                {
                  term: 'Pricing Transparency',
                  description: 'The interface was refined to ensure users no longer misinterpreted the total package price as an exclusively hotel price.',
                },
              ]}
              columns={1}
            />

            {/* ── Section 6 — Conclusion ── */}
            <div id="conclusion" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Conclusion" />

            <Prose>
              Designing the FlyDubai Holidays experience was a defining moment in my career, marking
              two significant firsts: my entry into large-scale B2C product design and my introduction
              to rigorous usability testing.
            </Prose>

            <BulletListBlock
              title="Key learnings"
              items={[
                {
                  term: 'B2C demands a higher standard of intuitive design',
                  description: "Unlike B2B work — where users are often subject matter experts or receive training — B2C must accommodate a vast spectrum of digital literacy and cultural contexts. The interface must be resilient enough to serve millions, not just the 'ideal' user defined in research.",
                },
                {
                  term: 'User patience is thin — clarity is king',
                  description: 'Sitting across from actual users and watching them interact with designs was a profound reality check. In the B2C space, even small moments of confusion lead to abandonment.',
                },
                {
                  term: 'Designing for human behaviour, not screens',
                  description: 'This experience fundamentally shifted the approach — from designing for screens to designing for the way real humans think, feel, and make decisions under real conditions.',
                },
              ]}
              columns={1}
            />

            <HighlightBlock
              variant="quote"
              text="Sitting across from actual users and watching them interact with my designs was a profound reality check. It taught me that in the B2C space, user patience is thin, and clarity is king."
              attribution="Debashish Sahu, Interaction Designer"
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Customs Clearance', descriptor: 'Enterprise · Agility Logistics', href: '/work/customs-clearance' }}
          next={{ title: 'Space Explorer',     descriptor: 'Interaction Design · NID',       href: '/work/space-explorer' }}
        />
      </main>
      <Footer />
    </>
  )
}

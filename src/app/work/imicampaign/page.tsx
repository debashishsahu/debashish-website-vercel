import type { Metadata } from 'next'
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
import PageScrollNav from '@/components/PageScrollNav'
import VideoEmbed from '@/components/VideoEmbed'
import DocumentEmbed from '@/components/DocumentEmbed'

const SECTIONS = [
  { id: 'project-plan',   label: 'Project Plan' },
  { id: 'problem-space',  label: 'Problem Space' },
  { id: 'user-research',  label: 'User Research' },
  { id: 'user-personas',  label: 'User Personas' },
  { id: 'ideation',       label: 'Ideation' },
  { id: 'final-designs',  label: 'Final Designs' },
  { id: 'testing',        label: 'Testing' },
  { id: 'impact',         label: 'Impact' },
  { id: 'marketing',      label: 'Marketing' },
  { id: 'conclusion',     label: 'Conclusion' },
]

export const metadata: Metadata = {
  title: 'Campaign Management System — Debashish Sahu',
  description:
    'Redesigning an existing multi-channel campaign management platform for IMImobile. A 16-month engagement covering research, IA, visual campaign builder, and design systems.',
  openGraph: {
    title: 'IMI Campaign — Debashish Sahu Portfolio',
    description: 'Redesigning a multi-channel campaign management platform.',
    images: ['/images/imicampaign/hero.jpg'],
  },
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function IMICampaignPage() {
  return (
    <>
      <Navbar />
      <PageScrollNav sections={SECTIONS} />
      <main>
        <CaseStudyHero
          variant="A"
          image="/images/imicampaign/hero.jpg"
          eyebrow="Imaginea Design · Sep 2017 – Jan 2019"
          title="IMI Campaign"
          descriptor="Redesigning an existing multi-channel campaign management platform"
          imageAlt="IMI Campaign — multi-channel campaign management platform"
        />

        <ProjectMetaBar
          role="Project Lead · Requirement Analysis · User Research · Competitive Research · Interaction Design · Visual Design"
          team="2 Interaction Designers · 1 Visual Designer"
          duration="16 months (Sep 2017 – Jan 2019)"
          client="IMImobile · B2B Enterprise"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Project Plan ── */}
            <div id="project-plan" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Project Plan and Detailed Timeline" />
            <FullWidthImage
              src="/images/imicampaign/timeline.png"
              alt="16-month project timeline from Sep 2017 to Jan 2019"
              objectFit="natural"
              caption="Project timeline covering all phases from discovery to handoff"
            />

            {/* ── Section 2 — Problem Space ── */}
            <div id="problem-space" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Problem Space" />
            <BulletListBlock
              title="What are the core functions of the Campaign Management Tool?"
              items={[
                { term: 'Cross-channel deployment', description: 'Trusted with millions of communications across SMS, App Push, MMS, and Email.' },
                { term: 'Mobile-first capabilities', description: 'Optimised campaigns for smartphone engagement throughout the customer lifecycle.' },
                { term: 'Priority Campaigns', description: 'Famed for creating one of the most engaged customer bases across various domains.' },
              ]}
              columns={1}
            />
            <Prose>
              This tool is an integrated campaign management system. It offers a way for enterprises
              to instantly innovate, switching from poorly-integrated disparate systems to joined-up
              cross-channel communications that use the latest mobile-first capabilities. From
              location-aware messaging to instant access to new mobile channels, IMIcampaign&apos;s features
              work together to increase campaign ROI and improve campaign CX.
            </Prose>
            <FullWidthImage
              src="/images/imicampaign/overall-product.png"
              alt="Overview diagram of the IMIcampaign product ecosystem"
              objectFit="natural"
              caption="IMIcampaign product overview — channels, capabilities, and integrations"
            />

            {/* ── Section 3 — Product Analysis and User Research ── */}
            <div id="user-research" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Product Analysis and User Research" />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                { number: '1', title: 'Product Manager',                      body: 'Strategic product direction and roadmap decisions.' },
                { number: '2', title: 'Account Managers',                     body: 'Client relationships and requirement translation.' },
                { number: '4', title: 'Operations Staff',                     body: 'Day-to-day platform execution and management.' },
                { number: '5', title: 'Project Managers & Lead Developers',   body: 'Technical implementation and cross-team coordination.' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Research" title="Stakeholder Consultation & Module Analysis" />
            <Prose>
              To gain a comprehensive understanding of the existing platform&apos;s limitations, we
              initiated the project with a deep-dive product analysis centred on stakeholder
              interviews. By speaking directly with various members of the team across the
              organisation, we captured qualitative insights that defined our path forward.
            </Prose>
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/imicampaign/problem-areas.png',      caption: 'Problem areas identified across modules' },
                { src: '/images/imicampaign/overall-product.png',    caption: 'Overall product structure analysis' },
                { src: '/images/imicampaign/stats-email-heatmap.png',caption: 'Statistics and email heatmap review' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Synthesis" title="Synthesizing the Findings" />
            <Prose>
              By documenting insights section-by-section, we moved beyond anecdotal feedback to
              create a structured list of requirements. This process of connecting with real-world
              users and internal experts validated the need for a transition toward a more visual,
              data-driven, and streamlined interface.
            </Prose>

            <SectionHeader variant="B" eyebrow="Dashboard" title="Dashboard — User Segmentation & Goals" />
            <BulletListBlock
              title="Primary User Goals"
              items={[
                { term: "Executive Oversight (The 'Fish Eye' View)",  description: "High-level performance snapshot across P&Ls and Campaign Groups to assess health at a glance." },
                { term: 'Performance Measurement',                    description: 'Tracking of core metrics including Campaign Statistics, User Engagement, and ROI to justify spend.' },
                { term: 'Drill-Down Capability',                      description: 'Move from top-to-down statistics — macro trends into granular, row-level data.' },
                { term: 'Multidimensional Analysis',                  description: 'Filtering and grouping by marketing channels and date ranges to identify seasonal trends.' },
              ]}
              columns={1}
            />
            <FullWidthImage
              src="/images/imicampaign/picture1.png"
              alt="Dashboard wireframe showing campaign performance overview"
              objectFit="natural"
            />

            <SectionHeader variant="B" eyebrow="Campaign Management" title="Campaign Management System — Goals" />
            <BulletListBlock
              title="Campaign Lifecycle & Governance"
              items={[
                { term: 'End-to-End Management',                  description: 'Comprehensive tools for creation, editing, and ongoing management of marketing initiatives.' },
                { term: 'Hierarchical Visualization',             description: 'Clear visibility into Campaign Groups, Primary Campaigns, and Follow-up Campaigns.' },
                { term: "The 'Who, What, When' Framework",        description: 'Standardised interface to define audiences, content, and scheduling with full flexibility.' },
              ]}
              columns={1}
            />
            <BulletListBlock
              title="Organizational Alignment"
              items={[
                { term: 'Unified Campaign Calendar',    description: 'Single source of truth aligning teams around a shared schedule.' },
                { term: 'Global-to-Local Unification',  description: 'Synchronize campaigns across levels to deliver a consistent customer experience.' },
              ]}
              columns={1}
            />
            <BulletListBlock
              title="Content & Asset Enablement"
              items={[
                { term: 'Integrated Asset Library', description: 'Centralised management for rich media — templates, images, video, and audio.' },
                { term: 'Creative Streamlining',    description: 'Simplified uploading and association of assets directly with campaign steps.' },
              ]}
              columns={1}
            />
            <FullWidthImage
              src="/images/imicampaign/campaign-mgmt-1.png"
              alt="Campaign management system structure and flow diagram"
              objectFit="natural"
            />

            {/* ── User Personas ── */}
            <div id="user-personas" className="scroll-mt-24" />
            <SectionHeader variant="A" title="User Personas" />
            <Prose>
              We zeroed down on these two personas because they represent the two critical pillars
              of the campaign management lifecycle: strategic oversight and operational execution.
              By focusing on Aaron and Marie, the redesign addresses the entire value chain — from
              data-driven decision-making to the technical rollout of content.
            </Prose>
            <MediaTextCard
              variant="persona"
              image="/images/imicampaign/persona-aaron.png"
              name="Aaron Loeb"
              role="Strategic Stakeholder"
              roleColor="blue"
              body="CMO · Focus on brand alignment and organisational goals. Needs high-level aggregated visualisations that clearly define ROI. Aaron's persona highlights the need for a dashboard that moves away from compartmentalised data."
            />
            <MediaTextCard
              variant="persona"
              image="/images/imicampaign/persona-marie.png"
              name="Marie Walter"
              role="Power User"
              roleColor="purple"
              body="Campaign Manager · Represents the operational executor. Her inclusion ensures the redesign solves 'boots on the ground' issues — friction from constant modification requests and the technical limitations of the existing form-based system."
            />

            {/* ── Section 4 — Ideation and Solutioning ── */}
            <div id="ideation" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Ideation and Solutioning" />
            <SectionHeader variant="B" eyebrow="Approach" title="Solution Approach" />
            <Prose>
              This structured, iterative design process bridges the gap between complex technical
              requirements and the end-user&apos;s mental model. By moving through stages like
              Opportunity Areas and Affinity Mapping, the team synthesised scattered stakeholder
              feedback into a cohesive strategy before any code was written.
            </Prose>
            <FullWidthImage
              src="/images/imicampaign/design-process.png"
              alt="Design process diagram showing stages from discovery to delivery"
              objectFit="natural"
              caption="Design process — Discovery → Opportunity Areas → Ideation → Wireframes → Testing → Visual Design"
            />
            <BulletListBlock
              title="Why This Process Was Required"
              items={[
                { term: 'Managing High Complexity',   description: 'The shift from form-based to node-based required deep IA and application flow mapping.' },
                { term: 'Stakeholder Alignment',      description: 'Early brainstorming and wireframes acted as co-designing tools, keeping stakeholders engaged.' },
                { term: 'Risk Mitigation',            description: 'Usability testing loops identified bottlenecks early, preventing costly rework.' },
                { term: 'Consistency at Scale',       description: 'A defined process produced a styleguide enabling pixel-perfect component implementation.' },
              ]}
              columns={2}
            />

            <SectionHeader variant="B" eyebrow="Information Architecture" title="Information Architecture" />
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/imicampaign/ia-existing.png', caption: 'Existing IA — legacy system structure' },
                { src: '/images/imicampaign/ia-v1.png',       caption: 'Redefining: Initial iteration after card-sorting exercise' },
                { src: '/images/imicampaign/ia-v2.png',       caption: 'Redefining: Final iteration — detailed IA' },
                { src: '/images/imicampaign/ia-v3.png',       caption: 'Application structure derived from final IA' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Dashboard" title="Re-designing the Dashboard" />
            <ImageGroup
              variant="beforeafter"
              before={{ src: '/images/imicampaign/dashboard-existing.jpg', caption: 'Existing dashboard — no clear performance metrics' }}
              after={{ src: '/images/imicampaign/dashboard-v1.png',        caption: 'First iteration — block-based wireframes with stakeholders' }}
            />
            <Prose>
              To address the lack of clear performance metrics, we implemented a centralised
              dashboard as the landing page to provide immediate visibility into campaign health.
              The low-fidelity block diagrams facilitated a co-designing environment where
              stakeholders&apos; domain expertise was integrated into every step — shifting
              conversation from generic templates to understanding how unique data models drive
              each visualisation.
            </Prose>
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/imicampaign/dashboard-v2.jpg', caption: 'Second iteration — incorporating stakeholder feedback' },
                { src: '/images/imicampaign/dashboard-v3.png', caption: 'Third iteration — final dashboard direction' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Analytics" title="Data Visualizations" />
            <BulletListBlock
              title="Visualizing Composition and Proportions"
              items={[
                { term: 'Donut + Half Donut Charts', description: 'Represent parts-of-a-whole relationships — quick snapshots of single-level distributions.' },
                { term: 'Sunburst Chart',             description: 'Powerful extension for Marketing Managers to visualise multi-level hierarchies in a single view.' },
              ]}
              columns={1}
            />
            <FullWidthImage
              src="/images/imicampaign/chart-01.jpg"
              alt="Donut and sunburst chart designs for campaign composition"
              objectFit="natural"
            />
            <BulletListBlock
              title="Analyzing Trends and Time-Series Comparisons"
              items={[
                { term: 'Line + Area Charts', description: 'Track performance over time — compare engagement vs spend across date ranges.' },
              ]}
              columns={1}
            />
            <FullWidthImage
              src="/images/imicampaign/chart-02.jpg"
              alt="Line and area charts for time-series campaign analysis"
              objectFit="natural"
            />
            <BulletListBlock
              title="Identifying Bottlenecks with Stacked Comparison"
              items={[
                { term: 'Funnel Chart', description: 'Visualises the conversion journey — highlights exactly where drop-offs occur in the marketing process.' },
              ]}
              columns={1}
            />
            <FullWidthImage
              src="/images/imicampaign/chart-03.jpg"
              alt="Funnel chart design for conversion and drop-off analysis"
              objectFit="natural"
            />

            <SectionHeader variant="B" eyebrow="Visual Campaign Builder" title="Visual Campaign Builder" />
            <Prose>
              We transitioned the core campaign logic from a restrictive &quot;Who, What, When&quot;
              form-based interface into a dynamic Visual Campaign Builder — achieved by
              deconstructing monolithic data entries into a flexible, node-based system.
            </Prose>
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Deconstructing Atomicity (Nodes)',
                  body: 'Analysed existing campaign forms to identify their most basic functional components. Breaking these into Nodes transformed rigid input fields into discrete, modular units — each campaign action becomes an independent building block.',
                },
                {
                  number: '02',
                  title: 'Defining Node Properties',
                  body: 'For each node we designed a specific properties panel based on functional requirements — only surfacing relevant, actionable parameters whether setting an SMS message or defining a target audience.',
                },
                {
                  number: '03',
                  title: 'The Interactive Canvas',
                  body: 'Integrated nodes onto a centralised digital canvas. Mapping logical dependencies between nodes enabled users to visualise entire campaign flows — spatial representation allows complex branching journeys previously impossible in standard forms.',
                },
              ]}
            />
            <ImageGroup
              variant="sequence"
              images={[
                { src: '/images/imicampaign/nodes.png',              caption: 'Node types — deconstructed from existing campaign forms' },
                { src: '/images/imicampaign/node-properties.png',    caption: 'Node properties panel — contextual and action-specific' },
                { src: '/images/imicampaign/nodes-relationship.png', caption: 'Node relationships — mapping campaign flow on canvas' },
                { src: '/images/imicampaign/node-states.png',        caption: 'Node states — default, active, error, completed' },
              ]}
            />
            <HighlightBlock
              variant="callout"
              label="Setup Wizard"
              text="To bridge the gap between a blank canvas and a finished journey, we introduced an intelligent Setup Wizard. Based on initial objectives — such as 'Promotion' or 'Instant Deployment' — the wizard generates a boilerplate template users can simply refine, significantly reducing 'blank page' fatigue."
            />
            <FullWidthImage
              src="/images/imicampaign/wizard.png"
              alt="Setup wizard interface showing boilerplate campaign template options"
              objectFit="natural"
              caption="Setup Wizard — objective-based templates to accelerate campaign creation"
            />

            <SectionHeader variant="B" eyebrow="Listing Pages" title="Listing Pages (P&L, Campaigns & Deployments)" />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Hierarchical Data Architecture',
                  body: 'Three-tier hierarchy: Campaign Groups → Primary Campaigns → Deployments. Nested listing — primary view shows high-level metrics, expandable inner table reveals granular deployment-level details.',
                },
                {
                  number: '02',
                  title: 'Smart Truncation',
                  body: 'Deployment names frequently 64–128 characters. Implemented middle-weighted ellipses — preserving both beginning and end of string (e.g. fifteen_charac...teen_characters) so users identify unique versions without breaking the layout.',
                },
              ]}
            />
            <FullWidthImage
              src="/images/imicampaign/listing-page.png"
              alt="Listing page showing hierarchical campaign and deployment structure"
              objectFit="natural"
              caption="Listing page — three-tier hierarchy with nested drill-down and smart truncation"
            />

            {/* ── Section 5 — Final Designs ── */}
            <div id="final-designs" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Final Designs" />
            <VideoEmbed
              layout="stack"
              videos={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/video/upload/v1777122402/IMIMobile_bykxqd.mp4',
                },
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/video/upload/v1777122400/IMI_Dashboard_ya05nd.mp4',
                  title: 'Dashboard: Monitoring Campaigns',
                  body: 'Describes how a manager logs in and makes informed decisions using real-time graphs and tabular data to drill down to the most granular campaign detail.',
                },
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/video/upload/v1777122397/IMI_Campaign_Mgmt_lc0ll2.mp4',
                  title: 'Visual Campaign Builder: Provisioning Campaign',
                  body: 'Shows how a manager creates a campaign using the visual builder tool — from blank canvas to fully mapped campaign journey.',
                },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Deliverables" title="Design Deliverables" />
            <HighlightBlock
              variant="callout"
              label="Design principle"
              text='"A good design is only as good as its documentation."'
            />
            <DocumentEmbed
              documents={[
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777125236/IMIcampaign_WF_fkm2ur.pdf',
                  title: 'Wireframe Specification Document',
                  body: 'Comprehensive technical blueprint detailing every UI component, data visualisation, and screen-level interaction. Defined the logic of the platform — specifying ideal data formats and expected outcomes for every complex table and chart.',
                },
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777125234/IMIcampaign_VD_SG_eyh1eh.pdf',
                  title: 'Visual Specification Document',
                  body: 'High-fidelity roadmap of visual treatment for every component, graph, and chart. Translated visual styles into precise technical values in pixels and percentages — developer-friendly, directly implementable in CSS.',
                },
                {
                  src: 'https://res.cloudinary.com/dhnfnetro/image/upload/v1777125233/IMIcampaign_SG_sjelyy.pdf',
                  title: 'Styleguide',
                  body: "Single source of truth unifying the platform's visual identity. Detailed exact colour palettes, shadow depths, and height/width constraints for all interface elements — ensuring pixel-perfect consistency across every module.",
                },
              ]}
            />

            {/* ── Section 6 — Testing and Evaluation ── */}
            <div id="testing" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Testing and Evaluation" />
            <Prose>
              We conducted usability tests with 10 different users who drove, provisioned and
              executed campaigns on a daily basis. As users were key people within IMImobile&apos;s
              existing clientele situated in a different geographic location, we conducted remote
              usability test sessions considering both budget and project timeline.
            </Prose>

            <SectionHeader variant="B" eyebrow="User Feedback" title="Dashboard Feedback" />
            <BulletListBlock
              title="Key statements from users & stakeholders"
              items={[
                { description: 'Each and every page were much richer in terms of graphs & data visualizations from the very first page of the Dashboard.' },
                { description: 'Full control over displayed information and ability to drill down to the most granular level on the basis of Hierarchy, Channels and Time.' },
                { description: 'Dynamic and relevant graphs directly downloadable and archived for client consumption — earlier they used to do a lot of excel work for graphs.' },
                { description: 'The navigation is very clean, nesting & hierarchy is much clearer — they were now sure about how and where certain information was located.' },
              ]}
              columns={2}
            />
            <HighlightBlock
              variant="quote"
              text="Each and every page were much richer in terms of the graphs & data visualizations... full control over displayed information and ability to drill down."
              attribution="Campaign Manager · IMImobile"
            />

            <SectionHeader variant="B" eyebrow="Visual Builder Feedback" title="Campaign Builder Feedback" />
            <BulletListBlock
              title="Campaign Management — Visual Campaign Builder"
              items={[
                { description: 'New interaction experience with the canvas and draggable nodes is a most usable & wow factor.' },
                { description: 'Clear compartmentalisation of information in specific nodes with configurable properties, retaining the familiar Who, What & When connotation.' },
                { description: 'Ability to visualise campaigns and trace the node needing adjustment without digging through a long series of clickable forms/wizards.' },
                { description: 'Hidden menus and options now available through the click of respective node elements as overflow menu in the canvas.' },
              ]}
              columns={1}
            />
            <HighlightBlock
              variant="quote"
              text="New interaction experience with the canvas and draggable nodes is a most usable & wow factor... Ability to visualise campaigns and trace the node which might need tweaking without digging through a long series of clickable forms."
              attribution="Campaign Manager · IMImobile"
            />
            <HighlightBlock
              variant="quote"
              text="The navigation is very clean, nesting & hierarchy is much clearer and takes away the need for searching through keyboards in most of the cases."
              attribution="Stakeholder · IMImobile"
            />

            {/* ── Section 7 — Quantified Business Impact ── */}
            <div id="impact" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Quantified Business Impact" />
            <ImpactMetric
              metrics={[
                { stat: '50%', label: 'Time-to-Navigate',  description: 'Reduced — users find information and complete tasks much faster' },
                { stat: '30%', label: 'Campaign Creation', description: 'Faster — significant boost in operational efficiency for marketing teams' },
                { stat: '45%', label: 'Hand-off Time',     description: 'Reduced — streamlined collaboration between different teams and roles' },
              ]}
            />
            <HighlightBlock
              variant="callout"
              label="Accelerated Client Autonomy"
              text="The highly intuitive design significantly lowered the learning curve, empowering clients to transition from managed services to self-sufficient, in-house operations far more rapidly."
            />

            {/* ── Section 8 — Marketing Positioning ── */}
            <div id="marketing" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Marketing Positioning" />
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Competitive Standing',
                  body: 'The redesign completely transformed the product, elevating UX and feature set to compete with major industry players like Adobe Campaign Manager and Salesforce.',
                },
                {
                  number: '02',
                  title: 'New Enterprise Clients',
                  body: '4–5 new enterprise clients including major telecommunications companies — O2 and Cingular UK — acquired post-launch.',
                },
                {
                  number: '03',
                  title: 'Cisco Acquisition',
                  body: '~8 months post-launch, Cisco acquired IMImobile. The redesigned campaign tool was a key differentiator. The product still stands with the design work done.',
                },
              ]}
            />

            {/* ── Section 9 — Conclusion ── */}
            <div id="conclusion" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Conclusion" />
            <BulletListBlock
              title="What worked well"
              items={[
                { term: 'Building stakeholder trust first',            description: 'Rather than insisting on direct user research immediately, demonstrated value through internal collaboration — this built credibility that eventually opened doors to actual customers.' },
                { term: 'Advocating for fundamental change',           description: "The visual builder wasn't the safe choice — it required rebuilding core functionality. But research supported that optimising the existing form-based system would only marginally improve a fundamentally flawed paradigm." },
                { term: 'Designing for handoff from day one',          description: 'Knowing the engagement was temporary, prioritised documentation and systematic design decisions that could survive and scale without us.' },
                { term: "Maintaining the 'Who, What, When' mental model", description: 'Rather than inventing entirely new concepts, preserved familiar terminology while transforming the interaction paradigm — reducing learning curve for existing users.' },
              ]}
              columns={2}
            />
            <BulletListBlock
              title="Key learnings"
              items={[
                { term: 'Complex enterprise tools benefit from visual paradigms',  description: 'When users already think in flowcharts and diagrams, forcing them into linear forms creates unnecessary cognitive translation — meeting mental models reduces training and errors.' },
                { term: 'Senior design leadership means advocacy',                  description: "Impact often comes from making the case for the right solution, not just executing what's requested. Research-grounded advocacy for the visual builder created outsized business value." },
                { term: 'Design systems are force multipliers',                    description: 'The investment in systematic documentation paid dividends well beyond the engagement, enabling consistent evolution and expansion to new products.' },
              ]}
              columns={1}
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'Bitten — Soundscape', descriptor: 'Sound Design · NID',           href: '/work/soundscape-bitten' }}
          next={{ title: 'FlyDubai Holidays',  descriptor: 'B2C · Imaginea Design',         href: '/work/fzholidays' }}
        />
      </main>
      <Footer />
    </>
  )
}

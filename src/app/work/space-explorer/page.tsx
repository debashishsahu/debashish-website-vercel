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
import FullWidthImage from '@/components/FullWidthImage'
import LabeledItem from '@/components/LabeledItem'
import MediaTextCard from '@/components/MediaTextCard'
import ImageGroup from '@/components/ImageGroup'
import ImageCarousel from '@/components/ImageCarousel'
import ImpactMetric from '@/components/ImpactMetric'
import PageScrollNav from '@/components/PageScrollNav'

export const metadata: Metadata = {
  title: 'Space Explorer — Debashish Sahu',
  description:
    'A gesture-based educational game for Nehru Planetarium Delhi — an NID diploma project covering user research, Kinect technology, three prototype iterations, and user testing with 20 children aged 9–15.',
  openGraph: {
    title: 'Space Explorer — Debashish Sahu Portfolio',
    description:
      'Transforming museum learning through interactive gesture-based gaming at Nehru Planetarium.',
    images: ['/images/space-explorer/hero.png'],
  },
}

const SECTIONS = [
  { id: 'overview',      label: 'Overview' },
  { id: 'challenge',     label: 'Challenge' },
  { id: 'process',       label: 'Design Process' },
  { id: 'discovery',     label: 'Discovery' },
  { id: 'ideation',      label: 'Ideation' },
  { id: 'content',       label: 'Content Mapping' },
  { id: 'prototyping',   label: 'Prototyping' },
  { id: 'testing',       label: 'User Testing' },
  { id: 'final-design',  label: 'Final Design' },
  { id: 'impact',        label: 'Impact' },
]

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-16 text-slate leading-[1.75] my-6 max-w-[720px]">{children}</p>
  )
}

export default function SpaceExplorerPage() {
  return (
    <>
      <Navbar />
      <PageScrollNav sections={SECTIONS} />
      <main>
        <CaseStudyHero
          variant="A"
          image="/images/space-explorer/hero.png"
          eyebrow="Nehru Planetarium · NID Diploma · 2013"
          title="Space Explorer"
          descriptor="Transforming Museum Learning Through Interactive Gesture-Based Gaming"
          imageAlt="Space Explorer — gesture-based educational game for Nehru Planetarium"
        />

        <ProjectMetaBar
          role="Researcher · UX Strategist · Game & Interaction Designer · Prototyping & Implementation"
          team="Solo project — NID Diploma"
          duration="~7 months"
          client="Nehru Planetarium, Delhi"
        />

        <article className="px-page-sm md:px-page-md lg:px-page pb-section">
          <div className="max-w-content mx-auto">

            {/* ── Section 1 — Overview ── */}
            <div id="overview" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Overview" />

            <Prose>
              Museums are spaces of learning, yet many exhibits remain passive and text-heavy,
              making it difficult to capture and sustain the attention of children. The
              Gesture-Based Digital Informative Game, developed for Nehru Planetarium, Delhi,
              sought to revolutionise museum engagement through a motion-controlled learning experience.
            </Prose>
            <Prose>
              By integrating gesture-based interactions, the project aimed to shift museum visits
              from observation to participation — allowing children to explore space concepts
              interactively. This project was undertaken as part of my diploma at the National
              Institute of Design (NID), involving user research, interaction design, prototyping,
              and testing to create an innovative gesture-based game.
            </Prose>

            {/* ── Section 2 — The Challenge ── */}
            <div id="challenge" className="scroll-mt-24" />
            <SectionHeader variant="A" title="The Challenge" />

            <Prose>
              Traditional museum exhibits rely heavily on static text, infographics, and
              non-interactive models — making it difficult to sustain children&apos;s interest.
              Nehru Planetarium wanted to revamp its &ldquo;Activity Room&rdquo; with modern, interactive
              exhibits.
            </Prose>

            <BulletListBlock
              title="The planetarium wanted exhibits that would:"
              items={[
                { description: 'Be engaging for children, encouraging self-learning.' },
                { description: 'Use cutting-edge technology — specifically gesture-based interaction.' },
                { description: 'Complement school curricula on space and astronomy.' },
                { description: 'Seamlessly integrate within the museum\'s physical space.' },
              ]}
              columns={2}
            />

            <BulletListBlock
              title="Key design questions"
              items={[
                {
                  term: 'Gesture intuitiveness',
                  description: 'How do we make gesture interactions intuitive for all age groups?',
                },
                {
                  term: 'Education vs entertainment',
                  description: 'How do we balance education and entertainment in the gameplay?',
                },
                {
                  term: 'Museum constraints',
                  description: 'What space constraints and visitor behaviours must be considered in a museum setting?',
                },
              ]}
              columns={1}
            />

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Interactive Education',
                  body: 'Develop an interactive game that educates children about space through play.',
                },
                {
                  number: '02',
                  title: 'Accessibility & Usability',
                  body: 'Ensure accessibility and usability for kids of different ages and physical abilities.',
                },
                {
                  number: '03',
                  title: 'Controller-Free Experience',
                  body: 'Leverage Kinect technology for a fully controller-free, gesture-based experience.',
                },
                {
                  number: '04',
                  title: 'Active Participation',
                  body: 'Encourage active participation and learning through challenges and exploration.',
                },
              ]}
            />

            <HighlightBlock
              variant="callout"
              label="Problem Statement"
              text="How can we create an engaging gesture-based game that enhances learning in museum spaces while making astronomy fun and interactive for children?"
            />

            {/* ── Section 3 — Design Process ── */}
            <div id="process" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Design Process & Approach" />

            <Prose>
              A human-centred design approach was followed, blending research, ideation,
              prototyping, and iterative testing.
            </Prose>

            <FullWidthImage
              src="/images/space-explorer/design-approach.png"
              alt="Human-centred design process diagram — research, ideation, prototyping, testing"
              objectFit="natural"
              caption="Design process — research → ideation → prototyping → testing → refinement"
            />

            {/* ── Section 4 — Discovery & Research ── */}
            <div id="discovery" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Discovery & Research" />

            <SectionHeader variant="B" eyebrow="The Space" title="Understanding Nehru Planetarium" />
            <Prose>
              Nehru Planetarium, located in Teen Murti Bhawan, Delhi, is a major centre for
              interactive astronomy education. The space includes a Sky Theatre (dome-screened
              space show) and an Exhibit Area (astronomy-related interactive installations).
            </Prose>

            <FullWidthImage
              src="/images/space-explorer/planetarium-layout.png"
              alt="Floor plan and layout of Nehru Planetarium showing Sky Theatre and Exhibit Area"
              objectFit="natural"
              caption="Nehru Planetarium layout — Sky Theatre, Exhibit Area, and Activity Room"
            />

            <SectionHeader variant="B" eyebrow="User Research" title="Studying Visitor Interaction" />
            <BulletListBlock
              title="Key observations from visitor research"
              items={[
                { description: "Children are drawn to interactive exhibits like 'Did You Know?' and 'History of the Universe'." },
                { description: 'Text-heavy exhibits are largely ignored by younger visitors.' },
                { description: 'Tangible interaction elements — buttons, sliders, quizzes, hands-on activities — significantly increase engagement.' },
                { description: 'Broken or non-functional installations frustrate users and damage trust.' },
                { description: 'Multiplayer and competitive elements increase engagement considerably.' },
              ]}
              columns={2}
            />

            <SectionHeader variant="B" eyebrow="Stakeholder Interviews" title="Client Interaction for Intent Mapping" />
            <LabeledItem
              variant="stakeholder"
              stakeholderItems={[
                {
                  number: '01',
                  role: 'Dr. Ratnashree — Director',
                  purpose: 'Gain comprehensive understanding of the museum space, secure access to technical staff, and obtain permission to engage with visitors.',
                  outcome: "Highlighted that 'Ultimate Universe' dome show was highly popular — primarily because it resonated with children by directly relating to their school curricula. Emphasised need for interactive educational content.",
                },
                {
                  number: '02',
                  role: 'Mrs. Joseph — Asst. to Director',
                  purpose: 'Gather detailed information on visitor profiles and functionality of current exhibits.',
                  outcome: 'Facilitated appointment with museum engineer and provided insights on visitor engagement — pointing out children in 4th standard and above were the primary audience drawn to interactive displays.',
                },
                {
                  number: '03',
                  role: 'Mr. O.P. Gupta — Engineer',
                  purpose: 'Understand technical aspects and operational challenges of existing exhibits.',
                  outcome: "Shared details about the museum's technical setup. Noted high usage of interactive installations like the weighing pan and 'Did You Know' quiz — reinforcing importance of tactile exhibits.",
                },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Exhibit Analysis" title="Some Key Exhibits & Their Experiences (4 of 14)" />
            <Prose>
              The Nehru Planetarium features exhibits across four categories: Interactive,
              Informational Displays, Digital/Projection-Based, and Real Space Artifacts.
              Below are four key exhibits analysed for intent, experience, and engagement.
            </Prose>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {[
                {
                  name: 'Why the Night Sky is Dark?',
                  image: '/images/space-explorer/exhibit-01.png',
                  intent: 'Explains the paradox of why the sky appears dark despite infinite stars.',
                  experience: 'Interactive peek-through windows showing a simulated night sky.',
                  media: 'Light and graphics installation',
                  engagement: 'Participatory visual experience',
                  positive: true,
                },
                {
                  name: 'Seeing is Believing',
                  image: '/images/space-explorer/exhibit-02.png',
                  intent: 'Explains the transition from geocentric to heliocentric models of the universe.',
                  experience: 'Mechanical solar system model activated by visitors.',
                  media: 'Text, infographics, electromechanical model',
                  engagement: 'Interactive hands-on mechanism',
                  positive: true,
                },
                {
                  name: 'Soyuz T-10 Descent Module',
                  image: '/images/space-explorer/exhibit-03.png',
                  intent: "Displays India's first astronaut's actual spacecraft capsule.",
                  experience: 'Non-interactive observation of the charred descent module.',
                  media: 'Physical space capsule with text descriptions',
                  engagement: 'Static artifact — children observed briefly then moved on',
                  positive: false,
                },
                {
                  name: 'History of the Universe',
                  image: '/images/space-explorer/exhibit-04.png',
                  intent: 'Displays a timeline of cosmic evolution from the Big Bang to modern times.',
                  experience: 'Interactive sliding panel revealing different universe formation stages.',
                  media: 'Infographics, text, interactive sliding panel',
                  engagement: 'High — identified as working well due to its interactive element',
                  positive: true,
                },
              ].map((exhibit, i) => (
                <div key={i} className="border border-linen rounded-xl overflow-hidden flex flex-col">
                  {/* Image */}
                  <div className="bg-[#F5F4F0]">
                    <Image
                      src={exhibit.image}
                      alt={exhibit.name}
                      width={0}
                      height={0}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${exhibit.positive ? 'bg-[#EAF3DE]' : 'bg-[#F1EFE8]'}`}>
                        <span className={`text-11 font-bold leading-none ${exhibit.positive ? 'text-[#3B6D11]' : 'text-[#5F5E5A]'}`}>
                          {exhibit.positive ? '✓' : '✗'}
                        </span>
                      </span>
                      <h4 className="text-15 font-medium text-ink leading-snug">{exhibit.name}</h4>
                    </div>
                    <div className="flex flex-col gap-2 pl-8">
                      <div>
                        <p className="text-11 font-medium uppercase tracking-label text-amber mb-0.5">Intent</p>
                        <p className="text-13 text-slate leading-[1.6]">{exhibit.intent}</p>
                      </div>
                      <div>
                        <p className="text-11 font-medium uppercase tracking-label text-slate mb-0.5">Experience</p>
                        <p className="text-13 text-slate leading-[1.6]">{exhibit.experience}</p>
                      </div>
                      <div>
                        <p className="text-11 font-medium uppercase tracking-label text-slate mb-0.5">Media</p>
                        <p className="text-12 text-mist leading-[1.5]">{exhibit.media}</p>
                      </div>
                      <div className={`mt-1 text-12 font-medium px-2.5 py-1 rounded-full self-start ${exhibit.positive ? 'bg-[#EAF3DE] text-[#3B6D11]' : 'bg-[#F1EFE8] text-[#5F5E5A]'}`}>
                        {exhibit.engagement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exhibits that worked vs failed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
              {/* Works well */}
              <div className="rounded-xl overflow-hidden">
                <div className="bg-[#EAF3DE] py-2.5 px-5">
                  <p className="text-12 font-medium text-[#3B6D11] uppercase tracking-label">Exhibits That Work Well</p>
                </div>
                <div className="border border-[#EAF3DE] rounded-b-xl p-5 flex flex-col gap-3">
                  {[
                    { name: "'Did You Know?' Quiz", reason: 'Question-and-answer format — interactive, competitive, immediately rewarding.' },
                    { name: "'History of the Universe' Panel", reason: 'Interactive sliding panel reveals cosmic evolution — tactile and progressive.' },
                    { name: "'Why the Night Sky is Dark?' Windows", reason: 'Peek-through windows make an abstract concept tangible and participatory.' },
                    { name: "'Seeing is Believing' Orrery", reason: 'Visitor-activated mechanical model makes the heliocentric shift visceral.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#EAF3DE] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-10 font-bold text-[#3B6D11]">✓</span>
                      </span>
                      <div>
                        <p className="text-13 font-medium text-ink">{item.name}</p>
                        <p className="text-12 text-slate leading-[1.5] mt-0.5">{item.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Failed to engage */}
              <div className="rounded-xl overflow-hidden">
                <div className="bg-[#F1EFE8] py-2.5 px-5">
                  <p className="text-12 font-medium text-[#5F5E5A] uppercase tracking-label">Exhibits That Failed to Engage</p>
                </div>
                <div className="border border-[#F1EFE8] rounded-b-xl p-5 flex flex-col gap-3">
                  {[
                    { name: 'Soyuz T-10 Descent Module', reason: 'Static artifact with no interaction — children glanced and moved on despite its historical significance.' },
                    { name: 'Text-Heavy Information Boards', reason: 'Dense copy ignored by younger visitors — no interactive hook to hold attention.' },
                    { name: 'Static Scale Models', reason: 'Lacked interactive elements — observed briefly then abandoned.' },
                    { name: 'Non-Functional Installations', reason: 'Broken or inactive exhibits frustrated users and damaged trust in the space.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#F1EFE8] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-10 font-bold text-[#5F5E5A]">✗</span>
                      </span>
                      <div>
                        <p className="text-13 font-medium text-ink">{item.name}</p>
                        <p className="text-12 text-slate leading-[1.5] mt-0.5">{item.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Section 5 — Ideation ── */}
            <div id="ideation" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Ideation and Explorations" />

            <SectionHeader variant="B" eyebrow="Personas" title="Who Will Use This Game?" />
            <Prose>
              Four personas were developed based on real and archetypal users to ground
              the design in the actual diversity of museum visitors.
            </Prose>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MediaTextCard
                variant="persona"
                name="Jyoti — The Guardian & Educator"
                role="Homemaker · 35 years"
                roleColor="slate"
                body="Accompanies children on museum visits. Prefers exhibits that educate while entertaining. Reads information panels and explains them to kids. Values interactive elements that help children learn through play."
                goals={[
                  'Exhibits aligned with school curriculum',
                  'Clear educational value',
                  'Safe, supervised interaction',
                ]}
                painPoints={[
                  'Broken or non-functional installations',
                  'Text-heavy displays hard to explain to kids',
                  'No clear learning outcome',
                ]}
              />
              <MediaTextCard
                variant="persona"
                name="Shobhit — The Digital Native"
                role="Student · 13 years · 9th Standard"
                roleColor="blue"
                body="Very tech-savvy, plays computer games extensively. Prefers game-like interactions over static displays. Enjoys competition-based exhibits with scoring systems. Wants to be a scientist and admires Tony Stark (Iron Man)."
                goals={[
                  'Competitive scoring and challenges',
                  'Game-like interaction model',
                  'Realistic space simulation',
                ]}
                painPoints={[
                  'Non-interactive or static exhibits',
                  'No challenge or progression',
                  'Overly simplified content',
                ]}
              />
            </div>

            <SectionHeader variant="B" eyebrow="Game Testing" title="Personas Designed for Game Testing" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MediaTextCard
                variant="persona"
                name="Jyoti — The Curious Learner"
                role="Student · 11 years · 7th Standard"
                roleColor="green"
                body="Student with limited computer knowledge who loves reading story-driven content but finds math and science difficult. Responds better to visual storytelling and interactive narratives."
                goals={[
                  'Visual, story-driven interactions',
                  'Simple, guided gameplay',
                  'Fun way to explore science topics',
                ]}
                painPoints={[
                  'Complex controls or too many instructions',
                  'Abstract concepts without visual support',
                  'No clear narrative or progression',
                ]}
              />
              <MediaTextCard
                variant="persona"
                name="Shobhit — The Social Explorer"
                role="Student · 15 years · 11th Standard"
                roleColor="blue"
                body="Heavy internet user who owns a phone and engages in social learning — likes to share experiences with friends. Academically strong but uncertain about career direction. Prefers exhibits with digital or social media integration."
                goals={[
                  'Shareable, social gameplay moments',
                  'Academically relevant content',
                  'Digital-native interaction patterns',
                ]}
                painPoints={[
                  'Overly simplistic or childish content',
                  'No social or multiplayer element',
                  'Dated or non-digital experiences',
                ]}
              />
            </div>

            <SectionHeader variant="B" eyebrow="Prioritisation" title="MoSCoW Feature Prioritisation" />
            <LabeledItem
              variant="priority"
              priorityItems={[
                {
                  label: 'Must',
                  content: 'Gesture-Based Interaction for hands-free control · Educational Gameplay integrated with school curriculum · Simulation-Based Environment reflecting real space · Thrill, Challenge, and Strategy as core gameplay elements · Immediate gesture feedback with no perceptible latency.',
                },
                {
                  label: 'Should',
                  content: 'Embedded learning through game progression · Adaptive difficulty and personalised challenges · Multi-user or team-based play mode.',
                },
                {
                  label: 'Could',
                  content: 'Augmented Reality (AR) elements · Expanded missions covering space exploration history · Customisable avatars and spaceships.',
                },
                {
                  label: "Won't",
                  content: "Full Virtual Reality (VR) integration · Extensive narrative-based RPG-style gameplay · Highly complex or multi-layered gesture controls.",
                },
              ]}
            />

            {/* ── Section 6 — Content Mapping ── */}
            <div id="content" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Content Mapping" />

            <FullWidthImage
              src="/images/space-explorer/content-mapping.png"
              alt="Content mapping diagram showing educational topics mapped to game activities"
              objectFit="natural"
              caption="Content mapping — space curriculum topics mapped to interactive game mechanics"
            />

            <FullWidthImage
              src="/images/space-explorer/proposed-exhibits.png"
              alt="Proposed exhibits diagram showing the Space Explorer game within the planetarium context"
              objectFit="natural"
              caption="Proposed exhibits — Space Explorer positioned within the Activity Room"
            />

            <SectionHeader variant="B" eyebrow="Game Concept" title="Brainstorming the Game Concept" />
            <FullWidthImage
              src="/images/space-explorer/game-concept-brainstorm.png"
              alt="Brainstorming map exploring multiple game concept directions"
              objectFit="natural"
              caption="Brainstorming — exploring solar system exploration and space travel concepts"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <MediaTextCard
                variant="concept"
                image="/images/space-explorer/game-concept-01.png"
                number="01"
                title="Make a Solar System"
                ideaLabel="Idea"
                ideaText="Players arrange planets in a balanced solar system using gestures."
                issueLabel="Issue"
                issueText="Too abstract for younger kids — lacked a clear narrative or goal."
                isChosen={false}
              />
              <MediaTextCard
                variant="concept"
                image="/images/space-explorer/game-concept-02.png"
                number="02"
                title="Space Traveler"
                ideaLabel="Idea"
                ideaText="Players navigate a spaceship through the solar system answering questions to progress."
                issueLabel="Issue"
                issueText="Overly complex — risked losing the playful, exploratory aspect."
                isChosen={false}
              />
              <MediaTextCard
                variant="concept"
                image="/images/space-explorer/game-concept-01.png"
                number="03"
                title="Space Explorer"
                ideaLabel="Idea"
                ideaText="Players control a spaceship travelling through the solar system to explore planets."
                issueLabel="Why Chosen"
                issueText="Simple, intuitive, and perfectly aligned with the museum's educational goals."
                isChosen={true}
              />
            </div>

            {/* ── Section 7 — Prototyping & Iteration ── */}
            <div id="prototyping" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Prototyping and Iteration" />

            <Prose>
              Three prototypes were developed, each progressively refining game mechanics,
              gesture controls, and the user interface.
            </Prose>

            <SectionHeader variant="B" eyebrow="Prototype 1" title="Proof of Concept" />
            <BulletListBlock
              title="Prototype 1 objectives"
              items={[
                {
                  term: 'Game engine selection',
                  description: 'Selecting the right engine for both this and future prototypes.',
                },
                {
                  term: 'Basic gesture definition',
                  description: 'Defining core gestures: moving forward, turning left, and turning right.',
                },
                {
                  term: 'Gesture mapping validation',
                  description: 'Ensuring accurate gesture tracking and mapping physical movements to digital controls.',
                },
              ]}
              columns={1}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
              <div className="rounded-md overflow-hidden bg-[#F5F4F0]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/space-explorer/game-flow.png"
                    alt="Game flow diagram — initial spaceship movement logic"
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <p className="text-12 text-mist px-3 py-2">Game flow diagram — initial spaceship movement logic</p>
              </div>
              <div className="rounded-md overflow-hidden bg-[#F5F4F0]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/space-explorer/ship-movement.png"
                    alt="Ship movement mapping — arm gestures to directional controls"
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <p className="text-12 text-mist px-3 py-2">Ship movement mapping — arm gestures to directional controls</p>
              </div>
            </div>

            <h4 className="text-16 font-medium text-ink mt-8 mb-2">Understanding Kinect Sensors</h4>

            <FullWidthImage
              src="/images/space-explorer/kinect-sensor.png"
              alt="Kinect sensor diagram showing depth sensor, RGB camera, and skeleton tracking"
              objectFit="natural"
              caption="Microsoft Kinect sensor — depth sensor, RGB camera, multi-array microphone, full-body skeleton tracking"
            />

            <h4 className="text-16 font-medium text-ink mt-8 mb-4">Technology & Game Engine Selection</h4>

            <BulletListBlock
              title="After evaluating multiple options, Microsoft XNA Game Studio was chosen due to:"
              items={[
                { description: 'Compatibility with Windows XP and later versions.' },
                { description: 'Customisability through scripting and C# support.' },
                { description: 'Seamless integration with Microsoft Kinect SDK, enabling precise gesture tracking.' },
              ]}
              columns={1}
            />

            <h4 className="text-16 font-medium text-ink mt-6 mb-3">Why Kinect?</h4>
            <BulletListBlock
              items={[
                { description: "Kinect's depth sensor, RGB camera, and multi-array microphone enabled full-body tracking — making it ideal for gesture-based gaming." },
                { description: 'It could track up to six players and provide real-time motion recognition.' },
              ]}
              columns={1}
            />

            <FullWidthImage
              src="/images/space-explorer/gesture-processing-pipeline.png"
              alt="Gesture processing pipeline showing input from Kinect to game engine output"
              objectFit="natural"
              caption="Gesture processing pipeline — Kinect SDK → gesture recognition → game engine → player feedback"
            />

            <BulletListBlock
              title="Prototype 1 — key findings"
              items={[
                {
                  term: 'Gesture tracking worked',
                  description: 'But movement felt rigid and unnatural — lacked fluid spaceship control.',
                },
                {
                  term: 'Latency issues',
                  description: 'Early testing revealed latency in gesture recognition — required refinements in sensitivity and tracking range.',
                },
                {
                  term: 'Age-specific challenges',
                  description: 'Younger children struggled with wide-arm gestures — adjustments in movement detection were needed.',
                },
              ]}
              columns={1}
            />

            <SectionHeader variant="B" eyebrow="Prototype 2" title="Gameplay Refinement" />
            <BulletListBlock
              title="Key changes in Prototype 2"
              items={[
                { description: 'Expanded gesture controls for better spaceship movement.' },
                { description: 'Transitioned from XNA to Unity 3D for better asset management and visualisation.' },
                { description: 'Refined motion tracking for more realistic 3D space navigation.' },
              ]}
              columns={1}
            />

            <FullWidthImage
              src="/images/space-explorer/prototype-2.png"
              alt="Prototype 2 screenshot showing Unity 3D solar system environment"
              objectFit="natural"
              caption="Prototype 2 — Unity 3D environment with solar system, planets, asteroids, and space fog"
            />

            {/* Game world components — parallel properties, no sequence */}
            <BulletListBlock
              title="Game world components"
              items={[
                { term: 'Objects',               description: 'Sun, planets, spaceship, asteroids, space fog, background sky — each with defined properties.' },
                { term: 'Attributes',             description: 'Each object had properties (e.g., the Sun was stationary and a light source; planets moved in fixed orbits).' },
                { term: 'Internal Relationships', description: 'Defined how objects interacted — the spaceship collides with planets if too close; asteroids create obstacles.' },
                { term: 'Environment',            description: '3D space setting with starfield, nebulae, and galaxies — the Sun providing dynamic lighting across the scene.' },
              ]}
              columns={2}
            />

            {/* Gesture evolution — vertical progression, order matters */}
            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Prototype 1 — Carried Over',
                  body: 'Extend arms forward → Move forward · Move extended arms left/right → Turn spaceship left/right',
                },
                {
                  number: '02',
                  title: 'Newly Added',
                  body: 'Extend arms downward → Pitch down · Extend arms upward → Pitch up',
                },
                {
                  number: '03',
                  title: 'Movement Refinements',
                  body: 'Introduced Yaw, Roll, and Pitch — making spaceship movement significantly more fluid and natural',
                },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
              <div className="rounded-md overflow-hidden bg-[#F5F4F0]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/space-explorer/prototype-2-gestures-01.png"
                    alt="Gesture set 1 — forward movement and yaw controls"
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <p className="text-12 text-mist px-3 py-2">Gesture set 1 — forward movement and yaw controls</p>
              </div>
              <div className="rounded-md overflow-hidden bg-[#F5F4F0]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/space-explorer/prototype-2-gestures-02.png"
                    alt="Gesture set 2 — pitch up/down and roll controls"
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <p className="text-12 text-mist px-3 py-2">Gesture set 2 — pitch up/down and roll controls</p>
              </div>
            </div>

            <BulletListBlock
              title="Prototype 2 — findings and next steps"
              items={[
                { term: 'Achievement', description: 'Realistic spaceship movement achieved with new gesture mappings.' },
                { term: 'Achievement', description: 'Solar system simulation nearly complete — asteroid belt addition pending.' },
                { term: 'Gap', description: 'Players felt directionless in 3D space — mini-map feature needed.' },
                { term: 'Gap', description: "Some gestures weren't intuitive for younger children." },
                { term: 'Gap', description: 'No UI system for statistics — speed, time remaining, next target.' },
              ]}
              columns={2}
            />

            <SectionHeader variant="B" eyebrow="Prototype 3" title="Refining Gesture Controls & Spaceship Movement" />

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Forward Movement',
                  body: 'Initially mapped to extending one arm forward — refined to holding both arms forward (like gripping a steering wheel) for improved speed control.',
                },
                {
                  number: '02',
                  title: 'Turning Left / Right (Yaw & Roll)',
                  body: 'Early versions used arm movements for directional control. Final iteration adopted swaying motions left and right for more natural navigation.',
                },
                {
                  number: '03',
                  title: 'Pitching Up / Down',
                  body: 'Initial hand movements proved unintuitive. Finalised using the Psi Pose (raising arms up/down) for enhanced accuracy and ease of use.',
                },
                {
                  number: '04',
                  title: 'Shooting — New Feature',
                  body: 'A shooting mechanic was introduced to clear asteroid obstacles. Mapped to extending arms forward with a flapping bird motion (the Phoenix metaphor).',
                },
              ]}
            />

            <ImageGroup
              variant="workshop"
              fit="contain"
              tileRatio="11 / 5"
              caption="Gesture controls & spaceship movement refinements — click to view full screen"
              images={[
                { src: '/images/space-explorer/gesture-refine-01.png', alt: 'Gesture refinement — forward movement control' },
                { src: '/images/space-explorer/gesture-refine-02.png', alt: 'Gesture refinement — turning left and right' },
                { src: '/images/space-explorer/gesture-refine-03.png', alt: 'Gesture refinement — yaw control mapping' },
                { src: '/images/space-explorer/gesture-refine-04.png', alt: 'Gesture refinement — pitch up and down' },
                { src: '/images/space-explorer/gesture-refine-05.png', alt: 'Gesture refinement — roll movement' },
                { src: '/images/space-explorer/gesture-refine-06.png', alt: 'Gesture refinement — shooting mechanic' },
                { src: '/images/space-explorer/gesture-refine-07.png', alt: 'Gesture refinement — combined movement set' },
                { src: '/images/space-explorer/gesture-refine-08.png', alt: 'Gesture refinement — spaceship yaw and pitch' },
                { src: '/images/space-explorer/gesture-refine-09.png', alt: 'Gesture refinement — full gesture set overview' },
                { src: '/images/space-explorer/gesture-refine-10.png', alt: 'Gesture refinement — complete spaceship movement diagram' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="Final Iteration" title="UI & Gesture Refinements" />
            <BulletListBlock
              items={[
                {
                  term: 'Home Screen & Training Mode',
                  description: 'Users could now select Start (play the game) or Train (learn spaceship controls) — reducing onboarding friction.',
                },
                {
                  term: 'HUD — Heads-Up Display',
                  description: 'Real-time information: time remaining, speed gauge, next destination — all surfaced without cluttering the 3D view.',
                },
                {
                  term: 'Mission-Based Navigation',
                  description: "Players followed diamond blips near planets to reach target destinations — solving the 'directionless' problem from Prototype 2.",
                },
                {
                  term: 'End Conditions',
                  description: 'Game ended when time ran out, spaceship was destroyed, or all objectives were completed.',
                },
              ]}
              columns={2}
            />

            <SectionHeader variant="B" eyebrow="UI Design" title="UI & Typography Enhancements" />
            <Prose>
              The game&apos;s visual identity went through a deliberate UI overhaul — improving button placements,
              information layout, and typography choices. Two typefaces were selected for the final design:
              Bitshumishi as the primary font for all titles and on-screen text, and 7-Segment for in-game
              numeric values like speed and time. The colour scheme was initially orange/yellow but was revised
              to blue — informed by a colour analysis of contemporary sci-fi games and films — creating a more
              authentic modern sci-fi aesthetic.
            </Prose>
            <BulletListBlock
              items={[
                {
                  term: 'Bitshumishi',
                  description: 'Primary typeface — used for all game titles, menus, and body text throughout the interface.',
                },
                {
                  term: '7-Segment',
                  description: 'Secondary typeface — used exclusively for numeric in-game values: speed gauge, countdown timer, and distance.',
                },
                {
                  term: 'Colour Scheme',
                  description: 'Shifted from orange/yellow to blue — a colour analysis of sci-fi games and films confirmed blue as the dominant, authentic sci-fi palette.',
                },
              ]}
              columns={1}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-8">
              {[
                { src: '/images/space-explorer/ui-font-bitshumishi.png', alt: 'Bitshumishi font specimen', caption: 'Bitshumishi — primary font for all game titles and text' },
                { src: '/images/space-explorer/ui-color-analysis.png', alt: 'Colour analysis of UI elements', caption: 'Colour analysis of UI elements used in games and movies' },
                { src: '/images/space-explorer/ui-font-7segment.png', alt: '7-Segment font specimen', caption: '7-Segment — secondary font for in-game numeric values (speed, time)' },
              ].map((img, i) => (
                <div key={i}>
                  <div className="rounded-md overflow-hidden bg-[#F5F4F0]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={0}
                      height={0}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-12 text-mist mt-2 pl-1">{img.caption}</p>
                </div>
              ))}
            </div>

            <SectionHeader variant="B" eyebrow="Before / After" title="Game UI — Before & After" />

            <SectionHeader variant="B" eyebrow="Before" title="Initial Game Screens" />
            <ImageCarousel
              images={[
                { src: '/images/space-explorer/gameplay-before-00.png', alt: 'Before — Home Screen', caption: 'Before — Home Screen: gives user option to Start the game' },
                { src: '/images/space-explorer/gameplay-before-01.png', alt: 'Before — Destination list', caption: 'Before — Destination list with speed bar and time bar on either side' },
                { src: '/images/space-explorer/gameplay-before-02.png', alt: 'Before — Spaceship chasing Neptune', caption: 'Before — Spaceship chasing Neptune, moving through planets and orbits' },
              ]}
            />

            <SectionHeader variant="B" eyebrow="After" title="Refined Game Screens" />
            <ImageCarousel
              images={[
                { src: '/images/space-explorer/gameplay-after-01.png', alt: 'After — Home Screen', caption: 'After — Home Screen displaying Train and Start buttons' },
                { src: '/images/space-explorer/gameplay-after-02.png', alt: 'After — Gameplay with HUD', caption: 'After — Gameplay with HUD: countdown timer, target planet, speed and time gauges' },
                { src: '/images/space-explorer/gameplay-after-04.png', alt: 'After — Planet infocard', caption: 'After — Planet infocard displaying educational facts about each planet' },
                { src: '/images/space-explorer/gameplay-after-05.png', alt: 'After — Instruction window', caption: 'After — Instruction window showing gesture guidance for moving spaceship up/down' },
                { src: '/images/space-explorer/gameplay-after-06.png', alt: 'After — Compact HUD layout', caption: 'After — Compact HUD layout reducing screen clutter for better 3D immersion' },
                { src: '/images/space-explorer/gameplay-after-07.png', alt: "After — Time's Up window", caption: "After — Time's Up window with compact HUD foregrounding the key information" },
              ]}
            />

            {/* ── Section 8 — User Testing ── */}
            <div id="testing" className="scroll-mt-24" />
            <SectionHeader variant="A" title="User Testing and Feedback" />

            <ImpactMetric
              metrics={[
                {
                  stat: '20',
                  label: 'Participants',
                  description: 'Children aged 9–15 tested the game across sessions',
                },
                {
                  stat: '3',
                  label: 'Age Groups',
                  description: '9–11, 11–13, and 13–15 — each with distinct interaction patterns',
                },
                {
                  stat: '4',
                  label: 'Evaluation Areas',
                  description: 'Gesture comprehension, game mechanics, engagement, and learning retention',
                },
              ]}
            />

            <ImageGroup
              variant="workshop"
              fit="cover"
              tileRatio="16 / 9"
              caption="User testing sessions — children aged 9–15 playing Space Explorer at Nehru Planetarium"
              images={[
                { src: '/images/space-explorer/ut-session-01.png', alt: 'User testing session — children playing Space Explorer' },
                { src: '/images/space-explorer/ut-session-02.png', alt: 'User testing session — kids gesturing to control the spaceship' },
                { src: '/images/space-explorer/ut-session-03.png', alt: 'User testing session — group observing gameplay' },
                { src: '/images/space-explorer/ut-session-04.png', alt: 'User testing session — child navigating the solar system' },
                { src: '/images/space-explorer/ut-session-06.png', alt: 'User testing session — children engaged with the game' },
                { src: '/images/space-explorer/ut-session-05.png', alt: 'User testing session — testing gesture recognition' },
              ]}
            />

            <BulletListBlock
              title="Key findings from user testing"
              items={[
                {
                  term: 'Gesture learning',
                  description: 'Kids quickly learned and performed gestures — especially after observing others playing first.',
                },
                {
                  term: 'Engagement',
                  description: 'The realistic simulation and interactive elements kept kids engaged throughout the session.',
                },
                {
                  term: 'Educational value',
                  description: 'Kids remembered planet names and facts after playing — confirming the edutainment model worked.',
                },
                {
                  term: 'Mini-map underutilised',
                  description: 'Kids relied more on planet labels for navigation than the mini-map — layout needed rethinking.',
                },
              ]}
              columns={2}
            />

            <BulletListBlock
              title="Testing nuances"
              items={[
                {
                  term: 'Age differences',
                  description: 'Younger kids (7–9) struggled with the pitching gesture — requiring additional practice and simplified controls.',
                },
                {
                  term: 'Group dynamics',
                  description: 'Kids often collaborated, guiding each other through the game — highlighting the importance of multiplayer support in future iterations.',
                },
                {
                  term: 'Technical issues',
                  description: 'Some users experienced lag during peak usage — prompting performance optimisation work.',
                },
              ]}
              columns={1}
            />

            {/* ── Section 9 — Final Design ── */}
            <div id="final-design" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Final Design" />

            <Prose>
              The final game allowed players to control a spaceship using intuitive gestures,
              explore a realistic 3D solar system, and complete challenges within a time limit.
            </Prose>

            <LabeledItem
              variant="numbered"
              numberedItems={[
                {
                  number: '01',
                  title: 'Gesture Controls',
                  body: 'Simple, natural gestures for movement, turning, pitching, and shooting — refined across three prototype iterations.',
                },
                {
                  number: '02',
                  title: 'Educational Content',
                  body: 'Planet info cards with facts about size, distance from the sun, and more — surfaced contextually during gameplay.',
                },
                {
                  number: '03',
                  title: 'Immersive Graphics',
                  body: 'High-quality visuals, a starry backdrop, dynamic lighting, and nebulae created a genuine sense of wonder.',
                },
              ]}
            />

            <BulletListBlock
              title="Design highlights"
              items={[
                {
                  term: 'Educational alignment',
                  description: 'Game content carefully curated to align with school curricula — ensuring relevance for teachers and parents.',
                },
                {
                  term: 'Accessibility',
                  description: 'Gestures designed to be inclusive, accommodating children of different physical abilities and age groups.',
                },
                {
                  term: 'Scalability',
                  description: 'Designed to run on low-cost hardware — making it accessible to other museums and educational institutions beyond Nehru Planetarium.',
                },
              ]}
              columns={1}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="flex flex-col gap-3">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/77663692?title=0&byline=0&portrait=0"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Space Explorer — Concept Video"
                  />
                </div>
                <p className="text-12 text-mist leading-[1.5]">Concept Video — Space Explorer prototype overview</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/324906585?title=0&byline=0&portrait=0"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Space Explorer — Testing Video"
                  />
                </div>
                <p className="text-12 text-mist leading-[1.5]">Testing Video — children playing Space Explorer at Nehru Planetarium</p>
              </div>
            </div>

            {/* ── Section 10 — Impact & Conclusion ── */}
            <div id="impact" className="scroll-mt-24" />
            <SectionHeader variant="A" title="Impact and Takeaways" />

            <ImpactMetric
              statColor="linen"
              metrics={[
                {
                  stat: '01',
                  label: 'Engaging Kids',
                  description: 'Making learning about space genuinely fun and interactive',
                },
                {
                  stat: '02',
                  label: 'Encouraging Collaboration',
                  description: 'Kids naturally worked together to complete challenges',
                },
                {
                  stat: '03',
                  label: 'Curriculum Alignment',
                  description: 'Reinforcing concepts taught in school through play',
                },
              ]}
            />

            <BulletListBlock
              title="Lessons learned"
              items={[
                {
                  term: 'Simplicity is key',
                  description: 'Intuitive gestures and clear objectives are crucial for engaging young users — overcomplicated controls create barriers, not experiences.',
                },
                {
                  term: 'Balance education and fun',
                  description: 'Edutainment works best when learning is seamlessly integrated into gameplay — the moment education feels like a lesson, kids disengage.',
                },
                {
                  term: 'Iterate and test relentlessly',
                  description: 'Each of the three prototypes revealed something the previous one could not — user feedback is irreplaceable for refining interaction design.',
                },
              ]}
              columns={1}
            />

            <HighlightBlock
              variant="quote"
              text="The Space Explorer project demonstrated how gesture-based technology can revolutionise museum learning — combining interactive gameplay with educational content to create an experience that deepened children's understanding of space and astronomy."
              attribution="Debashish Sahu, NID Diploma Project"
            />

          </div>
        </article>

        <PrevNextNav
          prev={{ title: 'FlyDubai Holidays', descriptor: 'B2C · Imaginea Design', href: '/work/fzholidays' }}
          next={{ title: 'Unaccompanied Minors', descriptor: 'IoT · Imaginea Design',  href: '/work/unaccompanied-minor' }}
        />
      </main>
      <Footer />
    </>
  )
}

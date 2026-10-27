// Prefix public assets with the deploy base path (needed for plain <img> tags on GitHub Pages).
const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`

export type ProjectStatus = "development" | "launched" | "healthcare" | "research"

export type ProjectMedia =
  | { kind: "logos"; logos: string[] }
  | { kind: "phones"; background: string; screens: string[] }
  | { kind: "image"; src: string; alt: string; contain?: boolean }

export interface Project {
  year: string
  title: string
  status: { type: ProjectStatus; label: string }
  tags: string[]
  description: string[]
  role: string
  scope: string
  client: string
  industry: string
  media: ProjectMedia
}

export const profile = {
  name: "Anurag",
  fullName: "Anurag Harishchandrakar",
  location: "Indianapolis, USA",
  timeZone: "America/Indiana/Indianapolis",
  linkedin: "https://www.linkedin.com/in/anuragvh",
  avatar: asset("/images/avatar.png"),
  roles: [
    { title: "Healthcare Design Researcher @", org: "Elevance (Contract)" },
    { title: "Co-Founder & Design Engineer @", org: "Loading" },
  ],
}

export const projects: Project[] = [
  {
    year: "2026",
    title:
      "Fighting usability challenges in modernizing digital access to health insurance benefits",
    status: { type: "development", label: "In Development" },
    tags: ["Unmoderated Usability Testing"],
    description: [
      "This project focused on evaluating the usability of a modernized healthcare insurance platform undergoing a large-scale UI and design system transformation. The primary goal was to assess how effectively new UI patterns, interaction models, and content structures supported user understanding, task completion, and decision-making confidence compared to legacy experiences.",
    ],
    role: "UX Researcher",
    scope: "Design Systems, Feature Development",
    client: "Elevance Health",
    industry: "Healthcare Insurance",
    media: {
      kind: "logos",
      logos: [asset("/images/elevance-logo.png"), asset("/images/ust-logo.png")],
    },
  },
  {
    year: "2025",
    title: "MotorSport One",
    status: { type: "development", label: "In Development" },
    tags: ["Design -> Development", "Figma MCP", "React Native Development"],
    description: [
      "MotorSport One is a passion-driven product built to reimagine how motorsport enthusiasts experience race data, schedules, and performance insights. A comprehensive hub for fans of Formula 1, INDYCAR, MotoGP, and other series, the platform translates complex event and technical data into an organized, intuitive and visually engaging experience that enables deeper connection with the sport.",
    ],
    role: "Founder & Design Engineer",
    scope: "Design Systems, Feature Development",
    client: "Silent Cartographer Design Labs",
    industry: "Sports & Media",
    media: {
      kind: "phones",
      background: asset("/images/phone-bg.png"),
      screens: [
        asset("/images/ms1-1.png"),
        asset("/images/ms1-2.png"),
        asset("/images/ms1-3.png"),
        asset("/images/ms1-4.png"),
      ],
    },
  },
  {
    year: "2025",
    title:
      'Developing a "Hospital to Home" Transition Strategy for Pediatric Cancer Caregivers with a Child Diagnosed with Cancer',
    status: { type: "healthcare", label: "Healthcare Service Research" },
    tags: ["Generative Study Design", "Caregiver & Clinician Focus Groups"],
    description: [
      "The transition from hospital to home is one of the most demanding phases in a child’s cancer journey - they navigate complex treatment instructions, emotional uncertainty, and the pressures of maintaining stability for their family.",
      "I conducted an evaluative research project with Riley Children's Hospital to formulate a new transition support strategy.",
    ],
    role: "Design Researcher",
    scope: "Design Systems, Feature Development",
    client: "IU Medicine",
    industry: "Healthcare & Medical Services",
    media: {
      kind: "image",
      src: asset("/images/hospital-home.png"),
      alt: "Illustration of an adult hand holding a child's hand",
    },
  },
  {
    year: "2024",
    title:
      "Evaluative research and design for the Early Austism Evaluation (EAE) Training Hub Platform for Pediatric Psychologists",
    status: { type: "healthcare", label: "Healthcare Service Research" },
    tags: ["Evaluative Study Design", "Caregiver & Clinician Focus Groups"],
    description: [
      "The Early Autism Evaluation (EAE) Hub Web Platform is a network of community primary care physicians and clinicians (PCP) that provides specialized training in autism diagnosis for children 14-48 months of age in Indiana. I conducted evaluative ux research to uncover challenges faced by PCP's using the EAE Hub towards improving learning outcomes.",
    ],
    role: "Design Researcher",
    scope: "Design Systems, Feature Development",
    client: "IU Medicine",
    industry: "Healthcare & Medical Services",
    media: {
      kind: "image",
      src: asset("/images/eae-hub.png"),
      alt: "EAE Training Hub platform",
    },
  },
  {
    year: "2024",
    title:
      "Designing A Tailored Mobile App for Spina Bifida Patients Who Experience Lifelong Challenges with Incontinence Management",
    status: { type: "healthcare", label: "Healthcare Service Research" },
    tags: ["Patient Centered UX", "Generative & Evaluative Study Design"],
    description: [
      "Spina Bifida is a type of 'Neural Tube Defect (NTD)' - A birth defect that occurs when the spine and spinal cord don't form properly during early fetal development. A chronic side effect is INCONTINENCE - the inability to control bladder/bowel movements. I designed an app to enable participants to better manage their medical routines and regimens.",
    ],
    role: "Design Researcher",
    scope: "Design Systems, Feature Design",
    client: "IU Medicine",
    industry: "Healthcare & Medical Services",
    media: {
      kind: "image",
      src: asset("/images/spina-bifida.png"),
      alt: "Diagram explaining types of Spina Bifida",
    },
  },
  {
    year: "2023",
    title: "Solving product engagement challenges for INDYCAR's Fantasy Racing Game",
    status: { type: "research", label: "Evaluative App Research" },
    tags: ["Design Systems", "Feature Design"],
    description: [
      "INDYCAR Fantasy Racing is like Fantasy Football, but for INDYCAR racing. The game suffered from low retention, short session times, and steep mid-season drop-offs. To address this, I led a redesign focused on simplifying gameplay, embedding real-time race data, and introducing new engagement loops that kept fans connected between races.",
      "The result was a more data-driven and rewarding experience that improved usability (SUS 71→74) and increased daily active users by 15% during pilot testing.",
    ],
    role: "Design Researcher",
    scope: "Design Systems, Feature Development",
    client: "INDYCAR Penske",
    industry: "Sports & Marketing UX",
    media: {
      kind: "phones",
      background: asset("/images/phone-bg.png"),
      screens: [
        asset("/images/indycar-1.png"),
        asset("/images/indycar-2.png"),
        asset("/images/indycar-3.png"),
      ],
    },
  },
  {
    year: "2019 - 2022",
    title:
      "Building A Web Based Data Annotation Tool to Custom Train Video Security Systems on Angular's MEAN Stack",
    status: { type: "launched", label: "Launched" },
    tags: ["Front-End UX Engineering", "Angular MEAN Stack"],
    description: [
      "From 2019-2022 I worked for a popular hardware technology company building an annotation tool to train security camera systems based off camera vision technologies.",
    ],
    role: "Front-End UX Engineer",
    scope: "SPA Development on Angular",
    client: "L&T Tech Services",
    industry: "Security SAAS",
    media: {
      kind: "image",
      src: asset("/images/lt-annotation.jpeg"),
      alt: "Illustration of security cameras monitoring a city block",
    },
  },
]

export const about = {
  intro: "I’m a UX Researcher with a foundation in Front-End Engineering.",
  blocks: [
    "I built SaaS products on Angular JS & MEAN stack before transitioning into UX. My shift was driven by a desire to gain deeper product intuition and to craft experiences grounded in user-centric research.",
    "Currently, I work in healthcare UX, enabling patient and provider-focused research to identify and address systemic challenges in health care delivery for diverse patient groups.",
    "I’m also co-founding a design and product studio, where I craft out passion projects.",
  ],
}

export const skills = [
  {
    title: "Web UI Design",
    icon: "web",
    items: ["Websites", "Landing Pages", "SPA Web Apps"],
  },
  {
    title: "Mobile UI Design",
    icon: "mobile",
    items: ["Dashboards", "Mobile Apps", "Product Strategy", "Growth Design"],
  },
  {
    title: "UX Research",
    icon: "research",
    items: [
      "User Interviews",
      "Focus Groups",
      "Competitive Analysis",
      "Journey Maps",
      "Service Maps",
      "Market Research",
      "Heuristic Evaluation",
      "Accessibility (WCAG) Guidelines",
      "Quantitative and Qualitative Analysis",
      "Usability Testing",
      "A/B Testing",
      "Participatory Design Workshops",
    ],
  },
  {
    title: "Programming & Development - Mobile & Web",
    icon: "code",
    items: ["Angular", "ReactNative", "HTML", "CSS", "JS"],
  },
] as const

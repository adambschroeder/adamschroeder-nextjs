export interface Client {
  name: string;
  description: string;
}

export interface Experience {
  companyName: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  clients?: Client[];
}

export const experiences: Experience[] = [
  {
    companyName: "Slalom",
    startDate: "Apr 2022",
    clients: [
      {
        name: "State of Iowa HHS",
        description:
          "Helping lead frontend development on a child welfare (CCWIS) modernization from legacy mainframe systems to a modern web application. Hands-on in the build, and closely involved in planning, backlog refinement, and engineering standards.",
      },
      {
        name: "New Jersey DOE",
        description:
          "Frontend development on a public-facing, AI-powered chatbot for the state's website, helping parents and families find information quickly.",
      },
      {
        name: "Amazon Studios",
        description:
          "Frontend-focused full-stack development on Amazon Studios' title management web applications, built as micro frontend components with ownership from UI through the cloud services behind it. Led key features and was closely involved in planning with Amazon teams.",
      },
    ],
  },
  {
    companyName: "Solution Design Group",
    startDate: "Oct 2018",
    endDate: "Apr 2022",
    clients: [
      {
        name: "Cargill",
        description:
          "Frontend development on a commodities trading web application.",
      },
      {
        name: "Hill Museum & Manuscript Library",
        description:
          "Frontend development & UX for a web app managing metadata of historic manuscripts.",
      },
      {
        name: "Patterson Companies",
        description:
          "Frontend & UI development for a pattern library used within an e-commerce application.",
      },
    ],
  },
  {
    companyName: "Sportsdigita",
    startDate: "Nov 2016",
    endDate: "Oct 2018",
    description: `Lead frontend development on a sales-enablement presentation platform.`,
  },
  {
    companyName: "ImageTrend",
    startDate: "Jan 2015",
    endDate: "Nov 2016",
    description: `Full-stack development on different projects ranging from retail websites to live auction web applications.`,
  },
  {
    companyName: "Maverick Software Consulting",
    startDate: "Apr 2013",
    endDate: "Dec 2014",
    description: `Full-stack development internship on numerous projects at Thomson Reuters.`,
  },
  {
    companyName: "Minnesota State University, Mankato",
    description: `Graduated with honors in Computer Information Technology with an emphasis on Human Computer Interaction.`,
  },
];

export interface SkillGroup {
  label: string;
  items: string;
}

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items:
      "React, TypeScript, Next.js, Vue, HTML/CSS architecture, Tailwind, MUI, component libraries & Storybook",
  },
  {
    label: "Cloud & backend",
    items: "AWS, Node, Amazon Connect, static site generation",
  },
  {
    label: "AI",
    items:
      "Claude Code with custom spec-driven workflows, chatbot interfaces on AWS generative AI (Amazon Bedrock)",
  },
  {
    label: "Practices",
    items:
      "Accessibility, user experience, engineering standards & code review, backlog refinement",
  },
];

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
        name: "Amazon Studios",
        description:
          "Frontend & cloud development for Amazon Studio title medadata management web applications",
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
          "Frontend development on a commodities trading web application",
      },
      {
        name: "Hill Museum & Manuscript Library",
        description:
          "Frontend development & UX for a web app managing metadata of historic manuscripts",
      },
      {
        name: "Patterson Companies",
        description:
          "Frontend/UI development for a pattern library used within an e-commerce application",
      },
    ],
  },
  {
    companyName: "Sportsdigita",
    startDate: "Nov 2016",
    endDate: "Oct 2018",
    description: `Lead frontend development on a sales-enablement presentation platform`,
  },
  {
    companyName: "ImageTrend",
    startDate: "Jan 2015",
    endDate: "Nov 2016",
    description: `Full-stack development on different projects ranging from retail websites to live auction web applications`,
  },
  {
    companyName: "Maverick Software Consulting",
    startDate: "Apr 2013",
    endDate: "Dec 2014",
    description: `Full-stack development internship on numerous projects at Thomson Rueters`,
  },
  {
    companyName: "Minnesota State University, Mankato",
    description: `Graduated with honors in Computer Information Technology with an emphasis on Human Computer Interaction`,
  },
];

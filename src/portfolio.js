/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Edbert Pasamba Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Edbert Pasamba Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Edbert Yves Pasamba",
  logo_name: "Edbert Pasamba",
  nickname: "Bert",
  subTitle:
    "A dedicated software developer and data engineer with a passion for building scalable applications, designing efficient data pipelines, and transforming raw data into actionable insights.",
  resumeLink:
    "https://drive.google.com/file/d/1XkA2KPFFMtA5exMoXiQ6d0GWeASmDU4y/view?usp=sharing",
  portfolio_repository: "https://github.com/bertprogramming",
  githubProfile: "https://github.com/bertprogramming",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/bertprogramming",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/edbertpasamba/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:bertopasamba@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/bertpasamba",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_nolimitberttt/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "- Develops full-stack applications using PHP and JavaScript for backend, with MySQL for database management.",
        "- Builds responsive and modern web interfaces using React, Tailwind, CSS, and SASS.",
        "- Utilizes Node and NPM for development, ensuring efficient and scalable solutions.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "devicon:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "VSCode",
          fontAwesomeClassname: "devicon:vscode-wordmark",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },

    {
      title: "Data Engineering & Analytics",
      fileName: "DataScienceImg",
      skills: [
        "- Designs and builds ETL/ELT data pipelines to ingest, transform, and load data across various sources and destinations.",
        "- Develops data workflows and orchestration using Apache Airflow for reliable and automated pipeline scheduling.",
        "- Analyzes and processes large datasets using Python (Pandas, NumPy) and SQL for data-driven insights.",
        "- Builds and maintains data warehouses and data models using dbt for clean, testable transformations.",
        "- Leverages AI tools like ChatGPT for automation, data interpretation, and enhanced problem-solving.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: {
            backgroundColor: "transparent",
            color: "#017CEE",
          },
        },
        {
          skillName: "dbt",
          fontAwesomeClassname: "simple-icons:dbt",
          style: {
            backgroundColor: "transparent",
            color: "#FF694B",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
            color: "#E25A1C",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#00618A",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
            color: "#217346",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "Chatgpt",
          fontAwesomeClassname: "hugeicons:chat-gpt",
          style: {
            backgroundColor: "transparent",
            color: "#10A37F",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "- Builds and manages scalable applications using AWS cloud services and Firebase for backend infrastructure.",
        "- Designs and optimizes relational and NoSQL databases with PostgreSQL and MongoDB for efficient data storage.",
        "- Implements cloud-based solutions, serverless functions, and real-time databases for high-performance applications.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "- Designs and prototypes user interfaces using Figma for web and mobile applications.",
        "- Creates vector graphics, icons, and UI assets with Illustrator for a polished visual experience.",
        "- Develops and refines design systems to ensure consistency and usability across digital products.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Automation & No-Code",
      fileName: "CloudInfraImg",
      skills: [
        "- Builds automated workflows using Google Apps Script to extend Google Workspace apps like Sheets, Docs, and Gmail.",
        "- Connects apps and automates multi-step processes with Zapier, eliminating repetitive manual tasks.",
        "- Develops custom business applications without traditional coding using AppSheet on top of Google Sheets and Drive.",
        "- Designs end-to-end automation solutions that reduce paper-based processes and improve team productivity.",
      ],
      softwareSkills: [
        {
          skillName: "Google Apps Script",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Zapier",
          fontAwesomeClassname: "simple-icons:zapier",
          style: {
            color: "#FF4A00",
          },
        },
        {
          skillName: "AppSheet",
          imageSrc: "appsheet.png",
          style: {
            height: "24px",
            width: "auto",
          },
        },
        {
          skillName: "Google Sheets",
          fontAwesomeClassname: "simple-icons:googlesheets",
          style: {
            color: "#34A853",
          },
        },
        {
          skillName: "Google Drive",
          fontAwesomeClassname: "simple-icons:googledrive",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Gmail",
          fontAwesomeClassname: "simple-icons:gmail",
          style: {
            color: "#EA4335",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Rizal Technological University",
      subtitle: "Bachelor Of Science in Information Technology",
      logo_path: "rtulogo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2023",
      descriptions: [
        "With a Bachelor of Science in Information Technology, you learned programming and software development using languages like Java, PHP, and JavaScript; database management with SQL and NoSQL systems; networking and cybersecurity fundamentals; system administration and DevOps practices; and UI/UX design principles using tools like Figma and Illustrator.",
      ],
      website_link: "https://www.rtu.edu.ph/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "App Building with AppSheet",
      subtitle: "Google Cloud",
      logo_path: "app-building-with-appsheet-skill-badge.png",
      certificate_link:
        "https://www.credly.com/badges/ad02f2ae-c650-4466-b0e3-b2ea5d5abace/public_url",
      alt_name: "Appsheet",
      color_code: "#1F70C199",
    },

    {
      title: "Data Fundamentals",
      subtitle: "IBM Skillsbuild",
      logo_path: "data-fundamentals.png",
      certificate_link:
        "https://www.credly.com/badges/eaccab20-e2a5-4794-8825-d892ca79a8e9/public_url",
      alt_name: "IBM skills build",
      color_code: "#1F70C199",
    },
    {
      title: "Machine Learning for Data Science Projects",
      subtitle: "IBM Skillsbuild",
      logo_path: "machine-learning-for-data-science-projects.1.png",
      certificate_link:
        "https://www.credly.com/badges/5748aa51-b4c3-49e3-8b40-3f95ee2816ac/public_url",
      alt_name: "IBM skills build 2",
      color_code: "#1F70C199",
    },
    {
      title: "Web Development Fundamentals",
      subtitle: "IBM Skillsbuild",
      logo_path: "web-development-fundamentals.png",
      certificate_link:
        "https://www.credly.com/badges/6e1cf9c4-33ba-46ac-b79b-e8333c331277/public_url",
      alt_name: "IBM skills build 3",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "A Software Developer and Data Engineer with hands-on experience building enterprise applications, automating workflows, and designing data pipelines. Currently working at Magellan Outsourcing as a Data Engineer, and previously at Aboitiz Equity Ventures where I developed internal systems and digitized paper-based processes. Passionate about leveraging technology to drive efficiency and deliver scalable solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Engineer",
          company: "Magellan Outsourcing",
          company_url: "https://www.magellan-outsourcing.com/",
          logo_path: "magellan.jpg",
          duration: "February 2026 - Present",
          location: "Philippines",
          description:
            "Working as a Software Developer at Magellan Outsourcing, contributing to the development and maintenance of software solutions for clients, collaborating with cross-functional teams to deliver high-quality and scalable applications.",
          color: "#000000",
        },
        {
          title: "Software Developer",
          company: "Aboitiz Equity Ventures",
          company_url: "https://aboitiz.com/",
          logo_path: "aevlogo.png",
          duration: "October 2023 - December 2025",
          location: "32nd Street BGC, Taguig, Philippines",
          description:
            "At Aboitiz, I developed applications to streamline workflows by reducing paper-based processes and automating tasks. I managed the Security Management System for Aboitiz Equity Ventures, ensuring smooth operations and data integrity. Additionally, I handled database queries and provided support for various IT-related tasks, contributing to system efficiency and reliability.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "PASAMBA.jpg",
    description:
      "For Job/Project offers, reach out to me on any of this websites",
  },

  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

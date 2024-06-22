import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGithub, LuGraduationCap } from "react-icons/lu";
import ironhorse from "@/public/ironhorse.png";
import hodlnodes from "@/public/hodlnodes.png";
import supermint from "@/public/supermint.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Denver",
    location: "United States",
    description:
      "Completed bachelor's of science in Computer Science degree in 3 years",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2014",
  },
  {
    title: "Arcpi",
    location: "United States",
    description:
      "Build CSSA App in both iOS and Android native version using Swfit, Objective-C, java, and Kotlin.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
  {
    title: "Tsinghua University",
    location: "China",
    description:
      "Master's in Computer Science from Tsinghua University and a notable IEEE TDSC publication, and a Journal in Journal of Network New Media",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Senior Full Stack Engineer",
    location: "United States",
    description:
      "Leds projects: Iron Horse RAG AI, Hodlnodes.com, Supermint, Multiverse Meta Land sales etc.",
    icon: React.createElement(LuGithub),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Iron Horse RAG AI",
    description:`
      Architected and led the development of a sophisticated RAG AI application hosted on Google Cloud Platform, leveraging Firestore for robust data management of user documents, including chat history and configurations. Pioneered a system allowing
users to upload and selectively merge documents to form a dynamic knowledge base, optimizing the AI's response capabilities.
Implemented Cloud Storage solutions for efficient indexing, utilizing both OpenAI and HuggingFace Embeddings for local and remote
processing. Designed and integrated an intuitive user interface, facilitating seamless user interactions and document management, which
significantly enhances the usability and accessibility of AI-driven data retrieval and analysis. This project underscores my expertise in AI
application development, cloud architecture, and user-centric design, contributing significantly to advancing AI accessibility and
functionality in practical applications. (Please send me an email, so I can setup an test account with your specific knowledge base.)`
      ,
    tags: ["React Native", "Google Oauth", "Google Cloud Run", "Google Storage", "Firestore", "Firebase Hosting", "Flask", "OpenAI", "HuggingFaceHub"],
    imageUrl: ironhorse,
    projectLink: "https://ironhorse-rag-demo-dev.web.app"
  },
  {
    title: "Hodlnodes.com",
    description:
      `Led the design, architecture, and development of Hodlnodes.com and stake.hodlnodes.com, showcasing
expertise in full-stack development. Used solidity to write the hodlnodes's smart contract on Ethereum. Pioneered the front-end application
of stake.hodlnodes.com using Next.js, creating a responsive and user-friendly interface. Engineered the back-end infrastructure utilizing
Google Firestore, including designing a robust and scalable database schema, and ensured efficient hosting on Vercel. Spearheaded the
setup and management of a staking device for the Ethereum blockchain, implementing a custom ARM Linux system. Maintained high
security and reliability standards by managing the device’s firewall and overseeing continuous internet monitoring, ensuring uninterrupted
and secure blockchain operations `,
    tags: ["Solidity", "WalletConnect", "Metamask", "Google cloud functions", "scheduler", "firestore", "React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: hodlnodes,
    projectLink: "https://www.hodlnodes.com/"
  },
  {
    title: "Supermint",
    description:
      `Developed a user-centric platform for custom NFT creation and deployment on the Ethereum blockchain,
leveraging Solidity for smart contract development and integrating Web3 technologies. Designed an intuitive UI enabling advanced NFT
customization and easy contract deployment, while implementing robust security measures and conducting extensive testing to optimize
contract efficiency and minimize gas costs. (, r, etc.)`,
    tags: ["Solidity", "WalletConnect", "express", "ether.js", "cloud functions", "scheduler", "React", "Next.js", "Tailwind", "Framer"],
    imageUrl: supermint,
    projectLink: "https://helix-supermint-dev.web.app/home"
  },
] as const;

export const skillsData = [
  "Solidity", "TypeScript", "JavaScript", "Java", "Python", "Swift", "Kotlin", "C", "C++", "Go", "Rust",
"Truffle", "Hardhat", "Web3.js", "ethers.js", "IPFS", "Arweave", "Chainlink",
"ReactJS", "NextJS", "AngularJS", "NodeJS", "ExpressJS", "jQuery", "Bootstrap", "Pandas", "Jest", "Mocha", "Ignite CLI",
"Flask", "PyTest", "Cosmos SDK", "CosmJS",
"Docker", "Kubernetes", "Kafka", "Git", "GitHub", "SVN", "AWS", "Google Cloud Platform", "OAuth", "Cloud functions",
"Cloud run", "Scheduler", "Firestore", "Azure Cloud", "Parse Server", "OpenAI", "Langchain",
"Prometheus", "Grafana",
"MySQL", "NoSQL", "MongoDB", "Firebase Firestore", "Google Cloud storage",
  "HTML",
  "CSS",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Firestore",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

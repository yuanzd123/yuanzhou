import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGithub, LuGraduationCap } from "react-icons/lu";
import ironhorse from "@/public/ironhorse.png";
import hodlnodes from "@/public/hodlnodes.png";
import supermint from "@/public/supermint.png";
import tdsc from "@/public/tdsc.png";
import network from "@/public/network.png";
import blackjack from "@/public/blackjack.png";

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
    title: "Multiverse.ai",
    location: "United States",
    description:
      "Leds projects: Iron Horse RAG AI, Hodlnodes.com, Supermint, Multiverse Meta Land sales etc.",
    icon: React.createElement(LuGithub),
    date: "2021 - present",
  },
  {
    title: "Tsinghua University (Ranked 12 in the world by Times)",
    location: "China",
    description:
      "Master's in Computer Science from Tsinghua University and a notable IEEE TDSC publication, and a Journal in Journal of Network New Media",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
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
    title: "University of Denver",
    location: "United States",
    description:
      "Completed bachelor's of science in Computer Science degree in 3 years",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2014",
  },
] as const;

export const projectsData = [
  {
    title: "Iron Horse RAG AI",
    description: `
      (Please send me an email, so I can setup an test account with your specific knowledge base.) Architected and led the development of a sophisticated RAG AI application hosted on Google Cloud Platform, leveraging Firestore for robust data management of user documents, including chat history and configurations. Pioneered a system allowing
users to upload and selectively merge documents to form a dynamic knowledge base, optimizing the AI's response capabilities.
Implemented Cloud Storage solutions for efficient indexing, utilizing both OpenAI and HuggingFace Embeddings for local and remote
processing. Designed and integrated an intuitive user interface, facilitating seamless user interactions and document management, which
significantly enhances the usability and accessibility of AI-driven data retrieval and analysis. This project underscores my expertise in AI
application development, cloud architecture, and user-centric design, contributing significantly to advancing AI accessibility and
functionality in practical applications. `,
    tags: [
      "React Native",
      "Google Oauth",
      "Google Cloud Run",
      "Google Storage",
      "Firestore",
      "Firebase Hosting",
      "Flask",
      "OpenAI",
      "HuggingFaceHub",
    ],
    imageUrl: ironhorse,
    projectLink: "https://ironhorse-rag-demo-dev.web.app",
  },
  {
    title: "Hodlnodes.com",
    description: `Led the design, architecture, and development of Hodlnodes.com and stake.hodlnodes.com, showcasing
expertise in full-stack development. API: https://app.swaggerhub.com/apis-docs/YUANZHOU93/HODLNodes/1.0.3 Used solidity to write the hodlnodes's smart contract on Ethereum. Pioneered the front-end application
of stake.hodlnodes.com using Next.js, creating a responsive and user-friendly interface. Engineered the back-end infrastructure utilizing
Google Firestore, including designing a robust and scalable database schema, and ensured efficient hosting on Vercel. Spearheaded the
setup and management of a staking device for the Ethereum blockchain, implementing a custom ARM Linux system. Maintained high
security and reliability standards by managing the device’s firewall and overseeing continuous internet monitoring, ensuring uninterrupted
and secure blockchain operations `,
    tags: [
      "Solidity",
      "WalletConnect",
      "Metamask",
      "Google cloud functions",
      "scheduler",
      "firestore",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
    ],
    imageUrl: hodlnodes,
    projectLink: "https://www.hodlnodes.com/",
  },
  {
    title: "Blackjack Card Tracker",
    description: `Developed a blackjack card tracker using the YOLOv10 model. Created a comprehensive and refined dataset using Python. Trained the model to work accurately from any angle. Please take a look at my demo.`,
    tags: ["Python", "YOLO", "SQLite"],
    imageUrl: blackjack,
    projectLink: "https://www.youtube.com/watch?v=4e6bThBxjsc",
  },
  {
    title: "Supermint",
    description: `Developed a user-centric platform for custom NFT creation and deployment on the Ethereum blockchain,
leveraging Solidity for smart contract development and integrating Web3 technologies. Designed an intuitive UI enabling advanced NFT
customization and easy contract deployment, while implementing robust security measures and conducting extensive testing to optimize
contract efficiency and minimize gas costs. (, r, etc.)`,
    tags: [
      "Solidity",
      "WalletConnect",
      "express",
      "ether.js",
      "cloud functions",
      "scheduler",
      "React",
      "Next.js",
      "Tailwind",
      "Framer",
    ],
    imageUrl: supermint,
    projectLink: "https://helix-supermint-dev.web.app/home",
  },
  {
    title: "JNI Global References Are Still Vulnerable: Attacks and Defenses",
    description: `System services and resources in Android are accessed through IPC-based mechanisms. Previous research has demonstrated that they are vulnerable to the denial-of-service attack (DoS attack). For instance, the JNI global reference (JGR), which is widely used by system services, can be exhausted to cause the system reboot (hence the name JGRE attack). Even though the Android team tries to fix the problem by enforcing security checks, we find that it is still possible to construct a JGR exhaustion DoS attack in the latest Android system. In this article, we propose a new JGR exhaustion DoS attack, which is effective in different Android versions, including the latest one (i.e., Android 10). Specifically, we developed JGREAnalyzer, a tool that can systematically detect JGR vulnerable services APIs via a call graph analysis and a forwarding reachability analysis. We applied this tool to different Android versions and found multiple vulnerabilities. In particular, among 148 system services in Android 10, 12 of them have 21 vulnerabilities. Among them, 9 can be successfully exploited without any permissions. We further analyze the root cause of the vulnerabilities and propose a new defense to mitigate the JGRE attack by restricting resource consumption via global reference counting.`,
    tags: ["Typescript", "Java", "Kotlin", "Android 10", "AOSP"],
    imageUrl: tdsc,
    projectLink: "https://ieeexplore.ieee.org/document/9095351",
  },
  {
    title:
      "Android Service Layer Testing Framework Based on Automatic Code Generated",
    description: `Top tier journal article in China`,
    tags: ["Typescript", "Java", "Kotlin", "Android 10", "AOSP"],
    imageUrl: network,
    projectLink:
      "https://wjsy.cbpt.cnki.net/WKD2/WebPublication/paperDigest.aspx?paperID=fc0c4d88-74a7-45bb-a308-d20a1c3a5f44#",
  },
] as const;

export const skillsData = [
  "Solidity",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "Swift",
  "Kotlin",
  "C",
  "C++",
  "Go",
  "Rust",
  "Truffle",
  "Hardhat",
  "Web3.js",
  "ethers.js",
  "IPFS",
  "Arweave",
  "Chainlink",
  "ReactJS",
  "NextJS",
  "AngularJS",
  "NodeJS",
  "ExpressJS",
  "jQuery",
  "Bootstrap",
  "Pandas",
  "Jest",
  "Mocha",
  "Ignite CLI",
  "Flask",
  "PyTest",
  "Cosmos SDK",
  "CosmJS",
  "Docker",
  "Kubernetes",
  "Kafka",
  "Git",
  "GitHub",
  "SVN",
  "AWS",
  "Google Cloud Platform",
  "OAuth",
  "Cloud functions",
  "Cloud run",
  "Scheduler",
  "Firestore",
  "Azure Cloud",
  "Parse Server",
  "OpenAI",
  "Langchain",
  "Prometheus",
  "Grafana",
  "MySQL",
  "NoSQL",
  "MongoDB",
  "Firebase Firestore",
  "Google Cloud storage",
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

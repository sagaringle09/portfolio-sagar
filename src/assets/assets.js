import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import { RiFlowChart } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";

import aboutImg from "../assets/about.jpg";
import profileImg from "../assets/profile.JPG";
import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.webp";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.jpg";
import projectImg5 from "../assets/project5.jpg";
import projectImg6 from "../assets/project6.avif";

export const assets = {
  profileImg,
  aboutImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Technologies",
    icon: FaReact,
    description:
      "Building dynamic, responsive, and visually appealing web interfaces that provide seamless user experiences.",
    tags: ["React.js", "JavaScript", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "GraphQL", "Django"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "State Management",
    icon: RiFlowChart,
    description:
      "Efficiently manage and share data across React components, ensuring consistent application state, easier data flow, and optimized performance.",
    tags: ["Redux Toolkit", "Context API", "React Query", "Zustand"],
  },
  {
    title: "UI Frameworks",
    icon: MdDesignServices,
    description:
      "Quickly design responsive, modern, and consistent user interfaces with pre-built styles and components.",
    tags: [
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "Chakra UI",
      "Ant Design",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: [
      "Git & GitHub",
      "VS Code",
      "Webpack",
      "Postman",
      "Figma",
      "Jest",
      "React Testing Library",
    ],
  },
];

export const projects = [
  {
    title: "NetflixGPT",
    description:
      "NetflixGPT is a React-based web application that combines the movie-browsing experience of Netflix with AI-powered recommendations using OpenAI’s GPT.",
    image: projectImg1,
    tech: [
      "React.js",
      "Redux Toolkit",
      "Tailwind",
      "Firbase",
      "TMDB API",
      "OpenAI API",
    ],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://netflix-gpt-omega-gray.vercel.app/",
    code: "#",
  },
  {
    title: "E-Shop-App",
    description:
      "E-Shop App is a React-based e-commerce platform for browsing products, adding to cart, and making seamless online purchases.",
    image: projectImg2,
    tech: [
      "React.js",
      "Redux Toolkit",
      "Tailwind",
      "React Router",
      "JavaScript",
      "HTML",
    ],
    icons: [FaVuejs, FaFire, MdDesignServices, FaDatabase],
    demo: "https://e-shop-app-nu.vercel.app/",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",

    image: projectImg3,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Covid Awareness Website",
    description:
      "COVID Awareness Website is a JavaScript-based web app that provides real-time updates, safety tips, and information to promote COVID-19 awareness and prevention.",
    image: projectImg4,
    tech: ["JavaScript", "HTML", "CSS"],
    icons: [FaReact, MdDesignServices],
    demo: "https://covid-awareness-website-rouge.vercel.app/",
    code: "#",
  },
  {
    title: "Cinemate",
    description:
      "Cinemate App is a React-based movie discovery app that lets users explore, search, and get details about movies for an engaging cinematic experience.",
    image: projectImg5,
    tech: ["React.js", "Redux", "Bootsrap", "React Router", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://cinemate-pink.vercel.app/",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description:
      "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, MdDesignServices],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "React Developer",
    company: "Mind Spark Technology",
    duration: "2022 - Present",
    description:
      "A React.js Developer builds dynamic, responsive web applications using React.js, creating reusable components and seamless user interfaces",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Mahendra Technosoft Pvt.Ltd",
    duration: "2020 - 2021",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
];

export const education = [
  {
    role: "Bachelor of Engineering (B.E.)",
    company: "Sant Gadge Baba Amravati University",
    duration: "2016 - 2019",
    color: "pink",
  },
  {
    role: "Diploma",
    company: "Amravati University",
    duration: "2012 - 2016",
    color: "pink",
  },
];

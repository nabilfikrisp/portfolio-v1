import { TECH_STACK_SLUG, type TechStackSlugType } from "./tech-stack";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  for: string;
  forImage?: string;
  techStacks: TechStackSlugType[];
  appUrl?: string;
  githubUrl?: string;
};

export const PROJECTS: ProjectType[] = [
  {
    id: "toeps",
    title: "Toeps",
    description: "TOEFL like english test app",
    imageUrl: "/project-pictures/toeps.png",
    techStacks: [
      TECH_STACK_SLUG.NEXT_JS,
      TECH_STACK_SLUG.TAILWIND,
      TECH_STACK_SLUG.SHADCN,
      TECH_STACK_SLUG.NEST_JS,
      TECH_STACK_SLUG.TYPESCRIPT,
      TECH_STACK_SLUG.POSTGRESQL,
      TECH_STACK_SLUG.TANSTACK_QUERY,
      TECH_STACK_SLUG.GITHUB,
    ],
    appUrl: "https://app.toeps.id",
    for: "LKP Neo Spectra English",
    forImage: "/company-logos/neospectra.png",
  },
  {
    id: "twostrap",
    title: "Twostrap",
    description: "E-commerce platform for twostrap company",
    imageUrl: "/project-pictures/twostrap.png",
    techStacks: [
      TECH_STACK_SLUG.NEXT_JS,
      TECH_STACK_SLUG.TAILWIND,
      TECH_STACK_SLUG.TANSTACK_QUERY,
      TECH_STACK_SLUG.SHADCN,
      TECH_STACK_SLUG.TYPESCRIPT,
      TECH_STACK_SLUG.GITHUB,
    ],
    appUrl: "https://twostrap.id",
    for: "Octoscript",
    forImage: "/company-logos/octoscript.png",
  },
  {
    id: "tripl",
    title: "TRIPL",
    description:
      "Travel destination and planner app for Bandung City. This project is a part of my final project in Universitas Padjadjaran.",
    imageUrl: "/project-pictures/tripl.png",
    techStacks: [
      TECH_STACK_SLUG.REACT,
      TECH_STACK_SLUG.VITE,
      TECH_STACK_SLUG.CHAKRAUI,
      TECH_STACK_SLUG.REACT_ROUTER,
      TECH_STACK_SLUG.TANSTACK_QUERY,
      TECH_STACK_SLUG.MONGODB,
      TECH_STACK_SLUG.EXPRESS,
      TECH_STACK_SLUG.NODE_JS,
      TECH_STACK_SLUG.JEST,
      TECH_STACK_SLUG.JAVASCRIPT,
      TECH_STACK_SLUG.GITHUB,
    ],
    appUrl: "https://tripl.vercel.app/",
    githubUrl: "https://github.com/nabilfikrisp/ppl2-tripl",
    for: "personal",
  },
  {
    id: "yoga-gnn",
    title: "Yoga GNN",
    description:
      "Implementation of Graph Neural Network for Yoga Image Classification. This project is a part of my final project in Universitas Padjadjaran.",
    imageUrl: "/project-pictures/yoga-gnn.png",
    techStacks: [
      TECH_STACK_SLUG.REACT,
      TECH_STACK_SLUG.TYPESCRIPT,
      TECH_STACK_SLUG.VITE,
      TECH_STACK_SLUG.PYTHON,
      TECH_STACK_SLUG.PYTORCH,
      TECH_STACK_SLUG.FLASK,
      TECH_STACK_SLUG.SHADCN,
    ],
    appUrl: "https://yoga-gnn-nabilfikrisp.vercel.app/",
    githubUrl: "https://github.com/nabilfikrisp/yoga-gnn-app",
    for: "personal",
  },
  {
    id: "dicoding-forum",
    title: "Dicoding Forum",
    description:
      "A forum app where users can have a disccussion. This project is meant to complete my Dicoding course.",
    imageUrl: "/project-pictures/dicoding-forum.png",
    techStacks: [
      TECH_STACK_SLUG.REACT,
      TECH_STACK_SLUG.TYPESCRIPT,
      TECH_STACK_SLUG.VITE,
      TECH_STACK_SLUG.CYPRESS,
    ],
    appUrl: "https://forum-micanskuy.vercel.app/",
    githubUrl: "https://github.com/nabilfikrisp/dicoding-forum-app",
    for: "personal",
  },
];

export const TECH_STACK_SLUG = {
  REACT: "react",
  JAVASCRIPT: "javascript",
  TYPESCRIPT: "typescript",
  EXPRESS: "express",
  NODE_JS: "node-js",
  NEXT_JS: "next-js",
  NEST_JS: "nest-js",
  TAILWIND: "tailwind",
  ASTRO: "astro",
  TANSTACK_QUERY: "tanstack-query",
  REDUX_TOOLKIT: "redux-toolkit",
  PYTHON: "python",
  PYTORCH: "pytorch",
  GITHUB: "github",
  MYSQL: "mysql",
  POSTGRESQL: "postgressql",
  MONGODB: "mongodb",
  PHP: "php",
  LARAVEL: "laravel",
  SHADCN: "shadcn",
  DAISYUI: "daisyui",
  CHAKRAUI: "chakraui",
  REACT_ROUTER: "react-router",
  JEST: "jest",
  VITE: "vite",
  FLASK: "flask",
  CYPRESS: "cypress",
} as const;

export type TechStackSlugType =
  (typeof TECH_STACK_SLUG)[keyof typeof TECH_STACK_SLUG];

export type TechStackType = {
  imageUrl: string;
  name: string;
  slug: TechStackSlugType;
};

export const TECH_STACKS = {
  [TECH_STACK_SLUG.REACT]: {
    imageUrl: "/tech-logos/react.png",
    name: "React",
    slug: TECH_STACK_SLUG.REACT,
  },
  [TECH_STACK_SLUG.JAVASCRIPT]: {
    imageUrl: "/tech-logos/javascript.png",
    name: "Javascript",
    slug: TECH_STACK_SLUG.JAVASCRIPT,
  },
  [TECH_STACK_SLUG.TYPESCRIPT]: {
    imageUrl: "/tech-logos/typescript.png",
    name: "Typescript",
    slug: TECH_STACK_SLUG.TYPESCRIPT,
  },
  [TECH_STACK_SLUG.EXPRESS]: {
    imageUrl: "/tech-logos/express.png",
    name: "Express",
    slug: TECH_STACK_SLUG.EXPRESS,
  },
  [TECH_STACK_SLUG.NODE_JS]: {
    imageUrl: "/tech-logos/node-js.png",
    name: "Node.js",
    slug: TECH_STACK_SLUG.NODE_JS,
  },
  [TECH_STACK_SLUG.NEST_JS]: {
    imageUrl: "/tech-logos/nest-js.png",
    name: "Nest.js",
    slug: TECH_STACK_SLUG.NEST_JS,
  },
  [TECH_STACK_SLUG.NEXT_JS]: {
    imageUrl: "/tech-logos/next-js.png",
    name: "Next.js",
    slug: TECH_STACK_SLUG.NEXT_JS,
  },
  [TECH_STACK_SLUG.TAILWIND]: {
    imageUrl: "/tech-logos/tailwind.png",
    name: "Tailwind",
    slug: TECH_STACK_SLUG.TAILWIND,
  },
  [TECH_STACK_SLUG.ASTRO]: {
    imageUrl: "/tech-logos/astro.png",
    name: "Astro",
    slug: TECH_STACK_SLUG.ASTRO,
  },
  [TECH_STACK_SLUG.TANSTACK_QUERY]: {
    imageUrl: "/tech-logos/tanstack.png",
    name: "Tanstack Query",
    slug: TECH_STACK_SLUG.TANSTACK_QUERY,
  },
  [TECH_STACK_SLUG.REDUX_TOOLKIT]: {
    imageUrl: "/tech-logos/redux.svg",
    name: "Redux Toolkit",
    slug: TECH_STACK_SLUG.REDUX_TOOLKIT,
  },
  [TECH_STACK_SLUG.PYTHON]: {
    imageUrl: "/tech-logos/python.png",
    name: "Python",
    slug: TECH_STACK_SLUG.PYTHON,
  },
  [TECH_STACK_SLUG.PYTORCH]: {
    imageUrl: "/tech-logos/pytorch.png",
    name: "Pytorch",
    slug: TECH_STACK_SLUG.PYTORCH,
  },
  [TECH_STACK_SLUG.GITHUB]: {
    imageUrl: "/tech-logos/github.png",
    name: "Github",
    slug: TECH_STACK_SLUG.GITHUB,
  },
  [TECH_STACK_SLUG.MYSQL]: {
    imageUrl: "/tech-logos/mysql.png",
    name: "MySQL",
    slug: TECH_STACK_SLUG.MYSQL,
  },
  [TECH_STACK_SLUG.POSTGRESQL]: {
    imageUrl: "/tech-logos/postgressql.png",
    name: "PostgresSQL",
    slug: TECH_STACK_SLUG.POSTGRESQL,
  },
  [TECH_STACK_SLUG.MONGODB]: {
    imageUrl: "/tech-logos/mongodb.png",
    name: "MongoDB",
    slug: TECH_STACK_SLUG.MONGODB,
  },
  [TECH_STACK_SLUG.PHP]: {
    imageUrl: "/tech-logos/php.png",
    name: "PHP",
    slug: TECH_STACK_SLUG.PHP,
  },
  [TECH_STACK_SLUG.LARAVEL]: {
    imageUrl: "/tech-logos/laravel.png",
    name: "Laravel",
    slug: TECH_STACK_SLUG.LARAVEL,
  },
  [TECH_STACK_SLUG.SHADCN]: {
    imageUrl: "/tech-logos/shadcn.svg",
    name: "Shadcn",
    slug: TECH_STACK_SLUG.SHADCN,
  },
  [TECH_STACK_SLUG.DAISYUI]: {
    imageUrl: "/tech-logos/daisyui.svg",
    name: "DaisyUI",
    slug: TECH_STACK_SLUG.DAISYUI,
  },
  [TECH_STACK_SLUG.CHAKRAUI]: {
    imageUrl: "/tech-logos/chakraui.png",
    name: "ChakraUI",
    slug: TECH_STACK_SLUG.CHAKRAUI,
  },
  [TECH_STACK_SLUG.REACT_ROUTER]: {
    imageUrl: "/tech-logos/react-router.svg",
    name: "React Router",
    slug: TECH_STACK_SLUG.REACT_ROUTER,
  },
  [TECH_STACK_SLUG.JEST]: {
    imageUrl: "/tech-logos/jest.png",
    name: "Jest",
    slug: TECH_STACK_SLUG.JEST,
  },
  [TECH_STACK_SLUG.VITE]: {
    imageUrl: "/tech-logos/vite.png",
    name: "Vite",
    slug: TECH_STACK_SLUG.VITE,
  },
  [TECH_STACK_SLUG.FLASK]: {
    imageUrl: "/tech-logos/flask.png",
    name: "Flask",
    slug: TECH_STACK_SLUG.FLASK,
  },
  [TECH_STACK_SLUG.CYPRESS]: {
    imageUrl: "/tech-logos/cypress.png",
    name: "Cypress",
    slug: TECH_STACK_SLUG.CYPRESS,
  },
} as const;

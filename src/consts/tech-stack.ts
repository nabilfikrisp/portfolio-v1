export type TechStackType = {
  imageUrl: string;
  name: string;
  slug: TechStackKeys;
};

export const TECH_STACKS = {
  react: {
    imageUrl: "/tech-logos/react.png",
    name: "React",
    slug: "react",
  },
  javascript: {
    imageUrl: "/tech-logos/javascript.png",
    name: "Javascript",
    slug: "javascript",
  },
  typescript: {
    imageUrl: "/tech-logos/typescript.png",
    name: "Typescript",
    slug: "typescript",
  },
  express: {
    imageUrl: "/tech-logos/express.png",
    name: "Express",
    slug: "express",
  },
  "node-js": {
    imageUrl: "/tech-logos/node-js.png",
    name: "Node.js",
    slug: "node-js",
  },
  "nest-js": {
    imageUrl: "/tech-logos/nest-js.png",
    name: "Nest.js",
    slug: "nest-js",
  },
  "next-js": {
    imageUrl: "/tech-logos/next-js.png",
    name: "Next.js",
    slug: "next-js",
  },
  tailwind: {
    imageUrl: "/tech-logos/tailwind.png",
    name: "Tailwind",
    slug: "tailwind",
  },
  astro: {
    imageUrl: "/tech-logos/astro.png",
    name: "Astro",
    slug: "astro",
  },
  "tanstack-query": {
    imageUrl: "/tech-logos/tanstack.png",
    name: "Tanstack Query",
    slug: "tanstack-query",
  },
  "redux-toolkit": {
    imageUrl: "/tech-logos/redux.svg",
    name: "Redux Toolkit",
    slug: "redux-toolkit",
  },
  python: {
    imageUrl: "/tech-logos/python.png",
    name: "Python",
    slug: "python",
  },
  pytorch: {
    imageUrl: "/tech-logos/pytorch.png",
    name: "Pytorch",
    slug: "pytorch",
  },
  github: {
    imageUrl: "/tech-logos/github.png",
    name: "Github",
    slug: "github",
  },
  mysql: {
    imageUrl: "/tech-logos/mysql.png",
    name: "MySQL",
    slug: "mysql",
  },
  postgressql: {
    imageUrl: "/tech-logos/postgressql.png",
    name: "PostgresSQL",
    slug: "postgressql",
  },
  mongodb: {
    imageUrl: "/tech-logos/mongodb.png",
    name: "MongoDB",
    slug: "mongodb",
  },
  php: {
    imageUrl: "/tech-logos/php.png",
    name: "PHP",
    slug: "php",
  },
  laravel: {
    imageUrl: "/tech-logos/laravel.png",
    name: "Laravel",
    slug: "laravel",
  },
  shadcn: {
    imageUrl: "/tech-logos/shadcn.svg",
    name: "Shadcn",
    slug: "shadcn",
  },
  daisyui: {
    imageUrl: "/tech-logos/daisyui.svg",
    name: "DaisyUI",
    slug: "daisyui",
  },
  chakraui: {
    imageUrl: "/tech-logos/chakraui.png",
    name: "ChakraUI",
    slug: "chakraui",
  },
  "react-router": {
    imageUrl: "/tech-logos/react-router.svg",
    name: "React Router",
    slug: "react-router",
  },
  jest: {
    imageUrl: "/tech-logos/jest.png",
    name: "Jest",
    slug: "jest",
  },
} as const;

export type TechStackKeys = keyof typeof TECH_STACKS;
// Type the TECH_STACKS object
export const TYPED_TECH_STACKS: { [key: string]: TechStackType } = TECH_STACKS;

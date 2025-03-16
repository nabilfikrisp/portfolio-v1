export type EducationType = {
  imageUrl: string;
  title: string;
  institute: string;
  date: string;
};

export const EDUCATIONS: EducationType[] = [
  {
    imageUrl: "/education-logos/unpad.png",
    title: "Bachelor of Computer Science",
    institute: "Universitas Padjadjaran",
    date: "2020 - 2024",
  },
  {
    imageUrl: "/education-logos/kampus-merdeka.jpeg",
    title: "Front-End Web and Back-End Developer at Dicoding",
    institute: "MSIB Kampus Merdeka",
    date: "2023",
  },
];

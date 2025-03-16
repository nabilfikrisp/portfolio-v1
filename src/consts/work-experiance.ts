export type WorkType = {
  imageUrl: string;
  title: string;
  company: string;
  employmentType: string;
  date: string;
  description: string;
  workLink?: string;
  companyLink?: string;
  descriptionList?: string[];
};

export const WORKS: WorkType[] = [
  {
    imageUrl: "https://example.com/image.jpg",
    title: "Frontend Developer",
    company: "Octoscript",
    employmentType: "Freelance",
    date: "Oct 2024 - Feb 2025",
    description: "Developed Twostrap.id",
  },
  {
    imageUrl: "https://example.com/image.jpg",
    title: "React and Backend Mentor",
    company: "Dicoding Indonesia",
    employmentType: "Part Time",
    date: "Feb 2024 - Aug 2024",
    description: "Mentored 23 students",
    descriptionList: [
      "Achieved 'Best Mentor' for 2 consecutive months",
      "Helped 3 students achieve 'Best Capstone Project' awards",
    ],
  },
  {
    imageUrl: "https://example.com/image.jpg",
    title: "Full Stack Developer",
    company: "LKP Neo Spectra English",
    employmentType: "Freelance",
    date: "Dec 2023 - Aug 2024",
    description: "Developed app.toeps.id",
  },
];

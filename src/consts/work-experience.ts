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
    imageUrl: "/company-logos/octoscript.png",
    title: "Frontend Developer",
    company: "Octoscript",
    employmentType: "Freelance",
    date: "Oct 2024 - Feb 2025",
    description: "Developed Twostrap.id",
    descriptionList: [
      "Led the Frontend team to develop the app",
      "Actively helping the other frontend developers",
    ],
  },
  {
    imageUrl: "/company-logos/dicoding.png",
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
    imageUrl: "/company-logos/neospectra.png",
    title: "Full Stack Developer",
    company: "LKP Neo Spectra English",
    employmentType: "Freelance",
    date: "Dec 2023 - Aug 2024",
    description: "Developed app.toeps.id",
    descriptionList: [
      "Handled the frontend and backend of the app solo",
      "Collaborated with Dev Ops to deploy the app",
      "Used by around +2.000 users",
    ],
  },
  {
    imageUrl: "/company-logos/wool.png",
    title: "Frontend Developer",
    company: "WOOL ID",
    employmentType: "Internship",
    date: "Aug 2023 - Nov 2023",
    description: "Developed a responsive web app and landing page for wool.id.",
    descriptionList: [
      "Actively participated in sprint planning and feature development",
      "Collaborated with the design and backend team to deliver a high-quality product",
    ],
  },
  {
    imageUrl: "/company-logos/prabu2023.jpeg",
    title: "Full Stack Developer",
    company: "Prabu 2023",
    employmentType: "Contract",
    date: "Jul 2023 - Sep 2023",
    description: "Developed prabu.unpad.ac.id for Prabu 2023.",
    descriptionList: [
      "Developed the exam feature",
      "Collaborated with the Unpad team to deploy the app",
      "Used by around +20.000 total users",
    ],
  },
  {
    imageUrl: "/company-logos/febunpad.jpeg",
    title: "Full Stack Developer",
    company: "BEM Kema FEB Unpad",
    employmentType: "Freelance",
    date: "Jun 2022 - Sep 2022",
    description: "Developed a voting app for their award event.",
    descriptionList: ["Used by around 200 total users"],
  },
];

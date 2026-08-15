export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  icon: "facebook" | "instagram" | "whatsapp" | "github" | "linkedin";
};

export const personalInfo = {
  name: "Sourov Chandra Adikari",
  title: "Full Stack Web Developer",
  location: "Pirganj, Bangladesh",
  email: "iamsourovadikari@gmail.com",
  phone: "+8801518981854",
  careerGoal: "Seeking an internship or junior developer role.",
  experienceLabel: "Independent Full Stack Developer",
  experiencePeriod: "2023 – Present",
  about:
    "Passionate Full Stack Web Developer with experience building scalable, responsive web applications using React, Next.js, TypeScript, Node.js, and MongoDB. Strong foundation in frontend, backend, REST APIs, authentication, and modern UI development. Seeking an internship or junior developer role.",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/URSourovAdikari",
    label: "Facebook",
    icon: "facebook",
  },
  {
    href: "https://www.instagram.com/iamsourovadikari",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://wa.me/sourovadikari",
    label: "WhatsApp",
    icon: "whatsapp",
  },
  {
    href: "https://github.com/ursourovadikari",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/sourov-chandra-adikari-88b717428",
    label: "LinkedIn",
    icon: "linkedin",
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  backend: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  database: ["MongoDB", "Firebase", "Supabase"],
  tools: [
    "Git",
    "GitHub",
    "Vercel",
    "Postman",
    "VS Code",
    "NPM",
    "CI/CD Basics",
  ],
};

export const experienceTimeline = [
  {
    role: "Independent Full Stack Developer",
    period: "2023 – Present",
    description:
      "Designed, developed, and deployed full-stack web applications using React, Next.js, TypeScript, and Express.js.",
    achievement:
      "2+ production-ready web apps deployed on Vercel with automated CI/CD pipelines.",
  },
];

export const educationTimeline = [
  {
    title: "Bachelor of Science (Honours)",
    school: "Department of Zoology, Thakurgaon Government College",
    period: "2024 – Present",
    detail: "Expected Graduation: 2028",
  },
  {
    title: "Higher Secondary Certificate (Science)",
    school: "Thakurgaon Road Degree College",
    period: "2020 – 2022",
    detail: "GPA: 4.08 / 5.00",
  },
  {
    title: "Secondary School Certificate (Science)",
    school: "Shimulbari High School",
    period: "2018 – 2020",
    detail: "GPA: 4.67 / 5.00",
  },
];

export const languages = [
  { language: "Bengali", level: "Native" },
  { language: "English", level: "Professional Working" },
  { language: "Hindi", level: "Intermediate" },
];

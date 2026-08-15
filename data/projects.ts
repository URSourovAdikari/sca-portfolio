export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "E-commerce"
  | "Dashboard"
  | "Other";

export type ProjectStatus = "completed" | "in-progress" | "upcoming" | "experimental" | "archived";

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  image: string;
  screenshots: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: number;
  purpose: string;
  solution: string;
  highlights: string[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    id: "sca-courier",
    title: "SCA Courier",
    slug: "sca-courier",
    description:
      "Parcel tracking and courier workflow platform focused on shipment management, status updates, and a clean logistics experience.",
    longDescription:
      "SCA Courier is a logistics-focused product built to make parcel operations easier to track and manage. It brings a more readable workflow to courier management through an organized dashboard, shipping detail flow, and responsive UX.",
    category: "Full Stack",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Parcel and shipment tracking workflow",
      "Courier dashboard for operational visibility",
      "Delivery status tracking and updates",
      "Responsive logistics interface",
    ],
    image: "/images/projects/sca-courier.svg",
    screenshots: ["/images/projects/sca-courier.svg", "/images/projects/sca-courier.svg"],
    githubUrl: "https://github.com/URSourovAdikari/sca-courier",
    liveUrl: "https://sca-courier.vercel.app/",
    featured: true,
    year: 2024,
    purpose:
      "Create a practical logistics workflow that makes parcel tracking and shipment management easier to follow for the end user and operations team.",
    solution:
      "I built a clean, responsive dashboard-centered product that keeps important shipment information visible while simplifying the day-to-day logistics flow.",
    highlights: [
      "Shipment tracking experience",
      "Operational dashboard layout",
      "Responsive courier workflow",
      "Clean logistics UX",
    ],
    lessons: [
      "Improved my approach to status-heavy interfaces",
      "Focused on keeping operational data easy to scan",
      "Balanced product clarity with practical workflow design",
    ],
  },
  {
    id: "sca-shop",
    title: "SCA Shop",
    slug: "sca-shop",
    description:
      "Modern e-commerce storefront built for product browsing, cart flow, and a polished online shopping experience.",
    longDescription:
      "SCA Shop is an e-commerce storefront designed around product discovery, cart interaction, and a streamlined shopping flow. It focuses on presenting products clearly while keeping the buying journey responsive and easy to navigate.",
    category: "E-commerce",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB"],
    features: [
      "Product catalog and browsing experience",
      "Shopping cart and checkout flow",
      "Responsive storefront design",
      "Modern online shopping experience",
    ],
    image: "/images/projects/sca-shop.svg",
    screenshots: ["/images/projects/sca-shop.svg", "/images/projects/sca-shop.svg"],
    githubUrl: "https://github.com/URSourovAdikari/sca-shop",
    liveUrl: "https://sca-shop.vercel.app/",
    featured: true,
    year: 2024,
    purpose:
      "Build a storefront with a strong shopping journey, product clarity, and a practical cart and checkout flow.",
    solution:
      "I designed the experience around clear product presentation, responsive layouts, and a simple ordering flow so the shopping interaction feels natural and direct.",
    highlights: [
      "Product-first storefront layout",
      "Cart and checkout UX",
      "Responsive shopping journey",
      "Clear catalog experience",
    ],
    lessons: [
      "Strengthened my product-detail and cart UX thinking",
      "Improved conversion-friendly interface structure",
      "Focused on maintainable storefront architecture",
    ],
  },
  {
    id: "sca-universe",
    title: "SCA Universe",
    slug: "sca-universe",
    description:
      "A polished digital product experience centered on the SCA Universe concept, built for a strong live presentation and modern user journey.",
    longDescription:
      "SCA Universe is an interactive product experience designed to present a branded digital concept with a polished interface and clean product storytelling. The site focuses on presentation, clarity, and a strong modern visual identity.",
    category: "Frontend",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    features: [
      "Modern product presentation",
      "Responsive landing experience",
      "Brand-focused interface design",
      "Live web product showcase",
    ],
    image: "/images/projects/portfolio-project.svg",
    screenshots: ["/images/projects/portfolio-project.svg", "/images/projects/portfolio-project.svg"],
    githubUrl: "",
    liveUrl: "https://sca-universe.vercel.app/",
    featured: true,
    year: 2025,
    purpose:
      "Deliver a polished digital experience that presents the SCA Universe concept clearly and professionally on the web.",
    solution:
      "I shaped the interface around a modern product narrative, strong visual hierarchy, and a responsive layout that keeps the experience clear and engaging across screen sizes.",
    highlights: [
      "Brand-centered product presentation",
      "Responsive modern UI",
      "Launch-ready web experience",
      "Clear product storytelling",
    ],
    lessons: [
      "Refined my focus on polished product presentation",
      "Improved my approach to visual hierarchy for product storytelling",
      "Worked on keeping breadth and clarity balanced in a front-end experience",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectStatusOptions = [
  "All",
  "Completed",
  "In Progress",
  "Upcoming",
  "Experimental",
  "Archived",
] as const;

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "E-commerce",
  "Dashboard",
  "Other",
] as const;

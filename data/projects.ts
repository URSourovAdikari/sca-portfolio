export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "E-commerce"
  | "Dashboard"
  | "Other";

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: number;
  purpose: string;
  solution: string;
  highlights: string[];
  lessons: string[];
  screenshots: string[];
};

export const projects: Project[] = [
  {
    id: "sca-courier",
    title: "SCA Courier",
    slug: "sca-courier",
    description:
      "Parcel tracking and courier workflow platform focused on shipment management, status updates, and a cleaner logistics experience.",
    longDescription:
      "SCA Courier is a logistics-focused product designed to simplify parcel management, delivery tracking, and shipment visibility. It brings a clearer operational flow to a courier workflow by combining service-friendly status tracking with a responsive dashboard structure.",
    category: "Full Stack",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Parcel and shipment tracking workflow",
      "Courier dashboard for order visibility",
      "Delivery status updates and operational flow",
      "Responsive interface for logistics management",
    ],
    image: "/images/projects/sca-courier.svg",
    githubUrl: "https://github.com/URSourovAdikari/sca-courier",
    liveUrl: "https://sca-courier.vercel.app/",
    featured: true,
    year: 2024,
    purpose:
      "Create a practical logistics application that makes parcel operations easier to review, track, and manage across a clean product workflow.",
    solution:
      "I structured the app around a modern courier dashboard, clear shipment details, and a mobile-friendly interface so the core logistics tasks stay readable and easy to use.",
    highlights: [
      "Shipment tracking experience",
      "Operational dashboard layout",
      "Responsive management interface",
      "Practical parcel workflow design",
    ],
    lessons: [
      "Improved my approach to handling logistics-related UI states",
      "Worked on keeping operational data clear and readable",
      "Balanced function and simplicity in a management dashboard",
    ],
    screenshots: ["/images/projects/sca-courier.svg", "/images/projects/sca-courier.svg"],
  },
  {
    id: "sca-shop",
    title: "SCA Shop",
    slug: "sca-shop",
    description:
      "Modern e-commerce storefront built for product browsing, cart flow, and a polished online shopping experience.",
    longDescription:
      "SCA Shop is an e-commerce platform designed around a clean storefront experience with product browsing, cart interactions, and a streamlined ordering flow. It focuses on making product discovery and checkout feel straightforward, responsive, and ready for real-world use.",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB"],
    features: [
      "Product catalog and browsing experience",
      "Shopping cart and checkout flow",
      "Responsive storefront design",
      "Modern storefront experience for online sales",
    ],
    image: "/images/projects/sca-shop.svg",
    githubUrl: "https://github.com/URSourovAdikari/sca-shop",
    liveUrl: "https://sca-shop.vercel.app/",
    featured: true,
    year: 2024,
    purpose:
      "Build a storefront with a strong shopping journey, clean product presentation, and a practical cart and checkout flow.",
    solution:
      "I designed the storefront around responsive product discovery, straightforward purchase steps, and a polished interface that keeps the browsing experience focused and easy to navigate.",
    highlights: [
      "Product-first storefront layout",
      "Cart and checkout UX",
      "Responsive online shopping flow",
      "Clean catalog and product presentation",
    ],
    lessons: [
      "Strengthened my product-detail and cart UX thinking",
      "Improved conversion-friendly interface structure",
      "Focused on maintainable storefront architecture",
    ],
    screenshots: ["/images/projects/sca-shop.svg", "/images/projects/sca-shop.svg"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "E-commerce",
  "Dashboard",
  "Other",
] as const;

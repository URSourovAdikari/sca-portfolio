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
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: number;
  isDemo?: boolean;
};

export const projects: Project[] = [
  {
    id: "sca-courier",
    title: "SCA Courier",
    slug: "sca-courier",
    shortDescription: "Logistics and parcel tracking platform built for quick shipment management.",
    fullDescription:
      "SCA Courier is a full-stack logistics application designed to streamline parcel shipping workflows, status updates, and internal management. It focuses on clean UX, role-friendly order handling, and scalable delivery operations for businesses that need a straightforward courier dashboard.",
    category: "Full Stack",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Order management dashboard",
      "Courier tracking flow",
      "Delivery status updates",
      "Responsive admin experience",
    ],
    image: "/images/projects/sca-courier.svg",
    githubUrl: "",
    liveUrl: "",
    featured: true,
    year: 2024,
  },
  {
    id: "sca-shop",
    title: "SCA Shop",
    slug: "sca-shop",
    shortDescription: "Modern e-commerce storefront for product browsing, cart management, and checkout.",
    fullDescription:
      "SCA Shop is an e-commerce web application focused on delivering a strong shopping experience for modern online stores. It combines responsive product showcases, cart interactions, and a clean storefront architecture that can scale for real-world product catalogs.",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB"],
    features: [
      "Product catalog pages",
      "Shopping cart flow",
      "Checkout experience",
      "Responsive storefront design",
    ],
    image: "/images/projects/sca-shop.svg",
    githubUrl: "",
    liveUrl: "",
    featured: true,
    year: 2024,
  },
  {
    id: "demo-storefront",
    title: "Demo Storefront",
    slug: "demo-storefront",
    shortDescription: "Sample e-commerce experience with product discovery, filters, and promo-driven layouts.",
    fullDescription:
      "This demo storefront is a concept project for a retail brand that needs a premium shopping experience. It includes product filtering, promotional sections, and clean cart interactions for a modern online sales workflow.",
    category: "E-commerce",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Category filtering",
      "Responsive product grid",
      "Promo layout sections",
      "Minimal checkout UX",
    ],
    image: "/images/projects/demo-storefront.svg",
    githubUrl: "",
    liveUrl: "",
    featured: true,
    year: 2025,
    isDemo: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    shortDescription: "Demo SaaS dashboard with data cards, charts, and reporting views.",
    fullDescription:
      "A concept dashboard for product and marketing teams, built to showcase KPI cards, chart layouts, and management panels. The design is tailored for clarity, speed, and operational visibility.",
    category: "Dashboard",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "KPI overview widgets",
      "Performance chart sections",
      "Team activity panels",
      "Admin-friendly layouts",
    ],
    image: "/images/projects/analytics-dashboard.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "saas-portal",
    title: "SaaS Portal",
    slug: "saas-portal",
    shortDescription: "Demo subscription platform for analytics, billing, and product onboarding flows.",
    fullDescription:
      "This project is a demo SaaS portal concept that includes account management, billing awareness, and feature onboarding. It highlights a polished product experience aligned with modern B2B software brands.",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Pricing and plans",
      "User onboarding journey",
      "Analytics overview",
      "Subscription-ready structure",
    ],
    image: "/images/projects/saas-portal.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "auth-flow",
    title: "Auth Flow Studio",
    slug: "auth-flow-studio",
    shortDescription: "Authentication app concept with signup, login, password recovery, and profile states.",
    fullDescription:
      "This concept project focuses on secure and user-friendly authentication patterns. It demonstrates how a product can present sign-up, login, and account recovery actions with a premium, developer-focused UI.",
    category: "Backend",
    technologies: ["Next.js", "Node.js", "Express.js", "Firebase"],
    features: [
      "Login and signup screens",
      "Password reset UX",
      "Session handling patterns",
      "Secure auth structure",
    ],
    image: "/images/projects/auth-flow.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    slug: "blog-cms",
    shortDescription: "Demo content management system for publishing stories and managing articles.",
    fullDescription:
      "This content management project is designed for editorial teams that need a clean workflow to create, edit, and publish articles. It focuses on writing experiences, media handling, and dashboard-friendly administration.",
    category: "Other",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    features: [
      "Article editor",
      "Draft and publish flow",
      "Category tagging",
      "Content management dashboard",
    ],
    image: "/images/projects/blog-cms.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "restaurant-app",
    title: "Restaurant App",
    slug: "restaurant-app",
    shortDescription: "Food ordering and menu experience with category sections and checkout flows.",
    fullDescription:
      "This restaurant concept is built around a modern food ordering experience, including menu browsing, selections, and a streamlined ordering journey for digital storefronts and quick service businesses.",
    category: "Frontend",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    features: [
      "Menu highlighting",
      "Food category browsing",
      "Order summary flow",
      "Responsive customer experience",
    ],
    image: "/images/projects/restaurant-app.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "api-service",
    title: "API Service",
    slug: "api-service",
    shortDescription: "Demo backend application exposing secure endpoints for data operations and records.",
    fullDescription:
      "This demo API service is built to model a backend system with route-based data access, validation, and simple service structure. It highlights clean API design and maintainable backend development patterns.",
    category: "Backend",
    technologies: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    features: [
      "Resource-based routes",
      "Request validation",
      "Error handling patterns",
      "JSON response structure",
    ],
    image: "/images/projects/api-service.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "admin-console",
    title: "Admin Console",
    slug: "admin-console",
    shortDescription: "Operations dashboard for managing users, workflows, and internal reports.",
    fullDescription:
      "A demo admin console concept focused on operations oversight, team activity, and streamlined system actions. It is designed around clarity, accessibility, and practical administrative workflows.",
    category: "Dashboard",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: [
      "User management panels",
      "Operations summary cards",
      "Workflow monitoring",
      "Administrative controls",
    ],
    image: "/images/projects/admin-console.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
  },
  {
    id: "portfolio-project",
    title: "Portfolio Project",
    slug: "portfolio-project",
    shortDescription: "Personal portfolio concept focused on digital presence, storytelling, and case studies.",
    fullDescription:
      "This portfolio concept emphasizes a premium personal brand presence with visually paced sections, project showcases, and recruiter-friendly storytelling. It demonstrates a polished approach to personal portfolios and landing pages.",
    category: "Other",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Story-driven sections",
      "Case study cards",
      "Custom dark aesthetic",
      "Responsive portfolio layout",
    ],
    image: "/images/projects/portfolio-project.svg",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    year: 2025,
    isDemo: true,
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

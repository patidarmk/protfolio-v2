"use client";

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: string;
  date: string;
  excerpt?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Aurora Analytics Dashboard",
    slug: "aurora-analytics-dashboard",
    description:
      "A modern analytics dashboard built with React and TypeScript, featuring real-time charts, custom widgets, and an accessible design system.",
    technologies: ["React", "TypeScript", "Tailwind", "Realtime API"],
    image: "https://picsum.photos/seed/aurora/800/450",
    date: "2024-11-02",
    excerpt:
      "A comprehensive analytics dashboard with drill-down reports and immutable charts, designed for data-driven teams.",
  },
  {
    id: "p2",
    title: "Voyager E-commerce Storefront",
    slug: "voyager-ecommerce-storefront",
    description:
      "A scalable e-commerce frontend with catalog filtering, cart, and checkout flow, optimized for performance and accessibility.",
    technologies: ["Next.js", "Tailwind", "Stripe API"],
    image: "https://picsum.photos/seed/voyager/800/450",
    date: "2024-08-14",
    excerpt:
      "A responsive storefront with robust search, faceted filters, and a polished checkout experience.",
  },
  {
    id: "p3",
    title: "Helix Project Manager",
    slug: "helix-project-manager",
    description:
      "A lightweight project/task manager with kanban boards, drag-and-drop, and collaborative features.",
    technologies: ["React", "Drag & Drop", "WebSocket"],
    image: "https://picsum.photos/seed/helix/800/450",
    date: "2024-04-21",
    excerpt:
      "Organize work with elegant boards, fast filtering, and real-time updates for teams.",
  },
  {
    id: "p4",
    title: "Nebula Portfolio Builder",
    slug: "nebula-portfolio-builder",
    description:
      "A dynamic portfolio builder with templates, live preview, and export options for developers and creators.",
    technologies: ["React", "Tailwind", "CMS API"],
    image: "https://picsum.photos/seed/nebula/800/450",
    date: "2023-12-05",
    excerpt:
      "Create stunning portfolios quickly with component-driven templates and exportable assets.",
  },
  {
    id: "p5",
    title: "Pulse Social Microfeed",
    slug: "pulse-social-microfeed",
    description:
      "A lightweight social microfeed with real-time updates and optimistic UI interactions.",
    technologies: ["React", "WebSocket", "Vite"],
    image: "https://picsum.photos/seed/pulse/800/450",
    date: "2023-09-30",
    excerpt:
      "A fast, minimal social experience focused on speed and delightful micro-interactions.",
  },
  {
    id: "p6",
    title: "Luma Analytics Studio (Demo)",
    slug: "luma-analytics-studio-demo",
    description:
      "An interactive data storytelling tool with charts, annotations, and exporter for presentations.",
    technologies: ["React", "D3", "Canvas"],
    image: "https://picsum.photos/seed/luma/800/450",
    date: "2023-06-18",
    excerpt:
      "A polished, demo-grade analytics studio for data storytelling and exploration.",
  },
  {
    id: "p7",
    title: "Atlas Maps Explorer",
    slug: "atlas-maps-explorer",
    description:
      "A beautiful map explorer with search, markers, and route planning using open data sources.",
    technologies: ["Leaflet", "React", "OpenStreetMap"],
    image: "https://picsum.photos/seed/atlas/800/450",
    date: "2022-11-11",
    excerpt:
      "Explore places with a smooth map experience and delightful UI cues.",
  },
  {
    id: "p8",
    title: "Nimbus CMS (Prototype)",
    slug: "nimbus-cms-prototype",
    description:
      "Prototype CMS with content modeling, versioning, and WYSIWYG editing for rapid content tests.",
    technologies: ["React", "TypeScript", "Markdown"],
    image: "https://picsum.photos/seed/nimbus/800/450",
    date: "2022-03-04",
    excerpt:
      "A lightweight, headless CMS prototype for fast content iteration.",
  },
];

export const categories = ["Frontend", "Data Visualization", "E-commerce", "Tools", "CMS"];
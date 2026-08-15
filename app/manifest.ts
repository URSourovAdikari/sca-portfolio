import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sourov Chandra Adikari | Portfolio",
    short_name: "Sourov Portfolio",
    description: "Full Stack Web Developer portfolio for Sourov Chandra Adikari.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sourovadikari.xyz";
  const routes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/experience",
    "/education",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

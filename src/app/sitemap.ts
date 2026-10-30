import type { MetadataRoute } from "next";
import { seo } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/data-governance", "/quote", "/privacy", "/terms"];
  return routes.map((r) => ({
    url: `${seo.siteUrl}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "/quote" ? 0.9 : 0.5,
  }));
}

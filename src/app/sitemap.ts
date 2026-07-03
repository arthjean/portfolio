import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";

const legalLastModified = "2026-04-04";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/mentions-legales`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/confidentialite`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cgu`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

import { siteConfig } from "@/lib/site.config";

export function getJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.links.email,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.x,
    ],
    knowsAbout: [
      "Next.js",
      "Rust",
      "Tauri",
      "Artificial Intelligence",
      "AI agents",
      "RAG",
      "LLM Engineering",
      "Dev tools",
      "Open source",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return {
    person,
    website,
  };
}

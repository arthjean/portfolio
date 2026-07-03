import { projects, siteConfig } from "@/lib/site.config";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getJsonLd() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const profilePageId = `${siteConfig.url}/#profile`;

  const projectNodes = projects.map((project) => {
    const isSourceCode = project.url?.includes("github.com") ?? false;
    const projectId = `${siteConfig.url}/#project-${slugify(project.title)}`;

    return {
      "@type": isSourceCode ? "SoftwareSourceCode" : "CreativeWork",
      "@id": projectId,
      name: project.title,
      description: project.description,
      ...(project.url ? { url: project.url } : {}),
      keywords: project.tags,
      creator: {
        "@id": personId,
      },
      dateModified: siteConfig.lastModified,
      inLanguage: siteConfig.language,
    };
  });

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.links.email,
    homeLocation: {
      "@type": "Place",
      name: "France",
    },
    mainEntityOfPage: {
      "@id": profilePageId,
    },
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
    subjectOf: projectNodes.map((project) => ({
      "@id": project["@id"],
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": personId,
    },
    about: {
      "@id": personId,
    },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": profilePageId,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    dateModified: siteConfig.lastModified,
    isPartOf: {
      "@id": websiteId,
    },
    mainEntity: {
      "@id": personId,
    },
    mentions: projectNodes.map((project) => ({
      "@id": project["@id"],
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, ...projectNodes],
  };

  return {
    graph,
    person,
    website,
    profilePage,
    projects: projectNodes,
  };
}

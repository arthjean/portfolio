import {
  aiSkills,
  devTools,
  mainStack,
  projects,
  siteConfig,
} from "./site.config";

export function buildHomepageMarkdown(): string {
  const stackList = mainStack
    .map((s) => `- **${s.name}** (${s.category})`)
    .join("\n");
  const toolsList = devTools
    .map((t) => `- **${t.name}** (${t.category})`)
    .join("\n");
  const aiList = aiSkills
    .map((s) => `- **${s.name}** : ${s.description}`)
    .join("\n");
  const projectList = projects
    .map((p) => {
      const label = p.url ? `[${p.title}](${p.url})` : p.title;
      return `- ${label} : ${p.description}`;
    })
    .join("\n");

  return `# ${siteConfig.name}

> ${siteConfig.description}

Creator and software engineer based in France. I build developer tools for the new way of coding, with a focus on Paneflow, Pyxis, and agent-native workflows.

## Projects

${projectList}

## Canonical resources

- [Homepage](${siteConfig.url}): Main profile page for Arthur Jean.
- [Sitemap](${siteConfig.url}/sitemap.xml): Canonical URL inventory.
- [Robots policy](${siteConfig.url}/robots.txt): Search and AI crawler preferences.

## Tech stack

${stackList}

## Tools and platforms

${toolsList}

## AI skills

${aiList}

## Contact

- Site : ${siteConfig.url}
- Email : ${siteConfig.links.email}
- LinkedIn : ${siteConfig.links.linkedin}
- GitHub : ${siteConfig.links.github}
- X : ${siteConfig.links.x}
`;
}

export function estimateTokens(content: string): number {
  return Math.ceil(content.length / 4);
}

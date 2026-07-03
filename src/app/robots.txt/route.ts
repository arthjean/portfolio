import { siteConfig } from "@/lib/site.config";

const SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
];

const TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "CCBot",
  "Bytespider",
];

const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=no";

export function GET() {
  const blocks = [
    `User-agent: *\nContent-Signal: ${CONTENT_SIGNAL}\nAllow: /`,
    ...SEARCH_BOTS.map(
      (bot) =>
        `User-agent: ${bot}\nContent-Signal: ${CONTENT_SIGNAL}\nAllow: /`,
    ),
    ...TRAINING_BOTS.map(
      (bot) =>
        `User-agent: ${bot}\nContent-Signal: ${CONTENT_SIGNAL}\nDisallow: /`,
    ),
  ];

  const body = `${blocks.join("\n\n")}\n\nSitemap: ${siteConfig.url}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

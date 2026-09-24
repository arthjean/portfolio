import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components";
import { PostList } from "@/components/blog/PostList";
import { BackLink } from "@/components/ui/BackLink";
import { getPublishedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site.config";

const title = "Writing";
const description = `Technical notes by ${siteConfig.name} on developer tools, coding agents, and the systems behind them.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <SiteShell header={<BackLink href="/" label="Home" />}>
      <section aria-labelledby="blog-heading">
        <h1 id="blog-heading" className="text-fg mb-1 font-[550]">
          {title}
        </h1>
        <p className="text-fg-muted mb-8 text-pretty">{description}</p>

        {posts.length === 0 ? (
          <p className="text-fg-muted">
            Nothing published yet. New posts land in the{" "}
            <Link href="/rss.xml" prefetch={false} className="prose-link">
              RSS feed
            </Link>{" "}
            first.
          </p>
        ) : (
          <PostList posts={posts} />
        )}
      </section>
    </SiteShell>
  );
}

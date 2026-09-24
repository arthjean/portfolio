import Link from "next/link";

import { Tile } from "@/components/ui/Tile";
import { formatPostDate, type Post } from "@/lib/blog";

/* A page in miniature: three ruled lines at the lengths of a heading and two
   lines of text. Decorative, it only gives every row the same leading edge. */
function PageGlyph() {
  return (
    <span className="flex h-full w-full flex-col justify-start gap-1 p-1">
      <span className="bg-line mt-0.5 h-[3px] w-3 rounded-full" />
      <span className="bg-line mt-1 h-[3px] w-5 rounded-full" />
      <span className="bg-line h-[3px] w-4 rounded-full" />
    </span>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="hover:bg-surface-hover -mx-2.5 flex items-center gap-3 rounded-[18px] p-2.5"
          >
            <Tile className="h-12 w-10">
              <PageGlyph />
            </Tile>

            <span className="flex min-w-0 flex-col">
              <span className="text-fg font-[450] text-pretty">
                {post.meta.title}
              </span>
              <span className="text-fg-muted">
                <time dateTime={post.meta.publishedAt}>
                  {formatPostDate(post.meta.publishedAt)}
                </time>
                {" · "}
                {post.readingTimeMinutes} min read
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

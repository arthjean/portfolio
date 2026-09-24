import { PostList } from "@/components/blog/PostList";
import type { Post } from "@/lib/blog";

export function WritingSection({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section
      id="writing"
      className="mt-16 sm:mt-24"
      aria-labelledby="writing-heading"
    >
      <h2 id="writing-heading" className="text-fg mb-3 font-medium">
        Writing
      </h2>

      <PostList posts={posts} />
    </section>
  );
}

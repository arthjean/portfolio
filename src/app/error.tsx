"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-[calc(var(--measure)+3rem)] px-6 py-24 sm:py-32"
    >
      <h1 className="text-fg font-[550]">This page failed to load</h1>
      <p className="text-fg-muted mt-1 text-pretty">
        Try loading it again. If it keeps failing, the homepage still works.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={reset} className="rounded-full px-4">
          Try again
        </Button>
        <Button
          variant="outline"
          render={<Link href="/" />}
          className="rounded-full px-4"
        >
          Go to homepage
        </Button>
      </div>
    </main>
  );
}

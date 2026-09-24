"use client";

import { CheckIcon, LinkIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* Copies the page address without its fragment, so a reader halfway down an
   article shares the article rather than the section they happen to be in. */
export function CopyLinkButton() {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = () => {
    if (!navigator.clipboard?.writeText) return;

    const { origin, pathname } = window.location;
    navigator.clipboard.writeText(`${origin}${pathname}`).then(() => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsCopied(true);
      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        timeoutRef.current = null;
      }, 2000);
    }, console.error);
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="icon-button"
        aria-label="Copy link to this post"
      >
        <span className="icon-swap" data-state={isCopied ? "b" : "a"}>
          <span className="icon-swap-glyph">
            <LinkIcon aria-hidden="true" size={15} strokeWidth={1.75} />
          </span>
          <span className="icon-swap-glyph text-available">
            <CheckIcon aria-hidden="true" size={16} strokeWidth={2} />
          </span>
        </span>
      </button>
      <output className="sr-only">{isCopied ? "Link copied" : ""}</output>
    </>
  );
}

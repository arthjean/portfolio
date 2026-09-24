import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/* A framed thumbnail: a hairline ring around a bordered inner plate. The radii
   are concentric, 8px outside, 2px of padding, 6px inside, and a list row that
   hosts one pads it by 10px to reach its own 18px corner. Always decorative:
   the row beside it carries the name. */
export function Tile({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      aria-hidden="true"
      className="bg-canvas shadow-ring flex shrink-0 rounded-lg p-0.5"
    >
      <span
        className={cn(
          "border-line bg-surface relative flex items-center justify-center overflow-hidden rounded-md border",
          className,
        )}
      >
        {children}
      </span>
    </span>
  );
}

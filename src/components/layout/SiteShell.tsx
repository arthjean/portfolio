import type { ReactNode } from "react";

import { FooterSection } from "@/components/sections/FooterSection";

/* One centered column for every route: the home page, the writing index, an
   article and the legal pages all read at the same measure. Chrome is limited
   to what a page needs above its content, a way back and at most one action,
   and the footer below it. */
export function SiteShell({
  header,
  children,
}: {
  header?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[calc(var(--measure)+3rem)] px-6 pt-12 pb-16 sm:pt-24 sm:pb-24">
      {header && (
        <header className="mb-16 flex min-h-9 items-center justify-between gap-2 sm:mb-24">
          {header}
        </header>
      )}

      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>

      <FooterSection />
    </div>
  );
}

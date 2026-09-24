import Link from "next/link";

import { LocalTime } from "@/components/ui/LocalTime";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/site.config";

const legalLinks = [
  { href: "/mentions-legales", label: "Legal" },
  { href: "/confidentialite", label: "Privacy" },
  { href: "/cgu", label: "Terms" },
];

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 sm:mt-32">
      <div className="flex items-end justify-between gap-4">
        {/* A signature, not a heading: the name is already the page's first
            line, so assistive technology skips the flourish. */}
        <p
          aria-hidden="true"
          className="font-signature text-fg text-5xl leading-none"
        >
          {siteConfig.name}
        </p>
        <ThemeToggle />
      </div>

      <div className="text-fg-muted mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <p>
            © {year} {siteConfig.company}
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-fg inline-block py-1 transition-colors duration-150 ease-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p>
          {siteConfig.location}, <LocalTime />
        </p>
      </div>
    </footer>
  );
}

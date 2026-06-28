import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "X", href: siteConfig.links.x },
  { label: "Email", href: `mailto:${siteConfig.links.email}` },
];

export function HeroSection() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-avatar">
        <Image
          src="/images/avatar.webp"
          alt={siteConfig.name}
          fill
          sizes="64px"
          className="object-cover"
          priority
        />
      </div>

      <div>
        <p className="hero-kicker">{siteConfig.role}</p>
        <h1 id="hero-heading" className="hero-title">
          I use my software engineering experience and creativity to build the
          tools developers need when the way we code changes.
        </h1>
        <p className="hero-copy">
          Right now, I'm focused on building and distributing{" "}
          <a
            href="https://paneflow.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-link"
          >
            Paneflow
          </a>
          . I want it to become the first cross-platform alternative to Cmux,
          with new capabilities designed for AI power users like me.
        </p>
      </div>

      <nav className="link-row" aria-label="Primary links">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
}

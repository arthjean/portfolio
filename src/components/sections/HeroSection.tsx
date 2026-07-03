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
      <div className="hero-intro">
        <div className="hero-text">
          <p className="hero-kicker">{siteConfig.role}</p>
          <h1 id="hero-heading" className="hero-title">
            I build developer tools for the new way of coding.
          </h1>
        </div>

        <div className="hero-avatar">
          <Image
            src="/images/avatar.png"
            alt={siteConfig.name}
            fill
            sizes="(max-width: 560px) 84px, 112px"
            className="object-cover"
            priority
          />
        </div>
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

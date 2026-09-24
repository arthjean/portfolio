import { Mail } from "lucide-react";
import Image from "next/image";

import { GithubIcon } from "@/components/ui/brand-icons";
import { siteConfig } from "@/lib/site.config";

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

const inlineIcon = "mr-1 inline-block size-3.5 align-[-0.125em]";

function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

const xHandle = `@${new URL(siteConfig.links.x).pathname.slice(1)}`;

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="mb-6 flex items-center gap-3">
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.profileImageAlt}
          width={44}
          height={44}
          priority
          className="size-11 shrink-0 rounded-full object-cover outline-1 -outline-offset-1 outline-[color:var(--image-outline)]"
        />

        <div className="flex min-w-0 flex-col">
          <h1 id="hero-heading" className="text-fg leading-snug font-medium">
            {siteConfig.name}
          </h1>
          <p className="text-fg-muted leading-snug font-[450]">
            {siteConfig.role}, founder of {siteConfig.company}
          </p>
        </div>
      </div>

      <p className="text-fg-muted mb-4 text-pretty">
        I build developer tools for the{" "}
        <em className="font-serif text-[1.125em] leading-none">new</em> way of
        coding. Right now that means{" "}
        <a
          href="https://paneflow.dev"
          className="prose-link whitespace-nowrap"
          {...newTab}
        >
          <Image
            src="/images/projects/paneflow.png"
            alt=""
            width={14}
            height={14}
            className={inlineIcon}
          />
          Paneflow
          <NewTabHint />
        </a>
        , a native workspace for running coding agents in parallel. Most of what
        I build is open source.
      </p>

      <p className="text-fg-muted text-pretty">
        Before that, I was the sole developer on my team at{" "}
        <a
          href="https://www.avancial.com/"
          className="prose-link whitespace-nowrap"
          {...newTab}
        >
          <Image
            src="/images/avancial-logo.png"
            alt=""
            width={14}
            height={14}
            className={`${inlineIcon} object-contain`}
          />
          Avancial
          <NewTabHint />
        </a>
        , the IT subsidiary of SNCF Group. You can reach me at{" "}
        <a href={siteConfig.links.x} className="prose-link" {...newTab}>
          {xHandle}
          <NewTabHint />
        </a>
        , on{" "}
        <a href={siteConfig.links.linkedin} className="prose-link" {...newTab}>
          LinkedIn
          <NewTabHint />
        </a>{" "}
        or via{" "}
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="prose-link whitespace-nowrap"
        >
          <Mail aria-hidden="true" strokeWidth={2} className={inlineIcon} />
          email
        </a>
        , and see my code on{" "}
        <a
          href={siteConfig.links.github}
          className="prose-link whitespace-nowrap"
          {...newTab}
        >
          <GithubIcon className={inlineIcon} />
          GitHub
          <NewTabHint />
        </a>
        .
      </p>
    </section>
  );
}

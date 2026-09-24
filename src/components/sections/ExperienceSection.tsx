"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

import { StrivexIcon } from "@/components/ui/brand-icons";
import { Tile } from "@/components/ui/Tile";
import type { Experience, ExperienceRole } from "@/lib/site.config";
import { experiences } from "@/lib/site.config";
import { cn } from "@/lib/utils";

function CompanyMark({ logo }: { logo: Experience["logo"] }) {
  if (logo === "strivex") {
    return <StrivexIcon size={18} className="text-fg" />;
  }

  return (
    <Image
      src="/images/avancial-logo.png"
      alt=""
      width={20}
      height={20}
      className="size-5 object-contain"
    />
  );
}

/* The row is the disclosure: company and title stay visible, the contract
   details and highlights open underneath, aligned on the text column. */
function RoleRow({
  experience,
  role,
}: {
  experience: Experience;
  role: ExperienceRole;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <li>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((open) => !open)}
        className="hover:bg-surface-hover -mx-2.5 flex w-[calc(100%+1.25rem)] cursor-pointer items-center gap-3 rounded-[18px] p-2.5 text-start"
      >
        <Tile className="size-10">
          <CompanyMark logo={experience.logo} />
        </Tile>

        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-fg font-[450]">{experience.company}</span>
          <span className="text-fg-muted text-pretty">{role.title}</span>
        </span>

        <span className="text-fg-muted hidden shrink-0 text-sm tabular-nums sm:block">
          {role.period}
        </span>

        <ChevronDown
          aria-hidden="true"
          size={16}
          strokeWidth={1.75}
          className={cn(
            "text-fg-faint shrink-0 transition-transform duration-200 ease-out motion-reduce:transition-none",
            expanded && "-rotate-180",
          )}
        />
      </button>

      <div
        id={panelId}
        inert={!expanded}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="ps-14 pt-1 pb-4">
            <p className="text-fg-muted text-sm">
              {role.contract} · {role.period} · {role.duration} · {role.setup},{" "}
              {experience.location}
            </p>

            <ul className="mt-3 space-y-2">
              {role.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-fg-body relative ps-4 text-pretty"
                >
                  <span
                    aria-hidden="true"
                    className="bg-line-strong absolute start-0 top-[0.8125em] h-px w-2"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mt-16 sm:mt-24"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="text-fg mb-3 font-medium">
        Experience
      </h2>

      <ul className="flex flex-col gap-1">
        {experiences.flatMap((experience) =>
          experience.roles.map((role) => (
            <RoleRow
              key={`${experience.company}-${role.title}`}
              experience={experience}
              role={role}
            />
          )),
        )}
      </ul>
    </section>
  );
}

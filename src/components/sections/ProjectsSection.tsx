import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { type Project, projects } from "@/lib/site.config";
import { cn } from "@/lib/utils";

/* The real mark when the project has one. Without it the name itself becomes
   the mark, set like a command, with the prompt in the faint tone. */
function ProjectMark({ project }: { project: Project }) {
  const { logo } = project;

  if (!logo) {
    return (
      <span className="text-fg font-mono text-2xl font-medium tracking-tight">
        <span className="text-fg-faint">›</span> {project.title.toLowerCase()}
      </span>
    );
  }

  return (
    <>
      <Image
        src={logo.src}
        alt=""
        width={48}
        height={48}
        className={cn("size-12 object-contain", logo.darkSrc && "dark:hidden")}
      />
      {logo.darkSrc && (
        <Image
          src={logo.darkSrc}
          alt=""
          width={48}
          height={48}
          className="hidden size-12 object-contain dark:block"
        />
      )}
    </>
  );
}

/* Two nested frames: the outer ring lifts the card off the page, the inner
   bordered plate holds the content. 16px outside, 4px of padding, 12px inside,
   so the corners stay concentric. */
function ProjectCard({ project }: { project: Project }) {
  const plate = (
    <div className="border-line bg-surface flex w-full flex-col rounded-xl border">
      <div
        aria-hidden="true"
        className="flex h-36 items-center justify-center sm:h-40"
      >
        <ProjectMark project={project} />
      </div>

      <div className="flex flex-col px-4 pb-4">
        <span className="flex items-center justify-between gap-2">
          <span className="text-fg font-[450]">{project.title}</span>
          {project.url && (
            <ArrowUpRight
              aria-hidden="true"
              size={16}
              strokeWidth={1.75}
              className="text-fg-faint shrink-0 -translate-x-0.5 scale-75 opacity-0 transition-[opacity,translate,scale] duration-150 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:translate-x-0 motion-reduce:scale-100"
            />
          )}
        </span>
        <span className="text-fg-muted text-pretty">{project.description}</span>
      </div>
    </div>
  );

  const frame = "shadow-ring flex h-full rounded-2xl p-1";

  if (!project.url) return <div className={frame}>{plate}</div>;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        frame,
        "group hover:shadow-ring-hover transition-shadow duration-150 ease-out",
      )}
    >
      {plate}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-16 sm:mt-32"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="text-fg mb-5 font-medium">
        Projects
      </h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className={cn(project.featured && "sm:col-span-2")}
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

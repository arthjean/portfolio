import { Link2 } from "lucide-react";
import { projects } from "@/lib/site.config";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <p className="list-title">Things I've built</p>
      <h2 id="projects-heading" className="sr-only">
        Products
      </h2>

      <ul className="work-list">
        {projects.map((project) => {
          const content = (
            <>
              <span className="work-title">
                {project.title}
                {project.url && (
                  <Link2
                    aria-hidden="true"
                    className="work-icon"
                    size={13}
                    strokeWidth={1.7}
                  />
                )}
              </span>
              <span className="work-desc">{project.description}</span>
            </>
          );

          if (project.url) {
            return (
              <li key={project.title}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-link"
                >
                  {content}
                </a>
              </li>
            );
          }

          return (
            <li key={project.title} className="work-link">
              {content}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

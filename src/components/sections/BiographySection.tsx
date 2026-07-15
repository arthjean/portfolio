export function BiographySection() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <p className="list-title">About</p>
      <h2 id="about-heading" className="sr-only">
        Biography
      </h2>

      <div className="bio-body">
        <p>
          I&apos;m a creator and software engineer based in France. I build
          tools for developers, software engineers, and AI engineers, with a
          simple conviction: the way we write software is changing, and our
          working environments need to change with it.
        </p>

        <p>
          I learned software development through a work-study program at{" "}
          <a
            href="https://www.avancial.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="copy-link"
          >
            Avancial
          </a>
          , an information systems subsidiary of SNCF Group focused on data,
          testing, application monitoring, and user support. In that
          environment, I was the only developer. I built an internal Gantt
          system for the teams, an enterprise framework, UI components, an
          Angular boilerplate, and a platform to automate commits, pushes, and
          deployments to an Azure VM running Bonobo Git, in a spirit close to
          Vercel but adapted to an internal enterprise environment.
        </p>

        <p>
          That period taught me how to build alone, understand business needs,
          ship tools used in production, and think of software as work
          infrastructure, not just an interface or a collection of features.
        </p>

        <p>
          I started integrating AI into my work when ChatGPT and GitHub Copilot
          arrived, before gradually moving to Cursor, Claude Code, Codex, and
          more agentic workflows. I code less and less line by line. I design
          systems, write specs, orchestrate agents, review, make decisions, and
          iterate from real usage.
        </p>

        <p>
          Since 2025, I&apos;ve focused my work on creating an ecosystem of
          tools for developers in the age of AI agents. At the center is{" "}
          <a
            href="https://paneflow.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="copy-link"
          >
            Paneflow
          </a>
          : an open-source workspace for running multiple coding agents in
          parallel. In parallel, I&apos;m developing{" "}
          <a
            href="https://github.com/ArthurDEV44/pyxis"
            target="_blank"
            rel="noopener noreferrer"
            className="copy-link"
          >
            Pyxis
          </a>
          , a multi-provider CLI in Rust, with the ambition of offering a fast,
          portable agentic coding experience that connects natively with
          Paneflow.
        </p>

        <p>
          My goal is not to add one more interface around agents. I want to
          rebuild the working layer itself: the terminal, the CLI, and the
          orchestration layer, to give developers an environment adapted to what
          is coming. Less a sequence of isolated commands. More a coherent
          system for working with agents, contexts, long-running sessions, and
          production workflows.
        </p>
      </div>
    </section>
  );
}

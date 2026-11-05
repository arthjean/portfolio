const para = "text-fg-body mb-4 last:mb-0";

export function BiographySection() {
  return (
    <section
      id="about"
      className="mt-16 sm:mt-24"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="text-fg mb-3 font-medium">
        About
      </h2>

      <p className={para}>
        I&apos;m an independent software engineer based in Nantes, France.
      </p>

      <p className={para}>
        I cut my teeth at{" "}
        <a
          href="https://www.avancial.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="prose-link"
        >
          Avancial
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        , the SNCF Group subsidiary (France&apos;s national railway) that tests
        its software, monitors its applications, and supports its users. For two
        years, I was the only developer on my team, with a simple mission: build
        the internal tools the teams needed.
      </p>

      <p className={para}>
        For the testers, that meant a travel booking generator to simulate their
        scenarios, real-time incident tracking, and a library of every train
        station in France. Several of these tools replaced paid software. To tie
        it all together, I built a portal with a single sign-on for every
        application, and a platform that deployed them automatically: basically
        Vercel, inside a locked-down enterprise network.
      </p>

      <p className={para}>
        It wasn&apos;t easy, but I learned a lot there, and it was a good
        experience.
      </p>

      <p className={para}>
        I&apos;ve used AI since GPT-3, two years before ChatGPT, and the way I
        work has kept evolving at the pace of the AI labs. I closely follow what
        ships in AI, in software, and in tech in general.
      </p>

      <p className={para}>
        I always build software I need, and I use it every day. Paneflow, Rust
        Doctor, Cerata, and neo-compute all started that way.
      </p>

      <p className={para}>
        Often, the need comes from a gap. New developer tools almost always ship
        on Mac first, and on Windows and Linux, you have to wait. So I build the
        ones I&apos;m missing, for all three platforms from day one. For each
        new project, I start from a blank page. There are so many possible
        approaches that the obvious one is rarely the best. Finding the one that
        actually moves things forward is what I enjoy most about this work.
      </p>

      <p className={para}>
        I believe there&apos;s nothing better than software built and maintained
        by someone who uses it every day: I&apos;m the first to see every flaw
        and every limitation.
      </p>

      <p className={para}>
        Outside of code, I&apos;m married and a dad to twin girls, a little
        Staffie, and a cat.
      </p>
    </section>
  );
}

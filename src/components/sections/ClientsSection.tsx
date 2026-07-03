"use client";

import { ArrowUpRight } from "lucide-react";
import { clients } from "@/lib/site.config";

export function ClientsSection() {
  return (
    <section id="clients" className="section" aria-labelledby="clients-heading">
      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          02 / Work
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <h2
            id="clients-heading"
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 720,
            }}
          >
            Client{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
              work
            </span>
            .
          </h2>
          <p
            className="font-mono"
            style={{
              fontSize: 12,
              color: "var(--fg-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              margin: 0,
            }}
          >
            {String(clients.length).padStart(2, "0")} sites
          </p>
        </div>
      </div>

      <div className="proj-index reveal">
        {clients.map((c, i) => {
          const content = (
            <>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="title">
                {c.title}
                <span className="desc">{c.description}</span>
              </span>
              <span className="meta">{c.year}</span>
              <span className="arrow">
                {c.url ? <ArrowUpRight size={14} strokeWidth={1.5} /> : null}
              </span>
            </>
          );

          if (c.url) {
            return (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-row"
              >
                {content}
              </a>
            );
          }
          return (
            <article key={c.title} className="proj-row">
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}

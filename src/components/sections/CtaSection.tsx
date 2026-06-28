"use client";

import { ArrowRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site.config";

export function CtaSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable, silently ignore
    }
  };

  return (
    <section className="cta-freestyle reveal" aria-labelledby="cta-heading">
      <div className="cta-mesh cta-mesh-1" aria-hidden="true" />
      <div className="cta-mesh cta-mesh-2" aria-hidden="true" />
      <div className="cta-mesh cta-mesh-3" aria-hidden="true" />
      <div className="cta-grain" aria-hidden="true" />

      <div className="cta-inner">
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          <span className="available-dot" /> Available · April 2026
        </div>
        <h2 id="cta-heading" className="font-serif cta-title">
          Build{" "}
          <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
            something
          </span>{" "}
          ?
        </h2>
        <p className="cta-sub">
          30 minutes to frame the need. No sales pitch, just an honest technical
          conversation.
        </p>
        <div style={{ display: "inline-flex", gap: 8, flexWrap: "wrap" }}>
          <a
            className="dbtn dbtn-primary"
            href={siteConfig.links.cal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call <ArrowRight size={14} strokeWidth={1.5} />
          </a>
          <button type="button" className="dbtn" onClick={copy}>
            {copied ? (
              <>
                <Check size={13} strokeWidth={2} /> Copied
              </>
            ) : (
              <>
                <Copy size={13} strokeWidth={1.5} /> {siteConfig.links.email}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

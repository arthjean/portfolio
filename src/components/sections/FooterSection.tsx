import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="section-meta">
          © {year} {siteConfig.name} · Built from France
        </div>
        <nav className="footer-links" aria-label="Legal links">
          <Link className="ink-link font-mono" href="/mentions-legales">
            Legal
          </Link>
          <Link className="ink-link font-mono" href="/confidentialite">
            Privacy
          </Link>
          <Link className="ink-link font-mono" href="/cgu">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}

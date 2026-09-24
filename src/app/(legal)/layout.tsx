import { SiteShell } from "@/components";
import { BackLink } from "@/components/ui/BackLink";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteShell header={<BackLink href="/" label="Home" />}>
      <article className="legal-article">{children}</article>
    </SiteShell>
  );
}

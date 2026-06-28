import { FooterSection, NavbarSection } from "@/components";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarSection />
      <main id="main-content" tabIndex={-1} className="legal-main">
        <article className="legal-article">{children}</article>
      </main>
      <FooterSection />
    </>
  );
}

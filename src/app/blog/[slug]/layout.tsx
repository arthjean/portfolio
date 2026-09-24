import { SiteShell } from "@/components";
import { BackLink } from "@/components/ui/BackLink";
import { CopyLinkButton } from "@/components/ui/CopyLinkButton";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteShell
      header={
        <>
          <BackLink href="/blog" label="All posts" />
          <CopyLinkButton />
        </>
      }
    >
      {children}
    </SiteShell>
  );
}

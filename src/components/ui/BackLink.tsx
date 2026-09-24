import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} aria-label={label} className="icon-button">
      <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.75} />
    </Link>
  );
}

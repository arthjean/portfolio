import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function NavbarSection() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <a href="#hero" className="nav-brand">
        Arthur Jean
      </a>
      <div className="nav-links">
        <ThemeToggle />
      </div>
    </nav>
  );
}

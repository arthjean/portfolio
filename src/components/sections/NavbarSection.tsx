import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function NavbarSection() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a href="/" className="nav-brand">
        Arthur Jean
      </a>
      <div className="nav-links">
        <ThemeToggle />
      </div>
    </nav>
  );
}

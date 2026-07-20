import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "card" | "interactive";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
  glowLine?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles = {
  default: "bg-card/72 backdrop-blur-lg border-border/70",
  card: "bg-card/84 backdrop-blur-2xl border-border shadow-[inset_0_1px_0_0_var(--glass-highlight)]",
  interactive:
    "bg-card/84 backdrop-blur-2xl border-border hover:bg-secondary hover:border-ring/40 transition-[background-color,border-color] duration-300",
};

const roundedStyles = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export function GlassCard({
  children,
  variant = "default",
  rounded = "2xl",
  glowLine = false,
  className,
  style,
  as: Component = "div",
  href,
  target,
  rel,
  ...props
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "relative border",
        variantStyles[variant],
        roundedStyles[rounded],
        className,
      )}
      style={style}
      href={href}
      target={target}
      rel={rel}
      {...props}
    >
      {/* Glow line */}
      {glowLine && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      )}

      {/* Rim light (top highlight) */}
      {variant === "card" && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/16 to-transparent rounded-t-2xl" />
      )}

      {children}
    </Component>
  );
}

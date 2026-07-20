/**
 * Design Tokens - Arthur Jean Portfolio
 * Centralized design system tokens for consistent styling
 */

// Colors
export const colors = {
  background: "oklch(0.9439 0.0077 48.7)",
  foreground: "oklch(0.2234 0.0779 267.9)",
  primary: "oklch(0.2234 0.0779 267.9)",
  accent: "oklch(0.4232 0.1398 270.7)",
  surface: "oklch(0.8821 0.0218 316.5)",
  muted: "oklch(0.4073 0.0536 271.4)",
  secondary: "oklch(0.9233 0.0102 345.4)",
  destructive: "oklch(0.505 0.195 25)",
  dark: {
    background: "oklch(0.2234 0.0779 267.9)",
    foreground: "oklch(0.9439 0.0077 48.7)",
    primary: "oklch(0.9439 0.0077 48.7)",
    accent: "oklch(0.76 0.1 270.7)",
    surface: "oklch(0.2852 0.072 272)",
    muted: "oklch(0.8249 0.0343 300.8)",
    secondary: "oklch(0.244 0.075 269)",
    destructive: "oklch(0.704 0.18 22)",
  },
  // WebGL expects hexadecimal colors, so these mirror the OKLCH light palette.
  heroGradient: ["#f1ebe8", "#ebe3e7", "#ded4e2", "#334499"],
} as const;

// Spacing
export const spacing = {
  section: {
    default: "py-16 sm:py-20 md:py-24 lg:py-28",
    compact: "py-12 sm:py-16",
    heroTop: "pt-24 lg:pt-44",
    heroBottom: "pb-20 lg:pb-28",
  },
  sectionHeader: {
    default: "mb-16 sm:mb-24",
    compact: "mb-12 sm:mb-16",
  },
} as const;

// Layout
export const layout = {
  container: {
    default: "max-w-[1200px] mx-auto",
    narrow: "max-w-4xl mx-auto",
  },
  padding: {
    section: "px-4 sm:px-6",
    sectionLg: "px-4 sm:px-6 lg:px-8",
  },
} as const;

// Animation
export const animation = {
  duration: {
    instant: 100,
    fast: 200,
    default: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    default: "easeOut" as const,
    spring: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
  spring: {
    default: { type: "spring" as const, stiffness: 100, damping: 20 },
    snappy: { type: "spring" as const, stiffness: 300, damping: 30 },
    bouncy: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
  stagger: {
    fast: 0.05,
    default: 0.1,
    slow: 0.15,
  },
} as const;

// Z-Index
export const zIndex = {
  behind: -20,
  background: 0,
  content: 10,
  overlay: 20,
  navbar: 50,
  mobileBackdrop: 60,
  mobileMenu: 70,
} as const;

// Shadows & Glow
export const shadows = {
  glow: {
    accent: "0 0 15px oklch(0.4232 0.1398 270.7 / 0.28)",
    neutral: "0 0 40px -10px oklch(0.9439 0.0077 48.7 / 0.24)",
  },
  glass: "inset 0 1px 0 0 oklch(0.9439 0.0077 48.7 / 0.1)",
} as const;

// Utility Classes
export const classes = {
  glassCard: "bg-card/84 backdrop-blur-2xl border border-border",
  glowLine:
    "bg-gradient-to-r from-transparent via-foreground/30 to-transparent",
  textGradient: "bg-clip-text text-transparent",
  focusRing:
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
} as const;

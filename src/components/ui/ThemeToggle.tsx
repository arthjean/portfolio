"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" size={16} strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" size={15} strokeWidth={1.75} />
      )}
    </button>
  );
}

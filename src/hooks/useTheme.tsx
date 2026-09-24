"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const STORAGE_KEY = "theme";
const SYNC_EVENT = "theme-change";

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

/* The stored theme is the store: every subscriber re-reads it on notification
   rather than being handed a copy, so no two readers can disagree. */
function subscribe(onChange: () => void): () => void {
  window.addEventListener(SYNC_EVENT, onChange);
  return () => window.removeEventListener(SYNC_EVENT, onChange);
}

function getSnapshot(): Theme {
  return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

/* The server has no storage to read; light is what the markup ships with, and
   the first client snapshot corrects it. */
function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("dark") === (theme === "dark")) return;

    /* Every color transition on the page would fire at once and smear the
       switch; pause them for the swap, force a style flush, then let them back
       in on the next frame. */
    const pause = document.createElement("style");
    pause.textContent = "*,*::before,*::after{transition:none!important}";
    document.head.append(pause);
    root.classList.toggle("dark", theme === "dark");
    void getComputedStyle(root).color;
    requestAnimationFrame(() => pause.remove());
  }, [theme]);

  const toggleTheme = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, theme === "light" ? "dark" : "light");
    window.dispatchEvent(new Event(SYNC_EVENT));
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

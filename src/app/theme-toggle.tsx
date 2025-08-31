// app/theme-toggle.tsx
"use client";
import { useEffect, useState } from "react";

const THEMES = ["antdesign", "materialdesign", "atlassian", "orbit", "starbucks"] as const;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"antdesign" | "materialdesign" | "atlassian" | "orbit" | "starbucks">("antdesign");

  // On mount, sync the theme state with the DOM to avoid hydration mismatch
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") as (typeof THEMES)[number] | null;
    if (currentTheme && THEMES.includes(currentTheme)) {
      setTheme(currentTheme);
    }
  }, []);

  // When theme state changes, update the DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-6 right-6 z-50 rounded-[var(--radius-md)] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-3 shadow-lg">
      <label className="mr-2 text-[rgb(var(--text))] text-sm">테마:</label>
      <select
        className="rounded-[var(--radius-sm)] border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-2 py-1 text-[rgb(var(--text))] text-sm"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}

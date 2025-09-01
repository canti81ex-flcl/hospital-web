// app/theme-toggle.tsx
"use client";
import { useEffect, useState } from "react";

const THEMES = [
  "antdesign-enterprise", "material-healthcare", "atlassian-teamwork", "orbit-travel", "starbucks-care", 
  "apple-clean", "twitch-community", "netflix-impact", "stripe-clarity", "instagram-care-stories", 
  "dropbox-simple", "microsoft-access", "ibm-trust"
] as const;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<(typeof THEMES)[number]>("antdesign-enterprise");

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
    <div className="fixed top-[var(--spacing-6)] right-[var(--spacing-6)] z-50 rounded-[var(--card-radius)] border border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-elevated))] p-[var(--spacing-3)] shadow-[var(--card-shadow)]">
      <label className="mr-[var(--spacing-2)] text-[rgb(var(--fg-primary))] text-[var(--font-size-sm)]">테마:</label>
      <select
        className="rounded-[var(--input-radius)] border border-[rgb(var(--input-border))] bg-[rgb(var(--input-bg))] px-[var(--spacing-2)] py-[var(--spacing-1)] text-[rgb(var(--input-fg))] text-[var(--font-size-sm)] focus:border-[rgb(var(--input-focusBorder))] focus:outline-none"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}

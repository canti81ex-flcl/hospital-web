import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// src/app/layout.tsx
import "./globals.css";


import ThemeToggle from "./theme-toggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-theme="antdesign">
      <body className="bg-bg text-text">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}

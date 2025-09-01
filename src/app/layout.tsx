import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "온누리스마일안과",
  description: "전문적인 안과 의료 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-theme="antdesign-enterprise" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[rgb(var(--bg-base))] text-[rgb(var(--fg-primary))] antialiased min-h-screen">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}

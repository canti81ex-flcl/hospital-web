import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata, generateStructuredData } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = generateStructuredData();
  
  return (
    <html lang="ko" data-theme="antdesign-enterprise" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-[rgb(var(--bg-base))] text-[rgb(var(--fg-primary))] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

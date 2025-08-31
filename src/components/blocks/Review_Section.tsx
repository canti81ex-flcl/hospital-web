"use client";

import { useState } from "react";
import Link from "next/link";

interface ReviewCard {
  name: string;
  surgery: string;
  method: string;
  before: string;
  after?: string;
  ctaText: string;
  href: string;
}

interface ReviewSectionProps {
  title?: string;
  reviews?: ReviewCard[];
  ctaText?: string;
  href?: string;
}

export default function ReviewSection({
  title = "💬 REVIEW - 실제 환자 후기",
  reviews = [
    {
      name: "학생 오수*님",
      surgery: "슈퍼세이브 ICL",
      method: "수술방법: 난시교정+아쿠아ICL",
      before: "수술전: 근시-8 난시-3.75",
      ctaText: "확인하러가기",
      href: "/review/1"
    },
    {
      name: "회사원 오현*님",
      surgery: "슬어세이브 ICL",
      method: "수술방법: 난시교정+아쿠아ICL",
      before: "수술전: 근시-10.25 난시-3.25",
      ctaText: "확인하러가기",
      href: "/review/2"
    },
    {
      name: "배우 김성균님",
      surgery: "스마일",
      method: "수술방법: 양안 1mm",
      before: "수술전: 근시-2 난시-0.5",
      ctaText: "확인하러가기",
      href: "/review/3"
    },
    {
      name: "개그맨 정진하님",
      surgery: "스마일",
      method: "수술방법: 1mm",
      before: "수술전: 근시-4.0 난시-2.5 → 수술후: 1.2",
      ctaText: "확인하러가기",
      href: "/review/4"
    }
  ],
  ctaText = "더 많은 후기 보기",
  href = "/reviews"
}: ReviewSectionProps) {
  const [activeTab, setActiveTab] = useState<"real" | "video">("real");

  return (
    <section className="bg-[rgb(var(--surface))] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 items-start justify-center">
          {/* Title */}
          <h2 className="font-bold text-3xl text-[rgb(var(--text))] leading-tight">
            {title}
          </h2>
          
          {/* Review Tabs */}
          <div className="flex gap-5 h-10 items-center justify-center">
            <button
              onClick={() => setActiveTab("real")}
              className={`h-10 px-5 py-2.5 rounded-[var(--radius-md)] font-semibold text-sm transition-colors duration-200 ${
                activeTab === "real"
                  ? "bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] border-2 border-[rgb(var(--accent))]"
                  : "bg-[rgb(var(--muted))] text-[rgb(var(--muted))]"
              }`}
              aria-label="리얼후기 탭"
            >
              리얼후기
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`h-10 px-5 py-2.5 rounded-[var(--radius-md)] font-medium text-sm transition-colors duration-200 ${
                activeTab === "video"
                  ? "bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] border-2 border-[rgb(var(--accent))]"
                  : "bg-[rgb(var(--muted))] text-[rgb(var(--muted))]"
              }`}
              aria-label="영상후기 탭"
            >
              영상후기
            </button>
          </div>
          
          {/* Review Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--surface))] h-[350px] relative rounded-[var(--radius-lg)] border border-[rgb(var(--border))] overflow-hidden"
              >
                <div className="flex flex-col gap-3 h-full items-start justify-start p-6">
                  {/* Name */}
                  <h3 className="font-semibold text-lg text-[rgb(var(--text))] leading-tight">
                    {review.name}
                  </h3>
                  
                  {/* Surgery Type */}
                  <p className="font-semibold text-base text-[rgb(var(--primary))] leading-tight">
                    {review.surgery}
                  </p>
                  
                  {/* Method */}
                  <p className="text-sm text-[rgb(var(--muted-foreground))] leading-tight">
                    {review.method}
                  </p>
                  
                  {/* Before/After */}
                  <p className="text-sm text-[rgb(var(--muted-foreground))] leading-tight">
                    {review.before}
                  </p>
                  
                  {/* CTA Button */}
                  <Link
                    href={review.href}
                    className="bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/.9 text-[rgb(var(--accent-foreground))] font-medium px-4 py-2.5 rounded-[var(--radius-sm)] transition-colors duration-200 text-xs"
                    aria-label={`${review.name} 후기 ${review.ctaText}`}
                  >
                    {review.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Main CTA Button */}
          {ctaText && href && (
            <div className="w-full flex justify-center">
              <Link
                href={href}
                className="inline-flex items-center justify-center px-6 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] font-medium rounded-[var(--radius-md)] hover:bg-[rgb(var(--primary))]/.9 transition-colors duration-200"
                aria-label={ctaText}
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { ReviewSectionProps, ReviewCard };

export const defaultProps: Partial<ReviewSectionProps> = {
  title: "💬 REVIEW - 실제 환자 후기",
  reviews: [
    {
      name: "학생 오수*님",
      surgery: "슈퍼세이브 ICL",
      method: "수술방법: 난시교정+아쿠아ICL",
      before: "수술전: 근시-8 난시-3.75",
      ctaText: "확인하러가기",
      href: "/review/1"
    },
    {
      name: "회사원 오현*님",
      surgery: "슬어세이브 ICL",
      method: "수술방법: 난시교정+아쿠아ICL",
      before: "수술전: 근시-10.25 난시-3.25",
      ctaText: "확인하러가기",
      href: "/review/2"
    },
    {
      name: "배우 김성균님",
      surgery: "스마일",
      method: "수술방법: 양안 1mm",
      before: "수술전: 근시-2 난시-0.5",
      ctaText: "확인하러가기",
      href: "/review/3"
    },
    {
      name: "개그맨 정진하님",
      surgery: "스마일",
      method: "수술방법: 1mm",
      before: "수술전: 근시-4.0 난시-2.5 → 수술후: 1.2",
      ctaText: "확인하러가기",
      href: "/review/4"
    }
  ],
  ctaText: "더 많은 후기 보기",
  href: "/reviews"
};

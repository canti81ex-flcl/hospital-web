"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// Define the shape of a single slide
interface HeroSlide {
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  href?: string;
  imageUrl?: string;
}

// The props for the carousel component will be an array of slides
interface HeroSectionCarouselProps {
  slides?: HeroSlide[];
}

// Default slide data if none are provided
const defaultSlides: HeroSlide[] = [
  {
    title: "3초마다 슬라이드 1",
    subtitle: "첫 번째 슬라이드입니다.",
    description: "이것은 첫 번째 캐러셀 슬라이드의 내용입니다.",
    features: ["✅ 피처 1", "✅ 피처 2"],
    ctaText: "더 알아보기",
    href: "/slide-1",
  },
  {
    title: "3초마다 슬라이드 2",
    subtitle: "두 번째 슬라이드입니다.",
    description: "이것은 두 번째 캐러셀 슬라이드의 내용입니다.",
    features: ["✅ 피처 3", "✅ 피처 4"],
    ctaText: "더 알아보기",
    href: "/slide-2",
  },
  {
    title: "3초마다 슬라이드 3",
    subtitle: "세 번째 슬라이드입니다.",
    description: "이것은 세 번째 캐러셀 슬라이드의 내용입니다.",
    features: ["✅ 피처 5", "✅ 피처 6"],
    ctaText: "더 알아보기",
    href: "/slide-3",
  },
];

export default function HeroSectionCarousel({ slides = defaultSlides }: HeroSectionCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[rgb(var(--surface))] ">
      <div
        className="flex motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                {/* Hero Content */}
                <div className="flex flex-col gap-6 w-full lg:w-[600px]">
                  <h1 className="font-extrabold text-4xl md:text-5xl text-[rgb(var(--text))] leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <h2 className="font-semibold text-xl md:text-2xl text-[rgb(var(--muted))] leading-tight">
                      {slide.subtitle}
                    </h2>
                  )}
                  {slide.description && (
                    <p className="text-lg text-[rgb(var(--muted))] leading-relaxed">
                      {slide.description}
                    </p>
                  )}
                  
                  {/* Features */}
                  {slide.features && (
                    <div className="flex flex-col gap-3">
                      {slide.features.map((feature, fIndex) => (
                        <div key={fIndex} className="text-base text-[rgb(var(--primary))] font-medium">
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* CTA Button */}
                  {slide.ctaText && slide.href && (
                    <Link
                      href={slide.href}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] font-medium rounded-[var(--radius-md)] hover:bg-[rgb(var(--primary))]/.9 transition-colors duration-200"
                      aria-label={slide.ctaText}
                    >
                      {slide.ctaText}
                    </Link>
                  )}
                </div>
                
                {/* Hero Image */}
                <div className="w-full lg:w-[500px] h-[250px] md:h-[400px] bg-[rgb(var(--muted))] rounded-[var(--radius-lg)] flex items-center justify-center">
                  {slide.imageUrl ? (
                    <img src={slide.imageUrl} alt={slide.title} className="object-cover w-full h-full rounded-[var(--radius-lg)]" />
                  ) : (
                    <div className="text-[rgb(var(--muted-foreground))] text-lg">이미지 영역</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
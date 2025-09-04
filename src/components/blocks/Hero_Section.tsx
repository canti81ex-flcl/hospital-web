import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  href?: string;
}

export default function HeroSection({
  title = "1mm스마일프로",
  subtitle = "스마일프로에 1mm를 더하다",
  description = "온누리의 기술력과 자이스 최첨단 기술로 더욱 정교해진 수술",
  features = [
    "✅ 더 빨라진 레이저: 10초 이내",
    "✅ 더욱 정교한 센트레이션 시스템",
    "✅ 더 견고해진 압력 변화감지 시스템"
  ],
  ctaText = "자세히 보기",
  href = "/smile-pro"
}: HeroSectionProps) {
  return (
    <section className="bg-[rgb(var(--bg-base))] py-[var(--spacing-12)] md:py-[var(--spacing-16)]">
      <div className="mx-auto max-w-7xl px-[var(--spacing-6)]">
        <div className="flex flex-col lg:flex-row gap-[var(--spacing-12)] items-center justify-center">
          {/* Hero Content */}
          <div className="flex flex-col gap-[var(--spacing-6)] w-full lg:w-[600px]">
            <h1 className="font-bold text-[var(--font-size-4xl)] md:text-[var(--font-size-5xl)] text-[rgb(var(--fg-primary))] leading-[var(--line-height-tight)]">
              {title}
            </h1>
            <h2 className="font-semibold text-[var(--font-size-xl)] md:text-[var(--font-size-2xl)] text-[rgb(var(--fg-secondary))] leading-[var(--line-height-snug)]">
              {subtitle}
            </h2>
            <p className="text-[var(--font-size-lg)] text-[rgb(var(--fg-muted))] leading-[var(--line-height-relaxed)]">
              {description}
            </p>
            
            {/* Features */}
            <div className="flex flex-col gap-[var(--spacing-3)]">
              {features.map((feature, index) => (
                <div key={index} className="text-[var(--font-size-base)] text-[rgb(var(--primary-default))] font-medium">
                  {feature}
                </div>
              ))}
            </div>
            
            {/* CTA Button - 디자인 시스템의 button 컴포넌트 스타일 적용 */}
            {ctaText && href && (
              <Link
                href={href}
                className="inline-flex items-center justify-center h-[var(--button-height)] px-[var(--button-paddingX)] bg-[rgb(var(--primary-default))] text-[rgb(var(--fg-onPrimary))] font-[var(--button-font-weight)] rounded-[var(--button-radius)] hover:bg-[rgb(var(--primary-hover))] active:bg-[rgb(var(--primary-active))] focus:outline-none focus:ring-[var(--button-focusRing)] transition-all duration-200 w-fit"
                aria-label={ctaText}
              >
                {ctaText}
              </Link>
            )}
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-[500px] h-[250px] md:h-[400px] bg-[rgb(var(--bg-subtle))] rounded-[var(--card-radius)] shadow-[var(--card-shadow)] border border-[rgb(var(--border-subtle))] flex items-center justify-center">
            <div className="text-[rgb(var(--fg-muted))] text-[var(--font-size-lg)]">이미지 영역</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { HeroSectionProps };

export const defaultProps: Partial<HeroSectionProps> = {
  title: "1mm스마일프로",
  subtitle: "스마일프로에 1mm를 더하다",
  description: "온누리의 기술력과 자이스 최첨단 기술로 더욱 정교해진 수술",
  features: [
    "✅ 더 빨라진 레이저: 10초 이내",
    "✅ 더욱 정교한 센트레이션 시스템",
    "✅ 더 견고해진 압력 변화감지 시스템"
  ],
  ctaText: "자세히 보기",
  href: "/smile-pro"
};

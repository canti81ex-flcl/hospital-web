import Link from "next/link";

interface HeroSectionProps {
  title: string;
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
    <section className="bg-[rgb(var(--surface))] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 w-full lg:w-[600px]">
            <h1 className="font-extrabold text-4xl md:text-5xl text-[rgb(var(--text))] leading-tight">
              {title}
            </h1>
            <h2 className="font-semibold text-xl md:text-2xl text-[rgb(var(--muted))] leading-tight">
              {subtitle}
            </h2>
            <p className="text-lg text-[rgb(var(--muted))] leading-relaxed">
              {description}
            </p>
            
            {/* Features */}
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div key={index} className="text-base text-[rgb(var(--primary))] font-medium">
                  {feature}
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            {ctaText && href && (
              <Link
                href={href}
                className="inline-flex items-center justify-center px-6 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] font-medium rounded-[var(--radius-md)] hover:bg-[rgb(var(--primary))]/.9 transition-colors duration-200"
                aria-label={ctaText}
              >
                {ctaText}
              </Link>
            )}
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-[500px] h-[250px] md:h-[400px] bg-[rgb(var(--muted))] rounded-[var(--radius-lg)] flex items-center justify-center">
            <div className="text-[rgb(var(--muted-foreground))] text-lg">이미지 영역</div>
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

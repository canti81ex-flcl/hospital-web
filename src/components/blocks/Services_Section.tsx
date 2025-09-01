import Link from "next/link";

interface ServiceItem {
  icon: string;
  title: string;
  description: string[];
  ctaText: string;
  href: string;
}

interface ServicesSectionProps {
  title?: string;
  services?: ServiceItem[];
}

export default function ServicesSection({
  title = "온누리스마일 전문 진료 분야",
  services = [
    {
      icon: "😊",
      title: "스마일라식",
      description: [
        "1mm스마일PRO로 더욱 정교해진 수술",
        "• 1mm 미세절개 기술",
        "• 10초 이내 레이저 완료",
        "• 정교한 센트레이션 시스템"
      ],
      ctaText: "자세히 보기",
      href: "/smile-lasik"
    },
    {
      icon: "👁️",
      title: "렌즈삽입술",
      description: [
        "슬어세이브 ICL로 비용절감",
        "• 고도근시 고도난시 OK",
        "• 6년 연속 ICL 최우수 안과",
        "• 난시용 렌즈 불필요"
      ],
      ctaText: "자세히 보기",
      href: "/icl-surgery"
    },
    {
      icon: "🔬",
      title: "시력교정",
      description: [
        "SSVC 난시교정+시력교정 병합",
        "• 라식, 라섹, FM난시교정",
        "• 안구건조증IPL 치료",
        "• 2021 SCI 논문 등재"
      ],
      ctaText: "자세히 보기",
      href: "/vision-correction"
    }
  ]
}: ServicesSectionProps) {
  return (
    <section className="bg-[rgb(var(--bg-subtle))] py-[var(--spacing-16)]">
      <div className="mx-auto max-w-7xl px-[var(--spacing-6)]">
        <div className="flex flex-col gap-[var(--spacing-12)] items-start justify-center">
          {/* Title */}
          <h2 className="font-[var(--font-weight-bold)] text-[var(--font-size-4xl)] text-[rgb(var(--fg-primary))] leading-[var(--line-height-tight)]">
            {title}
          </h2>
          
          {/* Services Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-10)] w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--bg-elevated))] h-[500px] relative rounded-[var(--card-radius)] border border-[rgb(var(--border-subtle))] shadow-[var(--card-shadow)] overflow-hidden hover:shadow-[var(--elevation-modal)] transition-shadow duration-300"
              >
                <div className="flex flex-col gap-[var(--spacing-5)] h-full items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-10)]">
                  {/* Icon */}
                  <div className="text-[var(--font-size-5xl)] text-[rgb(var(--primary-default))]">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-[var(--font-weight-semibold)] text-[var(--font-size-2xl)] text-[rgb(var(--fg-primary))] leading-[var(--line-height-tight)] text-center">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="text-[var(--font-size-base)] text-[rgb(var(--fg-muted))] leading-[var(--line-height-relaxed)] text-center">
                    {service.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                  
                  {/* CTA Button - 디자인 시스템 button secondary 스타일 적용 */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center h-[var(--button-height)] px-[var(--button-paddingX)] bg-[rgb(var(--primary-default))] text-[rgb(var(--fg-onPrimary))] font-[var(--button-font-weight)] rounded-[var(--button-radius)] hover:bg-[rgb(var(--primary-hover))] active:bg-[rgb(var(--primary-active))] focus:outline-none focus:ring-[var(--button-focusRing)] transition-all duration-200"
                    aria-label={`${service.title} ${service.ctaText}`}
                  >
                    {service.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { ServicesSectionProps, ServiceItem };

export const defaultProps: Partial<ServicesSectionProps> = {
  title: "온누리스마일 전문 진료 분야",
  services: [
    {
      icon: "😊",
      title: "스마일라식",
      description: [
        "1mm스마일PRO로 더욱 정교해진 수술",
        "• 1mm 미세절개 기술",
        "• 10초 이내 레이저 완료",
        "• 정교한 센트레이션 시스템"
      ],
      ctaText: "자세히 보기",
      href: "/smile-lasik"
    },
    {
      icon: "👁️",
      title: "렌즈삽입술",
      description: [
        "슬어세이브 ICL로 비용절감",
        "• 고도근시 고도난시 OK",
        "• 6년 연속 ICL 최우수 안과",
        "• 난시용 렌즈 불필요"
      ],
      ctaText: "자세히 보기",
      href: "/icl-surgery"
    },
    {
      icon: "🔬",
      title: "시력교정",
      description: [
        "SSVC 난시교정+시력교정 병합",
        "• 라식, 라섹, FM난시교정",
        "• 안구건조증IPL 치료",
        "• 2021 SCI 논문 등재"
      ],
      ctaText: "자세히 보기",
      href: "/vision-correction"
    }
  ]
};

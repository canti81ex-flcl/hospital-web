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
    <section className="bg-[rgb(var(--muted))] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 items-start justify-center">
          {/* Title */}
          <h2 className="font-bold text-4xl text-[rgb(var(--text))] leading-tight">
            {title}
          </h2>
          
          {/* Services Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--surface))] h-[500px] relative rounded-[var(--radius-xl)] border border-[rgb(var(--border))] overflow-hidden"
              >
                <div className="flex flex-col gap-5 h-full items-center justify-center px-8 py-10">
                  {/* Icon */}
                  <div className="text-5xl text-[rgb(var(--primary))]">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-2xl text-[rgb(var(--text))] leading-tight text-center">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="text-base text-[rgb(var(--muted-foreground))] leading-relaxed text-center">
                    {service.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className="bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/.9 text-[rgb(var(--accent-foreground))] font-medium px-6 py-3 rounded-[var(--radius-md)] transition-colors duration-200"
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

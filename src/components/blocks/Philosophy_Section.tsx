interface PhilosophySectionProps {
  title?: string;
  values?: Array<{
    icon: string;
    name: string;
    description: string;
  }>;
}

export default function PhilosophySection({
  title = "온누리스마일안과의 4가지 핵심 가치",
  values = [
    {
      icon: "🏆",
      name: "고급 HIGH-CLASS",
      description: "실력과 철학을 갖춘 의료진이 첨단 장비로 최고 수준의 안과 수술을 집도합니다."
    },
    {
      icon: "🔬",
      name: "연구 RESEARCH",
      description: "환자를 위한 수술법 연구, 의료의 고급화를 지향합니다."
    },
    {
      icon: "👨‍⚕️",
      name: "전문 PROFESSIONAL",
      description: "논문과 학술 발표를 통해 환자에게 이로운 혁신적 치료 기술을 선도합니다."
    },
    {
      icon: "🤝",
      name: "공헌 CONTRIBUTE",
      description: "주변과 더불어 가는 사회적 의료 서비스를 실천합니다."
    }
  ]
}: PhilosophySectionProps) {
  return (
    <section className="bg-[rgb(var(--bg-base))] py-[var(--spacing-12)] md:py-[var(--spacing-16)]">
      <div className="mx-auto max-w-7xl px-[var(--spacing-6)]">
        <div className="flex flex-col gap-[var(--spacing-10)] items-start justify-center">
          {/* Title */}
          <h2 className="font-[var(--font-weight-bold)] text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] text-[rgb(var(--fg-primary))] leading-[var(--line-height-tight)]">
            {title}
          </h2>
          
          {/* Values Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-8)] w-full">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-[rgb(var(--bg-subtle))] flex flex-col gap-[var(--spacing-4)] items-center justify-center p-[var(--spacing-6)] rounded-[var(--card-radius)] min-h-[280px] text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[rgb(var(--primary-default))] border border-[rgb(var(--border-subtle))] shadow-[var(--card-shadow)] hover:shadow-[var(--elevation-modal)]"
              >
                {/* Icon */}
                <div className="text-[var(--font-size-4xl)] text-[rgb(var(--primary-default))] group-hover:text-[rgb(var(--fg-onPrimary))] transition-colors duration-300">
                  {value.icon}
                </div>
                
                {/* Name */}
                <h3 className="font-[var(--font-weight-semibold)] text-[var(--font-size-xl)] text-[rgb(var(--fg-primary))] group-hover:text-[rgb(var(--fg-onPrimary))] transition-colors duration-300 leading-[var(--line-height-tight)]">
                  {value.name}
                </h3>
                
                {/* Description */}
                <p className="text-[var(--font-size-sm)] text-[rgb(var(--fg-muted))] group-hover:text-[rgb(var(--fg-onPrimary))] transition-colors duration-300 leading-[var(--line-height-relaxed)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { PhilosophySectionProps };

export const defaultProps: Partial<PhilosophySectionProps> = {
  title: "온누리스마일안과의 4가지 핵심 가치",
  values: [
    {
      icon: "🏆",
      name: "고급 HIGH-CLASS",
      description: "실력과 철학을 갖춘 의료진이 첨단 장비로 최고 수준의 안과 수술을 집도합니다."
    },
    {
      icon: "🔬",
      name: "연구 RESEARCH",
      description: "환자를 위한 수술법 연구, 의료의 고급화를 지향합니다."
    },
    {
      icon: "👨‍⚕️",
      name: "전문 PROFESSIONAL",
      description: "논문과 학술 발표를 통해 환자에게 이로운 혁신적 치료 기술을 선도합니다."
    },
    {
      icon: "🤝",
      name: "공헌 CONTRIBUTE",
      description: "주변과 더불어 가는 사회적 의료 서비스를 실천합니다."
    }
  ]
};

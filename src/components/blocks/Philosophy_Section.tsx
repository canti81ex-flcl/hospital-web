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
    <section className="bg-[rgb(var(--surface))] py-12 md:py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 items-start justify-center">
          {/* Title */}
          <h2 className="font-bold text-2xl sm:text-3xl text-[rgb(var(--text))] leading-tight">
            {title}
          </h2>
          
          {/* Values Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-[rgb(var(--muted))] flex flex-col gap-4 items-center justify-center p-6 rounded-[var(--radius-lg)] min-h-[280px] text-center transition-all duration-300 ease-in-out hover:scale-115 hover:bg-[rgb(var(--primary))]"
              >
                {/* Icon */}
                <div className="text-4xl text-[rgb(var(--primary))] group-hover:text-[rgb(var(--primary-foreground))] transition-colors duration-300">
                  {value.icon}
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-xl text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary-foreground))] transition-colors duration-300 leading-tight">
                  {value.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[rgb(var(--muted-foreground))] group-hover:text-[rgb(var(--primary-foreground))] transition-colors duration-300 leading-relaxed">
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

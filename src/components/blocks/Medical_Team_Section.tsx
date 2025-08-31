interface MedicalTeamSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  href?: string;
}

export default function MedicalTeamSection({
  title = "뛰어난 기술력, 온누리스마일안과 의료진",
  description = "학계에서 각막이식 전문분야의 권위자로 인정받은 만큼 끊임없이 새로운 기술개발을 연구하고, 풍부한 임상경험으로 가장 이상적인 수술결과를 약속드립니다.",
  ctaText = "의료진 소개",
  href = "/medical-team"
}: MedicalTeamSectionProps) {
  return (
    <section className="bg-[rgb(var(--accent))] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-15 items-center justify-center">
          {/* Medical Team Content */}
          <div className="flex flex-col gap-5 w-full lg:w-[600px]">
            <h2 className="font-bold text-3xl text-[rgb(var(--text))] leading-tight">
              {title}
            </h2>
            <p className="text-lg text-[rgb(var(--muted-foreground))] leading-relaxed">
              {description}
            </p>
            
            {/* CTA Button */}
            {ctaText && href && (
              <a
                href={href}
                className="inline-flex items-center justify-center px-6 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] font-medium rounded-[var(--radius-md)] hover:bg-[rgb(var(--primary))]/.9 transition-colors duration-200 w-fit"
                aria-label={ctaText}
              >
                {ctaText}
              </a>
            )}
          </div>
          
          {/* Medical Team Image */}
          <div className="w-full lg:w-[500px] h-[280px] bg-[rgb(var(--muted))] rounded-[var(--radius-lg)] flex items-center justify-center">
            <div className="text-[rgb(var(--muted-foreground))] text-lg">의료진 이미지</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { MedicalTeamSectionProps };

export const defaultProps: Partial<MedicalTeamSectionProps> = {
  title: "뛰어난 기술력, 온누리스마일안과 의료진",
  description: "학계에서 각막이식 전문분야의 권위자로 인정받은 만큼 끊임없이 새로운 기술개발을 연구하고, 풍부한 임상경험으로 가장 이상적인 수술결과를 약속드립니다.",
  ctaText: "의료진 소개",
  href: "/medical-team"
};

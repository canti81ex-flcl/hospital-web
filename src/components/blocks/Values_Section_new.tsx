"use client";

interface ValueCard {
  title: string;
  englishTitle: string;
  description: string[];
}

interface ValuesSectionNewProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
  values?: ValueCard[];
}

export default function Values_Section_new({
  title,
  body,
  ctaText,
  href,
  values = [
    {
      title: "고급",
      englishTitle: "HIGH-CLASS", 
      description: [
        "실력과 철학을 갖춘 의료진이",
        "첨단 장비로 최고 수준의",
        "안과 수술을 집도합니다."
      ]
    },
    {
      title: "연구",
      englishTitle: "RESEARCH",
      description: [
        "환자를 위한 수술법 연구,",
        "의료의 고급화를 지향합니다."
      ]
    },
    {
      title: "전문", 
      englishTitle: "PROFESSIONAL",
      description: [
        "논문과 학술 발표를 통해",
        "환자에게 이로운 혁신적 치료",
        "기술을 선도합니다."
      ]
    },
    {
      title: "공헌",
      englishTitle: "CONTRIBUTE",
      description: [
        "주변과 더불어 가는",
        "사회적 의료 서비스를",
        "실천합니다."
      ]
    }
  ]
}: ValuesSectionNewProps) {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-20)]"
      style={{
        backgroundColor: 'rgb(var(--color-gray-900))',
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(var(--primary-default), 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(var(--success-default), 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgb(var(--color-gray-900)) 0%, rgba(var(--color-gray-800), 1) 100%)
        `
      }}
      data-name="Values Section"
    >
      {/* 배경 그라데이션 오버레이 */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background: `
            linear-gradient(45deg, transparent 0%, rgba(var(--primary-default), 0.03) 50%, transparent 100%),
            linear-gradient(-45deg, transparent 0%, rgba(var(--success-default), 0.02) 50%, transparent 100%)
          `
        }}
      />

      {/* 메인 콘텐츠 컨테이너 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Values 그리드 */}
        <div 
          className="relative rounded-[var(--card-radius)] p-[var(--spacing-6)] overflow-hidden"
          style={{
            backgroundColor: 'rgba(var(--bg-elevated), 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(var(--border-subtle), 0.2)',
            boxShadow: 'var(--elevation-card)'
          }}
        >
          {/* 배경 패턴 */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(var(--primary-default), 0.1) 25%, transparent 25%), 
                linear-gradient(-45deg, rgba(var(--primary-default), 0.1) 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, rgba(var(--primary-default), 0.1) 75%), 
                linear-gradient(-45deg, transparent 75%, rgba(var(--primary-default), 0.1) 75%)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
            }}
          />

          {/* 카드 그리드 */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[var(--spacing-6)] h-auto md:h-[600px] items-center justify-center">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative h-[280px] w-full max-w-[400px] mx-auto rounded-[var(--card-radius)] p-[var(--spacing-6)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(var(--color-black), 0.3)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(var(--border-subtle), 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--primary-default), 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(var(--primary-default), 0.3)';
                  e.currentTarget.style.boxShadow = 'var(--elevation-modal)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(var(--color-black), 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(var(--border-subtle), 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* 카드 내용 */}
                <div className="flex flex-col gap-[var(--spacing-4)] items-center">
                  {/* 한글 제목 - 26px Bold */}
                  <h3 
                    className="font-[var(--font-weight-bold)] leading-tight"
                    style={{
                      fontSize: 'var(--font-size-xl)', // 26px 대응
                      color: 'rgb(var(--color-white))',
                      fontFamily: 'var(--font-family-heading)',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {value.title}
                  </h3>

                  {/* 영문 제목 - 16px Regular */}
                  <h4 
                    className="font-[var(--font-weight-regular)] leading-relaxed"
                    style={{
                      fontSize: 'var(--font-size-base)', // 16px
                      color: 'rgb(var(--color-gray-300))',
                      fontFamily: 'var(--font-family-body)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {value.englishTitle}
                  </h4>

                  {/* 설명 텍스트 - 14px Regular */}
                  <div 
                    className="font-[var(--font-weight-regular)] leading-relaxed space-y-1"
                    style={{
                      fontSize: 'var(--font-size-sm)', // 14px
                      color: 'rgb(var(--color-white))',
                      fontFamily: 'var(--font-family-body)',
                      opacity: 0.9
                    }}
                  >
                    {value.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="m-0">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 호버 시 아이콘 효과 */}
                <div 
                  className="absolute top-4 right-4 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(var(--primary-default), 0.2)',
                    border: '1px solid rgba(var(--primary-default), 0.4)'
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: 'rgb(var(--primary-default))'
                    }}
                  />
                </div>

                {/* 카드 번호 */}
                <div 
                  className="absolute bottom-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold opacity-20"
                  style={{
                    backgroundColor: 'rgba(var(--color-white), 0.1)',
                    color: 'rgb(var(--color-white))'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 버튼 (선택적) */}
        {ctaText && href && (
          <div className="mt-[var(--spacing-12)] text-center">
            <a
              href={href}
              className="inline-flex items-center justify-center px-[var(--button-paddingX)] py-[var(--spacing-4)] rounded-[var(--button-radius)] font-[var(--button-font-weight)] text-[var(--button-font-size)] transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgb(var(--primary-default))',
                color: 'rgb(var(--primary-fg))',
                boxShadow: 'var(--elevation-button)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--primary-hover))';
                e.currentTarget.style.borderColor = 'rgb(var(--primary-default))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--primary-default))';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              rel={href.startsWith('http') ? "noopener noreferrer" : "noopener"}
              target={href.startsWith('http') ? "_blank" : undefined}
              aria-label={`${ctaText} 페이지로 이동`}
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        @media (max-width: 1280px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .h-[600px] {
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}



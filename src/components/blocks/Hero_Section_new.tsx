"use client";

interface HeroSectionNewProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  href?: string;
}

export default function Hero_Section_new({
  title = "난시교정 렌즈삽입술",
  subtitle = "고도근시 고도난시 OK", 
  description = "독자 고안한 새로운 수술법",
  ctaText,
  href
}: HeroSectionNewProps) {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-[var(--spacing-8)] py-[var(--spacing-20)]"
      style={{
        backgroundColor: 'rgb(var(--color-gray-900))',
        backgroundImage: 'linear-gradient(135deg, rgb(var(--color-gray-900)) 0%, rgba(var(--primary-default), 0.1) 100%)'
      }}
      data-name="Hero Section"
    >
      {/* 배경 그라데이션 오버레이 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(var(--primary-default), 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(var(--success-default), 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(var(--color-gray-900), 0.95) 0%, rgb(var(--color-gray-900)) 100%)
          `
        }}
      />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center gap-[var(--spacing-5)] max-w-4xl mx-auto">
        {/* 메인 타이틀 - 68px Bold */}
        <h1 
          className="font-[var(--font-weight-bold)] leading-tight tracking-tight"
          style={{
            fontSize: 'var(--font-size-6xl)', // 68px 대응
            color: 'rgb(var(--color-white))',
            fontFamily: 'var(--font-family-heading)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          {title}
        </h1>

        {/* 서브타이틀 - 30px Regular */}
        <h2 
          className="font-[var(--font-weight-regular)] leading-relaxed"
          style={{
            fontSize: 'var(--font-size-2xl)', // 30px 대응
            color: 'rgb(var(--color-white))',
            fontFamily: 'var(--font-family-body)',
            opacity: 0.95
          }}
        >
          {subtitle}
        </h2>

        {/* 설명 텍스트 - 16px Medium */}
        <p 
          className="font-[var(--font-weight-medium)] leading-relaxed"
          style={{
            fontSize: 'var(--font-size-base)', // 16px 대응
            color: 'rgb(var(--color-white))',
            fontFamily: 'var(--font-family-body)',
            opacity: 0.9
          }}
        >
          {description}
        </p>

        {/* CTA 버튼 (선택적) */}
        {ctaText && href && (
          <div className="mt-[var(--spacing-8)]">
            <a
              href={href}
              className="inline-flex items-center justify-center px-[var(--button-paddingX)] py-[var(--spacing-4)] rounded-[var(--button-radius)] font-[var(--button-font-weight)] text-[var(--button-font-size)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-[var(--spacing-8)] left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 animate-pulse"
          style={{
            borderColor: 'rgba(var(--color-white), 0.3)'
          }}
        >
          <div 
            className="w-1 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: 'rgba(var(--color-white), 0.6)',
              animationDelay: '0.5s'
            }}
          />
        </div>
      </div>

      {/* 반응형 조정 */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: var(--font-size-4xl) !important; /* 모바일에서 작게 */
          }
          h2 {
            font-size: var(--font-size-xl) !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: var(--font-size-3xl) !important;
          }
          h2 {
            font-size: var(--font-size-lg) !important;
          }
        }
      `}</style>
    </section>
  );
}

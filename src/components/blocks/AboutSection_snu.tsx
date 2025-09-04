import React from 'react';

interface AboutSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

export default function AboutSectionSnu({
  title = "Good After눈!",
  body = "본연의 빛을 되찾기 위한 당신의 여정,\nSNU안과가 함께 하겠습니다",
  ctaText = "자세히 보기",
  href = "#about"
}: AboutSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex items-center justify-center p-2 sm:p-4 md:p-8 lg:p-12 xl:p-16 relative size-full min-h-screen"
      data-name="About Section SNU"
      data-anchor="about"
      id="about"
      itemScope
      itemType="https://schema.org/MedicalClinic"
      aria-labelledby="about-title"
    >
      <div 
        className="bg-[rgb(var(--surface))] content-stretch flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center relative shrink-0 max-w-4xl w-full rounded-[var(--radius-lg)] shadow-lg p-4 sm:p-6 md:p-8 lg:p-10"
        data-name="About Content"
      >
        {/* Main Title */}
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-[rgb(var(--text))] text-center"
          data-node-id="about-title"
        >
          <h1 id="about-title" className="leading-[normal] mb-0" itemProp="name">{title}</h1>
        </div>

        {/* Subtitle */}
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-center max-w-2xl"
          data-node-id="about-subtitle"
        >
          {body.split('\n').map((line, index) => (
            <p key={index} className="mb-2 leading-relaxed" itemProp="description">
              {line}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href={href}
          className="bg-[rgb(var(--primary-default))] hover:bg-[rgb(var(--primary-dark))] box-border content-stretch flex gap-2 h-[40px] sm:h-[44px] md:h-[48px] lg:h-[50px] items-center justify-center overflow-clip px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 relative rounded-[25px] shrink-0 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-default))] focus:ring-offset-2"
          data-name="About CTA Button"
          aria-label="SNU안과 소개 자세히 보기"
        >
          <div 
            className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[rgb(var(--on-primary))]"
            data-node-id="cta-text"
          >
            <span className="leading-[normal]">{ctaText}</span>
          </div>
        </a>

        {/* Additional SNU Info */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] md:text-[16px] font-medium mb-2">
            서울특별시 강남구 강남대로 624 ICT타워 3층, 12층
          </div>
          <div className="text-[rgb(var(--primary-default))] text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            스마일라식 · 렌즈삽입술 · 노안백내장 · 시력교정술
          </div>
        </div>
      </div>
    </section>
  );
}

// Default props for the component
AboutSectionSnu.defaultProps = {
  title: "Good After눈!",
  body: "본연의 빛을 되찾기 위한 당신의 여정,\nSNU안과가 함께 하겠습니다",
  ctaText: "자세히 보기",
  href: "#about"
};

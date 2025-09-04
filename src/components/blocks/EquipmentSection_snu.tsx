import React from 'react';

interface EquipmentSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

export default function EquipmentSectionSnu({
  title = "더 안전하고 우수한\nSNU 안과 첨단 장비",
  body = "개개인의 의학적 상태, 라이프 스타일 등 다양한 환경요소를 고려하여 정확한 진단과 성공적인 치료를 합니다.\n\nSNU안과는 더 안전하고 우수한 의료 서비스를 위해 지속적인 기술 도입과 첨단 장비 업그레이드를 진행하고 있습니다.",
  ctaText = "MORE →",
  href = "#equipment"
}: EquipmentSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--background))] box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[60px] items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="Equipment Section SNU"
      data-anchor="equipment"
      id="equipment"
    >
      {/* Text Content */}
      <div 
        className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col gap-6 sm:gap-8 items-start justify-start relative shrink-0 w-full lg:w-[580px] rounded-[var(--radius-lg)] shadow-lg px-6 sm:px-8 py-6 sm:py-8"
        data-name="Equipment Text Content"
      >
        {/* Section Label */}
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--primary))] text-[17px]"
          data-node-id="equipment-label"
        >
          <p className="leading-[normal] whitespace-pre">SNU 첨단 장비</p>
        </div>

        {/* Main Title */}
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text))] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px]"
          data-node-id="equipment-title"
        >
          <h2 className="mb-0 leading-tight">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* Subtitle */}
        <div 
          className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[rgb(var(--text))] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px]"
          data-node-id="equipment-subtitle"
        >
          <p className="leading-[normal] whitespace-pre">누구나 맑은 하루로 행복한 삶을 지속할 권리</p>
        </div>

        {/* Description */}
        <div 
          className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] md:text-[16px]"
          data-node-id="equipment-description"
        >
          {body.split('\n').map((line, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {line || '\u00A0'}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href={href}
          className="bg-transparent hover:bg-[rgb(var(--surface-variant))] h-[50px] relative shrink-0 group transition-all duration-300"
          data-name="Equipment More Button"
          aria-label="SNU안과 첨단 장비 더 보기"
        >
          <div className="content-stretch flex gap-2 h-[50px] items-center justify-center overflow-clip relative px-6">
            <div 
              className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] text-[16px] text-nowrap transition-colors duration-300"
              data-node-id="cta-text"
            >
              <span className="leading-[normal] whitespace-pre">{ctaText}</span>
            </div>
          </div>
          <div 
            aria-hidden="true" 
            className="absolute border-2 border-[rgb(var(--border))] group-hover:border-[rgb(var(--primary))] border-solid inset-0 pointer-events-none rounded-[var(--radius)] transition-colors duration-300" 
          />
        </a>
      </div>

      {/* Visual Area */}
      <div 
        className="bg-[rgb(var(--surface-variant))] overflow-clip relative rounded-[16px] shrink-0 w-full lg:w-[580px] flex items-center justify-center py-8 sm:py-10 md:py-12"
        data-name="Equipment Visual Area"
      >
        <div className="text-center max-w-md">
          <div 
            className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] not-italic text-[rgb(var(--text-secondary))] text-[20px] mb-8"
            data-node-id="equipment-visual-title"
          >
            <p className="mb-2">첨단 의료 장비</p>
            <p className="mb-4">시각화 영역</p>
          </div>
          
          {/* Equipment List */}
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[rgb(var(--primary))]"></div>
              <span className="text-[rgb(var(--text))] text-[16px] font-medium">스마일 라식 장비</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[rgb(var(--primary))]"></div>
              <span className="text-[rgb(var(--text))] text-[16px] font-medium">토릭 ICL 검사 장비</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[rgb(var(--primary))]"></div>
              <span className="text-[rgb(var(--text))] text-[16px] font-medium">정밀 진단 장비</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[rgb(var(--primary))]"></div>
              <span className="text-[rgb(var(--text))] text-[16px] font-medium">수술 모니터링 시스템</span>
            </div>
          </div>

          {/* Additional Equipment Info */}
          <div className="mt-8 p-4 bg-[rgb(var(--surface))] rounded-[var(--radius)]">
            <div className="text-[rgb(var(--text-secondary))] text-[14px] mb-2">
              최신 의료 기술과 첨단 장비로
            </div>
            <div className="text-[rgb(var(--primary))] text-[16px] font-bold">
              안전하고 정확한 치료
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default props for the component
EquipmentSectionSnu.defaultProps = {
  title: "더 안전하고 우수한\nSNU 안과 첨단 장비",
  body: "개개인의 의학적 상태, 라이프 스타일 등 다양한 환경요소를 고려하여 정확한 진단과 성공적인 치료를 합니다.\n\nSNU안과는 더 안전하고 우수한 의료 서비스를 위해 지속적인 기술 도입과 첨단 장비 업그레이드를 진행하고 있습니다.",
  ctaText: "MORE →",
  href: "#equipment"
};

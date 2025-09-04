import React from 'react';

interface ClinicSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

export default function ClinicSectionSnu({
  title = "잃어가던 빛을 드러내\n본래의 빛을 되찾다.",
  body = "우리의 안구는 달의 위상을 닮았습니다. 달은 공전을 인해 시간이 지나며 보름달에서 초승달로 변화합니다.\n\n같이 사람의 시력도 지나다의 어두운 본래의 시력을 점점 잃어갑니다.\n\nSNU안과는 시력교정술을 단순한 수술이 아닌 누구나 지니고 있던 본연의 빛을 되찾기 위한 여정이라 생각합니다.\n\n초승달이 빛을 되찾아 다시 가득 찬 달로 돌아가는 여정처럼, 본연의 빛을 되찾기 위한 당신의 여정을\nSNU안과가 함께 하겠습니다.",
  ctaText = "MORE →",
  href = "#clinic"
}: ClinicSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--background))] box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="Clinic Section SNU"
      data-anchor="clinic"
      id="clinic"
    >
      {/* Text Content */}
      <div 
        className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col gap-6 sm:gap-8 items-start justify-start relative shrink-0 w-full lg:w-[580px] rounded-[var(--radius-lg)] shadow-lg p-6 sm:p-8"
        data-name="Clinic Text Content"
      >
        {/* Section Label */}
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--primary))] text-[17px] text-nowrap"
          data-node-id="clinic-label"
        >
          <p className="leading-[normal] whitespace-pre">SNU안과</p>
        </div>

        {/* Main Title */}
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text))] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px]"
          data-node-id="clinic-title"
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

        {/* Description */}
        <div 
          className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]"
          data-node-id="clinic-description"
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
          data-name="Clinic More Button"
          aria-label="SNU안과 소개 더 보기"
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

      {/* Image Area */}
      <div 
        className="bg-[rgb(var(--surface-variant))] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-clip relative rounded-[12px] shrink-0 w-full lg:w-[540px] flex items-center justify-center"
        data-name="Clinic Image Area"
      >
        {/* Placeholder for eye examination image with moon motif */}
        <div className="text-center">
          <div 
            className="absolute font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] not-italic text-[rgb(var(--text-secondary))] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center"
            data-node-id="image-placeholder"
          >
            <p className="mb-2">눈 검사 이미지</p>
            <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">(달 모티브 시각화)</p>
          </div>
          
          {/* Moon phases visualization placeholder */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-4 sm:mt-6 md:mt-8">
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[rgb(var(--primary))] opacity-20"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[rgb(var(--primary))] opacity-40"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[rgb(var(--primary))] opacity-60"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[rgb(var(--primary))] opacity-80"></div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[rgb(var(--primary))]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default props for the component
ClinicSectionSnu.defaultProps = {
  title: "잃어가던 빛을 드러내\n본래의 빛을 되찾다.",
  body: "우리의 안구는 달의 위상을 닮았습니다. 달은 공전을 인해 시간이 지나며 보름달에서 초승달로 변화합니다.\n\n같이 사람의 시력도 지나다의 어두운 본래의 시력을 점점 잃어갑니다.\n\nSNU안과는 시력교정술을 단순한 수술이 아닌 누구나 지니고 있던 본연의 빛을 되찾기 위한 여정이라 생각합니다.\n\n초승달이 빛을 되찾아 다시 가득 찬 달로 돌아가는 여정처럼, 본연의 빛을 되찾기 위한 당신의 여정을\nSNU안과가 함께 하겠습니다.",
  ctaText: "MORE →",
  href: "#clinic"
};

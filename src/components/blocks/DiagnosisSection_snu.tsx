import React from 'react';

interface DiagnosisSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

interface Diagnosis {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  visualTitle: string;
  visualSubtitle: string;
  visualColor: string;
}

const diagnoses: Diagnosis[] = [
  {
    id: "cataract",
    title: "노안·백내장",
    subtitle: "나이가 들면서 동반되는 노안과 백내장을 동시에 치료!",
    description: "노안백내장 수술, 직접 받은 안과전문의가 집도합니다.\nSNU 초정밀 최첨단 장비와 탑클래스 의료진이\n정확도와 성공률을 높입니다.",
    visualTitle: "노안·백내장 수술",
    visualSubtitle: "시각화 영역",
    visualColor: "rgba(204,217,229,0.3)"
  },
  {
    id: "smile",
    title: "스마일2.0",
    subtitle: "가장 진보된 3세대 시력교정술",
    description: "각막 표면을 절삭하거나 표면을 열지 않고\n실질부위만 교정량만큼 분리해 내는 기술을 기반으로 하여\n기존 라식, 라섹 수술의 장점만을 결합한 3세대 시력교정술입니다.",
    visualTitle: "스마일2.0 라식 수술",
    visualSubtitle: "시각화 영역",
    visualColor: "rgba(217,229,204,0.3)"
  },
  {
    id: "vision",
    title: "시력교정",
    subtitle: "SNU안과와 내눈에 꼭 맞는 시력교정술 찾기",
    description: "시력교정술 선택에 있어 절대적인 척도는 없습니다.\n나의 눈의 상태, 생활 습관, 직업 등을 기반으로 우선순위를 따져\n장기적인 관점에서 수술방법을 선택하여야 합니다.",
    visualTitle: "맞춤형 시력교정술",
    visualSubtitle: "시각화 영역",
    visualColor: "rgba(229,204,217,0.3)"
  }
];

export default function DiagnosisSectionSnu({
  title = "주요 진료과목",
  body,
  ctaText = "MORE →",
  href = "#diagnosis"
}: DiagnosisSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="Diagnosis Section SNU"
      data-anchor="diagnosis"
      id="diagnosis"
    >
      {/* Header */}
      <div 
        className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 rounded-[var(--radius-lg)] shadow-lg px-6 sm:px-8 py-6 sm:py-8 mb-8 sm:mb-10 md:mb-12 w-full max-w-4xl"
        data-name="Diagnosis Header"
      >
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--primary))] text-[15px] sm:text-[16px] md:text-[17px]"
          data-node-id="diagnosis-section-label"
        >
          <p className="leading-[normal] text-nowrap whitespace-pre">{title}</p>
        </div>
      </div>

      {/* Diagnosis Cards Container */}
      <div 
        className="bg-transparent content-stretch flex gap-4 sm:gap-6 md:gap-8 items-start justify-center relative shrink-0 max-w-7xl w-full flex-wrap"
        data-name="Diagnosis Cards Container"
      >
        {diagnoses.map((diagnosis, index) => (
          <div 
            key={diagnosis.id}
            className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start relative rounded-[20px] shrink-0 w-full sm:w-[350px] md:w-[400px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-name={`Diagnosis Card ${index + 1}`}
          >
            {/* Text Content */}
            <div 
              className="bg-transparent content-stretch flex flex-col gap-3 sm:gap-4 items-start justify-start relative shrink-0 p-6 sm:p-8 md:p-[40px] pb-4 sm:pb-6"
              data-name={`Diagnosis ${index + 1} Text Content`}
            >
              <div 
                className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--primary))] text-[15px] sm:text-[16px] md:text-[17px]"
                data-node-id={`diagnosis-${index + 1}-label`}
              >
                <p className="leading-[normal] text-nowrap whitespace-pre">주요 진료과목</p>
              </div>
              
              <div 
                className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--text))] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px]"
                data-node-id={`diagnosis-${index + 1}-title`}
              >
                <h3 className="leading-[normal] mb-0">{diagnosis.title}</h3>
              </div>
              
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[rgb(var(--text))] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px]"
                data-node-id={`diagnosis-${index + 1}-subtitle`}
              >
                <p className="leading-[normal] text-nowrap whitespace-pre">{diagnosis.subtitle}</p>
              </div>
              
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] md:text-[16px]"
                data-node-id={`diagnosis-${index + 1}-description`}
              >
                {diagnosis.description.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-2 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              
              {/* CTA Button */}
              <a 
                href={`${href}#${diagnosis.id}`}
                className="bg-transparent hover:bg-[rgb(var(--surface))] h-[50px] relative shrink-0 group transition-all duration-300"
                data-name={`Diagnosis ${index + 1} Button`}
                aria-label={`${diagnosis.title} 더 보기`}
              >
                <div className="content-stretch flex gap-2 h-[50px] items-center justify-center overflow-clip relative px-6">
                  <div 
                    className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary))] text-[16px] text-nowrap transition-colors duration-300"
                    data-node-id={`diagnosis-${index + 1}-cta`}
                  >
                    <span className="leading-[normal] whitespace-pre">{ctaText}</span>
                  </div>
                </div>
                <div 
                  aria-hidden="true" 
                  className="absolute border-2 border-solid border-[rgb(var(--border))] group-hover:border-[rgb(var(--primary))] inset-0 pointer-events-none rounded-[var(--radius)] transition-colors duration-300" 
                />
              </a>
            </div>

            {/* Visual Area */}
            <div 
              className="bg-[rgb(var(--surface))] overflow-clip relative rounded-[12px] shrink-0 w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] flex items-center justify-center mx-6 sm:mx-8 md:mx-[40px] mb-6 sm:mb-8 md:mb-[40px]"
              data-name={`Diagnosis ${index + 1} Visual`}
              style={{ backgroundColor: diagnosis.visualColor }}
            >
              <div className="text-center">
                <div 
                  className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic text-[rgb(var(--text))] text-[18px]"
                  data-node-id={`diagnosis-${index + 1}-visual-text`}
                >
                  <p className="mb-2">{diagnosis.visualTitle}</p>
                  <p className="text-[16px] text-[rgb(var(--text-secondary))]">{diagnosis.visualSubtitle}</p>
                </div>
                
                {/* Visual Elements */}
                <div className="mt-6 space-y-2">
                  {diagnosis.id === 'cataract' && (
                    <>
                      <div className="w-16 h-16 rounded-full bg-[rgb(var(--primary))] opacity-20 mx-auto"></div>
                      <div className="w-12 h-12 rounded-full bg-[rgb(var(--primary))] opacity-40 mx-auto"></div>
                      <div className="w-8 h-8 rounded-full bg-[rgb(var(--primary))] opacity-60 mx-auto"></div>
                    </>
                  )}
                  {diagnosis.id === 'smile' && (
                    <>
                      <div className="w-20 h-2 bg-[rgb(var(--primary))] opacity-60 mx-auto rounded"></div>
                      <div className="w-16 h-2 bg-[rgb(var(--primary))] opacity-80 mx-auto rounded"></div>
                      <div className="w-12 h-2 bg-[rgb(var(--primary))] mx-auto rounded"></div>
                    </>
                  )}
                  {diagnosis.id === 'vision' && (
                    <>
                      <div className="w-16 h-16 border-2 border-[rgb(var(--primary))] opacity-40 rounded-full mx-auto"></div>
                      <div className="w-12 h-12 border-2 border-[rgb(var(--primary))] opacity-60 rounded-full mx-auto"></div>
                      <div className="w-8 h-8 border-2 border-[rgb(var(--primary))] rounded-full mx-auto"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center max-w-4xl">
        <div className="text-[rgb(var(--text-secondary))] text-[16px] font-medium mb-4">
          SNU안과의 전문적인 진료과목으로 정확한 진단과 치료를 제공합니다
        </div>
        <div className="text-[rgb(var(--primary))] text-[18px] font-bold">
          노안·백내장 · 스마일2.0 · 시력교정
        </div>
      </div>
    </section>
  );
}

// Default props for the component
DiagnosisSectionSnu.defaultProps = {
  title: "주요 진료과목",
  body: undefined,
  ctaText: "MORE →",
  href: "#diagnosis"
};

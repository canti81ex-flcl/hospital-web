"use client";

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
      className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 lg:p-12 xl:p-16 relative size-full min-h-screen"
      data-name="Diagnosis Section SNU"
      data-anchor="diagnosis"
      id="diagnosis"
    >
      {/* Header */}
      <div 
        className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col gap-3 sm:gap-4 items-center justify-center relative shrink-0 rounded-[var(--radius-lg)] shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full max-w-4xl"
        data-name="Diagnosis Header"
      >
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--primary-default))] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]"
          data-node-id="diagnosis-section-label"
        >
          <p className="leading-[normal] text-nowrap whitespace-pre">{title}</p>
        </div>
      </div>

      {/* Diagnosis Cards Container */}
      <div 
        className="bg-transparent content-stretch flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-stretch justify-center relative shrink-0 max-w-7xl w-full flex-wrap"
        data-name="Diagnosis Cards Container"
      >
        {diagnoses.map((diagnosis, index) => (
          <div 
            key={diagnosis.id}
            className="diagnosis-card bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start relative rounded-[16px] sm:rounded-[20px] shrink-0 w-full sm:w-[320px] md:w-[350px] lg:w-[380px] xl:w-[400px] shadow-lg hover:shadow-xl hover:shadow-[rgba(var(--primary-default),0.2)] transition-all duration-300 transform hover:scale-105 hover:border-[rgba(var(--primary-default),0.3)] border border-transparent min-h-[500px] sm:min-h-[600px]"
            data-name={`Diagnosis Card ${index + 1}`}
          >
            {/* Text Content */}
            <div 
              className="diagnosis-text-content bg-transparent content-stretch flex flex-col gap-2 sm:gap-3 md:gap-4 items-start justify-start relative shrink-0 p-4 sm:p-6 md:p-8 lg:p-[40px] pb-3 sm:pb-4 md:pb-6 flex-1"
              data-name={`Diagnosis ${index + 1} Text Content`}
            >
              <div 
                className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[rgb(var(--primary-default))] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]"
                data-node-id={`diagnosis-${index + 1}-label`}
              >
                <p className="leading-[normal] whitespace-nowrap">주요 진료과목</p>
              </div>
              
              <div 
                className="diagnosis-title font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text))] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]"
                data-node-id={`diagnosis-${index + 1}-title`}
              >
                <h3 className="leading-[normal] mb-0 break-words">{diagnosis.title}</h3>
              </div>
              
              <div 
                className="diagnosis-subtitle font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text))] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px]"
                data-node-id={`diagnosis-${index + 1}-subtitle`}
              >
                <p className="leading-[normal] break-words hyphens-auto">{diagnosis.subtitle}</p>
              </div>
              
              <div 
                className="diagnosis-description font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] flex-1"
                data-node-id={`diagnosis-${index + 1}-description`}
              >
                <div className="space-y-2">
                  {diagnosis.description.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="leading-relaxed break-words hyphens-auto">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href={`${href}#${diagnosis.id}`}
                className="diagnosis-cta bg-transparent hover:bg-[rgb(var(--surface))] h-[40px] sm:h-[45px] md:h-[50px] relative shrink-0 group transition-all duration-300 mt-auto"
                data-name={`Diagnosis ${index + 1} Button`}
                aria-label={`${diagnosis.title} 더 보기`}
              >
                <div className="content-stretch flex gap-2 h-[40px] sm:h-[45px] md:h-[50px] items-center justify-center overflow-clip relative px-4 sm:px-6">
                  <div 
                    className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text))] group-hover:text-[rgb(var(--primary-default))] text-[14px] sm:text-[15px] md:text-[16px] whitespace-nowrap transition-colors duration-300"
                    data-node-id={`diagnosis-${index + 1}-cta`}
                  >
                    <span className="leading-[normal]">{ctaText}</span>
                  </div>
                </div>
                <div 
                  aria-hidden="true" 
                  className="absolute border-2 border-solid border-[rgb(var(--border))] group-hover:border-[rgb(var(--primary-default))] inset-0 pointer-events-none rounded-[var(--radius)] transition-colors duration-300" 
                />
              </a>
            </div>

            {/* Visual Area */}
            <div 
              className="bg-[rgb(var(--surface))] overflow-clip relative rounded-[8px] sm:rounded-[12px] shrink-0 w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-[40px] mb-4 sm:mb-6 md:mb-8 lg:mb-[40px]"
              data-name={`Diagnosis ${index + 1} Visual`}
              style={{ backgroundColor: diagnosis.visualColor }}
            >
                              <div className="text-center px-2 sm:px-4">
                <div 
                  className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic text-[rgb(var(--text))] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]"
                  data-node-id={`diagnosis-${index + 1}-visual-text`}
                >
                  <p className="mb-2 break-words">{diagnosis.visualTitle}</p>
                  <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[rgb(var(--text-secondary))] break-words">{diagnosis.visualSubtitle}</p>
                </div>
                
                {/* Visual Elements */}
                <div className="mt-3 sm:mt-4 md:mt-6 space-y-1 sm:space-y-2">
                  {diagnosis.id === 'cataract' && (
                    <>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[rgb(var(--primary-default))] opacity-20 mx-auto"></div>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[rgb(var(--primary-default))] opacity-40 mx-auto"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[rgb(var(--primary-default))] opacity-60 mx-auto"></div>
                    </>
                  )}
                  {diagnosis.id === 'smile' && (
                    <>
                      <div className="w-16 h-1.5 sm:w-20 sm:h-2 bg-[rgb(var(--primary-default))] opacity-60 mx-auto rounded"></div>
                      <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-[rgb(var(--primary-default))] opacity-80 mx-auto rounded"></div>
                      <div className="w-8 h-1.5 sm:w-12 sm:h-2 bg-[rgb(var(--primary-default))] mx-auto rounded"></div>
                    </>
                  )}
                  {diagnosis.id === 'vision' && (
                    <>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-[rgb(var(--primary-default))] opacity-40 rounded-full mx-auto"></div>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-[rgb(var(--primary-default))] opacity-60 rounded-full mx-auto"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[rgb(var(--primary-default))] rounded-full mx-auto"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-center max-w-4xl px-2 sm:px-4">
        <div className="text-[rgb(var(--text-secondary))] text-[13px] sm:text-[15px] md:text-[16px] font-medium mb-3 sm:mb-4 break-words">
          SNU안과의 전문적인 진료과목으로 정확한 진단과 치료를 제공합니다
        </div>
        <div className="text-[rgb(var(--primary-default))] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-bold break-words">
          노안·백내장 · 스마일2.0 · 시력교정
        </div>
      </div>

      {/* 추가 스타일 */}
      <style jsx>{`
        /* 텍스트 줄바꿈 최적화 */
        .diagnosis-card {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        .diagnosis-title {
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        
        .diagnosis-subtitle {
          word-break: keep-all;
          overflow-wrap: break-word;
          line-height: 1.4;
        }
        
        .diagnosis-description {
          word-break: keep-all;
          overflow-wrap: break-word;
          line-height: 1.5;
        }
        
        /* 반응형 텍스트 크기 조정 */
        @media (max-width: 640px) {
          .diagnosis-title {
            font-size: 20px !important;
            line-height: 1.3;
          }
          
          .diagnosis-subtitle {
            font-size: 14px !important;
            line-height: 1.4;
          }
          
          .diagnosis-description {
            font-size: 13px !important;
            line-height: 1.5;
          }
        }
        
        @media (max-width: 480px) {
          .diagnosis-title {
            font-size: 18px !important;
            line-height: 1.3;
          }
          
          .diagnosis-subtitle {
            font-size: 13px !important;
            line-height: 1.4;
          }
          
          .diagnosis-description {
            font-size: 12px !important;
            line-height: 1.5;
          }
        }
        
        /* 카드 높이 최적화 */
        .diagnosis-card {
          display: flex;
          flex-direction: column;
          min-height: 600px;
        }
        
        .diagnosis-text-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .diagnosis-description {
          flex: 1;
        }
        
        .diagnosis-cta {
          margin-top: auto;
        }
      `}</style>
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

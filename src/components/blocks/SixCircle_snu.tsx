"use client";

import React from 'react';

interface SixCircleSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

// 이미지 상수들
const imgSmileProCase01Png = "http://localhost:3845/assets/8a8f4c895b734a00bc7c48edc50d2bc684a830a2.png";
const imgSmileProCase02Png = "http://localhost:3845/assets/88de65ac2a679f54d4ea6045ee4feb9d997a5db8.png";
const imgSmileProCase03Png = "http://localhost:3845/assets/3e957db15ef5d19e0155b8b6dfe0bf24da9b2823.png";
const imgSmileProCase04Png = "http://localhost:3845/assets/ec5bbdf67b4fb4d9b90dfdc4bdbe83b55e08858b.png";
const imgSmileProCase05Png = "http://localhost:3845/assets/1300fa8511e51f58c66908e4473c6581309163dd.png";
const imgSmileProCase06Png = "http://localhost:3845/assets/820edc393d59f5bcca811b721169f6c9fccea9b4.png";

// 케이스 데이터
const cases = [
  {
    id: 1,
    image: imgSmileProCase01Png,
    caseNumber: "CASE 01",
    title: "수술시간, 수술실에 대한",
    subtitle: "심리적 부담감이 있으신 분"
  },
  {
    id: 2,
    image: imgSmileProCase02Png,
    caseNumber: "CASE 02",
    title: "각막두께가 얇으신 분",
    subtitle: ""
  },
  {
    id: 3,
    image: imgSmileProCase03Png,
    caseNumber: "CASE 03",
    title: "각막비대칭",
    subtitle: ""
  },
  {
    id: 4,
    image: imgSmileProCase04Png,
    caseNumber: "CASE 04",
    title: "동공이 큰 경우",
    subtitle: ""
  },
  {
    id: 5,
    image: imgSmileProCase05Png,
    caseNumber: "CASE 05",
    title: "고도근시, 초고도난시",
    subtitle: ""
  },
  {
    id: 6,
    image: imgSmileProCase06Png,
    caseNumber: "CASE 06",
    title: "빠른 시력의 회복과",
    subtitle: "일상생활 복귀를 희망하시는 분"
  }
];

export default function SixCircleSnu({ 
  title = "스마일 프로, 나에게 적합할까?",
  body,
  ctaText,
  href 
}: SixCircleSnuProps) {
  return (
    <div 
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full"
      itemScope
      itemType="https://schema.org/MedicalClinic"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center max-w-[1350px] px-0 relative shrink-0 w-full">
        {/* 섹션 타이틀 */}
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-4 sm:pb-6 md:pb-8 lg:pb-[17px] pt-0 px-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] max-h-[52px] sm:max-h-[60px] md:max-h-[68px] lg:max-h-[76px] xl:max-h-[51.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgb(var(--primary-default))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[36.563px] text-center tracking-[-1.6px] w-full">
              <h2 className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.1] xl:leading-[51.99px]">
                <span className="text-[rgb(var(--primary-default))]">스마일 프로,</span>
                <span className="text-[rgb(var(--text))]">{` 나에게 적합할까?`}</span>
              </h2>
            </div>
          </div>
        </div>

        {/* 케이스 그리드 */}
        <div className="box-border content-stretch flex flex-col items-center justify-start min-w-[320px] sm:min-w-[640px] md:min-w-[960px] lg:min-w-[1080px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[135px] py-0 relative shrink-0 w-full">
          <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[751.19px] max-w-[1080px] relative shrink-0 w-full">
            {/* 상단 3개 케이스 */}
            <div className="absolute bottom-[200px] sm:bottom-[250px] md:bottom-[300px] lg:bottom-[350.6px] left-0 right-0 top-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-full">
                {cases.slice(0, 3).map((caseItem) => (
                  <div 
                    key={caseItem.id}
                    className="box-border content-stretch flex flex-col items-start justify-center pb-8 sm:pb-10 md:pb-12 lg:pb-[50px] pt-0 px-2 sm:px-3 lg:px-[15px] relative shrink-0 w-full"
                  >
                    <div className="basis-0 box-border content-stretch flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] grow items-start justify-start min-h-px min-w-px px-2 sm:px-3 lg:px-[15px] py-0 relative shrink-0 w-full">
                      {/* 이미지 */}
                      <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                        <div 
                          className="bg-no-repeat bg-size-[100%_100%] bg-top-left max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[329.95px] shrink-0 size-48 sm:size-56 md:size-64 lg:size-60 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                          data-name={`smilePro_case0${caseItem.id}.png`}
                          style={{ backgroundImage: `url('${caseItem.image}')` }}
                          aria-label={`${caseItem.caseNumber} 이미지`}
                        />
                      </div>
                      
                      {/* 텍스트 내용 */}
                      <div className="content-stretch flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[6.9px] items-start justify-start relative shrink-0 w-full">
                        {/* 케이스 번호 */}
                        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] max-h-[15px] sm:max-h-[18px] md:max-h-[20px] lg:max-h-[14.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgb(var(--primary-default))] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-center w-full">
                            <h3 className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[14.99px]">
                              {caseItem.caseNumber}
                            </h3>
                          </div>
                        </div>
                        
                        {/* 설명 텍스트 */}
                        <div className="box-border content-stretch flex flex-col items-center justify-start pb-1 sm:pb-1.5 md:pb-2 lg:pb-[0.69px] pt-0 px-0 relative shrink-0 w-full">
                          <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px] relative shrink-0 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] text-center w-full">
                            <p className="mb-0 leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px]">
                              {caseItem.title}
                            </p>
                            {caseItem.subtitle && (
                              <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px]">
                                {caseItem.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 3개 케이스 */}
            <div className="absolute bottom-0 left-0 right-0 top-[200px] sm:top-[250px] md:top-[300px] lg:top-[400.6px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-full">
                {cases.slice(3, 6).map((caseItem) => (
                  <div 
                    key={caseItem.id}
                    className="box-border content-stretch flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] items-start justify-start px-2 sm:px-3 lg:px-[15px] py-0 relative shrink-0 w-full"
                  >
                    {/* 이미지 */}
                    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                      <div 
                        className="bg-no-repeat bg-size-[100%_100%] bg-top-left max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[329.95px] shrink-0 size-48 sm:size-56 md:size-64 lg:size-60 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        data-name={`smilePro_case0${caseItem.id}.png`}
                        style={{ backgroundImage: `url('${caseItem.image}')` }}
                        aria-label={`${caseItem.caseNumber} 이미지`}
                      />
                    </div>
                    
                    {/* 텍스트 내용 */}
                    <div className="content-stretch flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[7px] items-start justify-start relative shrink-0 w-full">
                      {/* 케이스 번호 */}
                      <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                        <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] max-h-[15px] sm:max-h-[18px] md:max-h-[20px] lg:max-h-[14.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgb(var(--primary-default))] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-center w-full">
                          <h3 className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[14.99px]">
                            {caseItem.caseNumber}
                          </h3>
                        </div>
                      </div>
                      
                      {/* 설명 텍스트 */}
                      <div className="box-border content-stretch flex flex-col items-center justify-start pb-1 sm:pb-1.5 md:pb-2 lg:pb-[0.8px] pt-0 px-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px] relative shrink-0 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] text-center w-full">
                          <p className="mb-0 leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px]">
                            {caseItem.title}
                          </p>
                          {caseItem.subtitle && (
                            <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px]">
                              {caseItem.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        /* 모바일 최적화 */
        @media (max-width: 640px) {
          .case-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        
        /* 태블릿 최적화 */
        @media (min-width: 641px) and (max-width: 1024px) {
          .case-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        
        /* 데스크톱 최적화 */
        @media (min-width: 1025px) {
          .case-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
        
        /* 호버 효과 */
        .case-card:hover {
          transform: translateY(-4px);
          transition: transform 0.3s ease;
        }
        
        .case-image:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

// Props 기본값 설정
SixCircleSnu.defaultProps = {
  title: "스마일 프로, 나에게 적합할까?",
  body: "",
  ctaText: "",
  href: ""
};

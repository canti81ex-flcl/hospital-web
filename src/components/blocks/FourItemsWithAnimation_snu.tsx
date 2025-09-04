"use client";

import React, { useState, useEffect, useRef } from 'react';

interface FourItemsWithAnimationSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

// 이미지 상수들
const imgArticleSmileProGraph1Png = "http://localhost:3845/assets/9a08a8eff6567bb92f970139d2fdf6662f0b8052.png";
const imgArticleSmileProGraph3Jpg = "http://localhost:3845/assets/b66272650ec6c68ba64c327686f48ffc15c7cad5.png";
const imgArticleSmileProGraph4Jpg = "http://localhost:3845/assets/2b59d40f04fba82b11a7993f684d02bf48bc06b3.png";
const imgGroup = "http://localhost:3845/assets/4f7ca4650c2269634ebddc92cf552efaca74e5a2.svg";
const imgGroup1 = "http://localhost:3845/assets/b652dbeb62b8c3780f1dd29f39cb2832bed2a37b.svg";

// Component2 컴포넌트 (SVG 아이콘)
interface Component2Props {
  variant?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
}

function Component2({ variant = "1" }: Component2Props) {
  if (variant === "11") {
    return (
      <div className="relative size-full" data-name="variant=11">
        <div className="absolute contents inset-0" data-name="Clip path group">
          <div className="absolute inset-[14.29%_1.07%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.939px] mask-size-[87.38px_6.577px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
            <div className="absolute inset-[-10%_-0.55%]">
              <img alt="그래프 아이콘" className="block max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default function FourItemsWithAnimationSnu({ 
  title = "스마일프로의 검증된 임상결과",
  body,
  ctaText,
  href 
}: FourItemsWithAnimationSnuProps) {
  // 애니메이션 상태 관리
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    preOp: 0,
    pod1: 0,
    pod15: 0,
    pod3m: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 애니메이션 시작
            animateChart();
          }
        });
      },
      { threshold: 0.3 } // 섹션이 30% 보일 때 시작
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 차트 애니메이션 함수
  const animateChart = () => {
    const targetValues = {
      preOp: 0.55,
      pod1: 1.3,
      pod15: 0.81,
      pod3m: 0.66
    };

    const duration = 2000; // 2초
    const steps = 60; // 60프레임
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // easeOutCubic 이징 함수
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      setAnimatedValues({
        preOp: targetValues.preOp * easedProgress,
        pod1: targetValues.pod1 * easedProgress,
        pod15: targetValues.pod15 * easedProgress,
        pod3m: targetValues.pod3m * easedProgress
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // 최종 값으로 설정
        setAnimatedValues(targetValues);
      }
    }, stepDuration);
  };

  // 높이 계산 함수
  const getBarHeight = (value: number, maxValue: number = 1.4) => {
    const maxHeight = 280; // POD 1의 최대 높이
    return (value / maxValue) * maxHeight;
  };
  return (
    <div 
      ref={sectionRef}
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full"
      itemScope
      itemType="https://schema.org/MedicalClinic"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[1350px] px-0 relative shrink-0 w-full">
        {/* 섹션 헤더 */}
        <div className="h-[120px] sm:h-[140px] md:h-[160px] lg:h-[176px] xl:h-[176.38px] mb-[-0.01px] relative shrink-0 w-full">
          {/* 메인 타이틀 */}
          <div className="absolute content-stretch flex flex-col items-center justify-start left-0 right-0 top-0">
            <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] max-h-[52px] sm:max-h-[60px] md:max-h-[68px] lg:max-h-[76px] xl:max-h-[51.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.031px] text-center text-nowrap tracking-[-1.6px]">
              <h2 className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.1] xl:leading-[51.99px]">
                <span className="text-[rgb(var(--text))]">{`스마일프로의 `}</span>
                <span className="text-[rgb(var(--primary-default))]">검증된 임상결과</span>
              </h2>
            </div>
          </div>

          {/* 서브타이틀 */}
          <div className="absolute box-border content-stretch flex items-start justify-start left-0 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[258.81px] py-0 right-0 top-[50px] sm:top-[60px] md:top-[70px] lg:top-[68px]">
            <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[rgb(var(--text-secondary))] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22.5px] text-center text-nowrap tracking-[-0.96px]">
              <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.1] xl:leading-[38.39px]">{`아시아 및 유럽지역 스마일프로 수술 `}</p>
            </div>
            <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22.688px] text-center text-nowrap tracking-[-0.96px]">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.1] xl:leading-[38.39px]">6만5천회</p>
                <div className="absolute bottom-px content-stretch flex flex-col h-[4px] sm:h-[5px] md:h-[6px] lg:h-[7px] items-start justify-start left-0 right-0">
                  <div className="box-border content-stretch flex flex-col h-[4px] sm:h-[5px] md:h-[6px] lg:h-[7px] items-center justify-center overflow-clip px-0 py-[0.212px] relative shrink-0 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[87.38px]">
                    <div className="h-[3px] sm:h-[4px] md:h-[5px] lg:h-[6.577px] overflow-clip relative shrink-0 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[87.38px]">
                      <Component2 variant="11" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[rgb(var(--text-secondary))] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22.125px] text-center text-nowrap tracking-[-0.96px]">
              <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.1] xl:leading-[38.39px]">{` 이상 시행으로 임상결과의 안정성과 우수성 입증`}</p>
            </div>
          </div>

          {/* 출처 */}
          <div className="absolute content-stretch flex items-start justify-center left-1/2 top-[80px] sm:top-[90px] md:top-[100px] lg:top-[117.37px] translate-x-[-50%]">
            <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[rgba(var(--text),0.6)] text-center text-nowrap">
              <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.1] xl:leading-[24px]">(출처: ZEISS)</p>
            </div>
          </div>
        </div>

        {/* 4개 아이템 그리드 */}
        <div className="h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1106.19px] mb-[-0.01px] relative shrink-0 w-full">
          {/* 아이템 1 - 회복시간 단축 */}
          <div className="absolute bg-white bottom-[300px] sm:bottom-[350px] md:bottom-[400px] lg:bottom-[450px] xl:bottom-[524.6px] box-border content-stretch flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] items-start justify-start left-0 pb-8 sm:pb-10 md:pb-12 lg:pb-[44.99px] pt-8 sm:pt-10 md:pt-12 lg:pt-[44.15px] px-4 sm:px-6 md:px-8 lg:px-[50px] top-0 w-full lg:w-[660px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium justify-center leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] relative shrink-0 text-[0px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] text-center tracking-[-1.333px] w-full">
                <p className="mb-0 leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px]">나노에너지 레이저의 초당 200만번 균일한 조사로</p>
                <p className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">{` 수술 후 회복시간 단축 `}</p>
              </div>
            </div>
            <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[250px] md:h-[300px] lg:h-[327px] max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[560px] shrink-0 w-full rounded-lg" 
              data-name="Article → smilePro_graph1.png"
              style={{ backgroundImage: `url('${imgArticleSmileProGraph1Png}')` }}
              aria-label="회복시간 단축 그래프"
            />
            <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-4 sm:pt-6 md:pt-8 lg:pt-8 px-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[0px] text-center w-full">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                  <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">{`* `}</span>
                  <span className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgba(var(--text),0.6)]">{`Tissue Deformation by Bubbles & Plasma (출처 : zeiss)`}</span>
                </p>
              </div>
            </div>
          </div>

          {/* 아이템 2 - 시력의 질 상승 */}
          <div className="absolute bg-white bottom-[300px] sm:bottom-[350px] md:bottom-[400px] lg:bottom-[450px] xl:bottom-[524.6px] left-[690px] top-0 w-full lg:w-[660px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute content-stretch flex flex-col items-center justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-[50px] top-8 sm:top-10 md:top-12 lg:top-[44.15px]">
              <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium justify-center leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] relative shrink-0 text-[0px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.594px] text-[rgba(var(--text),0.6)] text-center text-nowrap tracking-[-1.333px] whitespace-pre">
                <p className="mb-0 leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px]">타 레이저교정술 대비 수술 후</p>
                <p className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">{`  시력의 질 상승  `}</p>
              </div>
            </div>

            {/* 차트 영역 */}
            <div className="absolute content-stretch flex flex-col items-end justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-[50px] top-[100px] sm:top-[120px] md:top-[140px] lg:top-[123.6px]">
              <div className="box-border content-stretch flex flex-col h-[200px] sm:h-[250px] md:h-[280px] lg:h-[301px] items-start justify-center pb-px pt-0 px-0 relative shrink-0 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[530px]">
                <div aria-hidden="true" className="absolute border-[rgb(var(--border))] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                
                {/* Y축 라벨 */}
                <div className="absolute left-[-20px] sm:left-[-25px] lg:left-[-30px] top-0 bottom-0 flex flex-col justify-between py-2">
                  {[1.4, 1.2, 1, 0.8, 0.6, 0.4, 0.2, 0].map((value, index) => (
                    <div key={index} className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12.492px] text-[rgba(var(--text),0.6)] text-nowrap text-right">
                      <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[20.8px]">{value}</p>
                    </div>
                  ))}
                </div>

                {/* 차트 바 - 애니메이션 적용 */}
                <div className="box-border content-stretch flex items-end justify-center pl-4 sm:pl-6 lg:pl-[30px] pr-0 py-0 relative shrink-0 w-full h-full">
                  {/* PRE OP */}
                  <div className="flex flex-col items-center justify-end h-full px-1 sm:px-2">
                    <div className="flex flex-col items-center justify-center mb-2">
                      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-center w-full mb-1">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[13px]">PRE OP</p>
                      </div>
                      <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-center w-full">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[14px]">{animatedValues.preOp.toFixed(2)}</p>
                      </div>
                    </div>
                    <div 
                      className="bg-[rgb(var(--primary-default))] shrink-0 w-3 sm:w-4 lg:w-5 rounded-t-sm chart-bar"
                      style={{ 
                        height: `${getBarHeight(animatedValues.preOp)}px`,
                        minHeight: '4px'
                      }}
                    />
                  </div>

                  {/* POD 1 */}
                  <div className="flex flex-col items-center justify-end h-full px-1 sm:px-2">
                    <div className="flex flex-col items-center justify-center mb-2">
                      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12.695px] text-center w-full mb-1">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[13px]">POD 1</p>
                      </div>
                      <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-center w-full">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[14px]">{animatedValues.pod1.toFixed(2)}</p>
                      </div>
                    </div>
                    <div 
                      className="bg-[rgb(var(--primary-default))] shrink-0 w-3 sm:w-4 lg:w-5 rounded-t-sm chart-bar"
                      style={{ 
                        height: `${getBarHeight(animatedValues.pod1)}px`,
                        minHeight: '4px'
                      }}
                    />
                  </div>

                  {/* POD 15 */}
                  <div className="flex flex-col items-center justify-end h-full px-1 sm:px-2">
                    <div className="flex flex-col items-center justify-center mb-2">
                      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12.898px] text-center w-full mb-1">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[13px]">POD 15</p>
                      </div>
                      <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-center w-full">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[14px]">{animatedValues.pod15.toFixed(2)}</p>
                      </div>
                    </div>
                    <div 
                      className="bg-[rgb(var(--primary-default))] shrink-0 w-3 sm:w-4 lg:w-5 rounded-t-sm chart-bar"
                      style={{ 
                        height: `${getBarHeight(animatedValues.pod15)}px`,
                        minHeight: '4px'
                      }}
                    />
                  </div>

                  {/* POD 3M */}
                  <div className="flex flex-col items-center justify-end h-full px-1 sm:px-2">
                    <div className="flex flex-col items-center justify-center mb-2">
                      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-center w-full mb-1">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[13px]">POD 3M</p>
                      </div>
                      <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] text-center w-full">
                        <p className="leading-[1.2] sm:leading-[1.1] md:leading-[1.0] lg:leading-[14px]">{animatedValues.pod3m.toFixed(2)}</p>
                      </div>
                    </div>
                    <div 
                      className="bg-[rgb(var(--primary-default))] shrink-0 w-3 sm:w-4 lg:w-5 rounded-t-sm chart-bar"
                      style={{ 
                        height: `${getBarHeight(animatedValues.pod3m)}px`,
                        minHeight: '4px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute box-border content-stretch flex flex-col items-center justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] pb-1 sm:pb-1.5 md:pb-2 lg:pb-[0.8px] pt-0 px-0 right-4 sm:right-6 md:right-8 lg:right-[50px] top-[300px] sm:top-[350px] md:top-[400px] lg:top-[471.6px]">
              <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[17.297px] text-center text-nowrap">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px]">COMPARISON OF OSI OVER TIME</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-center justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-[50px] top-[320px] sm:top-[370px] md:top-[420px] lg:top-[507.39px]">
              <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[0px] text-center text-nowrap">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                  <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">{`* `}</span>
                  <span className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgba(var(--text),0.6)]">{`Tissue Deformation by Bubbles & Plasma (출처 : zeiss)`}</span>
                </p>
              </div>
            </div>
          </div>

          {/* 아이템 3 - 부드러운 박리 */}
          <div className="absolute bg-white bottom-0 box-border content-stretch flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] items-start justify-start left-0 pb-8 sm:pb-10 md:pb-12 lg:pb-[45px] pt-8 sm:pt-10 md:pt-12 lg:pt-[44.145px] px-4 sm:px-6 md:px-8 lg:px-[50px] top-[300px] sm:top-[350px] md:top-[400px] lg:top-[611.6px] w-full lg:w-[660px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium justify-center leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] relative shrink-0 text-[0px] text-[rgba(var(--text),0.6)] text-center tracking-[-1.333px] w-full">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] mb-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.594px]">
                  <span className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium text-[rgba(var(--text),0.6)] tracking-[-1.333px]">타 레이저 시력교정술 대비 각막 실질의</span>
                  <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">부드러운 박리</span>
                </p>
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.594px]">
                  <span className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium text-[rgba(var(--text),0.6)] tracking-[-1.333px]">{`실질 분리과정에서 `}</span>
                  <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">손상 최소화 , 시력의 질 상승</span>
                </p>
              </div>
            </div>
            <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[220px] md:h-[240px] lg:h-60 max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[560px] shrink-0 w-full rounded-lg" 
              data-name="Article → smilePro_graph3.jpg"
              style={{ backgroundImage: `url('${imgArticleSmileProGraph3Jpg}')` }}
              aria-label="부드러운 박리 그래프"
            />
            <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-4 sm:pt-6 md:pt-8 lg:pt-8 px-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[0px] text-center w-full">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14.297px]">
                  <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">{`* `}</span>
                  <span className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgba(var(--text),0.6)]">SMILE PRO와 타 시력교정술 각막 실질 분리 후 비교 (출처: ZEISS)</span>
                </p>
              </div>
            </div>
          </div>

          {/* 아이템 4 - 균일한 각막 모양 */}
          <div className="absolute bg-white bottom-0 left-[690px] top-[300px] sm:top-[350px] md:top-[400px] lg:top-[611.6px] w-full lg:w-[660px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute content-stretch flex flex-col items-center justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-[50px] top-8 sm:top-10 md:top-12 lg:top-[44.15px]">
              <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium justify-center leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] relative shrink-0 text-[0px] text-[rgba(var(--text),0.6)] text-center text-nowrap tracking-[-1.333px] whitespace-pre">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] mb-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.594px]">타 시력교정술 대비 수술 후</p>
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24.3px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.594px]">
                  <span className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-medium text-[rgba(var(--text),0.6)] tracking-[-1.333px]">{`전체적으로 `}</span>
                  <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">균일한 각막 모양, 질 높은 시력 구성</span>
                </p>
              </div>
            </div>
            <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[220px] md:h-[240px] lg:h-60 left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-[50px] top-[100px] sm:top-[120px] md:top-[140px] lg:top-[123.59px] rounded-lg" 
              data-name="Article → smilePro_graph4.jpg"
              style={{ backgroundImage: `url('${imgArticleSmileProGraph4Jpg}')` }}
              aria-label="각막 모양 비교 그래프"
            />
            <div className="absolute box-border content-stretch flex flex-col items-center justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] pb-1 sm:pb-1.5 md:pb-2 lg:pb-[0.8px] pt-0 px-0 right-4 sm:right-6 md:right-8 lg:right-[50px] top-[320px] sm:top-[360px] md:top-[400px] lg:top-[382.59px]">
              <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16.875px] text-center text-nowrap">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[28.8px]">SMILE PRO 외 타 시력교정술 집도후 각막모양 비교</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-center justify-start left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-[50px] top-[350px] sm:top-[390px] md:top-[430px] lg:top-[418.39px]">
              <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13.828px] text-[rgba(var(--text),0.6)] text-center text-nowrap">
                <p className="leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[24px]">(본원 집도 환자 사례, 동일한 환자의 왼쪽눈은 타 교정술, 오른쪽 눈을 스마일 프로 집도 결과)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        /* 모바일 최적화 */
        @media (max-width: 640px) {
          .item-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        
        /* 태블릿 최적화 */
        @media (min-width: 641px) and (max-width: 1024px) {
          .item-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        
        /* 데스크톱 최적화 */
        @media (min-width: 1025px) {
          .item-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        
        /* 호버 효과 */
        .item-card:hover {
          transform: translateY(-4px);
          transition: transform 0.3s ease;
        }
        
        .chart-bar:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        /* 차트 애니메이션 */
        .chart-bar {
          transition: height 0.1s ease-out;
          transform-origin: bottom;
        }

        .chart-bar.animate {
          animation: growUp 0.1s ease-out forwards;
        }

        @keyframes growUp {
          from {
            height: 4px;
            opacity: 0.7;
          }
          to {
            opacity: 1;
          }
        }

        /* 숫자 카운팅 애니메이션 */
        .chart-value {
          transition: all 0.1s ease-out;
        }

        /* 섹션 진입 애니메이션 */
        .section-enter {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .section-enter.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

// Props 기본값 설정
FourItemsWithAnimationSnu.defaultProps = {
  title: "스마일프로의 검증된 임상결과",
  body: "",
  ctaText: "",
  href: ""
};

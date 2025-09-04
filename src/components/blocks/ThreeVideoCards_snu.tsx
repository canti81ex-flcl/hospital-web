"use client";

import React from 'react';

const imgImage = "http://localhost:3845/assets/09e21e0c407686fada8f091959db2a2afe67b008.png";
const imgLinkPhotoImageOf = "http://localhost:3845/assets/04f02041a765cf3ad81b9a1f14b59b3d35f76517.png";

interface ThreeVideoCardsSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

export default function ThreeVideoCards_snu({ 
  title = "SNU안과의 혁신적인 기술",
  body,
  ctaText,
  href 
}: ThreeVideoCardsSnuProps) {
  return (
    <div
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full"
      itemScope
      itemType="https://schema.org/MedicalClinic"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[1350px] px-0 relative shrink-0 w-full">
        
        {/* 섹션 헤더 */}
        <div className="content-stretch flex flex-col items-center justify-start mb-8 sm:mb-12 lg:mb-16 relative shrink-0 w-full">
          <h2 className="font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-center leading-[1.3] tracking-[-1px] mb-4" itemProp="headline">
            {title}
          </h2>
          {body && (
            <p className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[16px] sm:text-[18px] md:text-[20px] text-center leading-[1.5] max-w-[800px]">
              {body}
            </p>
          )}
        </div>

        {/* 3개 비디오 카드 그리드 - 가로 한줄 */}
        <div className="box-border content-stretch flex items-start justify-center pl-0 pr-0 py-0 relative shrink-0 w-full gap-4 sm:gap-6 lg:gap-8 video-grid">
          
          {/* 카드 1 - 오큘라인 영상 */}
          <div className="box-border content-stretch flex flex-col items-start justify-center pt-0 px-0 relative shrink-0 w-[400px] h-[800px] video-card">
            <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-0 grow isolate items-center justify-start min-h-px min-w-px pb-0 pt-0 px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[rgb(var(--border))] border-solid inset-0 pointer-events-none" />
              
              {/* 비디오 영역 */}
              <div className="bg-black content-stretch flex flex-col h-[400px] items-start justify-start overflow-clip relative shrink-0 w-full z-[2] rounded-t-lg">
                <div className="bg-black h-[400px] overflow-clip relative shrink-0 w-full rounded-t-lg">
                  {/* 비디오 썸네일 */}
                  <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top h-[400px] left-0 right-0 top-0 video-thumbnail" 
                    style={{ backgroundImage: `url('${imgImage}')` }} 
                    aria-label="오큘라인 영상 썸네일"
                  />
                  
                  {/* 비디오 제목 오버레이 */}
                  <div className="absolute content-stretch flex items-start justify-end left-3 right-3 top-3">
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[300px] sm:max-w-[350px] lg:max-w-[408px] min-h-px min-w-px overflow-clip pb-0 pl-8 sm:pl-12 lg:pl-[50px] pr-0 pt-2 relative self-stretch shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full">
                        <div className="[text-shadow:rgba(0,0,0,0.5)_0px_0px_2px] flex flex-col font-['Roboto:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eeeeee] text-[16px] sm:text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[1.3]">오큘라인 영상</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute box-border content-stretch flex items-start justify-start left-[-5px] overflow-clip p-[5px] rounded-[25px] size-[50px] top-0">
                      <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left rounded-[20px] shrink-0 size-10" data-name="Link - Photo image of 쓰리웨이" style={{ backgroundImage: `url('${imgLinkPhotoImageOf}')` }} aria-label="쓰리웨이 프로필 이미지" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 설명 텍스트 영역 */}
              <div className="box-border content-stretch flex flex-col gap-4 isolate items-start justify-start px-6 py-6 relative shrink-0 w-full z-[1] bg-white h-[400px]">
                {/* 번호 배지와 제목 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pl-12 pr-0 py-0 relative shrink-0 w-full z-[2]">
                  <div className="absolute bg-[rgb(var(--primary-default))] box-border content-center flex flex-wrap gap-0 h-[31px] items-center justify-center left-0 pb-[8.5px] pt-[7.5px] px-0 rounded-[37.5px] top-0 w-11">
                    <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white">
                      <p className="leading-[14.99px] whitespace-pre">01</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[18px] sm:text-[19px] lg:text-[19.359px] text-nowrap tracking-[-0.84px]">
                    <p className="leading-[1.4] whitespace-pre">정교해진 난시 교정</p>
                  </div>
                </div>

                {/* 설명 텍스트 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0 px-0 relative shrink-0 w-full z-[1]">
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[0px] text-[15px] sm:text-[16px] lg:text-[17.016px] text-[rgba(var(--text),0.6)] tracking-[-0.36px] w-full">
                    <p className="mb-2">
                      <span className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-normal text-[rgba(var(--text),0.6)] tracking-[-0.36px]">{`난시축의 회전을 보정하는 `}</span>
                      <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">오큘라인[OcuLign®]</span>
                    </p>
                    <p className="text-[rgba(var(--text),0.6)]">으로 더욱 정교해진 솔루션</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 카드 2 - 센트럴라인 영상 */}
          <div className="box-border content-stretch flex flex-col items-start justify-center pt-0 px-0 relative shrink-0 w-[400px] h-[800px] video-card">
            <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-0 grow isolate items-center justify-start min-h-px min-w-px pb-0 pt-0 px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[rgb(var(--border))] border-solid inset-0 pointer-events-none" />
              
              {/* 비디오 영역 */}
              <div className="bg-black content-stretch flex flex-col h-[400px] items-start justify-start overflow-clip relative shrink-0 w-full z-[2] rounded-t-lg">
                <div className="bg-black h-[400px] overflow-clip relative shrink-0 w-full rounded-t-lg">
                  {/* 비디오 썸네일 */}
                  <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top h-[400px] left-0 right-0 top-0 video-thumbnail" 
                    style={{ backgroundImage: `url('${imgImage}')` }} 
                    aria-label="센트럴라인 영상 썸네일"
                  />
                  
                  {/* 비디오 제목 오버레이 */}
                  <div className="absolute content-stretch flex items-start justify-end left-3 right-3 top-3">
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[300px] sm:max-w-[350px] lg:max-w-[408px] min-h-px min-w-px overflow-clip pb-0 pl-8 sm:pl-12 lg:pl-[50px] pr-0 pt-2 relative self-stretch shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full">
                        <div className="[text-shadow:rgba(0,0,0,0.5)_0px_0px_2px] flex flex-col font-['Roboto:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eeeeee] text-[16px] sm:text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[1.3]">센트럴라인 영상</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute box-border content-stretch flex items-start justify-start left-[-5px] overflow-clip p-[5px] rounded-[25px] size-[50px] top-0">
                      <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left rounded-[20px] shrink-0 size-10" data-name="Link - Photo image of 쓰리웨이" style={{ backgroundImage: `url('${imgLinkPhotoImageOf}')` }} aria-label="쓰리웨이 프로필 이미지" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 설명 텍스트 영역 */}
              <div className="box-border content-stretch flex flex-col gap-4 isolate items-start justify-start px-6 py-6 relative shrink-0 w-full z-[1] bg-white h-[400px]">
                {/* 번호 배지와 제목 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pl-12 pr-0 py-0 relative shrink-0 w-full z-[2]">
                  <div className="absolute bg-[rgb(var(--primary-default))] box-border content-center flex flex-wrap gap-0 h-[31px] items-center justify-center left-0 pb-[8.5px] pt-[7.5px] px-0 rounded-[37.5px] top-0 w-11">
                    <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white">
                      <p className="leading-[14.99px] whitespace-pre">02</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[18px] sm:text-[19px] lg:text-[19.523px] text-nowrap tracking-[-0.84px]">
                    <p className="leading-[1.4] whitespace-pre">자동동공고정 시스템</p>
                  </div>
                </div>

                {/* 설명 텍스트 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0 px-0 relative shrink-0 w-full z-[1]">
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[0px] text-[15px] sm:text-[16px] lg:text-[17.156px] text-[rgba(var(--text),0.6)] tracking-[-0.36px] w-full">
                    <p className="mb-2">눈의 움직임을 감지, 중심을 자동으로 잡아주는</p>
                    <p className="mb-2">
                      <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">센트럴라인[CentralLign®]</span>
                      <span className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-normal text-[rgba(var(--text),0.6)] tracking-[-0.36px]">으로 더욱 정확해진</span>
                    </p>
                    <p className="text-[rgba(var(--text),0.6)]">수술 결과</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 카드 3 - 미세안구고정시스템 */}
          <div className="box-border content-stretch flex flex-col items-start justify-center pt-0 px-0 relative shrink-0 w-[400px] h-[800px] video-card">
            <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-0 grow isolate items-center justify-start min-h-px min-w-px pb-0 pt-0 px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[rgb(var(--border))] border-solid inset-0 pointer-events-none" />
              
              {/* 비디오 영역 */}
              <div className="bg-black content-stretch flex flex-col h-[400px] items-start justify-start overflow-clip relative shrink-0 w-full z-[2] rounded-t-lg">
                <div className="bg-black h-[400px] overflow-clip relative shrink-0 w-full rounded-t-lg">
                  {/* 비디오 썸네일 */}
                  <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top h-[400px] left-0 right-0 top-0 video-thumbnail" 
                    style={{ backgroundImage: `url('${imgImage}')` }} 
                    aria-label="미세안구고정시스템 영상 썸네일"
                  />
                  
                  {/* 비디오 제목 오버레이 */}
                  <div className="absolute content-stretch flex items-start justify-end left-3 right-3 top-3">
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[300px] sm:max-w-[350px] lg:max-w-[408px] min-h-px min-w-px overflow-clip pb-0 pl-8 sm:pl-12 lg:pl-[50px] pr-0 pt-2 relative self-stretch shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full">
                        <div className="[text-shadow:rgba(0,0,0,0.5)_0px_0px_2px] flex flex-col font-['Roboto:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#eeeeee] text-[16px] sm:text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[1.3]">미세안구고정시스템</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute box-border content-stretch flex items-start justify-start left-[-5px] overflow-clip p-[5px] rounded-[25px] size-[50px] top-0">
                      <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left rounded-[20px] shrink-0 size-10" data-name="Link - Photo image of 쓰리웨이" style={{ backgroundImage: `url('${imgLinkPhotoImageOf}')` }} aria-label="쓰리웨이 프로필 이미지" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 설명 텍스트 영역 */}
              <div className="box-border content-stretch flex flex-col gap-4 isolate items-start justify-start px-6 py-6 relative shrink-0 w-full z-[1] bg-white h-[400px]">
                {/* 번호 배지와 제목 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pl-12 pr-0 py-0 relative shrink-0 w-full z-[2]">
                  <div className="absolute bg-[rgb(var(--primary-default))] box-border content-center flex flex-wrap gap-0 h-[31px] items-center justify-center left-0 pb-[8.5px] pt-[7.5px] px-0 rounded-[37.5px] top-0 w-11">
                    <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white">
                      <p className="leading-[14.99px] whitespace-pre">03</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[18px] sm:text-[19px] lg:text-[19.523px] text-nowrap tracking-[-0.84px]">
                    <p className="leading-[1.4] whitespace-pre">미세안구고정시스템</p>
                  </div>
                </div>

                {/* 설명 텍스트 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0 px-0 relative shrink-0 w-full z-[1]">
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[0px] text-[15px] sm:text-[16px] lg:text-[17.156px] text-[rgba(var(--text),0.6)] tracking-[-0.36px] w-full">
                    <p className="mb-2">수술 중 안구의 미세한 움직임까지</p>
                    <p className="mb-2">
                      <span className="font-['Jost:SemiBold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[rgb(var(--primary-default))]">정밀하게 추적</span>
                      <span className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-normal text-[rgba(var(--text),0.6)] tracking-[-0.36px]">하여</span>
                    </p>
                    <p className="text-[rgba(var(--text),0.6)]">더욱 안전하고 정확한 수술</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        /* 가로 한줄 레이아웃 */
        .video-grid {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: nowrap;
        }
        
        /* 모바일 최적화 - 세로 스택 */
        @media (max-width: 768px) {
          .video-grid {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .video-card {
            width: 100% !important;
            max-width: 400px;
            min-width: auto;
            height: 800px !important;
          }
        }
        
        /* 태블릿 최적화 - 2열 */
        @media (min-width: 769px) and (max-width: 1024px) {
          .video-grid {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }
          
          .video-card {
            width: 400px !important;
            height: 800px !important;
          }
        }
        
        /* 데스크톱 최적화 - 3열 한줄 */
        @media (min-width: 1025px) {
          .video-grid {
            flex-wrap: nowrap;
            justify-content: center;
            gap: 2rem;
          }
          
          .video-card {
            width: 400px !important;
            height: 800px !important;
          }
        }
        
        /* 호버 효과 */
        .video-card:hover {
          transform: translateY(-4px);
          transition: transform 0.3s ease;
        }
        
        .video-thumbnail:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
        
        /* 카드 스타일 */
        .video-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .video-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </div>
  );
}

// Props 기본값 설정
ThreeVideoCards_snu.defaultProps = {
  title: "SNU안과의 혁신적인 기술",
  body: "최첨단 기술로 더욱 정확하고 안전한 시력교정술을 제공합니다",
  ctaText: "자세히 보기",
  href: "#"
};
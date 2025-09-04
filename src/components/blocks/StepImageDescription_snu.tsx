"use client";

import React from 'react';

interface StepImageDescriptionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

// 이미지 상수들
const imgSafety = "http://localhost:3845/assets/47b6304ca95ec8f5426941bfc0168c1a36492a55.png";
const imgPatient = "http://localhost:3845/assets/a0d99023881fbd534620a181558f09545f53793b.png";
const imgTrust = "http://localhost:3845/assets/3280ee65a877a5a994097ad9c0c877d258276253.png";

// SNU안과 6가지 약속 데이터
const promises = [
  {
    id: 1,
    number: "01",
    title: "안전중심",
    description: [
      "안전을 바탕으로 신뢰와 믿음이 함께하는 SNU안과,",
      "엄격한 가이드라인을 적용하여 진일보한 진료를 통해 보다 안전하고",
      "보다 만족스러운 수술결과를 약속합니다."
    ],
    image: imgSafety,
    hasImage: true
  },
  {
    id: 2,
    number: "02",
    title: "환자중심",
    description: [
      "단계별 진료시스템을 통한 체계적인 검사가 진행되며 개개인에 최적의 맞춤진료를 약속합니다.",
      "환자가 내원하여 상담부터 수술, 회복그리고 평생관리까지 전문 책임 관리시스템으로 환자분들이",
      "느낄 수 있는 불편함을 최소화하기 위해 노력하고 있습니다."
    ],
    image: imgPatient,
    hasImage: true
  },
  {
    id: 3,
    number: "03",
    title: "믿을 수 있는 의료진",
    description: [
      "서울대병원, 서울아산병원, 삼성서울병원 교수출신의 엘리트 의료진으로 구성되어",
      "고품질 의료서비스를 제공하며 끊임없는 투자와 연구개발을 통해 안질환 전문병원으로 성장하기",
      "위해 더욱노력하고 있습니다."
    ],
    image: null,
    hasImage: false
  },
  {
    id: 4,
    number: "04",
    title: "체계적인 의료 시스템",
    description: [
      "대학병원급 장비와 시스템을 차용하면서 복잡한 절차와 대기시간을 최소화하였습니다.",
      "의료 서비스의 질은 높이고 치료비 부담은 줄인 감동의 서비스를 경험하세요."
    ],
    image: null,
    hasImage: false
  },
  {
    id: 5,
    number: "05",
    title: "원칙주의 진료",
    description: [
      "사람과 사람을 연결하는 신뢰를 바탕으로 책임감 있는 진료, 기본을 지키는",
      "원칙주의 진료를 추구합니다. 진실된 마음으로 환자와 소통하고, 건강과 행복을 찾아드리며,",
      "언제나 다시 찾을 수 있는 믿고 안심할 수 있는 안과, 종합안과병원으로 성장하기 위해",
      "지속적인 연구와 끊임없는 노력을 하고 있습니다."
    ],
    highlight: "한 분, 한 분에게 최선의 진료와 수준 높은 의료서비스를 제공할 것을 약속합니다.",
    image: null,
    hasImage: false
  },
  {
    id: 6,
    number: "06",
    title: "환자가 추천하는 안과",
    description: [
      "사람과 사람의 만남, 따뜻한 마음을 담아 진료하는 환자중심 의료서비스로 고객만족을",
      "최고의 가치로 생각하며 환자분들의 고민을 함께 나누고, 건강과 행복을 드리기 위해",
      "노력하고 있습니다."
    ],
    image: imgTrust,
    hasImage: true
  }
];

export default function StepImageDescriptionSnu({
  title = "SNU안과 6가지 약속",
  body,
  ctaText,
  href
}: StepImageDescriptionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[150px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[149px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[285px] relative size-full min-h-screen"
      data-name="Step Image Description Section SNU"
      data-anchor="promises"
      id="promises"
      itemScope
      itemType="https://schema.org/MedicalClinic"
      aria-labelledby="promises-title"
    >
      {/* 메인 컨테이너 */}
      <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[35.01px] items-start justify-start max-w-[1350px] relative shrink-0 w-full">
        {/* 메인 타이틀 */}
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[33.469px] text-center tracking-[-1.08px] w-full">
            <h2 id="promises-title" className="leading-[1.45] mb-0" itemProp="name">{title}</h2>
          </div>
        </div>

        {/* 약속 목록 */}
        <div className="content-stretch flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-start justify-start relative shrink-0 w-full">
          {promises.map((promise, index) => (
            <div 
              key={promise.id}
              className="bg-[rgb(var(--surface))] content-center flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-start relative shrink-0 w-full rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              data-name={`Promise ${promise.id}`}
              data-node-id={`25:${473 + index * 17}`}
            >
              {/* 이미지 영역 */}
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full lg:w-[544px]">
                {promise.hasImage ? (
                  <div 
                    className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[250px] md:h-[300px] lg:h-[390px] shrink-0 w-full rounded-l-lg"
                    data-name={promise.title}
                    data-node-id={`25:${475 + index * 17}`}
                    style={{ backgroundImage: `url('${promise.image}')` }}
                    aria-label={`${promise.title} 이미지`}
                  />
                ) : (
                  <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[390px] shrink-0 w-full bg-[rgb(var(--surface-variant))] rounded-l-lg flex items-center justify-center">
                    <div className="text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] font-medium">
                      {promise.title}
                    </div>
                  </div>
                )}
              </div>

              {/* 텍스트 영역 */}
              <div className="box-border content-stretch flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[6.79px] items-start justify-start pl-4 sm:pl-6 md:pl-8 lg:pl-[70px] pr-4 sm:pr-6 md:pr-8 lg:pr-0 py-4 sm:py-6 md:py-8 lg:py-0 relative shrink-0 w-full lg:w-[806px]">
                {/* 제목과 번호 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 sm:pl-2 md:pl-4 lg:pl-[54px] pr-0 py-0 relative shrink-0 w-full">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start justify-start relative w-full">
                    {/* 번호 배지 */}
                    <div className="bg-[#c18861] box-border content-center flex flex-wrap gap-0 h-[28px] sm:h-[30px] md:h-[31px] items-center justify-center pb-[6px] sm:pb-[7px] md:pb-[8.5px] pt-[6px] sm:pt-[7px] md:pt-[7.5px] px-3 sm:px-4 rounded-[37.5px] w-[40px] sm:w-[44px] md:w-11">
                      <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[13px] md:text-[15px] text-center text-nowrap text-white">
                        <p className="leading-[1.0] whitespace-pre">{promise.number}</p>
                      </div>
                    </div>
                    
                    {/* 제목 */}
                    <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19.523px] text-nowrap tracking-[-0.84px]">
                      <h3 className="leading-[1.7] whitespace-pre mb-0">{promise.title}</h3>
                    </div>
                  </div>
                </div>

                {/* 설명 텍스트 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[1.7] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] tracking-[-0.36px] w-full">
                    {promise.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-0 break-words">{line}</p>
                    ))}
                    
                    {/* 하이라이트 텍스트 (5번째 약속만) */}
                    {promise.highlight && (
                      <p className="mt-3 sm:mt-4 text-[#c18861] font-medium break-words">
                        {promise.highlight}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        /* 모바일 최적화 */
        @media (max-width: 1024px) {
          .promise-card {
            flex-direction: column;
          }
          
          .promise-image {
            border-radius: 0.5rem 0.5rem 0 0;
          }
          
          .promise-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 640px) {
          .promise-card {
            margin-bottom: 1rem;
          }
          
          .promise-number {
            min-width: 36px;
            height: 28px;
          }
          
          .promise-title {
            font-size: 16px;
            line-height: 1.4;
          }
          
          .promise-description {
            font-size: 14px;
            line-height: 1.6;
          }
        }
        
        /* 텍스트 줄바꿈 최적화 */
        .promise-description {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        /* 호버 효과 */
        .promise-card:hover {
          transform: translateY(-2px);
        }
        
        /* 번호 배지 애니메이션 */
        .promise-number {
          transition: all 0.3s ease;
        }
        
        .promise-card:hover .promise-number {
          transform: scale(1.05);
        }
        
        /* 이미지 호버 효과 */
        .promise-image {
          transition: transform 0.3s ease;
        }
        
        .promise-card:hover .promise-image {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}

// Default props for the component
StepImageDescriptionSnu.defaultProps = {
  title: "SNU안과 6가지 약속",
  body: "SNU안과가 약속하는 6가지 핵심 가치를 소개합니다",
  ctaText: "자세히 보기",
  href: "#promises"
};

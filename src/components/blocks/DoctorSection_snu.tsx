import React from 'react';

interface DoctorSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

interface Doctor {
  name: string;
  position: string;
  description: string[];
  image?: string;
}

const doctors: Doctor[] = [
  {
    name: "정의상",
    position: "대표원장",
    description: [
      "하버드대학교 연구교수 출신",
      "스마일라식 국내도입 레퍼런스닥터"
    ]
  },
  {
    name: "이민규",
    position: "원장",
    description: [
      "각막의 특성에 따른",
      "환자별 맞춤형 수술 추천"
    ]
  },
  {
    name: "원여경",
    position: "원장",
    description: [
      "대학병원 교수출신",
      "시력교정 전문의"
    ]
  },
  {
    name: "김성희",
    position: "원장",
    description: [
      "수술 후 경과 관찰",
      "시스템 운영"
    ]
  }
];

export default function DoctorSectionSnu({
  title = "하버드대학교 연구교수 출신\n스마일라식 및 토릭ICL 국내 도입",
  body,
  ctaText,
  href
}: DoctorSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="Doctor Section SNU"
      data-anchor="doctors"
      id="doctors"
      itemScope
      itemType="https://schema.org/MedicalClinic"
      aria-labelledby="doctor-section-title"
    >
      {/* Header */}
      <div 
        className="bg-[rgb(var(--surface))] content-stretch flex flex-col gap-4 items-center justify-center leading-[0] not-italic relative shrink-0 rounded-[var(--radius-lg)] shadow-lg px-6 sm:px-8 py-6 sm:py-8 w-full max-w-4xl"
        data-name="Doctor Header"
      >
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold relative shrink-0 text-[rgb(var(--primary-default))] text-[15px] sm:text-[16px] md:text-[17px]"
          data-node-id="doctor-section-label"
        >
          <p className="leading-[normal] text-nowrap whitespace-pre">SNU의료진</p>
        </div>
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-center"
          data-node-id="doctor-section-title"
        >
          <h2 id="doctor-section-title" className="mb-0 leading-tight">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Doctor Cards Container */}
      <div 
        className="bg-transparent content-stretch flex gap-4 sm:gap-6 md:gap-8 items-start justify-center relative shrink-0 mt-8 sm:mt-10 md:mt-12 max-w-7xl w-full flex-wrap"
        data-name="Doctor Cards Container"
      >
                      {doctors.map((doctor, index) => (
                <div 
                  key={index}
                  className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 relative rounded-[16px] shrink-0 w-full sm:w-[280px] md:w-[300px] shadow-lg hover:shadow-xl hover:shadow-[rgba(var(--primary),0.2)] transition-all duration-300 transform hover:scale-105 hover:border-[rgba(var(--primary),0.3)] border border-transparent"
                  data-name={`Doctor Card ${index + 1}`}
                  itemScope
                  itemType="https://schema.org/Physician"
                >
            {/* Doctor Photo */}
            <div 
              className="bg-[rgb(var(--surface-variant))] h-[200px] sm:h-[240px] md:h-[280px] overflow-clip relative rounded-[12px] shrink-0 w-[180px] sm:w-[220px] md:w-[252px] flex items-center justify-center"
              data-name={`Doctor ${index + 1} Photo`}
            >
              <div 
                className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] not-italic text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] md:text-[16px] text-center"
                data-node-id={`doctor-${index + 1}-photo-placeholder`}
              >
                <p className="leading-[normal]">의료진 사진</p>
              </div>
            </div>

            {/* Doctor Info */}
            <div 
              className="bg-transparent box-border content-stretch flex flex-col gap-2 sm:gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 pt-4 sm:pt-6 px-0"
              data-name={`Doctor ${index + 1} Info`}
            >
              <div 
                className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold relative shrink-0 text-[rgb(var(--text))] text-[20px] sm:text-[22px] md:text-[24px]"
                data-node-id={`doctor-${index + 1}-name`}
              >
                <h3 className="leading-[normal] mb-0" itemProp="name">{doctor.name}</h3>
              </div>
              <div 
                className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[rgb(var(--primary-default))] text-[14px] sm:text-[15px] md:text-[16px]"
                data-node-id={`doctor-${index + 1}-position`}
              >
                <p className="leading-[normal]" itemProp="jobTitle">{doctor.position}</p>
              </div>
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[rgb(var(--text-secondary))] text-[13px] sm:text-[14px] md:text-[16px] text-center"
                data-node-id={`doctor-${index + 1}-description`}
              >
                {doctor.description.map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-2 leading-relaxed" itemProp="description">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center max-w-4xl px-4">
        <div className="text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] md:text-[16px] font-medium mb-3 sm:mb-4">
          하버드대학교 연구교수 출신의 전문의료진이 최첨단 시력교정술을 제공합니다
        </div>
        <div className="text-[rgb(var(--primary-default))] text-[16px] sm:text-[17px] md:text-[18px] font-bold">
          스마일라식 · 렌즈삽입술 · 노안백내장 · 시력교정술
        </div>
      </div>
    </section>
  );
}

// Default props for the component
DoctorSectionSnu.defaultProps = {
  title: "하버드대학교 연구교수 출신\n스마일라식 및 토릭ICL 국내 도입",
  body: undefined,
  ctaText: undefined,
  href: undefined
};

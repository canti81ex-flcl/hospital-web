"use client";

import React from 'react';

interface BackgroundSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

// 이미지 상수들
const imgContactTitlePng = "http://localhost:3845/assets/bac700f207113a712a013dc4a297e74dbba1c1d0.png";
const imgKakaotalk = "http://localhost:3845/assets/2a55788ad8f2e06dea5ce865af9753a94cb7c3d0.png";
const imgYoutube = "http://localhost:3845/assets/414220b46b6b18190c185b8e46cd4f8998d7164e.png";
const imgBlog = "http://localhost:3845/assets/426bd5fbbbeceb10e215ce301a88afaed38759da.png";
const imgFacebook = "http://localhost:3845/assets/3d2da0f3b77fd594012219335d3c01d4d6c455a3.png";
const imgMap = "http://localhost:3845/assets/e3eaadc8de10f727e1b832c984ff5eaf5771b4de.png";

// 연락처 정보 데이터
const contactInfo = {
  phone: "02-548-0201",
  hours: [
    { days: "월·화·목·금", time: "09:00am ~ 06:00pm" },
    { days: "토요일", time: "08:30am ~ 02:00pm" },
    { days: "점심시간", time: "01:00pm ~ 02:00pm" }
  ],
  notice: "※ 수요일 / 일요일은 휴진입니다."
};

// 소셜 미디어 링크 데이터
const socialLinks = [
  { name: "Kakaotalk", icon: imgKakaotalk, href: "#kakaotalk" },
  { name: "Youtube", icon: imgYoutube, href: "#youtube" },
  { name: "Blog", icon: imgBlog, href: "#blog" },
  { name: "Facebook", icon: imgFacebook, href: "#facebook" }
];

// 푸터 링크 데이터
const footerLinks = [
  { name: "병원소개", href: "#about" },
  { name: "개인정보취급방침", href: "#privacy", active: true },
  { name: "이용약관", href: "#terms" },
  { name: "환자권리장전", href: "#rights" }
];

// 병원 정보 데이터
const hospitalInfo = {
  name: "에스앤유안과의원",
  registration: "사업자등록번호 : 463-98-00998",
  ceo: "대표자 : 정의상",
  address: "주소 : 서울특별시 강남구 강남대로 624 ICT타워 3층, 12층",
  email: "이메일 : snu_eye@naver.com"
};

export default function BackgroundSnu({
  title = "SNU안과 연락처",
  body,
  ctaText,
  href
}: BackgroundSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-[130px] items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative size-full min-h-screen"
      data-name="Background Section SNU"
      data-anchor="background"
      id="background"
      itemScope
      itemType="https://schema.org/MedicalClinic"
      aria-labelledby="background-title"
    >
      {/* 메인 컨테이너 */}
      <div className="content-stretch flex flex-col items-start justify-start max-w-[1350px] relative shrink-0 w-full px-2 sm:px-4 md:px-6 lg:px-8">
        {/* 연락처 및 오시는 길 섹션 */}
        <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between relative shrink-0 w-full">
          {/* 연락처 정보 */}
          <div className="relative self-stretch shrink-0 w-full lg:w-[652.5px]">
            {/* 연락처 타이틀 */}
            <div className="mb-6 sm:mb-8">
              <div 
                className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-8 sm:h-10 md:h-12 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[395px]"
                data-name="contact_title.png"
                data-node-id="25:2073"
                style={{ backgroundImage: `url('${imgContactTitlePng}')` }}
                aria-label="연락처 타이틀"
              />
            </div>

            {/* 고객센터 정보 */}
            <div className="box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start justify-start pb-4 sm:pb-6 md:pb-[25px] pt-4 sm:pt-6 md:pt-[26px] px-0 relative w-full">
              <div aria-hidden="true" className="absolute border-t border-[rgba(var(--text),0.1)] inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full sm:w-[145px]">
                <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19.523px] text-nowrap text-[rgb(var(--text))] tracking-[-0.63px]">
                  <p className="leading-[1.7] whitespace-pre">고객센터</p>
                </div>
              </div>
              <div className="box-border content-center flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-start pb-0 pt-0 px-0 relative self-stretch shrink-0 w-full sm:w-[507.5px]">
                <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0">
                  <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] text-nowrap text-[rgb(var(--text-secondary))]">
                    <p className="leading-[1.6] whitespace-pre">call</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] max-h-[36.81px] overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] text-nowrap text-[rgb(var(--primary-default))]">
                  <p className="leading-[1.6] whitespace-pre">{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* 진료시간 정보 */}
            <div className="box-border content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start justify-start pb-4 sm:pb-6 md:pb-[25px] pt-4 sm:pt-6 md:pt-[26px] px-0 relative w-full">
              <div aria-hidden="true" className="absolute border-t border-[rgba(var(--text),0.1)] inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full sm:w-[145px]">
                <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19.523px] text-nowrap text-[rgb(var(--text))] tracking-[-0.63px]">
                  <p className="leading-[1.7] whitespace-pre">진료시간</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-full sm:w-[507.5px]">
                <div className="box-border content-stretch flex flex-col gap-2 sm:gap-3 md:gap-1.5 items-start justify-start pb-0 pt-1.5 px-0 relative shrink-0 w-full">
                  {contactInfo.hours.map((hour, index) => (
                    <div key={index} className="box-border content-stretch flex flex-col sm:flex-row gap-2 sm:gap-0 items-start justify-start leading-[0] pl-0 sm:pl-20 pr-0 py-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] h-[18px] justify-center text-[12px] sm:text-[13px] md:text-[13.711px] text-[rgb(var(--text))] tracking-[-0.45px] w-[60px] sm:w-[60.28px]">
                        <p className="leading-[1.4]">{hour.days}</p>
                      </div>
                      <div className="flex flex-col font-['Jost:Regular',_sans-serif] justify-center max-h-[20.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] sm:text-[14px] md:text-[15px] text-[rgba(var(--text),0.6)] text-nowrap">
                        <p className="leading-[1.4] whitespace-pre">{hour.time}</p>
                      </div>
                    </div>
                  ))}
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c18861] text-[13px] sm:text-[14px] md:text-[15px] w-full">
                      <p className="leading-[1.4]">{contactInfo.notice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 소셜 미디어 링크 */}
            <div className="content-stretch flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-start justify-start relative w-full mt-6 sm:mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-[rgba(var(--text),0.1)] hover:bg-[rgba(var(--primary-default),0.2)] content-center flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-center relative self-stretch shrink-0 w-full sm:w-[140px] md:w-[150px] lg:w-[162.38px] h-[50px] sm:h-[56px] rounded-lg transition-all duration-300 hover:scale-105"
                  data-name={`Component ${index + 3}`}
                  data-node-id={`25:210${index * 5}`}
                  aria-label={`${social.name} 페이지로 이동`}
                  rel="noopener noreferrer"
                >
                  <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2.5 py-0 relative shrink-0">
                    <div 
                      className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[15px] sm:h-[18px] md:h-[22px] max-w-6 shrink-0 w-6"
                      data-name={social.name}
                      style={{ backgroundImage: `url('${social.icon}')` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] sm:text-[14px] md:text-[15px] text-center text-nowrap text-[rgb(var(--text))]">
                    <p className="leading-[1.4] whitespace-pre">{social.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 오시는 길 */}
          <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-full lg:w-[652.5px]">
            <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px pb-3 sm:pb-4 md:pb-5 pt-0 px-0 relative shrink-0">
              <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19.359px] text-nowrap text-[rgb(var(--text))] tracking-[-0.63px]">
                <p className="leading-[1.1] whitespace-pre">오시는 길</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[200px] sm:h-[250px] md:h-[300px] lg:h-[366.13px] items-start justify-center relative shrink-0 w-full">
              <div 
                className="basis-0 bg-[0%_49.93%] bg-no-repeat bg-size-[100%_100%] grow min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[366.13px] min-w-px shrink-0 w-full rounded-lg"
                data-name="오시는 길"
                data-node-id="25:2124"
                style={{ backgroundImage: `url('${imgMap}')` }}
                aria-label="SNU안과 위치 지도"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 섹션 */}
      <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-6 sm:pt-8 md:pt-10 lg:pt-[41px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[285px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-t border-[rgba(var(--text),0.1)] inset-0 pointer-events-none" />
        <div className="h-[80px] sm:h-[90px] md:h-[98.39px] max-w-[1350px] relative shrink-0 w-full">
          {/* 푸터 링크 */}
          <div className="absolute content-stretch flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-start justify-start left-0 right-0 top-0">
            {footerLinks.map((link, index) => (
              <div key={index} className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-4 sm:pr-6 md:pr-[30px] py-0 relative self-stretch shrink-0">
                <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                    <a
                      href={link.href}
                      className={`flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[14.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] sm:text-[13px] md:text-[13.945px] text-nowrap tracking-[-0.45px] transition-colors duration-200 hover:text-[rgb(var(--primary-default))] ${
                        link.active ? 'text-[#c18861]' : 'text-[rgb(var(--text))]'
                      }`}
                      data-node-id={`25:213${index * 5}`}
                    >
                      <p className="leading-[1.1] whitespace-pre">{link.name}</p>
                    </a>
                  </div>
                  {index < footerLinks.length - 1 && (
                    <div className="absolute bg-[rgba(var(--text),0.2)] h-2.5 right-[-16px] translate-y-[-50%] w-px" data-name="Vertical Divider" style={{ top: "calc(50% - 0.995px)" }} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 병원 정보 */}
          <div className="absolute content-stretch flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-start justify-start left-0 right-0 top-8 sm:top-10">
            <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-4 sm:pr-6 md:pr-[25px] py-0 relative self-stretch shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[20.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] sm:text-[13px] md:text-[13.945px] text-nowrap text-[rgb(var(--text))] tracking-[-0.45px]">
                  <p className="leading-[1.5] whitespace-pre">{hospitalInfo.name}</p>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-4 sm:pr-6 md:pr-[25px] py-0 relative self-stretch shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[20.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] sm:text-[14px] md:text-[15px] text-nowrap text-[rgb(var(--text))] tracking-[-0.45px]">
                  <p className="leading-[1.4] whitespace-pre">{hospitalInfo.registration}</p>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-4 sm:pr-6 md:pr-[25px] py-0 relative self-stretch shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[20.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] sm:text-[13px] md:text-[13.828px] text-nowrap text-[rgb(var(--text))] tracking-[-0.45px]">
                  <p className="leading-[1.5] whitespace-pre">{hospitalInfo.ceo}</p>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-center pl-0 pr-4 sm:pr-6 md:pr-[25px] py-0 relative self-stretch shrink-0">
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[20.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] sm:text-[13px] md:text-[14.18px] text-nowrap text-[rgb(var(--text))] tracking-[-0.45px]">
                  <p className="leading-[1.4] whitespace-pre">{hospitalInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0">
              <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[20.99px] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] sm:text-[14px] md:text-[15px] text-nowrap text-[rgb(var(--text))] tracking-[-0.45px]">
                <p className="leading-[1.4] whitespace-pre">{hospitalInfo.email}</p>
              </div>
            </div>
          </div>

          {/* 저작권 정보 */}
          <div className="absolute content-stretch flex flex-col sm:flex-row gap-2 sm:gap-4 items-start justify-start left-0 right-0 top-[60px] sm:top-[70px] md:top-[75.48px]">
            <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] text-[rgba(var(--text),0.5)] text-nowrap uppercase">
              <p className="leading-[1.6] whitespace-pre">Copyright© SNU EYE CLINIC. All rights reserved.</p>
            </div>
            <div className="content-stretch flex items-start justify-start relative shrink-0">
              <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] text-[rgba(var(--text),0.5)] text-nowrap uppercase">
                <p className="leading-[1.6] whitespace-pre">Site by THREEWAY.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Go To Top 버튼 */}
      <div className="absolute inset-[41.3%_3%_41.3%_95.39%] hidden lg:block">
        <div className="absolute bottom-[3.08px] box-border content-stretch flex items-start justify-end left-0 pl-[3px] pr-0 py-0">
          <div className="flex h-[138.578px] items-center justify-center relative shrink-0 w-[12px]">
            <div className="flex-none rotate-[90deg]">
              <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative text-[10px] sm:text-[11px] md:text-[12px] text-[rgba(var(--text),0.7)] text-nowrap text-right tracking-[8.4px] uppercase">
                <p className="leading-[1.0] whitespace-pre">Go To Top</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border content-stretch flex flex-col h-[170px] items-start justify-start left-3 pl-[18px] pr-0 py-0 top-0 w-[19px]">
          <div className="bg-[rgba(var(--text),0.3)] h-[170px] shrink-0 w-px" data-name="Vertical Divider" />
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        /* 모바일 최적화 */
        @media (max-width: 640px) {
          .social-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
        
        @media (max-width: 480px) {
          .social-links {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
        
        /* 텍스트 줄바꿈 최적화 */
        .text-content {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        /* 터치 친화적 버튼 */
        .social-button {
          min-height: 44px;
          min-width: 44px;
        }
      `}</style>
    </section>
  );
}

// Default props for the component
BackgroundSnu.defaultProps = {
  title: "SNU안과 연락처",
  body: "SNU안과의 연락처 정보와 오시는 길을 안내해드립니다",
  ctaText: "자세히 보기",
  href: "#background"
};

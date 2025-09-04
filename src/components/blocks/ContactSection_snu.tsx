import React from 'react';
import { generateFAQStructuredData } from '@/lib/seo';

interface ContactSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

interface OperatingHours {
  day: string;
  time: string;
  isClosed?: boolean;
}

const operatingHours: OperatingHours[] = [
  { day: "평일 (월-금)", time: "09:00 - 18:00" },
  { day: "토요일", time: "09:00 - 13:00" },
  { day: "일요일 · 공휴일", time: "휴진", isClosed: true }
];

const footerLinks = [
  { text: "병원소개", href: "#about" },
  { text: "개인정보취급방침", href: "#privacy" },
  { text: "이용약관", href: "#terms" },
  { text: "환자권리장전", href: "#rights" }
];

export default function ContactSectionSnu({
  title,
  body,
  ctaText,
  href
}: ContactSectionSnuProps) {
  const faqStructuredData = generateFAQStructuredData();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <section 
        className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-center justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-[60px] pt-12 sm:pt-16 md:pt-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative size-full min-h-screen"
        data-name="Contact Section SNU"
        data-anchor="contact"
        id="contact"
        itemScope
        itemType="https://schema.org/MedicalClinic"
      >
      {/* Contact Info */}
      <div 
        className="bg-transparent box-border content-stretch flex gap-[60px] items-center justify-center relative shrink-0 max-w-7xl w-full flex-wrap"
        data-name="Contact Info"
      >
        {/* Customer Service */}
        <div 
          className="bg-[rgb(var(--surface-variant))] content-stretch flex flex-col gap-5 items-center justify-center relative shrink-0 w-[400px] rounded-[var(--radius-lg)] shadow-lg p-8 min-w-[350px]"
          data-name="Customer Service"
        >
          <div 
            className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[18px] text-center"
            data-node-id="customer-service-label"
          >
            <p className="leading-[normal] whitespace-pre">고객센터</p>
          </div>
          <div 
            className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[32px] text-center text-[rgb(var(--primary-default))]"
            data-node-id="customer-service-phone"
          >
            <p className="leading-[normal] whitespace-pre">02-6913-0000</p>
          </div>
          <div 
            className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgb(var(--text-secondary))] text-center"
            data-node-id="customer-service-hours"
          >
            <p className="mb-2">평일 오전 9시 - 오후 6시</p>
            <p className="mb-2">토요일 오전 9시 - 오후 1시</p>
            <p className="mb-0">일요일 및 공휴일 휴진</p>
          </div>
          <a 
            href="tel:02-6913-0000"
            className="bg-[rgb(var(--primary-default))] box-border content-stretch flex gap-2 h-[50px] items-center justify-center overflow-clip px-6 py-3 relative rounded-[25px] shrink-0 hover:bg-[rgb(var(--primary-dark))] transition-colors duration-200"
            data-name="Call Button"
            aria-label="전화 상담하기"
          >
            <div 
              className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white"
              data-node-id="call-button-text"
            >
              <p className="leading-[normal] whitespace-pre">전화 상담</p>
            </div>
          </a>
        </div>

        {/* Operating Hours */}
        <div 
          className="bg-[rgb(var(--surface-variant))] content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-[400px] rounded-[var(--radius-lg)] shadow-lg p-8 min-w-[350px]"
          data-name="Operating Hours"
        >
          <div 
            className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[18px] text-center w-full"
            data-node-id="operating-hours-label"
          >
            <p className="leading-[normal] whitespace-pre">진료시간</p>
          </div>
          <div 
            className="bg-transparent content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full"
            data-name="Hours List"
          >
            {operatingHours.map((schedule, index) => (
              <div 
                key={index}
                className="bg-transparent content-stretch flex h-8 items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] w-full"
                data-name={schedule.day}
              >
                <div 
                  className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal relative shrink-0 text-[rgb(var(--text-secondary))]"
                  data-node-id={`schedule-${index}-day`}
                >
                  <p className="leading-[normal] text-nowrap whitespace-pre">{schedule.day}</p>
                </div>
                <div 
                  className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 ${
                    schedule.isClosed 
                      ? 'text-[rgb(var(--text-muted))]' 
                      : 'text-[rgb(var(--text))]'
                  }`}
                  data-node-id={`schedule-${index}-time`}
                >
                  <p className="leading-[normal] text-nowrap whitespace-pre">{schedule.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div 
          className="bg-[rgb(var(--surface-variant))] content-stretch flex flex-col gap-5 items-center justify-center relative shrink-0 w-[400px] rounded-[var(--radius-lg)] shadow-lg p-8 min-w-[350px]"
          data-name="Location Info"
        >
          <div 
            className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[18px] text-center"
            data-node-id="location-label"
          >
            <p className="leading-[normal] whitespace-pre">오시는 길</p>
          </div>
          <div 
            className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgb(var(--text))] text-center"
            data-node-id="location-address"
          >
            <p className="mb-2">서울특별시 강남구 강남대로 624</p>
            <p className="mb-2">ICT타워 3층, 12층</p>
            <p className="mb-4">&nbsp;</p>
            <p className="mb-2">지하철 2호선 강남역 10번 출구</p>
            <p className="mb-0">도보 3분 거리</p>
          </div>
          <a 
            href="https://map.kakao.com/link/search/서울특별시 강남구 강남대로 624 ICT타워"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent h-[50px] relative rounded-[25px] shrink-0 border-2 border-[rgb(var(--border))] hover:border-[rgb(var(--primary-default))] transition-colors duration-200 flex items-center justify-center w-full"
            data-name="Map Button"
            aria-label="지도에서 위치 보기"
          >
            <div className="content-stretch flex gap-2 h-[50px] items-center justify-center relative">
              <div 
                className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-[rgb(var(--text-secondary))] text-nowrap"
                data-node-id="map-button-text"
              >
                <p className="leading-[normal] whitespace-pre">지도 보기</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div 
        className="bg-[rgb(var(--border))] h-0.5 shrink-0 w-full max-w-7xl mt-12"
        data-name="Divider"
      />

      {/* Footer Info */}
      <div 
        className="bg-transparent box-border content-stretch flex flex-col items-center justify-center relative shrink-0 w-full max-w-7xl mt-8"
        data-name="Footer Info"
      >
        <div 
          className="bg-transparent content-stretch flex font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium gap-8 h-10 items-center justify-center relative shrink-0 text-[14px] text-[rgb(var(--text-secondary))] flex-wrap"
          data-name="Footer Links"
        >
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="relative shrink-0 hover:text-[rgb(var(--primary-default))] transition-colors duration-200"
              data-node-id={`footer-link-${index}`}
            >
              <p className="leading-[normal] text-nowrap whitespace-pre">{link.text}</p>
            </a>
          ))}
        </div>
        <div 
          className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgb(var(--text-muted))] text-center mt-6"
          data-node-id="footer-info"
        >
          <p className="mb-2">에스앤유안과의원 | 대표원장: 정의상 | 사업자등록번호: 211-09-57099</p>
          <p className="mb-2">의료기관명: 에스앤유안과의원 | 대표번호: 02-6913-0000</p>
          <p className="mb-2">&nbsp;</p>
          <p className="mb-0">© 2024 SNU EYE CLINIC. All rights reserved.</p>
        </div>
      </div>
      </section>
    </>
  );
}

// Default props for the component
ContactSectionSnu.defaultProps = {
  title: undefined,
  body: undefined,
  ctaText: undefined,
  href: undefined
};

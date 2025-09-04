import React from 'react';

interface EventSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  imageColor: string;
  imageText: string[];
}

const events: Event[] = [
  {
    id: "smile-pro",
    title: "스마일프로 이벤트",
    subtitle: "3세대 스마일라식 특가 혜택",
    description: "최대 50% 할인",
    period: "2024.12.31까지",
    imageColor: "#ffcc66",
    imageText: ["스마일프로", "특별 이벤트", "", "최대 50% 할인"]
  },
  {
    id: "office-worker",
    title: "직장인 이벤트",
    subtitle: "직장인을 위한 야간 진료 서비스",
    description: "야간 진료 가능",
    period: "평일 오후 8시까지",
    imageColor: "#e5b24d",
    imageText: ["직장인 전용", "특별 혜택", "", "야간 진료 가능"]
  },
  {
    id: "student-summer",
    title: "대학생 여름방학 이벤트",
    subtitle: "방학 기간 대학생 특가 혜택",
    description: "학생증 지참시",
    period: "학생증 지참 필수",
    imageColor: "#6699e5",
    imageText: ["대학생 여름방학", "특별 할인", "", "학생증 지참시"]
  }
];

export default function EventSectionSnu({
  title = "SNU 안과에서\n진행중인 이벤트를\n확인하세요.",
  body,
  ctaText,
  href
}: EventSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="Event Section SNU"
      data-anchor="events"
      id="events"
    >
      {/* Header */}
      <div 
        className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 rounded-[var(--radius-lg)] shadow-lg px-8 py-8 mb-12"
        data-name="Event Header"
      >
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold relative shrink-0 text-[rgb(var(--primary-default))] text-[17px]"
          data-node-id="event-section-label"
        >
          <p className="leading-[normal] text-nowrap whitespace-pre">이벤트</p>
        </div>
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] relative shrink-0 text-[rgb(var(--text))] text-[42px] text-center"
          data-node-id="event-section-title"
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
      </div>

      {/* Event Cards Container */}
      <div 
        className="bg-transparent content-stretch flex gap-8 items-start justify-center relative shrink-0 max-w-7xl w-full flex-wrap"
        data-name="Event Cards Container"
      >
        {events.map((event, index) => (
          <div 
            key={event.id}
            className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 w-[380px] shadow-lg hover:shadow-xl hover:shadow-[rgba(var(--primary),0.2)] transition-all duration-300 transform hover:scale-105 hover:border-[rgba(var(--primary),0.3)] border border-transparent min-w-[350px]"
            data-name={`Event Card ${index + 1}`}
          >
            {/* Event Image */}
            <div 
              className="h-[300px] overflow-clip relative rounded-[12px] shrink-0 w-[332px] flex items-center justify-center m-6"
              data-name={`Event ${index + 1} Image`}
              style={{ backgroundColor: event.imageColor }}
            >
              <div 
                className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[normal] not-italic text-white text-[24px] text-center"
                data-node-id={`event-${index + 1}-image-text`}
              >
                {event.imageText.map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-2 leading-relaxed">
                    {line || '\u00A0'}
                  </p>
                ))}
              </div>
            </div>

            {/* Event Info */}
            <div 
              className="bg-transparent box-border content-stretch flex flex-col gap-2 items-center justify-center relative shrink-0 pb-6 pt-2 px-6"
              data-name={`Event ${index + 1} Info`}
            >
              <div 
                className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[rgb(var(--text))] text-[20px] text-center"
                data-node-id={`event-${index + 1}-title`}
              >
                <h3 className="leading-[normal] text-nowrap whitespace-pre mb-0">{event.title}</h3>
              </div>
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[rgb(var(--text-secondary))] text-[14px] text-center"
                data-node-id={`event-${index + 1}-description`}
              >
                <p className="mb-1 leading-relaxed">{event.subtitle}</p>
                <p className="mb-0 leading-relaxed font-medium text-[rgb(var(--primary-default))]">{event.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center max-w-4xl">
        <div className="text-[rgb(var(--text-secondary))] text-[16px] font-medium mb-4">
          SNU안과에서 진행하는 다양한 이벤트와 특별 혜택을 확인하세요
        </div>
        <div className="text-[rgb(var(--primary-default))] text-[18px] font-bold">
          스마일프로 · 직장인 · 대학생 특별 이벤트
        </div>
        
        {/* Event Highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-2">최대 50% 할인</div>
            <div className="text-[rgb(var(--text-secondary))] text-[14px]">스마일프로 특별 이벤트</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-2">야간 진료</div>
            <div className="text-[rgb(var(--text-secondary))] text-[14px]">직장인을 위한 특별 서비스</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-2">학생 특가</div>
            <div className="text-[rgb(var(--text-secondary))] text-[14px]">대학생 여름방학 혜택</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default props for the component
EventSectionSnu.defaultProps = {
  title: "SNU 안과에서\n진행중인 이벤트를\n확인하세요.",
  body: undefined,
  ctaText: undefined,
  href: undefined
};

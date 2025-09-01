"use client";

import React, { useState } from "react";

interface EventCard {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "진행중" | "예정" | "종료";
  image?: string;
  link?: string;
}

interface EventSectionNewProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
  events?: EventCard[];
}

export default function Event_Section_new({
  title = "EVENT",
  body,
  ctaText,
  href,
  events = [
    {
      id: "1",
      title: "스마일라식 특별 할인",
      description: "신규 고객 대상 스마일라식 수술 특별 할인 이벤트",
      date: "2024.01.01 ~ 2024.03.31",
      status: "진행중"
    },
    {
      id: "2", 
      title: "무료 시력검사",
      description: "정밀 시력검사 및 안과 상담 무료 체험",
      date: "2024.02.01 ~ 2024.02.29",
      status: "진행중"
    },
    {
      id: "3",
      title: "렌즈삽입술 설명회",
      description: "ICL 렌즈삽입술 설명회 및 Q&A 세션",
      date: "2024.03.15",
      status: "예정"
    },
    {
      id: "4",
      title: "눈 건강 세미나",
      description: "일상 속 눈 건강 관리법 특별 강의",
      date: "2024.01.20",
      status: "종료"
    }
  ]
}: EventSectionNewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 한 번에 보여줄 카드 수 (반응형)
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // 윈도우 리사이즈 핸들러
  const handleResize = () => {
    setVisibleCards(getVisibleCards());
  };

  // 다음 슬라이드
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, events.length - visibleCards);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  // 이전 슬라이드
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, events.length - visibleCards);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // 상태별 색상 반환
  const getStatusColor = (status: EventCard['status']) => {
    switch (status) {
      case '진행중': return 'rgb(var(--success-default))';
      case '예정': return 'rgb(var(--warning-default))';
      case '종료': return 'rgb(var(--fg-muted))';
      default: return 'rgb(var(--fg-muted))';
    }
  };

  // 자동 재생 효과
  React.useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, visibleCards]);

  // 리사이즈 이벤트 리스너
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-20)]"
      style={{
        backgroundColor: 'rgb(var(--bg-base))',
        backgroundImage: `
          linear-gradient(135deg, rgba(var(--primary-default), 0.02) 0%, transparent 50%),
          linear-gradient(-135deg, rgba(var(--success-default), 0.01) 0%, transparent 50%)
        `
      }}
      data-name="Event Section"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 배경 패턴 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(var(--primary-default), 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(var(--success-default), 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 섹션 제목 */}
        <div className="text-center mb-[var(--spacing-16)]">
          <h2 
            className="font-[var(--font-weight-bold)] leading-tight tracking-wide"
            style={{
              fontSize: 'var(--font-size-4xl)', // 42px 대응
              color: 'rgb(var(--fg-primary))',
              fontFamily: 'var(--font-family-heading)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {title}
          </h2>
          {body && (
            <p 
              className="mt-[var(--spacing-4)] font-[var(--font-weight-regular)]"
              style={{
                fontSize: 'var(--font-size-lg)',
                color: 'rgb(var(--fg-muted))',
                fontFamily: 'var(--font-family-body)'
              }}
            >
              {body}
            </p>
          )}
        </div>

        {/* 이벤트 슬라이더 컨테이너 */}
        <div className="relative">
          {/* 슬라이더 내비게이션 */}
          <div className="flex items-center justify-between mb-[var(--spacing-8)]">
            <div className="flex items-center gap-[var(--spacing-4)]">
              {/* 슬라이더 인디케이터 */}
              <div className="flex gap-[var(--spacing-2)]">
                {Array.from({ length: Math.max(1, events.length - visibleCards + 1) }).map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: currentIndex === index ? 'rgb(var(--primary-default))' : 'rgba(var(--fg-muted), 0.3)'
                    }}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>
              
              {/* 자동재생 토글 */}
              <button
                className="text-xs px-2 py-1 rounded transition-colors duration-200"
                style={{
                  backgroundColor: isAutoPlay ? 'rgba(var(--success-default), 0.1)' : 'rgba(var(--fg-muted), 0.1)',
                  color: isAutoPlay ? 'rgb(var(--success-default))' : 'rgb(var(--fg-muted))'
                }}
                onClick={() => setIsAutoPlay(!isAutoPlay)}
              >
                {isAutoPlay ? 'AUTO' : 'MANUAL'}
              </button>
            </div>

            {/* 화살표 버튼 */}
            <div className="flex gap-[var(--spacing-2)]">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(var(--bg-elevated), 0.8)',
                  border: '1px solid rgba(var(--border-subtle), 0.5)',
                  color: 'rgb(var(--fg-primary))'
                }}
                onClick={prevSlide}
                aria-label="이전 이벤트"
              >
                ←
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(var(--bg-elevated), 0.8)',
                  border: '1px solid rgba(var(--border-subtle), 0.5)',
                  color: 'rgb(var(--fg-primary))'
                }}
                onClick={nextSlide}
                aria-label="다음 이벤트"
              >
                →
              </button>
            </div>
          </div>

          {/* 이벤트 카드 슬라이더 */}
          <div className="overflow-hidden rounded-[var(--card-radius)]">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 px-[var(--spacing-4)]"
                  style={{
                    width: `${100 / visibleCards}%`
                  }}
                >
                  <div
                    className="group relative h-[470px] rounded-[var(--card-radius)] p-[var(--spacing-6)] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                    style={{
                      backgroundColor: 'rgb(var(--bg-elevated))',
                      border: '1px solid rgba(var(--border-subtle), 0.5)',
                      boxShadow: 'var(--card-shadow)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--elevation-modal)';
                      e.currentTarget.style.borderColor = 'rgba(var(--primary-default), 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                      e.currentTarget.style.borderColor = 'rgba(var(--border-subtle), 0.5)';
                    }}
                    onClick={() => event.link && window.open(event.link, '_blank')}
                  >
                    {/* 상태 배지 */}
                    <div 
                      className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: getStatusColor(event.status),
                        color: 'rgb(var(--color-white))'
                      }}
                    >
                      {event.status}
                    </div>

                    {/* 이벤트 내용 */}
                    <div className="flex-1 flex flex-col justify-center text-center">
                      <h3 
                        className="font-[var(--font-weight-bold)] mb-[var(--spacing-4)]"
                        style={{
                          fontSize: 'var(--font-size-xl)',
                          color: 'rgb(var(--fg-primary))',
                          fontFamily: 'var(--font-family-heading)'
                        }}
                      >
                        {event.title}
                      </h3>
                      
                      <p 
                        className="font-[var(--font-weight-regular)] mb-[var(--spacing-6)] leading-relaxed"
                        style={{
                          fontSize: 'var(--font-size-base)',
                          color: 'rgb(var(--fg-muted))',
                          fontFamily: 'var(--font-family-body)'
                        }}
                      >
                        {event.description}
                      </p>

                      <div 
                        className="font-[var(--font-weight-medium)] text-sm"
                        style={{
                          color: 'rgb(var(--primary-default))'
                        }}
                      >
                        {event.date}
                      </div>
                    </div>

                    {/* 호버 시 더보기 인디케이터 */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div 
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(var(--primary-default), 0.1)',
                          color: 'rgb(var(--primary-default))'
                        }}
                      >
                        자세히 보기
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA 버튼 (선택적) */}
        {ctaText && href && (
          <div className="text-center mt-[var(--spacing-16)]">
            <a
              href={href}
              className="inline-flex items-center justify-center px-[var(--button-paddingX)] py-[var(--spacing-4)] rounded-[var(--button-radius)] font-[var(--button-font-weight)] text-[var(--button-font-size)] transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgb(var(--primary-default))',
                color: 'rgb(var(--primary-fg))',
                boxShadow: 'var(--elevation-button)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--primary-hover))';
                e.currentTarget.style.borderColor = 'rgb(var(--primary-default))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--primary-default))';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              rel={href.startsWith('http') ? "noopener noreferrer" : "noopener"}
              target={href.startsWith('http') ? "_blank" : undefined}
              aria-label={`${ctaText} 페이지로 이동`}
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

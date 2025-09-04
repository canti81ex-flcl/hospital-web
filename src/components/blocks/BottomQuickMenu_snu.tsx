"use client";

import React, { useEffect, useState } from 'react';

interface BottomQuickMenuSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

const THEMES = [
  "antdesign-enterprise", "material-healthcare", "atlassian-teamwork", "orbit-travel", "starbucks-care", 
  "apple-clean", "twitch-community", "netflix-impact", "stripe-clarity", "instagram-care-stories", 
  "dropbox-simple", "microsoft-access", "ibm-trust"
] as const;

interface QuickMenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  color: string;
}

const quickMenuItems: QuickMenuItem[] = [
  {
    id: "events",
    label: "이벤트",
    icon: "🎉",
    href: "#events",
    color: "rgb(var(--primary))"
  },
  {
    id: "booking",
    label: "온라인예약",
    icon: "📅",
    href: "#booking",
    color: "rgb(var(--success))"
  },
  {
    id: "reviews",
    label: "생생한 수술후기",
    icon: "⭐",
    href: "#reviews",
    color: "rgb(var(--warning))"
  },
  {
    id: "kakao",
    label: "카카오상담",
    icon: "💬",
    href: "#kakao",
    color: "rgb(var(--info))"
  },
  {
    id: "youtube",
    label: "SNU 유튜브",
    icon: "📺",
    href: "#youtube",
    color: "rgb(var(--error))"
  }
];

export default function BottomQuickMenuSnu({
  title = "하단 퀵 메뉴",
  body,
  ctaText,
  href
}: BottomQuickMenuSnuProps) {
  const [theme, setTheme] = useState<(typeof THEMES)[number]>("antdesign-enterprise");
  const [showThemeToggle, setShowThemeToggle] = useState(false);

  // 테마 상태 동기화
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") as (typeof THEMES)[number] | null;
    if (currentTheme && THEMES.includes(currentTheme)) {
      setTheme(currentTheme);
    }
  }, []);

  // 테마 변경 시 DOM 업데이트
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {/* 테마 토글 - 왼쪽 하단 BottomQuickMenu 위에 위치 */}
      <div 
        className="theme-toggle-container fixed bottom-[110px] left-4 z-[99998] rounded-lg border border-[rgb(var(--border))] bg-[rgba(var(--surface),0.95)] backdrop-blur-sm p-3 shadow-lg transition-all duration-300"
        style={{
          fontFamily: 'Pretendard, Jost, "Malgun Gothic", sans-serif'
        }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowThemeToggle(!showThemeToggle)}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-[rgb(var(--primary-default))] text-[rgb(var(--primary-fg))] text-sm font-medium hover:bg-[rgb(var(--primary-hover))] transition-colors duration-200"
            aria-label="테마 선택기 열기"
          >
            <span>🎨</span>
            <span>테마</span>
            <span className={`transform transition-transform duration-200 ${showThemeToggle ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {showThemeToggle && (
            <div className="theme-dropdown absolute bottom-full left-0 mb-2 w-64 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-3 shadow-xl">
              <div className="mb-2 text-sm font-medium text-[rgb(var(--text))]">테마 선택</div>
              <select
                className="w-full rounded-md border border-[rgb(var(--input-border))] bg-[rgb(var(--input-bg))] px-3 py-2 text-[rgb(var(--input-fg))] text-sm focus:border-[rgb(var(--primary))] focus:outline-none"
                value={theme}
                onChange={(e) => {
                  setTheme(e.target.value as (typeof THEMES)[number]);
                  setShowThemeToggle(false);
                }}
              >
                {THEMES.map(t => (
                  <option key={t} value={t}>
                    {t.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* BottomQuickMenu */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-[99999] bg-[rgba(var(--surface),0.95)] backdrop-blur-sm border-t border-[rgb(var(--border))] shadow-lg"
        data-name="Bottom Quick Menu SNU"
        id="bottom_quick"
        style={{
          height: '97px',
          fontFamily: 'Pretendard, Jost, "Malgun Gothic", sans-serif',
          position: 'fixed',
          bottom: '0px',
          left: '0px',
          right: '0px',
          zIndex: 99999,
          width: '100%'
        }}
      >
      {/* 메뉴 컨테이너 */}
      <div className="h-full flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2 sm:py-3 md:py-4">
        {quickMenuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            className="group flex flex-col items-center justify-center gap-0.5 sm:gap-1 min-w-0 flex-1 px-1 sm:px-2 py-1 sm:py-2 rounded-lg transition-all duration-300 hover:bg-[rgb(var(--primary-mutedBg))] hover:scale-105 hover:shadow-lg"
            aria-label={`${item.label} 페이지로 이동`}
            rel={item.href.startsWith('http') ? "noopener noreferrer" : "noopener"}
            target={item.href.startsWith('http') ? "_blank" : undefined}
          >
            {/* 아이콘 */}
            <div 
              className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:bg-[rgb(var(--primary-default))]"
              style={{
                backgroundColor: item.color,
                color: 'rgb(var(--surface))'
              }}
            >
              <span className="text-[10px] sm:text-xs font-bold group-hover:text-[rgb(var(--primary-default))] transition-colors duration-300">{item.icon}</span>
            </div>
            
            {/* 라벨 */}
            <div 
              className="text-center transition-colors duration-300 group-hover:text-[rgb(var(--primary-default))]"
              style={{
                fontSize: '10px',
                lineHeight: '1.2',
                color: 'rgba(51, 51, 51, 0.6)',
                fontFamily: 'Pretendard, Jost, "Malgun Gothic", sans-serif'
              }}
            >
              <span className="block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] sm:max-w-[80px]">
                {item.label}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* 하단 테두리 */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          backgroundColor: 'rgba(230, 230, 230, 0.5)'
        }}
        aria-hidden="true"
      />

      {/* 반응형 스타일 */}
      <style jsx global>{`
        /* 하단 메뉴로 인한 body 패딩 추가 */
        body {
          padding-bottom: 97px !important;
        }
        
        /* 하단 메뉴 고정 스타일 강화 - 헤더와 동일한 수준 */
        #bottom_quick {
          position: fixed !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 99999 !important;
          width: 100% !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
        }
        
        /* 스크롤 시에도 항상 보이도록 강제 */
        #bottom_quick {
          position: fixed !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 99999 !important;
          width: 100vw !important;
          max-width: 100% !important;
        }
        
        /* 헤더와 동일한 backdrop 효과 */
        #bottom_quick {
          background: rgba(var(--surface), 0.95) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
        
        /* 그림자 효과 강화 */
        #bottom_quick {
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15) !important;
        }
        
        /* 모든 디바이스에서 고정 보장 */
        @media (max-width: 1024px) {
          #bottom_quick {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 99999 !important;
            width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          #bottom_quick {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 99999 !important;
            width: 100% !important;
          }
        }
        
        @media (max-width: 640px) {
          .quick-menu-item {
            min-width: 60px;
          }
          .quick-menu-label {
            font-size: 10px;
            max-width: 60px;
          }
          
          #bottom_quick {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 99999 !important;
            width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .quick-menu-item {
            min-width: 50px;
            padding: 4px 2px;
          }
          .quick-menu-label {
            font-size: 9px;
            max-width: 50px;
          }
          
          #bottom_quick {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 99999 !important;
            width: 100% !important;
          }
        }
        
        /* 텍스트 잘림 방지 */
        .quick-menu-label {
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        
        /* 호버 효과 개선 */
        .quick-menu-item:hover .quick-menu-icon {
          transform: scale(1.1);
        }
        
        .quick-menu-item:hover .quick-menu-label {
          color: rgb(var(--primary)) !important;
        }
        
        /* 스크롤 성능 최적화 */
        #bottom_quick {
          contain: layout style paint !important;
          transform: translate3d(0, 0, 0) !important;
        }
        
        /* 테마 토글 스타일 */
        .theme-toggle-container {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        
        /* 테마 토글 드롭다운 애니메이션 */
        .theme-dropdown {
          animation: slideUp 0.2s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* 모바일에서 테마 토글 위치 조정 */
        @media (max-width: 640px) {
          .theme-toggle-container {
            left: 8px;
            bottom: 110px;
          }
        }
      `}</style>
      </div>
    </>
  );
}

// Default props for the component
BottomQuickMenuSnu.defaultProps = {
  title: "하단 퀵 메뉴",
  body: undefined,
  ctaText: undefined,
  href: undefined
};

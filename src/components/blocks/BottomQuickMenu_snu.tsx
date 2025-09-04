"use client";

import React from 'react';

interface BottomQuickMenuSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

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
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[99999] bg-[rgb(var(--surface))] border-t border-[rgb(var(--border))]"
      data-name="Bottom Quick Menu SNU"
      data-anchor="bottom-quick"
      id="bottom_quick"
      style={{
        height: '97px',
        fontFamily: 'Pretendard, Jost, "Malgun Gothic", sans-serif'
      }}
    >
      {/* 메뉴 컨테이너 */}
      <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[50px] py-4">
        {quickMenuItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            className="group flex flex-col items-center justify-center gap-1 min-w-0 flex-1 px-2 py-2 rounded-lg transition-all duration-300 hover:bg-[rgb(var(--surface-variant))] hover:scale-105"
            aria-label={`${item.label} 페이지로 이동`}
            rel={item.href.startsWith('http') ? "noopener noreferrer" : "noopener"}
            target={item.href.startsWith('http') ? "_blank" : undefined}
          >
            {/* 아이콘 */}
            <div 
              className="w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: item.color,
                color: 'rgb(var(--surface))'
              }}
            >
              <span className="text-xs font-bold">{item.icon}</span>
            </div>
            
            {/* 라벨 */}
            <div 
              className="text-center transition-colors duration-300 group-hover:text-[rgb(var(--primary))]"
              style={{
                fontSize: '12px',
                lineHeight: '1.2',
                color: 'rgba(51, 51, 51, 0.6)',
                fontFamily: 'Pretendard, Jost, "Malgun Gothic", sans-serif'
              }}
            >
              <span className="block whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px]">
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
      <style jsx>{`
        @media (max-width: 640px) {
          .quick-menu-item {
            min-width: 60px;
          }
          .quick-menu-label {
            font-size: 10px;
            max-width: 60px;
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
      `}</style>
    </div>
  );
}

// Default props for the component
BottomQuickMenuSnu.defaultProps = {
  title: "하단 퀵 메뉴",
  body: undefined,
  ctaText: undefined,
  href: undefined
};

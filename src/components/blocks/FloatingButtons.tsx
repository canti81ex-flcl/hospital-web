"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FloatingButton {
  icon: string;
  label: string;
  href?: string;
  action?: () => void;
}

interface FloatingButtonsProps {
  buttons?: FloatingButton[];
}

export default function FloatingButtons({
  buttons = [
    {
      icon: "📞",
      label: "상담하기",
      href: "/consultation"
    },
    {
      icon: "📅",
      label: "예약하기",
      href: "/reservation"
    },
    {
      icon: "💬",
      label: "카톡상담",
      href: "https://open.kakao.com/your-channel"
    },
    {
      icon: "⬆️",
      label: "맨 위로",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" })
    }
  ]
}: FloatingButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [theme, setTheme] = useState("antdesign");

  useEffect(() => {
    // 현재 테마 감지
    const currentTheme = document.documentElement.getAttribute("data-theme") || "antdesign";
    setTheme(currentTheme);

    // 테마 변경 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme") || "antdesign";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    return () => observer.disconnect();
  }, []);

  const handleButtonClick = (button: FloatingButton) => {
    if (button.action) {
      button.action();
    }
    // 맨 위로 버튼이 아닌 경우 확장 상태 유지
    if (button.label !== "맨 위로") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="fixed bottom-32 right-6 z-50 flex flex-col gap-3">
      {/* 플로팅 버튼들 */}
      {buttons.map((button, index) => (
        <div
          key={button.label}
          className={`relative transition-all duration-300 ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isExpanded ? `${index * 100}ms` : "0ms"
          }}
        >
          {/* 툴팁 */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-[rgb(var(--text))] text-[rgb(var(--background))] px-2 py-1 rounded-[var(--radius-sm)] text-xs whitespace-nowrap">
              {button.label}
            </div>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[rgb(var(--text))] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>

                     {/* 메인 버튼 */}
           {button.href ? (
             <Link
               href={button.href}
               className="group w-14 h-14 bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/.9 transition-all duration-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer text-[rgb(var(--primary-foreground))]"
               aria-label={button.label}
               rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
               target={button.href.startsWith("http") ? "_blank" : undefined}
             >
               <span className="text-2xl">{button.icon}</span>
             </Link>
           ) : (
             <button
               onClick={() => handleButtonClick(button)}
               className="group w-14 h-14 bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/.9 transition-all duration-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer text-[rgb(var(--primary-foreground))]"
               aria-label={button.label}
             >
               <span className="text-2xl">{button.icon}</span>
             </button>
           )}
        </div>
      ))}

      {/* 메인 토글 버튼 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/.9 text-[rgb(var(--primary-foreground))] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        aria-label={isExpanded ? "플로팅 버튼 접기" : "플로팅 버튼 펼치기"}
      >
        <span className={`text-2xl transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`}>
          {isExpanded ? "✕" : "➕"}
        </span>
      </button>
    </div>
  );
}

// Prop types and default values
export type { FloatingButtonsProps, FloatingButton };

export const defaultProps: Partial<FloatingButtonsProps> = {
  buttons: [
    {
      icon: "📞",
      label: "상담하기",
      href: "/consultation"
    },
    {
      icon: "📅",
      label: "예약하기",
      href: "/reservation"
    },
    {
      icon: "💬",
      label: "카톡상담",
      href: "https://open.kakao.com/your-channel"
    },
    {
      icon: "⬆️",
      label: "맨 위로",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" })
    }
  ]
};

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
  const [theme, setTheme] = useState("antdesign-enterprise");

  useEffect(() => {
    // 현재 테마 감지
    const currentTheme = document.documentElement.getAttribute("data-theme") || "antdesign-enterprise";
    setTheme(currentTheme);

    // 테마 변경 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme") || "antdesign-enterprise";
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
    <div className="
      fixed bottom-[var(--spacing-8)] right-[var(--spacing-6)] z-50 
      flex flex-col gap-[var(--spacing-3)] items-end 
      pointer-events-auto
    ">
      {/* Theme Toggle - 디자인 시스템 input 스타일 적용 */}
      <div className="flex gap-[var(--spacing-3)] mb-[var(--spacing-4)]">
        <select
          value={theme}
          onChange={(e) => {
            document.documentElement.setAttribute("data-theme", e.target.value);
            setTheme(e.target.value);
          }}
          className="h-[var(--input-height)] px-[var(--input-paddingX)] text-[var(--font-size-sm)] bg-[rgb(var(--input-bg))] border border-[rgb(var(--input-border))] rounded-[var(--input-radius)] shadow-[var(--card-shadow)] focus:border-[rgb(var(--input-focusBorder))] focus:ring-[var(--input-focusRing)] transition-all duration-200 text-[rgb(var(--input-fg))]"
        >
          <option value="antdesign-enterprise">Ant Design Enterprise</option>
          <option value="material-healthcare">Material Healthcare</option>
          <option value="atlassian-teamwork">Atlassian Teamwork</option>
          <option value="orbit-travel">Orbit Travel</option>
          <option value="starbucks-care">Starbucks Care</option>
          <option value="apple-clean">Apple Clean</option>
          <option value="twitch-community">Twitch Community</option>
          <option value="netflix-impact">Netflix Impact</option>
          <option value="stripe-clarity">Stripe Clarity</option>
          <option value="instagram-care-stories">Instagram Care</option>
          <option value="dropbox-simple">Dropbox Simple</option>
          <option value="microsoft-access">Microsoft Access</option>
          <option value="ibm-trust">IBM Trust</option>
        </select>
      </div>

      {/* 플로팅 버튼들 */}
      <div className={`flex flex-col gap-[var(--spacing-3)] transition-all duration-300 overflow-hidden ${
        isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      }`}>
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
            {/* 툴팁 - 디자인 시스템 tooltip 스타일 */}
            <div className="absolute right-full mr-[var(--spacing-3)] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-[rgb(var(--tooltip-bg))] text-[rgb(var(--tooltip-fg))] px-[var(--spacing-2)] py-[var(--spacing-1)] rounded-[var(--tooltip-radius)] text-[var(--font-size-xs)] whitespace-nowrap shadow-[var(--tooltip-shadow)]">
                {button.label}
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[rgb(var(--tooltip-bg))] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
            </div>

            {/* 메인 버튼 - 디자인 시스템 button primary 스타일 */}
            {button.href ? (
              <Link
                href={button.href}
                className="group w-14 h-14 bg-[rgb(var(--primary-default))] hover:bg-[rgb(var(--primary-hover))] active:bg-[rgb(var(--primary-active))] transition-all duration-200 rounded-[var(--button-radius)] flex items-center justify-center shadow-[var(--card-shadow)] hover:shadow-[var(--elevation-modal)] cursor-pointer text-[rgb(var(--fg-onPrimary))] focus:ring-[var(--button-focusRing)] focus:outline-none"
                aria-label={button.label}
                rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={button.href.startsWith("http") ? "_blank" : undefined}
              >
                <span className="text-2xl">{button.icon}</span>
              </Link>
            ) : (
              <button
                onClick={() => handleButtonClick(button)}
                className="group w-14 h-14 bg-[rgb(var(--primary-default))] hover:bg-[rgb(var(--primary-hover))] active:bg-[rgb(var(--primary-active))] transition-all duration-200 rounded-[var(--button-radius)] flex items-center justify-center shadow-[var(--card-shadow)] hover:shadow-[var(--elevation-modal)] cursor-pointer text-[rgb(var(--fg-onPrimary))] focus:ring-[var(--button-focusRing)] focus:outline-none"
                aria-label={button.label}
              >
                <span className="text-2xl">{button.icon}</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* 메인 토글 버튼 - 디자인 시스템 button primary 스타일 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[rgb(var(--primary-default))] hover:bg-[rgb(var(--primary-hover))] active:bg-[rgb(var(--primary-active))] text-[rgb(var(--fg-onPrimary))] rounded-[var(--button-radius)] flex items-center justify-center shadow-[var(--card-shadow)] hover:shadow-[var(--elevation-modal)] transition-all duration-200 hover:scale-110 focus:ring-[var(--button-focusRing)] focus:outline-none"
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
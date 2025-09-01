"use client";

import { useState } from "react";
import Link from "next/link";

interface HeaderNav1Props {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

export default function HeaderNav1({
  title = "🏥 온누리스마일",
  body,
  ctaText,
  href
}: HeaderNav1Props) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  const menuItems = [
    { 
      label: "🏥 온누리스마일", 
      href: "/",
      submenu: [
        { label: "병원이념", href: "/about/philosophy" },
        { label: "의료진소개", href: "/about/doctors" },
        { label: "검사/수술과정", href: "/about/process" },
        { label: "첨단장비", href: "/about/equipment" },
        { label: "수술장비", href: "/about/surgery-equipment" },
        { label: "학술활동", href: "/about/research" },
        { label: "사회공헌", href: "/about/contribution" },
        { label: "병원둘러보기", href: "/about/tour" },
        { label: "찾아오시는 길", href: "/about/directions" },
      ]
    },
    { 
      label: "😊 스마일라식", 
      href: "/smile",
      submenu: [
        { label: "1mm스마일PRO", href: "/smile/pro" },
        { label: "1mm스마일라식", href: "/smile/basic" },
        { label: "스마일라식 연구", href: "/smile/research" },
        { label: "X-tra", href: "/smile/xtra" },
        { label: "수술전후 주의사항", href: "/smile/precautions" },
      ]
    },
    { 
      label: "👁️ 렌즈삽입술", 
      href: "/lens",
      submenu: [
        { label: "안내렌즈삽입술", href: "/lens/icl" },
        { label: "렌즈삽입술 ICL 연구", href: "/lens/research" },
        { label: "난시교정 토릭 ICL", href: "/lens/toric" },
        { label: "난시교정 SSVC ICL", href: "/lens/ssvc" },
        { label: "노안교정 VIVA ICL", href: "/lens/viva" },
        { label: "수술전후 주의사항", href: "/lens/precautions" },
      ]
    },
    { 
      label: "🔬 시력교정", 
      href: "/correction",
      submenu: [
        { label: "시력교정술 비교", href: "/correction/comparison" },
        { label: "라식", href: "/correction/lasik" },
        { label: "라섹", href: "/correction/lasek" },
        { label: "FM난시교정", href: "/correction/fm" },
        { label: "안구건조증IPL", href: "/correction/ipl" },
        { label: "SSVC", href: "/correction/ssvc" },
        { label: "수술전후 주의사항", href: "/correction/precautions" },
      ]
    },
    { 
      label: "👓 노안·백내장", 
      href: "/presbyopia",
      submenu: [
        { label: "프리미엄 백내장수술", href: "/presbyopia/premium" },
        { label: "인공수정체 종류", href: "/presbyopia/lens-types" },
        { label: "노안교정", href: "/presbyopia/correction" },
        { label: "수술전후 주의사항", href: "/presbyopia/precautions" },
      ]
    },
    { 
      label: "📰 온누리소식", 
      href: "/news",
      submenu: [
        { label: "병원소식", href: "/news/hospital" },
        { label: "연구활동", href: "/news/research" },
        { label: "언론보도", href: "/news/media" },
        { label: "자주묻는질문", href: "/news/faq" },
      ]
    },
    { 
      label: "🎉 이벤트·후기", 
      href: "/events",
      submenu: [
        { label: "이벤트", href: "/events/current" },
        { label: "리얼후기", href: "/events/reviews" },
        { label: "영상후기", href: "/events/video-reviews" },
        { label: "의료직후기", href: "/events/medical-reviews" },
        { label: "로그인", href: "/auth/login" },
        { label: "회원가입", href: "/auth/register" },
      ]
    },
  ];

  return (
         <header 
       className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 group"
       style={{
         backgroundColor: hoveredMenu ? 'rgb(var(--bg-elevated))' : 'transparent',
         borderBottom: `1px solid rgb(var(--border-subtle))`,
         backdropFilter: hoveredMenu ? 'blur(10px)' : 'none',
         boxShadow: hoveredMenu ? 'var(--elevation-card)' : 'none'
       }}
       onMouseLeave={() => setHoveredMenu(null)}
     >
                               <nav className="flex items-center justify-center gap-10 px-10 py-5 transition-all duration-300">
         {/* 데스크톱 메뉴 - Figma 디자인 그대로 구현 */}
         <div className="hidden lg:flex items-center gap-10">
           {menuItems.map((item, index) => (
             <div
               key={item.href}
               className="relative"
               onMouseEnter={() => setHoveredMenu(item.label)}
             >
               <Link
                 href={item.href}
                 className="font-semibold text-[16px] whitespace-nowrap transition-all duration-200 hover:scale-120 hover:brightness-130"
                 style={{ color: 'rgb(var(--fg-primary))' }}
                 rel="noopener"
                 aria-label={`${item.label} 페이지로 이동`}
               >
                 {item.label}
               </Link>
             </div>
           ))}
         </div>

         {/* 모바일 - 간소화된 메뉴 */}
         <div className="lg:hidden flex items-center justify-between w-full">
           <Link 
             href="/"
             className="font-semibold text-[16px]"
            style={{ color: 'rgb(var(--fg-primary))' }}
             aria-label="온누리스마일 홈페이지로 이동"
           >
             {title}
           </Link>
           
           <div className="flex items-center gap-4 overflow-x-auto">
             {menuItems.slice(1, 4).map((item) => (
               <Link
                 key={item.href}
                 href={item.href}
                 className="font-semibold text-[14px] text-[rgb(var(--fg-primary))] hover:text-[rgb(var(--primary-default))] transition-colors whitespace-nowrap"
                 rel="noopener"
               >
                 {item.label}
               </Link>
             ))}
           </div>
         </div>

        {/* CTA 버튼 (선택적) */}
        {ctaText && href && (
          <Link
            href={href}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/.9 rounded-[var(--radius-md)] transition-colors whitespace-nowrap"
            aria-label={`${ctaText} 페이지로 이동`}
            rel={href.startsWith("http") ? "noopener noreferrer" : "noopener"}
            target={href.startsWith("http") ? "_blank" : undefined}
          >
            {ctaText}
          </Link>
        )}
      </nav>

             {/* 메가 드롭다운 */}
       {hoveredMenu && (
                   <div 
                     className="absolute top-full left-0 w-full transition-all duration-300 border border-[rgb(var(--border-subtle))] z-50"
                     style={{
                       backgroundColor: 'rgb(var(--bg-elevated))',
                       boxShadow: 'var(--elevation-card)'
                     }}
                   >
           <div className="flex items-start justify-center px-[50px] py-[30px]">
             {/* 모든 메뉴 컬럼을 항상 표시 */}
             {menuItems.map((item, index) => (
               <div key={item.label} className="relative">
                 <div 
                   className="transition-colors duration-200 flex flex-col gap-3 h-[340px] items-center justify-start overflow-clip pr-[15px] w-[186px]"
                   style={{
                     backgroundColor: hoveredSubMenu === item.label ? 'rgb(var(--bg-subtle))' : 'transparent'
                   }}
                   onMouseEnter={() => setHoveredSubMenu(item.label)}
                   onMouseLeave={() => setHoveredSubMenu(null)}
                 >
                  {/* 회색 2px 바 with 중앙에서 퍼지는 애니메이션 */}
                  <div className="relative h-[2px] w-[120px] bg-[rgb(var(--fg-muted))] overflow-hidden">
                    <div className={`absolute top-0 left-1/2 h-full bg-[rgb(var(--primary-default))] transform -translate-x-1/2 transition-all duration-300 ${
                      hoveredSubMenu === item.label ? "w-full" : "w-0"
                    }`} />
                  </div>
                  {item.submenu?.map((subItem, subIndex) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`text-[14px] transition-all duration-200 hover:scale-115 hover:opacity-70 whitespace-nowrap text-center ${
                        subIndex >= 4 && item.label === "🎉 이벤트·후기" ? "font-semibold pt-3 mt-3" : ""
                      }`}
                      style={{
                        color: 'rgb(var(--fg-muted))',
                        borderTop: subIndex >= 4 && item.label === "🎉 이벤트·후기" ? `1px solid rgb(var(--border-subtle))` : 'none'
                      }}
                      onMouseEnter={() => setHoveredSubMenu(item.label)}
                      onMouseLeave={() => setHoveredSubMenu(null)}
                      rel="noopener"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
                {/* 구분선 (마지막 컬럼 제외) */}
                {index < menuItems.length - 1 && (
                  <div 
                    className="absolute top-0 right-0 h-full w-px"
                    style={{ backgroundColor: 'rgb(var(--border-subtle))' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// Props 타입 및 기본값
HeaderNav1.defaultProps = {
  title: "🏥 온누리스마일",
  body: undefined,
  ctaText: undefined,
  href: undefined
} as Partial<HeaderNav1Props>;
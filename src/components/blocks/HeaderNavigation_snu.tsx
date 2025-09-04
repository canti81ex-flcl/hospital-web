"use client";
import React, { useState, useEffect } from 'react';

interface HeaderNavigationSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

interface MenuItem {
  title: string;
  href: string;
  submenu?: {
    title: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "SNU안과",
    href: "#about",
    submenu: [
      { title: "차별화된 가치", href: "#values" },
      { title: "의료진 소개", href: "#doctors" },
      { title: "첨단장비", href: "#equipment" },
      { title: "진료시간 및 오시는 길", href: "#contact" },
      { title: "비급여항목 안내", href: "#pricing" },
      { title: "인터넷증명서 발급서비스", href: "#certificate" }
    ]
  },
  {
    title: "스마일",
    href: "#smile",
    submenu: [
      { title: "SNU 스마일라식", href: "#smile-lasik" },
      { title: "스마일 PRO", href: "#smile-pro" },
      { title: "각막강화술", href: "#cornea-strengthening" }
    ]
  },
  {
    title: "렌즈삽입술",
    href: "#lens",
    submenu: [
      { title: "렌즈삽입술 연구", href: "#lens-research" },
      { title: "난시교정, 제로토릭ICL", href: "#toric-icl" },
      { title: "SNU 렌즈삽입술ICL", href: "#snu-icl" }
    ]
  },
  {
    title: "노안ㆍ백내장",
    href: "#cataract",
    submenu: [
      { title: "노안·백내장", href: "#presbyopia-cataract" },
      { title: "인공수정체 맞춤 컨설팅", href: "#lens-consulting" },
      { title: "노안 스마일", href: "#presbyopia-smile" }
    ]
  },
  {
    title: "시력교정",
    href: "#vision",
    submenu: [
      { title: "라식", href: "#lasik" },
      { title: "라섹", href: "#lasek" },
      { title: "드림렌즈", href: "#dream-lens" },
      { title: "재교정 클리닉", href: "#revision" }
    ]
  },
  {
    title: "고객센터",
    href: "#customer",
    submenu: [
      { title: "온라인상담", href: "#online-consultation" },
      { title: "온라인예약", href: "#online-booking" },
      { title: "전화상담신청", href: "#phone-consultation" },
      { title: "검사 및 수술 Q&A", href: "#faq" }
    ]
  },
  {
    title: "이벤트 & 소식",
    href: "#events",
    submenu: [
      { title: "이벤트", href: "#events-list" },
      { title: "SNU유튜브", href: "#youtube" },
      { title: "공지사항", href: "#notices" },
      { title: "SNU 칼럼", href: "#column" }
    ]
  },
  {
    title: "체험기",
    href: "#reviews",
    submenu: [
      { title: "스타후기", href: "#star-reviews" },
      { title: "고객후기", href: "#customer-reviews" },
      { title: "의료진후기", href: "#doctor-reviews" },
      { title: "영상후기", href: "#video-reviews" }
    ]
  }
];

export default function HeaderNavigationSnu({
  title = "SNU EYE CLINIC",
  body,
  ctaText,
  href
}: HeaderNavigationSnuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);
  return (
    <>
      <header 
        className="bg-[rgba(var(--surface),0.95)] backdrop-blur-sm box-border content-stretch flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-4 sm:py-5 relative w-full z-50"
        data-name="Header Navigation SNU"
        data-anchor="header"
      >
        {/* Logo Section - Left aligned */}
        <div 
          className="bg-[rgb(var(--primary))] box-border content-stretch flex gap-2 h-8 sm:h-9 md:h-10 items-center justify-center overflow-clip px-2 sm:px-3 py-1 sm:py-2 relative shrink-0"
          data-name="Logo"
        >
          <div 
            className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-nowrap text-[rgb(var(--on-primary))]"
            data-node-id="logo-text"
          >
            <p className="leading-[normal] whitespace-pre">{title}</p>
          </div>
        </div>

        {/* Desktop Navigation Menu - Centered */}
        <nav 
          className="hidden lg:flex bg-transparent content-stretch font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium gap-4 xl:gap-6 h-10 items-center justify-center leading-[0] not-italic relative shrink-0 text-[rgb(var(--text))] text-[14px] xl:text-[16px]"
          data-name="Navigation Menu"
          role="navigation"
          aria-label="메인 네비게이션"
          onMouseEnter={() => {
            // Clear any existing timeout when entering nav area
            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
              setHoverTimeout(null);
            }
          }}
          onMouseLeave={() => {
            // Set timeout to hide dropdown when leaving nav area
            const timeout = setTimeout(() => {
              setActiveMenu(null);
              setIsDropdownVisible(false);
            }, 500);
            setHoverTimeout(timeout);
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => {
                // Clear any existing timeout
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout);
                  setHoverTimeout(null);
                }
                setActiveMenu(item.title);
                setIsDropdownVisible(true);
              }}
              onMouseLeave={() => {
                // Don't set timeout here - let the main nav handle it
                // This prevents the dropdown from disappearing when moving to dropdown
              }}
            >
              <a 
                href={item.href} 
                className={`relative shrink-0 transition-all duration-200 px-3 py-2 rounded-md ${
                  currentPath === item.href 
                    ? 'text-[rgb(var(--primary))] bg-[rgb(var(--primary-light))]' 
                    : 'hover:text-[rgb(var(--primary))]'
                }`}
                data-node-id={`nav-${item.title}`}
                onClick={() => setCurrentPath(item.href)}
              >
                <span className="leading-[normal] text-nowrap whitespace-pre font-medium">{item.title}</span>
                {/* Active indicator */}
                {currentPath === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[rgb(var(--primary))] rounded-full" />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="lg:hidden bg-transparent border-none p-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기/닫기"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`block w-5 h-0.5 bg-[rgb(var(--text))] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            />
            <span 
              className={`block w-5 h-0.5 bg-[rgb(var(--text))] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block w-5 h-0.5 bg-[rgb(var(--text))] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mega Dropdown Menu */}
      <div 
        className={`fixed top-0 left-0 w-full bg-[rgba(var(--surface),0.98)] backdrop-blur-sm shadow-lg z-40 pt-20 ${
          activeMenu && isDropdownVisible 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-0 pointer-events-none'
        }`}
        style={{
          filter: activeMenu && isDropdownVisible ? 'blur(0px)' : 'blur(0px)',
          transform: activeMenu && isDropdownVisible ? 'translateY(0px) scale(1)' : 'translateY(-8px) scale(0.98)',
          transition: activeMenu && isDropdownVisible 
            ? 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1), filter 500ms cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0ms ease-out'
            : 'opacity 300ms cubic-bezier(0.4, 0, 0.6, 1), transform 300ms cubic-bezier(0.4, 0, 0.6, 1), filter 300ms cubic-bezier(0.4, 0, 0.6, 1), pointer-events 0ms ease-out'
        }}
        onMouseEnter={() => {
          // Clear any existing timeout when entering dropdown
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
          }
          if (activeMenu) {
            setActiveMenu(activeMenu);
            setIsDropdownVisible(true);
          }
        }}
        onMouseLeave={() => {
          // Set timeout to hide dropdown when leaving dropdown area
          const timeout = setTimeout(() => {
            setActiveMenu(null);
            setIsDropdownVisible(false);
          }, 300);
          setHoverTimeout(timeout);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-[60px] py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="space-y-4"
                onMouseEnter={() => {
                  // Clear any existing timeout
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                  setActiveMenu(item.title);
                  setIsDropdownVisible(true);
                }}
              >
                <h3 className={`font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold text-[18px] mb-4 transition-colors duration-200 ${
                  activeMenu === item.title 
                    ? 'text-[rgb(var(--primary))]' 
                    : 'text-[rgb(var(--text))]'
                }`}>
                  {item.title}
                </h3>
                {item.submenu && (
                  <ul className="space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className={`block text-[14px] transition-all duration-300 ease-out py-2 px-3 rounded-md hover:scale-105 hover:translate-x-1 ${
                            currentPath === subItem.href
                              ? 'text-[rgb(var(--primary))] bg-[rgb(var(--primary-light))] shadow-sm'
                              : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:bg-[rgb(var(--surface-variant))] hover:shadow-sm'
                          }`}
                          onClick={() => {
                            setCurrentPath(subItem.href);
                            setActiveMenu(null);
                            setIsDropdownVisible(false);
                          }}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[rgba(var(--surface),0.98)] backdrop-blur-sm z-40 pt-20">
          <div className="px-4 py-8">
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-[rgb(var(--border))] pb-4">
                  <a
                    href={item.href}
                    className={`block font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold text-[18px] mb-3 transition-colors duration-200 ${
                      currentPath === item.href 
                        ? 'text-[rgb(var(--primary))]' 
                        : 'text-[rgb(var(--text))]'
                    }`}
                    onClick={() => {
                      setCurrentPath(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <ul className="space-y-2 ml-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className={`block text-[14px] transition-all duration-200 py-2 px-2 rounded-md ${
                              currentPath === subItem.href
                                ? 'text-[rgb(var(--primary))] bg-[rgb(var(--primary-light))]'
                                : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))] hover:bg-[rgb(var(--surface-variant))]'
                            }`}
                            onClick={() => {
                              setCurrentPath(subItem.href);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

// Default props for the component
HeaderNavigationSnu.defaultProps = {
  title: "SNU EYE CLINIC",
  body: undefined,
  ctaText: undefined,
  href: undefined
};

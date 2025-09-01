"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// fullpage.js를 동적으로 로드 (SSR 방지)
const ReactFullpage = dynamic(() => import('@fullpage/react-fullpage'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

interface FullPageWrapperProps {
  children: React.ReactNode;
  options?: any;
}

export default function FullPageWrapper({ 
  children, 
  options = {} 
}: FullPageWrapperProps) {
  const defaultOptions = {
    // 기본 설정
    anchors: ['hero', 'values', 'events', 'youtube', 'doctors', 'contact', 'consultation'],
    sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['홈', '가치관', '이벤트', '유튜브', '의료진', '문의', '상담'],
    showActiveTooltip: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '.scroll-area, .modal, .popup',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    controlArrows: true,
    verticalCentered: false,
    bigSectionsDestination: null,
    // 반응형 설정
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
      type: 'reveal',
      percentage: 62,
      property: 'translate'
    },
    // 콜백 함수들
    onLeave: function(origin: any, destination: any, direction: string) {
      console.log('Leaving section ' + origin.index + ' to ' + destination.index);
    },
    afterLoad: function(origin: any, destination: any, direction: string) {
      console.log('Loaded section ' + destination.index);
    },
    afterRender: function() {
      console.log('FullPage.js initialized');
    },
    afterResize: function(width: number, height: number) {
      console.log('Window resized');
    },
    afterReBuild: function() {
      console.log('FullPage.js rebuilt');
    },
    afterSlideLoad: function(section: any, origin: any, destination: any, direction: string) {
      console.log('Slide loaded');
    },
    onSlideLeave: function(section: any, origin: any, destination: any, direction: string) {
      console.log('Slide left');
    },
    ...options
  };

  return (
    <ReactFullpage
      {...defaultOptions}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            {children}
            {/* 커스텀 네비게이션 오버레이 */}
            <style jsx global>{`
              /* FullPage.js 커스텀 스타일 */
              #fp-nav ul li a span, 
              .fp-slidesNav ul li a span {
                background: rgba(var(--color-white), 0.4) !important;
                width: 8px !important;
                height: 8px !important;
                margin: -4px 0 0 -4px !important;
              }
              
              #fp-nav ul li a.active span, 
              .fp-slidesNav ul li a.active span, 
              #fp-nav ul li:hover a.active span, 
              .fp-slidesNav ul li:hover a.active span {
                background: rgb(var(--primary-default)) !important;
                width: 12px !important;
                height: 12px !important;
                margin: -6px 0 0 -6px !important;
              }
              
              #fp-nav ul li:hover a span, 
              .fp-slidesNav ul li:hover a span {
                background: rgba(var(--primary-default), 0.7) !important;
                width: 10px !important;
                height: 10px !important;
                margin: -5px 0 0 -5px !important;
              }
              
              #fp-nav ul li .fp-tooltip {
                color: rgb(var(--color-white)) !important;
                font-family: var(--font-family-body) !important;
                font-size: var(--font-size-sm) !important;
                background: rgba(var(--color-gray-900), 0.9) !important;
                padding: var(--spacing-2) var(--spacing-3) !important;
                border-radius: var(--border-radius-sm) !important;
                backdrop-filter: blur(8px) !important;
                border: 1px solid rgba(var(--color-white), 0.1) !important;
              }
              
              /* 스크롤바 숨기기 */
              .fp-section {
                overflow: hidden !important;
              }
              
              /* 반응형 조정 */
              @media (max-width: 768px) {
                #fp-nav {
                  display: none !important;
                }
              }
              
              /* 부드러운 트랜지션 */
              .fp-section {
                transition: all 0.3s ease !important;
              }
              
              /* 로딩 인디케이터 */
              .fullpage-loading {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgb(var(--color-gray-900));
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                color: rgb(var(--color-white));
                font-family: var(--font-family-body);
              }
            `}</style>
          </div>
        );
      }}
    />
  );
}

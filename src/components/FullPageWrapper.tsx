"use client";

import React from "react";
import dynamic from "next/dynamic";
import home from "@/content/pages/home.json";

// fullpage.js를 동적으로 로드 (SSR 방지)
const ReactFullpage = dynamic(() => import('@fullpage/react-fullpage'), {
  ssr: false,
});

interface FullPageWrapperProps {
  children: React.ReactNode;
}

// home.json에서 헤더를 제외한 섹션 블록만 필터링하여 앵커 이름 생성
const sectionBlocks = home.blocks.filter(block => block.type !== 'HeaderNavigation_snu');
const anchors = sectionBlocks.map(block => block.type);

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  
  return (
    <div>
      <ReactFullpage
        // 라이선스 키
        licenseKey={"gplv3"}
        // 필수 credits 속성
        credits={{ enabled: true, label: 'Made with fullpage.js' }}

        // 탐색 설정
        anchors={anchors}
        navigation
        navigationPosition={"right"}

        // 스크롤 설정
        scrollingSpeed={1000}
        autoScrolling={true}
        fitToSection={true}
        fitToSectionDelay={1000}
        scrollBar={false}
        verticalCentered={false}

        // 필수 render 속성
        render={() => {
          return (
            <React.Fragment>
              {children}
            </React.Fragment>
          );
        }}
      />
       {/* Fullpage.js 커스텀 스타일 */}
       <style jsx global>{`
        #fp-nav ul li a span, 
        .fp-slidesNav ul li a span {
          background: rgba(0, 0, 0, 0.4) !important;
        }
        #fp-nav ul li a.active span, 
        .fp-slidesNav ul li a.active span {
          background: rgb(var(--fg-primary)) !important;
        }
      `}</style>
    </div>
  );
}
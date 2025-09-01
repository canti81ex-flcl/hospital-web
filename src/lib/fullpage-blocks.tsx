// src/lib/fullpage-blocks.tsx
"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import FullPageWrapper from "@/components/FullPageWrapper";

const registry = {
  // 고정 요소들 (fullpage 외부)
  HeaderNav1: dynamic(() => import("@/components/blocks/HeaderNav1")),
  FloatingButtons: dynamic(() => import("@/components/blocks/FloatingButtons")),
  
  // fullpage 섹션들
  Hero_Section_new: dynamic(() => import("@/components/blocks/Hero_Section_new")),
  Values_Section_new: dynamic(() => import("@/components/blocks/Values_Section_new")),
  Event_Section_new: dynamic(() => import("@/components/blocks/Event_Section_new")),
  YouTube_Section_new: dynamic(() => import("@/components/blocks/YouTube_Section_new")),
  Doctor_Section_new: dynamic(() => import("@/components/blocks/Doctor_Section_new")),
  Contact_Section_new: dynamic(() => import("@/components/blocks/Contact_Section_new")),
  Consultation_Section_new: dynamic(() => import("@/components/blocks/Consultation_Section_new")),
} as const;

type BlockType = keyof typeof registry;

export type Block = { type: string; props?: object };

// 고정 요소 타입들
const FIXED_ELEMENTS = ['HeaderNav1', 'FloatingButtons'] as const;
type FixedElementType = typeof FIXED_ELEMENTS[number];

// fullpage 섹션 타입들  
const FULLPAGE_SECTIONS = [
  'Hero_Section_new',
  'Values_Section_new', 
  'Event_Section_new',
  'YouTube_Section_new',
  'Doctor_Section_new',
  'Contact_Section_new',
  'Consultation_Section_new'
] as const;
type FullPageSectionType = typeof FULLPAGE_SECTIONS[number];

function isFixedElement(type: string): type is FixedElementType {
  return FIXED_ELEMENTS.includes(type as FixedElementType);
}

function isFullPageSection(type: string): type is FullPageSectionType {
  return FULLPAGE_SECTIONS.includes(type as FullPageSectionType);
}

export function RenderFullPageBlocks({ blocks }: { blocks: Block[] }): ReactNode {
  // 블록들을 고정 요소와 fullpage 섹션으로 분리
  const fixedElements = blocks.filter(block => isFixedElement(block.type));
  const fullPageSections = blocks.filter(block => isFullPageSection(block.type));

  // HeaderNav1 찾기 (페이지 최상단에 고정)
  const headerNav = fixedElements.find(block => block.type === 'HeaderNav1');
  
  // FloatingButtons 찾기 (페이지에 오버레이)
  const floatingButtons = fixedElements.find(block => block.type === 'FloatingButtons');

  return (
    <div className="relative">
      {/* 고정 헤더 */}
      {headerNav && (
        <div className="fixed top-0 left-0 right-0 z-50">
          {(() => {
            const HeaderComponent = registry[headerNav.type as keyof typeof registry];
            if (!HeaderComponent) return null;
            return <HeaderComponent {...(headerNav.props ?? {})} />;
          })()}
        </div>
      )}

      {/* FullPage.js 래퍼 */}
      <FullPageWrapper>
        {fullPageSections.map((block, index) => {
          const Component = registry[block.type as keyof typeof registry];
          if (!Component) {
            if (process.env.NODE_ENV !== "production") {
              console.warn(`[fullpage-blocks] Unknown section type: ${block.type}`);
            }
            return null;
          }

          return (
            <div key={index} className="section" data-anchor={getAnchorName(block.type as FullPageSectionType)}>
              <Component {...(block.props ?? {})} />
            </div>
          );
        })}
      </FullPageWrapper>

      {/* 플로팅 버튼들 */}
      {floatingButtons && (
        <div className="fixed bottom-0 right-0 z-40">
          {(() => {
            const FloatingComponent = registry[floatingButtons.type as keyof typeof registry];
            if (!FloatingComponent) return null;
            return <FloatingComponent {...(floatingButtons.props ?? {})} />;
          })()}
        </div>
      )}
    </div>
  );
}

// 블록 타입에서 anchor 이름 생성
function getAnchorName(blockType: FullPageSectionType): string {
  const anchorMap: Record<FullPageSectionType, string> = {
    Hero_Section_new: 'hero',
    Values_Section_new: 'values',
    Event_Section_new: 'events', 
    YouTube_Section_new: 'youtube',
    Doctor_Section_new: 'doctors',
    Contact_Section_new: 'contact',
    Consultation_Section_new: 'consultation'
  };
  
  return anchorMap[blockType] || blockType.toLowerCase();
}

// 기존 RenderBlocks과의 호환성을 위한 export
export { RenderFullPageBlocks as RenderBlocks };

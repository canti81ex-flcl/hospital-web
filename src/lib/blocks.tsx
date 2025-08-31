// src/lib/blocks.tsx
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const registry = {
  HeaderNav1:              dynamic(() => import("@/components/blocks/HeaderNav1")),
  Hero_Section:            dynamic(() => import("@/components/blocks/Hero_Section")),
  Hero_Section_Carousel:   dynamic(() => import("@/components/blocks/Hero_Section_Carousel")),
  Philosophy_Section:      dynamic(() => import("@/components/blocks/Philosophy_Section")),
  Services_Section:         dynamic(() => import("@/components/blocks/Services_Section")),
  Medical_Team_Section:    dynamic(() => import("@/components/blocks/Medical_Team_Section")),
  Review_Section:           dynamic(() => import("@/components/blocks/Review_Section")),
  Youtube_Event_Section:    dynamic(() => import("@/components/blocks/Youtube_Event_Section")),
  Consultation_Section:     dynamic(() => import("@/components/blocks/Consultation_Section")),
  Footer_Section:           dynamic(() => import("@/components/blocks/Footer_Section")),
  FloatingButtons:          dynamic(() => import("@/components/blocks/FloatingButtons")),
  Footer:                   dynamic(() => import("@/components/blocks/Footer")),
} as const;

type BlockType = keyof typeof registry;

export type Block = { type: BlockType; props?: object };

export function RenderBlocks({ blocks }: { blocks: Block[] }): ReactNode {
  return (
    <>
      {blocks.map((b, i) => {
        const Cmp = registry[b.type];
        if (!Cmp) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`[blocks] Unknown type: ${b.type}`);
          }
          return null;
        }
        return <Cmp key={i} {...(b.props ?? {})} />;
      })}
    </>
  );
}
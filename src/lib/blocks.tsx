// src/lib/blocks.tsx
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const registry = {
  HeaderNavigation_snu:    dynamic(() => import("@/components/blocks/HeaderNavigation_snu")),
  AboutSection_snu:        dynamic(() => import("@/components/blocks/AboutSection_snu")),
  ClinicSection_snu:       dynamic(() => import("@/components/blocks/ClinicSection_snu")),
  DoctorSection_snu:       dynamic(() => import("@/components/blocks/DoctorSection_snu")),
  EquipmentSection_snu:    dynamic(() => import("@/components/blocks/EquipmentSection_snu")),
  DiagnosisSection_snu:    dynamic(() => import("@/components/blocks/DiagnosisSection_snu")),
  EventSection_snu:        dynamic(() => import("@/components/blocks/EventSection_snu")),
  YouTubeSection_snu:      dynamic(() => import("@/components/blocks/YouTubeSection_snu")),
  ReviewSection_snu:       dynamic(() => import("@/components/blocks/ReviewSection_snu")),
  ContactSection_snu:      dynamic(() => import("@/components/blocks/ContactSection_snu")),
  Background_snu:          dynamic(() => import("@/components/blocks/Background_snu")),
  StepImageDescription_snu: dynamic(() => import("@/components/blocks/StepImageDescription_snu")),
  Detail_snu:              dynamic(() => import("@/components/blocks/Detail_snu")),
  SixCircle_snu:           dynamic(() => import("@/components/blocks/SixCircle_snu")),
  FourItemsWithAnimation_snu: dynamic(() => import("@/components/blocks/FourItemsWithAnimation_snu")),
  ThreeVideoCards_snu:     dynamic(() => import("@/components/blocks/ThreeVideoCards_snu")),
  BottomQuickMenu_snu:     dynamic(() => import("@/components/blocks/BottomQuickMenu_snu")),
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
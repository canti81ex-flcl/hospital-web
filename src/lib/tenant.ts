// src/lib/tenant.ts
export type TenantId = "default" | "eye" | "skin"; // 필요에 따라 추가

// tenant → themeId 매핑 (지금은 동일하게 사용)
export const THEMES: Record<TenantId, { id: string; label: string }> = {
  default: { id: "default", label: "기본" },
  eye:     { id: "eye",     label: "안과" },
  skin:    { id: "skin",    label: "피부과" }, // 예시
};

/**
 * 호스트명으로부터 tenant를 판별합니다.
 * - eye.example.com → eye
 * - skin.example.com → skin
 * - (그 외) → default
 */
export function getTenantFromHost(host: string | null): TenantId {
  const h = (host ?? "").toLowerCase();

  // localhost 개발 환경 처리
  // eye.localhost, eye.local, eye.test 등을 eye로 인식
  if (h.startsWith("eye.") || h.includes(".eye.")) return "eye";
  if (h.startsWith("skin.") || h.includes(".skin.")) return "skin";

  // Vercel 프리뷰 브랜치 또는 커스텀 도메인 패턴이 복잡할 수 있어
  // 필요 시 정규식/화이트리스트 방식으로 보강하세요.
  return "default";
}

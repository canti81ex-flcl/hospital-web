import Link from "next/link";

interface FooterSectionProps {
  companyName?: string;
  companyInfo?: string[];
  locationTitle?: string;
  locationInfo?: string[];
  bottomLinks?: Array<{
    text: string;
    href: string;
  }>;
}

export default function FooterSection({
  companyName = "온누리스마일안과",
  companyInfo = [
    "의료기관명: 온누리스마일안과의원",
    "사업자등록번호: 214-91-26704",
    "대표: 김부기",
    "Tel: 02-6913-0000 | Fax: 02-532-5406",
    "주소: 서울 서초구 서초대로 77길 3, 아라타워 B2"
  ],
  locationTitle = "🗺️ 찾아오시는 길",
  locationInfo = [
    "📍 강남역 9번 출구 직결",
    "서울 서초구 서초대로 77길 3, 아라타워 B2",
    "좌측 연결통로와 바로 연결됩니다.",
    "",
    "🚗 주차 및 대중교통 안내 가능"
  ],
  bottomLinks = [
    { text: "개인정보 취급방침", href: "/privacy" },
    { text: "이용약관", href: "/terms" },
    { text: "비급여항목 고지", href: "/non-covered" },
    { text: "증명서 발급 안내", href: "/certificate" }
  ]
}: FooterSectionProps) {
  return (
    <footer className="bg-[rgb(var(--muted))] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 items-start justify-start">
          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row gap-20 w-full">
            {/* Company Info */}
            <div className="flex flex-col gap-3 w-full lg:w-[500px]">
              <h3 className="font-bold text-xl text-[rgb(var(--muted-foreground))] leading-tight">
                {companyName}
              </h3>
              <div className="text-sm text-[rgb(var(--muted-foreground))] leading-relaxed">
                {companyInfo.map((line, index) => (
                  <p key={index} className="mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Location Info */}
            <div className="flex flex-col gap-3 w-full lg:w-[400px]">
              <h4 className="font-semibold text-lg text-[rgb(var(--muted-foreground))] leading-tight">
                {locationTitle}
              </h4>
              <div className="text-sm text-[rgb(var(--muted-foreground))] leading-relaxed">
                {locationInfo.map((line, index) => (
                  <p key={index} className="mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="w-full border-t border-[rgb(var(--border))] py-5">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
              {bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--text))] transition-colors duration-200"
                  aria-label={link.text}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Prop types and default values
export type { FooterSectionProps };

export const defaultProps: Partial<FooterSectionProps> = {
  companyName: "온누리스마일안과",
  companyInfo: [
    "의료기관명: 온누리스마일안과의원",
    "사업자등록번호: 214-91-26704",
    "대표: 김부기",
    "Tel: 02-6913-0000 | Fax: 02-532-5406",
    "주소: 서울 서초구 서초대로 77길 3, 아라타워 B2"
  ],
  locationTitle: "🗺️ 찾아오시는 길",
  locationInfo: [
    "📍 강남역 9번 출구 직결",
    "서울 서초구 서초대로 77길 3, 아라타워 B2",
    "좌측 연결통로와 바로 연결됩니다.",
    "",
    "🚗 주차 및 대중교통 안내 가능"
  ],
  bottomLinks: [
    { text: "개인정보 취급방침", href: "/privacy" },
    { text: "이용약관", href: "/terms" },
    { text: "비급여항목 고지", href: "/non-covered" },
    { text: "증명서 발급 안내", href: "/certificate" }
  ]
};

import Link from "next/link";

interface YoutubeEventSectionProps {
  youtubeTitle?: string;
  youtubeDescription?: string;
  youtubeCtaText?: string;
  youtubeHref?: string;
  eventTitle?: string;
  eventDescription?: string;
  eventCtaText?: string;
  eventHref?: string;
}

export default function YoutubeEventSection({
  youtubeTitle = "YOUTUBE",
  youtubeDescription = "온누리에서 전하는 눈 건강정보\n유튜브 채널에서 바로 만나보세요",
  youtubeCtaText = "유튜브채널 바로가기",
  youtubeHref = "https://youtube.com/@onnuri-eye",
  eventTitle = "EVENT",
  eventDescription = "최신 이벤트 정보\n특별 할인 혜택을 만나보세요",
  eventCtaText = "이벤트 보기",
  eventHref = "/events"
}: YoutubeEventSectionProps) {
  return (
    <section className="bg-[rgb(var(--muted))] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-15 items-start justify-center">
          {/* YouTube Card */}
          <div className="bg-[rgb(var(--surface))] h-[280px] relative rounded-[var(--radius-xl)] border border-[rgb(var(--border))] overflow-hidden w-full lg:w-[600px]">
            <div className="flex flex-col gap-5 h-full items-center justify-center px-10 py-8">
              {/* YouTube Icon */}
              <div className="text-4xl text-[rgb(var(--destructive))]">
                📺
              </div>
              
              {/* YouTube Title */}
              <h3 className="font-semibold text-2xl text-[rgb(var(--text))] leading-tight">
                {youtubeTitle}
              </h3>
              
              {/* YouTube Description */}
              <div className="text-base text-[rgb(var(--muted-foreground))] leading-relaxed text-center whitespace-pre-line">
                {youtubeDescription}
              </div>
              
              {/* YouTube CTA Button */}
              <Link
                href={youtubeHref}
                className="bg-[rgb(var(--destructive))] hover:bg-[rgb(var(--destructive))]/.9 text-[rgb(var(--destructive-foreground))] font-semibold px-6 py-3 rounded-[var(--radius-md)] transition-colors duration-200 text-sm"
                aria-label={youtubeCtaText}
                target="_blank"
                rel="noopener noreferrer"
              >
                {youtubeCtaText}
              </Link>
            </div>
          </div>
          
          {/* Event Card */}
          <div className="bg-[rgb(var(--surface))] h-[280px] relative rounded-[var(--radius-xl)] border border-[rgb(var(--border))] overflow-hidden w-full lg:w-[600px]">
            <div className="flex flex-col gap-5 h-full items-center justify-center px-10 py-8">
              {/* Event Icon */}
              <div className="text-4xl text-[rgb(var(--accent))]">
                🎉
              </div>
              
              {/* Event Title */}
              <h3 className="font-semibold text-2xl text-[rgb(var(--text))] leading-tight">
                {eventTitle}
              </h3>
              
              {/* Event Description */}
              <div className="text-base text-[rgb(var(--muted-foreground))] leading-relaxed text-center whitespace-pre-line">
                {eventDescription}
              </div>
              
              {/* Event CTA Button */}
              <Link
                href={eventHref}
                className="bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/.9 text-[rgb(var(--accent-foreground))] font-semibold px-6 py-3 rounded-[var(--radius-md)] transition-colors duration-200 text-sm"
                aria-label={eventCtaText}
              >
                {eventCtaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { YoutubeEventSectionProps };

export const defaultProps: Partial<YoutubeEventSectionProps> = {
  youtubeTitle: "YOUTUBE",
  youtubeDescription: "온누리에서 전하는 눈 건강정보\n유튜브 채널에서 바로 만나보세요",
  youtubeCtaText: "유튜브채널 바로가기",
  youtubeHref: "https://youtube.com/@onnuri-eye",
  eventTitle: "EVENT",
  eventDescription: "최신 이벤트 정보\n특별 할인 혜택을 만나보세요",
  eventCtaText: "이벤트 보기",
  eventHref: "/events"
};

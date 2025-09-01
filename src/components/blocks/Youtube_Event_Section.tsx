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
    <section className="bg-[rgb(var(--bg-subtle))] py-[var(--spacing-16)]">
      <div className="mx-auto max-w-7xl px-[var(--spacing-6)]">
        <div className="flex flex-col lg:flex-row gap-[var(--spacing-16)] items-start justify-center">
          {/* YouTube Card */}
          <div className="bg-[rgb(var(--bg-elevated))] h-[280px] relative rounded-[var(--card-radius)] border border-[rgb(var(--border-subtle))] shadow-[var(--card-shadow)] overflow-hidden w-full lg:w-[600px] hover:shadow-[var(--elevation-modal)] transition-shadow duration-300">
            <div className="flex flex-col gap-[var(--spacing-5)] h-full items-center justify-center px-[var(--spacing-10)] py-[var(--spacing-8)]">
              {/* YouTube Icon */}
              <div className="text-[var(--font-size-4xl)] text-[rgb(var(--danger-default))]">
                📺
              </div>
              
              {/* YouTube Title */}
              <h3 className="font-[var(--font-weight-semibold)] text-[var(--font-size-2xl)] text-[rgb(var(--fg-primary))] leading-[var(--line-height-tight)]">
                {youtubeTitle}
              </h3>
              
              {/* YouTube Description */}
              <div className="text-[var(--font-size-base)] text-[rgb(var(--fg-muted))] leading-[var(--line-height-relaxed)] text-center whitespace-pre-line">
                {youtubeDescription}
              </div>
              
              {/* YouTube CTA Button - 디자인 시스템 danger variant */}
              <Link
                href={youtubeHref}
                className="inline-flex items-center justify-center h-[var(--button-height)] px-[var(--button-paddingX)] bg-[rgb(var(--danger-default))] text-[rgb(var(--fg-onPrimary))] font-[var(--button-font-weight)] rounded-[var(--button-radius)] hover:opacity-90 transition-all duration-200 text-[var(--font-size-sm)]"
                aria-label={youtubeCtaText}
                target="_blank"
                rel="noopener noreferrer"
              >
                {youtubeCtaText}
              </Link>
            </div>
          </div>
          
          {/* Event Card */}
          <div className="bg-[rgb(var(--bg-elevated))] h-[280px] relative rounded-[var(--card-radius)] border border-[rgb(var(--border-subtle))] shadow-[var(--card-shadow)] overflow-hidden w-full lg:w-[600px] hover:shadow-[var(--elevation-modal)] transition-shadow duration-300">
            <div className="flex flex-col gap-[var(--spacing-5)] h-full items-center justify-center px-[var(--spacing-10)] py-[var(--spacing-8)]">
              {/* Event Icon */}
              <div className="text-[var(--font-size-4xl)] text-[rgb(var(--warning-default))]">
                🎉
              </div>
              
              {/* Event Title */}
              <h3 className="font-[var(--font-weight-semibold)] text-[var(--font-size-2xl)] text-[rgb(var(--fg-primary))] leading-[var(--line-height-tight)]">
                {eventTitle}
              </h3>
              
              {/* Event Description */}
              <div className="text-[var(--font-size-base)] text-[rgb(var(--fg-muted))] leading-[var(--line-height-relaxed)] text-center whitespace-pre-line">
                {eventDescription}
              </div>
              
              {/* Event CTA Button - 디자인 시스템 warning variant */}
              <Link
                href={eventHref}
                className="inline-flex items-center justify-center h-[var(--button-height)] px-[var(--button-paddingX)] bg-[rgb(var(--warning-default))] text-[rgb(var(--fg-onPrimary))] font-[var(--button-font-weight)] rounded-[var(--button-radius)] hover:opacity-90 transition-all duration-200 text-[var(--font-size-sm)]"
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

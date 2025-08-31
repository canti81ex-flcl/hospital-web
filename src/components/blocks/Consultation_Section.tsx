interface ConsultationCard {
  icon: string;
  title: string;
  content: string | string[];
  iconColor: string;
}

interface ConsultationSectionProps {
  title?: string;
  cards?: ConsultationCard[];
}

export default function ConsultationSection({
  title = "📞 비용문의/전화상담",
  cards = [
    {
      icon: "📱",
      title: "진료상담",
      content: "02-6913-0000",
      iconColor: "text-[rgb(var(--primary))]"
    },
    {
      icon: "💬",
      title: "카톡상담",
      content: '"온누리스마일안과"를 검색하세요',
      iconColor: "text-[rgb(var(--primary))]"
    },
    {
      icon: "⏰",
      title: "진료시간",
      content: [
        "평일: 10:00~19:00 (18:00 접수마감)",
        "토요일: 09:30~17:00 (16:00 접수마감)",
        "주말/공휴일 휴진"
      ],
      iconColor: "text-[rgb(var(--primary))]"
    }
  ]
}: ConsultationSectionProps) {
  return (
    <section className="bg-[rgb(var(--accent))] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 items-start justify-center">
          {/* Title */}
          <h2 className="font-bold text-3xl text-[rgb(var(--text))] leading-tight">
            {title}
          </h2>
          
          {/* Consultation Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--surface))] h-[220px] relative rounded-[var(--radius-lg)] border border-[rgb(var(--border))] overflow-hidden"
              >
                <div className="flex flex-col gap-4 h-full items-center justify-center p-8">
                  {/* Icon */}
                  <div className={`text-4xl ${card.iconColor}`}>
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-lg text-[rgb(var(--text))] leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Content */}
                  {Array.isArray(card.content) ? (
                    <div className="text-xs text-[rgb(var(--muted-foreground))] leading-relaxed text-center">
                      {card.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base text-[rgb(var(--muted-foreground))] leading-tight text-center">
                      {card.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop types and default values
export type { ConsultationSectionProps, ConsultationCard };

export const defaultProps: Partial<ConsultationSectionProps> = {
  title: "📞 비용문의/전화상담",
  cards: [
    {
      icon: "📱",
      title: "진료상담",
      content: "02-6913-0000",
      iconColor: "text-[rgb(var(--primary))]"
    },
    {
      icon: "💬",
      title: "카톡상담",
      content: '"온누리스마일안과"를 검색하세요',
      iconColor: "text-[rgb(var(--primary))]"
    },
    {
      icon: "⏰",
      title: "진료시간",
      content: [
        "평일: 10:00~19:00 (18:00 접수마감)",
        "토요일: 09:30~17:00 (16:00 접수마감)",
        "주말/공휴일 휴진"
      ],
      iconColor: "text-[rgb(var(--primary))]"
    }
  ]
};

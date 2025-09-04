import React from 'react';
import { generateReviewStructuredData } from '@/lib/seo';

interface ReviewSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

interface Review {
  id: string;
  title: string;
  content: string;
  type: string;
}

const reviews: Review[] = [
  {
    id: "toric-icl",
    title: "제로토릭 ICL 후기",
    content: "시력이 많이 나빠져서 렌즈삽입술을 받았는데, 수술 후 바로 선명하게 보여서 정말 만족합니다. 정의상 원장님께서 꼼꼼하게 설명해주셔서 안심하고 받을 수 있었어요!",
    type: "고객후기"
  },
  {
    id: "smile-pro-1",
    title: "스마일프로 후기",
    content: "스마일라식 받고 1년이 지났는데 정말 만족하고 있어요. 수술도 빠르고 회복도 빨라서 다음날부터 일상생활이 가능했습니다. 추천해요!",
    type: "고객후기"
  },
  {
    id: "cataract",
    title: "노안백내장 후기",
    content: "50대에 노안과 백내장이 함께 와서 수술을 받았는데, 이제 돋보기 없이도 책을 읽을 수 있어서 너무 만족해요. 젊어진 기분입니다!",
    type: "고객후기"
  },
  {
    id: "smile-pro-2",
    title: "스마일프로 후기",
    content: "친구 추천으로 스마일라식을 받았는데 정말 후회하지 않는 선택이었어요. 수술 과정도 빠르고 아프지 않아서 생각보다 쉬웠습니다.",
    type: "고객후기"
  }
];

export default function ReviewSectionSnu({
  title = "800건이 넘는\n실제 후기를 만나보세요.",
  body,
  ctaText,
  href
}: ReviewSectionSnuProps) {
  const reviewStructuredData = generateReviewStructuredData();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewStructuredData),
        }}
      />
          <section 
      className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="Review Section SNU"
      data-anchor="reviews"
      id="reviews"
      itemScope
      itemType="https://schema.org/MedicalClinic"
    >
      {/* Header */}
      <div 
        className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 rounded-[var(--radius-lg)] shadow-lg px-8 py-8 mb-12"
        data-name="Review Header"
      >
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold relative shrink-0 text-[rgb(var(--primary-default))] text-[17px]"
          data-node-id="review-section-label"
        >
          <p className="leading-[normal] text-nowrap whitespace-pre">수술후기</p>
        </div>
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] relative shrink-0 text-[rgb(var(--text))] text-[42px] text-center"
          data-node-id="review-section-title"
        >
          <h2 className="mb-0 leading-tight">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Review Cards Container */}
      <div 
        className="bg-transparent content-stretch flex gap-6 items-start justify-center relative shrink-0 max-w-7xl w-full flex-wrap"
        data-name="Review Cards Container"
      >
        {reviews.map((review, index) => (
          <div 
            key={review.id}
            className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 w-[300px] shadow-lg hover:shadow-xl hover:shadow-[rgba(var(--primary),0.2)] transition-all duration-300 transform hover:scale-105 hover:border-[rgba(var(--primary),0.3)] border border-transparent min-w-[280px]"
            data-name={`Review Card ${index + 1}`}
          >
            {/* Review Image */}
            <div 
              className="bg-[rgb(var(--surface-variant))] h-[200px] overflow-clip relative rounded-[12px] shrink-0 w-[236px] flex items-center justify-center m-8 mb-4"
              data-name={`Review ${index + 1} Image`}
            >
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] not-italic text-[rgb(var(--text-secondary))] text-[16px] text-center"
                data-node-id={`review-${index + 1}-image-placeholder`}
              >
                <p className="leading-[normal] whitespace-pre">후기 이미지</p>
              </div>
            </div>

            {/* Review Info */}
            <div 
              className="bg-transparent box-border content-stretch flex flex-col gap-3 items-center justify-center relative shrink-0 pb-6 pt-2 px-6"
              data-name={`Review ${index + 1} Info`}
            >
              <div 
                className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold relative shrink-0 text-[rgb(var(--primary-default))] text-[14px]"
                data-node-id={`review-${index + 1}-type`}
              >
                <p className="leading-[normal] text-nowrap whitespace-pre">{review.type}</p>
              </div>
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal relative shrink-0 text-[rgb(var(--text))] text-[17px] text-center"
                data-node-id={`review-${index + 1}-title`}
              >
                <h3 className="leading-[normal] text-nowrap whitespace-pre mb-0">{review.title}</h3>
              </div>
              <div 
                className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[rgb(var(--text-secondary))] text-[14px] text-center"
                data-node-id={`review-${index + 1}-content`}
              >
                <p className="mb-0 leading-relaxed">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center max-w-4xl">
        <div className="text-[rgb(var(--text-secondary))] text-[16px] font-medium mb-4">
          SNU안과에서 수술받은 환자들의 실제 후기를 확인하세요
        </div>
        <div className="text-[rgb(var(--primary-default))] text-[18px] font-bold mb-6">
          800건 이상의 실제 수술후기
        </div>
        
        {/* Review Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[rgb(var(--surface))] p-6 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[24px] font-bold mb-2">800+</div>
            <div className="text-[rgb(var(--text-secondary))] text-[14px]">총 수술후기</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-6 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[24px] font-bold mb-2">98%</div>
            <div className="text-[rgb(var(--text-secondary))] text-[14px]">만족도</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-6 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[24px] font-bold mb-2">4.9</div>
            <div className="text-[rgb(var(--text-secondary))] text-[14px]">평균 평점</div>
          </div>
        </div>
        
        {/* Review Types */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-1">스마일프로</div>
            <div className="text-[rgb(var(--text-secondary))] text-[12px]">3세대 시력교정술</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-1">제로토릭 ICL</div>
            <div className="text-[rgb(var(--text-secondary))] text-[12px]">렌즈삽입술</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-1">노안백내장</div>
            <div className="text-[rgb(var(--text-secondary))] text-[12px]">동시 치료</div>
          </div>
          <div className="bg-[rgb(var(--surface))] p-4 rounded-[var(--radius)] shadow-sm">
            <div className="text-[rgb(var(--primary-default))] text-[16px] font-bold mb-1">맞춤형</div>
            <div className="text-[rgb(var(--text-secondary))] text-[12px]">시력교정술</div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

// Default props for the component
ReviewSectionSnu.defaultProps = {
  title: "800건이 넘는\n실제 후기를 만나보세요.",
  body: undefined,
  ctaText: undefined,
  href: undefined
};

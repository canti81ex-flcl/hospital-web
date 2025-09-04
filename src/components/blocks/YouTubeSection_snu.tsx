import React from 'react';

interface YouTubeSectionSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

export default function YouTubeSectionSnu({
  title = "SNU안과의\n전문 시술 과정을\n영상으로 만나보세요",
  body = "스마일라식부터 렌즈삽입술까지, SNU안과의 모든 시술 과정을 투명하게 공개합니다.\n\n실제 수술 영상과 환자 후기를 통해\n더욱 안심하고 수술을 받으실 수 있습니다.",
  ctaText = "YouTube 채널 방문",
  href = "https://youtube.com/@snu-eye-clinic"
}: YouTubeSectionSnuProps) {
  return (
    <section 
      className="bg-[rgb(var(--background))] box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[60px] items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative size-full min-h-screen"
      data-name="YouTube Section SNU"
      data-anchor="youtube"
      id="youtube"
    >
      {/* YouTube Player */}
      <div 
        className="bg-[rgb(var(--surface))] h-[440px] overflow-clip relative rounded-[16px] shrink-0 w-[640px] flex items-center justify-center shadow-lg"
        data-name="YouTube Player"
      >
        <div className="text-center">
          {/* Play Button */}
          <div 
            className="bg-[rgb(var(--primary))] content-stretch flex flex-col items-center justify-center overflow-clip rounded-[40px] size-20 mx-auto mb-6 hover:bg-[rgb(var(--primary-dark))] transition-colors duration-300 cursor-pointer"
            data-name="Play Button"
          >
            <div 
              className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap text-[rgb(var(--on-primary))]"
              data-node-id="play-button"
            >
              <span className="leading-[normal] whitespace-pre">▶</span>
            </div>
          </div>
          
          {/* Video Info */}
          <div 
            className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic text-[rgb(var(--text))] text-[18px]"
            data-node-id="video-info"
          >
            <p className="mb-2">SNU안과 시술 안내 영상</p>
            <p className="text-[16px] text-[rgb(var(--text-secondary))]">YouTube 동영상 플레이어</p>
          </div>
          
          {/* Video Thumbnail Placeholder */}
          <div className="mt-6 w-full h-[200px] bg-[rgb(var(--surface-variant))] rounded-[var(--radius)] flex items-center justify-center">
            <div className="text-center">
              <div className="text-[rgb(var(--text-secondary))] text-[14px] mb-2">동영상 썸네일</div>
              <div className="text-[rgb(var(--primary))] text-[16px] font-medium">스마일라식 수술 과정</div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Text Content */}
      <div 
        className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col gap-8 items-center justify-center relative shrink-0 w-[520px] rounded-[var(--radius-lg)] shadow-lg px-8 py-12"
        data-name="YouTube Text Content"
      >
        <div 
          className="font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[rgb(var(--primary))] text-[17px]"
          data-node-id="youtube-section-label"
        >
          <p className="leading-[normal] text-nowrap whitespace-pre">youtube 바로가기</p>
        </div>
        
        <div 
          className="font-['Inter:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text))] text-[42px] text-center"
          data-node-id="youtube-section-title"
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
        
        <div 
          className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[rgb(var(--text-secondary))] text-[16px] text-center"
          data-node-id="youtube-section-description"
        >
          {body.split('\n').map((line, index) => (
            <p key={index} className="mb-3 leading-relaxed">
              {line || '\u00A0'}
            </p>
          ))}
        </div>
        
        {/* YouTube Button */}
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff1a4d] hover:bg-[#e6003d] box-border content-stretch flex gap-2 h-[50px] items-center justify-center overflow-clip px-6 py-3 relative rounded-[25px] shrink-0 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff1a4d] focus:ring-offset-2"
          data-name="YouTube Button"
          aria-label="SNU안과 YouTube 채널 방문"
        >
          <div 
            className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white"
            data-node-id="youtube-button-text"
          >
            <span className="leading-[normal] whitespace-pre">{ctaText}</span>
          </div>
        </a>
        
        {/* Additional YouTube Info */}
        <div className="mt-6 text-center">
          <div className="text-[rgb(var(--text-secondary))] text-[14px] font-medium mb-3">
            SNU안과 YouTube 채널에서 확인하세요
          </div>
          <div className="grid grid-cols-2 gap-4 text-[12px]">
            <div className="bg-[rgb(var(--surface-variant))] p-3 rounded-[var(--radius)]">
              <div className="text-[rgb(var(--primary))] font-bold mb-1">수술 과정</div>
              <div className="text-[rgb(var(--text-secondary))]">투명한 시술 공개</div>
            </div>
            <div className="bg-[rgb(var(--surface-variant))] p-3 rounded-[var(--radius)]">
              <div className="text-[rgb(var(--primary))] font-bold mb-1">환자 후기</div>
              <div className="text-[rgb(var(--text-secondary))]">실제 경험담</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default props for the component
YouTubeSectionSnu.defaultProps = {
  title: "SNU안과의\n전문 시술 과정을\n영상으로 만나보세요",
  body: "스마일라식부터 렌즈삽입술까지, SNU안과의 모든 시술 과정을 투명하게 공개합니다.\n\n실제 수술 영상과 환자 후기를 통해\n더욱 안심하고 수술을 받으실 수 있습니다.",
  ctaText: "YouTube 채널 방문",
  href: "https://youtube.com/@snu-eye-clinic"
};

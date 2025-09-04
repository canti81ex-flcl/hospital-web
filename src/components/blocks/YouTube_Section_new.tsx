"use client";

import React, { useState } from "react";

interface YouTubeSectionNewProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  ctaText?: string;
  youtubeUrl?: string;
  channelId?: string;
  showPreview?: boolean;
}

export default function YouTube_Section_new({
  title = "YOUTUBE",
  subtitle = "온누리에서 전하는 눈 건강정보",
  description = [
    "온누리에서 전하는 눈 건강정보",
    "유튜브 채널에서 바로 만나보세요"
  ],
  ctaText = "유튜브채널 바로가기",
  youtubeUrl = "https://youtube.com/@onnurieyeclinic",
  channelId,
  showPreview = false
}: YouTubeSectionNewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // 유튜브 썸네일 URL 생성 (채널 ID가 있는 경우)
  const getThumbnailUrl = () => {
    if (channelId) {
      return `https://yt3.ggpht.com/ytc/channel/${channelId}`;
    }
    return null;
  };

  // 샘플 비디오 데이터 (실제로는 YouTube API에서 가져와야 함)
  const sampleVideos = [
    {
      id: "1",
      title: "스마일라식 수술 과정",
      thumbnail: "/placeholder-video-1.jpg",
      duration: "05:23",
      views: "12.5K"
    },
    {
      id: "2", 
      title: "렌즈삽입술 완전정복",
      thumbnail: "/placeholder-video-2.jpg",
      duration: "08:15",
      views: "8.2K"
    },
    {
      id: "3",
      title: "눈 건강 관리법",
      thumbnail: "/placeholder-video-3.jpg", 
      duration: "06:45",
      views: "15.7K"
    }
  ];

  return (
    <section 
    
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-20)]"
      style={{
        backgroundColor: 'rgb(var(--bg-subtle))',
        backgroundImage: `
          linear-gradient(135deg, rgba(var(--color-gray-200), 0.3) 0%, rgba(var(--color-gray-100), 0.5) 100%),
          radial-gradient(circle at 30% 40%, rgba(var(--primary-default), 0.02) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(var(--success-default), 0.01) 0%, transparent 50%)
        `
      }}
      data-name="YouTube Section"
    >
      {/* 배경 패턴 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(var(--border-subtle), 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(var(--border-subtle), 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(var(--border-subtle), 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(var(--border-subtle), 0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 메인 제목 */}
        <div className="mb-[var(--spacing-16)]">
          <h2 
            className="font-[var(--font-weight-bold)] leading-tight tracking-wide mb-[var(--spacing-6)]"
            style={{
              fontSize: 'var(--font-size-4xl)', // 42px 대응
              color: 'rgb(var(--color-gray-800))', // #333333 대응
              fontFamily: 'var(--font-family-heading)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {title}
          </h2>

          {/* 서브 텍스트 */}
          <div 
            className="font-[var(--font-weight-regular)] leading-relaxed space-y-1"
            style={{
              fontSize: 'var(--font-size-lg)', // 18px 대응
              color: 'rgb(var(--color-gray-700))',
              fontFamily: 'var(--font-family-body)'
            }}
          >
            {description.map((line, index) => (
              <p key={index} className="m-0">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* 유튜브 프리뷰 섹션 (선택적) */}
        {showPreview && (
          <div className="mb-[var(--spacing-12)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-6)] mb-[var(--spacing-8)]">
              {sampleVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative rounded-[var(--card-radius)] overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{
                    backgroundColor: 'rgb(var(--bg-elevated))',
                    boxShadow: 'var(--card-shadow)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--elevation-modal)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}
                >
                  {/* 비디오 썸네일 */}
                  <div className="relative aspect-video">
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgb(var(--color-gray-300))',
                        color: 'rgb(var(--color-gray-600))'
                      }}
                    >
                      {/* YouTube 플레이 아이콘 */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(var(--danger-default), 0.9)',
                          color: 'rgb(var(--color-white))'
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* 재생시간 */}
                    <div 
                      className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor: 'rgba(var(--color-black), 0.8)',
                        color: 'rgb(var(--color-white))'
                      }}
                    >
                      {video.duration}
                    </div>
                  </div>

                  {/* 비디오 정보 */}
                  <div className="p-[var(--spacing-4)]">
                    <h3 
                      className="font-[var(--font-weight-medium)] leading-tight mb-2"
                      style={{
                        fontSize: 'var(--font-size-base)',
                        color: 'rgb(var(--fg-primary))',
                        fontFamily: 'var(--font-family-body)'
                      }}
                    >
                      {video.title}
                    </h3>
                    <p 
                      className="text-xs"
                      style={{
                        color: 'rgb(var(--fg-muted))'
                      }}
                    >
                      조회수 {video.views}회
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* YouTube 채널 CTA 버튼 */}
        <div className="flex justify-center">
          <a
            href={youtubeUrl}
            className="group relative inline-flex items-center justify-center px-[var(--spacing-10)] py-[var(--spacing-5)] rounded-[var(--button-radius)] font-[var(--font-weight-medium)] text-[var(--font-size-base)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4"
            style={{
              backgroundColor: 'rgb(var(--color-gray-700))', // #4d4d4d 대응
              color: 'rgb(var(--color-white))',
              boxShadow: 'var(--elevation-button)',
              minWidth: '280px',
              height: '60px'
            }}
            onMouseEnter={(e) => {
              setIsHovered(true);
              e.currentTarget.style.backgroundColor = 'rgb(var(--danger-default))'; // YouTube 빨간색
              e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--elevation-modal)';
            }}
            onMouseLeave={(e) => {
              setIsHovered(false);
              e.currentTarget.style.backgroundColor = 'rgb(var(--color-gray-700))';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'var(--elevation-button)';
            }}
            onFocus={(e) => {
              
            }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="유튜브 채널 새 탭에서 열기"
          >
            {/* YouTube 아이콘 */}
            <svg 
              className="w-6 h-6 mr-3 transition-all duration-300"
              style={{
                color: isHovered ? 'rgb(var(--color-white))' : 'rgba(var(--color-white), 0.9)'
              }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            
            <span className="flex-1 text-center">
              {ctaText}
            </span>

            {/* 화살표 아이콘 */}
            <svg 
              className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* 추가 정보 텍스트 */}
        <div className="mt-[var(--spacing-8)]">
          <p 
            className="text-sm"
            style={{
              color: 'rgb(var(--fg-muted))',
              fontFamily: 'var(--font-family-body)'
            }}
          >
            정기적으로 업데이트되는 눈 건강 정보와 수술 과정을 영상으로 만나보세요
          </p>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
        
        @media (max-width: 640px) {
          a[aria-label*="유튜브"] {
            min-width: 240px !important;
            padding: var(--spacing-4) var(--spacing-6) !important;
          }
        }
      `}</style>
    </section>
  );
}


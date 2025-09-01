"use client";

import React, { useState } from "react";

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  image?: string;
  experience: string;
  education?: string[];
  achievements?: string[];
}

interface DoctorSectionNewProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  ctaText?: string;
  href?: string;
  doctors?: Doctor[];
  showDoctorCards?: boolean;
}

export default function Doctor_Section_new({
  title = "뛰어난 기술력,",
  subtitle = "온누리스마일안과 의료진",
  description = [
    "학계에서 각막이식 전문분야의 권위자로 인정받은 만큼",
    "끊임없이 새로운 기술개발을 연구하고,",
    "풍부한 임상경험으로 가장 이상적인 수술결과를 약속드립니다."
  ],
  ctaText,
  href,
  doctors = [
    {
      id: "1",
      name: "김원장",
      title: "대표원장",
      specialization: ["스마일라식", "렌즈삽입술", "각막이식"],
      experience: "15년",
      education: ["서울대학교 의과대학 졸업", "서울대병원 안과 전공의", "각막이식 전문의"],
      achievements: ["대한안과학회 우수논문상", "각막이식 500례 달성", "국제학회 발표 20회"]
    },
    {
      id: "2", 
      name: "이원장",
      title: "진료원장",
      specialization: ["백내장수술", "노안교정", "망막질환"],
      experience: "12년",
      education: ["연세대학교 의과대학 졸업", "세브란스병원 안과 전공의", "망막 전문의"],
      achievements: ["백내장수술 1000례 달성", "망막질환 연구논문 10편", "의료진상 수상"]
    },
    {
      id: "3",
      name: "박원장", 
      title: "수술원장",
      specialization: ["소아안과", "사시교정", "안성형"],
      experience: "10년",
      education: ["고려대학교 의과대학 졸업", "고려대병원 안과 전공의", "소아안과 전문의"],
      achievements: ["소아사시 수술 300례", "안성형 전문과정 이수", "소아안과학회 정회원"]
    }
  ],
  showDoctorCards = false
}: DoctorSectionNewProps) {
  const [hoveredDoctor, setHoveredDoctor] = useState<string | null>(null);

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-20)]"
      style={{
        backgroundColor: 'rgb(var(--bg-subtle))',
        backgroundImage: `
          linear-gradient(135deg, rgba(var(--color-gray-200), 0.4) 0%, rgba(var(--color-gray-100), 0.6) 100%),
          radial-gradient(circle at 25% 25%, rgba(var(--primary-default), 0.02) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(var(--success-default), 0.01) 0%, transparent 50%)
        `
      }}
      data-name="Doctor Section"
    >
      {/* 배경 패턴 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(var(--border-subtle), 0.05) 25%, transparent 25%),
            linear-gradient(-30deg, rgba(var(--border-subtle), 0.05) 25%, transparent 25%),
            linear-gradient(30deg, transparent 75%, rgba(var(--border-subtle), 0.05) 75%),
            linear-gradient(-30deg, transparent 75%, rgba(var(--border-subtle), 0.05) 75%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 메인 제목 섹션 */}
        <div className="mb-[var(--spacing-16)]">
          {/* 제목 */}
          <h2 
            className="font-[var(--font-weight-semibold)] leading-tight mb-[var(--spacing-6)]"
            style={{
              fontSize: 'var(--font-size-3xl)', // 32px 대응
              color: 'rgb(var(--color-gray-800))', // #333333 대응
              fontFamily: 'var(--font-family-heading)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="block">{title}</span>
            <span className="block">{subtitle}</span>
          </h2>

          {/* 설명 텍스트 */}
          <div 
            className="font-[var(--font-weight-medium)] leading-relaxed space-y-1"
            style={{
              fontSize: 'var(--font-size-base)', // 16px 대응
              color: 'rgb(var(--color-gray-600))', // #999999 대응
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

        {/* 의료진 카드 섹션 (선택적) */}
        {showDoctorCards && (
          <div className="mb-[var(--spacing-16)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8)]">
              {doctors.map((doctor, index) => (
                <div
                  key={doctor.id}
                  className="group relative rounded-[var(--card-radius)] p-[var(--spacing-6)] transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  style={{
                    backgroundColor: 'rgb(var(--bg-elevated))',
                    border: '1px solid rgba(var(--border-subtle), 0.5)',
                    boxShadow: 'var(--card-shadow)'
                  }}
                  onMouseEnter={(e) => {
                    setHoveredDoctor(doctor.id);
                    e.currentTarget.style.boxShadow = 'var(--elevation-modal)';
                    e.currentTarget.style.borderColor = 'rgba(var(--primary-default), 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    setHoveredDoctor(null);
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                    e.currentTarget.style.borderColor = 'rgba(var(--border-subtle), 0.5)';
                  }}
                >
                  {/* 의사 프로필 이미지 */}
                  <div className="relative mb-[var(--spacing-4)]">
                    <div 
                      className="w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: `rgba(var(--primary-default), ${hoveredDoctor === doctor.id ? '0.15' : '0.1'})`,
                        border: `2px solid rgba(var(--primary-default), ${hoveredDoctor === doctor.id ? '0.3' : '0.2'})`
                      }}
                    >
                      {doctor.image ? (
                        <img 
                          src={doctor.image} 
                          alt={`${doctor.name} ${doctor.title}`}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <svg 
                          className="w-12 h-12"
                          style={{ color: 'rgb(var(--primary-default))' }}
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* 의사 정보 */}
                  <div className="text-center">
                    {/* 이름 & 직책 */}
                    <h3 
                      className="font-[var(--font-weight-bold)] mb-2"
                      style={{
                        fontSize: 'var(--font-size-xl)',
                        color: 'rgb(var(--fg-primary))',
                        fontFamily: 'var(--font-family-heading)'
                      }}
                    >
                      {doctor.name}
                    </h3>
                    <p 
                      className="font-[var(--font-weight-medium)] mb-3"
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'rgb(var(--primary-default))'
                      }}
                    >
                      {doctor.title}
                    </p>

                    {/* 전문분야 */}
                    <div className="mb-4">
                      <p 
                        className="text-xs mb-2"
                        style={{ color: 'rgb(var(--fg-muted))' }}
                      >
                        전문분야
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {doctor.specialization.map((spec, specIndex) => (
                          <span
                            key={specIndex}
                            className="px-2 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: 'rgba(var(--success-default), 0.1)',
                              color: 'rgb(var(--success-default))'
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 경력 */}
                    <div className="text-center">
                      <p 
                        className="text-sm font-medium"
                        style={{
                          color: 'rgb(var(--fg-primary))'
                        }}
                      >
                        경력 {doctor.experience}
                      </p>
                    </div>

                    {/* 상세 정보 (호버 시 표시) */}
                    <div 
                      className={`mt-4 transition-all duration-300 overflow-hidden ${
                        hoveredDoctor === doctor.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {doctor.achievements && (
                        <div className="text-xs space-y-1">
                          <p style={{ color: 'rgb(var(--fg-muted))' }}>주요 성과</p>
                          {doctor.achievements.slice(0, 2).map((achievement, achIndex) => (
                            <p 
                              key={achIndex}
                              style={{ color: 'rgb(var(--fg-secondary))' }}
                            >
                              • {achievement}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 카드 번호 */}
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold opacity-30"
                    style={{
                      backgroundColor: 'rgba(var(--primary-default), 0.1)',
                      color: 'rgb(var(--primary-default))'
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA 버튼 (선택적) */}
        {ctaText && href && (
          <div className="text-center">
            <a
              href={href}
              className="inline-flex items-center justify-center px-[var(--button-paddingX)] py-[var(--spacing-4)] rounded-[var(--button-radius)] font-[var(--button-font-weight)] text-[var(--button-font-size)] transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgb(var(--primary-default))',
                color: 'rgb(var(--primary-fg))',
                boxShadow: 'var(--elevation-button)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--primary-hover))';
                e.currentTarget.style.borderColor = 'rgb(var(--primary-default))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--primary-default))';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              rel={href.startsWith('http') ? "noopener noreferrer" : "noopener"}
              target={href.startsWith('http') ? "_blank" : undefined}
              aria-label={`${ctaText} 페이지로 이동`}
            >
              {ctaText}
              <svg 
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}

        {/* 추가 신뢰성 정보 */}
        <div className="mt-[var(--spacing-12)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-6)]">
            {[
              { icon: "🏆", title: "풍부한 경험", desc: "누적 수술 5,000례" },
              { icon: "🔬", title: "최신 기술", desc: "첨단 장비 도입" },
              { icon: "👥", title: "전문 의료진", desc: "각 분야 전문의" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-[var(--spacing-4)] rounded-[var(--card-radius)] transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(var(--bg-elevated), 0.6)',
                  border: '1px solid rgba(var(--border-subtle), 0.3)'
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 
                  className="font-[var(--font-weight-semibold)] mb-1"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'rgb(var(--fg-primary))'
                  }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: 'rgb(var(--fg-muted))' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .lg\\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}


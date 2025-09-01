"use client";

import React, { useState } from "react";

interface TreatmentOption {
  id: string;
  name: string;
  checked: boolean;
}

interface ContactInfo {
  type: "phone" | "kakao" | "hours" | "address";
  title: string;
  content: string[];
  highlight?: string;
}

interface ContactSectionNewProps {
  title?: string;
  formTitle?: string;
  submitText?: string;
  phone?: string;
  treatments?: TreatmentOption[];
  contactInfo?: ContactInfo[];
  onSubmit?: (formData: any) => void;
}

export default function Contact_Section_new({
  title,
  formTitle = "비용문의/전화상담",
  submitText = "상담신청하기",
  phone = "02-6913-0000",
  treatments = [
    { id: "smile", name: "스마일", checked: false },
    { id: "icl", name: "렌즈삽입술", checked: false },
    { id: "cataract", name: "노안/백내장", checked: false },
    { id: "lasik", name: "라식/라섹", checked: false },
    { id: "dry-eye", name: "안구건조증", checked: false },
    { id: "retina", name: "망막질환", checked: false }
  ],
  contactInfo = [
    {
      type: "phone",
      title: "진료상담",
      content: ["02-6913-0000"],
      highlight: "02-6913-0000"
    },
    {
      type: "kakao", 
      title: "카톡상담",
      content: [
        "카카오톡에서",
        '"온누리스마일안과"를 검색하세요'
      ]
    },
    {
      type: "hours",
      title: "진료시간", 
      content: [
        "월 - 금  10:00~19:00 (*18:00 접수마감)",
        "토요일  09:30~17:00 (*16:00 접수마감)",
        "주말/공휴일 휴진"
      ]
    },
    {
      type: "address",
      title: "찾아오시는 길",
      content: [
        "서울 서초구 서초대로 77길 3, 아라타워 B2",
        "강남역 9번 출구 좌측 연결통로와 바로 연결됩니다."
      ]
    }
  ],
  onSubmit
}: ContactSectionNewProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatments: treatments,
    message: "",
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTreatmentChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      treatments: prev.treatments.map(treatment =>
        treatment.id === id ? { ...treatment, checked: !treatment.checked } : treatment
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("개인정보처리방침에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
      // 폼 초기화
      setFormData({
        name: "",
        phone: "",
        treatments: treatments.map(t => ({ ...t, checked: false })),
        message: "",
        privacy: false
      });
    } catch (error) {
      alert("상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case "phone":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        );
      case "kakao":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 .471.471.44.44 0 0 0 .098-.01.467.467 0 0 0 .15-.06l.338-.327.314 1.327a.472.472 0 0 0 .908-.214l-.221-.966zm-2.62 1.714a.471.471 0 0 0 .471-.471V9.282a.472.472 0 0 0-.944 0v3.021a.471.471 0 0 0 .472.471zm-1.441-.471V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 .471.471h1.616a.472.472 0 0 0 0-.943h-1.143zm-2.993-.471h.943a.472.472 0 0 0 0-.943h-.472v-.943h.472a.472.472 0 0 0 0-.943h-.943a.471.471 0 0 0-.471.471v2.557a.471.471 0 0 0 .471.471z"/>
          </svg>
        );
      case "hours":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
          </svg>
        );
      case "address":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-20)]"
      style={{
        backgroundColor: 'rgb(var(--color-gray-800))', // #2C2E30 대응
        backgroundImage: `
          linear-gradient(135deg, rgba(var(--color-gray-800), 1) 0%, rgba(var(--color-gray-900), 0.8) 100%),
          radial-gradient(circle at 25% 25%, rgba(var(--primary-default), 0.05) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(var(--warning-default), 0.03) 0%, transparent 50%)
        `
      }}
      data-name="Contact Section"
    >
      {/* 배경 패턴 */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(var(--color-white), 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(var(--color-white), 0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(var(--color-white), 0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(var(--color-white), 0.03) 75%)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 50px, 50px -50px, -50px 0px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-16)]">
          
          {/* 좌측: 상담 신청 폼 */}
          <div 
            className="rounded-[var(--card-radius)] p-[var(--spacing-8)] h-fit"
            style={{
              backgroundColor: 'rgb(var(--bg-elevated))',
              border: '1px solid rgba(var(--border-subtle), 0.3)',
              boxShadow: 'var(--elevation-card)'
            }}
          >
            {/* 폼 제목 */}
            <h2 
              className="font-[var(--font-weight-medium)] mb-[var(--spacing-8)]"
              style={{
                fontSize: 'var(--font-size-2xl)', // 26px 대응
                color: 'rgb(var(--fg-primary))',
                fontFamily: 'var(--font-family-heading)'
              }}
            >
              {formTitle}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-[var(--spacing-6)]">
              {/* 이름 입력 */}
              <div>
                <label 
                  className="block mb-2 font-[var(--font-weight-medium)]"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'rgb(var(--fg-primary))'
                  }}
                >
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-[var(--input-paddingX)] py-[var(--spacing-3)] rounded-[var(--input-radius)] transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(var(--input-bg))',
                    border: '1px solid rgb(var(--input-border))',
                    color: 'rgb(var(--input-fg))',
                    focusRingColor: 'rgba(var(--primary-default), 0.3)'
                  }}
                  placeholder="성함을 입력해주세요"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              {/* 연락처 입력 */}
              <div>
                <label 
                  className="block mb-2 font-[var(--font-weight-medium)]"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'rgb(var(--fg-primary))'
                  }}
                >
                  연락처 *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-[var(--input-paddingX)] py-[var(--spacing-3)] rounded-[var(--input-radius)] transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(var(--input-bg))',
                    border: '1px solid rgb(var(--input-border))',
                    color: 'rgb(var(--input-fg))',
                    focusRingColor: 'rgba(var(--primary-default), 0.3)'
                  }}
                  placeholder="연락처를 입력해주세요"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              {/* 치료 옵션 */}
              <div>
                <label 
                  className="block mb-4 font-[var(--font-weight-medium)]"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'rgb(var(--fg-primary))'
                  }}
                >
                  관심 치료 (복수 선택 가능)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {formData.treatments.map((treatment) => (
                    <label
                      key={treatment.id}
                      className="flex items-center space-x-2 cursor-pointer p-3 rounded-[var(--radius-sm)] transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: treatment.checked 
                          ? 'rgba(var(--primary-default), 0.1)' 
                          : 'rgba(var(--bg-subtle), 0.5)',
                        border: `1px solid ${treatment.checked 
                          ? 'rgb(var(--primary-default))' 
                          : 'rgba(var(--border-subtle), 0.5)'}`
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={treatment.checked}
                        onChange={() => handleTreatmentChange(treatment.id)}
                        className="hidden"
                      />
                      <div 
                        className="w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200"
                        style={{
                          borderColor: treatment.checked 
                            ? 'rgb(var(--primary-default))' 
                            : 'rgb(var(--border-subtle))',
                          backgroundColor: treatment.checked 
                            ? 'rgb(var(--primary-default))' 
                            : 'transparent'
                        }}
                      >
                        {treatment.checked && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span 
                        className="text-sm font-medium"
                        style={{ 
                          color: treatment.checked 
                            ? 'rgb(var(--primary-default))' 
                            : 'rgb(var(--fg-primary))' 
                        }}
                      >
                        {treatment.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 메시지 입력 */}
              <div>
                <label 
                  className="block mb-2 font-[var(--font-weight-medium)]"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'rgb(var(--fg-primary))'
                  }}
                >
                  상담 내용
                </label>
                <textarea
                  rows={4}
                  className="w-full px-[var(--input-paddingX)] py-[var(--spacing-3)] rounded-[var(--input-radius)] transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'rgb(var(--input-bg))',
                    border: '1px solid rgb(var(--input-border))',
                    color: 'rgb(var(--input-fg))',
                    focusRingColor: 'rgba(var(--primary-default), 0.3)'
                  }}
                  placeholder="궁금한 내용을 자유롭게 작성해주세요"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              {/* 개인정보동의 */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.privacy}
                  onChange={(e) => setFormData(prev => ({ ...prev, privacy: e.target.checked }))}
                  className="mt-1"
                />
                <label 
                  htmlFor="privacy" 
                  className="text-sm cursor-pointer"
                  style={{ color: 'rgb(var(--fg-muted))' }}
                >
                  개인정보처리방침에 동의합니다. (필수)
                </label>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-[var(--spacing-4)] rounded-[var(--button-radius)] font-[var(--font-weight-semibold)] text-[var(--font-size-base)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'rgb(var(--warning-default))', // #E5994D 대응
                  color: 'rgb(var(--color-white))',
                  boxShadow: 'var(--elevation-button)',
                  minHeight: '60px'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'rgb(var(--warning-hover))';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'rgb(var(--warning-default))';
                  }
                }}
              >
                {isSubmitting ? "전송 중..." : submitText}
              </button>
            </form>
          </div>

          {/* 우측: 연락처 정보 */}
          <div className="space-y-[var(--spacing-8)]">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="rounded-[var(--card-radius)] p-[var(--spacing-6)] transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgb(var(--bg-elevated))',
                  border: '1px solid rgba(var(--border-subtle), 0.3)',
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                {/* 섹션 제목 */}
                <div className="flex items-center space-x-3 mb-[var(--spacing-4)]">
                  <div 
                    className="p-2 rounded-full"
                    style={{
                      backgroundColor: 'rgba(var(--primary-default), 0.1)',
                      color: 'rgb(var(--primary-default))'
                    }}
                  >
                    {getContactIcon(info.type)}
                  </div>
                  <h3 
                    className="font-[var(--font-weight-medium)]"
                    style={{
                      fontSize: 'var(--font-size-lg)', // 18px 대응
                      color: 'rgb(var(--fg-primary))',
                      fontFamily: 'var(--font-family-heading)'
                    }}
                  >
                    {info.title}
                  </h3>
                </div>

                {/* 섹션 내용 */}
                <div className="space-y-1">
                  {info.content.map((line, lineIndex) => (
                    <p 
                      key={lineIndex}
                      className={`m-0 ${line === info.highlight ? 'font-[var(--font-weight-bold)]' : 'font-[var(--font-weight-regular)]'}`}
                      style={{
                        fontSize: line === info.highlight ? 'var(--font-size-2xl)' : 'var(--font-size-sm)', // 26px or 14px
                        color: line === info.highlight 
                          ? 'rgb(var(--primary-default))' 
                          : 'rgb(var(--fg-muted))',
                        fontFamily: 'var(--font-family-body)',
                        lineHeight: 'var(--line-height-relaxed)'
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* 전화번호인 경우 클릭 가능하게 */}
                {info.type === "phone" && (
                  <div className="mt-4">
                    <a
                      href={`tel:${phone}`}
                      className="inline-flex items-center px-4 py-2 rounded-[var(--button-radius)] text-sm font-medium transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(var(--success-default), 0.1)',
                        color: 'rgb(var(--success-default))',
                        border: '1px solid rgba(var(--success-default), 0.3)'
                      }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      바로 전화하기
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .lg\\:grid-cols-2 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}


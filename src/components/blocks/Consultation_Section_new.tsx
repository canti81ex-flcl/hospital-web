"use client";

import React, { useState } from "react";

interface ConsultationOption {
  id: string;
  name: string;
  checked: boolean;
}

interface ConsultationSectionNewProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  consultationOptions?: ConsultationOption[];
  onSubmit?: (formData: any) => void;
}

export default function Consultation_Section_new({
  title = "상담 및 예약 안내",
  subtitle = "전문의와의 1:1 맞춤 상담을 통해 최적의 치료 방법을 찾아보세요",
  phoneNumber = "02-6913-0000",
  consultationOptions = [
    { id: "lasik", name: "라식/라섹", checked: false },
    { id: "smile", name: "스마일라식", checked: false },
    { id: "icl", name: "렌즈삽입술", checked: false },
    { id: "cataract", name: "노안/백내장", checked: false },
    { id: "retina", name: "망막질환", checked: false },
    { id: "glaucoma", name: "녹내장", checked: false }
  ],
  onSubmit
}: ConsultationSectionNewProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consultationType: "",
    message: ""
  });
  
  const [treatments, setTreatments] = useState(consultationOptions);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTreatmentChange = (id: string) => {
    setTreatments(prev => 
      prev.map(treatment => 
        treatment.id === id 
          ? { ...treatment, checked: !treatment.checked }
          : { ...treatment, checked: false } // 단일 선택
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedTreatment = treatments.find(t => t.checked);
    const submitData = {
      ...formData,
      selectedTreatment: selectedTreatment?.name || "",
      timestamp: new Date().toISOString()
    };

    try {
      if (onSubmit) {
        await onSubmit(submitData);
      }
      // 성공 시 폼 리셋
      setFormData({ name: "", phone: "", consultationType: "", message: "" });
      setTreatments(prev => prev.map(t => ({ ...t, checked: false })));
      alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    } catch (error) {
      alert("상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-[var(--spacing-8)] py-[var(--spacing-20)] overflow-hidden"
      style={{
        backgroundColor: 'rgb(var(--bg-base))',
        backgroundImage: `
          linear-gradient(135deg, 
            rgba(var(--primary-default), 0.05) 0%, 
            rgba(var(--secondary-default), 0.02) 100%),
          radial-gradient(circle at 20% 50%, 
            rgba(var(--primary-default), 0.08) 0%, 
            transparent 50%),
          radial-gradient(circle at 80% 80%, 
            rgba(var(--warning-default), 0.05) 0%, 
            transparent 50%)
        `
      }}
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10 animate-pulse"
          style={{
            background: `linear-gradient(45deg, 
              rgb(var(--primary-default)), 
              rgb(var(--secondary-default)))`
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-10 animate-pulse delay-1000"
          style={{
            background: `linear-gradient(45deg, 
              rgb(var(--warning-default)), 
              rgb(var(--primary-default)))`
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'rgb(var(--fg-primary))' }}
          >
            {title}
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgb(var(--fg-muted))' }}
          >
            {subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* 좌측: 상담 폼 */}
          <div 
            className="p-8 rounded-2xl shadow-lg backdrop-blur-sm border"
            style={{
              backgroundColor: 'rgba(var(--bg-elevated), 0.8)',
              borderColor: 'rgb(var(--border-subtle))',
              boxShadow: 'var(--elevation-card)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ color: 'rgb(var(--fg-primary))' }}
            >
              온라인 상담 신청
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 이름 입력 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'rgb(var(--fg-secondary))' }}
                >
                  이름 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(var(--bg-base))',
                    borderColor: 'rgb(var(--border-default))',
                    color: 'rgb(var(--fg-primary))',
                    '--tw-ring-color': 'rgb(var(--primary-default))'
                  } as React.CSSProperties}
                  placeholder="성함을 입력해주세요"
                />
              </div>

              {/* 연락처 입력 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'rgb(var(--fg-secondary))' }}
                >
                  연락처 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(var(--bg-base))',
                    borderColor: 'rgb(var(--border-default))',
                    color: 'rgb(var(--fg-primary))',
                    '--tw-ring-color': 'rgb(var(--primary-default))'
                  } as React.CSSProperties}
                  placeholder="연락 가능한 번호를 입력해주세요"
                />
              </div>

              {/* 상담 유형 선택 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'rgb(var(--fg-secondary))' }}
                >
                  상담 유형 *
                </label>
                <select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgb(var(--bg-base))',
                    borderColor: 'rgb(var(--border-default))',
                    color: 'rgb(var(--fg-primary))',
                    '--tw-ring-color': 'rgb(var(--primary-default))'
                  } as React.CSSProperties}
                >
                  <option value="">상담 유형을 선택해주세요</option>
                  <option value="phone">전화 상담</option>
                  <option value="visit">방문 상담</option>
                  <option value="online">온라인 상담</option>
                </select>
              </div>

              {/* 관심 치료 분야 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-3"
                  style={{ color: 'rgb(var(--fg-secondary))' }}
                >
                  관심 치료 분야
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {treatments.map((treatment) => (
                    <label
                      key={treatment.id}
                      className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border transition-all duration-200 hover:shadow-md"
                      style={{
                        backgroundColor: treatment.checked 
                          ? 'rgba(var(--primary-default), 0.1)' 
                          : 'rgb(var(--bg-base))',
                        borderColor: treatment.checked 
                          ? 'rgb(var(--primary-default))' 
                          : 'rgb(var(--border-subtle))'
                      }}
                    >
                      <input
                        type="radio"
                        name="treatment"
                        checked={treatment.checked}
                        onChange={() => handleTreatmentChange(treatment.id)}
                        className="sr-only"
                      />
                      <div 
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: treatment.checked 
                            ? 'rgb(var(--primary-default))' 
                            : 'rgb(var(--border-default))',
                          backgroundColor: treatment.checked 
                            ? 'rgb(var(--primary-default))' 
                            : 'transparent'
                        }}
                      >
                        {treatment.checked && (
                          <div className="w-2 h-2 rounded-full bg-white" />
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

              {/* 추가 메시지 */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'rgb(var(--fg-secondary))' }}
                >
                  추가 문의사항
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'rgb(var(--bg-base))',
                    borderColor: 'rgb(var(--border-default))',
                    color: 'rgb(var(--fg-primary))',
                    '--tw-ring-color': 'rgb(var(--primary-default))'
                  } as React.CSSProperties}
                  placeholder="궁금한 점이나 상세한 상담 내용을 입력해주세요"
                />
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  backgroundColor: 'rgb(var(--primary-default))',
                  color: 'rgb(var(--primary-foreground))',
                  boxShadow: isSubmitting ? 'none' : 'var(--elevation-button)'
                }}
              >
                {isSubmitting ? "상담 신청 중..." : "상담 신청하기"}
              </button>
            </form>
          </div>

          {/* 우측: 연락처 정보 & 안내 */}
          <div className="space-y-8">
            {/* 전화 상담 안내 */}
            <div 
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: 'rgb(var(--bg-elevated))',
                borderColor: 'rgb(var(--border-subtle))',
                boxShadow: 'var(--elevation-card)'
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(var(--success-default), 0.1)' }}
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: 'rgb(var(--success-default))' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: 'rgb(var(--fg-primary))' }}
                  >
                    전화 상담
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'rgb(var(--fg-muted))' }}
                  >
                    즉시 전문의와 상담하세요
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p 
                    className="text-3xl font-bold"
                    style={{ color: 'rgb(var(--primary-default))' }}
                  >
                    {phoneNumber}
                  </p>
                  <p 
                    className="text-sm mt-2"
                    style={{ color: 'rgb(var(--fg-muted))' }}
                  >
                    평일 09:00 - 18:00
                  </p>
                </div>
                
                <button
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  style={{
                    backgroundColor: 'rgba(var(--success-default), 0.1)',
                    color: 'rgb(var(--success-default))',
                    border: '1px solid rgb(var(--success-default))'
                  }}
                  onClick={() => window.open(`tel:${phoneNumber}`)}
                >
                  지금 전화하기
                </button>
              </div>
            </div>

            {/* 진료 시간 안내 */}
            <div 
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: 'rgb(var(--bg-elevated))',
                borderColor: 'rgb(var(--border-subtle))',
                boxShadow: 'var(--elevation-card)'
              }}
            >
              <h3 
                className="text-xl font-bold mb-6"
                style={{ color: 'rgb(var(--fg-primary))' }}
              >
                진료시간 안내
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-opacity-10" style={{ borderColor: 'rgb(var(--border-subtle))' }}>
                  <span style={{ color: 'rgb(var(--fg-secondary))' }}>평일</span>
                  <span style={{ color: 'rgb(var(--fg-primary))' }} className="font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-opacity-10" style={{ borderColor: 'rgb(var(--border-subtle))' }}>
                  <span style={{ color: 'rgb(var(--fg-secondary))' }}>토요일</span>
                  <span style={{ color: 'rgb(var(--fg-primary))' }} className="font-semibold">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span style={{ color: 'rgb(var(--fg-secondary))' }}>일요일/공휴일</span>
                  <span style={{ color: 'rgb(var(--danger-default))' }} className="font-semibold">휴진</span>
                </div>
              </div>
              
              <div 
                className="mt-6 p-4 rounded-lg"
                style={{ backgroundColor: 'rgba(var(--warning-default), 0.1)' }}
              >
                <p 
                  className="text-sm"
                  style={{ color: 'rgb(var(--warning-default))' }}
                >
                  <strong>점심시간:</strong> 12:30 - 13:30 (진료 중단)
                </p>
              </div>
            </div>

            {/* 찾아오시는 길 */}
            <div 
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: 'rgb(var(--bg-elevated))',
                borderColor: 'rgb(var(--border-subtle))',
                boxShadow: 'var(--elevation-card)'
              }}
            >
              <h3 
                className="text-xl font-bold mb-6"
                style={{ color: 'rgb(var(--fg-primary))' }}
              >
                찾아오시는 길
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p 
                    className="font-semibold mb-2"
                    style={{ color: 'rgb(var(--fg-primary))' }}
                  >
                    서울특별시 강남구 테헤란로 123
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: 'rgb(var(--fg-muted))' }}
                  >
                    지하철 2호선 강남역 1번 출구 도보 5분
                  </p>
                </div>
                
                <button
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  style={{
                    backgroundColor: 'rgba(var(--primary-default), 0.1)',
                    color: 'rgb(var(--primary-default))',
                    border: '1px solid rgb(var(--primary-default))'
                  }}
                >
                  지도에서 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


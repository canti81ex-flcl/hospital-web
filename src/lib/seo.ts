import type { Metadata } from 'next';

// SNU안과 기본 정보
export const SNU_CLINIC_INFO = {
  name: 'SNU안과 (에스앤유안과의원)',
  fullName: '에스앤유안과의원',
  description: '서울 강남구 소재 전문 안과의원. 스마일라식, 렌즈삽입술, 백내장, 노안 등 다양한 안과 질환 치료. 정의상 원장의 전문적인 진료.',
  url: 'https://snu-eye-clinic.com',
  phone: '02-6913-0000',
  address: {
    street: '서울특별시 강남구 강남대로 624',
    building: 'ICT타워 3층, 12층',
    full: '서울특별시 강남구 강남대로 624 ICT타워 3층, 12층'
  },
  businessHours: {
    weekdays: '09:00-18:00',
    saturday: '09:00-13:00',
    sunday: '휴진'
  },
  services: [
    '스마일라식',
    '렌즈삽입술',
    '백내장수술',
    '노안치료',
    '난시교정',
    '제로토릭ICL'
  ],
  keywords: [
    'SNU안과',
    '에스앤유안과의원',
    '스마일라식',
    '렌즈삽입술',
    '백내장수술',
    '노안치료',
    '난시교정',
    '제로토릭ICL',
    '강남안과',
    '정의상원장',
    '안과의원',
    '시력교정',
    'ICL수술',
    '스마일프로'
  ]
};

// 기본 메타데이터 생성
export function generateMetadata(): Metadata {
  return {
    title: {
      default: SNU_CLINIC_INFO.name,
      template: `%s | ${SNU_CLINIC_INFO.name}`
    },
    description: SNU_CLINIC_INFO.description,
    keywords: SNU_CLINIC_INFO.keywords,
    authors: [{ name: '정의상 원장' }],
    creator: 'SNU안과',
    publisher: '에스앤유안과의원',
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      url: SNU_CLINIC_INFO.url,
      siteName: SNU_CLINIC_INFO.name,
      title: SNU_CLINIC_INFO.name,
      description: SNU_CLINIC_INFO.description,
      images: [
        {
          url: `${SNU_CLINIC_INFO.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SNU_CLINIC_INFO.name
        }
      ]
    },
    
    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: SNU_CLINIC_INFO.name,
      description: SNU_CLINIC_INFO.description,
      images: [`${SNU_CLINIC_INFO.url}/og-image.jpg`]
    },
    
    // 추가 메타데이터
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // 지역 정보
    alternates: {
      canonical: SNU_CLINIC_INFO.url,
    },
    
    // 검증
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    
    // 앱 링크
    appLinks: {
      web: {
        url: SNU_CLINIC_INFO.url,
        should_fallback: true,
      },
    },
    
    // 추가 메타데이터
    other: {
      'geo.region': 'KR-11',
      'geo.placename': '서울특별시 강남구',
      'geo.position': '37.5665;126.9780',
      'ICBM': '37.5665, 126.9780',
      'DC.title': SNU_CLINIC_INFO.name,
      'DC.description': SNU_CLINIC_INFO.description,
      'DC.subject': SNU_CLINIC_INFO.keywords.join(', '),
      'DC.creator': '정의상 원장',
      'DC.publisher': '에스앤유안과의원',
      'DC.date.created': '2024-01-01',
      'DC.date.modified': new Date().toISOString().split('T')[0],
      'DC.language': 'ko',
      'DC.type': 'MedicalClinic',
      'DC.format': 'text/html',
      'DC.identifier': SNU_CLINIC_INFO.url,
      'DC.coverage': '서울특별시 강남구',
      'DC.rights': '© 2024 SNU EYE CLINIC. All rights reserved.',
    }
  };
}

// 구조화된 데이터 생성 (JSON-LD)
export function generateStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 의료기관 정보
      {
        '@type': 'MedicalClinic',
        '@id': `${SNU_CLINIC_INFO.url}#medical-clinic`,
        name: SNU_CLINIC_INFO.fullName,
        alternateName: SNU_CLINIC_INFO.name,
        description: SNU_CLINIC_INFO.description,
        url: SNU_CLINIC_INFO.url,
        telephone: SNU_CLINIC_INFO.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SNU_CLINIC_INFO.address.street,
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          addressCountry: 'KR',
          postalCode: '06072'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.5665,
          longitude: 126.9780
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00'
          }
        ],
        medicalSpecialty: 'Ophthalmology',
        serviceType: SNU_CLINIC_INFO.services,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '안과 진료 서비스',
          itemListElement: SNU_CLINIC_INFO.services.map((service, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: service,
              description: `${service} 전문 진료 서비스`
            },
            position: index + 1
          }))
        },
        sameAs: [
          'https://www.instagram.com/snu_eye_clinic',
          'https://www.youtube.com/@snu_eye_clinic'
        ]
      },
      
      // 의사 정보
      {
        '@type': 'Physician',
        '@id': `${SNU_CLINIC_INFO.url}#physician`,
        name: '정의상',
        jobTitle: '원장',
        worksFor: {
          '@id': `${SNU_CLINIC_INFO.url}#medical-clinic`
        },
        medicalSpecialty: 'Ophthalmology',
        description: '안과 전문의, 스마일라식 및 렌즈삽입술 전문가'
      },
      
      // 웹사이트 정보
      {
        '@type': 'WebSite',
        '@id': `${SNU_CLINIC_INFO.url}#website`,
        url: SNU_CLINIC_INFO.url,
        name: SNU_CLINIC_INFO.name,
        description: SNU_CLINIC_INFO.description,
        publisher: {
          '@id': `${SNU_CLINIC_INFO.url}#medical-clinic`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SNU_CLINIC_INFO.url}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      
      // 조직 정보
      {
        '@type': 'Organization',
        '@id': `${SNU_CLINIC_INFO.url}#organization`,
        name: SNU_CLINIC_INFO.fullName,
        alternateName: SNU_CLINIC_INFO.name,
        url: SNU_CLINIC_INFO.url,
        logo: {
          '@type': 'ImageObject',
          url: `${SNU_CLINIC_INFO.url}/logo.png`,
          width: 200,
          height: 200
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SNU_CLINIC_INFO.phone,
          contactType: 'customer service',
          areaServed: 'KR',
          availableLanguage: 'Korean'
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: SNU_CLINIC_INFO.address.street,
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          addressCountry: 'KR'
        }
      }
    ]
  };
  
  return structuredData;
}

// 리뷰 구조화된 데이터 생성
export function generateReviewStructuredData() {
  const reviews = [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: '익명'
      },
      reviewBody: '시력이 많이 나빠져서 렌즈삽입술을 받았는데, 수술 후 바로 선명하게 보여서 정말 만족합니다. 정의상 원장님께서 꼼꼼하게 설명해주셔서 안심하고 받을 수 있었어요!',
      datePublished: '2024-01-15',
      itemReviewed: {
        '@type': 'MedicalClinic',
        name: SNU_CLINIC_INFO.fullName
      }
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: '익명'
      },
      reviewBody: '스마일라식 받고 1년이 지났는데 정말 만족하고 있어요. 수술도 빠르고 회복도 빨라서 다음날부터 일상생활이 가능했습니다. 추천해요!',
      datePublished: '2024-01-10',
      itemReviewed: {
        '@type': 'MedicalClinic',
        name: SNU_CLINIC_INFO.fullName
      }
    }
  ];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'MedicalClinic',
      name: SNU_CLINIC_INFO.fullName
    },
    ratingValue: 4.9,
    reviewCount: 800,
    bestRating: 5,
    worstRating: 1,
    review: reviews
  };
}

// FAQ 구조화된 데이터 생성
export function generateFAQStructuredData() {
  const faqs = [
    {
      '@type': 'Question',
      name: 'SNU안과는 어떤 수술을 전문으로 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SNU안과는 스마일라식, 렌즈삽입술(ICL), 백내장수술, 노안치료, 난시교정 등 다양한 안과 수술을 전문으로 합니다. 특히 3세대 시력교정술인 스마일프로와 제로토릭 ICL 수술에 특화되어 있습니다.'
      }
    },
    {
      '@type': 'Question',
      name: '진료시간은 어떻게 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '평일은 오전 9시부터 오후 6시까지, 토요일은 오전 9시부터 오후 1시까지 진료합니다. 일요일과 공휴일은 휴진입니다.'
      }
    },
    {
      '@type': 'Question',
      name: '어디에 위치해 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '서울특별시 강남구 강남대로 624 ICT타워 3층, 12층에 위치해 있습니다. 지하철 2호선 강남역 10번 출구에서 도보 3분 거리입니다.'
      }
    },
    {
      '@type': 'Question',
      name: '예약은 어떻게 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '전화 02-6913-0000으로 예약하실 수 있습니다. 온라인 상담도 가능하며, 24시간 내 답변을 드립니다.'
      }
    }
  ];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs
  };
}

// 페이지별 메타데이터 생성
export function generatePageMetadata(page: string, customData?: Partial<Metadata>): Metadata {
  const baseMetadata = generateMetadata();
  
  const pageMetadata: Record<string, Partial<Metadata>> = {
    home: {
      title: SNU_CLINIC_INFO.name,
      description: SNU_CLINIC_INFO.description,
    },
    about: {
      title: '병원소개',
      description: 'SNU안과는 정의상 원장이 이끄는 전문 안과의원으로, 최신 장비와 기술로 안전하고 정확한 진료를 제공합니다.',
    },
    services: {
      title: '진료안내',
      description: '스마일라식, 렌즈삽입술, 백내장수술, 노안치료 등 다양한 안과 질환의 전문적인 치료 서비스를 제공합니다.',
    },
    doctors: {
      title: '의료진소개',
      description: '정의상 원장을 비롯한 SNU안과의 전문 의료진을 소개합니다.',
    },
    reviews: {
      title: '수술후기',
      description: 'SNU안과에서 수술받은 환자들의 실제 후기를 확인하세요. 800건 이상의 만족도 높은 수술후기가 있습니다.',
    },
    contact: {
      title: '진료예약 및 문의',
      description: 'SNU안과 진료예약 및 문의는 02-6913-0000으로 연락주세요. 강남역 도보 3분 거리에 위치해 있습니다.',
    }
  };
  
  const pageData = pageMetadata[page] || {};
  
  return {
    ...baseMetadata,
    ...pageData,
    ...customData,
    title: customData?.title || pageData.title || baseMetadata.title,
    description: customData?.description || pageData.description || baseMetadata.description,
  };
}

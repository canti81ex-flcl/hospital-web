"use client";

import React from 'react';

interface DetailSnuProps {
  title?: string;
  body?: string;
  ctaText?: string;
  href?: string;
}

// 이미지 상수들
const imgSmileImg08Jpg = "http://localhost:3845/assets/1c58002cd863bde46fd5d36de5d827bcccef7500.png";
const imgAwardIconPng = "http://localhost:3845/assets/33ffb44cffe09517ce2508dd6f53a6a16310392c.png";
const imgImage = "http://localhost:3845/assets/b26de5eb723827466ffd4322bdea5dc55c545c3f.png";
const imgMarqueeImg01Jpg = "http://localhost:3845/assets/ff25d265602543eb2201545fb3433a8d9a10b196.png";
const imgMarqueeImg02Jpg = "http://localhost:3845/assets/bff7264e8002c9bf38a87b511f00d092bcb1a963.png";
const imgMarqueeImg03Jpg = "http://localhost:3845/assets/10e2b7e4af35e1dbe2f5f39c163932670e8367e7.png";
const imgMarqueeImg04Jpg = "http://localhost:3845/assets/172c5c3cc7637010cda3a1a2169880ae84ec3add.png";
const imgHistoryImg01Png = "http://localhost:3845/assets/4a7218cfa64df5790e5363b718d7de63bca1f862.png";
const imgHistoryImg02Png = "http://localhost:3845/assets/538ad97a2b8e83167f3a67f7d6f01f37928d4066.png";
const imgHistoryImg03Png = "http://localhost:3845/assets/cb1b761fa32a2cab44f813c0b498b3289c78d095.png";
const imgHistoryImg04Png = "http://localhost:3845/assets/0d259584e4e07d691c8f3a15e68603c0f1f6d590.png";
const imgHistoryImg05Png = "http://localhost:3845/assets/a06472349ab1e84e6c766bbcafe1af87fe639d30.png";
const imgHistoryImg06Png = "http://localhost:3845/assets/0b8726ec7d98ec2e5d8f2ad79839dd47d2089869.png";
const imgHistoryImg07Png = "http://localhost:3845/assets/b4c26f73aa6c9f8574e77e905ddbbcaa7f49005d.png";
const imgHistoryImg08Png = "http://localhost:3845/assets/621868c9b3f4efff697115dbf4aad0132afc509d.png";
const imgHistoryImg09Png = "http://localhost:3845/assets/d3d31bcc0febc74b02563e1e93d7b486e399bb9e.png";
const imgHistoryImg10Png = "http://localhost:3845/assets/b70edc46114a3b80848a6d769a5aebe04b79715d.png";
const imgHistoryImg11Png = "http://localhost:3845/assets/100795083dbc45b9164c22b5e803b29963c3a9c1.png";
const imgHistoryImg12Png = "http://localhost:3845/assets/6a6eb929bb44b6eba1898935dfb8d0cb4445b6f7.png";
const imgSmileImg02Png = "http://localhost:3845/assets/cfc9c06e58d7a8600a4bf976c85680814fe88858.png";
const imgSmileImg03Png = "http://localhost:3845/assets/470c9b4f71e99443efba492418726b3b74dfe4c2.png";
const imgSmileImg04Png = "http://localhost:3845/assets/b75664f05d6f425521fa2bfeb095a2d852003b44.png";
const imgSmileImg05Png = "http://localhost:3845/assets/ff755a9efc5e7035e297650dc6177dbd8fcfe4a3.png";
const imgSmileImg06Png = "http://localhost:3845/assets/687a7e135151967fab2f864caa46678214d76420.png";
const imgSmileImg07Png = "http://localhost:3845/assets/a559d9fd1d28baf263df18a45476ebb07b1600b1.png";
const imgBackground = "http://localhost:3845/assets/b383e4bef3e92f17c5ce160954d4debe5a2e77a0.png";
const imgSmileApacrsJpg = "http://localhost:3845/assets/eadbafb61625dab2de45660273deab359a687aa1.png";
const imgLaserImgPng = "http://localhost:3845/assets/797aef47712ed16664ed5e53828ab857d4309114.png";
const imgSmileIcon01Png = "http://localhost:3845/assets/827a8e13d050f58967190928f1a9103a056f359c.png";
const imgSmileIcon02Png = "http://localhost:3845/assets/e946fb47a28d5efcabd7b96ceb1894a5a21e9ab5.png";
const imgSmileIcon03Png = "http://localhost:3845/assets/9e44dc4d721d57dc0e4c45f92d181347ec48fc0f.png";
const imgSmileIcon04Png = "http://localhost:3845/assets/3bd15047fb7eb379822add3114e224cffe7b3925.png";
const imgSmileIcon05Png = "http://localhost:3845/assets/17d5f43cd513204e49113c0a1cbf16405cc8777f.png";
const imgSmileIcon06Png = "http://localhost:3845/assets/698718a883bfd0730887e01748688c01aab49446.png";
const imgSmileIcon07Png = "http://localhost:3845/assets/c18ef39c4a176515c838c74754c9c588d68687d6.png";
const imgSmileIcon08Png = "http://localhost:3845/assets/c8cbbf38d6448e0f30ceb57009c73b2f33843761.png";
const imgSmileIcon09Png = "http://localhost:3845/assets/ccd1be3f3379c7b53a65ae505901311b1e810811.png";
const imgTableImg01Png = "http://localhost:3845/assets/89be4f60f5e1872edba347ec884e1787b642f91d.png";
const imgTableImg02Png = "http://localhost:3845/assets/14749d98c8a02456fd16820d38ad3b539546aa1c.png";
const imgTableImg03Png = "http://localhost:3845/assets/47b1d8daca7f48cfedd8598af3c3ef02154e08a7.png";
const imgTableImg04Png = "http://localhost:3845/assets/e6da1180374ea19453c435768b13a64e04eb7aff.png";
const imgTableImg05Png = "http://localhost:3845/assets/44c2372d28b87fd301a812c31ca713e5b1eefb2c.png";
const imgTableImg06Png = "http://localhost:3845/assets/b1b07785b4531df8c02b724d2d9c1c9b225d7a17.png";
const imgTableImg07Png = "http://localhost:3845/assets/af03a394e3e6edfc94ba473b3a61a70e277ab58d.png";
const imgTableImg08Png = "http://localhost:3845/assets/1d3f1001555f0afe456c75b58e30bdc5d686619d.png";
const imgTableImg09Png = "http://localhost:3845/assets/8bf1a5cb51ba26d4c8ab0351bdbe745d367b2971.png";
const imgTableImg10Png = "http://localhost:3845/assets/5acde8943628bee02dfd6e326fe9211883f656d2.png";
const imgTableImg11Png = "http://localhost:3845/assets/14d94d12d0393dfdc53bb764d7d013955d0d670.png";
const imgTableImg14Png = "http://localhost:3845/assets/27ef911649114b3ecafb91c009d014f65d912d0.png";
const imgTableImg15Png = "http://localhost:3845/assets/70788711899b0ae2162b25412cb08d1bf88573e7.png";
const imgTableImg16Png = "http://localhost:3845/assets/5c1f6b8c11ab057c781ccda2bcd9c7220a819b2b.png";
const imgBackground1 = "http://localhost:3845/assets/7c859420af66d2166142ce828634d89300751003.png";

// Component2 컴포넌트 (체크마크 아이콘)
interface Component2Props {
  variant?: "1" | "2" | "3" | "4" | "5";
}

function Component2({ variant = "1" }: Component2Props) {
  if (variant === "2") {
    return (
      <div className="relative size-full" data-name="variant=2">
        <div className="absolute inset-[16.08%_8.38%_35.11%_28.39%]">
          <div className="absolute inset-[-10.73%_-7.56%]">
            <img alt="체크마크 아이콘" className="block max-w-none size-full" src="data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' fill='%23c18861'/></svg>" />
          </div>
        </div>
        <div className="absolute inset-[9.19%_19.34%_11.84%_8.38%]">
          <div className="absolute inset-[-6.63%_-6.62%]">
            <img alt="체크마크 아이콘" className="block max-w-none size-full" src="data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' fill='%23c18861'/></svg>" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative size-full" data-name="variant=1">
      <div className="absolute inset-0">
        <img alt="체크마크 아이콘" className="block max-w-none size-full" src="data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' fill='%23c18861'/></svg>" />
      </div>
    </div>
  );
}

export default function DetailSnu({
  title = "스마일라식 상세 정보",
  body,
  ctaText,
  href
}: DetailSnuProps) {
  return (
    <div 
      className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[129.39px] px-0 relative size-full"
      data-name="Detail Section SNU"
      data-anchor="detail"
      id="detail"
      itemScope
      itemType="https://schema.org/MedicalClinic"
      aria-labelledby="detail-title"
    >
      {/* 메인 컨테이너 */}
      <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[35px] items-start justify-start max-w-[1350px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[150px] pt-0 px-2 sm:px-4 md:px-6 lg:px-8 relative shrink-0 w-full">
        
        {/* 메인 타이틀 */}
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[1.4] relative shrink-0 text-[rgb(var(--primary-default))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.031px] text-center tracking-[-1.6px] w-full">
            <h1 id="detail-title" className="mb-0" itemProp="name">
              <span className="text-[rgb(var(--primary-default))]">스마일라식,</span>
              <span className="text-[rgb(var(--text))]">그 시작에는 SNU안과가 있습니다.</span>
            </h1>
          </div>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="content-center flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between relative shrink-0 w-full">
          {/* 왼쪽 이미지 */}
          <div className="content-center flex flex-wrap gap-0 items-center justify-center relative shrink-0 w-full lg:w-[641px]">
            <div 
              className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[660px] max-w-[641px] shrink-0 w-full rounded-lg"
              data-name="smile_img08.jpg"
              style={{ backgroundImage: `url('${imgSmileImg08Jpg}')` }}
              aria-label="스마일라식 이미지"
            />
          </div>

          {/* 오른쪽 텍스트 영역 */}
          <div className="box-border content-stretch flex flex-col gap-4 sm:gap-5 items-center justify-start pb-0 pt-4 sm:pt-6 px-0 relative shrink-0 w-full lg:w-[641px]">
            {/* 주요 성과들 */}
            <div className="content-stretch flex flex-col gap-4 sm:gap-5 items-start justify-start relative shrink-0 w-full">
              {/* 성과 1 */}
              <div className="content-stretch flex flex-wrap gap-0 isolate items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-[60px] sm:w-[70px] z-[2]">
                  <div className="absolute bg-[rgb(var(--surface-variant))] bottom-0 left-1/2 right-0 top-0" />
                  <div 
                    className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[50px] sm:h-[60px] md:h-[69px] shrink-0 w-[50px] sm:w-[60px] md:w-[71px]"
                    data-name="award_icon.png"
                    style={{ backgroundImage: `url('${imgAwardIconPng}')` }}
                    aria-label="수상 아이콘"
                  />
                </div>
                <div className="bg-[rgb(var(--surface-variant))] box-border content-start flex flex-wrap gap-0 items-start justify-start pb-4 sm:pb-5 md:pb-[20.91px] pl-2 sm:pl-2.5 pr-0 pt-4 sm:pt-5 md:pt-[19.09px] relative self-stretch shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-70px)] z-[1]">
                  <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[14px] sm:text-[15px] md:text-[16.453px] text-nowrap tracking-[-0.36px]">
                    <p className="leading-[1.6] whitespace-pre">국제 연구의사 11인 중 1인 , 정의상 대표원장</p>
                  </div>
                </div>
              </div>

              {/* 성과 2 */}
              <div className="content-stretch flex flex-wrap gap-0 isolate items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-[60px] sm:w-[70px] z-[2]">
                  <div className="absolute bg-[rgb(var(--surface-variant))] bottom-0 left-1/2 right-0 top-0" />
                  <div 
                    className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[50px] sm:h-[60px] md:h-[69px] shrink-0 w-[50px] sm:w-[60px] md:w-[71px]"
                    data-name="award_icon.png"
                    style={{ backgroundImage: `url('${imgAwardIconPng}')` }}
                    aria-label="수상 아이콘"
                  />
                </div>
                <div className="bg-[rgb(var(--surface-variant))] box-border content-start flex flex-wrap gap-0 items-start justify-start pb-4 sm:pb-5 md:pb-[20.91px] pl-2 sm:pl-2.5 pr-0 pt-4 sm:pt-5 md:pt-[19.09px] relative self-stretch shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-70px)] z-[1]">
                  <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[14px] sm:text-[15px] md:text-[16.594px] text-nowrap tracking-[-0.36px]">
                    <p className="leading-[1.6] whitespace-pre">2011년 5월, 국내 스마일라식 도입, 초기 임상연구 진행</p>
                  </div>
                </div>
              </div>

              {/* 성과 3 */}
              <div className="content-stretch flex flex-wrap gap-0 isolate items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-[60px] sm:w-[70px] z-[2]">
                  <div className="absolute bg-[rgb(var(--surface-variant))] bottom-0 left-1/2 right-0 top-0" />
                  <div 
                    className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[50px] sm:h-[60px] md:h-[69px] shrink-0 w-[50px] sm:w-[60px] md:w-[71px]"
                    data-name="award_icon.png"
                    style={{ backgroundImage: `url('${imgAwardIconPng}')` }}
                    aria-label="수상 아이콘"
                  />
                </div>
                <div className="bg-[rgb(var(--surface-variant))] box-border content-start flex flex-wrap gap-0 items-start justify-start pb-4 sm:pb-5 md:pb-[20.91px] pl-2 sm:pl-2.5 pr-0 pt-4 sm:pt-5 md:pt-[19.09px] relative self-stretch shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-70px)] z-[1]">
                  <div className="flex flex-col font-['Jost:SemiBold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[14px] sm:text-[15px] md:text-[16.594px] text-nowrap tracking-[-0.36px]">
                    <p className="leading-[1.6] whitespace-pre">비쥬맥스 장비, 그리고 펨토초 레이저를 사용한 수술방법에 대한 선도적 이해</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 연도별 성과 타임라인 */}
            <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[329.8px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-l border-[rgb(var(--border))] inset-0 pointer-events-none" />
              <div className="absolute content-start flex flex-wrap gap-0 items-start justify-start left-px right-0 top-[-1px]">
                <div className="content-stretch flex flex-col items-center justify-start relative self-stretch shrink-0 w-[60px] sm:w-[75px]">
                  <div className="flex flex-col font-['Jost:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[16px] sm:text-[18px] text-center text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">2011</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-75px)]">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[1.6] relative shrink-0 text-[14px] sm:text-[15px] md:text-[17.578px] text-[rgba(var(--text),0.6)] w-full">
                      <p className="mb-0">
                        <span className="text-[rgba(var(--text),0.6)]">Clinical Results go all-femto RELEX surgery: 2011, APCRS: </span>
                        <span className="text-[rgb(var(--primary-default))] tracking-[-0.32px]">2011</span>
                      </p>
                      <p className="text-[rgb(var(--primary-default))] tracking-[-0.32px]">아시아태평양백내장굴절학회(APCRS), 대한민국 스마일수술 성적 발표</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[-8px] size-[15px] top-1.5" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 마케팅 이미지 갤러리 */}
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 max-w-[1350px] w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[329.64px]">
            <div 
              className="bg-[0%_50.04%] bg-no-repeat bg-size-[100%_100%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[428.22px] max-w-[329.64px] shrink-0 w-full rounded-lg"
              data-name="marquee_img01.jpg"
              style={{ backgroundImage: `url('${imgMarqueeImg01Jpg}')` }}
              aria-label="마케팅 이미지 1"
            />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[527.08px]">
            <div 
              className="bg-[0%_50.02%] bg-no-repeat bg-size-[100%_100%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[429.23px] max-w-[527.08px] shrink-0 w-full rounded-lg"
              data-name="marquee_img02.jpg"
              style={{ backgroundImage: `url('${imgMarqueeImg02Jpg}')` }}
              aria-label="마케팅 이미지 2"
            />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[529px]">
            <div 
              className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[250px] md:h-[300px] lg:h-[430px] max-w-[529px] shrink-0 w-full rounded-lg"
              data-name="marquee_img03.jpg"
              style={{ backgroundImage: `url('${imgMarqueeImg03Jpg}')` }}
              aria-label="마케팅 이미지 3"
            />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[529px]">
            <div 
              className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[250px] md:h-[300px] lg:h-[430px] max-w-[529px] shrink-0 w-full rounded-lg"
              data-name="marquee_img04.jpg"
              style={{ backgroundImage: `url('${imgMarqueeImg04Jpg}')` }}
              aria-label="마케팅 이미지 4"
            />
          </div>
        </div>
      </div>

      {/* SNU안과 연혁 섹션 */}
      <div className="box-border content-stretch flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[13px] items-start justify-start max-w-[1350px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-0 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[150px] px-2 sm:px-4 md:px-6 lg:px-8 relative shrink-0 w-full">
        {/* 섹션 타이틀 */}
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.031px] text-center tracking-[-1.6px] w-full">
            <h2 className="mb-0">
              <span className="text-[rgb(var(--text))]">SNU안과의 스마일은 </span>
              <span className="text-[rgb(var(--primary-default))]">왜 특별할까?</span>
            </h2>
          </div>
        </div>

        {/* History 서브타이틀 */}
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="flex flex-col font-['Jost:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text-secondary))] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-center w-full">
            <h3 className="leading-[1.3]">History</h3>
          </div>
        </div>

        {/* 연혁 타임라인 */}
        <div className="h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-[1400px] xl:h-[1470.56px] relative shrink-0 w-full">
          {/* 연혁 데이터 */}
          <div className="absolute inset-0 flex flex-col lg:flex-row gap-4 lg:gap-0">
            {/* 2006년 */}
            <div className="flex-1 flex flex-col items-center justify-start p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px] rounded-full bg-[rgb(var(--primary-mutedBg))] flex items-center justify-center">
                    <img 
                      src={imgHistoryImg01Png} 
                      alt="2006년 이미지" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Bold',_sans-serif] font-bold text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] lg:text-[21.6px] mb-1">
                      2006년
                    </div>
                    <div className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] lg:text-[16.734px]">
                      최초 비쥬맥스 개발
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2008년 */}
            <div className="flex-1 flex flex-col items-center justify-start p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px] rounded-full bg-[rgb(var(--primary-mutedBg))] flex items-center justify-center">
                    <img 
                      src={imgHistoryImg02Png} 
                      alt="2008년 이미지" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Bold',_sans-serif] font-bold text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] lg:text-[21.6px] mb-1">
                      2008년
                    </div>
                    <div className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] lg:text-[17.016px]">
                      유럽 CE 허가
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2009년 */}
            <div className="flex-1 flex flex-col items-center justify-start p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px] rounded-full bg-[rgb(var(--primary-mutedBg))] flex items-center justify-center">
                    <img 
                      src={imgHistoryImg03Png} 
                      alt="2009년 이미지" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Bold',_sans-serif] font-bold text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] lg:text-[21.6px] mb-1">
                      2009년
                    </div>
                    <div className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] lg:text-[16.734px]">
                      국내 식약처 허가
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2010년 */}
            <div className="flex-1 flex flex-col items-center justify-start p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px] rounded-full bg-[rgb(var(--primary-mutedBg))] flex items-center justify-center">
                    <img 
                      src={imgHistoryImg10Png} 
                      alt="2010년 이미지" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Bold',_sans-serif] font-bold text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] lg:text-[21.6px] mb-1">
                      2010년
                    </div>
                    <div className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] lg:text-[16.734px]">
                      독일 칼자이스 본사 방문<br />
                      Visumax 장비 생산과정 참관
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2011년 */}
            <div className="flex-1 flex flex-col items-center justify-start p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px] rounded-full bg-[rgb(var(--primary-mutedBg))] flex items-center justify-center">
                    <img 
                      src={imgHistoryImg04Png} 
                      alt="2011년 이미지" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Bold',_sans-serif] font-bold text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] lg:text-[21.6px] mb-1">
                      2011년 5월
                    </div>
                    <div className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] lg:text-[16.734px]">
                      삼성서울병원 정의상 원장<br />
                      스마일수술 집도 및 임상발표
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2012년 */}
            <div className="flex-1 flex flex-col items-center justify-start p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[80px] sm:w-[100px] lg:w-[130px] h-[80px] sm:h-[100px] lg:h-[130px] rounded-full bg-[rgb(var(--primary-mutedBg))] flex items-center justify-center">
                    <img 
                      src={imgHistoryImg12Png} 
                      alt="2012년 이미지" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Bold',_sans-serif] font-bold text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] lg:text-[21.6px] mb-1">
                      2012년
                    </div>
                    <div className="font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[15px] lg:text-[16.875px]">
                      스마일 임상결과 국제학술대회 발표<br />
                      APAO, ESCRS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SNU만의 특별함 - 케이스별 수술 사례 섹션 */}
      <div className="h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1339.24px] max-w-[1350px] relative shrink-0 w-full px-2 sm:px-4 md:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="absolute content-stretch flex flex-col items-center justify-start left-0 right-0 top-0">
          <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[27.773px] text-center text-nowrap tracking-[-0.9px] w-full">
            <h2 className="leading-[1.5] whitespace-pre">
              환자별 특성에 맞게 최적화된 SNU만의 스마일 라식
            </h2>
          </div>
        </div>

        {/* 하단 서브타이틀 */}
        <div className="absolute content-stretch flex flex-col gap-3 sm:gap-4 lg:gap-[13px] items-start justify-start left-0 right-0 top-[400px] sm:top-[500px] md:top-[600px] lg:top-[700px] xl:top-[978.84px]">
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[22.5px] text-center tracking-[-0.96px] w-full">
              <h3 className="leading-[1.4]">SNU만의 시크릿 노하우</h3>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-light justify-center leading-[1.4] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[36.563px] text-center tracking-[-1.6px] w-full">
              <h4 className="mb-0">환자별 특성에 맞춘</h4>
              <h4 className="font-['Jost:Bold',_'Noto_Sans_KR:Regular',_'Noto_Sans_KR:Bold',_sans-serif] font-bold">
                광학부 크기, 절삭량, 난시축, 에너지 조사량 조절
              </h4>
            </div>
          </div>
        </div>

        {/* 배경 이미지 */}
        <div 
          className="absolute bg-bottom-left bg-no-repeat bg-size-[100%_17.52%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[834.34px] left-0 right-0 top-[50px] sm:top-[60px] md:top-[70px] lg:top-[70.5px]"
          data-name="Background"
          style={{ backgroundImage: `url('${imgBackground}')` }}
        />

        {/* 케이스별 수술 사례 그리드 */}
        <div className="absolute bottom-[50px] sm:bottom-[100px] md:bottom-[150px] lg:bottom-[200px] xl:bottom-[437.17px] left-0 right-0 top-[100px] sm:top-[120px] md:top-[140px] lg:top-[150px] xl:top-[70.5px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-full">
            {/* CASE 01 - 고도근시 */}
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[419.95px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-[200px] sm:w-[250px] lg:w-[280px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img 
                      src={imgSmileImg02Png} 
                      alt="고도근시 케이스" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                      CASE 01
                    </div>
                    <div className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgb(var(--text))] text-[16px] sm:text-[18px] lg:text-[22.313px] tracking-[-0.96px]">
                      고도근시
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE 02 - 고도난시 */}
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[419.95px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-[200px] sm:w-[250px] lg:w-[280px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img 
                      src={imgSmileImg03Png} 
                      alt="고도난시 케이스" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                      CASE 02
                    </div>
                    <div className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgb(var(--text))] text-[16px] sm:text-[18px] lg:text-[22.313px] tracking-[-0.96px]">
                      고도난시
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE 03 - 동공이 큰 경우 */}
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[419.95px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-[200px] sm:w-[250px] lg:w-[280px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img 
                      src={imgSmileImg04Png} 
                      alt="동공이 큰 경우 케이스" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                      CASE 03
                    </div>
                    <div className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgb(var(--text))] text-[16px] sm:text-[18px] lg:text-[21.938px] tracking-[-0.96px]">
                      동공이 큰 경우
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE 04 - 각막질환이 있는 경우 */}
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[419.95px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-[200px] sm:w-[250px] lg:w-[280px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img 
                      src={imgSmileImg05Png} 
                      alt="각막질환이 있는 경우 케이스" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                      CASE 04
                    </div>
                    <div className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgb(var(--text))] text-[16px] sm:text-[18px] lg:text-[22.125px] tracking-[-0.96px]">
                      각막질환이 있는 경우
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE 05 - 각막비대칭 */}
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[419.95px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-[200px] sm:w-[250px] lg:w-[280px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img 
                      src={imgSmileImg06Png} 
                      alt="각막비대칭 케이스" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                      CASE 05
                    </div>
                    <div className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgb(var(--text))] text-[16px] sm:text-[18px] lg:text-[22.313px] tracking-[-0.96px]">
                      각막비대칭
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE 06 - 건조증이 심한 경우 */}
            <div className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[419.95px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="w-[200px] sm:w-[250px] lg:w-[280px] h-[200px] sm:h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img 
                      src={imgSmileImg07Png} 
                      alt="건조증이 심한 경우 케이스" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                      CASE 06
                    </div>
                    <div className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium text-[rgb(var(--text))] text-[16px] sm:text-[18px] lg:text-[22.125px] tracking-[-0.96px]">
                      건조증이 심한 경우
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 아이콘 */}
        <div className="absolute bg-white bottom-[20px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[50px] xl:bottom-[-24px] left-1/2 rounded-[48px] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.1)] size-8 sm:size-10 lg:size-12 translate-x-[-50%] flex items-center justify-center">
          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[rgb(var(--primary-default))] rounded-full"></div>
        </div>
      </div>

      {/* 연구 성과 섹션 - APACRS 발표 */}
      <div className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start overflow-clip px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-start max-w-[1350px] px-0 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full">
          {/* 왼쪽 이미지 */}
          <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0 w-full lg:w-[660px]">
            <div 
              className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[300px] sm:h-[400px] lg:h-[438px] rounded-[15px] shrink-0 w-full"
              data-name="smile_apacrs.jpg"
              style={{ backgroundImage: `url('${imgSmileApacrsJpg}')` }}
              aria-label="APACRS 발표 이미지"
            />
          </div>

          {/* 오른쪽 텍스트 영역 */}
          <div className="box-border content-stretch flex flex-wrap gap-0 items-start justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[139.83px] pl-0 sm:pl-4 md:pl-8 lg:pl-12 xl:pl-[85px] pr-0 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[139.11px] relative self-stretch shrink-0 w-full lg:w-[690px]">
            <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[1.4] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.031px] tracking-[-1.6px] w-full">
                <h2 className="mb-0">2012 APACRS</h2>
                <h2 className="mb-0">아시아태평양백내장굴절학회</h2>
                <h2 className="text-[rgb(var(--primary-default))]">대한민국 스마일수술 임상성적 발표</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 개인별 최적화 섹션 */}
      <div className="bg-[#765d4d] box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[35px] items-start justify-start max-w-[1350px] relative shrink-0 w-full">
          {/* 섹션 타이틀 */}
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_'Noto_Sans_KR:Regular',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-1.6px] w-full">
              <h2 className="leading-[1.4] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[36.875px]">
                <span className="font-['Jost:Bold',_'Noto_Sans_KR:Bold',_'Noto_Sans_KR:Regular',_sans-serif] font-bold">개인별 최적화된 수술 방법</span>
                <span className="font-['Jost:Light',_'Noto_Sans_KR:Bold',_'Noto_Sans_KR:Regular',_sans-serif] font-light">으로,</span>
                <span className="font-['Jost:Bold',_'Noto_Sans_KR:Bold',_'Noto_Sans_KR:Regular',_sans-serif] font-bold"> 안정적인 수술 결과</span>
              </h2>
            </div>
          </div>

          {/* 두 개의 카드 */}
          <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-between relative shrink-0 w-full">
            {/* 카드 1 - 노모그램 제작 */}
            <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-6 lg:gap-[18px] items-start justify-start pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[95.19px] pt-6 sm:pt-8 md:pt-10 lg:pt-11 px-6 sm:px-8 md:px-10 relative rounded-[20px] self-stretch shrink-0 w-full lg:w-[660px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[rgb(var(--text-secondary))] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22.313px] text-center tracking-[-0.96px] w-full">
                  <h3 className="leading-[1.4]">
                    <span className="text-[rgb(var(--text-secondary))]">10년 이상의 노하우로</span>
                    <span className="text-[rgb(var(--primary-default))]">환자케이스별 노모그램 제작</span>
                  </h3>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                <div className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[200px] sm:h-[250px] md:h-[300px] lg:h-[309px] max-w-[580px] shrink-0 w-full rounded-lg" 
                  data-name="10년 이상의 노하우로 환자케이스별 노모그램 제작"
                  style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 580 309" xmlns="http://www.w3.org/2000/svg"><rect width="580" height="309" fill="%23f5f5f5"/><text x="290" y="154" text-anchor="middle" font-family="Arial" font-size="16" fill="%23333">노모그램 차트 이미지</text></svg>')` }}
                  aria-label="노모그램 차트"
                />
              </div>
            </div>

            {/* 카드 2 - 수술 교정 결과 */}
            <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-6 lg:gap-[18px] items-start justify-start pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[45px] pt-6 sm:pt-8 md:pt-10 lg:pt-11 px-6 sm:px-8 md:px-10 relative rounded-[20px] self-stretch shrink-0 w-full lg:w-[660px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[rgb(var(--text-secondary))] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22.125px] text-center tracking-[-0.96px] w-full">
                  <h3 className="leading-[1.4]">
                    <span className="text-[rgb(var(--text-secondary))]">대상자 12개월 이후 </span>
                    <span className="text-[rgb(var(--primary-default))]">수술 교정 결과</span>
                  </h3>
                </div>
              </div>
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[359.19px] relative shrink-0 w-full">
                <div className="absolute box-border content-stretch flex flex-wrap gap-0 items-start justify-center left-0 pl-0 pr-[0.01px] py-0 right-0 top-0">
                  {/* 범례 */}
                  <div className="box-border content-stretch flex flex-col items-start justify-center mr-[-0.01px] pl-0 pr-4 sm:pr-6 py-0 relative self-stretch shrink-0">
                    <div className="basis-0 box-border content-center flex flex-wrap gap-0 grow items-center justify-start min-h-px min-w-px pb-1 pt-0 px-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-col h-3 sm:h-4 items-start justify-start pl-0 pr-2 sm:pr-[7px] py-0 relative shrink-0 w-4 sm:w-5 lg:w-[21px]">
                        <div className="bg-[#d7c0b0] shrink-0 size-3 sm:size-4 lg:size-3.5" />
                      </div>
                      <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[25.6px] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[15.25px] text-nowrap tracking-[-0.32px]">
                        <p className="leading-[1.6] whitespace-pre">난시 -1디옵터 이상 대상자</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-center flex flex-wrap gap-0 items-center justify-start mr-[-0.01px] pb-1 pt-0 px-0 relative self-stretch shrink-0">
                    <div className="box-border content-stretch flex flex-col h-3 sm:h-4 items-start justify-start pl-0 pr-2 sm:pr-[7px] py-0 relative shrink-0 w-4 sm:w-5 lg:w-[21px]">
                      <div className="bg-[rgb(var(--primary-default))] shrink-0 size-3 sm:size-4 lg:size-3.5" />
                    </div>
                    <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] max-h-[25.6px] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[15.25px] text-nowrap tracking-[-0.32px]">
                      <p className="leading-[1.6] whitespace-pre">근시 -5디옵터 이상 대상자</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] left-1/2 top-[40px] sm:top-[45px] lg:top-[45.6px] translate-x-[-50%] w-[90%] sm:w-[95%] lg:w-[562px]" 
                  data-name="대상자 12개월 이후 수술 교정 결과"
                  style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 562 270" xmlns="http://www.w3.org/2000/svg"><rect width="562" height="270" fill="%23f5f5f5"/><text x="281" y="135" text-anchor="middle" font-family="Arial" font-size="14" fill="%23333">수술 교정 결과 차트</text></svg>')` }}
                  aria-label="수술 교정 결과 차트"
                />
                <div className="absolute content-stretch flex flex-col items-end justify-start left-0 right-0 top-[220px] sm:top-[260px] md:top-[290px] lg:top-[333.6px]">
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[rgb(var(--primary-default))] text-[12px] sm:text-[14px] lg:text-[15.25px] text-nowrap text-right">
                    <p className="leading-[1.6] whitespace-pre">
                      <span className="text-[rgb(var(--primary-default))]">*</span>
                      <span className="text-[rgba(var(--text),0.5)] tracking-[-0.32px]"> SNU안과 2020년~2022년 수술환자대상 조사결과</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 장비 및 기술 섹션 - 펨토초 레이저 */}
      <div className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[150px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[149.39px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[30px] items-start justify-start max-w-[1350px] relative shrink-0 w-full">
          {/* 상단 레이아웃 */}
          <div className="content-end flex flex-wrap items-end justify-between relative shrink-0 w-full">
            <div className="flex flex-row items-end self-stretch">
              <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[35px] h-full isolate items-start justify-start relative shrink-0 w-full lg:w-[657.5px]">
                {/* 타이틀 */}
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full z-[2]">
                  <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[1.4] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.188px] text-nowrap tracking-[-1.6px] whitespace-pre">
                    <h2 className="mb-0">스마일라식에 최적화된</h2>
                    <h2 className="text-[rgb(var(--primary-default))]">펨토초 레이저</h2>
                  </div>
                </div>

                {/* 특징 리스트 */}
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-full z-[1]">
                  <div aria-hidden="true" className="absolute border-t-2 border-[rgb(var(--primary-default))] inset-0 pointer-events-none" />
                  <div className="box-border content-center flex flex-wrap gap-0 items-center justify-start min-h-[80px] sm:min-h-[90px] md:min-h-[100px] pb-6 sm:pb-8 md:pb-[33.5px] pt-6 sm:pt-8 md:pt-[32.5px] px-0 relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-b border-[rgb(var(--border))] inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-[60px] sm:w-[80px] lg:w-[100px]">
                      <div 
                        className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[24px] sm:h-[28px] md:h-[32px] lg:h-[34px] shrink-0 w-[40px] sm:w-[48px] lg:w-12"
                        data-name="smile_icon01.png"
                        style={{ backgroundImage: `url('${imgSmileIcon01Png}')` }}
                        aria-label="펨토초 레이저 아이콘"
                      />
                    </div>
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-1 pt-0 px-0 relative shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-80px)] lg:w-[calc(100%-100px)]">
                      <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.453px] text-[rgba(var(--text),0.6)] text-nowrap tracking-[-0.72px]">
                        <p className="leading-[1.6] whitespace-pre">펨토초 레이저 스마일라식 – 빠른수술로 통증완화, 빠른 일상복귀</p>
                      </div>
                    </div>
                  </div>

                  <div className="box-border content-center flex flex-wrap gap-0 items-center justify-start min-h-[80px] sm:min-h-[90px] md:min-h-[100px] pb-5 sm:pb-6 md:pb-[26.5px] pt-5 sm:pt-6 md:pt-[25.5px] px-0 relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-b border-[rgb(var(--border))] inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-[60px] sm:w-[80px] lg:w-[100px]">
                      <div 
                        className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[40px] sm:h-[44px] md:h-[48px] lg:h-12 shrink-0 w-[32px] sm:w-[36px] md:w-[40px] lg:w-10"
                        data-name="smile_icon02.png"
                        style={{ backgroundImage: `url('${imgSmileIcon02Png}')` }}
                        aria-label="에너지 아이콘"
                      />
                    </div>
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-1 pt-0 px-0 relative shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-80px)] lg:w-[calc(100%-100px)]">
                      <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] text-nowrap tracking-[-0.72px]">
                        <p className="leading-[1.6] whitespace-pre">600배 낮은 에너지 정교함 안정성 강화</p>
                      </div>
                    </div>
                  </div>

                  <div className="box-border content-center flex flex-wrap gap-0 items-center justify-start min-h-[80px] sm:min-h-[90px] md:min-h-[100px] pb-6 sm:pb-8 md:pb-[33.5px] pt-6 sm:pt-8 md:pt-[32.5px] px-0 relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-b border-[rgb(var(--border))] inset-0 pointer-events-none" />
                    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-[60px] sm:w-[80px] lg:w-[100px]">
                      <div 
                        className="bg-no-repeat bg-size-[100%_100%] bg-top-left h-[24px] sm:h-[28px] md:h-[32px] lg:h-[34px] shrink-0 w-[40px] sm:w-[48px] lg:w-12"
                        data-name="smile_icon03.png"
                        style={{ backgroundImage: `url('${imgSmileIcon03Png}')` }}
                        aria-label="고도교정 아이콘"
                      />
                    </div>
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-1 pt-0 px-0 relative shrink-0 w-[calc(100%-60px)] sm:w-[calc(100%-80px)] lg:w-[calc(100%-100px)]">
                      <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.594px] text-[rgba(var(--text),0.6)] text-nowrap tracking-[-0.72px]">
                        <p className="leading-[1.6] whitespace-pre">고도근시, 고도난시 교정도 가능, 근시퇴행 확률 최소화</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 이미지 */}
            <div className="content-stretch flex flex-col h-[300px] sm:h-[400px] md:h-[500px] lg:h-[555.22px] items-center justify-start relative shrink-0 w-full lg:w-[657.5px]">
              <div 
                className="bg-[0%_50.11%] bg-no-repeat bg-size-[100%_100%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[555.22px] max-w-[657.5px] shrink-0 w-full rounded-lg"
                data-name="laser_img.png"
                style={{ backgroundImage: `url('${imgLaserImgPng}')` }}
                aria-label="펨토초 레이저 장비 이미지"
              />
            </div>
          </div>

          {/* 하단 레이아웃 - 칼자이스 본사 초청 */}
          <div className="content-stretch flex flex-wrap gap-0 items-start justify-start relative shrink-0 w-full">
            <div className="basis-0 bg-no-repeat bg-size-[101.35%_100%] bg-top grow min-h-px min-w-px self-stretch shrink-0 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg"
              data-name="Image"
              style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="350" fill="%23f5f5f5"/><text x="200" y="175" text-anchor="middle" font-family="Arial" font-size="16" fill="%23333">칼자이스 본사 이미지</text></svg>')` }}
              aria-label="칼자이스 본사 이미지"
            />
            <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
              <div aria-hidden="true" className="absolute border border-[rgb(var(--border))] inset-0 pointer-events-none" />
              <div className="absolute content-stretch flex flex-col items-start justify-start left-4 sm:left-6 md:left-8 lg:left-[90px] right-4 sm:right-6 md:right-8 lg:right-[31px] top-4 sm:top-6 md:top-8 lg:top-[90.39px]">
                <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[1.4] relative shrink-0 text-[rgb(var(--text))] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36.719px] text-nowrap tracking-[-1.6px] whitespace-pre">
                  <h2 className="mb-0">독일 칼자이스 본사 초청</h2>
                  <h2 className="text-[rgb(var(--primary-default))]">스마일라식 임상연구의</h2>
                </div>
              </div>
              <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-4 sm:left-6 md:left-8 lg:left-[90px] pb-2 pt-0 px-0 right-4 sm:right-6 md:right-8 lg:right-[31px] top-[120px] sm:top-[140px] md:top-[160px] lg:top-[230.54px]">
                <div className="flex flex-col font-['Jost:Light',_'Noto_Sans_KR:Regular',_sans-serif] font-light justify-center leading-[1.4] relative shrink-0 text-[rgb(var(--text))] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18.438px] text-nowrap tracking-[-0.8px] whitespace-pre">
                  <p className="leading-[1.4] mb-0 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18.438px]">
                    SNU안과는 세계적 안광학 기업 독일 칼자이스 본사의 
                  </p>
                  <p className="leading-[1.4] mb-0 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18.438px]">
                    <span className="">객관적 평가를 통해 </span>
                    <span className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium">&apos;안전한 스마일라식 수술이 가능한 안과&apos;로 </span>
                  </p>
                  <p className="leading-[1.4] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18.438px]">
                    <span className="font-['Jost:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium">확인 </span>
                    <span className="">되었습니다.</span>
                  </p>
                </div>
              </div>

              {/* 체크리스트 */}
              <div className="absolute left-4 sm:left-6 md:left-8 lg:left-[90px] right-4 sm:right-6 md:right-8 lg:right-[31px] top-[200px] sm:top-[220px] md:top-[240px] lg:top-[352.51px] space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <Component2 variant="2" />
                  </div>
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-6 sm:h-7 lg:h-[29px] justify-center leading-[0] text-[12px] sm:text-[14px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] top-[13.5px] tracking-[-0.36px] translate-y-[-50%]">
                    <p className="leading-[1.6]">펨토초 레이저 시스템을 사용하는 3세대 시력교정술 레이저장비</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <Component2 variant="2" />
                  </div>
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-6 sm:h-7 lg:h-[29px] justify-center leading-[0] text-[12px] sm:text-[14px] lg:text-[16.875px] text-[rgba(var(--text),0.6)] top-[13.5px] tracking-[-0.36px] translate-y-[-50%]">
                    <p className="leading-[1.6]">500KHZ 초고속 레이저 이용으로 각막손상, 혼탁, 염증, 눈부심 감소</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <Component2 variant="2" />
                  </div>
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-6 sm:h-7 lg:h-[29px] justify-center leading-[0] text-[12px] sm:text-[14px] lg:text-[16.594px] text-[rgba(var(--text),0.6)] top-[13.5px] tracking-[-0.36px] translate-y-[-50%]">
                    <p className="leading-[1.6]">저자극 에너지를 사용해 염증, 부작용 가능성 최소화</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                    <Component2 variant="2" />
                  </div>
                  <div className="flex flex-col font-['Jost:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-6 sm:h-7 lg:h-[29px] justify-center leading-[0] text-[12px] sm:text-[14px] lg:text-[16.734px] text-[rgba(var(--text),0.6)] top-[13.5px] tracking-[-0.36px] translate-y-[-50%]">
                    <p className="leading-[1.6]">전자동 안구 고정 방식으로 3차원 입체 각막 절편 제작</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 라식/라섹/스마일라식 비교표 섹션 */}
      <div className="bg-[rgb(var(--surface-variant))] box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[35px] items-start justify-start max-w-[1350px] relative shrink-0 w-full">
          {/* 섹션 타이틀 */}
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.031px] text-center tracking-[-1.6px] w-full">
              <h2 className="mb-0">라식/라섹/스마일라식 비교표</h2>
            </div>
          </div>

          {/* 비교표 */}
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-[rgb(var(--primary-mutedBg))]">
                      <th className="px-4 py-3 text-left font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px]">구분</th>
                      <th className="px-4 py-3 text-center font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px]">라식</th>
                      <th className="px-4 py-3 text-center font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px]">라섹</th>
                      <th className="px-4 py-3 text-center font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--primary-default))] text-[14px] sm:text-[16px] lg:text-[18px]">스마일라식</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[rgb(var(--border))]">
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">절편 제작</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">마이크로케라톰</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">펨토초 레이저</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">펨토초 레이저</td>
                    </tr>
                    <tr className="border-b border-[rgb(var(--border))]">
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">각막 절편</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">있음</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">있음</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">없음</td>
                    </tr>
                    <tr className="border-b border-[rgb(var(--border))]">
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">수술 시간</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">10-15분</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">10-15분</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">5-10분</td>
                    </tr>
                    <tr className="border-b border-[rgb(var(--border))]">
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">회복 기간</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">1-2주</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">2-4주</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">3-7일</td>
                    </tr>
                    <tr className="border-b border-[rgb(var(--border))]">
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">통증</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">중간</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">심함</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">최소</td>
                    </tr>
                    <tr className="border-b border-[rgb(var(--border))]">
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">안정성</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">좋음</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">좋음</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">매우 좋음</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text))] text-[12px] sm:text-[14px] lg:text-[16px]">적용 범위</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">근시 -12D 이하</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px]">근시 -10D 이하</td>
                      <td className="px-4 py-3 text-center text-[12px] sm:text-[14px] lg:text-[16px] text-[rgb(var(--primary-default))] font-medium">근시 -10D, 난시 -5D</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 적합성 체크 섹션 */}
      <div className="bg-[rgb(var(--surface))] box-border content-stretch flex flex-col items-start justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[285px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[35px] items-start justify-start max-w-[1350px] relative shrink-0 w-full">
          {/* 섹션 타이틀 */}
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Jost:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[rgb(var(--text))] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[37.031px] text-center tracking-[-1.6px] w-full">
              <h2 className="mb-0">스마일라식 수술 적합성 체크</h2>
            </div>
          </div>

          {/* 체크리스트 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
            {/* 체크 항목 1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1">
                  <Component2 variant="2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                    나이 제한
                  </h3>
                  <p className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5]">
                    18세 이상 45세 이하
                  </p>
                </div>
              </div>
            </div>

            {/* 체크 항목 2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1">
                  <Component2 variant="2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                    근시/난시 정도
                  </h3>
                  <p className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5]">
                    근시 -10D 이하, 난시 -5D 이하
                  </p>
                </div>
              </div>
            </div>

            {/* 체크 항목 3 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1">
                  <Component2 variant="2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                    각막 두께
                  </h3>
                  <p className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5]">
                    480μm 이상
                  </p>
                </div>
              </div>
            </div>

            {/* 체크 항목 4 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1">
                  <Component2 variant="2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                    안압 정상
                  </h3>
                  <p className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5]">
                    21mmHg 이하
                  </p>
                </div>
              </div>
            </div>

            {/* 체크 항목 5 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1">
                  <Component2 variant="2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                    각막 질환 없음
                  </h3>
                  <p className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5]">
                    각막염, 각막혼탁 등 없음
                  </p>
                </div>
              </div>
            </div>

            {/* 체크 항목 6 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1">
                  <Component2 variant="2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Jost:Medium',_sans-serif] font-medium text-[rgb(var(--text))] text-[14px] sm:text-[16px] lg:text-[18px] mb-2">
                    전신 질환 없음
                  </h3>
                  <p className="font-['Jost:Regular',_sans-serif] font-normal text-[rgb(var(--text-secondary))] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.5]">
                    당뇨, 자가면역질환 등 없음
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <button 
              className="bg-[rgb(var(--primary-default))] hover:bg-[rgb(var(--primary-hover))] text-[rgb(var(--on-primary))] font-['Jost:Medium',_sans-serif] font-medium px-8 py-4 rounded-lg text-[16px] sm:text-[18px] lg:text-[20px] transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="상담 신청하기"
            >
              상담 신청하기
            </button>
          </div>
        </div>
      </div>

      {/* 반응형 스타일 */}
      <style jsx>{`
        /* 모바일 최적화 */
        @media (max-width: 1024px) {
          .main-content {
            flex-direction: column;
          }
          
          .image-gallery {
            flex-direction: column;
            gap: 1rem;
          }
        }
        
        @media (max-width: 640px) {
          .achievement-item {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .achievement-icon {
            width: 100%;
            max-width: 60px;
          }
          
          .achievement-text {
            width: 100%;
            padding-left: 0;
          }
        }
        
        /* 텍스트 줄바꿈 최적화 */
        .text-content {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        /* 호버 효과 */
        .achievement-item:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
        
        .gallery-image:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

// Default props for the component
DetailSnu.defaultProps = {
  title: "스마일라식 상세 정보",
  body: "SNU안과의 스마일라식 전문성과 성과를 소개합니다",
  ctaText: "자세히 보기",
  href: "#detail"
};

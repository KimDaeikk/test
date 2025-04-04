'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[670px] sm:h-[730px] md:h-[830px] bg-[#F7F5EB] py-5 overflow-hidden">

      {/* 배경 */}
      <Image
        src="/goddess_background.png"
        alt="background"
        fill
        className="absolute inset-0 object-cover z-0"
      />

      <video
        className="absolute z-10 top-[400px] sm:top-[450px] md:top-[560px] left-0 w-full h-[670px] sm:h-[730px] md:h-[830px] object-cover opacity-5 aspect-[2/3] pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/water.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 여신 이미지 */}
      <div className="absolute z-20 top-[480px] left-[8vw] sm:left-[30vw] md:left-[35vw] -translate-x-1/2 -translate-y-1/2 w-[562px] aspect-[2/3]">
        <Image
          src="/goddess.png"
          alt="goddess"
          fill
          className="object-contain"
        />
      </div>

      {/* 상단: 헤더 텍스트 */}
      <div className="
      absolute 
      z-30 
      top-[230px] right-[50vw] w-[10vw] 
      sm:top-[240px] sm:right-[20vw] sm:w-[25vw]
      md:top-[360px] md:right-[5vw] md:w-[30vw]
      -translate-x-1/2 
      -translate-y-1/2
      px-4"
      >
        <h1 className="text-stroke font-[Alike] text-[clamp(30px,7.3vw,44px)] leading-[1.2] tracking-[1.5px]">
          <span>Token </span>
          <span className="text-[#523215] !text-stroke-none">Asset </span>
          <span>Universe for</span>
        </h1>
        <div className="text-[#523215] font-[Alike] text-[clamp(44px,7.3vw,90px)] leading-[0.8] mt-3">
          DePIN Network
          <span className="text-[#523215] font-[Alike] text-[clamp(27px,6.3vw,70px)] leading-[1] mt-3"> Infrastructure</span>
        </div>
      </div>

      {/* 하단: 오버레이 + 본문 + 버튼 */}
      <div className="
      absolute 
      z-30
      top-[350px] w-[100vw]
      sm:top-[380px] 
      md:top-[505px]  
      mt-12 
      px-4 py-8 pb-10">
        {/* 반투명 오버레이 배경 */}
        <div className="absolute inset-0 bg-[#3B2200] opacity-40 rounded-lg -z-10 pointer-events-none" />
        <p className="font-[Gelasio] text-[clamp(14px,3vw,21px)] leading-[1.6] tracking-[0.72px] text-white max-w-[789px] mx-auto justify-center items-center">
          Through a centralized and compliant framework, infrastructure providers gain access to legally-backed liquidity,
          with onboarding limited to entities verified through institutional channels and bound by enforceable legal contracts.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-10">
          <button className="inline-flex h-[64px] px-4 justify-center items-center rounded-full border-2 border-white bg-[#334A1F] hover:bg-[#1D3A05] text-white font-[Cinzel] text-[18px]">
            Get started
          </button>
          <button className="inline-flex h-[64px] px-4 justify-center items-center rounded-full border-2 border-white bg-[#3D2510] hover:bg-[#2A1300] text-white font-[Cinzel] text-[18px]">
            Ecosystems
          </button>
        </div>
      </div>
    </section>
  )
}

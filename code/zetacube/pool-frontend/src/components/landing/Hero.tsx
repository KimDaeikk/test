'use client'

import Image from 'next/image'

export default function Hero() {
  return (
<section className="relative w-full h-[calc(100vh-115px)] bg-[#F7F5EB] overflow-hidden">

    {/* 배경 */}
    <Image
        src="/goddess_background.png"
        alt="background"
        fill
        className="absolute inset-0 object-cover z-0"
    />

    {/* 여신 이미지 */}
    <div className="absolute z-10 top-[60%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-[30vw] w-[562px] w-[200px] aspect-[2/3]">
        <Image
        src="/goddess.png"
        alt="goddess"
        fill
        className="object-contain"
        />
    </div>

  {/* 상단: 헤더 텍스트 */}
  <div className="relative z-30 pt-[12vw] left-[25%] px-[28vw] max-w-[75vw]">
    <h1 className="text-stroke w-full font-[Alike] text-[clamp(10px,10vw,30px)] leading-[1.2] tracking-[1.5px]">
      <span>Token </span>
      <span className="text-[#523215] !text-stroke-none">Asset </span>
      <span>Universe for</span>
    </h1>
    <div className="text-[#523215] font-[Alike] text-[clamp(40px,6vw,64px)] leading-[0.8] mt-3">
      DePIN Network
      <span className="text-[#523215] font-[Alike] text-[clamp(26px,6vw,64px)] leading-[1] mt-3"> Infrastructure</span>
    </div>
  </div>

  {/* 하단: 오버레이 + 본문 + 버튼 */}
  <div className="relative z-30 top-[1vw] px-4 py-8 pb-10">
    {/* 반투명 오버레이 배경 */}
    <div className="absolute inset-0 bg-[#3B2200] opacity-40 rounded-lg -z-10 pointer-events-none" />
        <p className="font-[Gelasio] text-[18px] leading-[1.6] tracking-[0.72px] text-white max-w-[789px] mx-auto">
        Through a centralized and compliant framework, infrastructure providers gain access to legally-backed liquidity,
        with onboarding limited to entities verified through institutional channels and bound by enforceable legal contracts.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-10">
        <button className="inline-flex h-[64px] px-4 justify-center items-center rounded-full border-2 border-white bg-[#334A1F] text-white font-[Cinzel] text-[18px]">
            Get started
        </button>
        <button className="inline-flex h-[64px] px-4 justify-center items-center rounded-full border-2 border-white bg-[#3D2510] text-white font-[Cinzel] text-[18px]">
            Ecosystems
        </button>
    </div>
  </div>
</section>

  )
}

'use client'

export default function ConnectWithDePIN() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* 🔹 배경 비디오 */}
      <video
        src="/videos/digital_background.mp4" // 여기에 실제 비디오 경로
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 🔹 블랙 반투명 레이어 (비디오 위) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* 🔹 콘텐츠 (비디오 + 오버레이 위에) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        {/* 타이틀 */}
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-10 leading-tight">
          Our distributed cloud brings<br />compute closer to the edge.
        </h2>

        {/* 카드 컨테이너 */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">
          {/* 카드 1 */}
          <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
            <p className="text-lime-300 text-sm font-medium uppercase mb-2">Documentation</p>
            <h3 className="text-xl font-serif mb-3 leading-snug">
              Learn about cost effective edge gaming
            </h3>
            <div className="w-9 h-9 bg-lime-400 rounded-md flex items-center justify-center mt-4">
              <span className="text-black font-bold">↗</span>
            </div>
          </div>

          {/* 카드 2 */}
          <div className="flex-1 p-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
            <p className="text-lime-300 text-sm font-medium uppercase mb-2">Documentation</p>
            <h3 className="text-xl font-serif mb-3 leading-snug">
              Learn about centralized vs. decentralized gaming
            </h3>
            <div className="w-9 h-9 bg-lime-400 rounded-md flex items-center justify-center mt-4">
              <span className="text-black font-bold">↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

export default function FlywheelSecond() {
  return (
    <section className="w-full bg-[#302D0D] text-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* 왼쪽: 텍스트 */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lime-400 text-sm font-bold uppercase mb-3">
            AETHIR ATMOSPHERE
          </p>
          <h2 className="text-[32px] md:text-[44px] font-serif leading-tight mb-6">
            Leveling up the<br />
            gaming industry
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[600px] mx-auto md:mx-0">
            Atmosphere utilizes a highly performant network of low-latency GPUs
            to enable real-time, high-quality gaming experiences in the cloud.
          </p>
        </div>

        {/* 오른쪽: 비디오 영상 */}
        <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden flex-shrink-0">
          <video
            src="/videos/watering.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            onCanPlay={(e) => {
              e.currentTarget.playbackRate = 0.7
            }}
          />
        </div>
      </div>
    </section>
  )
}

'use client'

export default function FlywheelFirst() {
  return (
    <section className="w-full bg-[#301815] text-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* 왼쪽: 원형 영상 */}
        <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden flex-shrink-0">
            <video
                src="/videos/water_bouncing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
                onCanPlay={(e) => {
                    e.currentTarget.playbackRate = 0.8
                }}
            />
        </div>

        {/* 오른쪽: 텍스트 */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lime-400 text-sm font-bold uppercase mb-3">
            AETHIR ATMOSPHERE
          </p>
          <h2 className="text-[32px] md:text-[44px] font-serif leading-tight mb-6">
            Unlocking the potential<br />
            of artificial intelligence
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[600px] mx-auto md:mx-0">
            Earth leverages a bare-metal GPU cloud to provide raw computing power,
            ensuring high performance without virtualization. Ideal for AI model training,
            fine-tuning, and inference.
          </p>
        </div>
      </div>
    </section>
  )
}

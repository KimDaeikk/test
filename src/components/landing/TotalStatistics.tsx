'use client'

export default function TotalStatistics() {
  const items = [
    {
      title: '400,000+',
      subtitle: 'Enterprise grade GPUs on-demand',
      desc: 'Over $400m worth of compute capacity.',
    },
    {
      title: '95',
      subtitle: 'Countries supported around the World',
      desc: 'Bringing you closer to the edge.',
    },
    {
      title: '99.99%',
      subtitle: 'Uptime',
      desc: 'Exceptional architecture for superior reliability.',
    },
  ]

  return (
    <section className="w-full bg-[#3D2510] py-20 px-6 text-[#111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center md:text-left">
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="text-5xl font-semibold">{item.title}</div>
            <div className="text-xl font-medium mt-4">{item.subtitle}</div>
            <p className="text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

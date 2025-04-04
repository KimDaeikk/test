'use client'

import Image from 'next/image'

export default function PartnerSlider() {
  const logos = [
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
    '/logos/aethir.png',
    '/logos/filliquid.png',
  ]

  return (
    <div className="partner-slider">
      <ul className="slider-track">
        {[...logos, ...logos].map((src, idx) => (
          <li key={idx} className="slider-item">
            <Image
              src={src}
              alt={`logo-${idx}`}
              width={120}
              height={40}
              style={{ objectFit: 'contain', opacity: 0.8 }}
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        .partner-slider {
          overflow: hidden;
          width: 100%;
          background: #fff8f8;
          padding: 24px 0;
        }

        .slider-track {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .slider-item {
          flex-shrink: 0;
          margin: 0 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .slider-item {
            margin: 0 20px;
          }
        }
      `}</style>
    </div>
  )
}

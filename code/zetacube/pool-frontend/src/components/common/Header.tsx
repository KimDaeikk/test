'use client'

import Link from 'next/link'
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center text-sm font-medium z-50 relative">
      {/* 로고 */}
      <Link href="/" className="text-xl font-bold tracking-wide text-[#3B2F26]">
        DANU
      </Link>

      {/* 네비게이션 메뉴 */}
      <nav
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[clamp(3px,2.5vw,14px)] text-sm max-w-full"
        >
        {['Fuel the Pools', 'Tap the Pools', 'Swap', 'Roadmap', 'Docs'].map((text, idx) => (
            <Link
                key={idx}
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1.5px] after:bg-[#3D2510] after:bottom-[-5px] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-1050"
            >
                {text}
            </Link>
        ))}
      </nav>

      {/* 소셜 아이콘 + 로그인 */}
      <div className="flex items-center gap-3 text-[#3B2F26]">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <Link
          href="#"
          className="ml-4 border px-2 py-1 rounded-full border-[#3B2F26] hover:bg-[#3B2F26] hover:text-white transition"
        >
          Login
        </Link>
      </div>
    </header>
  )
}

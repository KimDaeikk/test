"use client"

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { FaGithub, FaDiscord, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveDropdown,
} from '@/store/slices/uiSlice'

export default function Header() {
  const dispatch = useDispatch()
  const mobileMenuOpen = useSelector((state: any) => state.ui.mobileMenuOpen)
  const activeDropdown = useSelector((state: any) => state.ui.activeDropdown)

  const navLinks = [
    {
      label: 'Fuel the Pools',
      href: '#',
      submenu: [
        { label: 'FilMountain', href: '#' },
        { label: 'AethirLake', href: '#' },
      ],
    },
    { label: 'Tap the Pools', href: '#' },
    { label: 'Swap', href: '#' },
    { label: 'Roadmap', href: '#' },
    { label: 'Docs', href: '#' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center text-sm font-medium z-[60] bg-[#F7F5EB]">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold tracking-wide text-[#3B2F26]">
          DANU
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#3B2F26]">
          {navLinks.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <Link
                  href={item.href}
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:h-[1.5px] after:bg-[#3D2510] after:bottom-[-5px] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                >
                  {item.label}
                </Link>
                {item.submenu && <span className="text-xs">▼</span>}
              </div>
              {item.submenu && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 invisible z-50">
                  {item.submenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-[#3B2F26] whitespace-nowrap"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 소셜 아이콘 + 로그인 */}
        <div className="hidden md:flex items-center gap-3 text-[#3B2F26]">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <Link
            href="#"
            className="ml-4 border px-3 py-1 rounded-full border-[#3B2F26] hover:bg-[#3B2F26] hover:text-white transition"
          >
            Login
          </Link>
        </div>

        {/* 모바일 메뉴 아이콘 */}
        <button className="md:hidden text-xl text-[#3B2F26]" onClick={() => dispatch(toggleMobileMenu())}>
          <FaBars />
        </button>
      </header>

      {/* 슬라이딩 메뉴 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 inset-x-0 bottom-0 z-40 bg-[#F7F5EB] pt-[70px] px-6 overflow-y-auto"
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-6 text-2xl text-[#3B2F26]"
              onClick={() => dispatch(closeMobileMenu())}
            >
              <FaTimes />
            </button>

            {/* 모바일 메뉴 링크 */}
            <div className="flex flex-col items-start gap-6 w-full text-left text-[#3B2F26] text-lg">
              {navLinks.map((item, idx) => (
                <div key={idx} className="w-full">
                  <button
                    onClick={() =>
                      item.submenu
                        ? dispatch(setActiveDropdown(activeDropdown === item.label ? null : item.label))
                        : dispatch(closeMobileMenu())
                    }
                    className="w-full text-left border-b border-[#3B2F26] pb-2 flex items-center justify-between"
                  >
                    {item.label}
                    {item.submenu && <span className="text-sm">▼</span>}
                  </button>
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 mt-2 space-y-2"
                      >
                        {item.submenu.map((sub, subIdx) => (
                          <Link key={subIdx} href={sub.href} className="block text-sm text-[#3B2F26]">
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* 로그인 버튼 */}
              <Link
                href="#"
                className="mt-8 border px-4 py-2 rounded-full border-[#3B2F26] hover:bg-[#3B2F26] hover:text-white transition"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
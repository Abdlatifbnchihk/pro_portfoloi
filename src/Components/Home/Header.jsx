import React, { useState, useEffect } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState('#')

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-detect active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const handleScroll = () => {
      let current = '#'
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const offsetTop = rect.top + window.scrollY - 100
        if (window.scrollY >= offsetTop && window.scrollY < offsetTop + section.offsetHeight) {
          current = `#${section.id}`
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keep CSS variable for header height
  useEffect(() => {
    const setHeaderHeightVar = () => {
      const headerEl = document.querySelector('header')
      const h = headerEl ? `${headerEl.offsetHeight}px` : '64px'
      document.documentElement.style.setProperty('--header-height', h)
    }
    setHeaderHeightVar()
    window.addEventListener('resize', setHeaderHeightVar)
    return () => window.removeEventListener('resize', setHeaderHeightVar)
  }, [])

  return (
    <header
      className={`w-full backdrop-blur-md fixed top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'shadow-md bg-white/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#">
              <span className="font-semibold text-lg text-[#92b115ee]">A.Ben Cheikh</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:space-x-6 md:ml-auto mr-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`transition-colors duration-150 ${
                  active === link.href
                    ? 'text-[#92b115ee] font-semibold'
                    : 'text-slate-700 hover:text-[#9ba95fee]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-[#92b115ee] text-white rounded-md text-sm font-medium hover:bg-[#71822bee] transition"
            >
              Hire me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#92b115ee]"
            >
              <svg
                className={`${open ? 'hidden' : 'block'} h-6 w-6 cursor-pointer text-[#92b115ee]`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${open ? 'block' : 'hidden'} h-6 w-6 cursor-pointer text-[#92b115ee]`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-slate-100 bg-white overflow-hidden transform origin-top transition-all duration-300 ${
          open
            ? 'max-h-96 opacity-100 scale-y-100'
            : 'max-h-0 opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setOpen(false)
                setActive(link.href)
              }}
              className={`block px-2 py-2 rounded-md ${
                active === link.href
                  ? 'text-[#92b115ee] bg-slate-50'
                  : 'text-slate-700 hover:text-[#9ba95fee] hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-1 px-3 py-2 bg-[#92b115ee] text-white rounded-md text-center font-medium hover:bg-[#71822bee]"
            onClick={() => setOpen(false)}
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

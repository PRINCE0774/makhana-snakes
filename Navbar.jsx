import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import brandMark from '../assets/brand-mark.svg'
import ArrowIcon from './ArrowIcon.jsx'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About us' },
  { to: '/pricing', label: 'Pricing' },
]

const linkClass = ({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-primary' : 'text-slate-600 hover:text-secondary'}`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2.5" aria-label="WebPulse Media home" onClick={closeMenu}>
          <img src={brandMark} alt="" className="h-10 w-10" />
          <span className="font-display text-lg font-extrabold tracking-tight text-secondary">webpulse<span className="text-primary">.</span></span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>)}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="button-primary !px-5 !py-3">
            Let’s talk <ArrowIcon />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-secondary transition hover:border-primary/30 hover:text-primary md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isOpen ? <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full border-b border-slate-100 bg-white p-5 shadow-xl md:hidden">
          <div className="section-shell flex flex-col gap-5 !px-0">
            {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass} onClick={closeMenu}>{link.label}</NavLink>)}
            <Link to="/contact" className="button-primary w-full">Let’s talk <ArrowIcon /></Link>
          </div>
        </div>
      )}
    </header>
  )
}

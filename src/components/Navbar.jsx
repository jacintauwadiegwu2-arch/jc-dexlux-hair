import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our story' },
  { to: '/collections', label: 'Collections' },
  { to: '/reviews', label: 'Reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-blush/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-12 lg:px-20">
        <Link to="/" onClick={closeMenu} className="group flex flex-col leading-none">
          <span className="font-display text-[25px] font-semibold tracking-[0.02em]">JC DEX<span className="text-rose">Lux</span></span>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.32em]">LUXURY HAIR, YOUR WAY</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/book" className="button-dark px-6 py-3 text-[11px]">BOOK A CONSULTATION</Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 top-full border-b border-ink/10 bg-blush px-6 pb-6 pt-2 shadow-lg md:hidden" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'text-rose' : ''}`}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/book" onClick={closeMenu} className="button-dark mt-3 w-full">BOOK A CONSULTATION</Link>
        </nav>
      )}
    </header>
  )
}
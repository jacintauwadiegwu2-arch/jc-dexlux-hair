import { ArrowUpRight, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 md:px-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
        <div>
          <Link to="/" className="font-display text-3xl">JC DEX<span className="text-rose">Lux</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">Considered quality. Unmistakable confidence. Luxury hair, made personal.</p>
        </div>
        <div>
          <p className="eyebrow text-rose">EXPLORE</p>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/75">
            <Link to="/about" className="hover:text-white">Our story</Link>
            <Link to="/collections" className="hover:text-white">Collections</Link>
            <Link to="/reviews" className="hover:text-white">Reviews</Link>
            <Link to="/book" className="hover:text-white">Book a consult</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-rose">A LITTLE MORE LUXE</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
            <Instagram size={17} /> Follow along <ArrowUpRight size={14} />
          </a>
          <p className="mt-3 text-xs text-white/45">For appointments & inquiries, we’re one message away.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-[10px] tracking-[0.12em] text-white/40 md:px-20 md:text-left">© {new Date().getFullYear()} JC DEXLux HAIR. MADE TO FEEL LIKE YOU.</div>
    </footer>
  )
}
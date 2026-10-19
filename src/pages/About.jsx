import { Heart, Leaf, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal.js'

const values = [
  { icon: Sparkles, number: '01', title: 'Thoughtful quality', body: 'Every texture is selected for a beautiful finish and a feel that lasts beyond the first wear.' },
  { icon: Heart, number: '02', title: 'Personal, always', body: 'Your style is yours. We take the time to listen, guide and help you find your perfect match.' },
  { icon: Leaf, number: '03', title: 'Ease in every detail', body: 'From the first conversation to your final look, we make luxury feel refreshingly simple.' },
]

export default function About() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#f0e7e3]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-14 md:px-20 md:py-20 lg:grid-cols-2 lg:gap-20">
          
          <div className="max-w-xl">
            <p className="eyebrow text-rose reveal delay-1">MORE THAN A LOOK</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl reveal delay-2">
              Luxury that feels like <span className="italic text-rose">you.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink/65 reveal delay-3">
              JC DEXLux HAIR was created for the woman who knows how she wants to feel: confident, beautiful and entirely herself.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-ink/60 reveal delay-4">
              We bring considered quality and a personal touch to every detail, helping you find a look that feels less like a transformation and more like a return to you.
            </p>
            <Link to="/book" className="button-dark mt-8 reveal delay-5">
              LET’S FIND YOUR LOOK
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] reveal delay-3">
            <div className="aspect-[4/5] overflow-hidden bg-[#d9c7bd] reveal-image reveal delay-3">
              <img 
                src="/chika.jpg" 
                alt="A relaxed portrait with soft, flowing hair" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-5 -left-3 bg-rose px-6 py-5 text-white sm:-left-6 reveal delay-5">
              <p className="font-display text-2xl italic">Feel like yourself.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: VALUES */}
      <section className="section-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-rose reveal delay-1">WHAT WE BELIEVE</p>
          <h2 className="section-title mt-3 reveal delay-2">Good hair should feel good.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, number, title, body }, i) => (
            <article 
              key={number} 
              className={`border-t border-ink/15 pt-6 reveal delay-${i + 1}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl text-rose">{number}</span>
                <Icon size={20} strokeWidth={1.4} className="text-rose" />
              </div>
              <h3 className="mt-7 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/60">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="bg-ink px-6 py-14 text-center text-white md:px-20 md:py-16">
        <p className="eyebrow text-rose reveal delay-1">YOUR NEXT CHAPTER</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl sm:text-5xl reveal delay-2">
          Let’s find the hair that feels like home.
        </h2>
        <Link to="/book" className="button-light mt-8 inline-block reveal delay-3">
          BOOK A CONSULTATION
        </Link>
      </section>

    </div>
  )
}
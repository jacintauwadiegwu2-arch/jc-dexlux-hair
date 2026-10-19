import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const reviews = [
  { quote: 'The hair feels incredible, and the whole experience felt so personal. I finally found the texture I had been searching for.', name: 'Assumpta C.', detail: 'A new favorite', initials: 'AC' },
  { quote: 'I was helped with the length and texture before ordering. It looks so natural and made getting ready feel exciting again.', name: 'Mama Rex.', detail: 'Bouncy · 30”', initials: 'MR' },
  { quote: 'Beautiful quality, lovely communication and the softest waves. I have already been telling all my friends about JC DEXLux.', name: 'Toni B.', detail: 'The Nia · 22”', initials: 'TB' },
  { quote: 'From my first message I felt taken care of. The final look is exactly what I wanted, only better.', name: 'Kamso.', detail: 'A returning client', initials: 'KK' },
]

export default function Reviews() {
  return (
    <>
      <section className="bg-[#f0e7e3] px-6 py-16 text-center md:px-20 md:py-20"><p className="eyebrow text-rose">KIND WORDS, REAL FEELINGS</p><h1 className="mt-4 font-display text-5xl sm:text-6xl">Worn with <span className="italic text-rose">love.</span></h1><div className="mt-5 flex justify-center gap-1 text-rose" aria-label="Five out of five stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}</div><p className="mt-3 text-sm text-ink/55">A little love from our community.</p></section>
      <section className="section-wrap"><div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">{reviews.map((review) => <article key={review.name} className="border-t border-ink/15 pt-6"><div className="flex gap-1 text-rose" aria-label="Five out of five stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" />)}</div><blockquote className="mt-5 font-display text-2xl leading-snug">“{review.quote}”</blockquote><div className="mt-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e7e3] text-[11px] font-semibold text-rose">{review.initials}</div><div><p className="text-sm font-semibold">{review.name}</p><p className="mt-1 text-[11px] text-ink/50">{review.detail}</p></div></div></article>)}</div></section>
      <section className="bg-ink px-6 py-14 text-center text-white md:px-20"><h2 className="font-display text-3xl sm:text-4xl">Your story could be next.</h2><Link to="/book" className="button-light mt-7">START YOURS</Link></section>
    </>
  )
}
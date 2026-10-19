import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import { useReveal } from '../useReveal.js'

function Home() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-blush">
        <div className="mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-10 px-6 pb-12 pt-12 md:px-20 md:py-16 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-12">

          <div className="relative z-10 max-w-xl">
            <p className="eyebrow mb-6 flex items-center gap-2 reveal delay-1">
              <span className="h-px w-8 bg-rose" /> THE ART OF FEELING LIKE YOU
            </p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,6.4rem)] leading-[0.97] reveal delay-2">
              A little more <span className="italic text-rose">you.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-ink/65 md:text-lg reveal delay-3">
              Luxury hair, thoughtfully chosen. Meet the textures, lengths and finishes that make getting ready feel like coming home to yourself.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row reveal delay-4">
              <Link to="/collections" className="button-dark w-full sm:w-auto">
                DISCOVER THE COLLECTION <ArrowUpRight size={15} />
              </Link>
              <Link to="/about" className="button-outline w-full sm:w-auto">
                OUR STORY
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-3 border-t border-ink/10 pt-5 reveal delay-5">
              <Sparkles size={16} className="text-rose" />
              <p className="text-[10px] font-semibold tracking-[0.16em]">
                PREMIUM TEXTURES. PERSONAL SERVICE. ALWAYS.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto reveal delay-3">
            <div className="aspect-[4/4.5] overflow-hidden bg-[#e7d9d4] reveal-image reveal delay-3">
              <video
                src="/hair1.mp4"
                className="h-full w-full object-cover object-[center_35%]"
                playsInline
                autoPlay
                loop
                muted
              />
            </div>
            <div className="absolute -bottom-4 left-3 max-w-[210px] bg-white px-5 py-4 shadow-sm sm:-left-7 sm:bottom-8 sm:max-w-[245px] sm:px-6 sm:py-5 reveal delay-6">
              <p className="font-display text-xl italic">Made for your moment.</p>
              <p className="mt-2 text-[9px] tracking-[0.16em] text-ink/55">
                QUALITY YOU CAN FEEL
              </p>
            </div>
            <div className="absolute -right-3 top-6 hidden h-[78px] w-[78px] items-center justify-center rounded-full border border-white/80 bg-rose text-center text-[9px] font-semibold leading-4 tracking-[0.12em] text-white sm:flex reveal delay-7">
              YOUR<br />CROWN<br />YOUR WAY
            </div>
          </div>

        </div>

        <a href="#favorites" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] tracking-[0.18em] text-ink/50 lg:flex reveal delay-8">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
      </section>

      {/* ===================== FAVORITES ===================== */}
      <section id="favorites" className="section-wrap">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-rose reveal delay-1">THE SIGNATURE EDIT</p>
            <h2 className="section-title mt-3 reveal delay-2">Your new favorites.</h2>
          </div>
          <Link to="/collections" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] hover:text-rose reveal delay-3">
            VIEW ALL COLLECTIONS <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, i) => (
            <div key={product.id} className={`reveal delay-${(i % 3) + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* ===================== DETAILS ===================== */}
      <section className="bg-[#f0e7e3]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-16 md:px-20 md:py-20 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-lg">
            <p className="eyebrow text-rose reveal delay-1">A GOOD HAIR DAY, ON REPEAT</p>
            <h2 className="section-title mt-4 reveal delay-2">The details make the difference.</h2>
            <p className="mt-5 text-sm leading-7 text-ink/65 reveal delay-3">
              We believe luxury should feel personal. Find your perfect match with considered textures, effortless wear and a little help from our team.
            </p>
            <Link to="/about" className="button-dark mt-7 reveal delay-4">
              GET TO KNOW US <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="aspect-[4/5] overflow-hidden bg-[#d9c7bd] reveal-image reveal delay-2">
              <img
                src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85"
                alt="Woman with voluminous natural curls"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-10 flex aspect-[4/5] flex-col justify-end bg-ink p-5 text-white sm:p-8 reveal delay-3">
              <span className="font-display text-5xl text-rose sm:text-6xl">01</span>
              <p className="mt-4 font-display text-xl sm:text-2xl">Find your texture.</p>
              <p className="mt-2 text-xs leading-5 text-white/55">
                A signature look, chosen to feel unmistakably yours.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
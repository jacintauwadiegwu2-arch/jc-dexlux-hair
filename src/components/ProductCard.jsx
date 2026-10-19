import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="group">
      <Link to="/book" state={{ hairChoice: product.name }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e1dc]">
          <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
          <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[9px] font-semibold tracking-[0.16em]">{product.tag}</span>
          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-white text-ink transition group-hover:bg-rose group-hover:text-white" aria-hidden="true"><ArrowUpRight size={17} /></span>
        </div>
        <div className="flex items-start justify-between gap-4 pt-4">
          <div>
            <h3 className="font-display text-2xl">{product.name}</h3>
            <p className="mt-1 text-xs text-ink/55">{product.texture}</p>
          </div>
          <p className="pt-1 text-sm font-medium">{product.price}</p>
        </div>
      </Link>
    </article>
  )
}
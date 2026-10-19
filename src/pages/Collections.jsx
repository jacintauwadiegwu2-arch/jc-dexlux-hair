import { useState } from "react";
import { useReveal } from "../useReveal.js";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js"; 

export default function Collections() {
  const [filter, setFilter] = useState("All");

  // Pass [filter] so the hook re-runs and finds new items when the filter changes
  const revealRef = useReveal([filter]); 

  // Filter the products based on the selected category
  const filteredProducts = filter === "All" 
    ? products 
    : products.filter((product) => 
        product.category?.toLowerCase() === filter.toLowerCase()
      );

  return (
    <div ref={revealRef} className="section-wrap">
      
      {/* Page Header */}
      <div className="mb-12 text-center">
        <p className="eyebrow text-rose reveal delay-1">THE COLLECTION</p>
        <h1 className="section-title mt-3 reveal delay-2">Find your signature look.</h1>
        <p className="mt-4 max-w-lg mx-auto text-ink/65 reveal delay-3">
          Explore our thoughtfully curated textures, lengths, and finishes.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3 reveal delay-3">
        {["All", "Bundles", "Closures", "Frontals"].map((category) => {
          // Count how many products in this category
          const count = category === "All" 
            ? products.length 
            : products.filter(p => p.category === category).length;

          // Hide button if no products in that category (but always show "All")
          if (category !== "All" && count === 0) return null;

          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`button-outline text-xs ${
                filter === category ? "bg-ink text-white" : ""
              }`}
            >
              {category.toUpperCase()} ({count})
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-ink/50 py-10 reveal">
            No products found in this category.
          </p>
        ) : (
          filteredProducts.map((product, i) => (
            <div key={product.id} className={`reveal delay-${(i % 3) + 1}`}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>

    </div>
  );
}
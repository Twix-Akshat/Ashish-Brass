import { ArrowRight } from 'lucide-react';
import { productsData } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const featuredIds = ['ri-10011', 'angle-900', 'tvs-type'];
  const featuredProducts = featuredIds.flatMap(id => {
    const p = productsData.products.find(prod => prod.id === id);
    return p ? [p] : [];
  });

  return (
    <section id="products" className="bg-[#e6d9bf] py-14" aria-label="Products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#2e3d3b] sm:text-3xl">
            {productsData.sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-[#b8a24f] sm:text-base">{productsData.subtitle}</p>
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={productsData.viewAllLink.href}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#b8a24f] px-5 py-2.5 text-sm font-semibold text-[#b8a24f] transition-colors hover:bg-[#b8a24f] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8a24f]"
          >
            {productsData.viewAllLink.label}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

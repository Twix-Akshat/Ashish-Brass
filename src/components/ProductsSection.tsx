import { ArrowRight } from 'lucide-react';
import { productsData } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  return (
    <section id="products" className="bg-neutral-50 py-20" aria-label="Products">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {productsData.sectionTitle}
          </h2>
          <p className="mt-3 text-lg text-neutral-500">{productsData.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productsData.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <a
            href={productsData.viewAllLink.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-600 px-6 py-2.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {productsData.viewAllLink.label}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

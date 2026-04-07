import { productsData } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="min-h-screen bg-[#e6d9bf]">

        {/* Page hero */}
        <section className="bg-[#2e3d3b] px-4 pb-14 pt-30 sm:px-6 sm:pb-18 sm:pt-34">
          <div className="mx-auto max-w-5xl">
            <span className="mb-3 inline-block rounded-full bg-[#b8a24f]/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#e6d9bf]">
              Catalogue
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {productsData.sectionTitle}
            </h1>
            <p className="mt-3 text-sm text-[#7d8c8a] sm:text-base">{productsData.subtitle}</p>
            <p className="mt-1.5 text-xs text-[#b8a24f]">
              {productsData.products.length} products available
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productsData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 rounded-2xl bg-[#2e3d3b] p-7 text-center">
            <h2 className="text-lg font-bold text-white">Need a Custom Solution?</h2>
            <p className="mt-2 text-sm text-[#7d8c8a]">
              We can engineer bespoke brass components tailored to your specific requirements.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/#contact"
                className="rounded-xl bg-[#b8a24f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a66a3a]"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+919328101335"
                className="text-sm font-medium text-[#e6d9bf] hover:text-white transition-colors"
              >
                +91-9328101335
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

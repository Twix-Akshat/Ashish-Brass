'use client';

import Link from 'next/link';
import { productsData } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 py-12 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              {productsData.sectionTitle}
            </h1>
            <p className="mt-4 text-lg text-neutral-600">{productsData.subtitle}</p>
            <p className="mt-2 text-sm text-neutral-500">
              Total Products: <strong>{productsData.products.length}</strong>
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productsData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-2xl bg-white p-8 text-center border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900">Need a Custom Solution?</h2>
            <p className="mt-2 text-neutral-600">
              We can engineer bespoke brass components tailored to your specific requirements.
            </p>
            <p className="mt-6 text-neutral-700">
              <strong>Contact us:</strong> +91-9328101335 or email kdp1971@gmail.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

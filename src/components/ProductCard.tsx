import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/data/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-lg ${
        product.isFeatured ? 'border-amber-400' : 'border-neutral-200'
      }`}
    >
      {/* Image / placeholder */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-t-2xl bg-neutral-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <svg
            className="h-16 w-16 text-neutral-300"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill="currentColor" />
          </svg>
        )}
        {product.isFeatured && (
          <span className="absolute top-3 left-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-neutral-900">{product.name}</h3>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Specs */}
        <ul className="flex flex-col gap-1">
          {product.specs.map((spec) => (
            <li key={spec} className="text-xs text-neutral-500">
              • {spec}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={product.viewDetailsHref}
          className="mt-auto flex items-center gap-1 text-sm font-medium text-amber-700 transition-colors hover:text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
        >
          View Details <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

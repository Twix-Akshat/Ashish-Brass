import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/data/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-md ${
        product.isFeatured ? 'border-[#b8a24f]' : 'border-[#e6d9bf]/60'
      }`}
    >
      {/* Image / placeholder */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-t-2xl bg-[#e6d9bf]">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <svg className="h-14 w-14 text-[#7d8c8a]" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill="currentColor" />
          </svg>
        )}
        {product.isFeatured && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-[#b8a24f] px-2.5 py-0.5 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <h3 className="text-sm font-semibold text-[#2e3d3b]">{product.name}</h3>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#e6d9bf]/30 px-2.5 py-0.5 text-xs font-medium text-[#b8a24f]">
                {tag}
              </span>
            ))}
          </div>
        )}

        <ul className="flex flex-col gap-1">
          {product.specs.map((spec) => (
            <li key={spec} className="text-xs text-[#7d8c8a]">• {spec}</li>
          ))}
        </ul>

        <a
          href={product.viewDetailsHref || '/#contact'}
          className="mt-auto flex items-center gap-1 text-xs font-semibold text-[#b8a24f] hover:text-[#2e3d3b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8a24f] rounded"
        >
          View Details <ArrowRight size={13} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

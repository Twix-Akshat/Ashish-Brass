import { Phone, ArrowRight } from 'lucide-react';
import { ctaData } from '@/data/cta';

export default function CtaSection() {
  return (
    <section className="bg-[#2e3d3b] py-16" aria-label="Call to action">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {ctaData.headline}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#7d8c8a] sm:text-base">
          {ctaData.description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${ctaData.contactDetail.replace(/[^+\d]/g, '')}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#b8a24f] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#a66a3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf] sm:w-auto"
          >
            {ctaData.buttonLabel}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a
            href={`tel:${ctaData.contactDetail.replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-2 text-sm font-medium text-[#e6d9bf] hover:text-white transition-colors"
          >
            <Phone size={15} aria-hidden="true" />
            {ctaData.contactDetail}
          </a>
        </div>
      </div>
    </section>
  );
}

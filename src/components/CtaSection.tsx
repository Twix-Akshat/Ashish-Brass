import { Phone } from 'lucide-react';
import { ctaData } from '@/data/cta';

export default function CtaSection() {
  return (
    <section
      className="bg-amber-600 py-20"
      aria-label="Call to action"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {ctaData.headline}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-amber-100">
          {ctaData.description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={ctaData.buttonHref}
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-amber-700 transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-600"
          >
            {ctaData.buttonLabel}
          </a>
          <span className="flex items-center gap-2 text-sm font-medium text-amber-100">
            <Phone size={15} aria-hidden="true" />
            {ctaData.contactDetail}
          </span>
        </div>
      </div>
    </section>
  );
}

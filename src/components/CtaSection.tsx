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
        <div className="mt-8 flex items-center justify-center">
          <span className="flex items-center gap-2 text-sm font-medium text-amber-100">
            <Phone size={15} aria-hidden="true" />
            {ctaData.contactDetail}
          </span>
        </div>
      </div>
    </section>
  );
}

import { Zap, Globe, Shield, Award, type LucideIcon } from 'lucide-react';
import { features } from '@/data/features';

const iconMap: Record<string, LucideIcon> = { Zap, Globe, Shield, Award };

export default function FeaturesStrip() {
  return (
    <section className="bg-white py-14" aria-label="Key features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Zap;
            return (
              <div key={feature.title} className="flex flex-1 flex-col gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Zap, Globe, Shield, Award, type LucideIcon } from 'lucide-react';
import { features } from '@/data/features';

const iconMap: Record<string, LucideIcon> = { Zap, Globe, Shield, Award };

export default function FeaturesStrip() {
  return (
    <section className="bg-white py-10" aria-label="Key features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mobile: vertical stack; md+: horizontal row */}
        <div className="flex flex-col divide-y divide-[#e6d9bf]/40 md:flex-row md:divide-x md:divide-y-0">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Zap;
            return (
              <div key={feature.title} className="flex items-start gap-4 py-5 md:flex-1 md:flex-col md:px-6 md:py-0 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e6d9bf]/30 text-[#b8a24f]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2e3d3b]">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#b8a24f]">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

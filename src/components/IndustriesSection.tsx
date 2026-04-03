import {
  Droplets,
  Zap,
  Car,
  Wind,
  Gauge,
  Cpu,
  Hammer,
  Ship,
  type LucideIcon,
} from 'lucide-react';
import { industriesData } from '@/data/industries';

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Zap,
  Car,
  Wind,
  Gauge,
  Cpu,
  Hammer,
  Ship,
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20" aria-label="Industries served">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {industriesData.sectionTitle}
          </h2>
          <p className="mt-3 text-lg text-neutral-500">{industriesData.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {industriesData.industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Zap;
            return (
              <div
                key={industry.name}
                className="flex flex-col gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-5 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">{industry.name}</h3>
                <p className="text-xs leading-relaxed text-neutral-500">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

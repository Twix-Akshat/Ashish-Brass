import {
  Droplets, Zap, Car, Wind, Gauge, Cpu, Hammer, Ship, type LucideIcon,
} from 'lucide-react';
import { industriesData } from '@/data/industries';

const iconMap: Record<string, LucideIcon> = {
  Droplets, Zap, Car, Wind, Gauge, Cpu, Hammer, Ship,
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-14" aria-label="Industries served">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#2e3d3b] sm:text-3xl">
            {industriesData.sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-[#b8a24f] sm:text-base">{industriesData.subtitle}</p>
        </div>

        {/* 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {industriesData.industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Zap;
            return (
              <div
                key={industry.name}
                className="flex flex-col gap-2.5 rounded-2xl border border-[#e6d9bf]/50 bg-[#e6d9bf] p-4 transition-shadow duration-200 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e6d9bf]/40 text-[#b8a24f]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="text-xs font-semibold text-[#2e3d3b] sm:text-sm">{industry.name}</h3>
                <p className="text-xs leading-relaxed text-[#7d8c8a]">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

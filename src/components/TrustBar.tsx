import {
  BadgeCheck,
  Globe,
  Factory,
  Microscope,
  Truck,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import { trustBadges } from '@/data/trust';

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck, Globe, Factory, Microscope, Truck, Leaf,
};

export default function TrustBar() {
  return (
    <section className="bg-[#e6d9bf] py-6" aria-label="Trust and certifications">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Scrollable row on mobile, wrapping on larger */}
        <div className="flex gap-4 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {trustBadges.map((badge) => {
            const Icon = iconMap[badge.icon] ?? BadgeCheck;
            return (
              <div
                key={badge.label}
                className="flex shrink-0 items-center gap-2 rounded-full border border-[#7d8c8a]/40 bg-white px-3.5 py-2"
              >
                <Icon size={15} className="text-[#b8a24f]" aria-hidden="true" />
                <span className="whitespace-nowrap text-xs font-medium text-[#2e3d3b]">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

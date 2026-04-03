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
  BadgeCheck,
  Globe,
  Factory,
  Microscope,
  Truck,
  Leaf,
};

export default function TrustBar() {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50 py-8" aria-label="Trust and certifications">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
          {trustBadges.map((badge) => {
            const Icon = iconMap[badge.icon] ?? BadgeCheck;
            return (
              <div key={badge.label} className="flex items-center gap-2">
                <Icon size={18} className="shrink-0 text-amber-600" aria-hidden="true" />
                <span className="text-sm font-medium text-neutral-700">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

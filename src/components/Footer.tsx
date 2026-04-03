import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { footerData } from '@/data/footer';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-300" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold text-white">{footerData.companyName}</p>
            <p className="text-sm leading-relaxed text-neutral-400">{footerData.tagline}</p>
            <address className="not-italic flex flex-col gap-2 text-sm">
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                {footerData.address}
              </span>
              <a
                href={`tel:${footerData.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone size={14} className="shrink-0 text-amber-500" aria-hidden="true" />
                {footerData.phone}
              </a>
              <a
                href={`mailto:${footerData.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail size={14} className="shrink-0 text-amber-500" aria-hidden="true" />
                {footerData.email}
              </a>
              <span className="flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-amber-500" aria-hidden="true" />
                {footerData.businessHours}
              </span>
            </address>
          </div>

          {/* Link columns */}
          {footerData.linkColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {footerData.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

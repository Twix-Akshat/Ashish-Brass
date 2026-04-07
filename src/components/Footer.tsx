import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { footerData } from '@/data/footer';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2e3d3b] text-[#7d8c8a]" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Top: brand + contact stacked on mobile, grid on md+ */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <p className="text-base font-bold text-white">{footerData.companyName}</p>
            <p className="text-xs leading-relaxed text-[#7d8c8a]">{footerData.tagline}</p>
            <address className="not-italic flex flex-col gap-2 text-xs">
              <span className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#b8a24f]" aria-hidden="true" />
                {footerData.address}
              </span>
              {footerData.phone.split('/').map((phoneStr, index) => {
                const number = phoneStr.trim();
                return (
                  <a key={index} href={`tel:${number.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[#e6d9bf] transition-colors">
                    <Phone size={13} className="shrink-0 text-[#b8a24f]" aria-hidden="true" />
                    {number}
                  </a>
                );
              })}
              <a href={`mailto:${footerData.email}`} className="flex items-center gap-2 hover:text-[#e6d9bf] transition-colors">
                <Mail size={13} className="shrink-0 text-[#b8a24f]" aria-hidden="true" />
                {footerData.email}
              </a>
            </address>
          </div>

          {/* Link columns */}
          {footerData.linkColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#7d8c8a] hover:text-[#e6d9bf] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8a24f] rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#2e3d3b] pt-5 text-center text-xs text-[#b8a24f]">
          © {new Date().getFullYear()} {footerData.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

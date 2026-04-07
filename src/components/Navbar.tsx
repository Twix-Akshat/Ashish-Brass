'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, contactPhone } from '@/data/nav';

/**
 * variant="transparent" — used on hero pages (homepage).
 *   Starts transparent over dark hero, becomes solid on scroll.
 * variant="solid" — used on inner pages with light backgrounds.
 *   Always solid [#2e3d3b] so text is always visible.
 */
export default function Navbar({ variant = 'transparent' }: { variant?: 'transparent' | 'solid' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isSolid = variant === 'solid' || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isSolid ? 'bg-[#2e3d3b] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a href="/" className="text-lg font-bold tracking-tight text-white">
          Ashish Brass
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#e6d9bf] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf] rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop phone */}
        <a
          href={`tel:${contactPhone.replace(/\s/g, '')}`}
          className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#e6d9bf] hover:text-white transition-colors"
        >
          <Phone size={14} />
          {contactPhone}
        </a>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${contactPhone.replace(/\s/g, '')}`}
            aria-label="Call us"
            className="rounded-full p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf]"
          >
            <Phone size={18} />
          </a>
          <button
            className="rounded-full p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf]"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden bg-[#2e3d3b] border-t border-[#2e3d3b]">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[#e6d9bf] hover:bg-[#2e3d3b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-xl bg-[#b8a24f] py-3 text-center text-sm font-semibold text-white hover:bg-[#a66a3a] transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

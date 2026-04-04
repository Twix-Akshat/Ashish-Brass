'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, contactPhone } from '@/data/nav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="/"
          className={`text-xl font-bold tracking-tight transition-colors ${
            scrolled ? 'text-amber-700' : 'text-white'
          }`}
        >
          Ashish Brass
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                  scrolled ? 'text-neutral-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${contactPhone.replace(/\s/g, '')}`}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-amber-600 ${
              scrolled ? 'text-neutral-600' : 'text-white'
            }`}
          >
            <Phone size={14} />
            {contactPhone}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`md:hidden rounded p-1.5 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
            scrolled ? 'text-neutral-700' : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white border-t border-neutral-100 shadow-lg"
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-amber-50 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-neutral-100 px-4 py-3 flex flex-col gap-2">
            <a
              href={`tel:${contactPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-sm text-neutral-600"
            >
              <Phone size={14} />
              {contactPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

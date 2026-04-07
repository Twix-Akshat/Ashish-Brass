'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroData } from '@/data/hero';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#2e3d3b]"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/hero-bg-image.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-50 grayscale"
        aria-hidden="true"
      />

      {/* Dark teal overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#2e3d3b]/80 via-[#2e3d3b]/60 to-[#2e3d3b]/90"
        aria-hidden="true"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #e6d9bf 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative w-full px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span className="mb-4 inline-block rounded-full bg-[#b8a24f]/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#e6d9bf]">
              {heroData.subheadline}
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {heroData.headline}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#7d8c8a] sm:text-lg">
              {heroData.description}
            </p>

            {/* CTAs */}
            <div className="w-full">
              <a
                href={heroData.primaryCta.href}
                className="block w-full rounded-xl bg-[#b8a24f] px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-[#a66a3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2e3d3b]"
              >
                {heroData.primaryCta.label}
              </a>
            </div>
          </motion.div>

          {/* Stats — 2×2 on mobile, 4-col on sm+ */}
          <motion.div
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
          >
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#2e3d3b] bg-[#2e3d3b]/70 p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-[#e6d9bf]">{stat.value}</p>
                <p className="mt-0.5 text-xs text-[#7d8c8a]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

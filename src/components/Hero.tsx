'use client';

import { motion } from 'framer-motion';
import { heroData } from '@/data/hero';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-neutral-900"
      aria-label="Hero"
    >
      {/* Background gradient + subtle grid pattern */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.15) 39px,rgba(255,255,255,.15) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.15) 39px,rgba(255,255,255,.15) 40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:gap-12">
          {/* Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              {heroData.subheadline}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroData.headline}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-300">
              {heroData.description}
            </p>
            <div className="flex flex-col gap-4 max-w-xl">
              <a
                href={heroData.primaryCta.href}
                className="rounded-full bg-amber-600 px-7 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                {heroData.primaryCta.label}
              </a>
              <p className="text-sm text-neutral-400 text-center">
                ✓ ISO Certified Quality | ✓ 50+ Countries | ✓ Expert Support
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:w-72 md:shrink-0 lg:w-80"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            {heroData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-amber-400">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

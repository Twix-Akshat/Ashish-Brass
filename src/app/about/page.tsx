import { Award, Zap, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="min-h-screen bg-[#e6d9bf]">

        {/* Page hero */}
        <section className="bg-[#2e3d3b] px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-36">
          <span className="mb-3 inline-block rounded-full bg-[#b8a24f]/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#e6d9bf]">
            Who We Are
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            About Ashish Brass Industries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#7d8c8a] sm:text-lg">
            Leading global supplier of premium brass components, engineered for performance and reliability.
          </p>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">

          {/* About + Company Info */}
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e6d9bf]/40">
              <h2 className="mb-4 text-xl font-bold text-[#2e3d3b]">About Our Organisation</h2>
              <div className="space-y-3 text-sm leading-relaxed text-[#b8a24f]">
                <p>
                  Ashish Brass Industries is experiencing growth at an accelerated pace since its inception in 2018. The profound knowledge and rich experience of the Proprietor in the arena of Brass Products has assisted the company to enjoy healthy competition as one of the prominent Brass Metal Products Manufacturers and Suppliers in India.
                </p>
                <p>
                  The company specialises in Brass Mixer Parts, Brass Inserts, Brass Fasteners, Brass Nuts &amp; Bolts, Brass Cable Glands, Brass Electrical Parts, Brass Auto Parts, Brass GAS Parts, and Brass Cable Lugs.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e6d9bf]/60 bg-[#e6d9bf]/10 p-6">
              <h3 className="mb-4 text-lg font-bold text-[#2e3d3b]">Company Info</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Company Name', 'Ashish Brass Industries'],
                  ['Type of Organisation', 'Proprietorship'],
                  ['Proprietor', 'Mr. Kaushal Patel'],
                  ['Established', '2018'],
                  ['Headquarters', 'Jamnagar, Gujarat, India'],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#b8a24f]">{label}</dt>
                    <dd className="font-medium text-[#2e3d3b]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Our Story */}
          <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm border border-[#e6d9bf]/40">
            <h2 className="mb-4 text-xl font-bold text-[#2e3d3b]">Our Story</h2>
            <div className="space-y-3 text-sm leading-relaxed text-[#b8a24f]">
              <p>
                Ashish Brass was established in 2018 and gained immense success under the leadership of Proprietor Kaushal Patel. Though sustaining in the Brass Metal Product industry is not easy, he set the example by making the company the best and most distinguished Brass Metal Product Makers and Suppliers.
              </p>
              <p>
                With extensive experience in the field of Brass metal, we hold strong on excellent product quality, customer services, compliance, commitment, and affordable rate structure. We have been engaged in bringing top-grade brass metal products since 2018.
              </p>
              <p>
                The offered products are manufactured under the best crew of professionals using top-notch quality assured brass material. We have the flexibility to produce every brass product part.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section className="mb-10 rounded-2xl bg-[#2e3d3b] p-8 text-center">
            <h2 className="mb-3 text-xl font-bold text-white">Our Vision</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#7d8c8a] sm:text-base">
              "To achieve profitable growth as the premier global supplier, offering innovative value-added services to our customers with competitive advantages."
            </p>
          </section>

          {/* Manufacturing Strengths */}
          <section className="mb-10">
            <h2 className="mb-6 text-center text-xl font-bold text-[#2e3d3b]">Manufacturing Strengths</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Shield, title: 'Quality Assurance', body: 'All products undergo rigorous assurance tests using top-notch quality raw materials. We provide the ultimate level of quality at reasonable prices.' },
                { icon: Zap, title: 'Manufacturing Infrastructure', body: 'Refined producing facilities with the best infrastructure in Jamnagar. Our team operates advanced machinery approved by international quality norms.' },
                { icon: Users, title: 'Client-Centric Approach', body: 'We have built a reputable business with a client-central approach, serving well-known organisations across the globe.' },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-[#e6d9bf]/50 bg-white p-5 transition-shadow hover:shadow-md">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6d9bf]/30 text-[#b8a24f]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-[#2e3d3b]">{title}</h3>
                  <p className="text-xs leading-relaxed text-[#b8a24f]">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Major Business Areas */}
          <section className="mb-10">
            <h2 className="mb-6 text-xl font-bold text-[#2e3d3b]">Major Business Areas</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ['Brass Battery Terminals', 'Custom designed, corrosion-free battery terminals in various sizes and configurations.'],
                ['Brass Auto Parts', 'Precision engineered automotive components for OEM and aftermarket applications.'],
                ['Cable Lugs', 'Brass and copper cable lugs for electrical and automotive applications.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border-2 border-[#b8a24f] bg-white p-5">
                  <Award className="mb-3 text-[#b8a24f]" size={24} />
                  <h3 className="mb-1.5 text-sm font-bold text-[#2e3d3b]">{title}</h3>
                  <p className="text-xs text-[#7d8c8a]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quality Processes */}
          <section className="mb-10 rounded-2xl border border-[#e6d9bf]/40 bg-white p-6">
            <h2 className="mb-5 text-xl font-bold text-[#2e3d3b]">Quality Processes</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                ['Lab Testing', 'Modern equipment including profile projectors and surface testers for comprehensive quality checks.'],
                ['Staff Training', 'Regular training programmes to keep our team updated and ensure highest quality standards.'],
                ['Final Inspection', 'Dedicated inspection department with experienced technical personnel achieving zero defect goals.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="mb-1.5 text-sm font-bold text-[#2e3d3b]">{title}</h3>
                  <p className="text-xs leading-relaxed text-[#b8a24f]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-[#2e3d3b] p-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-white">Get in Touch With Us</h2>
            <p className="mb-6 text-sm text-[#7d8c8a]">
              Ready to discuss your brass component requirements? Contact our team directly.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-[#b8a24f] px-6 py-3 text-sm font-semibold text-[#e6d9bf] transition-colors hover:bg-[#b8a24f] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d9bf]"
            >
              View All Products
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

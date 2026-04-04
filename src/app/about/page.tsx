'use client';

import { Award, Zap, Users, Shield } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <section className="bg-gradient-to-br from-amber-50 to-neutral-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900">
              About Ashish Brass Industries
            </h1>
            <p className="mt-6 text-xl text-neutral-600 max-w-3xl mx-auto">
              Leading global supplier of premium brass components, engineered for performance and reliability.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Our Organization</h2>
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                Ashish Brass Industries is experiencing growth at an accelerated pace since its inception in the year 2018. The profound knowledge and rich experience of the Proprietor in arena of Brass Products has assisted the company to enjoy healthy competition as one of the prominent Brass Metal Products Manufacturers and Suppliers in India.
              </p>
              <p>
                The company specializes in the dealing of Brass Mixer Parts, Brass Inserts, Brass Fasteners, Brass Nuts & Bolts, Brass Cable Glands, Brass Electrical Parts, Brass Auto Parts, Brass GAS Parts, and Brass Cable Lugs.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Company Info</h3>
            <div className="space-y-4 text-neutral-700">
              <div>
                <p className="font-semibold">Company Name</p>
                <p className="text-neutral-600">Ashish Brass Industries</p>
              </div>
              <div>
                <p className="font-semibold">Type of Organisation</p>
                <p className="text-neutral-600">Proprietorship</p>
              </div>
              <div>
                <p className="font-semibold">Proprietor</p>
                <p className="text-neutral-600">Mr. Kaushal Patel</p>
              </div>
              <div>
                <p className="font-semibold">Established</p>
                <p className="text-neutral-600">2018</p>
              </div>
              <div>
                <p className="font-semibold">Headquarters</p>
                <p className="text-neutral-600">Jamnagar, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="mb-20 bg-neutral-50 rounded-2xl p-12 border border-neutral-200">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
            <p>
              Ashish Brass was established in 2018 and gained immense success under the leadership of Proprietor Kaushal Patel. Though sustaining in the Brass Metal Product industry is not easy, he set the example by making the company the best and most distinguished Brass Metal Product Makers and Suppliers.
            </p>
            <p>
              With extensive experience in the field of Brass metal, we hold strong on excellent product quality, customer services, compliance, commitment, and affordable rate structure. We have been engaged in bringing top-grade brass metal products since 2018.
            </p>
            <p>
              The offered products are manufactured under the best crew of professionals using top-notch quality assured brass material. We are leaders in our brass metal manufacturing field and are involved in making an extensive range of brass metal products. We have the flexibility to produce every brass product part.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              "To achieve profitable growth as the premier global supplier, offering innovative value-added services to our customers with competitive advantages."
            </p>
          </div>
        </section>

        {/* Manufacturing Strengths */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Manufacturing Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Assurance */}
            <div className="rounded-2xl border border-neutral-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Quality Assurance</h3>
              <p className="text-neutral-700 leading-relaxed">
                With extensively used brass materials and top-notch quality raw materials, all products undergo rigorous assurance tests from scratch. We provide the ultimate level of quality at reasonable prices.
              </p>
            </div>

            {/* Manufacturing Infrastructure */}
            <div className="rounded-2xl border border-neutral-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Manufacturing Infrastructure</h3>
              <p className="text-neutral-700 leading-relaxed">
                We have refined producing facilities with the best infrastructure established in Jamnagar. Our extremely qualified and knowledgeable team operates advanced machinery approved by international quality norms.
              </p>
            </div>

            {/* Client-Centric Approach */}
            <div className="rounded-2xl border border-neutral-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Client-Centric Approach</h3>
              <p className="text-neutral-700 leading-relaxed">
                We have built a reputable business with a client central approach, serving well-known organizations across the globe. Our brass metal products are used by numerous respected companies.
              </p>
            </div>
          </div>
        </section>

        {/* Products & Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Major Business Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-amber-600 rounded-2xl p-8">
              <Award className="text-amber-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Brass Battery Terminals</h3>
              <p className="text-neutral-600">Custom designed, corrosion-free battery terminals in various sizes and configurations.</p>
            </div>
            <div className="bg-white border-2 border-amber-600 rounded-2xl p-8">
              <Award className="text-amber-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Brass Auto Parts</h3>
              <p className="text-neutral-600">Precision engineered automotive components for OEM and aftermarket applications.</p>
            </div>
            <div className="bg-white border-2 border-amber-600 rounded-2xl p-8">
              <Award className="text-amber-600 mb-3" size={32} />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Cable Lugs</h3>
              <p className="text-neutral-600">Brass and copper cable lugs for electrical and automotive applications.</p>
            </div>
          </div>
        </section>

        {/* Quality Processes */}
        <section className="mb-20 bg-neutral-50 rounded-2xl p-12 border border-neutral-200">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Quality Processes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Lab Testing</h3>
              <p className="text-neutral-700">Modern equipment including profile projectors and surface testers for comprehensive quality checks.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Staff Training</h3>
              <p className="text-neutral-700">Regular training programs to keep our team updated and ensure highest quality standards.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Final Inspection</h3>
              <p className="text-neutral-700">Dedicated inspection department with experienced technical personnel achieving zero defect goals.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Get in Touch With Us</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Ready to discuss your brass component requirements? Contact our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block rounded-full border-2 border-amber-600 px-8 py-3 font-semibold text-amber-700 transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              View All Products
            </Link>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

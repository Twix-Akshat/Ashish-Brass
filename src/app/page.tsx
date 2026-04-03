import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesStrip from '@/components/FeaturesStrip';
import TrustBar from '@/components/TrustBar';
import ProductsSection from '@/components/ProductsSection';
import IndustriesSection from '@/components/IndustriesSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section aria-label="Hero banner">
          <Hero />
        </section>
        <section aria-label="Key features">
          <FeaturesStrip />
        </section>
        <section aria-label="Trust and certifications">
          <TrustBar />
        </section>
        <section aria-label="Products">
          <ProductsSection />
        </section>
        <section aria-label="Industries">
          <IndustriesSection />
        </section>
        <section aria-label="Call to action">
          <CtaSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

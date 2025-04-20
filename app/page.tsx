import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PhotoGallery from "./components/PhotoGallery";
import Testimonials from "./components/Testimonials";
import Link from "next/link";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>            
        <Hero />
        <section className="py-12 px-6 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#4B2E2B]">Locally Sourced. Handcrafted Daily.</h2>
          <p className="mt-4 text-gray-700">
            We serve ethically sourced coffee, fresh local ingredients, and good vibes daily in the heart of Brisbane.
          </p>
          <Link
            href="/menu"
            className="mt-6 inline-block bg-[#C68B59] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#865439] transition"
          >
            View Our Menu
          </Link>
        </section>
        <AboutSection />
        
        <PhotoGallery />
        <section className="bg-[#F8F3E9]">
        <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}

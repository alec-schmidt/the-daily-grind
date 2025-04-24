"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Navbar />
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-[#4B2E2B] mb-6 text-center">Get in Touch</h1>

      <section className="grid md:grid-cols-2 gap-8 text-black">
        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#4B2E2B] text-white font-semibold px-6 py-3 rounded hover:bg-[#3c221f] transition"
          >
            Send Message
          </button>
        </form>

        {/* Café Details */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-[#4B2E2B] mb-2">Visit Us</h2>
            <p className="text-gray-700">123 Brew Lane<br />Brisbane, QLD 4000</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#4B2E2B] mb-2">Opening Hours</h2>
            <p className="text-gray-700">
              Mon - Fri: 7am - 3pm<br />
              Sat - Sun: 8am - 2pm
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#4B2E2B] mb-2">Contact</h2>
            <p className="text-gray-700">
              Phone: <a href="tel:+61400111222" className="underline">0400 111 222</a><br />
              Email: <a href="mailto:hello@dailygrindcafe.com" className="underline">hello@dailygrindcafe.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Optional Google Map */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.9157371908613!2d153.02603337644613!3d-27.47012577635591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cc8f291%3A0x60a6cbd12b317e39!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1644457496963"
          width="100%"
          height="300"
          className="border-0 rounded-lg shadow-sm"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </main>
    <Footer />
    </div>
  );
}

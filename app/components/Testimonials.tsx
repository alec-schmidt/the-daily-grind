"use client";
import React from "react";

const testimonials = [ 
    {
        name: "Sarah J.",
        text: "Best coffee in Brisbane! The avo toast is a weekend ritual. Love the cozy vibe.",
        star: "⭐⭐⭐⭐⭐",
      },
      {
        name: "Liam T.",
        text: `Booked my team breakfast here - fast service, great food, and even better espresso.`,
        star: "⭐⭐⭐⭐",
      },
      {
        name: "Elena M.",
        text: "Feels like home. The staff are always lovely and the banana bread? Unreal.",
        star: "⭐⭐⭐⭐",
      },
];

export default function Testimonials() {
    return (
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#4B2E2B] mb-6">What Our Customers Say</h2>
            <div className="space-y-8">
                {testimonials.map((t, i) => (
                    <div key={i}
                    className="bg-white border rounded-lg shadow-sm p-6">
                        <p className="text-gray-700 italic">"{t.text}"</p>
                        <p className="mt-4 font-semibold text-[#4B2E2B]">{t.name}</p>
                        <p className="text-sm text-gray-500">Customer</p>
                        <div className="flex justify-center mt-4">
                            <span className="text-yellow-400">{t.star}</span>
                        </div>
                        <p className="text-sm text-gray-500">Verified Review</p>    
                    </div>
                ))}
            </div>
        </section>
    )
}
"use client";
import React from "react";
import Image from "next/image";

const images = [
    {src: "/photo1.jpg", caption: "Coffee and Croissant"},
    {src: "/photo2.jpg", caption: "Day at the Cafe"},
    {src: "/photo3.jpg", caption: "Latte Art"},
    {src: "/photo4.jpg", caption: "Vibe Check"},
]

export default function PhotoGallery() {
    return (
        <section className="py-12 px-6 bg-white">
            <h2 className="text-3xl font-bold text-[#4B2E2B] mb-6 text-center">From Our Daily Grind Feed</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {images.map(({src}, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                        {/* Using Image component from Next.js for optimized loading */}
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                         
                    </div>
                ))}
            </div>
            <div>
                <p className="text-center text-sm text-gray-500 mt-4">
            <a href="https://www.vecteezy.com/free-photos/cafe">Cafe Stock photos by Vecteezy</a>
                </p>
                <p className="text-center text-sm text-gray-500 mt-4"><a href="www.freepik.com"></a>Asset downloaded from Freepik</p>
            </div>
        </section>
    )
}
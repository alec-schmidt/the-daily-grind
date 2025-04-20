// components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#003249' }}>
      <div className="flex items-center">
        
        <Link className="flex items-center" href="/"><Image
          src="/TDG_Logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="inline-block rounded-full"
        /><span className="items-center opacity-0 sm:opacity-100 text-xl link link-underline">The Daily Grind</span></Link>
      </div>
      <ul className="flex space-x-4 text-xs md:text-lg">
        <li>
          <Link href="/" className="hover:text-blue-300 link link-underline">Home</Link>
        </li>
        <li>
          <Link href="/menu" className="hover:text-blue-300 link link-underline">Menu</Link>
        </li>
        <li>
          <Link href="/#about" className="hover:text-blue-300 link link-underline">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-300 link link-underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
"use client";
import React from "react";
import MenuSection from "../components/MenuSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const menu = {
    "Coffee & Drinks": [
        { name: "Flat White", price: "$4.50", description: "Rich espresso with velvety microfoam." },
        { name: "Cappuccino", price: "$4.50", description: "Espresso topped with steamed milk and foam." },
        { name: "Latte", price: "$4.50", description: "Smooth espresso with steamed milk." },
        { name: "Mocha", price: "$5.00", description: "Chocolatey espresso with steamed milk." },
        { name: "Chai Latte", price: "$4.50", description: "Spiced tea with steamed milk." },
        { name: "Iced Coffee", price: "$5.00", description: "Chilled coffee with milk and ice." },
        { name: "Fresh Juice", price: "$6.00", description: "Seasonal fresh juice." },
    ],
    "Breakfast": [
        { name: "Avocado Toast", price: "$12.00", description: "Smashed avocado on sourdough." },
        { name: "Eggs Benedict", price: "$14.00", description: "Poached eggs, ham, and hollandaise." },
        { name: "Granola Bowl", price: "$10.00", description: "House-made granola with yogurt." },
        { name: "Smoothie Bowl", price: "$12.00", description: "Blended fruits topped with granola." },
    ],
    "Lunch": [
        { name: "Chicken Salad", price: "$15.00", description: "Grilled chicken with mixed greens." },
        { name: "Quinoa Bowl", price: "$14.00", description: "Quinoa with seasonal veggies." },
        { name: "Pasta Primavera", price: "$16.00", description: "Pasta with seasonal vegetables." },
        { name: "Fish Tacos", price: "$15.00", description: "Grilled fish with slaw in tortillas." },
    ],
    "Desserts": [
        { name: "Chocolate Cake", price: "$6.00", description: "Rich chocolate cake with ganache." },
        { name: "Cheesecake", price: "$6.50", description: "Creamy cheesecake with berry compote." },
        { name: "Brownie", price: "$5.00", description: "Fudgy brownie with nuts." },
        { name: "Fruit Tart", price: "$6.50", description: "Pastry crust with custard and fresh fruit." },
    ],
}


export default function MenuPage() {
    return (
        <>
        <Navbar />
                <main className="bg-[url('/background.jpg')] bg-cover bg-center ">
            <div className="max-w-4xl mx-auto px-4 py-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <h1 className="text-center text-4xl font-bold text-[#4B2E2B] mb-8">Our Menu</h1>
            {Object.entries(menu).map(([category, items]) => (
                <MenuSection key={category} category={category} items={items} />
            ))}
            </div>
            </main>   
        <Footer />
        </>
    )
}
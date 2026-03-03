"use client";

import { Search, SlidersHorizontal, MapPin, LayoutGrid, CalendarRange, Navigation } from "lucide-react";

export default function ProjectsHero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center ">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/projects-hero-bg.png')" }} // Update path to actual team image if available
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="container relative z-10 text-center flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-4">
                    <span className="text-[#088E48]">PROJECTS</span> & HAPPENINGS
                </h1>
                <p className="text-white text-sm md:text-base font-medium italic max-w-2xl mx-auto px-4">
                    Discover youth-led dialogues, policy forums, and national initiatives that bring young Pakistanis together for learning, leadership, and collaboration
                </p>
            </div>
        </section>
    );
}

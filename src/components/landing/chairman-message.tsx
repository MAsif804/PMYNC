"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ChairmanMessage() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = (index: number) => {
        api?.scrollTo(index);
    };

    const slides = [
        {
            image: "/priminester.png",
            heading: "PRIME MINISTER MR. MUHAMMAD SHEHBAZ SHARIF",
            subheading: "Empowering Youth, Transforming Pakistan",
            paragraphs: [
                "The Prime Minister's Youth Programme stands as a symbol of hope and progress, dedicated to equipping Pakistan's young generation with the skills, opportunities, and guidance required to succeed in an increasingly competitive world. Our mission is clear: to empower youth by expanding access to equitable employment opportunities, bridging intergenerational skill gaps, providing career-oriented mentorship, and promoting healthy, productive engagement.",
                "Through a wide range of targeted initiatives, the Programme has delivered a transformative impact on countless lives across the country. By investing in our youth, we are strengthening our communities and securing the nation's future. We firmly believe that every young individual possesses immense, untapped potential and deserves the support needed to realize it.",
                "Together, we are shaping a future where aspirations are achieved, barriers are overcome, and dreams are transformed into reality. Let us continue to work collectively to build a resilient nation that thrives on the energy, talent, and promise of its youth."
            ]
        },
        {
            image: "/chairman-section-imag.png",
            heading: "CHAIRMAN YOUTH PROGRAMME MR. RANA MASHHOOD AHMAD KHAN",
            subheading: "Message from Chairman PMYP",
            paragraphs: [
                "The potential and transformative power of Pakistan's youth is boundless. It is my firm determination to equip young people with the tools, networks, and resources required to create lasting impact and thrive within an inclusive and enabling environment. Through the Prime Minister's Youth Programme, we are committed to turning aspirations into reality, recognizing that Pakistan's progress is inextricably linked to the development and empowerment of its youth.",
                "I encourage young people across the country to step forward with confidence and determination, seize the opportunities offered through this platform, and play an active role in elevating Pakistan's presence on the global stage. Our youth are no longer just the leaders of tomorrow; they are the drivers of today, shaping our present and defining the trajectory of our future."
            ]
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,


                    }}
                    plugins={[plugin.current]}
                    // onMouseEnter={plugin.current.stop}
                    // onMouseLeave={plugin.current.reset}
                    className="w-full relative"
                >
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index}>
                                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                                    {/* Image Side */}
                                    <div className="relative h-[480px] lg:h-full w-full overflow-hidden rounded-[4px] shadow-sm">
                                        <img
                                            src={slide.image}
                                            alt={slide.heading}
                                            className="object-cover w-full h-full object-top"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <img
                                                src="/pmyp-logo.png"
                                                alt="PMYP Logo"
                                                className="w-[80px] h-auto object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex flex-col justify-center items-start lg:pt-10">
                                        <h2 className="text-[28px] lg:text-[30px] font-bold tracking-tight text-[#041502] uppercase mb-4 leading-[36px]">
                                            {slide.heading}
                                        </h2>
                                        <p className="text-[#088E48] font-bold text-[18px] lg:text-[20px] mb-6">
                                            {slide.subheading}
                                        </p>
                                        <div className="space-y-4 text-justify">
                                            {slide.paragraphs.map((para, pIndex) => (
                                                <p key={pIndex} className="font-Roboto text-[16px] lg:text-[17px] font-normal leading-[1.7] text-[#6A7282]">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Pagination Dots */}
                    <div className="flex justify-center lg:justify-start lg:pl-[53%] mt-8 gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-[10px] rounded-full transition-all duration-300 ${current === index ? "w-[10px] bg-[#088E48]" : "w-[10px] bg-[#D9D9D9]"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

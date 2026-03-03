"use client";

import { MapPin } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function LeadershipProfiles() {
    const leaders = [
        {
            name: "Prime Minister of Pakistan",
            location: "Lahore, Punjab",
            designation: "Patron-in Chief",
            sectors: ["Policy Development", "Governance & Public Administration"],
            description: "Shehbaz Sharif is the Prime Minister of Pakistan, serving with a strong focus on economic stability, gov...",
            image: "/prime-minister.png",
            period: "2023 - present"
        },
        {
            name: "Rana Mashood Ahmad Khan",
            location: "Lahore, Punjab",
            designation: "Chairperson",
            sectors: ["Policy Development", "Youth Engagement"],
            description: "Rana Mashood Ahmad Khan is the Chairperson of the Prime Minister&apos;s Youth Programme, leading ini...",
            image: "/rana-mashood.png",
            period: "2023 - present"
        },
        {
            name: "Malik Faisal Ayub Khokhar",
            location: "Lahore, Punjab",
            designation: "Minister for Youth Affairs",
            sectors: ["Youth Leadership", "Civic Engagement"],
            description: "Malik Faisal Ayub Khokhar is the minister for Youth Affairs, leading ini...",
            image: "/malik-faisal.png",
            period: "2023 - present"
        },
        {
            name: "Malik Faisal Ayub Khokhar",
            location: "Lahore, Punjab",
            designation: "Minister for Youth Affairs",
            sectors: ["Youth Leadership", "Civic Engagement"],
            description: "Malik Faisal Ayub Khokhar is the minister for Youth Affairs, leading ini...",
            image: "/malik-faisal.png",
            period: "2023 - present"
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container ">
                {/* Header Section */}
                <div className="text-center mb-[60px] relative">
                    <h2 className="text-[36px] sm:text-[44px] font-extrabold text-[#041502] uppercase mb-2 tracking-wide">
                        MEET THE LEADERSHIP
                    </h2>
                    <p className="text-[#6A7282] font-normal font-Roboto text-[18px] leading-[1.6] max-w-4xl mx-auto">
                        The NYC operates under the supervision of the Prime Minister&apos;s Office and the Ministry of Planning,
                        Development & Special Initiatives, supported by a dedicated Secretariat team and regional coordinator
                    </p>
                </div>

                {/* Carousel Section */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    {/* Explicitly position previous/next arrows above the carousel, right-aligned */}
                    <div className="absolute -top-[70px] right-0 flex gap-2">
                        <CarouselPrevious className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                        <CarouselNext className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                    </div>

                    <CarouselContent className="-ml-6">
                        {leaders.map((leader, index) => (
                            <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white rounded-[16px] border border-[#E6E6E6] overflow-hidden flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                                    {/* Image Section */}
                                    <div className="relative h-[295px] w-full p-4 pb-0">
                                        <div className="relative w-full h-full  overflow-hidden">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                            {/* Period Badge */}
                                            <div className="absolute top-3 left-3 flex items-center bg-[#F5F5F5] rounded-full px-[10px] py-1 shadow-sm">
                                                <span className="text-[14px] font-Roboto font-normal text-[#333333]">
                                                    {leader.period}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        {/* Name and Location row */}
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-[16px] font-Roboto font-semibold text-[#000000] max-w-[65%] leading-tight">
                                                {leader.name}
                                            </h3>
                                            <div className="flex items-center gap-1 text-[#088E48] shrink-0 mt-0.5">
                                                <MapPin className="h-[18px] w-[18px] aspect-square" />
                                                <span className="text-[14px] font-Roboto font-medium text-[#475063]">{leader.location}</span>
                                            </div>
                                        </div>

                                        {/* Designations */}
                                        <div className="mb-2">
                                            <span className="block text-[14px] text-[#90A1B9] mb-1 font-normal">Designations</span>
                                            <div className="inline-flex items-center rounded-md bg-[#E6FFE6] px-2 py-[2px]">
                                                <span className="text-[12px] font-Roboto font-normal text-[#088E48]">{leader.designation}</span>
                                            </div>
                                        </div>

                                        {/* Sectors */}
                                        <div className="mb-2 flex-grow">
                                            <span className="block text-[12px] text-[#90A1B9] mb-2 font-normal font-Roboto">Sectors</span>
                                            <div className="flex flex-wrap gap-2">
                                                {leader.sectors.map((sector, idx) => (
                                                    <div key={idx} className="inline-flex items-center rounded-full border border-[#0066FF] bg-[#E6F0FF] px-2 py-0.5">
                                                        <span className="text-[12px] font-Roboto font-normal text-[#0066FF]">{sector}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[14px] font-Roboto font-normal text-[#808080] leading-[1.6]">
                                            {leader.description}{" "}
                                            <Link href="#" className="text-[#0066FF] underline decoration-[#0066FF]/50 underline-offset-2 hover:decoration-[#0066FF] font-medium inline-block">
                                                Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}

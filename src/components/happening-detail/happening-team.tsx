"use client";

import { useState } from "react";
import { ArrowUpRight, Linkedin, Twitter, Globe, Link as LinkIcon, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

type Leader = {
    id: number;
    name: string;
    designation: string[];
    location: string;
    description: string;
    image: string;
    period: string;
    sectors: string[];
    socials: {
        linkedin?: string;
        email?: string;
        phone?: string;
    };
};

const leaders: Leader[] = [
    {
        id: 1,
        name: "Fakhar Jabran",
        designation: ["Member", "Entrepreneur"],
        location: "Bhimber, KPK",
        description: "Entrepreneurship/ Founder of 4 startups. Winner  of PM National Innovation Award. Started  Connect and strategic policy making to empower young leaders.",
        image: "/meet-the-team/team-member-1.png", // Reusing available profile images
        period: "2023 - present",
        sectors: ["Digital Skills", "Entrepreneurship"],
        socials: { linkedin: "#", email: "#", phone: "#" },
    },
    {
        id: 2,
        name: "Ayesha Malik",
        designation: ["Member", "Entrepreneur"],
        location: "Rawlakot, KPK",
        description: "Health & wellbeing/ Diana Award winner,  Represented Pakistan in Summer Sisters exchange  program.",
        image: "/meet-the-team/team-member-2.jpg",
        period: "2023 - present",
        sectors: ["Health & Wellbeing", "Education"],
        socials: {},
    },
    {
        id: 3,
        name: "Rana Mashhood",
        designation: ["Member", "Entrepreneur"],
        location: "Rawlakot, KPK",
        description: "A youth representative from Balochistan dedicated to advancing climate resilience, empowering local communities, and fostering sustainable development. ",
        image: "/meet-the-team/team-member-3.jpg",
        period: "2022 - present",
        sectors: ["Climate Change", "Education"],
        socials: { linkedin: "#", email: "#", phone: "#" },
    },
    {
        id: 4,
        name: "Malik Faisal",
        designation: ["Member", "Entrepreneur"],
        location: "Rawlakot, KPK",
        description: "Malik Faisal Ayub Khokhar is the minister for Youth Affairs, leading ini...",
        image: "/meet-the-team/team-member-4.png",
        period: "2022 - present",
        sectors: ["Education", "Environment"],
        socials: { linkedin: "#", email: "#" },
    },
];

function TeamCard({ leader }: { leader: Leader }) {

    return (
        <div className="bg-white rounded-[12px] p-4 shadow-sm border border-[#E7E7E7] hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative rounded-[8px] overflow-hidden mb-4 aspect-[4/3]">
                <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top-left Badge */}
                <div className="absolute top-3 left-3 flex items-center bg-[#F5F5F5] rounded-full px-[10px] py-1 shadow-sm">
                    <span className="text-[14px] font-Roboto font-normal text-[#333333]">
                        {leader.period}
                    </span>
                </div>

                {/* Top-right Social Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {leader.socials.linkedin && (
                        <a href={leader.socials.linkedin} className="w-8 h-8 rounded-full bg-[#0076B2] shadow-sm flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-colors">
                            <Linkedin className="w-4 h-4 fill-white text-white" />
                        </a>
                    )}
                    {leader.socials.email && (
                        <a href={leader.socials.email} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-black hover:text-white text-[#1A1A1A] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <g clip-path="url(#clip0_920_5156)">
                                    <path d="M3.63637 11.9408V5.791L1.71919 4.04615L0 3.07788V10.8556C0 11.4561 0.489062 11.9408 1.09094 11.9408H3.63637Z" fill="#4285F4" />
                                    <path d="M12.3638 11.941H14.9092C15.5129 11.941 16.0001 11.4544 16.0001 10.8557V3.07812L14.0529 4.18716L12.3638 5.79118V11.941Z" fill="#34A853" />
                                    <path d="M3.63636 5.79114L3.37549 3.38821L3.63636 1.08838L7.99999 4.34417L12.3636 1.08838L12.6554 3.26405L12.3636 5.79114L7.99999 9.04693L3.63636 5.79114Z" fill="#EA4335" />
                                    <path d="M12.3638 1.08831V5.79107L16.0001 3.07795V1.63092C16.0001 0.288851 14.4601 -0.476226 13.382 0.328644L12.3638 1.08831Z" fill="#FBBC04" />
                                    <path d="M0 3.07798L1.67244 4.32585L3.63637 5.7911V1.08834L2.61812 0.328672C1.53812 -0.47626 0 0.28888 0 1.63089V3.07798Z" fill="#C5221F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_920_5156">
                                        <rect width="16" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    )}
                    {leader.socials.phone && (
                        <a href={leader.socials.phone} className="w-8 h-8 rounded-full bg-[#088E48] white shadow-sm flex items-center justify-center hover:bg-[#088E48] text-white hover:text-[#088E48] transition-colors">
                            <Phone className="w-4 h-4" />
                        </a>
                    )}
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
    );
}


export default function HappeningTeam() {
    return (
        <section className="py-16 bg-white">
            <div className="container relative">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10 relative">
                    <h2 className="text-[32px] sm:text-[40px] font-bold uppercase tracking-tight text-[#1A1A1A] mb-2">
                        MEET THE TEAM
                    </h2>
                    <p className="text-[#6A7282] font-Roboto text-[18px]">
                        Dedicated professionals leading Leadership Development Program across Pakistan
                    </p>
                </div>

                {/* Carousel wrapper */}
                <div className="relative">
                    <Carousel opts={{ align: "start", loop: false }} className="w-full">
                        {/* Carousel Navigation */}
                        <div className="absolute -top-[70px] right-0 hidden lg:flex gap-2">
                            <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-[#088E48] hover:bg-[#067A3D] text-white border-none rounded-[4px] flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4" />
                            <CarouselNext className="static translate-y-0 h-8 w-8 bg-[#088E48] hover:bg-[#067A3D] text-white border-none rounded-[4px] flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4" />
                        </div>

                        <CarouselContent className="-ml-5">
                            {leaders.map((leader) => (
                                <CarouselItem key={leader.id} className="pl-5 md:basis-1/2 lg:basis-1/3">
                                    <TeamCard leader={leader} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

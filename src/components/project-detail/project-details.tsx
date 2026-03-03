"use client";

import { Project } from "@/data/projects";

import { CheckCircle2, MapPin } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectDetails({ project }: { project: Project }) {
    const { title, fullDescription, objectives, impacts, locations, detailImages } = project;

    return (
        <section className="py-16 bg-white w-full">
            <div className="container">
                {/* Title Section */}
                <div className="flex flex-col mb-10">
                    <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-black text-[#041502] uppercase tracking-tight mb-2 leading-tight">
                        {title.split(':')[0]}
                    </h1>
                    {title.split(':')[1] && (
                        <p className="text-[#1A1A1A] font-Roboto font-medium italic text-[16px] md:text-[18px]">
                            {title.split(':')[1].trim()}
                        </p>
                    )}
                </div>

                {/* Top Section: About + Image/Locations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Left Column: About */}
                    <div className="flex flex-col">
                        <h2 className="text-[26px] md:text-[28px] font-bold text-[#1A1A1A] mb-5">
                            About the project
                        </h2>
                        <div className="text-[#6A7282] font-Roboto text-[16px] leading-[1.7] space-y-4">
                            {fullDescription.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Imagery & Locations */}
                    <div className="flex flex-col">
                        {/* Image Carousel */}
                        <div className="w-full mb-6 relative">
                            <Carousel opts={{ align: "start", loop: true }} className="w-full group">
                                <CarouselContent>
                                    {detailImages.map((src, i) => (
                                        <CarouselItem key={i}>
                                            <div className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[8px] relative">
                                                <img
                                                    src={src}
                                                    alt="Project highlight"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/* Custom localized arrows for this specific carousel */}
                                <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#FFFFFF80] border-none text-white hover:bg-black/60 h-[44px] w-[44px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&>svg]:w-6 [&>svg]:h-6" />
                                <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#FFFFFF80] border-none text-white hover:bg-black/60 h-[44px] w-[44px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&>svg]:w-6 [&>svg]:h-6" />
                            </Carousel>
                        </div>

                        {/* Project Locations */}
                        <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-4">
                            Project locations
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                            {locations.map((loc, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-[6px] bg-[#FAFAFA] border border-[#F0F0F0]">
                                    <MapPin className="w-[18px] h-[18px] text-[#088E48]" />
                                    <span className="text-[14px] font-Roboto font-medium text-[#1A1A1A]">
                                        {loc}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Objectives and Impacts Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Objectives */}
                    <div className="flex flex-col">
                        <h2 className="text-[28px] md:text-[28px] font-bold text-[#000000] mb-4">
                            Key Objectives
                        </h2>
                        <ul className="flex flex-col gap-6">
                            {objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full border-[2.5px] border-[#088E48] shrink-0 mt-[2px]">
                                        <div className="w-[8px] h-[8px] rounded-full bg-[#088E48]"></div>
                                    </div>
                                    <span className="text-[#6A7282] font-Roboto text-[20px] font-medium leading-snug">
                                        {obj}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Column: Impacts */}
                    <div className="flex flex-col">
                        <h2 className="text-[28px] md:text-[28px] font-bold text-[#000000] mb-4">
                            Impacts and achievements
                        </h2>
                        <ul className="flex flex-col gap-5">
                            {impacts.map((imp, i) => (
                                <li key={i} className="flex items-center gap-4 bg-[#FAFAFA] rounded-[8px] p-4">
                                    <CheckCircle2 className="w-[30px] h-[30px] text-[#088E48] shrink-0" fill="#088E48" stroke="white" strokeWidth={1.5} />
                                    <span className="text-[#6A7282] font-Roboto text-[18px] font-normal leading-snug">
                                        {imp}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

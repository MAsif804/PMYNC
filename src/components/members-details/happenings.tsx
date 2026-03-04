"use client";

import { ArrowUpRight, CalendarClock } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { Happening, happenings } from "@/data/happenings";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
function HappeningCard({ item }: { item: Happening }) {
    const short = item.shortDescription.replace(/\.{3}$/, "");

    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
            {/* Image */}
            <Link href={`/happening-detail/${item.slug}`} className="relative overflow-hidden aspect-[4/3] flex-shrink-0 cursor-pointer block">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge — light blue pill top-right */}
                {item.badge && (
                    <span className="absolute top-3 right-3 text-[#3385FF] text-[12px] font-semibold px-4 py-1.5 rounded-full bg-white/90 shadow-sm backdrop-blur-sm pointer-events-none">
                        {item.badge}
                    </span>
                )}

                {/* Date/location — solid green bar at bottom */}
                {item.date && (
                    <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-[#088E48] px-4 py-3 flex flex-col gap-0.5 w-3/4 pointer-events-none">
                        <span className="text-white text-[13px] font-bold leading-tight">
                            {item.date}
                        </span>
                        <span className="text-white/80 text-[11px] leading-tight">
                            {item.location}
                        </span>
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href={`/happening-detail/${item.slug}`} className="hover:underline">
                                <h3 className="text-black font-bold text-[16px] leading-snug line-clamp-2 cursor-pointer">
                                    {item.title}
                                </h3>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm text-xs text-[#717171] bg-white border border-[#717171] rounded-md" side="top">
                            {item.title}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <p className="text-[#6A7282] text-[14px] leading-relaxed flex-1">
                    {`${short.slice(0, 110)}...`}{" "}
                    <Link
                        href={`/happening-detail/${item.slug}`}
                        className="text-[#088E48] font-semibold hover:underline focus:outline-none inline-block mt-1"
                    >
                        Read more
                    </Link>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    {/* Category */}
                    <span className="text-[14px] font-medium text-[#009900] bg-[#E6FFE6] rounded-full px-5 py-1">
                        {item.category}
                    </span>

                    {/* Attendees + avatars OR author */}
                    {item.author ? (
                        <span className="text-[11px] text-gray-500 italic">{item.author}</span>
                    ) : (
                        <div className="flex items-center gap-2">
                            {item.attendees && (
                                <div className="flex items-center gap-1">
                                    <span className="text-[12px] text-[#6A7282]">{item.attendees}</span>
                                </div>
                            )}
                            {item.avatars.length > 0 && (
                                <div className="flex -space-x-1.5">
                                    {item.avatars.map((av, i) => (
                                        <img key={i} src={av} alt="attendee" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                                    ))}
                                    <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                                        <span className="text-[12px] font-bold text-gray-600">+2</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function MemberHappenings() {



    return (
        <section className="py-12 px- bg-white">
            <div className="container relative">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-3">
                    <div className="flex flex-col items-center text-center mb-3">
                        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-none mb-1">
                            <span className="text-transparent mr-2" style={{ WebkitTextStroke: "1.5px #000000" }}>
                                NYC
                            </span>
                            <span className="text-black">HAPPENINGS</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-2 ">
                            Join us at upcoming events and explore past initiatives that brought youth voices to the forefront
                        </p>
                    </div>
                </div>
                {/* Carousel */}
                <Carousel opts={{ align: "start", loop: false }} className="w-full">
                    <div className="flex justify-end mb-3 gap-2">
                        <CarouselPrevious className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                        <CarouselNext className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                    </div>

                    <CarouselContent className="-ml-4">
                        {happenings.map((item) => (
                            <CarouselItem key={item.slug} className="pl-4 md:basis-1/3">
                                
                                    {/* Content */}
                                    <HappeningCard key={item.slug} item={item} />
                               
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


            </div>
        </section>
    );
}

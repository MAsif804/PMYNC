"use client";
import { CheckCircle2, MapPin, CalendarClock, UsersRound } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Happening } from "@/data/happenings";

export default function HappeningDetails({ happening }: { happening: Happening }) {
    const { title, badge, fullDescription, objectives, date, attendees, location, detailImages, categories } = happening;

    // Derive subtitle from colon split
    const titleParts = title.split(":");
    const mainTitle = titleParts[0]?.trim() ?? title;
    const subTitle = titleParts[1]?.trim() ?? null;

    // Metadata display values
    const metaDate = date || `${happening.dateStart} → ${happening.dateEnd}`;
    const metaAttendees = attendees || happening.beneficiaries;
    const metaLocation = location || (happening.locations?.[0] ?? "Pakistan");

    return (
        <section className="bg-white w-full pb-16 pt-8">
            <div className="container max-w-6xl mx-auto px-4 lg:px-6">

                {/* Top Badges */}
                <div className="flex gap-3 mb-5">
                    {badge && (
                        <span className="text-[#3385FF] bg-[#E5F0FF] px-4 py-1.5 rounded-full text-[13px] font-bold">
                            {badge}
                        </span>
                    )}
                    {categories?.[0] && (
                        <span className="text-[#6A7282] bg-[#F5F5F5] px-4 py-1.5 rounded-full text-[13px] font-bold capitalize">
                            {categories[0]}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-black text-[#041502] uppercase tracking-tight mb-1 leading-[1.1]">
                    {mainTitle}
                </h1>
                {subTitle && (
                    <p className="text-[#1A1A1A] font-Roboto font-medium italic text-[16px] md:text-[18px] mb-4">
                        {subTitle}
                    </p>
                )}

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-5 mb-8 border-b border-gray-100 pb-6">
                    {metaDate && (
                        <div className="flex items-center gap-2">
                            <CalendarClock className="w-5 h-5 text-[#088E48] shrink-0" />
                            <span className="text-[#1A1A1A] font-bold text-[13px] uppercase tracking-wide">{metaDate}</span>
                        </div>
                    )}
                    {metaAttendees && (
                        <div className="flex items-center gap-2">
                            <UsersRound className="w-5 h-5 text-[#088E48] shrink-0" />
                            <span className="text-[#1A1A1A] font-bold text-[13px] uppercase tracking-wide">{metaAttendees}</span>
                        </div>
                    )}
                    {metaLocation && (
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[#088E48] shrink-0" />
                            <span className="text-[#1A1A1A] font-bold text-[13px] uppercase tracking-wide">{metaLocation}</span>
                        </div>
                    )}
                </div>

                {/* About the Event */}
                <h2 className="text-[22px] md:text-[24px] font-bold text-[#1A1A1A] mb-4">
                    About the Event
                </h2>
                <div className="text-[#6A7282] font-Roboto text-[15.5px] leading-[1.7] mb-10">
                    <p>{fullDescription[0]}</p>
                </div>

                {/* Full-Width Image Carousel */}
                <div className="w-full mb-3 relative">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full group">
                        <CarouselContent>
                            {detailImages.map((src, i) => (
                                <CarouselItem key={i}>
                                    <div className="w-full aspect-[21/9] overflow-hidden rounded-[12px] bg-gray-100">
                                        <img
                                            src={src}
                                            alt="Event highlight"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop";
                                            }}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                            <CarouselPrevious className="static pointer-events-auto h-11 w-11 bg-white/50 backdrop-blur border-none hover:bg-white/80 transition-colors [&>svg]:w-5 [&>svg]:h-5 text-gray-800 shadow-sm" />
                            <CarouselNext className="static pointer-events-auto h-11 w-11 bg-white/50 backdrop-blur border-none hover:bg-white/80 transition-colors [&>svg]:w-5 [&>svg]:h-5 text-gray-800 shadow-sm" />
                        </div>
                    </Carousel>
                </div>
                <p className="text-center text-[#6A7282] text-[13px] font-Roboto mb-12 italic">
                    Img: Lorem ipsum dolor sit amet consectetur.
                </p>

                {/* Full-Width Paragraphs */}
                <div className="text-[#6A7282] font-Roboto text-[15.5px] leading-[1.7] space-y-5 mb-14">
                    <p>{fullDescription[0]}</p>
                    {fullDescription[1] && <p>{fullDescription[1]}</p>}
                </div>

                {/* Event Objectives + Image Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-14">
                    {/* Objectives List */}
                    <div className="flex flex-col gap-5">
                        <h2 className="text-[22px] md:text-[24px] font-bold text-[#1A1A1A]">
                            Event Objectives
                        </h2>
                        <ul className="flex flex-col gap-5">
                            {objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="w-[22px] h-[22px] shrink-0 mt-0.5"
                                        fill="#088E48"
                                        stroke="white"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-[#6A7282] font-Roboto text-[14.5px] font-medium leading-[1.4]">
                                        {obj}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Block */}
                    <div className="w-full">
                        <img
                            src={detailImages[1] ?? detailImages[0]}
                            alt="Event attendees"
                            className="w-full h-full object-cover rounded-[12px] border border-gray-100 shadow-sm"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=60&w=800&auto=format&fit=crop";
                            }}
                        />
                    </div>
                </div>

                {/* Bottom Paragraphs */}
                <div className="text-[#6A7282] font-Roboto text-[15.5px] leading-[1.7] space-y-5">
                    <p>{fullDescription[0]}</p>
                    {fullDescription[1] && <p>{fullDescription[1]}</p>}
                </div>

            </div>
        </section>
    );
}

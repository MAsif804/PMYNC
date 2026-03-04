"use client";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type Happening = {
    id: number;
    title: string;
    description: string;
    image: string;
    badge?: "UpComing" | "Story" | "Blog";
    date: string;
    location: string;
    category: string;
    attendees?: string;
    avatars: string[];
};

const happenings: Happening[] = [
    {
        id: 1,
        title: "Digital Skills Bootcamp: Transforming Youth into Tech-Savvy Professionals",
        description: "Hands-on coding sprint for 100 students to build open-source solutions for current governance challenges. Annual gathering of y...",
        image: "/nyc-happening/happening-1.jpg",
        badge: "UpComing",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=1", "https://i.pravatar.cc/32?img=2"],
    },
    {
        id: 2,
        title: "National Startup Pitch Competition: Connecting Innovative Entrepreneurs with Investors",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-4.jpg",
        badge: "UpComing",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=3", "https://i.pravatar.cc/32?img=4"],
    },
    {
        id: 3,
        title: "Rural Youth Development Initiative: Bridging Urban-Rural Gap Through Education",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-7.jpg",
        badge: "UpComing",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=7", "https://i.pravatar.cc/32?img=8"],
    },
    {
        id: 4,
        title: "National Youth Policy Consultation: Raising Voices for Inclusive Growth",
        description: "Focused discussions on crafting policies that represent the needs and aspirations of the nation's youth. Annual gathering of y...",
        image: "/nyc-happening/happening-2.jpg",
        badge: "UpComing",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=10", "https://i.pravatar.cc/32?img=11"],
    },
    {
        id: 5,
        title: "Youth Climate Action Summit: Mobilizing Young Environmental Leaders for Sustainable",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-5.jpg",
        badge: "UpComing",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=12", "https://i.pravatar.cc/32?img=13"],
    },
    {
        id: 6,
        title: "Civic Engagement Workshop: Inspiring Youth Participation in Democratic Processes",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-6.jpg",
        badge: "Blog",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=14", "https://i.pravatar.cc/32?img=15"],
    }
];

function HappeningCard({ item }: { item: Happening }) {
    const short = item.description.replace(/\.\.\.$/, "");

    return (
        <div className="bg-white rounded-[16px] overflow-hidden border border-[#EBEBEB] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
            {/* Image */}
            <Link href="/happening-detail" className="relative overflow-hidden aspect-[1.35/1] flex-shrink-0 cursor-pointer block">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {item.badge && (
                    <span className={`absolute top-4 right-4 text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm z-10 pointer-events-none ${item.badge === 'UpComing' ? 'bg-[#E5F0FF] text-[#006AFF]' : 'bg-white text-[#006AFF]'}`}>
                        {item.badge}
                    </span>
                )}

                {/* Date/location */}
                {item.date && (
                    <div className="absolute bottom-0 left-0 rounded-tr-[16px] bg-[#088E48] px-4 py-3 flex flex-col gap-1 max-w-[85%] z-10 pointer-events-none">
                        <span className="text-white text-[13px] font-bold leading-tight">
                            {item.date}
                        </span>
                        <span className="text-white/90 text-[11px] leading-tight truncate">
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
                            <Link href="/happening-detail" className="hover:underline">
                                <h3 className="text-[#1A1A1A] font-bold text-[16px] leading-[1.4] line-clamp-2 cursor-pointer">
                                    {item.title}
                                </h3>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm text-xs text-[#717171] bg-white border border-[#717171] rounded-md" side="top">
                            {item.title}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <p className="text-[#6A7282] font-Roboto text-[14px] leading-[1.6] flex-1 mt-1">
                    {`${short.slice(0, 100)}...`}{" "}
                    <Link
                        href="/happening-detail"
                        className="text-[#088E48] font-semibold text-[13px] hover:underline focus:outline-none ml-1 inline-block"
                    >
                        Read more
                    </Link>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 pb-1 mt-auto">
                    <span className="text-[12px] font-bold text-[#088E48] bg-[#E5F7ED] rounded-full px-4 py-1.5">
                        {item.category}
                    </span>

                    <div className="flex items-center gap-2">
                        {item.badge === "Blog" || item.id === 6 ? (
                            <span className="text-[12px] font-bold italic text-[#6A7282]">By Sarah Hafiz</span>
                        ) : (
                            <>
                                {item.attendees && (
                                    <span className="text-[11px] font-medium text-[#6A7282]">{item.attendees}</span>
                                )}
                                {item.avatars.length > 0 && (
                                    <div className="flex -space-x-2">
                                        {item.avatars.map((av, i) => (
                                            <img key={i} src={av} alt="attendee" className="w-[30px] h-[30px] rounded-full border-[2px] border-white object-cover shadow-sm" />
                                        ))}
                                        <div className="w-[30px] h-[30px] rounded-full border-[2px] border-white bg-[#F5F5F5] flex items-center justify-center shadow-sm">
                                            <span className="text-[10px] font-bold text-[#6A7282]">+2</span>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function HappeningsGrid() {
    const filters = ["All", "News", "Events", "Blog"];
    const [activeFilter, setActiveFilter] = useState("All");
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(happenings.length / itemsPerPage);

    return (
        <section className="py-20 bg-white">
            <div className="container relative px-4">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8 relative">
                    <h2 className="text-[32px] sm:text-[38px] font-black uppercase tracking-tight text-[#1A1A1A] mb-2">
                        ALL HAPPENINGS
                    </h2>
                    <p className="text-[#6A7282] text-[15px] sm:text-[16px] font-medium">
                        Stay updated with our latest Event, Stories & community activities.
                    </p>
                </div>

                {/* Segmented Filter */}
                <div className="flex items-center justify-center mb-12 w-full px-4">
                    <div className="flex bg-[#F4F4F5] rounded-full p-1.5 max-w-[700px] w-full">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex-1 py-2.5 px-4 rounded-full text-[14px] font-bold transition-all duration-300 ${activeFilter === filter
                                    ? "bg-[#088E48] text-white shadow-sm"
                                    : "text-[#52525B] hover:text-[#18181B] hover:bg-gray-200/50"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {happenings.map((item) => (
                        <HappeningCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (() => {
                    const visibleEnd = Math.min(4, totalPages - 1);
                    const showEllipsis = totalPages > visibleEnd + 1;
                    const visiblePages = Array.from({ length: visibleEnd }, (_, i) => i + 1);
                    return (
                        <div className="mt-4">
                            <Pagination>
                                <PaginationContent className="gap-0">
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }}
                                            className={`gap-1 text-[15px] font-normal border-none bg-transparent shadow-none
                                                ${page === 1 ? "pointer-events-none text-gray-300" : "text-gray-600 hover:text-gray-900 hover:bg-transparent cursor-pointer"}`}
                                        />
                                    </PaginationItem>
                                    {visiblePages.map((n) => (
                                        <PaginationItem key={n}>
                                            <PaginationLink
                                                href="#"
                                                onClick={(e) => { e.preventDefault(); setPage(n); }}
                                                className={`w-9 h-9 border-none bg-transparent shadow-none text-[15px] transition-colors cursor-pointer
                                                    ${page === n ? "font-bold text-[#088E48] hover:bg-transparent hover:text-[#088E48]" : "font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"}`}
                                            >
                                                {n}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                    {showEllipsis && (
                                        <PaginationItem>
                                            <PaginationEllipsis className="text-gray-400" />
                                        </PaginationItem>
                                    )}
                                    {totalPages > visibleEnd && (
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                onClick={(e) => { e.preventDefault(); setPage(totalPages); }}
                                                className={`w-9 h-9 border-none bg-transparent shadow-none text-[15px] transition-colors cursor-pointer
                                                    ${page === totalPages ? "font-bold text-[#088E48] hover:bg-transparent hover:text-[#088E48]" : "font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"}`}
                                            >
                                                {totalPages}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )}
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }}
                                            className={`gap-1 text-[15px] font-semibold border-none bg-transparent shadow-none
                                                ${page === totalPages ? "pointer-events-none text-gray-300" : "text-[#088E48] hover:text-[#06763c] hover:bg-transparent cursor-pointer"}`}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    );
                })()}
            </div>
        </section>
    );
}

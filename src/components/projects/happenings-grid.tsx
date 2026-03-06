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
import { Happening, happenings } from "@/data/happenings";


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

export default function HappeningsGrid() {
    const filters = ["All", "News", "Events", "Blog"];
    const [activeFilter, setActiveFilter] = useState("All");
    const [page, setPage] = useState(1);

    // Filter happenings by the type array on each happening
    const filteredHappenings = activeFilter === "All"
        ? happenings
        : happenings.filter((h) =>
            (h.type ?? []).some(
                (t) => t.toLowerCase() === activeFilter.toLowerCase()
            )
        );

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredHappenings.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = filteredHappenings.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setPage(1); // reset to first page on filter change
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

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
                                onClick={() => handleFilterChange(filter)}
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
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <HappeningCard key={item.slug} item={item} />
                        ))
                    ) : (
                        <div className="col-span-3 py-20 text-center text-gray-400">
                            <p className="text-lg font-semibold">No happenings found</p>
                            <p className="text-sm mt-1">Nothing in the &ldquo;{activeFilter}&rdquo; category yet.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (() => {
                    const visibleEnd = Math.min(4, totalPages - 1);
                    const showEllipsis = totalPages > visibleEnd + 1;
                    const visiblePages = Array.from({ length: visibleEnd }, (_, i) => i + 1);
                    return (
                        <div className="mt-10">
                            <Pagination>
                                <PaginationContent className="gap-0">
                                    {/* Previous */}
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(page - 1);
                                            }}
                                            className={`gap-1 text-[15px] font-normal border-none bg-transparent shadow-none
                                                ${page === 1
                                                    ? "pointer-events-none text-gray-300"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-transparent"
                                                }`}
                                        />
                                    </PaginationItem>

                                    {/* Visible page numbers */}
                                    {visiblePages.map((pageNumber) => (
                                        <PaginationItem key={pageNumber}>
                                            <PaginationLink
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(pageNumber);
                                                }}
                                                className={`w-9 h-9 border-none bg-transparent shadow-none text-[15px] transition-colors
                                                    ${page === pageNumber
                                                        ? "font-bold text-[#088E48] hover:bg-transparent hover:text-[#088E48]"
                                                        : "font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"
                                                    }`}
                                            >
                                                {pageNumber}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    {/* Ellipsis */}
                                    {showEllipsis && (
                                        <PaginationItem>
                                            <PaginationEllipsis className="text-gray-400" />
                                        </PaginationItem>
                                    )}

                                    {/* Last page */}
                                    {totalPages > visibleEnd && (
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(totalPages);
                                                }}
                                                className={`w-9 h-9 border-none bg-transparent shadow-none text-[15px] transition-colors
                                                    ${page === totalPages
                                                        ? "font-bold text-[#088E48] hover:bg-transparent hover:text-[#088E48]"
                                                        : "font-normal text-gray-600 hover:bg-transparent hover:text-gray-900"
                                                    }`}
                                            >
                                                {totalPages}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )}

                                    {/* Next */}
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(page + 1);
                                            }}
                                            className={`gap-1 text-[15px] font-semibold border-none bg-transparent shadow-none
                                                ${page === totalPages
                                                    ? "pointer-events-none text-gray-300"
                                                    : "text-[#088E48] hover:text-[#06763c] hover:bg-transparent"
                                                }`}
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

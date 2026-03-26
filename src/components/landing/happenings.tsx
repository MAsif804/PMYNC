"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { Happening, happenings } from "@/data/happenings";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { url } from "inspector/promises";
import { allMembers } from "@/data/members";

function HappeningCard({ item }: { item: Happening }) {
    const short = item.shortDescription.replace(/\.{3}$/, "");

    const displayMembers = item.linkedMembers?.length
        ? item.linkedMembers.map(slug => {
            const member = allMembers.find(m => m.slug === slug);
            return member ? { url: member.image, name: member.name } : null;
        }).filter(Boolean) as { url: string, name: string }[]
        : (item.avatars || []).map((url, i) => ({ url, name: `Member ${i + 1}` }));
    const visibleMembers = displayMembers.slice(0, 3);
    const hiddenMembers = displayMembers.slice(3);
    const hiddenCount = hiddenMembers.length;
    const hiddenNames = hiddenMembers.map(m => m.name).join(", ");
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
                            {item.linkedMembers && (
                                <div className="flex -space-x-2">
                                    {visibleMembers.map((m, i) => (
                                        <img
                                            key={i}
                                            src={m.url}
                                            alt={m.name}
                                            title={m.name}
                                            className="w-9 h-9 rounded-full border-2 border-white object-cover relative hover:z-10 transition-transform hover:scale-110 cursor-pointer"
                                        />
                                    ))}
                                    {hiddenCount > 0 && (
                                        <div
                                            title={hiddenNames}
                                            className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center relative hover:z-10 cursor-help"
                                        >
                                            <span className="text-[12px] font-bold text-[#7C7F82]">+{hiddenCount}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function NYCHappenings() {
    const [page, setPage] = useState(1);

    const itemsPerPage = 6;
    const totalPages = Math.ceil(happenings.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = happenings.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <section className="py-8 px- bg-white">
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
                    {/* Show all link */}
                    <div className=" absolute top-8 right-8 flex justify-end mb-6">
                        <a href="#" className="flex items-center gap-1  font-semibold text-sm text-[#088E48] transition-colors">
                            Show all happenings <ArrowUpRight className="h-4 w-4 text-[#088E48]" />
                        </a>
                    </div>
                </div>



                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {currentItems.map((item) => (
                        <HappeningCard key={item.slug} item={item} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (() => {
                    // Build the page number list: always show pages 1..visibleEnd, then ellipsis, then last
                    const visibleEnd = Math.min(4, totalPages - 1); // pages 1-4 always visible
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

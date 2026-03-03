"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

// ─── Type (must match tabs.tsx) ───────────────────────────────────────────────
export type Member = {
    id: number;
    name: string;
    location: string;
    province: string;
    designation: string;
    sectors: string[];
    description: string;
    image: string;
    period: string;
    yearStart: string;
    type: string[];
    slug: string;
};



// ─── Member Card ─────────────────────────────────────────────────────────────
function MemberCard({ m }: { m: Member }) {
    return (
        <div className="bg-white rounded-[16px] border border-[#E6E6E6] overflow-hidden flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {/* Image Section */}
            <div className="relative h-[295px] w-full p-4 pb-0">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=E5F7ED&color=088E48&size=300`;
                        }}
                    />
                    {/* Period Badge */}
                    <div className="absolute top-3 left-3 flex items-center bg-[#F5F5F5] rounded-full px-[10px] py-1 shadow-sm">
                        <span className="text-[14px] font-Roboto font-normal text-[#333333]">
                            {m.period}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow gap-2">
                {/* Name + Location */}
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-[15px] font-semibold text-[#000000] leading-snug flex-1">
                        {m.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 mt-0.5">
                        <MapPin className="h-[13px] w-[13px] text-[#6A7282]" />
                        <span className="text-[12px] text-[#475063]">{m.location}</span>
                    </div>
                </div>

                {/* Designations */}
                <div>
                    <span className="block text-[11px] text-[#90A1B9] mb-1">Designations</span>
                    <div className="inline-flex items-center rounded-md bg-[#E6FFE6] px-2.5 py-[3px]">
                        <span className="text-[11px] font-medium text-[#088E48]">{m.designation}</span>
                    </div>
                </div>

                {/* Sectors */}
                <div className="flex-grow">
                    <span className="block text-[11px] text-[#90A1B9] mb-1.5">Sectors</span>
                    <div className="flex flex-wrap gap-1.5">
                        {m.sectors.map((s, idx) => (
                            <div key={idx} className="inline-flex items-center rounded-full border border-[#0066FF] bg-[#E6F0FF] px-2 py-0.5">
                                <span className="text-[11px] text-[#0066FF]">{s}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-[12.5px] text-[#808080] leading-[1.6]">
                    {m.description.slice(0, 100)}...{" "}
                    <Link
                        href={`/members/${m.slug}`}
                        className="text-[#0066FF] underline underline-offset-2 hover:opacity-80 font-medium"
                    >
                        Read more
                    </Link>
                </p>
            </div>
        </div>
    );
}

// ─── Members Grid (pagination only) ─────────────────────────────────────────
export default function Leadershiptab({ members, totalAll }: { members: Member[]; totalAll: number }) {
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(members.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = members.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };


    return (
        <div className="flex flex-col gap-5">
            {/* Count */}
            <p className="text-[13px] text-[#6A7282]">
                Showing <span className="font-bold text-[#088E48]">{currentItems.length}</span> of{" "}
                <span className="font-semibold text-[#1A1A1A]">{totalAll}</span> members
            </p>

            {/* Grid */}
            {currentItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {currentItems.map((m) => <MemberCard key={m.id} m={m} />)}
                </div>
            ) : (
                <div className="py-20 text-center text-[#6A7282] text-[15px]">No members found</div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 border-t border-gray-100 pt-6">
                    <Pagination>
                        <PaginationContent>
                            {/* Previous */}
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page - 1);
                                    }}
                                    className={page === 1 ? "pointer-events-none opacity-50 border border-gray-200" : "cursor-pointer border border-gray-200 text-gray-600 hover:border-[#088E48] hover:text-[#088E48] transition-colors"}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }).map((_, i) => {
                                const pageNumber = i + 1;
                                return (
                                    <PaginationItem key={pageNumber}>
                                        <PaginationLink
                                            href="#"
                                            isActive={page === pageNumber}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(pageNumber);
                                            }}
                                            className={`w-9 h-9 transition-colors ${page === pageNumber
                                                ? "bg-[#088E48] text-white hover:bg-[#088E48]/90 hover:text-white border-[#088E48]"
                                                : "text-gray-600 hover:text-[#088E48]"}`}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                            {/* Next */}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page + 1);
                                    }}
                                    className={page === totalPages ? "pointer-events-none opacity-50 border border-gray-200" : "cursor-pointer border border-gray-200 text-gray-600 hover:border-[#088E48] hover:text-[#088E48] transition-colors"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}

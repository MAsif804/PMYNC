"use client";

import { useState } from "react";
import { Linkedin, MapPin, Phone } from "lucide-react";
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

// ─── Type (must match tabs.tsx) ───────────────────────────────────────────────
export type Member = {
    id: number;
    name: string;
    location: string;
    province: string;
    designation: string;
    sectors: string[];
    description: string;
    socials: {
        linkedin?: string;
        email?: string;
        phone?: string;
    };
    image: string;
    period: string;
    yearStart: string;
    type: string[];
    slug: string;
};

const ITEMS_PER_PAGE = 6;

// ─── Member Card ─────────────────────────────────────────────────────────────
function MemberCard({ m }: { m: Member }) {
    return (
        <div className="bg-white rounded-[12px] p-4 shadow-sm border border-[#E7E7E7] hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative rounded-[8px] overflow-hidden mb-4 aspect-[4/3]">
                <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top-left Badge */}
                <div className="absolute top-3 left-3 flex items-center bg-[#F5F5F5] rounded-full px-[10px] py-1 shadow-sm">
                    <span className="text-[14px] font-Roboto font-normal text-[#333333]">
                        {m.period}
                    </span>
                </div>

                {/* Top-right Social Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {m.socials.linkedin && (
                        <a href={m.socials.linkedin} className="w-8 h-8 rounded-full bg-[#0076B2] shadow-sm flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-colors">
                            <Linkedin className="w-4 h-4 fill-white text-white" />
                        </a>
                    )}
                    {m.socials.email && (
                        <a href={m.socials.email} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-black hover:text-white text-[#1A1A1A] transition-colors">
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
                    {m.socials.phone && (
                        <a href={m.socials.phone} className="w-8 h-8 rounded-full bg-[#088E48] white shadow-sm flex items-center justify-center hover:bg-[#088E48] text-white hover:text-[#088E48] transition-colors">
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
                        {m.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[#088E48] shrink-0 mt-0.5">
                        <MapPin className="h-[18px] w-[18px] aspect-square" />
                        <span className="text-[14px] font-Roboto font-medium text-[#475063]">{m.location}</span>
                    </div>
                </div>

                {/* Designations */}
                <div className="mb-2">
                    <span className="block text-[14px] text-[#90A1B9] mb-1 font-normal">Designations</span>
                    <div className="inline-flex items-center rounded-md bg-[#E6FFE6] px-2 py-[2px]">
                        <span className="text-[12px] font-Roboto font-normal text-[#088E48]">{m.designation}</span>
                    </div>
                </div>

                {/* Sectors */}
                <div className="mb-2 flex-grow">
                    <span className="block text-[12px] text-[#90A1B9] mb-2 font-normal font-Roboto">Sectors</span>
                    <div className="flex flex-wrap gap-2">
                        {m.sectors.map((sector, idx) => (
                            <div key={idx} className="inline-flex items-center rounded-full border border-[#0066FF] bg-[#E6F0FF] px-2 py-0.5">
                                <span className="text-[12px] font-Roboto font-normal text-[#0066FF]">{sector}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-[14px] font-Roboto font-normal text-[#808080] leading-[1.6]">
                    {m.description}{" "}
                    <Link href="#" className="text-[#0066FF] underline decoration-[#0066FF]/50 underline-offset-2 hover:decoration-[#0066FF] font-medium inline-block">
                        Read more
                    </Link>
                </p>
            </div>
        </div>
    );
}

// ─── Members Grid (pagination only) ─────────────────────────────────────────
export default function MembersGrid({ members, totalAll }: { members: Member[]; totalAll: number }) {
    const [page, setPage] = useState(1);

    const totalPages = Math.max(1, Math.ceil(members.length / ITEMS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const paginated = members.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

    return (
        <div className="flex flex-col gap-5">
            {/* Count */}
            <p className="text-[13px] text-[#6A7282]">
                Showing <span className="font-bold text-[#088E48]">{paginated.length}</span> of{" "}
                <span className="font-semibold text-[#1A1A1A]">{totalAll}</span> members
            </p>

            {/* Grid */}
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginated.map((m) => <MemberCard key={m.id} m={m} />)}
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
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    className={safePage === 1 ? "pointer-events-none opacity-30" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {/* First 4 pages */}
                            {Array.from({ length: Math.min(4, totalPages) }, (_, i) => i + 1).map((n) => (
                                <PaginationItem key={n}>
                                    <PaginationLink
                                        onClick={() => setPage(n)}
                                        isActive={safePage === n}
                                        className={`cursor-pointer ${safePage === n
                                            ? "bg-[#088E48] text-white border-[#088E48] hover:bg-[#077a3e] hover:text-white"
                                            : ""
                                            }`}
                                    >
                                        {n}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {/* Ellipsis + last page */}
                            {totalPages > 4 && (
                                <>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            onClick={() => setPage(totalPages)}
                                            isActive={safePage === totalPages}
                                            className={`cursor-pointer ${safePage === totalPages
                                                ? "bg-[#088E48] text-white border-[#088E48] hover:bg-[#077a3e] hover:text-white"
                                                : ""
                                                }`}
                                        >
                                            {totalPages}
                                        </PaginationLink>
                                    </PaginationItem>
                                </>
                            )}

                            {/* Next */}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                    className={safePage === totalPages ? "pointer-events-none opacity-30" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}

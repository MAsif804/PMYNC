"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, UsersRound } from "lucide-react";
import { projects } from "@/data/projects";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const dots = [
    { top: "12%", left: "22%" },
    { top: "20%", left: "60%" },
    { top: "30%", left: "42%" },
    { top: "50%", left: "63%" },
    { top: "70%", left: "36%" },
    { top: "80%", left: "84%" },
    { top: "60%", left: "10%" },
    { top: "88%", left: "52%" },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsGrid() {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const currentProjects = projects.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{ background: "radial-gradient(ellipse at 0% 50%, #003d1f 0%, #000d05 50%, #000000 100%)" }}
        >
            {/* Decorative animated dots */}
            {dots.map((dot, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-green-700/40 animate-float"
                    style={{
                        top: dot.top,
                        left: dot.left,
                        width: "6px",
                        height: "6px",
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${5 + (i % 3)}s`,
                    }}
                />
            ))}
            <div className="container relative z-10 px-4 max-w-[1240px] mx-auto">
                {/* Header Row */}
                <div className="flex flex-col items-center justify-center text-center mb-14">
                    {/* "NYC" outlined + "PROJECTS" filled */}
                    <h2 className="text-[32px] md:text-[46px] lg:text-[56px] font-black tracking-tight uppercase leading-none mb-4 flex items-center justify-center">
                        <span
                            className="text-transparent mr-3"
                            style={{ WebkitTextStroke: "1px #ffffff" }}
                        >
                            NYC
                        </span>
                        <span className="text-white">PROJECTS</span>
                    </h2>
                    <p className="text-[#E2E8F0] text-[15px] md:text-[18px] font-medium max-w-[800px]">
                        Transforming Pakistan through youth-led initiatives across leadership, technology, environment, and social development
                    </p>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
                    {currentProjects.map((project, idx) => {
                        const short = project.shortDescription.replace(/\.{3}$/, "");

                        return (
                            <div key={idx} className="flex flex-col bg-white rounded-[16px] overflow-hidden group hover:shadow-[0_8px_30px_rgba(8,142,72,0.15)] transition-all duration-300">
                                {/* Image */}
                                <Link href={`/projects/${project.slug}`} className="relative group/img overflow-hidden flex-shrink-0 cursor-pointer block h-[240px]">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                    {/* Date badge */}
                                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white rounded-full px-3 py-1.5 pointer-events-none shadow-sm">
                                        <CalendarClock className="h-4 w-4 aspect-square text-[#088E48]" />
                                        <span className="text-[12px] font-medium text-[#6A7282]">
                                            {project.dateStart}
                                            <span className="text-[#088E48] px-1">→</span>
                                            {project.dateEnd}
                                        </span>
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-5 gap-3">
                                    <Link href={`/projects/${project.slug}`} className="hover:underline">
                                        <h3 className="text-[#1A1A1A] font-bold text-[18px] leading-snug line-clamp-2">
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <p className="text-[#6A7282] text-[15px] leading-relaxed flex-1">
                                        {`${short.slice(0, 100)}...`}{" "}
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="text-[#088E48] font-bold hover:underline focus:outline-none"
                                        >
                                            Read more
                                        </Link>
                                    </p>

                                    {/* Footer: Beneficiaries + Avatars */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5] mt-2">
                                        <div className="flex items-center gap-2 text-[#6A7282]">
                                            <UsersRound className="h-[22px] w-[22px] text-[#088E48]" />
                                            <div className="flex flex-col">
                                                <span className="text-[12px] font-normal leading-tight">Beneficiaries</span>
                                                <span className="text-[14px] font-bold text-[#088E48] leading-tight">{project.beneficiaries}</span>
                                            </div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {project.avatars.slice(0, 3).map((av, i) => (
                                                <img
                                                    key={i}
                                                    src={av}
                                                    alt="member"
                                                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                                                />
                                            ))}
                                            <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-sm relative z-10 text-[12px] font-bold text-[#7C7F82]">
                                                +2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Pagination */}
            {totalPages > 1 && (() => {
                const visibleEnd = Math.min(4, totalPages - 1);
                const showEllipsis = totalPages > visibleEnd + 1;
                const visiblePages = Array.from({ length: visibleEnd }, (_, i) => i + 1);
                return (
                    <Pagination>
                        <PaginationContent className="gap-0">
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }}
                                    className={`gap-1 text-[15px] font-normal border-none bg-transparent shadow-none
                                        ${page === 1 ? "pointer-events-none text-gray-400" : "text-white/70 hover:text-white hover:bg-transparent cursor-pointer"}`}
                                />
                            </PaginationItem>
                            {visiblePages.map((n) => (
                                <PaginationItem key={n}>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); setPage(n); }}
                                        className={`w-9 h-9 border-none bg-transparent shadow-none text-[15px] transition-colors cursor-pointer
                                            ${page === n ? "font-bold text-[#088E48] hover:bg-transparent hover:text-[#088E48]" : "font-normal text-white/70 hover:bg-transparent hover:text-white"}`}
                                    >
                                        {n}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            {showEllipsis && (
                                <PaginationItem>
                                    <PaginationEllipsis className="text-white/50" />
                                </PaginationItem>
                            )}
                            {totalPages > visibleEnd && (
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); setPage(totalPages); }}
                                        className={`w-9 h-9 border-none bg-transparent shadow-none text-[15px] transition-colors cursor-pointer
                                            ${page === totalPages ? "font-bold text-[#088E48] hover:bg-transparent hover:text-[#088E48]" : "font-normal text-white/70 hover:bg-transparent hover:text-white"}`}
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
                                        ${page === totalPages ? "pointer-events-none text-gray-400" : "text-[#088E48] hover:text-[#06763c] hover:bg-transparent cursor-pointer"}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                );
            })()}
        </section>
    );
}

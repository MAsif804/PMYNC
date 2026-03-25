"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, CalendarClock, UsersRound } from "lucide-react";
import Link from "next/link";

import { Project, projects } from "@/data/projects";
import { allMembers } from "@/data/members";

function ProjectCard({ project }: { project: Project }) {
    const short = project.shortDescription.replace(/\.{3}$/, "");

    // Get avatar URLs from linkedMembers (if any), otherwise fallback to the avatars array
    const displayMembers = project.linkedMembers?.length
        ? project.linkedMembers.map(slug => {
            const member = allMembers.find(m => m.slug === slug);
            return member ? { url: member.image, name: member.name } : null;
        }).filter(Boolean) as { url: string, name: string }[]
        : (project.avatars || []).map((url, i) => ({ url, name: `Member ${i + 1}` }));

    const visibleMembers = displayMembers.slice(0, 3);
    const hiddenMembers = displayMembers.slice(3);
    const hiddenCount = hiddenMembers.length;
    const hiddenNames = hiddenMembers.map(m => m.name).join(", ");

    return (
        <div className="flex flex-col flex-1 p-4 gap-2">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
                <h3 className="text-black font-bold text-lg leading-snug line-clamp-2">
                    {project.title}
                </h3>
            </Link>
            <p className="text-[#6A7282] text-sm leading-relaxed flex-1">
                {`${short.slice(0, 120)}...`}{" "}
                <Link
                    href={`/projects/${project.slug}`}
                    className="text-[#088E48] font-semibold hover:underline focus:outline-none"
                >
                    Read more
                </Link>
            </p>

            {/* Footer: Beneficiaries + Avatars */}
            <div className="flex items-center justify-between pt-2 border-t border-[#B3B3B3]">
                <div className="flex items-center gap-1 text-[#6A7282]">
                    <UsersRound className="h-6 w-6 aspect-square text-[#088E48]" />
                    <div className="flex flex-col">
                        <span className="text-[12px] font-normal">Beneficiaries</span>
                        <span className="text-[14px] font-medium text-[#088E48]">{project.beneficiaries}</span>
                    </div>
                </div>
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
            </div>
        </div>
    );
}




const dots = [
    { top: "15%", left: "8%" },
    { top: "25%", left: "55%" },
    { top: "60%", left: "30%" },
    { top: "75%", left: "72%" },
    { top: "45%", left: "88%" },
    { top: "85%", left: "15%" },
];

export default function Projects() {
    return (
        <section
            className="relative py-20 overflow-hidden"
            style={{ background: "radial-gradient(ellipse at 100% 50%, #003d1f 0%, #000d05 50%, #000000 100%)" }}
        >
            {/* Decorative animated dots */}
            {dots.map((dot, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-green-700/30 animate-float"
                    style={{
                        top: dot.top,
                        left: dot.left,
                        width: "6px",
                        height: "6px",
                        animationDelay: `${i * 0.9}s`,
                        animationDuration: `${5 + (i % 3)}s`,
                    }}
                />
            ))}

            <div className="container relative z-10">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-3 text-center sm:text-left">
                    <div>
                        {/* "NYC" outlined + "PROJECTS" filled */}
                        <h2 className="text-4xl text-center sm:text-5xl font-extrabold tracking-tight uppercase leading-none">
                            <span
                                className="text-transparent mr-2"
                                style={{ WebkitTextStroke: "1px #ffffff" }}
                            >
                                NYC
                            </span>
                            <span className="text-white">PROJECTS</span>
                        </h2>
                        <p className="text-white text-[18px] font-normal  mt-2">
                            Transforming Pakistan through youth-led initiatives across leadership, technology, environment, and social development
                        </p>
                    </div>
                    <a
                        href="/projects"
                        className="flex items-center gap-1 text-white font-semibold text-sm hover:text-green-400 text-center sm:text-left transition-colors whitespace-nowrap mt-1"
                    >
                        Show all projects <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Carousel */}
                <Carousel opts={{ align: "start", loop: false }} className="w-full">
                    <div className="flex justify-end mb-3 gap-2">
                        <CarouselPrevious className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                        <CarouselNext className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                    </div>

                    <CarouselContent className="-ml-4">
                        {projects.map((project) => (
                            <CarouselItem key={project.slug} className="pl-4 md:basis-1/3">
                                <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-green-900/40 hover:border-green-600 shadow-lg group hover:shadow-[0_0_24px_rgba(8,142,72,0.25)] transition-all duration-300">
                                    {/* Image */}
                                    {/* Image */}
                                    <Link href={`/projects/${project.slug}`} className="relative group/img overflow-hidden flex-shrink-0 cursor-pointer text-inherit">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-[240px] md:h-full object-cover transform group-hover/img:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                        {/* Date badge */}
                                        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white rounded-full px-2 py-1 pointer-events-none">
                                            <CalendarClock className="h-4 w-4 aspect-square text-[#088E48]" />
                                            <span className="text-[12px] font-normal text-[#6A7282]">
                                                {project.dateStart}
                                                <span className="text-[#088E48] px-1">→</span>
                                                {project.dateEnd}
                                            </span>
                                        </div>

                                    </Link>

                                    {/* Content */}
                                    <ProjectCard project={project} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section >
    );
}

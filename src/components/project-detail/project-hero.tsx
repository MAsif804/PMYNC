"use client";

import { Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Project } from "@/data/projects";

export default function ProjectHero({ project }: { project: Project }) {
    return (

        <section className="relative h-[600px] md:h-[700px] lg:h-[90vh] w-full overflow-hidden bg-black">
            {/* Background Image Placeholder - In production use Image component */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${project.thumbnail}')` }}
            />
            <div className="container relative h-full">
                {/* Floating Logo Badge (Bottom Left) */}
                <div>
                    <Avatar className="absolute bottom-[12px] left-0 flex size-[200px] items-center justify-center rounded-full bg-white border-2 border-[#088E48] ">
                        <AvatarImage src="/pmyp-logo.png" className="w-[140px] h-[160px] object-contain " />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                </div>

                {/* Date Badge (Bottom Right) */}
                <div className="absolute bottom-6 right-4 md:right-8 bg-white/95 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-gray-100 z-10">
                    <Calendar className="w-5 h-5 text-[#088E48]" />
                    <span className="text-[14px] text-[#6A7282]">
                        {project.dateStart} <span className="text-[#088E48] px-1">→</span> {project.dateEnd}
                    </span>
                </div>


            </div>
        </section>
    );
}

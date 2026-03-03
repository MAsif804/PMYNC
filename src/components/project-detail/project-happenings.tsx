"use client";

import { ArrowUpRight, } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type Happening = {
    id: number;
    title: string;
    description: string;
    image: string;
    badge?: "UpComing" | "Story";
    date: string;
    location: string;
    category: string;
    attendees: string;
    author?: string;
    avatars: string[];
};

const happenings: Happening[] = [
    {
        id: 1,
        title: "National Startup Pitch Competition: Connecting Innovative Entrepreneurs with Investors",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-4.jpg",
        badge: "UpComing",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=1", "https://i.pravatar.cc/32?img=2"],
    },
    {
        id: 2,
        title: "Rural Youth Development Initiative: Bridging Urban-Rural Gap Through Education",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-7.jpg",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=3", "https://i.pravatar.cc/32?img=4"],
    },
    {
        id: 3,
        title: "Civic Engagement Workshop: Inspiring Youth Participation in Democratic Processes",
        description: "Annual gathering of young leaders from across Pakistan to discuss policy development, innovation, and youth empowerment strategies Annual gathering of y...",
        image: "/nyc-happening/happening-6.jpg",
        date: "Sunday, March 17, 9:00 AM",
        location: "Convention center, Islamabad, Pakistan",
        category: "Technology",
        attendees: "150+ Attendees",
        avatars: ["https://i.pravatar.cc/32?img=7", "https://i.pravatar.cc/32?img=8"],
    },
];

function HappeningCard({ item }: { item: Happening }) {
    const short = item.description.replace(/\.\.\.$/, "");

    return (
        <div className="bg-white rounded-[12px] overflow-hidden border border-[#E7E7E7] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
            {/* Image */}
            <Link href="/happening-detail" className="relative overflow-hidden aspect-[1.5/1] flex-shrink-0 cursor-pointer block">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {item.badge && (
                    <span className="absolute top-3 right-3 text-[#3385FF] text-[12px] font-semibold px-4 py-1 rounded-full bg-white/95 shadow-sm backdrop-blur-sm pointer-events-none">
                        {item.badge}
                    </span>
                )}

                {/* Date/location */}
                {item.date && (
                    <div className="absolute bottom-0 left-0 rounded-tr-[12px] bg-[#088E48] px-3 py-2 flex flex-col gap-0.5 max-w-[85%] pointer-events-none">
                        <span className="text-white font-Roboto text-[12px] font-bold leading-tight">
                            {item.date}
                        </span>
                        <span className="text-white/90 font-Roboto text-[11px] leading-tight truncate">
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
                <div className="flex items-center justify-between pt-3 mt-auto border-t border-[#F5F5F5]">
                    <span className="text-[12px] font-medium text-[#088E48] bg-[#E5F7ED] rounded-full px-3 py-1">
                        {item.category}
                    </span>

                    <div className="flex items-center gap-2">
                        {item.attendees && (
                            <span className="text-[11px] font-medium text-[#6A7282]">{item.attendees}</span>
                        )}
                        {item.avatars.length > 0 && (
                            <div className="flex -space-x-2">
                                {item.avatars.map((av, i) => (
                                    <img key={i} src={av} alt="attendee" className="w-[28px] h-[28px] rounded-full border-[2px] border-white object-cover" />
                                ))}
                                <div className="w-[28px] h-[28px] rounded-full border-[2px] border-white bg-[#F5F5F5] flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-[#6A7282]">+2</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectHappenings() {
    return (
        <section className="py-16 bg-[#F8FAFC]">
            <div className="container relative">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10 relative">
                    <h2 className="text-[32px] sm:text-[40px] font-bold uppercase tracking-tight text-[#1A1A1A] mb-2">
                        HAPPENINGS
                    </h2>
                    <p className="text-[#6A7282] font-Roboto text-[18px]">
                        Discover upcoming and past events under this program
                    </p>

                    {/* Top right "Show all" link on desktop */}
                    <div className="hidden lg:block absolute top-0 right-0">
                        <a href="#" className="flex items-center gap-1 font-semibold text-sm text-[#088E48] hover:text-[#067A3D] transition-colors">
                            Show all events <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Carousel wrapper */}
                <div className="relative">
                    <Carousel opts={{ align: "start", loop: false }} className="w-full">
                        {/* Carousel Navigation positioned top right */}
                        <div className="absolute -top-[70px] right-0 hidden lg:flex gap-2">
                            <CarouselPrevious className="static translate-y-0 h-8 w-8 bg-[#088E48] hover:bg-[#067A3D] text-white border-none rounded-[4px] flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4" />
                            <CarouselNext className="static translate-y-0 h-8 w-8 bg-[#088E48] hover:bg-[#067A3D] text-white border-none rounded-[4px] flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4" />
                        </div>

                        <CarouselContent className="-ml-5">
                            {happenings.map((item) => (
                                <CarouselItem key={item.id} className="pl-5 md:basis-1/2 lg:basis-1/3">
                                    <HappeningCard item={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

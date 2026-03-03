"use client";

import { useState } from "react";
import { CircleHelp, Users, Handshake, Monitor, Lightbulb } from "lucide-react";
import MonitorCog from "lucide-react";
const categories = [
    {
        id: "general",
        icon: CircleHelp,
        title: "General Inquiries",
        subtitle: "Ask Us anything!",
    },
    {
        id: "member",
        icon: Users,
        title: "Become Member",
        subtitle: "Learn How to get involved",
    },
    {
        id: "partnership",
        icon: Handshake,
        title: "Partnership Inquiries",
        subtitle: "Let's Work together",
        defaultActive: true,
    },
    {
        id: "technical",
        icon: Monitor,
        title: "Technical Support",
        subtitle: "Report a site issue",
    },
    {
        id: "policy",
        icon: Lightbulb,
        title: "Policy Feedback & Suggestions",
        subtitle: "Help us improve",
    },
];

export default function HelpYou() {
    const [active, setActive] = useState("partnership");

    return (
        <section className="py-14 bg-white">
            <div className="container">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold text-[#1A1A1A] uppercase tracking-wide leading-snug">
                        How Can We Help You Today?
                    </h2>
                    <p className="text-[#6A7282] text-[14px] sm:text-[15px] mt-2">
                        Choose the category that best matches your inquiry and we will connect you to the right support team.
                    </p>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = active === cat.id;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActive(cat.id)}
                                className={`
                                    flex flex-col items-center text-center gap-3 p-5 rounded-[14px] border transition-all duration-200 cursor-pointer
                                    ${isActive
                                        ? "bg-[#088E48] border-[#088E48] shadow-lg"
                                        : "bg-white border-[#088E48]/40 hover:border-[#088E48] hover:shadow-md"
                                    }
                                `}
                            >
                                {/* Icon container */}
                                <div className={`
                                    w-10 h-10 rounded-full flex items-center justify-center
                                    ${isActive ? "bg-white/20" : "bg-[#E5F7ED]"}
                                `}>
                                    <Icon
                                        className={`w-5 h-5 ${isActive ? "text-white" : "text-[#088E48]"}`}
                                        strokeWidth={1.75}
                                    />
                                </div>

                                {/* Title */}
                                <p className={`font-bold text-[14px] leading-tight ${isActive ? "text-white" : "text-[#1A1A1A]"}`}>
                                    {cat.title}
                                </p>

                                {/* Subtitle */}
                                <p className={`text-[12.5px] leading-tight ${isActive ? "text-white/85" : "text-[#6A7282]"}`}>
                                    {cat.subtitle}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

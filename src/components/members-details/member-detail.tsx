"use client";

import Link from "next/link";
import { MapPin, Linkedin, Phone } from "lucide-react";
import { type Member } from "@/data/members";
import NYCHappenings from "@/components/members-details/happenings";

// ─── Gmail SVG Icon ───────────────────────────────────────────────────────────
function GmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
            <g clipPath="url(#gmail_clip)">
                <path d="M3.636 11.94V5.79L1.72 4.046 0 3.078v7.778C0 11.456.489 11.94 1.09 11.94H3.636Z" fill="#4285F4" />
                <path d="M12.364 11.94h2.545c.604 0 1.091-.486 1.091-1.085V3.078l-1.947 1.11L12.364 5.79v6.15Z" fill="#34A853" />
                <path d="M3.636 5.79L3.375 3.388 3.636 1.088 8 4.344l4.364-3.256.292 2.176-.292 2.527L8 9.047 3.636 5.791Z" fill="#EA4335" />
                <path d="M12.364 1.088V5.79L16 3.078V1.631C16 .289 14.46-.476 13.382.329L12.364 1.088Z" fill="#FBBC04" />
                <path d="M0 3.078l1.672 1.248L3.636 5.79V1.088L2.618.329C1.538-.476 0 .289 0 1.631v1.447Z" fill="#C5221F" />
            </g>
            <defs>
                <clipPath id="gmail_clip">
                    <rect width="16" height="12" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MemberDetailView({ member }: { member: Member }) {
    return (
        <div className="bg-white min-h-screen px-12 py-12">
            {/* ── Two-column profile section ── */}
            <div className="container ">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    <div className="w-full lg:w-[253px] shrink-0">
                        <div className="border border-[#FCFCFC] rounded-[16px] bg-[#FEFEFE] p-4 flex flex-col items-center justify-end gap-4">

                            {/* Period */}
                            <span className="px-2.5 py-1 bg-[#F5F5F5] rounded-full self-end text-[14px] font-Roboto font-normal text-[#333333]  text-end">
                                {member.period}
                            </span>

                            {/* Photo */}
                            <div className="w-auto h-[221px] rounded-full overflow-hidden border border-[#088E48] shadow">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-[221px] h-[221px] object-cover object-top"
                                />
                            </div>

                            {/* Name */}
                            <h1 className="text-[28px] font-bold text-[#000000] text-center leading-snug">
                                {member.name}
                            </h1>

                            {/* Type badges */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {member.type.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-[12px] font-medium px-2.5 py-0.5 rounded-full capitalize font-Roboto"
                                        style={{
                                            background: i % 2 === 0 ? "#DCFCE7" : "#DBEAFE",
                                            color: i % 2 === 0 ? "#166534" : "#1D4ED8",
                                        }}
                                    >
                                        {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </span>
                                ))}
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-1">
                                <MapPin className="w-[18px] h-[18px] text-[#088E48] shrink-0" />
                                <span className="text-[14px] text-[#475063] font-Roboto font-normal">{member.location}</span>
                            </div>

                            {/* Social icons */}
                            {(member.socials.linkedin || member.socials.email || member.socials.phone) && (
                                <div className="flex items-center justify-between w-full">
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[36px] h-[36px] rounded-full bg-[#0076B2] flex items-center justify-center hover:opacity-80 transition-opacity"
                                        >
                                            <Linkedin className="w-[16px] h-[16px] fill-white text-white" />
                                        </a>
                                    )}
                                    {member.socials.email && (
                                        <a
                                            href={`mailto:${member.socials.email}`}
                                            className="w-[36px] h-[36px] rounded-full bg-white border border-[#E6E6E6] flex items-center justify-center hover:bg-gray-50 transition-colors"
                                        >
                                            <GmailIcon  />
                                        </a>
                                    )}
                                    {member.socials.phone && (
                                        <a
                                            href={`tel:${member.socials.phone}`}
                                            className="w-[36px] h-[36px] rounded-full bg-[#088E48] flex items-center justify-center hover:opacity-80 transition-opacity"
                                        >
                                            <Phone className="w-[16px] h-[16px] text-white" />
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* Sectors */}
                            {member.sectors.length > 0 && (
                                <div className="w-full border-t border-[#E4E4E4] pt-2.5">
                                    <span className="block text-[14px] font-Roboto font-normal text-[#90A1B9] mb-2">Sectors</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {member.sectors.map((s, i) => (
                                            <span
                                                key={i}
                                                className="text-[12px] font-normal font-Roboto text-[#0066FF] px-2 py-0.5 rounded-full border border-[#0066FF] bg-[#E6F0FF]"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ══ Right Content ══ */}
                    <main className="flex-1 min-w-0 flex flex-col gap-4">
                        {/* Introduction */}
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[28px] font-bold text-[#000000] leading-[44px]">
                                Introduction
                            </h2>
                            <p className="text-[20px] text-[#6A7282] leading-[1.8]">
                                {member.description}
                            </p>
                        </div>

                        {/* Achievements */}
                        {member.achievements && member.achievements.length > 0 && (
                            <section>
                                <h2 className="text-[28px] font-bold text-[#000000] leading-[44px] mb-4">
                                    Achievements
                                </h2>
                                <div className="flex flex-col gap-5">
                                    {member.achievements.map((a, i) => (
                                        <div key={i}>
                                            <h3 className="text-[20px] font-bold text-[#088E48] mb-1">
                                                {a.title}
                                            </h3>
                                            <p className="text-[18px] text-[#6A7282] leading-[1.8]">
                                                {a.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

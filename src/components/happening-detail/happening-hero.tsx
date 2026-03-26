"use client";

import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { Happening } from "@/data/happenings";

export default function HappeningHero({ happening }: { happening: Happening }) {
    const locationText = happening.location || (happening.locations?.[0] ?? "Islamabad, Pakistan");

    return (
        <section className="relative h-[600px] md:h-[700px] lg:h-[90vh] w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${happening.thumbnail}')` }}
            />
            {/* Subtle dark overlay for readability */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Floating Cards — right side, vertically centered */}
            <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-4 z-10 hidden md:flex">
                {/* Location Card */}
                <div className="bg-[#088E48] rounded-[16px] p-5 shadow-xl w-[270px] flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-white shrink-0" />
                        <span className="text-white text-[13px] font-semibold">Location</span>
                    </div>
                    <p className="text-white font-semibold text-[14px] leading-snug">
                        {locationText}
                    </p>
                    <p className="text-white/85 text-[12px] leading-snug -mt-2">
                        Plot 1-2, Constitution Avenue, G-5/2,<br />Islamabad, Pakistan
                    </p>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white text-[#088E48] font-bold text-[12px] px-4 py-2 rounded-[6px] hover:bg-gray-50 transition-colors w-full mt-1"
                    >
                        View on map &nbsp;↗
                    </a>
                </div>

                {/* Contact Info Card */}
                <div className="bg-[#088E48] rounded-[16px] p-5 shadow-xl w-[270px] flex flex-col gap-3">
                    <span className="text-white text-[13px] font-semibold">Contact Information</span>
                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-white/80 shrink-0" />
                        <span className="text-white text-[12px]">123@pmnyepk.gov.pk</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-white/80 shrink-0" />
                        <span className="text-white text-[12px]">+92 123456789</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-white/80 shrink-0" />
                        <span className="text-white text-[12px]">www.pmnyc.gov.pk</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

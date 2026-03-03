"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export default function JoinCTA() {
    return (
        <section className="relative py-24 bg-[#020D04] overflow-hidden flex items-center justify-center min-h-[360px]">
            {/* Background Glow */}
            <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#088E48]/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Floating dots decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-[#088E48]/40 animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-[#088E48]/30 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-[30%] right-[40%] w-2.5 h-2.5 rounded-full bg-[#088E48]/50 animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-[#088E48]/40 animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-[30%] left-[40%] w-1.5 h-1.5 rounded-full bg-[#088E48]/30 animate-float" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-[40%] left-[30%] w-2 h-2 rounded-full bg-[#088E48]/40 animate-float" style={{ animationDelay: '2.5s' }} />
            </div>

            <div className="container relative z-10 text-center px-4">
                <h2 className="text-[32px] sm:text-[44px] font-bold text-white tracking-wide mb-4">
                    Join the Movement for a Better Pakistan
                </h2>
                <p className="text-[#E7E7E7] text-[18px] sm:text-[18px] leading-[1.6] max-w-4xl mx-auto mb-6 font-Roboto">
                    Be part of Pakistan&apos;s national youth network. Stay updated with the Council&apos;s programs, opportunities, and events
                </p>
                <div className="flex justify-center">
                    <Button variant="green" className="rounded-[12px]">
                        Explore Opportunities
                        <ArrowUpRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

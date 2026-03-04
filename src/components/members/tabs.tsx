"use client";

import { useState, useMemo } from "react";
import { Search, Crown, Users, GraduationCap } from "lucide-react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import MembersGrid from "./members-tab";
import { allMembers } from "@/data/members";
import Leadershiptab from "./leadership-tab";


const REGIONS = ["All Regions", "Punjab", "Sindh", "KPK", "Balochistan", "AJK", "Gilgit-Baltistan"];
const SECTORS = ["All Sectors", "Policy Development", "Youth Engagement", "Digital Skills", "Entrepreneurship", "Education", "Health", "Technology"];
const YEARS = ["All Years", "2019", "2020", "2021", "2022", "2023"];

// ─── Main Tabs Component ──────────────────────────────────────────────────────
export default function MembersTabs() {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All Regions");
    const [sector, setSector] = useState("All Sectors");
    const [year, setYear] = useState("All Years");

    // Shared filters applied across all tabs
    const filtered = useMemo(() => {
        return allMembers.filter((m) => {
            const matchSearch =
                search === "" ||
                m.name.toLowerCase().includes(search.toLowerCase()) ||
                m.location.toLowerCase().includes(search.toLowerCase());
            const matchRegion = region === "All Regions" || m.province === region;
            const matchSector = sector === "All Sectors" || m.sectors.includes(sector);
            const matchYear = year === "All Years" || m.yearStart === year;
            return matchSearch && matchRegion && matchSector && matchYear;
        });
    }, [search, region, sector, year]);

    const leadership = filtered.filter((m) => m.type.includes("leadership"));
    const members = filtered.filter((m) => m.type.includes("member"));
    const alumni = filtered.filter((m) => m.type.includes("alumni"));

    const totalLeadership = allMembers.filter((m) => m.type.includes("leadership")).length;
    const totalMembers = allMembers.filter((m) => m.type.includes("member")).length;
    const totalAlumni = allMembers.filter((m) => m.type.includes("alumni")).length;

    const dropdownClass =
        "border border-gray-200 rounded-[8px] px-3 py-[8px] text-[13px] text-[#6A7282] bg-white outline-none cursor-pointer appearance-none pr-8 focus:border-[#088E48]";

    return (
        <section className="py-8 bg-white">
            <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-6">

                {/* ── Filter Bar ── */}
                <div className="flex flex-col sm:flex-row items-center gap-3 border border-gray-200 bg-[#FAFAFA] rounded-[12px] px-4 py-3">
                    {/* Search */}
                    <div className="flex items-center gap-2 flex-1 min-w-0 bg-white px-3 py-[8px] rounded-[8px] border border-gray-200">
                        <Search className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                        <input
                            type="text"
                            placeholder="Search by name or city..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 min-w-0 text-[13px] text-[#1A1A1A] outline-none placeholder:text-[#9CA3AF] bg-transparent"
                        />
                    </div>
                    {/* Dropdowns */}
                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                        <div className="relative">
                            <select value={region} onChange={(e) => setRegion(e.target.value)} className={dropdownClass}>
                                {REGIONS.map((r) => <option key={r}>{r}</option>)}
                            </select>
                            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none text-[11px]">▾</span>
                        </div>
                        <div className="relative">
                            <select value={sector} onChange={(e) => setSector(e.target.value)} className={dropdownClass}>
                                {SECTORS.map((s) => <option key={s}>{s}</option>)}
                            </select>
                            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none text-[11px]">▾</span>
                        </div>
                        <div className="relative">
                            <select value={year} onChange={(e) => setYear(e.target.value)} className={dropdownClass}>
                                {YEARS.map((y) => <option key={y}>{y}</option>)}
                            </select>
                            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none text-[11px]">▾</span>
                        </div>
                    </div>
                </div>

                {/* ── Tabs ── */}
                <Tabs defaultValue="leadership">
                    <TabsList className="h-auto w-full max-w-[600px] mx-auto bg-[#F5F5F5] p-1 rounded-[10px] flex mb-5">
                        <TabsTrigger
                            value="leadership"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[13.5px] font-semibold rounded-[8px] text-[#6A7282]
                                data-[state=active]:bg-[#088E48] data-[state=active]:text-white data-[state=active]:shadow-none
                                hover:text-[#088E48] transition-colors"
                        >
                            <Crown className="w-4 h-4" /> Leadership
                        </TabsTrigger>
                        <TabsTrigger
                            value="members"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[13.5px] font-semibold rounded-[8px] text-[#6A7282]
                                data-[state=active]:bg-[#088E48] data-[state=active]:text-white data-[state=active]:shadow-none
                                hover:text-[#088E48] transition-colors"
                        >
                            <Users className="w-4 h-4" /> Members
                        </TabsTrigger>
                        <TabsTrigger
                            value="alumni"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[13.5px] font-semibold rounded-[8px] text-[#6A7282]
                                data-[state=active]:bg-[#088E48] data-[state=active]:text-white data-[state=active]:shadow-none
                                hover:text-[#088E48] transition-colors"
                        >
                            <GraduationCap className="w-4 h-4" /> Alumni
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="leadership" className="m-0">
                        <Leadershiptab members={leadership} totalAll={totalLeadership} />
                    </TabsContent>
                    <TabsContent value="members" className="m-0">
                        <MembersGrid members={members} totalAll={totalMembers} />
                    </TabsContent>
                    <TabsContent value="alumni" className="m-0">
                        <MembersGrid members={alumni} totalAll={totalAlumni} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

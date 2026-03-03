"use client";

import { useState, useMemo } from "react";
import { Search, Crown, Users, GraduationCap } from "lucide-react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import MembersGrid, { type Member } from "./members-tab";
import Leadershiptab from "./leadership-tab";

// ─── Mock Data ────────────────────────────────────────────────────────────────
const allMembers: Member[] = [
    // ── Leadership ──
    {
        id: 1,
        name: "Prime Minister of Pakistan",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: "Patron-in-Chief",
        sectors: ["Policy Development", "Governance & Public Administration"],
        description: "Shehbaz Sharif is the Prime Minister of Pakistan, serving with a strong focus on economic stability, governance, and youth empowerment.",
        image: "/prime-minister.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership", "member"],
        slug: "prime-minister",
        socials: {},
    },
    {
        id: 2,
        name: "Rana Mashood Ahmad Khan",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: "Chairperson",
        sectors: ["Policy Development", "Youth Engagement"],
        description: "Rana Mashood Ahmad Khan is the Chairperson of the Prime Minister's Youth Programme, leading initiatives for youth empowerment.",
        image: "/rana-mashood.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership", "member"],
        slug: "rana-mashood",
        socials: {},
    },
    {
        id: 3,
        name: "Malik Faisal Ayub Khokhar",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: "Minister for Youth Affairs",
        sectors: ["Youth Leadership", "Civic Engagement"],
        description: "Malik Faisal Ayub Khokhar is the minister for Youth Affairs, leading initiatives for youth development and engagement.",
        image: "/malik-faisal.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership", "member"],
        slug: "malik-faisal",
        socials: {},
    },
    // ── Members ──
    {
        id: 4,
        name: "Fakhar Jabran",
        location: "Bhimber, AJK",
        province: "AJK",
        designation: "Member",
        sectors: ["Digital Skills", "Entrepreneurship"],
        description: "Entrepreneurship/ Founder of 4 startups. Winner of PM National Innovation Award. Started Connect...",
        image: "/meet-the-team/team-member-1.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["member", "leadership"],
        slug: "fakhar-jabran",
        socials: { linkedin: "#", email: "#", phone: "#" },
    },
    {
        id: 5,
        name: "Iqra Bisma",
        location: "Rawlakot, AJK",
        province: "AJK",
        designation: "Member",
        sectors: ["Digital Skills", "Entrepreneurship"],
        description: "Health & wellbeing/ Diana Award winner, Represented Pakistan in Summer Sisters exchange program.",
        image: "/meet-the-team/team-member-2.jpg",
        period: "2023 - present",
        yearStart: "2023",
        type: ["member", "leadership"],
        slug: "iqra-bisma",
        socials: {},
    },
    {
        id: 6,
        name: "Fahad Shahbaz",
        location: "Rawlakot, AJK",
        province: "AJK",
        designation: "Entrepreneur",
        sectors: ["Digital Skills", "Entrepreneurship"],
        description: "A youth representative from Balochistan dedicated to advancing climate resilience, empowering local communities.",
        image: "/meet-the-team/team-member-3.jpg",
        period: "2023 - present",
        yearStart: "2023",
        type: ["member", "leadership"],
        slug: "fahad-shahbaz",
        socials: { linkedin: "#", email: "#", phone: "#" },
    },
    // ── Alumni ──
    {
        id: 7,
        name: "Sara Ahmed",
        location: "Karachi, Sindh",
        province: "Sindh",
        designation: "Alumni",
        sectors: ["Education", "Civic Engagement"],
        description: "Sara Ahmed is a former NYC member who has since founded a non-profit focused on girls' education in Sindh.",
        image: "/members/sara.jpg",
        period: "2020 - 2022",
        yearStart: "2020",
        type: ["leadership", "member"],
        slug: "sara-ahmed",
        socials: {},
    },
    {
        id: 8,
        name: "Bilal Tanveer",
        location: "Peshawar, KPK",
        province: "KPK",
        designation: "Alumni",
        sectors: ["Technology", "Youth Leadership"],
        description: "Bilal Tanveer is a tech entrepreneur who leveraged his NYC experience to build a platform connecting rural youth with digital opportunities.",
        image: "/members/bilal.jpg",
        period: "2019 - 2021",
        yearStart: "2019",
        type: ["alumni", "leadership"],
        slug: "bilal-tanveer",
        socials: {},
    },
    {
        id: 9,
        name: "Fatima Malik",
        location: "Quetta, Balochistan",
        province: "Balochistan",
        designation: "Alumni",
        sectors: ["Health", "Policy Development"],
        description: "Fatima Malik worked on health policy advocacy during her tenure and continues to drive policy change from Balochistan.",
        image: "/members/fatima.jpg",
        period: "2021 - 2023",
        yearStart: "2021",
        type: ["alumni", "leadership"],
        slug: "fatima-malik",
        socials: {},
    },
];

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

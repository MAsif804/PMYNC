"use client";

import { useState } from "react";
import { LayoutGrid, Search, SlidersHorizontal, MapPin, CalendarRange, Navigation } from "lucide-react";


const Filters = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <section className="py-20 bg-white">
            {/* Search and Filter Floating Container */}
            <div className="container  flex justify-center px-4 w-full">
                <div className="w-full bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-3 md:p-4 flex flex-col">

                    {/* Top Row: Search & Filters Toggle */}
                    <div className="flex gap-2 justify-between">
                        <div className="relative w-full max-w-[600px] bg-white border border-[#EBEBEB] rounded-[8px] flex items-center">
                            <Search className="absolute left-3 w-[18px] h-[18px] text-[#A1A1AA]" />
                            <input
                                type="text"
                                placeholder="Search by name or city..."
                                className="w-full bg-transparent pl-10 pr-4 py-[10px] text-[14px] text-[#18181B] placeholder:text-[#A1A1AA] focus:outline-none"
                            />
                        </div>
                        <button
                            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                            className={`flex items-center gap-2 bg-white border border-[#EBEBEB] rounded-[8px] px-4 py-[10px] text-[14px] font-medium text-[#18181B] hover:bg-gray-50 focus:outline-none transition-colors ml-auto ${isFiltersOpen ? 'bg-gray-50 ring-1 ring-gray-200' : ''}`}
                        >
                            <span className="flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16669 2.33333C1.16669 1.689 1.68902 1.16667 2.33335 1.16667H11.6667C12.311 1.16667 12.8334 1.689 12.8334 2.33333V3.34267C12.8334 3.65213 12.7104 3.94895 12.4916 4.16781L8.75002 7.90938V12.25C8.75002 12.5722 8.48885 12.8333 8.16669 12.8333H5.83335C5.51119 12.8333 5.25002 12.5722 5.25002 12.25V7.90938L1.5084 4.16781C1.28954 3.94895 1.16669 3.65213 1.16669 3.34267V2.33333Z" stroke="#18181B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Filters
                        </button>
                    </div>

                    {/* Bottom Row: Filter Dropdowns */}
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isFiltersOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div className="pt-4">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-4 md:p-5 rounded-[10px] border border-[#EBEBEB]">

                                    {/* Location */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[13px] font-medium text-[#52525B] px-1">Location</label>
                                        <div className="relative">
                                            <select className="w-full bg-[#F4F4F5] text-[#71717A] text-[14px] rounded-[6px] pl-3 pr-8 py-2.5 appearance-none focus:outline-none cursor-pointer hover:bg-[#E4E4E7] transition-colors">
                                                <option value="">All Locations</option>
                                                <option value="islamabad">Islamabad</option>
                                                <option value="lahore">Lahore</option>
                                                <option value="karachi">Karachi</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Type */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[13px] font-medium text-[#52525B] px-1">Type</label>
                                        <div className="relative">
                                            <select className="w-full bg-[#F4F4F5] text-[#71717A] text-[14px] rounded-[6px] pl-3 pr-8 py-2.5 appearance-none focus:outline-none cursor-pointer hover:bg-[#E4E4E7] transition-colors">
                                                <option value="">All Types</option>
                                                <option value="project">Project</option>
                                                <option value="happening">Happening</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date To */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[13px] font-medium text-[#52525B] px-1">Date To</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="mm/dd/yy"
                                                className="w-full bg-[#F4F4F5] text-[#71717A] placeholder:text-[#A1A1AA] text-[14px] rounded-[6px] pl-3 pr-8 py-2.5 focus:outline-none hover:bg-[#E4E4E7] transition-colors"
                                            />
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#A1A1AA]">
                                                <CalendarRange className="w-[14px] h-[14px]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date From */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[13px] font-medium text-[#52525B] px-1">Date From</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="mm/dd/yy"
                                                className="w-full bg-[#F4F4F5] text-[#71717A] placeholder:text-[#A1A1AA] text-[14px] rounded-[6px] pl-3 pr-8 py-2.5 focus:outline-none hover:bg-[#E4E4E7] transition-colors"
                                            />
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#A1A1AA]">
                                                <CalendarRange className="w-[14px] h-[14px]" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Filters;
"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isPathActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };
    const navLinks = [
        { name: "HOME", href: "/", active: isPathActive("/") },
        { name: "ABOUT US", href: "/about-us", active: isPathActive("/about-us") },
        { name: "MEMBERS", href: "/members", active: isPathActive("/members") },
        { name: "PARTNERS", href: "/partners", active: isPathActive("/partners") },
        { name: "PROJECTS", href: "/projects", active: isPathActive("/projects") },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-gray-800">
            <div className="container py-[14px] flex  h-24 items-center justify-between">
                {/* Logos Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex-shrink-0">
                        {/* Assuming pmyp-logo.png is the Star logo based on context, swap if needed */}
                        <img src="/pmyp-logo.png" alt="PM-YNC Logo" className="h-16 w-auto object-contain" />
                    </Link>
                    <div className="hidden sm:block h-12 mx-2"></div>
                    <Link href="https://pmyp.gov.pk" target="_blank" className="flex-shrink-0 hidden sm:block">
                        <img src="/pmyp-logo-2.png" alt="Prime Minister's Youth Programme" className="h-12 w-auto object-contain" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center text-sm font-bold tracking-wide transition-all duration-200 ${isPathActive(link.href)
                                ? "text-white border-b-4  border-[#088E48] hover:border-[#088E48] pb-2"
                                : "text-gray-300 hover:text-[#088E48] hover:border-[#088E48] "
                                }`}
                        >
                            <span className="text-[18px] font-semibold leading-normal">{link.name}</span>
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button
                        onClick={() => window.location.href = "/contact-us"}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-2 lg:flex items-center gap-2 transition-transform transform hover:scale-105 hidden md:flex">
                        Contact Us <ArrowUpRight className="h-4 w-4" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black text-white border-l-gray-800">
                            <div className="flex flex-col gap-6 mt-8">
                                {/* Mobile Logos */}
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <img src="/pmyp-logo.png" alt="Logo 1" className="h-12 w-auto" />
                                    <img src="/pmyp-logo-2.png" alt="Logo 2" className="h-10 w-auto" />
                                </div>
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-lg font-bold text-center py-2 border-b border-gray-800 ${link.active ? "text-green-500" : "text-gray-300"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                                <Button
                                    onClick={() => window.location.href = "/contact-us"}
                                    variant="green" className="rounded-[12px]">
                                    Contact Us <ArrowUpRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

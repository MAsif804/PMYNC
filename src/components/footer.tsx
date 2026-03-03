import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16">
            <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-12">
                {/* Left Column: Logos & About */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                        {/* PM-YNC Logo Placeholder */}
                        <div className="relative">
                            {/* Replace with actual logo path */}
                            <img src="/pmyp-logo.png" alt="PM-YNC Logo" className="h-[130px]  w-[108px] object-contain" />
                        </div>
                        {/* Powered By InLights */}
                        <div className="flex flex-col justify-center">
                            <img src="/inlights-logo.png" alt="InLights Logo" className="h-[51px] w-auto object-contain" />
                        </div>
                    </div>

                    <p className="text-white text-[18px] font-normal leading-relaxed max-w-[592px]">
                        Empowering Pakistan&apos;s youth for a progressive and sustainable future through forward-looking policies, innovation-driven initiatives, and inclusive development that creates equal opportunities for all.
                    </p>

                    <div className="flex gap-4">
                        <Link href="#" className="text-[#088E48] hover:text-[#088E48] transition-colors">
                            <Facebook className="h-6 w-6 aspect-square" />
                        </Link>
                        <Link href="#" className="text-[#088E48] hover:text-[#088E48] transition-colors">
                            <Instagram className="h-6 w-6 aspect-square" />
                        </Link>
                        <Link href="#" className="text-[#088E48] hover:text-[#088E48] transition-colors">
                            <Twitter className="h-6 w-6 aspect-square" />
                        </Link>
                        <Link href="#" className="text-[#088E48] hover:text-[#088E48] transition-colors">
                            <Linkedin className="h-6 w-6 aspect-square" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-6 text-xl text-white">Quick Links</h4>
                    <ul className="space-y-4 text-[18px] text-white">
                        <li>
                            <Link href="/" className="hover:text-[#088E48] transition-colors">
                                Home
                            </Link>
                            </li>
                        <li>
                            <Link href="/about-us" className="hover:text-[#088E48] transition-colors">
                                About us
                            </Link>
                            </li>
                        <li>
                            <Link href="#members" className="hover:text-[#088E48] transition-colors">
                                Members
                            </Link>
                            </li>
                        <li>
                            <Link href="#projects" className="hover:text-[#088E48] transition-colors">
                                Projects & Events
                            </Link>
                            </li>
                        <li>
                            <Link href="#partners" className="hover:text-[#088E48] transition-colors">
                                Partners
                            </Link>
                            
                            </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h4 className="font-bold mb-6 text-xl text-white">Contact us</h4>
                    <ul className="space-y-4 text-[18px] text-white">
                        <li className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 shrink-0 text-green-600" />
                            <span>Islamabad, Pakistan</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 shrink-0 text-green-600" />
                            <span>info@nyc.gov.pk</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 shrink-0 text-green-600" />
                            <span>+92 1234567890</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#008f4c] py-4 text-center text-lg text-white">
                <p>© 2025 Prime Minister&apos;s National Youth Council. All rights reserved.</p>
            </div>
        </footer>
    );
}

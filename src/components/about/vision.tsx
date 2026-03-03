"use client";

import { Gavel, FileText, Users } from "lucide-react";

export default function VisionSection() {
    const milestones = [
        {
            year: "2024",
            title: "Council Established",
            description: "NYC constituted under Prime Minister's Office",
            icon: [
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                    <path d="M0 25.3333V22.6667H16V25.3333H0ZM7.53333 18.8667L0 11.3333L2.8 8.46667L10.4 16L7.53333 18.8667ZM16 10.4L8.46667 2.8L11.3333 0L18.8667 7.53333L16 10.4ZM22.1333 24L4.73333 6.6L6.6 4.73333L24 22.1333L22.1333 24Z" fill="white" />
                </svg>
            ],
        },
        {
            year: "2026",
            title: "National Youth Policy\nCollaboration",
            description: "Active participation in policy development",
            icon: [
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                    <path d="M2.66667 26.6667C1.93333 26.6667 1.30556 26.4056 0.783333 25.8833C0.261111 25.3611 0 24.7333 0 24V5.33333C0 4.6 0.261111 3.97222 0.783333 3.45C1.30556 2.92778 1.93333 2.66667 2.66667 2.66667H8.26667C8.55556 1.86667 9.03889 1.22222 9.71667 0.733333C10.3944 0.244444 11.1556 0 12 0C12.8444 0 13.6056 0.244444 14.2833 0.733333C14.9611 1.22222 15.4444 1.86667 15.7333 2.66667H21.3333C22.0667 2.66667 22.6944 2.92778 23.2167 3.45C23.7389 3.97222 24 4.6 24 5.33333V24C24 24.7333 23.7389 25.3611 23.2167 25.8833C22.6944 26.4056 22.0667 26.6667 21.3333 26.6667H2.66667ZM2.66667 24H21.3333V5.33333H2.66667V24ZM5.33333 21.3333H14.6667V18.6667H5.33333V21.3333ZM5.33333 16H18.6667V13.3333H5.33333V16ZM5.33333 10.6667H18.6667V8H5.33333V10.6667ZM12 4.33333C12.2889 4.33333 12.5278 4.23889 12.7167 4.05C12.9056 3.86111 13 3.62222 13 3.33333C13 3.04444 12.9056 2.80556 12.7167 2.61667C12.5278 2.42778 12.2889 2.33333 12 2.33333C11.7111 2.33333 11.4722 2.42778 11.2833 2.61667C11.0944 2.80556 11 3.04444 11 3.33333C11 3.62222 11.0944 3.86111 11.2833 4.05C11.4722 4.23889 11.7111 4.33333 12 4.33333Z" fill="white" />
                </svg>
            ],
        },
        {
            year: "2025",
            title: "Regional Representation Expanded",
            description: "All provinces and territories represented",
            icon: [
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                    <path d="M0 21.3333V16C0 15.2444 0.261111 14.6111 0.783333 14.1C1.30556 13.5889 1.93333 13.3333 2.66667 13.3333H7.03333C7.47778 13.3333 7.9 13.4444 8.3 13.6667C8.7 13.8889 9.02222 14.1889 9.26667 14.5667C9.91111 15.4333 10.7056 16.1111 11.65 16.6C12.5944 17.0889 13.6 17.3333 14.6667 17.3333C15.7556 17.3333 16.7722 17.0889 17.7167 16.6C18.6611 16.1111 19.4444 15.4333 20.0667 14.5667C20.3556 14.1889 20.6944 13.8889 21.0833 13.6667C21.4722 13.4444 21.8778 13.3333 22.3 13.3333H26.6667C27.4222 13.3333 28.0556 13.5889 28.5667 14.1C29.0778 14.6111 29.3333 15.2444 29.3333 16V21.3333H20V18.3C19.2222 18.8556 18.3833 19.2778 17.4833 19.5667C16.5833 19.8556 15.6444 20 14.6667 20C13.7111 20 12.7778 19.85 11.8667 19.55C10.9556 19.25 10.1111 18.8222 9.33333 18.2667V21.3333H0ZM14.6667 16C13.8222 16 13.0222 15.8056 12.2667 15.4167C11.5111 15.0278 10.8778 14.4889 10.3667 13.8C9.98889 13.2444 9.51667 12.8056 8.95 12.4833C8.38333 12.1611 7.76667 12 7.1 12C7.58889 11.1778 8.62222 10.5278 10.2 10.05C11.7778 9.57222 13.2667 9.33333 14.6667 9.33333C16.0667 9.33333 17.5556 9.57222 19.1333 10.05C20.7111 10.5278 21.7444 11.1778 22.2333 12C21.5889 12 20.9778 12.1611 20.4 12.4833C19.8222 12.8056 19.3444 13.2444 18.9667 13.8C18.4778 14.5111 17.8556 15.0556 17.1 15.4333C16.3444 15.8111 15.5333 16 14.6667 16ZM4 12C2.88889 12 1.94444 11.6111 1.16667 10.8333C0.388889 10.0556 0 9.11111 0 8C0 6.86667 0.388889 5.91667 1.16667 5.15C1.94444 4.38333 2.88889 4 4 4C5.13333 4 6.08333 4.38333 6.85 5.15C7.61667 5.91667 8 6.86667 8 8C8 9.11111 7.61667 10.0556 6.85 10.8333C6.08333 11.6111 5.13333 12 4 12ZM25.3333 12C24.2222 12 23.2778 11.6111 22.5 10.8333C21.7222 10.0556 21.3333 9.11111 21.3333 8C21.3333 6.86667 21.7222 5.91667 22.5 5.15C23.2778 4.38333 24.2222 4 25.3333 4C26.4667 4 27.4167 4.38333 28.1833 5.15C28.95 5.91667 29.3333 6.86667 29.3333 8C29.3333 9.11111 28.95 10.0556 28.1833 10.8333C27.4167 11.6111 26.4667 12 25.3333 12ZM14.6667 8C13.5556 8 12.6111 7.61111 11.8333 6.83333C11.0556 6.05556 10.6667 5.11111 10.6667 4C10.6667 2.86667 11.0556 1.91667 11.8333 1.15C12.6111 0.383333 13.5556 0 14.6667 0C15.8 0 16.75 0.383333 17.5167 1.15C18.2833 1.91667 18.6667 2.86667 18.6667 4C18.6667 5.11111 18.2833 6.05556 17.5167 6.83333C16.75 7.61111 15.8 8 14.6667 8Z" fill="white" />
                </svg>
            ],
        },
        {
            year: "2026",
            title: "National Youth Policy\nCollaboration",
            description: "Active participation in policy development",
            icon: <FileText className="h-5 w-5 text-white" />,
        },
    ];

    return (
        <section className="py-[60px] bg-white">
            <div className="container grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Side: Text */}
                <div className="pr-0 xl:pr-10">
                    <h2 className="text-[28px] sm:text-[36px] font-bold uppercase leading-[48px] mb-4 text-black tracking-wide">
                        A VISION BACKED BY <span className="text-[#088E48]">NATIONAL LEADERSHIP</span>
                    </h2>
                    <p className="text-[#6A7282] text-[16px] leading-[1.7] font-Roboto">
                        The Prime Minister&apos;s National Youth Council (NYC) was established in December
                        2024 under the Ministry of Planning, Development & Special Initiatives as part of
                        the Government of Pakistan&apos;s long-term commitment to strengthen youth
                        engagement in public policy and nation-building. Rooted in the belief that young
                        people are central to Pakistan&apos;s sustainable future, the Council serves as an
                        institutional platform that connects youth leaders, policymakers, and development
                        partners
                    </p>
                </div>

                {/* Right Side: Timeline Card */}
                <div className="relative">
                    <div className="border max-w-[470px] border-[#EEEEEE] rounded-[8px] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] h-[385px] overflow-y-auto relative custom-scrollbar">
                        <div className="relative">
                            {milestones.map((item, index) => (
                                <div key={index} className="relative flex gap-6 mb-12 last:mb-0">
                                    {/* Vertical dashed line */}
                                    {index !== milestones.length - 1 && (
                                        <div className="absolute left-[28px] top-[48px] bottom-[-48px] border-l-2 border-dashed border-[#F5AA00] z-0" />
                                    )}

                                    {/* Icon Circle */}
                                    <div className="relative z-10 flex-shrink-0 w-[60px] h-[60px] rounded-full bg-[#088E48] flex items-center justify-center shadow-md">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-[20px] font-bold text-black mb-1 leading-tight whitespace-pre-line">
                                            {item.title}
                                        </h3>
                                        <span className="text-[18px] text-[#6A7282] mb-1 font-semibold">{item.year}</span>
                                        <p className="text-[16px] font-normal text-[#4D4D4D] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 {/* Scrollbar Track/Thumb Styling */}
                    <style jsx>{`
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 6px;
                            
                        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                            background: #F5F5F5;
                            border-radius: 50px;
                            margin-top: 24px;
                            margin-bottom: 24px; 
                            
                            
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #E0E0E0;
                            border-radius: 10px;
                        }
                    `}</style>
            </div>
        </section>
    );
}

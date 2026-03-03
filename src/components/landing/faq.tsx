"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is National Youth Council (NYC)?",
        answer: "The Prime Minister’s National Youth Council (NYC), a flagship initiative of the  Prime Minister's Youth Programme, is an officially notified platform from Cabinet Division for  young leaders to provide policy input and youth perspectives to concerned policy makers both  at federal and provincial level.",
    },
    {
        question: "Who can join NYC?",
        answer: "Any young citizen passionate about creating social impact, aged between 15–35, can join NYC regardless of their background or region",
    },
    {
        question: "How can I become a member?",
        answer: "Applications open every 2 years. Once advertised, you can apply for membership through our website by filling out the registration form under the “Join the movement” section.",
    },
    {
        question: "Does NYC collaborates with other organizations?",
        answer: "Yes, NYC actively partners with educational institutions, NGOs, government bodies, and international organizations to expand its reach and impact.",
    },
    {
        question: "What kind of programs does NYC offers?",
        answer: "NYC offers leadership development programs, policy engagement sessions, skill-building workshops, entrepreneurship support, and national youth summits.",
    },
    {
        question: "is there a membership fee?",
        answer: "Some programs or events may have a small fee, but general membership and participation in many of our initiatives are free of charge.",
    },
    {
        question: "Can I volunteer with NYC?",
        answer: "Absolutely! We welcome volunteers for various events, campaigns, and community projects. Follow our social media to stay updated",
    },
    {
        question: "How can I stay updated on upcoming events and opportunities?",
        answer: "Follow us on our social media channels to stay informed about the latest news and activities.",
    },
];

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section className="py-16 bg-white">
            <div className="container ">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[24px] sm:text-[44px] font-bold text-black leading-tight">
                        Frequently Asked Questions (FAQs)
                    </h2>
                    <p className="text-[#6A7282] text-[18px] mt-4">
                        Our council is built on the passion and dedication of young people. Here's what they have to say about their journey with us.
                    </p>
                </div>

                {/* FAQ List using ShadCN Accordion */}
                <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#D2D2D2] last:border-b-0">
                            {/* Hide default Chevron with [&>svg:last-child]:hidden */}
                            <AccordionTrigger className="w-full flex items-center justify-between py-6 text-left gap-4 group hover:no-underline [&>svg:last-child]:hidden">
                                <span className="text-[20px] font-semibold text-black">
                                    {faq.question}
                                </span>

                                {/* Custom +/- Icon using data-[state=open] from Radix */}
                                <span className="flex-shrink-0 flex items-center justify-center relative w-8 h-8">
                                    {/* Closed state: Green circle */}
                                    <span className="absolute inset-0 rounded-full bg-[#088E48] transition-all duration-300 group-data-[state=open]:opacity-0 scale-100 group-data-[state=open]:scale-50" />
                                    {/* Closed state: White Plus icon */}
                                    <Plus className="absolute h-5 w-5 text-white transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />

                                    {/* Open state: Green Minus icon (no circle) */}
                                    <Minus className="absolute h-6 w-6 text-[#088E48] opacity-0 transition-all duration-300 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180" />
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-[#6A7282] text-[16px] leading-normal pb-6 pr-14 font-normal tracking-wide   ">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

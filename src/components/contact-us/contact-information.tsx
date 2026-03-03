"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const PAKISTAN_PROVINCES = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Jammu & Kashmir",
    "Islamabad Capital Territory",
];

export default function ContactInformation() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        province: "",
        city: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submission logic here
    };

    return (
        <section className="py-14 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">

                    {/* ── Left Column: Contact Info Cards ── */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[24px] font-Roboto font-extrabold text-[#000] mb-6">
                            Contact Information
                        </h2>

                        {/* Office Address */}
                        <div className="bg-[#FAFAFA] p-6 rounded-[14px]">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-[18px] h-[18px] text-[#088E48] shrink-0" />
                                <span className="font-semibold font-Roboto text-[14px] text-[#0F172B]">Office Address</span>
                            </div>
                            <p className="text-[#4D4D4D] text-[16px] leading-[1.6] mt-6">
                                Prime Minister&apos;s Office Constitution Avenue, Islamabad, Pakistan
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-[#FAFAFA] p-6 rounded-[14px] flex flex-col gap-6">
                            <div className="flex items-center gap-1">
                                <Mail className="w-[24px] h-[24px] text-[#088E48] shrink-0" />
                                <span className="font-semibold font-Roboto text-[14px] text-[#0F172B]">Email</span>
                            </div>
                            <div className="flex flex-col gap-1.5 pl-1">
                                {[
                                    "info@nyc.gov.pk",
                                    "media@nyc.gov.pk",
                                    "partnerships@nyc.gov.pk",
                                    "coordinator@nyc.gov.pk",
                                    "focal.person@nyc.gov.pk",
                                ].map((email) => (
                                    <a
                                        key={email}
                                        href={`mailto:${email}`}
                                        className="text-[#3385FF] text-[16px] font-Roboto font-normal underline  "
                                    >
                                        {email}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-[#FAFAFA] p-6 rounded-[14px] flex flex-col gap-6">
                            <div className="flex items-center gap-1">
                                <Phone className="w-[24px] h-[24px] text-[#088E48] shrink-0" />
                                <span className="font-semibold font-Roboto text-[14px] text-[#0F172B]">Phone</span>
                            </div>
                            <div className="flex flex-col gap-1.5 pl-1">
                                <p className="text-[#4D4D4D] text-[16px] font-Roboto font-normal">+92 123456789</p>
                                <p className="text-[#4D4D4D] text-[16px] font-Roboto font-normal">+92 123456789</p>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-[#FAFAFA] p-6 rounded-[14px] flex flex-col gap-6">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 18C6.7 18 4.69583 17.2375 2.9875 15.7125C1.27917 14.1875 0.3 12.2833 0.05 10H2.1C2.33333 11.7333 3.10417 13.1667 4.4125 14.3C5.72083 15.4333 7.25 16 9 16C10.95 16 12.6042 15.3208 13.9625 13.9625C15.3208 12.6042 16 10.95 16 9C16 7.05 15.3208 5.39583 13.9625 4.0375C12.6042 2.67917 10.95 2 9 2C7.85 2 6.775 2.26667 5.775 2.8C4.775 3.33333 3.93333 4.06667 3.25 5H6V7H0V1H2V3.35C2.85 2.28333 3.8875 1.45833 5.1125 0.875C6.3375 0.291667 7.63333 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM11.8 13.2L8 9.4V4H10V8.6L13.2 11.8L11.8 13.2Z" fill="#088E48" />
                                </svg>
                                <span className="font-semibold font-Roboto text-[14px] text-[#0F172B]">Office Hours</span>
                            </div>
                            <div className="flex flex-col gap-1.5 pl-1">
                                <p className="text-[#4D4D4D] text-[16px] font-Roboto font-normal">Monday - Friday</p>
                                <p className="text-[#4D4D4D] text-[16px] font-Roboto font-normal">9:00 AM - 5:00 AM (PKT)</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Contact Form ── */}
                    <div className="flex flex-col p-8 items-start gap-8 border-[0.67px] border-[#E2E8F0] rounded-[14px] bg-white">
                        <h2 className="text-[24px] font-bold font-Roboto text-[#0F172B]">
                            Send us a Message
                        </h2>
                        <p className="text-[#45556C text-[16px] font-Roboto font-normal">
                            Fill out the form below and our team will get back to you within 2-3 business days.
                        </p>

                        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
                            {/* Row 1: First Name + Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                        First Name <span className="text-[#0A0A0A]">*</span>
                                    </label>
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Ahmed"
                                        required
                                        className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                        Last Name <span className="text-[#0A0A0A]">*</span>
                                    </label>
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Khan"
                                        required
                                        className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email + Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                        Email Address <span className="text-[#0A0A0A]">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="ahmed.khan@example.com"
                                        required
                                        className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                        Phone Number <span className="text-[#0A0A0A]">*</span>
                                    </label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+92 300 1234567"
                                        required
                                        className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Province + City */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                        Province <span className="text-[#0A0A0A]">*</span>
                                    </label>
                                    <select
                                        name="province"
                                        value={form.province}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#6A7282] outline-none border border-transparent focus:border-[#088E48] transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select province</option>
                                        {PAKISTAN_PROVINCES.map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                        City <span className="text-[#0A0A0A]">*</span>
                                    </label>
                                    <input
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        placeholder="Islamabad"
                                        required
                                        className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                    Subject <span className="text-[#0A0A0A]">*</span>
                                </label>
                                <input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Brief description of your inquiry"
                                    required
                                    className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[14px] font-normal text-[#0A0A0A] font-Roboto">
                                    Message <span className="text-[#0A0A0A]">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Please provide details about your inquiry..."
                                    required
                                    rows={5}
                                    className="w-full bg-[#F5F5F5] rounded-[8px] px-4 py-3 text-[14px] text-[#1A1A1A] placeholder:text-[#9CA3AF] outline-none border border-transparent focus:border-[#088E48] transition-colors resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <div>
                                <Button
                                    type="submit"
                                    variant="green"
                                    className="rounded-[12px]"
                                >
                                    Send Message <ArrowUpRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

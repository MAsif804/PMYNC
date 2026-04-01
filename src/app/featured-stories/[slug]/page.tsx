import React from "react";
import Image from "next/image";
import { featuredStories } from "@/data/featured-stories";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function FeaturedStoryPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const story = featuredStories.find((s) => s.slug === slug);

    if (!story) {
        return notFound();
    }

    const otherStories = featuredStories.filter((s) => s.slug !== slug);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Header Image */}
            <div className="w-full h-[60vh] relative min-h-[400px]">
                {/* Fallback pattern if Image is failing, or use regular img */}
                <img
                    src={story.storyimages || "/feature-stories.png"}
                    alt={story.aboutstory}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="container py-12">
                {/* Title and Intro */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold font-openSans text-black leading-tight mb-6">
                        {story.aboutstory}
                    </h1>
                    <p className="text-black/80 text-[15px] font-Roboto leading-7">
                        {story.storydescription}
                    </p>
                </div>

                {/* The Problem That Sparked Innovation */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                        <div>
                            <h2 className="text-2xl font-bold font-openSans text-black mb-4">
                                The Problem That Sparked Innovation
                            </h2>
                            {/* Innovation points */}
                            <p className="text-black/80 font-Roboto text-[15px] leading-7 mb-4">
                                {story.innvotion.split('\n\n')[0]}
                            </p>
                            <p className="text-black/80 font-Roboto text-[15px] leading-7">
                                {story.innvotion.split('\n\n')[1]}
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] w-full mt-4 md:mt-12 overflow-hidden rounded-[8px]">
                            <img
                                src={story.detailimages?.[0] || "/feature-stories.png"}
                                alt="Innovation detail"
                                className="object-cover w-full h-full"
                            />
                            <p className="text-center text-[13px] text-gray-500 mt-2">Img: Plastic bottles waste</p>
                        </div>
                    </div>
                    <div className="text-black/80 font-Roboto text-[15px] leading-7 mt-6 mb-8">
                        <p>{story.innvotion.split('\n\n')[2]}</p>
                    </div>
                </div>

                {/* Second Innovation part with big image */}
                <div className="mb-12">
                    <div className="w-full mb-6 relative">
                            <Carousel opts={{ align: "start", loop: true }} className="w-full group">
                                <CarouselContent>
                                    {story.detailimages.map((src, i) => (
                                        <CarouselItem key={i}>
                                            <div className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[8px] relative">
                                                <img
                                                    src={src}
                                                    alt="Project highlight"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/* Custom localized arrows for this specific carousel */}
                                <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#FFFFFF80] border-none text-white hover:bg-black/60 h-[44px] w-[44px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&>svg]:w-6 [&>svg]:h-6" />
                                <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#FFFFFF80] border-none text-white hover:bg-black/60 h-[44px] w-[44px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&>svg]:w-6 [&>svg]:h-6" />
                            </Carousel>
                        </div>
                    <div className="text-center text-[13px] text-gray-500 mt-2 mb-6">
                        Img : Lorem ipsum dolor sit amet, consectetur.
                    </div>
                    <div className="text-black/80 font-Roboto text-[15px] leading-7 space-y-4">
                        {story.innvotion.split('\n\n').slice(3).map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>

                {/* Impact on Communities */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="order-2 md:order-1 relative aspect-video w-full overflow-hidden rounded-md">
                            <img
                                src={story.communityimages || "/feature-stories.png"}
                                alt="Community Impact"
                                className="object-cover w-full h-full"
                            />
                            <p className="text-center text-sm text-gray-500 mt-2">Img: NUST School</p>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-2xl font-bold font-openSans text-black mb-4">
                                Impact on Communities
                            </h2>
                            <div className="text-black/80 font-Roboto text-[15px] leading-7 space-y-4">
                                {story.communitydescription.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Stories */}
                <div className="w-full mt-16 pt-10">
                    <div className="relative mb-10 text-center">
                        <h2 className="text-3xl font-extrabold font-openSans tracking-tight text-black uppercase">
                            MORE STORIES
                        </h2>
                    </div>
                    <Carousel
                        opts={{ align: "start", loop: false }}
                        className="w-full relative"
                    >
                        <div className="absolute -top-[4rem] right-0 flex gap-2">
                            <CarouselPrevious className="static translate-y-0 bg-[#088E48] text-white hover:bg-[#003d1f] hover:text-white border-none rounded-[4px] h-8 w-8 [&>svg]:w-4 [&>svg]:h-4 disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500" />
                            <CarouselNext className="static translate-y-0 bg-[#088E48] text-white hover:bg-[#003d1f] hover:text-white border-none rounded-[4px] h-8 w-8 [&>svg]:w-4 [&>svg]:h-4 disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500" />
                        </div>
                        <CarouselContent className="-ml-4">
                            {featuredStories.map((other) => (
                                <CarouselItem key={other.id} className="pl-4 md:basis-1/3">
                                    <Link href={`/featured-stories/${other.slug}`} className="group flex flex-col overflow-hidden border border-gray-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg h-full bg-white">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={other.thumbnail || "/feature-stories.png"}
                                                alt={other.name}
                                                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                                <img src="/pmyp-logo.png" alt="NYC Logo" className="w-[50px] h-[50px] object-contain opacity-80" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-5 gap-1">
                                            <p className="text-black font-bold text-base">{other.name}</p>
                                            <p className="text-gray-500 text-sm mb-1">{other.location}, {other.province}</p>
                                            <p className="text-[#088E48] text-xs font-bold uppercase tracking-widest mb-3">
                                                {other.skills.join(" & ")}
                                            </p>
                                            <p className="text-gray-700 text-sm font-medium leading-relaxed line-clamp-4">&quot;{other.description}&quot;</p>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <Footer />
        </main>
    );
}

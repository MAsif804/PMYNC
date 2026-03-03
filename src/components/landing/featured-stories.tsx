"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const allStories = [
    {
        id: 1,
        name: "Ayesha Azhar",
        location: "Hunza, Gilgit-Baltistan",
        category: "Digital Skills & Freelancing",
        image: "/feature-stories.png",
        quote: '"Before joining the NYC Digital Skills track, I didn\'t know how to turn my passion into a career. Today, I work with global clients and teach young girls in my village how to freelance confidently."',
    },
    {
        id: 2,
        name: "Ali Hassan",
        location: "Lahore, Punjab",
        category: "Leadership & Governance",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop",
        quote: '"The NYC leadership programme gave me the tools to represent my community at a national level. I never thought a young man from a small town could sit in a policy dialogue."',
    },
    {
        id: 3,
        name: "Sara Mehmood",
        location: "Karachi, Sindh",
        category: "Entrepreneurship",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
        quote: '"With the mentorship from NYC, I launched my first startup at 22. The support system and network I built through the council has been invaluable to my journey."',
    },
    {
        id: 4,
        name: "Bilal Ahmed",
        location: "Peshawar, KPK",
        category: "Community Development",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
        quote: '"I used to believe change was impossible in my neighbourhood. NYC\'s community programme showed me that young people are the most powerful agents of change."',
    },
    {
        id: 5,
        name: "Fatima Khan",
        location: "Quetta, Balochistan",
        category: "Women Empowerment",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        quote: '"Through NYC, I found my voice and my tribe. The programme connected me with like-minded women building a better Pakistan from the ground up."',
    },
];

const dots = [
    { top: "12%", left: "22%" },
    { top: "20%", left: "60%" },
    { top: "30%", left: "42%" },
    { top: "50%", left: "63%" },
    { top: "70%", left: "36%" },
    { top: "80%", left: "84%" },
    { top: "60%", left: "10%" },
    { top: "88%", left: "52%" },
];

export default function FeaturedStories() {
    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{ background: "radial-gradient(ellipse at 0% 50%, #003d1f 0%, #000d05 50%, #000000 100%)" }}
        >
            {/* Decorative animated dots */}
            {dots.map((dot, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-green-700/40 animate-float"
                    style={{
                        top: dot.top,
                        left: dot.left,
                        width: "6px",
                        height: "6px",
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${5 + (i % 3)}s`,
                    }}
                />
            ))}

            <div className="container relative z-10 flex flex-col items-center justify-center">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-10 text-center">
                    <h2 className="text-3xl font-bold font-openSans tracking-tight text-white uppercase sm:text-4xl">
                        Featured Stories
                    </h2>
                    <p className="text-xl font-extrabold font-openSans tracking-tight text-[#088E48] uppercase sm:text-2xl mt-2">
                        INCLUSIVE. DIVERSE. REPRESENTING EVERY YOUNG PAKISTANI
                    </p>
                    <p className="text-lg font-normal font-Roboto text-gray-300 text-center leading-relaxed mt-4 max-w-4xl">
                        Real stories from young Pakistanis whose journeys have been shaped by learning programs, leadership opportunities, community projects, and NYC initiatives. These voices represent the resilience, talent, and dreams of our youth—from cities, villages, mountains, and coastlines across Pakistan.
                    </p>
                </div>

                {/* ShadCN Carousel */}
                <Carousel
                    opts={{ align: "start", loop: false }}
                    className="w-full"
                >
                    <div className="flex justify-end mb-4 gap-2">
                        <CarouselPrevious className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                        <CarouselNext className="static translate-y-0 border-green-600 text-green-500 hover:bg-green-600 hover:text-white bg-transparent disabled:border-gray-700 disabled:text-gray-600" />
                    </div>

                    <CarouselContent className="-ml-4">
                        {allStories.map((story) => (
                            <CarouselItem key={story.id} className="pl-4 md:basis-1/3">
                                <div className="group flex flex-col overflow-hidden rounded-lg border border-green-900/40 bg-black/20 backdrop-blur-sm hover:border-green-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(8,142,72,0.2)] h-full">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-2 right-2">
                                            <img src="/pmyp-logo.png" alt="NYC Logo" className="w-[75px] h-[75px] object-contain opacity-80" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-5 gap-1">
                                        <p className="text-white font-bold text-base">{story.name}</p>
                                        <p className="text-gray-400 text-sm mb-1">{story.location}</p>
                                        <p className="text-[#088E48] text-xs font-bold uppercase tracking-widest mb-3">{story.category}</p>
                                        <p className="text-gray-300 text-sm font-medium leading-relaxed ">{story.quote}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}

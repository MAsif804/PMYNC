import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black/90">
            {/* Background Image Placeholder - In production use Image component */}
            <div
                className="absolute inset-0 z-0 opacity-50 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            <div className="container relative z-20 flex h-full flex-col items-start justify-center text-start text-white mt-auto pt-11">
                <h2 className="mb-2 font-Roboto text-[46px] font-extrabold leading-[54px] uppercase tracking-wide text-white">PRIME MINISTER&apos;S</h2>
                <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-[12px] md:text-[24px] lg:text-[48px] text-[#088E48] font-Roboto uppercase ">
                    National Youth Council OF Pakistan
                </h1>
                <p className="mb-8 text-start max-w-full text-[18px] text-white font-Roboto font-medium leading-normal tracking-wide md:text-xl italic">
                    The Prime Minister’s National Youth Council (NYC), a flagship initiative of the  Prime Minister's Youth Programme, is an officially notified platform from Cabinet Division for young leaders to provide policy input and youth perspectives to concerned policy makers both  at federal and provincial level.
                </p>
                <div className="flex flex-col  gap-4 sm:flex-row">
                    <Button variant="green" >
                        <span className="text-[18px] font-medium leading-normal font-Roboto">Join the movement</span>
                    </Button>
                    <Button variant="white" >
                        <span className="text-[18px] font-medium leading-normal font-Roboto">Explore council members</span>
                        <ArrowUpRight className="h-5 w-5 text-white" />
                    </Button>
                </div>
                <div>
                    <Avatar className="absolute top-[12px] right-0 flex size-[200px] items-center justify-center rounded-full ">
                        <AvatarImage src="/priminset.png" className="size-full " />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </section>
    );
}

export default function AboutHero() {
    return (
        <section className="relative h-[450px] sm:h-[500px] md:h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-[url('/about-page/about-hero.jpg')] bg-cover bg-center"
            />
            {/* Dark Overlay to make text readable */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div className="container relative z-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-[26px] sm:text-[36px] md:text-[46px] font-extrabold tracking-wide uppercase leading-[54px] drop-shadow-md">
                    <span className="text-white">ABOUT THE PRIME MINISTER&apos;S</span>
                    <br />
                    <span className="text-[#088E48]">NATIONAL YOUTH COUNCIL</span>
                </h1>

                <p className="mt-3 max-w-[900px] text-[14px] sm:text-[16px] md:text-[17px] text-white italic font-medium leading-relaxed drop-shadow-sm">
                    A national platform uniting passionate young Pakistanis under one vision — empowering youth to lead, innovate, and drive the country&apos;s sustainable future
                </p>
            </div>
        </section>
    );
}

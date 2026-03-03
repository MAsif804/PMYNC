export default function MembersHero() {
    const stats = [
        { value: "24+", label: "Total members" },
        { value: "5", label: "Provinces" },
        { value: "6+", label: "Countries" },
    ];

    return (
        <section className="relative h-screen w-full flex items-center justify-center ">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/projects-hero-bg.png')" }} // Update path to actual team image if available
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 gap-5 w-full max-w-3xl mx-auto">
                {/* Heading */}
                <h1 className="text-[26px] sm:text-[38px] md:text-[46px] font-extrabold uppercase leading-tight tracking-wide drop-shadow-md">
                    <span className="text-[#088E48]">NYC</span>
                    <span className="text-white"> MEMBERS</span>
                </h1>

                {/* Subtitle */}
                <p className="text-white italic font-Roboto font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                    Meet the diverse voices representing Pakistan&apos;s youth across all provinces and sectors, driving change and innovation nationwide
                </p>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-4 w-full mt-2">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-[#088E48]/70 rounded-[4px] px-5 py-[30px] flex flex-col items-center justify-center gap-2 w-[210px]"
                        >
                            <span className="text-white font-extrabold text-[32px] sm:text-[44px] leading-tight">
                                {stat.value}
                            </span>
                            <span className="text-white text-[13px] sm:text-[14px] font-Roboto font-normal">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

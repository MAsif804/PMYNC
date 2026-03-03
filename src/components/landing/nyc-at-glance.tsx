export default function NYCAtGlance() {
    const stats = [
        { value: "150+", label: "International Members and Alumni" },
        { value: "35+", label: "Countries Engaged" },
        { value: "100+", label: "International Events and Forums" },
        { value: "500+", label: "International Projects" },
    ];

    // Orange number labels positioned on the globe map
    const mapLabels = [
        { value: "100+", style: { top: "8%", right: "28%" } },
        { value: "90+", style: { top: "22%", right: "14%" } },
        { value: "130+", style: { top: "42%", right: "46%" } },
        { value: "150+", style: { top: "42%", right: "6%" } },
        { value: "120+", style: { bottom: "22%", right: "28%" } },
    ];

    return (
        <section className="py-16 bg-[#f5f5f5] overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Text + Stats */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#041502] uppercase tracking-tight sm:text-4xl mb-1">
                                NYC AT GLANCE
                            </h2>
                            <h3 className="text-base font-bold text-[#041502] uppercase tracking-wide mb-4">
                                GLOBAL ENGAGEMENT &amp; INTERNATIONAL PARTNERSHIPS
                            </h3>
                            <p className="text-[#6A7282] text-sm leading-relaxed max-w-lg">
                                Our impact extends far beyond national borders. Through active participation in international conferences, youth assemblies, and global innovation programs, the Council connects Pakistan&apos;s young visionaries with changemakers around the world — promoting collaboration, exchange, and shared progress
                            </p>
                        </div>

                        {/* Stat Boxes */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-[#088E48] text-white flex flex-col items-center justify-center p-4 rounded-sm"
                                >
                                    <span className="text-3xl font-extrabold leading-none mb-1">{stat.value}</span>
                                    <span className="text-[11px] text-center leading-tight font-medium uppercase opacity-90">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Globe Map */}
                    <div className="relative flex items-center justify-center">
                        {/* Globe SVG map */}
                        <div className="relative w-full max-w-lg">
                            <img
                                src="/nyc-image.png"
                                alt="World Map"
                                className="w-full h-auto opacity-60"
                            // style={{ filter: "grayscale(100%) brightness(0.7)" }}
                            />

                            {/* Pakistan highlight overlay — positioned roughly over Pakistan on the SVG map */}
                            <div
                                className="absolute"
                                style={{ bottom: "28%", right: "18%", width: "60px", height: "54px" }}
                            >
                                <div className="w-full h-full bg-[#088E48] opacity-80 rounded-sm" />
                            </div>

                            {/* Orange number labels */}
                            {mapLabels.map((label, i) => (
                                <span
                                    key={i}
                                    className="absolute text-[#E6A817] font-extrabold text-sm leading-none"
                                    style={label.style}
                                >
                                    {label.value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

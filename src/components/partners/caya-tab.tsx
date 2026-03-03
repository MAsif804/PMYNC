import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const cayaData = {
    img: "/partners/caya-logo.png",
    name: "CAYA",
    description: {
        prefix: "The ",
        bold: "Commonwealth Asia Youth Alliance (CAYA)",
        suffix: " partnership connects us to a vast network of young leaders across Asia. This collaboration enables cross-cultural exchange, regional cooperation, and amplifies youth voices on the Commonwealth platform.",
    },
    regionalImpact: [
        { value: "15+", label: "Asian Countries" },
        { value: "10,000+", label: "Youth Members" },
        { value: "100+", label: "Annual Events" },
    ],
    collaborativePrograms: [
        {
            title: "Youth Leadership Exchange",
            description: "International exchange programs fostering leadership and cultural understanding",
        },
        {
            title: "Policy Advocacy Network",
            description: "Collaborative advocacy on youth issues at regional and Commonwealth levels",
        },
        {
            title: "Sustainable Development Projects",
            description: "Joint initiatives addressing SDGs across Asian Commonwealth nations",
        },
    ],
    ctaCard: {
        heading: "Join the Commonwealth Youth Network",
        description:
            "Through CAYA, PMNYC members gain access to regional opportunities, international conferences, and collaborative projects that span across Asia and the Commonwealth.",
        buttonLabel: "Visit CAYA website",
        website: "#",
    },
};

export default function CAYATab() {
    const data = cayaData;

    return (
        <div className="flex flex-col gap-5">
            {/* Logo */}
            <div>
                <img
                    src={data.img}
                    alt={data.name}
                    className="h-[120px] w-[120px] aspect-square"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            </div>

            {/* Description — with bold span */}
            <p className="text-[#6A7282] text-[18px] font-Roboto font-normal leading-[1.7]">
                {data.description.prefix}
                <strong className="text-[#6A7282] font-bold">{data.description.bold}</strong>
                {data.description.suffix}
            </p>

            {/* Regional Impact */}
            <div>
                <h3 className="text-[24px] font-bold text-[#041502] mb-4">Regional Impact</h3>
                <div className="grid grid-cols-3 gap-4">
                    {data.regionalImpact.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-[#F2FFF8] rounded-[8px] p-6 flex flex-col gap-3 h-[100px]"
                        >
                            <span className="text-[#088E48] font-extrabold text-[24px] leading-tight">
                                {stat.value}
                            </span>
                            <span className="text-[#088E48] text-[14px] font-normal">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Collaborative Programs */}
            <div>
                <h3 className="text-[24px] font-bold text-[#041502] mb-4">Collaborative Programs</h3>
                <div className="flex flex-col gap-3">
                    {data.collaborativePrograms.map((prog, i) => (
                        <div
                            key={i}
                            className="bg-[#F6F6F6] rounded-[8px] px-4 py-6 flex flex-col gap-1"
                        >
                            <p className="text-[#006600] font-bold text-[16px]">
                                {prog.title}
                            </p>
                            <p className="text-[#475063] text-[16px] leading-[1.6] font-Roboto">{prog.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Green Card */}
            <div className="bg-[#088E48] rounded-[12px] px-6 py-6 flex flex-col gap-3">
                <h3 className="text-[20px] font-bold text-white leading-snug">
                    {data.ctaCard.heading}
                </h3>
                <p className="text-white text-[14px] font-normal leading-[1.6]">
                    {data.ctaCard.description}
                </p>
                <div className="mt-1">
                    <Button
                        className="inline-flex items-center gap-2 bg-white text-[#088E48] font-bold text-[14px] px-5 py-2.5 rounded-[8px] hover:bg-gray-50 transition-colors"
                    >
                        {data.ctaCard.buttonLabel} <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

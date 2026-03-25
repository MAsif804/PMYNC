import { FileText, Radio, Building2, Users, Briefcase, Activity, UsersRound, RadioTower } from "lucide-react";
import { MdDiversity1 } from "react-icons/md";

const themes = [
    {
        title: "Policy Support",
        description: "Involvement of youth in policymaking and strengthening accountability mechanisms",
        icon: FileText,
        iconBg: "bg-[#09B99C]",
        active: true,
    },
    {
        title: "Media Support",
        description: "Promoting youth narratives through digital platforms",
        icon: RadioTower,
        iconBg: "bg-[#1EB8DF]",
        active: false,
    },
    {
        title: "Institutionalization",
        description: "Building a strong and sustainable Youth Council structure",
        icon: Building2,
        iconBg: "bg-[#B44FBB]",
        active: false,
    },
    {
        title: "Support to Marginalized Youth",
        description: "Ensuring inclusion across all demographics",
        icon: MdDiversity1,
        iconBg: "bg-[#F4612C]",
        active: false,
    },
    {
        title: "Employment",
        description: "Creating opportunities and skill-building for youth",
        icon: Briefcase,
        iconBg: "bg-[#F5A623]",
        active: false,
    },
    {
        title: "RHR (Reproductive Health and Rights)",
        description: "Advocating for youth health awareness",
        icon: Activity,
        iconBg: "bg-[#088E48]",
        active: false,
    },
    {
        title: "Youth Engagement",
        description: "Encouraging civic participation and leadership",
        icon: UsersRound,
        iconBg: "bg-[#6B5CE7]",
        active: false,
    },
];

export default function ThematicAreas() {
    return (
        <section className="py-16 bg-[#F5F5F5]">
            <div className="container">
                    {/* Right: Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                         {/* Left: Heading */}
                    <div className="flex flex-col gap-3 pt-2">
                        <h2 className="text-[44px] font-extrabold text-black uppercase leading-tight tracking-tight">
                            THEMATIC<br />AREAS
                        </h2>
                        <p className="text-[#6A7282] text-[18px] leading-relaxed">
                            Seven interconnected pillars driving youth empowerment across Pakistan
                        </p>
                    </div>
                        {themes.map((theme, i) => (
                            <div
                                key={i}
                                className={`bg-white rounded-2xl p-4 flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:border-2 hover:border-[#088E48]
                                    ${theme.active
                                        ? "border-2 border-[#088E48] shadow-sm"
                                        : "border border-gray-100 shadow-sm"
                                    }`}
                            >
                                {/* Icon badge */}
                                <div className={`${theme.iconBg} w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <theme.icon className="h-5 w-5 text-white" />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-black font-bold text-[24px] leading-snug mb-1">
                                        {theme.title}
                                    </h3>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        {theme.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
        </section>
    );
}

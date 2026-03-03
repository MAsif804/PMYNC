import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";


type Opportunity = {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
};

type ImpactStat = {
    value: string;
    label: string;
};

type Partner = {
    id: string;
    name: string;
    img: string;
    description: string;
    opportunities: Opportunity[];
    impact: ImpactStat[];
    website: string;
    websiteLabel: string;
};

export default function DYHTab({ partner }: { partner: Partner }) {
    return (
        <div className="flex flex-col gap-4">
            {/* Logo / Name */}
            <div>
                {partner.img && (
                    <img src={partner.img} alt={partner.name} className="h-[73px] w-[224px] aspect-auto" />
                )}
            </div>

            {/* Description */}
            <p className="text-[#6A7282] text-[18px] font-Roboto font-normal leading-[1.7]">
                {partner.description}
            </p>

            {/* Key Opportunities */}
            <div>
                <h3 className="text-[24px] font-bold text-[#041502] mb-3">Key Opportunities</h3>
                <div className="flex flex-col gap-4 ">
                    {partner.opportunities.map((opp, i) => {
                        const Icon = opp.icon;
                        return (
                            <div key={i} className="flex items-center gap-4 px-4 py-3 border-b border-[#808080] ">
                                <Icon className="w-[28px] h-[28px] aspect-square text-[#808080]" />
                                <span className="text-[#808080] text-[16px] font-semibold leading-[1.7]">{opp.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Partnership Impact */}
            <div>
                <h3 className="text-[24px] font-bold text-[#041502] mb-4">Partnership Impact</h3>
                <div className="grid grid-cols-3 gap-4">
                    {partner.impact.map((stat, i) => (
                        <div key={i} className="bg-[#E5F7ED] rounded-[8px] p-6 flex flex-col gap-3 h-[100px]">
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

            {/* CTA */}
            <div>
                <Button
                    onClick={() => window.location.href = partner.website}
                    variant="green"
                    className="rounded-[12px]">
                    {partner.websiteLabel}
                    <ArrowUpRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
import { ArrowUpRight } from "lucide-react";

type JointInitiative = {
    title: string;
    description: string;
};

type UNICEFPartner = {
    img: string;
    name: string;
    description: string;
    focusAreas: string[];
    jointInitiatives: JointInitiative[];
    conclusion: string;
    website: string;
    websiteLabel: string;
};

const unicefData: UNICEFPartner = {
    img: "/partners/unicef-logo.png",
    name: "UNICEF",
    description:
        "Our partnership with UNICEF strengthens our commitment to child rights, education, and welfare. Together, we implement programs that ensure every child has access to quality education, healthcare, and protection from violence and exploitation.",
    focusAreas: [
        "Education and learning support for underprivileged children",
        "Health and nutrition programs",
        "Child protection and advocacy",
        "Emergency response and humanitarian aid",
    ],
    jointInitiatives: [
        {
            title: "Youth Voice Campaign",
            description: "Empowering youth to advocate for their rights",
        },
        {
            title: "Education For All",
            description: "Ensuring access to quality education",
        },
        {
            title: "Safe Spaces",
            description: "Creating protective environments for children",
        },
    ],
    conclusion:
        "Through this partnership, PMNYC contributes to UNICEF's global mission while addressing local needs and challenges faced by children and youth in our communities.",
    website: "#",
    websiteLabel: "Learn more about UNICEF",
};

export default function UNICEFTab() {
    const data = unicefData;

    return (
        <div className="flex flex-col gap-4">
            {/* Logo */}
            <div>
                {data.img && (
                    <img
                        src={data.img}
                        alt={data.name}
                        className="h-[73px] w-[195px] aspect-auto"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                )}
            </div>

            {/* Description */}
            <p className="text-[#6A7282] text-[18px] font-Roboto font-normal leading-[1.7]">
                {data.description}
            </p>

            {/* Key Opportunities */}
            <div>
               <h3 className="text-[24px] font-bold text-[#041502] mb-3">Key Opportunities</h3>

                {/* Focus Areas Box */}
                <div className="bg-[#FAFAFA] rounded-[8px] p-[18px] flex flex-col gap-2">
                    <p className="text-[20px] font-bold text-[#041502]">Focus Areas</p>
                    <ul className="flex flex-col gap-2">
                        {data.focusAreas.map((area, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-[6px] w-[7px] h-[7px] rounded-full bg-[#041502] shrink-0" />
                                <span className="text-[#4D4D4D] text-[14px] leading-[1.6]">{area}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Joint Initiatives — Green Card */}
            <div className="bg-[#088E48] rounded-[10px] p-[18px] flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-white">Joint Initiatives</h3>
                <div className="flex flex-col gap-2">
                    {data.jointInitiatives.map((init, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                            <p className="text-white font-bold text-[14px]">{init.title}</p>
                            <p className="text-white text-[14px] font-normal">{init.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conclusion */}
           <p className="text-[#6A7282] text-[18px] font-Roboto font-normal leading-[1.7]">
                {data.conclusion}
            </p>

            {/* CTA Link */}
            <div>
                <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0066FF] font-bold text-[16px] hover:underline"
                >
                    {data.websiteLabel} 
                    <ArrowUpRight className="w-4 h-4 text-[#0066FF]" />
                </a>
            </div>
        </div>
    );
}

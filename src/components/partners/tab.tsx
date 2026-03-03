"use client";

import { GraduationCap, Briefcase, Users, Leaf } from "lucide-react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import DYHTab from "./dyh-tab";
import UNICEFTab from "./unicef-tab";
import CAYATab from "./caya-tab";

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

const partners: Partner[] = [
    {
        id: "dyh",
        name: "DYH",
        img: "/partners/dyh-logo.png",
        description:
            "The Developing Youth Hub (DYH) is our premier partner in youth empowerment and development. Through this collaboration, we provide comprehensive programs that nurture young talent, foster innovation, and create pathways for meaningful engagement in community development.",
        opportunities: [
            {
                icon: ({ className }: { className?: string }) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none" className={className}>
                        <path d="M12.8333 21L4.66667 16.5667V9.56667L0 7L12.8333 0L25.6667 7V16.3333H23.3333V8.28333L21 9.56667V16.5667L12.8333 21ZM12.8333 11.3167L20.825 7L12.8333 2.68333L4.84167 7L12.8333 11.3167ZM12.8333 18.3458L18.6667 15.1958V10.7917L12.8333 14L7 10.7917V15.1958L12.8333 18.3458Z" fill="#808080" />
                    </svg>
                ),
                text: "Enabling access to quality education and scholarships"
            },
            {
                icon: ({ className }: { className?: string }) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <path d="M2.33333 22.1667C1.69167 22.1667 1.14236 21.9382 0.685417 21.4812C0.228472 21.0243 0 20.475 0 19.8333V7C0 6.35833 0.228472 5.80903 0.685417 5.35208C1.14236 4.89514 1.69167 4.66667 2.33333 4.66667H7V2.33333C7 1.69167 7.22847 1.14236 7.68542 0.685417C8.14236 0.228472 8.69167 0 9.33333 0H14C14.6417 0 15.191 0.228472 15.6479 0.685417C16.1049 1.14236 16.3333 1.69167 16.3333 2.33333V4.66667H21C21.6417 4.66667 22.191 4.89514 22.6479 5.35208C23.1049 5.80903 23.3333 6.35833 23.3333 7V19.8333C23.3333 20.475 23.1049 21.0243 22.6479 21.4812C22.191 21.9382 21.6417 22.1667 21 22.1667H2.33333ZM9.33333 4.66667H14V2.33333H9.33333V4.66667ZM21 15.1667H15.1667V17.5H8.16667V15.1667H2.33333V19.8333H21V15.1667ZM10.5 15.1667H12.8333V12.8333H10.5V15.1667ZM2.33333 12.8333H8.16667V10.5H15.1667V12.8333H21V7H2.33333V12.8333Z" fill="#808080" />
                    </svg>
                ),
                text: "Bridging the gap between youth and career opportunities"
            },
            {
                icon: ({ className }: { className?: string }) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
                        <path d="M0 18.6667V14C0 13.3389 0.228472 12.7847 0.685417 12.3375C1.14236 11.8903 1.69167 11.6667 2.33333 11.6667H6.15417C6.54306 11.6667 6.9125 11.7639 7.2625 11.9583C7.6125 12.1528 7.89444 12.4153 8.10833 12.7458C8.67222 13.5042 9.36736 14.0972 10.1937 14.525C11.0201 14.9528 11.9 15.1667 12.8333 15.1667C13.7861 15.1667 14.6757 14.9528 15.5021 14.525C16.3285 14.0972 17.0139 13.5042 17.5583 12.7458C17.8111 12.4153 18.1076 12.1528 18.4479 11.9583C18.7882 11.7639 19.1431 11.6667 19.5125 11.6667H23.3333C23.9944 11.6667 24.5486 11.8903 24.9958 12.3375C25.4431 12.7847 25.6667 13.3389 25.6667 14V18.6667H17.5V16.0125C16.8194 16.4986 16.0854 16.8681 15.2979 17.1208C14.5104 17.3736 13.6889 17.5 12.8333 17.5C11.9972 17.5 11.1806 17.3687 10.3833 17.1063C9.58611 16.8438 8.84722 16.4694 8.16667 15.9833V18.6667H0ZM12.8333 14C12.0944 14 11.3944 13.8299 10.7333 13.4896C10.0722 13.1493 9.51805 12.6778 9.07083 12.075C8.74028 11.5889 8.32708 11.2049 7.83125 10.9229C7.33542 10.641 6.79583 10.5 6.2125 10.5C6.64028 9.78055 7.54444 9.21181 8.925 8.79375C10.3056 8.37569 11.6083 8.16667 12.8333 8.16667C14.0583 8.16667 15.3611 8.37569 16.7417 8.79375C18.1222 9.21181 19.0264 9.78055 19.4542 10.5C18.8903 10.5 18.3556 10.641 17.85 10.9229C17.3444 11.2049 16.9264 11.5889 16.5958 12.075C16.1681 12.6972 15.6236 13.1736 14.9625 13.5042C14.3014 13.8347 13.5917 14 12.8333 14ZM3.5 10.5C2.52778 10.5 1.70139 10.1597 1.02083 9.47917C0.340278 8.79861 0 7.97222 0 7C0 6.00833 0.340278 5.17708 1.02083 4.50625C1.70139 3.83542 2.52778 3.5 3.5 3.5C4.49167 3.5 5.32292 3.83542 5.99375 4.50625C6.66458 5.17708 7 6.00833 7 7C7 7.97222 6.66458 8.79861 5.99375 9.47917C5.32292 10.1597 4.49167 10.5 3.5 10.5ZM22.1667 10.5C21.1944 10.5 20.3681 10.1597 19.6875 9.47917C19.0069 8.79861 18.6667 7.97222 18.6667 7C18.6667 6.00833 19.0069 5.17708 19.6875 4.50625C20.3681 3.83542 21.1944 3.5 22.1667 3.5C23.1583 3.5 23.9896 3.83542 24.6604 4.50625C25.3312 5.17708 25.6667 6.00833 25.6667 7C25.6667 7.97222 25.3312 8.79861 24.6604 9.47917C23.9896 10.1597 23.1583 10.5 22.1667 10.5ZM12.8333 7C11.8611 7 11.0347 6.65972 10.3542 5.97917C9.67361 5.29861 9.33333 4.47222 9.33333 3.5C9.33333 2.50833 9.67361 1.67708 10.3542 1.00625C11.0347 0.335417 11.8611 0 12.8333 0C13.825 0 14.6562 0.335417 15.3271 1.00625C15.9979 1.67708 16.3333 2.50833 16.3333 3.5C16.3333 4.47222 15.9979 5.29861 15.3271 5.97917C14.6562 6.65972 13.825 7 12.8333 7Z" fill="#808080" />
                    </svg>
                ),
                text: "Promoting youth involvement in nation-building initiatives"
            },
            {
                icon: ({ className }: { className?: string }) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.8 17.0244C1.925 16.1494 1.23958 15.1382 0.74375 13.991C0.247917 12.8438 0 11.6577 0 10.4327C0 9.20769 0.233333 7.99727 0.7 6.80144C1.16667 5.60561 1.925 4.48269 2.975 3.43269C3.65556 2.75214 4.49653 2.1688 5.49792 1.68269C6.49931 1.19658 7.68542 0.812553 9.05625 0.530609C10.4271 0.248665 11.9924 0.0785256 13.7521 0.0201923C15.5118 -0.038141 17.4806 0.0299145 19.6583 0.224359C19.8139 2.28547 19.8625 4.1813 19.8042 5.91186C19.7458 7.64241 19.5854 9.20283 19.3229 10.5931C19.0604 11.9834 18.691 13.1987 18.2146 14.2389C17.7382 15.2792 17.15 16.1494 16.45 16.8494C15.4194 17.8799 14.3257 18.6334 13.1687 19.1098C12.0118 19.5862 10.8306 19.8244 9.625 19.8244C8.36111 19.8244 7.12639 19.5764 5.92083 19.0806C4.71528 18.5848 3.675 17.8994 2.8 17.0244ZM6.06667 16.5577C6.63056 16.8882 7.20903 17.1264 7.80208 17.2723C8.39514 17.4181 9.00278 17.491 9.625 17.491C10.5194 17.491 11.4042 17.3112 12.2792 16.9514C13.1542 16.5917 13.9903 16.0132 14.7875 15.216C15.1375 14.866 15.4924 14.3751 15.8521 13.7431C16.2118 13.1112 16.5229 12.2848 16.7854 11.2639C17.0479 10.2431 17.2472 9.00839 17.3833 7.55978C17.5194 6.11116 17.5389 4.38547 17.4417 2.38269C16.4889 2.3438 15.4146 2.32922 14.2187 2.33894C13.0229 2.34866 11.8319 2.44103 10.6458 2.61603C9.45972 2.79103 8.33194 3.07297 7.2625 3.46186C6.19306 3.85075 5.31806 4.38547 4.6375 5.06603C3.7625 5.94103 3.15972 6.8063 2.82917 7.66186C2.49861 8.51741 2.33333 9.3438 2.33333 10.141C2.33333 11.2882 2.55208 12.2945 2.98958 13.1598C3.42708 14.0251 3.81111 14.6327 4.14167 14.9827C4.95833 13.4271 6.0375 11.9348 7.37917 10.5056C8.72083 9.07644 10.2861 7.90491 12.075 6.99102C10.675 8.21602 9.45486 9.60144 8.41458 11.1473C7.37431 12.6931 6.59167 14.4966 6.06667 16.5577Z" fill="#808080" />
                    </svg>
                ),
                text: "Empower youth to take action on environmental sustainability"
            },
        ],
        impact: [
            { value: "5000+", label: "Youth Reached" },
            { value: "150+", label: "Programs Delivered" },
            { value: "25+", label: "Communities Served" },
        ],
        website: "#",
        websiteLabel: "Visit DYH website",
    },
    {
        id: "unicef",
        name: "UNICEF",
        img: "/partners/unicef-logo.png",
        description:
            "UNICEF works in over 190 countries and territories to save children's lives, defend their rights, and help them fulfil their potential. In Pakistan, UNICEF works with the government and partners to provide essential services to children and youth.",
        opportunities: [
            { icon: GraduationCap, text: "Improving child education and literacy rates" },
            { icon: Users, text: "Protecting children from violence and exploitation" },
            { icon: Briefcase, text: "Supporting youth skills development programs" },
            { icon: Leaf, text: "Promoting health and nutrition for young people" },
        ],
        impact: [
            { value: "10K+", label: "Children Supported" },
            { value: "80+", label: "Programs Delivered" },
            { value: "50+", label: "Districts Covered" },
        ],
        website: "#",
        websiteLabel: "Visit UNICEF website",
    },
    {
        id: "caya",
        name: "CAYA",
        img: "/partners/caya-logo.png",
        description:
            "The Coalition for Action on Youth Agendas (CAYA) is dedicated to amplifying youth voices at local, national, and international policy forums. CAYA works alongside NYC to ensure youth perspectives shape governance decisions.",
        opportunities: [
            { icon: Users, text: "Amplifying youth voices in policy formulation" },
            { icon: GraduationCap, text: "Providing leadership and advocacy training" },
            { icon: Briefcase, text: "Connecting youth with global opportunities" },
            { icon: Leaf, text: "Driving climate action through youth networks" },
        ],
        impact: [
            { value: "3000+", label: "Youth Engaged" },
            { value: "60+", label: "Events Hosted" },
            { value: "15+", label: "Provinces Covered" },
        ],
        website: "#",
        websiteLabel: "Visit CAYA website",
    },
];



export default function PartnersTab() {
    return (
        <section className="px-12 py-12">
            <div className="container ">
                {/* Page Title */}
                <h1 className="text-[28px] sm:text-[48px] font-bold text-[#041502] uppercase tracking-wide text-center mb-12">
                    Our Partners
                </h1>

                {/* shadcn Tabs — horizontal orientation used, laid out vertically via flex */}
                <Tabs defaultValue="dyh" orientation="vertical" className="flex w-full justify-between items-start border-none">
                    {/* ── Vertical Tab List ── */}
                    <TabsList className="flex flex-col  h-auto w-[160px] shrink-0 bg-transparent rounded-none p-0 items-start border-l-2 border-[#041502] mr-16">
                        {partners.map((p) => (
                            <TabsTrigger
                                key={p.id}
                                value={p.id}
                                className="
                                    justify-start ml-[-1px] text-left px-6 py-2.5 text-[20px] font-bold rounded-none
                                    border-l-[3px] border-l-transparent
                                    text-[#666666] bg-transparent shadow-none
                                    data-[state=active]:text-[#088E48]
                                    data-[state=active]:border-l-[#088E48]
                                    data-[state=active]:bg-none
                                    data-[state=active]:shadow-none
                                    hover:text-[#088E48]
                                    transition-colors
                                "
                            >
                                {p.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* ── Tab Panels ── */}
                    <div className="flex-1 min-w-0">
                        <TabsContent value={"dyh"} className="m-0 mt-0">
                            <DYHTab partner={partners.find((p) => p.id === "dyh")!} />
                        </TabsContent>
                        <TabsContent value={"unicef"} className="m-0 mt-0">
                            <UNICEFTab />
                        </TabsContent>
                        <TabsContent value={"caya"} className="m-0 mt-0">
                            <CAYATab />
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </section>
    );
}
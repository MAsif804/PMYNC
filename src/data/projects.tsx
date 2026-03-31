import { ReactNode } from "react";
import { CheckCircle2, MapPin } from "lucide-react";

export type Project = {
    slug: string;
    title: string;
    dateStart: string;
    dateEnd: string;
    thumbnail: string;
    shortDescription: string;
    beneficiaries: string;
    avatars: string[];
    images: string[];
    description: ReactNode;
    fullDescription: string[];
    objectives: string[];
    impacts: string[];
    locations: string[];
    detailImages: string[];
    categories: string[];
    linkedHappenings?: string[];
    linkedMembers?: string[];
};

const defaultDetailImages = [
    "/hero-section-bg.jpg",
    "/project-detail.png"
];

const defaultObjectives = [
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
];

const defaultImpacts = [
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
    "Develop critical thinking and decision-making skills among youth leaders",
];

const defaultLocations = ["Islamabad", "Lahore", "Peshawar"];

const defaultFullDescription = [
    "A comprehensive 18-month program designed to identify, nurture, and develop young leaders across Pakistan. Through intensive training modules, mentorship opportunities, and real-world leadership challenges, participants develop the skills and networks needed to drive positive change in their communities. Our program combines theoretical knowledge with practical application, ensuring that every participant gains hands-on experience in leadership roles.",
    "The Leadership Development Program represents a transformative journey for ambitious young Pakistanis who aspire to make a meaningful impact in their communities and beyond. Over 18 months, participants engage in a carefully curated curriculum that covers essential leadership competencies including strategic thinking, emotional intelligence, public speaking, conflict resolution, and ethical decision-making. The program leverages a blend of interactive workshops, mentorship from established leaders, peer learning circles, and real-world project implementations to create a holistic learning experience."
];

const getDefaultDescription = () => (
    <div className="flex flex-col items-start gap-[16px] xl:gap-[32px] w-full">
        {/* About */}
        <div className="flex flex-col items-start gap-[16px] xl:gap-[32px]">
            <h2 className="text-[#1A1A1A] capitalize font-poppins text-[26px] md:text-[28px] font-bold leading-normal">
                About the project
            </h2>
            <div className="flex flex-col items-start gap-[16px]">
                {defaultFullDescription.map((p, i) => (
                    <p key={i} className="text-[#6A7282] font-Roboto text-[16px] leading-[1.7]">
                        {p}
                    </p>
                ))}
            </div>
        </div>

        {/* Project locations */}
        <div className="flex flex-col items-start gap-[16px]">
            <h2 className="text-[#1A1A1A] capitalize font-poppins text-[18px] md:text-[20px] font-bold leading-normal">
                Project locations
            </h2>
            <div className="flex flex-wrap items-center gap-[12px]">
                {defaultLocations.map((loc, i) => (
                    <div key={i} className="flex items-center gap-[8px] px-[12px] py-[8px] rounded-[6px] bg-[#FAFAFA] border border-[#F0F0F0]">
                        <MapPin className="w-[18px] h-[18px] text-[#088E48]" />
                        <span className="text-[14px] font-Roboto font-medium text-[#1A1A1A]">
                            {loc}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        {/* Objectives */}
        <div className="flex flex-col items-start gap-[16px]">
            <h2 className="text-[#1A1A1A] capitalize font-poppins text-[28px] font-bold leading-normal">
                Key Objectives
            </h2>
            <ul className="flex flex-col list-none items-start gap-[24px]">
                {defaultObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-[16px]">
                        <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full border-[2.5px] border-[#088E48] shrink-0 mt-[2px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#088E48]"></div>
                        </div>
                        <span className="text-[#6A7282] font-Roboto text-[20px] font-medium leading-snug">
                            {obj}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Impacts */}
        <div className="flex flex-col items-start gap-[16px] w-full">
            <h2 className="text-[#1A1A1A] capitalize font-poppins text-[28px] font-bold leading-normal">
                Impacts and achievements
            </h2>
            <ul className="flex flex-col list-none items-start gap-[20px] w-full">
                {defaultImpacts.map((imp, i) => (
                    <li key={i} className="flex items-center gap-[16px] bg-[#FAFAFA] rounded-[8px] p-[16px] w-full">
                        <CheckCircle2 className="w-[30px] h-[30px] text-[#088E48] shrink-0" fill="#088E48" stroke="white" strokeWidth={1.5} />
                        <span className="text-[#6A7282] font-Roboto text-[18px] font-normal leading-snug">
                            {imp}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const projects: Project[] = [
    {
        slug: "youth-entrepreneurship-workshop",
        title: "Youth Entrepreneurship Workshop: Empowering Young Minds to Turn Ideas into Sustainable Ventures",
        dateStart: "Nov, 2025",
        dateEnd: "Dec, 2025",
        thumbnail: "/nyc-project/nyc-project-1.jpg",
        shortDescription: "Comprehensive leadership training workshops empowering young leaders across Pakistan with essential skills in public speaking, strategic thinking, a...",
        beneficiaries: "2500+",
        avatars: [
            "https://i.pravatar.cc/32?img=1",
            "https://i.pravatar.cc/32?img=2",
            "https://i.pravatar.cc/32?img=3",
        ],
        images: defaultDetailImages,
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: defaultObjectives,
        impacts: defaultImpacts,
        locations: defaultLocations,
        detailImages: defaultDetailImages,
        categories: ["projects"],
    },
    {
        slug: "innovation-challenge-2026",
        title: "Innovation Challenge 2026: National Competition Showcasing Creative Solutions",
        dateStart: "Nov, 2025",
        dateEnd: "Dec, 2025",
        thumbnail: "/nyc-project/nyc-project-3.jpg",
        shortDescription: "National competition showcasing innovative solutions for healthcare, education, agriculture, finance, and environmental sustainability with prizes upto...",
        beneficiaries: "2500+",
        avatars: [
            "https://i.pravatar.cc/32?img=7",
            "https://i.pravatar.cc/32?img=8",
            "https://i.pravatar.cc/32?img=9",
        ],
        images: defaultDetailImages,
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: defaultObjectives,
        impacts: defaultImpacts,
        locations: defaultLocations,
        detailImages: defaultDetailImages,
        categories: ["projects"],
    },
    {
        slug: "digital-skills-bootcamp",
        title: "Digital Skills Bootcamp: Preparing Youth for the Future of Work",
        dateStart: "Jan, 2026",
        dateEnd: "Feb, 2026",
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        shortDescription: "A comprehensive bootcamp equipping young Pakistanis with digital skills in AI, cloud computing, and cybersecurity to meet global workforce demands...",
        beneficiaries: "1800+",
        avatars: [
            "https://i.pravatar.cc/32?img=10",
            "https://i.pravatar.cc/32?img=11",
            "https://i.pravatar.cc/32?img=12",
        ],
        images: defaultDetailImages,
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: defaultObjectives,
        impacts: defaultImpacts,
        locations: defaultLocations,
        detailImages: defaultDetailImages,
        categories: ["projects"],
    },
    {
        slug: "digital-skills-bootcamp-transforming-youth-into-tech-savvy-professionals-ready-for-global-market",
        title: "Digital Skills Bootcamp: Transforming Youth into Tech-Savvy Professionals Ready for Global Market",
        dateStart: "Nov, 2025",
        dateEnd: "Dec, 2025",
        thumbnail: "/nyc-project/nyc-project-1.jpg",
        shortDescription: "Comprehensive leadership training workshops empowering young leaders across Pakistan with essential skills in public speaking, strategic thinking, a...",
        beneficiaries: "2500+",
        avatars: [
            "https://i.pravatar.cc/32?img=1",
            "https://i.pravatar.cc/32?img=2",
            "https://i.pravatar.cc/32?img=3",
        ],
        images: defaultDetailImages,
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: defaultObjectives,
        impacts: defaultImpacts,
        locations: defaultLocations,
        detailImages: defaultDetailImages,
        categories: ["projects"],
    },
    {
        slug: "leadership-development-program",
        title: "Leadership Development Program: Building Future Leaders Through Intensive Training",
        dateStart: "Nov, 2025",
        dateEnd: "Dec, 2025",
        thumbnail: "/nyc-project/1774435824988.jpg",
        shortDescription: "An intensive program designed to build leadership capacity among young council members with focus on governance, project management and, and......",
        beneficiaries: "2500+",
        avatars: [],
        images: ["/nyc-project/1774435789610.jpg", "/nyc-project/1774435816020.jpg"],
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: [
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders"
        ],
        impacts: [
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders",
            "Develop critical thinking and decision-making skills among youth leaders"
        ],
        locations: ["Islamabad"],
        detailImages: ["/nyc-project/1774435789610.jpg", "/nyc-project/1774435816020.jpg"],
        categories: ["projects"],
        linkedHappenings: ["digital-skills-bootcamp", "youth-climate-action-summit", "the-2024-scholarship-winners"],
        linkedMembers: ["zaynab-ul-ghazali", "muhammad-nouman", "fakhar-jabran", "iqra-bisma"],
    },
    {
        slug: "pakistan-youth-parliament-collaborates-with-institute-of-environmental-studies-to-celebrate-world-environment-day-2024",
        title: "Pakistan Youth Parliament Collaborates with Institute of Environmental Studies to Celebrate World Environment Day 2024",
        dateStart: "Nov, 2025",
        dateEnd: "Dec, 2025",
        thumbnail: "/nyc-project/1774589227636.jpg",
        shortDescription: "Karachi, June 5, 2024: Pakistan Youth Parliament partnered with the Institute of Environmental Studies, University of Karachi, to observe World Environment Day 2024. The event themed “Our land. Our future. We are #GenerationRestoration” aimed to raise awareness about environmental degradation and promote sustainable practices.Dr. Sidra Saeed – Member Sindh Cabinet PYP participated on behalf of President Pakistan Youth Parliament, Muhammad Abubakar. The event featured esteemed speakers, including: Prof. Dr. Khalid Mahmood Iraqi, Vice Chancellor, University of Karachi (Chief Guest) Dr. M. Farrakh Nawaz, Director, Institute of Environmental Studies Prof. Dr. Mussarat Jahan Yousaf, Dean, Faculty of Science Prof. Dr. Jamil Hasan Kazmi, Geologist Mr. Rafi ul Haq, Plant Ecologist",
        beneficiaries: "2000+",
        avatars: [],
        images: ["/nyc-project/1774589378033.jpg", "/nyc-project/1774589401735.jpg", "/nyc-project/1774589427430.jpg"],
        description: getDefaultDescription(),
        fullDescription: defaultFullDescription,
        objectives: [
            "The seminar focused on environmental waste management, remote sensing, and mangrove rehabilitation. The speakers emphasized the need for collective action to address environmental challenges. ",
            "The seminar focused on environmental waste management, remote sensing, and mangrove rehabilitation. The speakers emphasized the need for collective action to address environmental challenges. ",
            "The seminar focused on environmental waste management, remote sensing, and mangrove rehabilitation. The speakers emphasized the need for collective action to address environmental challenges. "
        ],
        impacts: [
            "The seminar focused on environmental waste management, remote sensing, and mangrove rehabilitation. The speakers emphasized the need for collective action to address environmental challenges. ",
            "The seminar focused on environmental waste management, remote sensing, and mangrove rehabilitation. The speakers emphasized the need for collective action to address environmental challenges. ",
            "The seminar focused on environmental waste management, remote sensing, and mangrove rehabilitation. The speakers emphasized the need for collective action to address environmental challenges. "
        ],
        locations: ["Islamabad", "Peshawar"],
        detailImages: ["/nyc-project/1774589378033.jpg", "/nyc-project/1774589401735.jpg", "/nyc-project/1774589427430.jpg"],
        categories: ["projects"],
        linkedHappenings: ["youth-climate-action-summit", "the-2024-scholarship-winners"],
        linkedMembers: ["zaynab-ul-ghazali", "sara-ahmed", "bilal-tanveer"],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

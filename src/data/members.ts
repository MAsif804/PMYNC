// ─── Member Type ──────────────────────────────────────────────────────────────
export type Member = {
    id: number;
    name: string;
    location: string;
    province: string;
    designation: string;
    sectors: string[];
    description: string;
    socials: {
        linkedin?: string;
        email?: string;
        phone?: string;
    };
    image: string;
    period: string;
    yearStart: string;
    type: string[];
    slug: string;
    achievements?: { title: string; description: string }[];
};

// ─── All Members ──────────────────────────────────────────────────────────────
export const allMembers: Member[] = [
    // ── Leadership ──
    {
        id: 1,
        name: "Prime Minister of Pakistan",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: "Patron-in-Chief",
        sectors: ["Policy Development", "Governance & Public Administration"],
        description:
            "Shehbaz Sharif is the Prime Minister of Pakistan, serving with a strong focus on economic stability, governance, and youth empowerment. His administration has launched numerous initiatives to uplift young Pakistanis through education, entrepreneurship, and civic engagement.",
        image: "/prime-minister.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership", "member"],
        slug: "prime-minister",
        socials: {},
        achievements: [
            { title: "Economic Stabilization", description: "Led Pakistan through a period of economic reform with focus on fiscal discipline and international partnerships." },
            { title: "Youth Programme Launch", description: "Officially notified the Prime Minister's National Youth Council as a platform for youth policy input." },
        ],
    },
    {
        id: 2,
        name: "Rana Mashood Ahmad Khan",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: "Chairperson",
        sectors: ["Policy Development", "Youth Engagement"],
        description:
            "Rana Mashood Ahmad Khan is the Chairperson of the Prime Minister's Youth Programme, leading initiatives for youth empowerment across Pakistan. He oversees the implementation of flagship programs connecting young leaders with opportunities.",
        image: "/rana-mashood.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership", "member"],
        slug: "rana-mashood",
        socials: {},
        achievements: [
            { title: "Youth Programme Leadership", description: "Successfully expanded the PM Youth Programme to all provinces, reaching over 1 million young people." },
            { title: "Policy Advocacy", description: "Championed youth-centric policies at the federal level, resulting in dedicated youth development budget allocations." },
        ],
    },
    {
        id: 3,
        name: "Malik Faisal Ayub Khokhar",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: "Minister for Youth Affairs",
        sectors: ["Youth Leadership", "Civic Engagement"],
        description:
            "Malik Faisal Ayub Khokhar is the Minister for Youth Affairs, leading initiatives for youth development and engagement at the national level. He focuses on creating pathways for young Pakistanis to participate in governance and policy-making.",
        image: "/malik-faisal.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership", "member"],
        slug: "malik-faisal",
        socials: {},
        achievements: [
            { title: "Youth Parliament Initiative", description: "Established youth parliaments at provincial and federal levels to give young people a voice in legislation." },
            { title: "Civic Education Program", description: "Launched a nationwide civic education program in schools and universities." },
        ],
    },
    // ── Members ──
    {
        id: 4,
        name: "Fakhar Jabran",
        location: "Bhimber, AJK",
        province: "AJK",
        designation: "Member",
        sectors: ["Digital Skills", "Entrepreneurship"],
        description:
            "A passionate entrepreneur and innovator, Fakhar Jabran is the founder of 4 successful startups and a Winner of the PM National Innovation Award. He started Connect, a platform bridging the digital divide in AJK, and continues to champion tech entrepreneurship among young Pakistanis.",
        image: "/meet-the-team/team-member-1.png",
        period: "2023 - present",
        yearStart: "2023",
        type: ["member", "leadership"],
        slug: "fakhar-jabran",
        socials: { linkedin: "#", email: "#", phone: "#" },
        achievements: [
            { title: "PM National Innovation Award", description: "Recognized nationally for outstanding innovation in the technology sector." },
            { title: "4 Startup Founder", description: "Successfully launched and scaled 4 startups across fintech, edtech, and agritech verticals." },
            { title: "Connect Platform", description: "Built a digital platform connecting rural youth in AJK with urban job opportunities and skill development." },
        ],
    },
    {
        id: 5,
        name: "Iqra Bisma",
        location: "Rawlakot, AJK",
        province: "AJK",
        designation: "Member",
        sectors: ["Digital Skills", "Entrepreneurship"],
        description:
            "A passionate advocate for health and wellbeing, Iqra Bisma is a proud recipient of the prestigious The Diana Award — one of the highest recognitions a young person can receive for social action and humanitarian efforts. Her journey reflects resilience, leadership, and a deep commitment to empowering communities, particularly young people and women across Pakistan. She has also had the honor of representing Pakistan in the Summer Sisters Exchange Program, where she served as a youth ambassador, promoting cross-cultural dialogue, leadership development, and global collaboration.",
        image: "/meet-the-team/team-member-2.jpg",
        period: "2023 - present",
        yearStart: "2023",
        type: ["member", "leadership"],
        slug: "iqra-bisma",
        socials: {},
        achievements: [
            { title: "The Diana Award", description: "Recognized internationally for outstanding contribution to social change and youth empowerment." },
            { title: "Summer Sisters Exchange Program", description: "Represented Pakistan on an international platform, promoting cross-cultural dialogue and youth leadership." },
            { title: "Youth-led Health & Wellbeing Initiatives", description: "Organized community campaigns and workshops, focusing on mental health awareness and emotional resilience." },
        ],
    },
    {
        id: 6,
        name: "Fahad Shahbaz",
        location: "Rawlakot, AJK",
        province: "AJK",
        designation: "Entrepreneur",
        sectors: ["Digital Skills", "Entrepreneurship"],
        description:
            "A youth representative from Balochistan dedicated to advancing climate resilience, empowering local communities, and bridging gaps between grassroots initiatives and national policy. Fahad brings a unique perspective on environmental challenges facing Pakistan's youth.",
        image: "/meet-the-team/team-member-3.jpg",
        period: "2023 - present",
        yearStart: "2023",
        type: ["member", "leadership"],
        slug: "fahad-shahbaz",
        socials: { linkedin: "#", email: "#", phone: "#" },
        achievements: [
            { title: "Climate Resilience Advocacy", description: "Led campaigns raising awareness about climate change impacts on youth in Balochistan." },
            { title: "Community Empowerment", description: "Established grassroots initiatives connecting local communities with government support programs." },
        ],
    },
    // ── Alumni ──
    {
        id: 7,
        name: "Sara Ahmed",
        location: "Karachi, Sindh",
        province: "Sindh",
        designation: "Alumni",
        sectors: ["Education", "Civic Engagement"],
        description:
            "Sara Ahmed is a former NYC member who has since founded a non-profit focused on girls' education in Sindh. Her work has impacted thousands of young women across rural Sindh, providing access to quality education and vocational training.",
        image: "/members/sara.jpg",
        period: "2020 - 2022",
        yearStart: "2020",
        type: ["leadership", "member"],
        slug: "sara-ahmed",
        socials: {},
        achievements: [
            { title: "Non-Profit Founder", description: "Founded an organization dedicated to girls' education, reaching 5,000+ students across rural Sindh." },
            { title: "Youth Policy Contribution", description: "Contributed to the National Youth Policy framework during her NYC tenure." },
        ],
    },
    {
        id: 8,
        name: "Bilal Tanveer",
        location: "Peshawar, KPK",
        province: "KPK",
        designation: "Alumni",
        sectors: ["Technology", "Youth Leadership"],
        description:
            "Bilal Tanveer is a tech entrepreneur who leveraged his NYC experience to build a platform connecting rural youth with digital opportunities. His work in KPK has created hundreds of tech jobs and training programs for young people in underserved areas.",
        image: "/members/bilal.jpg",
        period: "2019 - 2021",
        yearStart: "2019",
        type: ["alumni", "leadership"],
        slug: "bilal-tanveer",
        socials: {},
        achievements: [
            { title: "Digital Bridge Platform", description: "Built a platform connecting rural youth in KPK with digital jobs and freelancing opportunities." },
            { title: "100+ Training Programs", description: "Delivered tech skills training to over 500 youth across KPK through community workshops." },
        ],
    },
    {
        id: 9,
        name: "Fatima Malik",
        location: "Quetta, Balochistan",
        province: "Balochistan",
        designation: "Alumni",
        sectors: ["Health", "Policy Development"],
        description:
            "Fatima Malik worked on health policy advocacy during her tenure and continues to drive policy change from Balochistan. She focuses on maternal and child health, nutritional policy, and building healthcare access in remote areas of Balochistan.",
        image: "/members/fatima.jpg",
        period: "2021 - 2023",
        yearStart: "2021",
        type: ["alumni", "leadership"],
        slug: "fatima-malik",
        socials: {},
        achievements: [
            { title: "Health Policy Advocacy", description: "Advocated for maternal and child health policies that were incorporated into the national health framework." },
            { title: "Rural Healthcare Access", description: "Spearheaded initiatives to bring basic healthcare services to 20+ remote communities in Balochistan." },
        ],
    },
];

// ─── Helper ───────────────────────────────────────────────────────────────────
export function getMemberBySlug(slug: string): Member | undefined {
    return allMembers.find((m) => m.slug === slug);
}

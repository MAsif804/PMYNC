// ─── Member Type ──────────────────────────────────────────────────────────────
export type Member = {
    id: number;
    name: string;
    location: string;
    province: string;
    designation: string[];
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
        name: "Zaynab Ul Ghazali",
        location: "Islamabad",
        province: "Islamabad",
        designation: ["Patron-in-Chief"],
        sectors: [
            "Policy Development",
            "Governance & Public Administration"
        ],
        description:
            "Currently working as assistant manager research and advisory. Have worked as research assistant NDU, Alight Pakistan (an INGO focused on refugee crisis)",
        image: "/members/zaynab-ui-ghazali.jpg",
        period: "2023 - present",
        yearStart: "2023",
        type: ["leadership"],
        slug: "zaynab-ul-ghazali",
        socials: { email: "zaynabulghazali@gmail.com",},
        achievements: [
            {
                title: "Assistant Manager Research and Advisory"
                ,
                description: "Currently working as assistant manager research and advisory. Have worked as research assistant NDU, Alight Pakistan (an INGO focused on refugee crisis)"
            },
            {
                title: "Research Assistant NDU",
                description: "Officially notified the Prime Minister's National Youth Council as a platform for youth policy input."
            },
        ],
    },
    {
        id: 2,
        name: "Muhammad Nouman",
        location: "Peshawar, Khyber Pakhtunkhwa",
        province: "Khyber Pakhtunkhwa",
        designation: ["Chairperson"],
        sectors: ["Policy Development", "Youth Engagement"],
        description:
            "My name is Muhammad Nouman from Khyber pakhtunkhwa Peshawar Pakistan, a dedicated lawyer and advocate for special persons' rights, serves as a member of the Prime Minister's National Youth Council Pakistan, focusing on policy-making and special persons' initiatives. I am also a member of the Commonwealth Students Association and Focal Person for Disabled Persons in KP, driving positive change and inclusivity.",
        image: "/members/muhammad-nouman.jpg",
        period: "2023 - present",
        yearStart: "2023",
        type: [ "member"],
        slug: "muhammad-nouman",
        socials: { email: "mn247682@gmail.com",},
        achievements: [
            { 
                title: "A member of the Prime Minister's National Youth Council Pakistan", 
                description: "A member of the Prime Minister's National Youth Council Pakistan, focusing on policy-making and special persons' initiatives." 
            },
            { 
                title: "Policy Advocacy", 
                description: "Championed youth-centric policies at the federal level, resulting in dedicated youth development budget allocations." 
            },
        ],
    },
    {
        id: 3,
        name: "Malik Faisal Ayub Khokhar",
        location: "Lahore, Punjab",
        province: "Punjab",
        designation: ["Minister for Youth Affairs"],
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
        designation: ["Member"],
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
        designation: ["Member"],
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
        designation: ["Entrepreneur"],
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
        designation:  ["Alumni"],
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
        designation: ["Alumni"],
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
        designation: ["Alumni"],
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
    {
        id: 10,
        name: "Hassan Ashraf",
        location: "Faisalabad",
        province: "Punjab",
        designation: ["Member"],
        sectors: [],
        description: "I'm Hassan  Member of NYC From Faisalabad, Pakistan. I have done Masters in journalism. I'm the co-Founder of a company named The Platform which is a coworking space. I'm also the Founder & CEO of Umeed foundation. Its a non-profitable organisation.  Through This foundation we educate child labourers and slums children free of cost all across Pakistan. We teach these children by going into there slums and underprivileged areas and by making small schools inside there slums so they can trust us easily and start getting education. My basic Aim is to give all underprivileged children a way & a platform to educate themselves where they can build their own future like other normal children. Alhamdulillah till now we have educated more than 2000 deserving children across Pakistan free of cost. We have currently 7 schools in 4 cities of Pakistan. Umeed will one day educate millions of children free of cost! Thats my dream  I have also recently won one of the world's most prestigious Humanitarian award. The Diana Award UK in 2021. I have also received several awards in Pakistan from Pakistan Government i.e Pride of Country, Hamary Heroes. Apart from all of this my hobby is to learn about new cultures and to meet new people. I love traveling around the world. I have traveled to many countries and attended many conferences and youth summits in different parts of the world and also won different awards there as well. ",
        image: "/members/1772780194213.jpeg",
        period: "2023 - present",
        yearStart: "2025",
        type: ["member"],
        slug: "hassan-ashraf",
        socials: { email: "hassan03326760556@gmail.com" },
        achievements: [],
    },

];

// ─── Helper ───────────────────────────────────────────────────────────────────
export function getMemberBySlug(slug: string): Member | undefined {
    return allMembers.find((m) => m.slug === slug);
}

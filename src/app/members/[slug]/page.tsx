import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { getMemberBySlug } from "@/data/members";
import { notFound } from "next/navigation";
import MemberDetailView from "@/components/members-details/member-detail";
import MemberHappenings from "@/components/members-details/happenings";
import MemberProjects from "@/components/members-details/project";

export default async function MemberDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const member = getMemberBySlug(slug);

    if (!member) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <MemberDetailView member={member} />
            <MemberHappenings />
            <MemberProjects />
            <Footer />
        </main>
    );
}

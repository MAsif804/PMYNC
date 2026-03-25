import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHero from "@/components/project-detail/project-hero";
import ProjectDetails from "@/components/project-detail/project-details";
import ProjectHappenings from "@/components/project-detail/project-happenings";
import ProjectTeam from "@/components/project-detail/project-team";
import ProjectJoinCTA from "@/components/project-detail/project-join-cta";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    // Await params since Next.js 15+ dynamic APIs (like params, searchParams) are asynchronous
    const { slug } = await params;

    // Simulate an API delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ProjectHero project={project} />
            <ProjectDetails project={project} />
            {/* The rest remain static for now per instructions, or pass project down if needed later */}
            <ProjectHappenings />
            <ProjectTeam linkedMembers={project.linkedMembers} />
            <ProjectJoinCTA />
            <Footer />
        </main>
    );
}

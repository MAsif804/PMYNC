import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectsHero from "@/components/projects/projects-hero";
import Filters from "@/components/projects/filters";
import ProjectsGrid from "@/components/projects/projects-grid";
import HappeningsGrid from "@/components/projects/happenings-grid";
import ProjectsCTA from "@/components/projects/projects-cta";


export default function ProjectsListingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ProjectsHero />
            <Filters />
            <ProjectsGrid />
            <HappeningsGrid />
            <ProjectsCTA />
            <Footer />
        </main>
    );
}

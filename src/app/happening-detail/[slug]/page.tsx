import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HappeningDetails from "@/components/happening-detail/happening-details";
import HappeningTeam from "@/components/happening-detail/happening-team";
import HappeningHero from "@/components/happening-detail/happening-hero";
import { getHappeningBySlug } from "@/data/happenings";
import { notFound } from "next/navigation";


export default async function HappeningDetailPage({ params }: { params: { slug: string } }) {

    // Await params since Next.js 15+ dynamic APIs (like params, searchParams) are asynchronous
    const { slug } = await params;

    // Simulate an API delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    const happening = getHappeningBySlug(slug);

    if (!happening) {
        notFound();
    }
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HappeningHero happening={happening} />
            <HappeningDetails happening={happening} />
            <HappeningTeam happening={happening} />
            <Footer />
        </main>
    );
}

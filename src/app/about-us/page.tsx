import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/components/about/about-hero";
import VisionSection from "@/components/about/vision";
import WhyMatters from "@/components/about/why-matters";
import GlobalEngagement from "@/components/landing/nyc-at-glance"; // Reused
import SharedVision from "@/components/about/shared-vision";
import ThematicAreas from "@/components/landing/thematic-areas"; // Reused
import LeadershipProfiles from "@/components/about/leadership";
import JoinCTA from "@/components/about/join-cta";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <AboutHero />
            <VisionSection />
            <WhyMatters />
            <GlobalEngagement />
            <SharedVision />
            <ThematicAreas />
            <LeadershipProfiles />
            <JoinCTA />
            <Footer />
        </main>
    );
}

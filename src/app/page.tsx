import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/landing/hero";
import ChairmanMessage from "@/components/landing/chairman-message";
import FeaturedStories from "@/components/landing/featured-stories";
import Projects from "@/components/landing/projects";
import ThematicAreas from "@/components/landing/thematic-areas";
import FAQ from "@/components/landing/faq";
import NYCAtGlance from "@/components/landing/nyc-at-glance";
import NYCHappenings from "@/components/landing/happenings";

export default function Home() {
    return (
        <main className="min-h-screen bg-background antialiased">
            <Navbar />
            <HeroSection />
            <ChairmanMessage />
            <FeaturedStories />
            <NYCAtGlance />
            <Projects />
            <ThematicAreas />
            <NYCHappenings />
            <FAQ />
            <Footer />
        </main>
    );
}

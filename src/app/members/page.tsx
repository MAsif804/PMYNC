import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MembersHero from "@/components/members/members-hero";
import MembersTabs from "@/components/members/tabs";

export default function MembersPage() {
    return (
        <main className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <MembersHero />
            <MembersTabs />
            <Footer />
        </main>
    );
}

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PartnersTab from "@/components/partners/tab";

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PartnersTab />
            <Footer />
        </main>
    );
}

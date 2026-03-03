import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactHero from "@/components/contact-us/hero";
import HelpYou from "@/components/contact-us/help-you";
import ContactInformation from "@/components/contact-us/contact-information";
import FAQ from "@/components/landing/faq";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <ContactHero />
            <HelpYou />
            <ContactInformation />
            <FAQ />
            <Footer />
        </main>
    );
}

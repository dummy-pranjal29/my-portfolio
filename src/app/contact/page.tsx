import ContactSection from "@/components/sections/ContactSection";
import BackgroundScene from "@/components/background/BackgroundScene";

export const metadata = {
  title: "Contact | Aditya Pranjal",
  description:
    "Get in touch with Aditya Pranjal for opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <BackgroundScene variant="contact" />
      <main className="relative z-10 min-h-screen text-white">
        <ContactSection />
      </main>
    </>
  );
}

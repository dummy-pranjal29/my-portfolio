import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact | Aditya Pranjal",
  description:
    "Get in touch with Aditya Pranjal for opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ContactSection />
    </main>
  );
}

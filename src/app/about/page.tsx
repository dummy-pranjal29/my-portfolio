import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About | Aditya Pranjal",
  description:
    "About me, my background, and my academic journey in engineering and computer science.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AboutSection />
    </main>
  );
}

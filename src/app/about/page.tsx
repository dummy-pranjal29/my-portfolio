import BackgroundScene from "@/components/background/BackgroundScene";
import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About | Aditya Pranjal",
  description:
    "About me, my background, and my academic journey in engineering and computer science.",
};

export default function AboutPage() {
  return (
    <>
      {/* Cinematic background for About */}
      <BackgroundScene variant="about" />

      {/* Foreground content */}
      <main className="relative z-10 min-h-screen text-white">
        <AboutSection />
      </main>
    </>
  );
}

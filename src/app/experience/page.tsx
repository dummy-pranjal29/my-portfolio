import BackgroundScene from "@/components/background/BackgroundScene";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata = {
  title: "Experience | Aditya Pranjal",
  description:
    "Professional experience, internships, and hands-on work in software engineering and data science.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Calm, professional background */}
      <BackgroundScene variant="experience" />

      {/* Foreground content */}
      <main className="relative z-10 min-h-screen text-white">
        <ExperienceSection />
      </main>
    </>
  );
}

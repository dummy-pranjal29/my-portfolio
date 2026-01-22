import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata = {
  title: "Experience | Aditya Pranjal",
  description: "Professional experience across fintech and data science.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ExperienceSection />
    </main>
  );
}

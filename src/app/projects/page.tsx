import ProjectsSection from "@/components/sections/ProjectsSection";
import BackgroundScene from "@/components/background/BackgroundScene";

export const metadata = {
  title: "Projects | Aditya Pranjal",
  description:
    "Selected projects including AI systems, developer tools, and backend APIs.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Cinematic background */}
      <BackgroundScene variant="projects" />

      {/* Foreground content */}
      <main className="relative z-10 min-h-screen text-white">
        <ProjectsSection />
      </main>
    </>
  );
}

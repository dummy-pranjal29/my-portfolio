import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Aditya Pranjal",
  description:
    "Selected projects including AI systems, developer tools, and backend APIs.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ProjectsSection />
    </main>
  );
}

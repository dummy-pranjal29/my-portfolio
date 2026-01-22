import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Scripts AI"
            description="AI-native coding playground with real-time execution and collaborative workflows."
            highlights={[
              "Built a full-stack AI code playground with real-time execution using WebContainer API",
              "Designed scalable REST APIs with authentication, chat, and GitHub integration",
              "Integrated Monaco Editor for VS Code-like editing experience",
            ]}
            stack={[
              "Next.js 16",
              "TypeScript",
              "React",
              "Prisma",
              "MongoDB",
              "NextAuth.js",
              "Monaco Editor",
              "Groq",
              "WebContainer API",
            ]}
            links={{
              github: "https://github.com/dummy-pranjal29",
            }}
          />

          <ProjectCard
            title="AiCodes"
            description="AI-powered automated code review platform for developers."
            highlights={[
              "Built end-to-end AI code review workflow using Google Gemini AI",
              "Implemented controller–service REST architecture with Express.js",
              "Rendered structured AI feedback with syntax highlighting and Markdown",
            ]}
            stack={[
              "React",
              "Node.js",
              "Express.js",
              "Google Gemini AI",
              "Prism.js",
              "Axios",
              "REST APIs",
            ]}
            links={{
              github: "https://github.com/dummy-pranjal29",
            }}
          />

          <ProjectCard
            title="Contract Intelligence API"
            description="Backend-first AI system for analyzing and extracting insights from legal contracts."
            highlights={[
              "Designed backend-only API focused on contract ingestion and analysis",
              "Implemented AI-driven summarization and clause extraction pipeline",
              "Optimized for scalability and future RAG-based extensions",
            ]}
            stack={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "LLMs",
              "RAG",
              "PostgreSQL",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

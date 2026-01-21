export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">AI Contract Intelligence</h3>
            <p className="text-gray-400 mt-2">
              AI-powered system to analyze and summarize contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import OpenSourceCard from "@/components/opensource/OpenSourceCard";

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Open Source</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <OpenSourceCard
            project="vscode-icons"
            contribution="Open Source Contributor"
            description="Contributed improvements to the VS Code Icons project, enhancing icon mappings and developer experience for VS Code users."
            link="https://github.com/dummy-pranjal29/vscode-icons"
          />
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          I’m always open to discussing new opportunities, interesting projects,
          or collaborations around software engineering and AI.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ContactCard
            title="Email"
            value="adityapranjal29112001@gmail.com"
            link="mailto:adityapranjal29112001@gmail.com"
          />

          <ContactCard
            title="GitHub"
            value="github.com/dummy-pranjal29"
            link="https://github.com/dummy-pranjal29"
          />

          <ContactCard
            title="LinkedIn"
            value="linkedin.com/in/aditya-pranjal"
            link="https://www.linkedin.com/in/aditya-pranjal"
          />
        </div>
      </div>
    </section>
  );
}

/* 👇 INLINE COMPONENT — NO IMPORTS 👇 */
function ContactCard({
  title,
  value,
  link,
}: {
  title: string;
  value: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-6 rounded-xl border border-gray-700 bg-neutral-900
        hover:border-cyan-500/40 transition block
      "
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{value}</p>
    </a>
  );
}

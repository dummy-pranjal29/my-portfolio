interface ContactCardProps {
  title: string;
  value: string;
  link: string;
}

export default function ContactCard({ title, value, link }: ContactCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="
        p-6 rounded-xl border border-gray-700 bg-neutral-900
        hover:border-cyan-500/40 transition
        block
      "
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{value}</p>
    </a>
  );
}

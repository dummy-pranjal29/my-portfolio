interface EducationCardProps {
  title: string;
  level: string;
  score: string;
  duration: string;
  link: string;
}

export default function EducationCard({
  title,
  level,
  score,
  duration,
  link,
}: EducationCardProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-700 bg-neutral-900 hover:border-cyan-500/40 transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>

      <p className="text-sm text-gray-400 mb-1">{level}</p>
      <p className="text-sm text-gray-300">{score}</p>
      <p className="text-sm text-gray-500 mb-3">{duration}</p>

      <a
        href={link}
        target="_blank"
        className="text-sm text-cyan-400 hover:underline"
      >
        Visit Institution →
      </a>
    </div>
  );
}

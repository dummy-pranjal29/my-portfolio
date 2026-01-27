import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-400 flex flex-col items-center gap-2">
        <span>© {new Date().getFullYear()} Aditya Pranjal</span>
        <span className="opacity-80">
          Portfolio v1.0 • Last updated Jan 2026
        </span>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Aditya Pranjal</span>

        <div className="flex gap-6">
          <Link href="/projects" className="hover:text-cyan-400">
            Projects
          </Link>
          <Link href="/opensource" className="hover:text-cyan-400">
            Open Source
          </Link>
          <Link href="/experience" className="hover:text-cyan-400">
            Experience
          </Link>
          <Link href="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

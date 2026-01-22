import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-cyan-400">
          ME :)
        </Link>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/about" className="hover:text-cyan-400">
            About
          </Link>
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
    </nav>
  );
}

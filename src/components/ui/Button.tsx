import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
}

const base =
  "px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2";

const variants: Record<Variant, string> = {
  primary: "bg-cyan-500 text-black hover:bg-cyan-400 focus:ring-cyan-500/50",
  secondary:
    "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500/40",
  ghost:
    "border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white focus:ring-gray-500/40",
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

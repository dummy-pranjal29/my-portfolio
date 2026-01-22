import OpenSourceSection from "@/components/sections/OpenSourceSection";

export const metadata = {
  title: "Open Source | Aditya Pranjal",
  description:
    "Open source contributions focused on developer tooling and ecosystem improvements.",
};

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <OpenSourceSection />
    </main>
  );
}

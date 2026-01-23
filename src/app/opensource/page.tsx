import BackgroundScene from "@/components/background/BackgroundScene";
import OpenSourceSection from "@/components/sections/OpenSourceSection";

export const metadata = {
  title: "Open Source | Aditya Pranjal",
  description:
    "Open source contributions focused on developer tooling and ecosystem improvements.",
};

export default function OpenSourcePage() {
  return (
    <>
      {/* Cinematic background for Open Source */}
      <BackgroundScene variant="opensource" />

      {/* Foreground content */}
      <main className="relative z-10 min-h-screen text-white">
        <OpenSourceSection />
      </main>
    </>
  );
}

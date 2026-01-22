import React from "react";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";

export default function Page() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <OpenSourceSection />
    </>
  );
}

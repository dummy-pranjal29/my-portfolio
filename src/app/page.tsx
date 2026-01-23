import React from "react";
import BackgroundScene from "@/components/background/BackgroundScene";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <>
      <BackgroundScene variant="home" />
      <HomeSection />
      <AboutSection />
      <ExperienceSection /> {/* 👈 ADDED */}
      <ProjectsSection />
      <OpenSourceSection />
      <ContactSection /> {/* 👈 ADDED */}
    </>
  );
}

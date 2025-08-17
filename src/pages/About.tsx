import React from "react";
import HeroSection from "../components/about/heroSection";
import OurMission from "../components/about/ourMission";
import OurAchievements from "../components/about/ourAchievements";
import OurHistory from "../components/about/ourHistory";

function About() {
  return (
    <div className="flex flex-col m-[2%] gap-17 md:m-[4%] lg:m-[2%]">
      <HeroSection />
      <OurMission />
      <OurAchievements />
      <OurHistory />
    </div>
  );
}

export default About;

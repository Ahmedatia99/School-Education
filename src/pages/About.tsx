// import React from "react";
import HeroSection from "../components/about/heroSection";
import OurMission from "../components/about/ourMission";
import OurAchievements from "../components/about/ourAchievements";
import OurHistory from "../components/about/ourHistory";
import TeamMembers from "../components/about/teamMembers";
import Footer  from "../components/common/Footer.tsx";


function About() {
  return (
    <div className="container px-3 mx-auto">
      <HeroSection />
      <OurMission />
      <OurAchievements />
      <OurHistory />
      <TeamMembers />
        <Footer />
    </div>
  );
}

export default About;

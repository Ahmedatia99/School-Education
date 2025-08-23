// import React from "react";
import HeroSection from "../components/about/heroSection";
import OurMission from "../components/about/ourMission";
import OurAchievements from "../components/about/ourAchievements";
import OurHistory from "../components/about/ourHistory";
import TeamMembers from "../components/about/teamMembers";


function About() {
  return (
    <div className="container px-3 mx-auto">
      <HeroSection
        HeroBtn={"Overview"}
        HeroH={"Welcome to Little Learners Academy"}
        HeroP={
          "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        }
      />
      <OurMission />
      <OurAchievements />
      <OurHistory />
      <TeamMembers />
    </div>
  );
}

export default About;

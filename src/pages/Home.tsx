import React from "react";
import Hero from "./../components/home/Hero";
import OurBenefits from "./../components/home/OurBenefits";
import OurTestimonials from "./../components/home/OurTestimonials";
import FrequentlyQuestions from "./../components/home/FrequentlyQuestions";
function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <OurBenefits />
      <OurTestimonials />
      <FrequentlyQuestions />
    </main>
  );
}

export default Home;

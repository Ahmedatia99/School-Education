import React from "react";
import Navbar from "./../components/common/Navbar";
import Banner from "./../components/common/Banner";
import Hero from "./../components/home/Hero";
function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Navbar />
      <Hero />
    </main>
  );
}

export default Home;

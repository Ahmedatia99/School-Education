import React from "react";
import Navbar from "./../components/common/Navbar";
import Banner from "./../components/common/Banner";

function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Navbar />
    </main>
  );
}

export default Home;

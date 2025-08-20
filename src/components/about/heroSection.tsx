import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section relative flex flex-col md:flex-row items-center justify-between p-15 md:p-17 lg:p-23 gap-6 border-2  [box-shadow:5px_5px_0_black] bg-white">
      {/* Left Section */}
      <div className=" md:w-1/2  flex flex-col items-center gap-4 md:items-start">
        <img
          src="/assets/Abstract-Design.png"
          alt="Kids"
          className="absolute top-0 left-0 w-[30%] sm:w-[25%] md:w-[20%] lg:w-[150px] rounded-lg "
        />
        <button className="border-2 rounded-lg px-4 py-2  font-bold text-center">
          Overview
        </button>
        <h1 className=" text-lg sm:text-2xl  md:text-4xl lg:text-5xl font-bold text-center  md:text-start ">
          Welcome to Little Learners Academy
        </h1>
      </div>

      {/* Right Section */}
      <div className=" md:w-1/2">
        <p className="font-medium  text-center md:text-start">
          A leading kinder garden school dedicated to providing a nurturing and
          stimulating environment for young learners. With a commitment to
          excellence in early education, we believe in shaping curious minds and
          building a strong foundation for a lifelong love of learning. Our
          holistic approach fosters intellectual, social, emotional, and
          physical development, ensuring that each child reaches their full
          potential.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";

const HeroSection = ({ HeroBtn, HeroH, HeroP }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between p-15 md:p-23 gap-6 border-2  [box-shadow:5px_5px_0_black] bg-white">
      {/* Left Section */}
      <div className=" md:w-1/2  flex flex-col items-center gap-1 md:items-start">
        <img
          src="/assets/Abstract-Design.png"
          alt="Kids"
          className="absolute top-0 left-0 w-35 rounded-lg"
        />
        <button className="border-2 rounded-lg px-4 py-2  font-bold text-center">
          {HeroBtn}
        </button>
        <h1 className="text-[28px] font-bold text-center md:text-[38px] md:text-start ">
          {HeroH}
        </h1>
      </div>

      {/* Right Section */}
      <div className=" md:w-1/2">
        <p className="font-medium  text-center md:text-start">{HeroP}</p>
      </div>
    </div>
  );
};

export default HeroSection;

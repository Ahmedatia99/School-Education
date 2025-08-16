import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <section className="w-full px-2 mt-1">
      <div className="banner-cover p-2 sm:p-1 md:p-2 bg-no-repeat bg-cover flex items-center gap-2 sm:gap-3 justify-center border-2 border-dark rounded-lg font-medium text-sm sm:text-xs md:text-lg text-center shadow-lg">
        <span>Admission is Open, Grab your seat now</span>
        <FaArrowRight className="mt-1 sm:mt-0" />
      </div>
    </section>
  );
}

export default Banner;

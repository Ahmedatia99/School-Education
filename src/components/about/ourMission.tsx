import React from "react";
import SubContainer from "../common/SubContainer";

function ourMission() {
  return (
    // Main Container
    <div>
      {/* Top Container */}
      <SubContainer
        btnText="Mission & Vision"
        h2Text="Our Mission & Vision"
        pText="We are here to provide a nurtxuring and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth."
      />
      {/* Container Boxes */}
      <div className=" our-mission flex flex-col md:flex-row gap-10 xl:mx-5 md:mx-0 ">
        {/* Mid Container */}

        <div className="flex flex-col p-3 sm:p-10 w-full gap-10  border-2 rounded-2xl [box-shadow:5px_5px_0_black] bg-white">
          {/* Mid Container Top */}

          <div className="flex flex-col sm:flex-row justify-between items-center  sm:text-start  gap-5 text-center">
            <h3 className=" text-2xl sm-text-[30px] font-bold">Mission</h3>
            <img src="/assets/mission.png" alt="" className="w-12" />
          </div>
          {/* Mid Container Bottom */}

          <div className="w-full font-medium text-[12px] sm:text-[16px]">
            <p>
              At Little Learners Academy, our mission is to inspire a passion
              for learning and empower young minds to become confident,
              compassionate, and creative individuals. We strive to create a
              safe and inclusive space where children thrive academically,
              socially, and emotionally, setting the stage for a successful
              educational journey.
            </p>
          </div>
        </div>

        {/* Bottom Container */}

        <div className="flex flex-col p-3 sm:p-10 w-full gap-10  border-2 rounded-2xl [box-shadow:5px_5px_0_black] bg-white  ">
          {/* Bottom Container Top */}

          <div className="flex flex-col sm:flex-row justify-between items-center  sm:text-start  gap-5 text-center">
            <h3 className="text-2xl sm-text-[30px] font-bold">Vision</h3>
            <img src="/assets/vision.png" alt="" className="w-14" />
          </div>
          {/* Bottom Container Bottom */}

          <div className="w-full font-medium text-[12px] sm:text-[16px]">
            <p>
              Our vision is to be a beacon of educational excellence, where
              children are encouraged to explore, discover, and express their
              unique talents. We aim to foster a generation of lifelong learners
              equipped with critical thinking, empathy, and a deep appreciation
              for diversity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourMission;

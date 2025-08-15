import React from "react";
import SubContainer from "../common/SubContainer";
import BoxPhotoInPosition from "../common/BoxPhotoInPosition";

function OurAchievements() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center shadow-2xl mb-[3.75rem] m-[5%]">
        {/* Top Container */}
        <SubContainer
          btnText="Our Achievements"
          h2Text="Our Awards and Recognitions"
          pText="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
      </div>
      <div className="md:hidden">
        <BoxPhotoInPosition
          imgSrc="/assets/electric.png"
          h3Text="Environmental Stewardship Award"
          pText="Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        />
      </div>

      <div className="flex flex-row items-center justify-between m-[5%] n md:hidden ">
        <span className="font-bold text-[18px]">8 More Awards</span>
        <div className="flex gap-5 mt-4">
          <button>
            <img src="/assets/leftArrow.png" alt="" className="w-14" />
          </button>
          <button>
            <img src="/assets/rightArrow.png" alt="" className="w-14" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurAchievements;

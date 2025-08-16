import React, { useState } from "react";
import SubContainer from "../common/SubContainer";
import BoxPhotoInPosition from "../common/BoxPhotoInPosition";

const BoxesDate = [
  {
    imgSrc: "/assets/circleChart.png",
    h3Text: "Outstanding Early Childhood Education Award",
    pText:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    imgSrc: "/assets/network.png",
    h3Text: "Innovative STEAM Education Award",
    pText:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    imgSrc: "/assets/electric.png",
    h3Text: "Environmental Stewardship Award",
    pText:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

function OurAchievements() {
  const [index, setIndex] = useState(0);

  const backArrowOnClickHandler = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : BoxesDate.length - 1));
  };

  const nextArrowOnClickHandler = () => {
    setIndex((prev) => (prev < BoxesDate.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center  ">
      <SubContainer
        btnText="Our Achievements"
        h2Text="Our Awards and Recognitions"
        pText="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <div className=" hidden gap-5 lg:flex lg:flex-row md:flex md:flex-row ">
        <BoxPhotoInPosition
          imgSrc={BoxesDate[0].imgSrc}
          h3Text={BoxesDate[0].h3Text}
          pText={BoxesDate[0].pText}
        />
        <BoxPhotoInPosition
          imgSrc={BoxesDate[1].imgSrc}
          h3Text={BoxesDate[1].h3Text}
          pText={BoxesDate[1].pText}
        />

        <BoxPhotoInPosition
          imgSrc={BoxesDate[2].imgSrc}
          h3Text={BoxesDate[2].h3Text}
          pText={BoxesDate[2].pText}
        />
      </div>
      <div className="lg:hidden md:hidden m-[2%]">
        <BoxPhotoInPosition
          imgSrc={BoxesDate[index].imgSrc}
          h3Text={BoxesDate[index].h3Text}
          pText={BoxesDate[index].pText}
        />
      </div>
      <div className="flex flex-row items-center justify-between   w-full md:hidden">
        <span className="font-bold text-[18px]">8 More Awards</span>
        <div className="flex gap-5 mt-4">
          <button onClick={backArrowOnClickHandler}>
            <img
              src="/assets/leftArrow.png"
              alt="Back-Arrow"
              className="w-14"
            />
          </button>
          <button onClick={nextArrowOnClickHandler}>
            <img
              src="/assets/rightArrow.png"
              alt="Next-Arrow"
              className="w-14"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurAchievements;

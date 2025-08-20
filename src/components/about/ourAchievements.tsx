import React, { useState } from "react";
import SubContainer from "../common/SubContainer";
import BoxPhotoInPosition from "../common/BoxPhotoInPosition";
import { GiNetworkBars } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";

const BoxesData = [
  {
    icon: GiPieChart,
    h3Text: "Outstanding Early Childhood Education Awar",
    pText:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icon: GiNetworkBars,
    h3Text: "Innovative STEAM Education Award",
    pText:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    icon: MdElectricBolt,
    h3Text: "Outstanding Early Childhood Education Award",
    pText:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
];

function OurAchievements() {
  const [index, setIndex] = useState(0);
  const [indexBox1, seindexBox1] = useState(0);
  const [indexBox2, seindexBox2] = useState(1);
  const [indexBox3, seindexBox3] = useState(2);

  const backArrowOnClickHandler = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : BoxesData.length - 1));
    seindexBox1((prev) => (prev > 0 ? prev - 1 : BoxesData.length - 1));
    seindexBox2((prev) => (prev > 0 ? prev - 1 : BoxesData.length - 1));
    seindexBox3((prev) => (prev > 0 ? prev - 1 : BoxesData.length - 1));
  };

  const nextArrowOnClickHandler = () => {
    setIndex((prev) => (prev < BoxesData.length - 1 ? prev + 1 : 0));
    seindexBox1((prev) => (prev < BoxesData.length - 1 ? prev + 1 : 0));
    seindexBox2((prev) => (prev < BoxesData.length - 1 ? prev + 1 : 0));
    seindexBox3((prev) => (prev < BoxesData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center">
      <SubContainer
        btnText="Our Achievements"
        h2Text="Our Awards and Recognitions"
        pText="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <div className="hidden gap-5 md:flex md:flex-row xl:mx-5 md:mx-0 ">
        <BoxPhotoInPosition
          boxes={[
            BoxesData[indexBox1],
            BoxesData[indexBox2],
            BoxesData[indexBox3],
          ]}
        />
      </div>
      <div className="  md:hidden ">
        <BoxPhotoInPosition boxes={[BoxesData[index]]} />
      </div>
      <div className="our-achievements flex flex-row items-center justify-between w-full ">
        <span className="font-bold text-[18px]">8 More Awards</span>
        <div className="flex gap-5 mt-4 mr-4">
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

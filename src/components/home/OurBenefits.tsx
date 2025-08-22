import React from "react";
import BoxPhotoInPosition from "../common/BoxPhotoInPosition";
import SubContainer from "../common/SubContainer";
import { GiNetworkBars } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";

function OurBenefits() {
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
  return (
    <section>
      <SubContainer
        btnText="Children Deserve Bright Future"
        h2Text="Our Benefits"
        pText="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <div className="flex flex-col md:flex-row items-stretch w-full gap-5 md:gap-10 mt-10 px-5">
        <BoxPhotoInPosition boxes={BoxesData} />
      </div>
    </section>
  );
}

export default OurBenefits;

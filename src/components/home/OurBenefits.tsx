import BoxPhotoInPosition from "../common/BoxPhotoInPosition";
import SubContainer from "../common/SubContainer";
import { GiNetworkBars } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";

function OurBenefits() {
  const BoxesData = [
    {
      icon: GiPieChart,
      h3Text: "Holistic Learning Approach",
      pText:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      icon: GiNetworkBars,
      h3Text: "Experienced Educators",
      pText:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      icon: MdElectricBolt,
      h3Text: "Nurturing Environment",
      pText:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      icon: MdElectricBolt,
      h3Text: "Play-Based Learning",
      pText:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      icon: MdElectricBolt,
      h3Text: "Individualized Attention",
      pText:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      icon: MdElectricBolt,
      h3Text: "Parent Involvement",
      pText:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ];
  return (
    <section>
      <SubContainer
        btnText="Children Deserve Bright Future"
        h2Text="Our Benefits"
        pText="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
        <BoxPhotoInPosition boxes={BoxesData} />
      </div>
    </section>
  );
}

export default OurBenefits;

import React from "react";
import SubContainer from "../common/SubContainer";
import BoxPhotoInPosition from "../common/BoxPhotoInPosition";
import { IoBook } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { HiPuzzle } from "react-icons/hi";
import { HiPaintBrush } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

const SpecialData = [
  {
    icon: IoBook,
    h3Text: "Thematic Learning",
    pText:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: FaChartSimple,
    h3Text: "STEAM Education",
    pText:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    icon: HiPuzzle,
    h3Text: "Language Immersion",
    pText:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    icon: HiPaintBrush,
    h3Text: "Art and Creativity",
    pText:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    icon: HiMiniSun,
    h3Text: "Outdoor Education",
    pText:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    icon: FaStar,
    h3Text: "Play-Based Learning",
    pText:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

function SpecialFuture() {
  return (
    <div>
      <SubContainer
        btnText={"Our Features"}
        h2Text={"Our Special Features"}
        pText={
          "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        }
      />
      <div className="w-full h-full flex items-center justify-center">
        <div className="  lg:w-[90%] md:w-full h-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5">
          <BoxPhotoInPosition boxes={SpecialData} />
        </div>
      </div>
    </div>
  );
}

export default SpecialFuture;

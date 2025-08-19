import React from "react";
import SubContainer from "../common/SubContainer";
import Slearn1 from "../../../assets/Slearn1.png";
import Slearn2 from "../../../assets/Slearn2.png";
import Slearn3 from "../../../assets/Slearn3.png";
import Slearn4 from "../../../assets/Slearn4.png";

import Slearn5 from "../../../assets/Slearn5.png";
import Slearn6 from "../../../assets/Slearn6.png";

function StudentsLearn() {
  const StudentsDataCards = [
    {
      img: Slearn1,
      Title: "Language Arts",
      SubTitle: "Reading, writing, storytelling, and communication skills.",
    },
    {
      img: Slearn2,
      Title: "Mathematics",
      SubTitle: "Number sense, basic operations, problem-solving, and logic.",
    },
    {
      img: Slearn3,
      Title: "Science",
      SubTitle:
        "Exploring the natural world through hands-on experiments and investigations.",
    },
    {
      img: Slearn4,
      Title: "Social Studies",
      SubTitle:
        "Cultivating an understanding of diverse cultures and communities.",
    },
    {
      img: Slearn5,
      Title: "Arts and Crafts",
      SubTitle: "Encouraging creativity through various art forms and crafts.",
    },
    {
      img: Slearn6,
      Title: "Physical Education",
      SubTitle: "Promoting physical fitness, coordination, and teamwork.",
    },
  ];
  return (
    <div>
      <SubContainer
        btnText={"Our Features"}
        h2Text={"What Students Learn"}
        pText={
          "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        }
      />

      <div className="w-full h-full flex items-center justify-center ">
        <div className=" mb-100  w-[85%] h-full  flex flex-row items-center justify-center flex-wrap gap-10 ">
          {StudentsDataCards.map((student) => {
            return (
              <div
                key={student.Title}
                className=" max-[420px]:h-95 max-[513px]:h-90 max-[513px]:w-80  relative  border-1  border-black  w-100 h-120 bg-white rounded-xl [box-shadow:7px_7px_0_black] "
              >
                <div className="items-center  max-[513px]:h-[60%]   bg-[#FFEFE5] z-1 absolute border-1 border-black w-25 h-[65%] top-0 left-1/2 transform -translate-x-1/2  rounded-bl-xl rounded-br-xl"></div>
                <img
                  className="z-2 absolute max-[513px]:w-[80%]  w-[85%] top-7 left-1/2 transform -translate-x-1/2 border-1 border-black  rounded-xl"
                  src={student.img}
                  alt=""
                />
                <div className=" max-[420px]:bottom-5 z-3 absolute  bottom-0 text-center left-1/2 transform -translate-x-1/2 w-3/4 h-35 max-[513px]:h-30  ">
                  <h3 className="text-xl font-bold">{student.Title}</h3>
                  <p className="font-semibold text-l"> {student.SubTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentsLearn;

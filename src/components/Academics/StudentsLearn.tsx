import React from "react";
import SubContainer from "../common/SubContainer";
import Slearn1 from "../../../assets/Slearn1.png";
import Slearn2 from "../../../assets/Slearn2.png";
import Slearn3 from "../../../assets/Slearn3.png";
import Slearn4 from "../../../assets/Slearn4.png";

import Slearn5 from "../../../assets/Slearn5.png";
import Slearn6 from "../../../assets/Slearn6.png";
import AcadmicCards from "../common/AcadmicCards";

const studentsData = [
  {
    img: Slearn1,
    Title: "Language Arts",
    SubTitle: "Reading, writing, storytelling, and communication skills.",
    line: "column",
  },
  {
    img: Slearn2,
    Title: "Mathematics",
    SubTitle: "Number sense, basic operations, problem-solving, and logic.",
    line: "column",
  },
  {
    img: Slearn3,
    Title: "Science",
    SubTitle:
      "Exploring the natural world through hands-on experiments and investigations.",
    line: "column",
  },
  {
    img: Slearn4,
    Title: "Social Studies",
    SubTitle:
      "Cultivating an understanding of diverse cultures and communities.",
    line: "column",
  },
  {
    img: Slearn5,
    Title: "Arts and Crafts",
    SubTitle: "Encouraging creativity through various art forms and crafts.",
    line: "column",
  },
  {
    img: Slearn6,
    Title: "Physical Education",
    SubTitle: "Promoting physical fitness, coordination, and teamwork.",
    line: "column",
  },
  
];

function StudentsLearn() {
  return (
    <div>
      <SubContainer
        btnText={"Our Features"}
        h2Text={"What Students Learn"}
        pText={
          "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        }
      />
      <AcadmicCards students={studentsData} />
    </div>
  );
}

export default StudentsLearn;

import React from "react";
import StudentsLearn from "../components/Academics/StudentsLearn";
import HeroAcademics from "../components/Academics/HeroAcademics";
import SpecialFuture from "../components/Academics/SpecialFuture";

function Academics() {
  return (
    <div className="container px-3 mx-auto">
      <HeroAcademics />
      <SpecialFuture/>
      <StudentsLearn />
    </div>
  );
}

export default Academics;

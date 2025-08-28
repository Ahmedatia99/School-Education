import StudentsLearn from "../components/Academics/StudentsLearn";
import HeroAcademics from "../components/Academics/HeroAcademics";
import SpecialFuture from "../components/Academics/SpecialFuture";
import RoomGallery from "../components/Academics/RoomGallery";

function Academics() {
  return (
    <div className="container px-3 mx-auto">
      <HeroAcademics />
      <SpecialFuture />
      <StudentsLearn />
      <RoomGallery />
    </div>
  );
}

export default Academics;

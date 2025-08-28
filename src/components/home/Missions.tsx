import SubContainer from "./../common/SubContainer";
import MissionCard from "./MissionCard";
function Missions() {
  return (
    <section className="container mx-auto px-4">
      <SubContainer
        h2Text={"Navigate through our Pages"}
        pText={
          "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school."
        }
        btnText="Explore More"
      />

      <MissionCard />
    </section>
  );
}

export default Missions;

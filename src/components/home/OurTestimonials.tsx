import SubContainer from "./../common/SubContainer";
import OurTestimonialsCard from "./OurTestimonialsCard";
function OurTestimonials() {
  const data = [
    {
      name: "Jennifer B",
      rate: 5,
      info: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
      img: "/images/person-1.png",
    },
    {
      img: "/images/person-2.png",
      name: "John D",
      rate: 4,
      info: "My son has shown remarkable growth since joining Little Learners Academy. The teachers are dedicated and truly care about the children's development.",
    },
    {
      img: "/images/person-3.png",
      name: "Emily R",
      rate: 5,
      info: "The curriculum at Little Learners Academy is both fun and educational. My daughter loves her teachers and has made so many friends!",
    },
    {
      img: "/images/person-3.png",
      name: "Emily R",
      rate: 5,
      info: "The curriculum at Little Learners Academy is both fun and educational. My daughter loves her teachers and has made so many friends!",
    },
    {
      img: "/images/person-3.png",
      name: "Emily R",
      rate: 5,
      info: "The curriculum at Little Learners Academy is both fun and educational. My daughter loves her teachers and has made so many friends!",
    },
    {
      img: "/images/person-3.png",
      name: "Emily R",
      rate: 5,
      info: "The curriculum at Little Learners Academy is both fun and educational. My daughter loves her teachers and has made so many friends!",
    },
  ];

  return (
    <section className=" container mx-auto  py-12 bg-light">
      <SubContainer
        btnText="Their Happy Words 🤗"
        h2Text="Our Testimonials"
        pText="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <div className="px-3">
        <OurTestimonialsCard data={data} />
      </div>
    </section>
  );
}

export default OurTestimonials;

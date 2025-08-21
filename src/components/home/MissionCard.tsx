import React from "react";
import SectionDivider from "./../common/SctionDivider";
import { FaArrowRightLong } from "react-icons/fa6";

function MissionCard() {
  const cards = [
    {
      id: 1,
      title: "Academics",
      description:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    },
    {
      id: 2,
      title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    },
    {
      id: 3,
      title: "Student Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    },
    {
      id: 4,
      title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto pb-20 ">
      {cards.map((item) => (
        <div
          key={item.id}
          className="p-10 flex flex-col items-center border-4 border-dark bg-light shadow-[6px_6px_0px_rgba(0,0,0,1)] max-w-md w-full"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-semibold text-dark">{item.title}</h3>
            <SectionDivider type="lines" />
            <p className="text-sm text-gray-700 text-center">
              {item.description}
            </p>
          </div>
          <button className="cursor-pointer mt-20 px-4 py-2 border-2 w-full border-dark bg-mini shadow-[5px_5px_0px_rgba(0,0,0,1)] rounded-lg font-semibold">
            Learn More <FaArrowRightLong className="inline" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default MissionCard;

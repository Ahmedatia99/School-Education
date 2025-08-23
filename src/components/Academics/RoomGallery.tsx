import { useState } from "react";
import SubContainer from "../common/SubContainer";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

type Card = {
  id: number;
  category: string;
  title: string;
  suTitle: string;
  image: string[]; // array of images
};

const data: Card[] = [
  {
    id: 1,
    category: "Classrooms",
    title: "Modern Classroom",
    suTitle:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    image: [
      "/assets/gallery1.png",
      "/assets/gallery2.png",
      "/assets/gallery3.png",
      "/assets/gallery4.png",
    ],
  },
  {
    id: 2,
    category: "Library",
    title: "Library Room",
    suTitle:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    image: [
      "/assets/gallery5.png",
      "/assets/gallery6.png",
      "/assets/gallery7.png",
      "/assets/gallery8.png",
    ],
  },
  {
    id: 3,
    category: "Science Lab",
    title: "Science Lab",
    suTitle:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    image: [
      "/assets/gallery9.png",
      "/assets/gallery10.png",
      "/assets/gallery11.png",
      "/assets/gallery12.png",
    ],
  },
  {
    id: 4,
    category: "Computer Lab",
    title: "Computer Lab",
    suTitle:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    image: [
      "/assets/gallery13.png",
      "/assets/gallery14.png",
      "/assets/gallery15.png",
      "/assets/gallery16.png",
    ],
  },
  {
    id: 5,
    category: "Garden and Nature Area",
    title: "Nature Garden",
    suTitle:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    image: [
      "/assets/gallery17.png",
      "/assets/gallery18.png",
      "/assets/gallery19.png",
      "/assets/gallery20.png",
    ],
  },
];

export default function RoomGallery() {
  const [filter, setFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState<{ [key: number]: number }>(
    {}
  );
  const filteredData =
    filter === "All" ? data : data.filter((item) => item.category === filter);

  const categories = [
    "All",
    "Classrooms",
    "Library",
    "Science Lab",
    "Computer Lab",
    "Garden and Nature Area",
  ];
  const handlePrev = (id: number, length: number) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : length - 1,
    }));
  };

  const handleNext = (id: number, length: number) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: prev[id] < length - 1 ? prev[id] + 1 : 0,
    }));
  };
  return (
    <div className="">
      <SubContainer
        btnText={"Our Gallery"}
        h2Text={"Our Rooms Gallery"}
        pText={
          "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        }
      />

      <div className="  ">
        {/* Buttons */}
        {/* Filters row (Horizontal scroll) */}
        {/* Filters row */}
        {/* Buttons with scroll */}
        <div className="  overflow-x-auto scrollbar-hide sm:overflow-x-visible mb-[100px]">
          <div className="flex flex-nowrap gap-3 w-[80%]  sm:w-full sm:flex-wrap md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`shrink-0 px-4 py-2 border-2 rounded-lg font-semibold transition
        ${
          filter === cat
            ? "bg-[#FFEFE5] text-black"
            : "bg-white hover:bg-gray-100"
        }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards */}

        <div className="w-full justify-center items-center flex mb-10">
          <div className=" w-[90%]  flex flex-col gap-10  ">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className=" relative flex flex-col mt-[180px]  box-shadow  items-center  w-full h-full border-2  bg-white  rounded-xl   transition  "
              >
                {/* images grid inside card */}
                <div className=" w-[90%]  absolute  transform -translate-y-1/2">
                  {/* Desktop Grid */}
                  <div className="hidden sm:grid grid-cols-4 justify-center gap-6 w-full  ">
                    {item.image.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${item.title} ${i}`}
                        className="w-[100%] h-full object-cover rounded-xl hover:scale-105 transition border-1 "
                      />
                    ))}
                  </div>

                  {/* Mobile */}
                  <div className="sm:hidden relative w-[full] h-full flex justify-center">
                    <img
                      src={item.image[currentIndex[item.id] ?? 0]}
                      alt={item.title}
                      className="w-[100%] h-full object-cover rounded-2xl  border-1"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="py-7 w-[90%]   pt-4 max-[768px]:pt-[100px] max-[640px]:pt-[220px]  max-[450px]:pt-[150px]  md:pt-[100px] lg:pt-[170px]">
                  <div className="flex justify-between md:items-start lg:items-start items-center  lg:flex-row  md:flex-row flex-col-reverse sm:flex-col-reverse gap-3">
                    <h3 className="font-bold text-xl pt-6">{item.title}</h3>
                    <div className="flex justify-center mt-3  gap-3 ">
                      <button
                        onClick={() => handlePrev(item.id, item.image.length)}
                        className="p-4  bg-white rounded-lg border-2 hover:bg-amber-400 transition duration-300 cursor-pointer"
                      >
                        <FaArrowLeft size={24} className="text-black" />{" "}
                      </button>
                      <button
                        onClick={() => handleNext(item.id, item.image.length)}
                        className="p-4  bg-white rounded-lg border-2 hover:bg-amber-400 transition duration-300 cursor-pointer"
                      >
                        <FaArrowRight size={24} className="text-black" />{" "}
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold md:text-start lg:text-start text-center py-6">
                    {item.suTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

type BoxPhotoInPositionProps = {
  data: {
    img: string;
    name: string;
    rate: number;
    info: string;
  }[];
  children?: React.ReactNode;
};
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      
    },
  ],
};

function OurTestimonialsCard({
  data,
  containerClassName = "",
}: BoxPhotoInPositionProps) {
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div className="px-2" key={index}>
          <div
            className={`!h-96 flex flex-col items-center gap-5 p-8  border-[3px] rounded-xs w-full shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white ${containerClassName}`}
          >
            <img
              src={item.img}
              alt={item.name}
              className={`w-16 h-16 rounded-full border-[3px] bg-light `}
            />
            <h3 className="font-bold text-lg text-center">{item.name}</h3>
            <div className={`flex items-center gap-2`}>
              {Array.from({ length: item.rate }, (_, i) => (
                <span key={i} className="text-yellow-500">
                  <FaStar />
                </span>
              ))}
            </div>
            <p className={`text-center text-gray-600 max-w-xs`}>{item.info}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default OurTestimonialsCard;

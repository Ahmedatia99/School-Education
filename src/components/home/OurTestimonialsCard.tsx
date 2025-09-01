import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { FaStar } from "react-icons/fa";

type BoxPhotoInPositionProps = {
  data: {
    img: string;
    name: string;
    rate: number;
    info: string;
  }[];
};

function OurTestimonialsCard({ data }: BoxPhotoInPositionProps) {
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={pagination}
      breakpoints={{
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="!h-96 flex flex-col items-center gap-5 p-8 border-[3px] rounded-md w-full shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white">
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full border-[3px] bg-light"
            />
            <h3 className="font-bold text-lg text-center">{item.name}</h3>
            <div className="flex items-center gap-2">
              {Array.from({ length: item.rate }, (_, i) => (
                <span key={i} className="text-yellow-500">
                  <FaStar />
                </span>
              ))}
            </div>
            <p className="text-center text-gray-600 max-w-xs">{item.info}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default OurTestimonialsCard;

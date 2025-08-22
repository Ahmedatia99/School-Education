import { FaStar } from "react-icons/fa";

type BoxPhotoInPositionProps = {
  data: {
    img: string;
    name: string;
    rate: number;
    info: string;
  }[];
  children?: React.ReactNode;
};
function OurTestimonialsCard({
  data,
  containerClassName = "",
}: BoxPhotoInPositionProps) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-5 p-12  border-2 rounded-2xl w-full shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white ${containerClassName}`}
        >
          <img
            src={item.img}
            alt={item.name}
            className={`w-16 h-16 rounded-full border-2 bg-light `}
          />
          <h3 className="font-bold text-lg text-center">
            {item.name}
          </h3>
          <div className={`flex items-center gap-2`}>
            {Array.from({ length: item.rate }, (_, i) => (
              <span key={i} className="text-yellow-500">
                <FaStar />
              </span>
            ))}
          </div>
          <p className={`text-center text-gray-600 max-w-xs`}>{item.info}</p>
        </div>
      ))}
    </>
  );
}

export default OurTestimonialsCard;

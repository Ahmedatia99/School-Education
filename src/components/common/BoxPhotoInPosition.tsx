import React from "react";
type BoxPhotoInPositionProps = {
  imgSrc: string;
  h3Text: string;
  pText: string;
};
function BoxPhotoInPosition({
  imgSrc,
  h3Text,
  pText,
}: BoxPhotoInPositionProps) {
  return (
    <div className="relative flex flex-col items-start gap-5 p-8 pt-10 border-2 rounded-2xl [box-shadow:5px_5px_0_black] m-[5%]">
      <img
        src={imgSrc}
        alt=""
        className="absolute top-0 left-5 w-15 rounded-lg -translate-y-1/2"
      />
      <h3 className="font-bold text-[22px] text-center text-start w-[90%]">
        {h3Text}
      </h3>
      <p className="">{pText}</p>
    </div>
  );
}

export default BoxPhotoInPosition;

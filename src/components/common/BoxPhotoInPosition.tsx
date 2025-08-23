import React from "react";
import type { IconType } from "react-icons";

type BoxObject = { pText: string; h3Text: string; icon: IconType };

type BoxPhotoInPositionPraams = { boxes: BoxObject[] };

function BoxPhotoInPosition({ boxes }: BoxPhotoInPositionPraams) {
  return (
    <>
      {boxes.map((box, index) => (
        <div
          key={index}
          className="achievement-box relative  flex flex-col items-start gap-5 p-2 sm:p-8 pt-10 mt-[30px]  border-2 rounded-2xl w-full [box-shadow:5px_5px_0_black] bg-white"
        >
          <div>
            <box.icon
              className="icon absolute top-0 left-5 rounded-lg -translate-y-1/2 p-4 w-16 h-16 border-3 "
              style={{ backgroundColor: "#FFDECC" }}
            />
          </div>

          <h3 className=" font-semibold sm:text-[22px] text-center  sm:w-[90%]">
            {box.h3Text}
          </h3>
          <p className="font-medium">{box.pText}</p>
        </div>
      ))}
    </>
  );
}

export default BoxPhotoInPosition;

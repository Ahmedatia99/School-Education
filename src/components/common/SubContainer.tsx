import React from "react";
type SubContainerParams = {
  btnText: string;
  h2Text: string;
  pText: string;
};

function SubContainer({ btnText, h2Text, pText }: SubContainerParams) {
  return (
    <div className="  flex flex-col items-center mb-15 mt-25">
      <button className="border-3 rounded-md p-2 px-3 font-medium text-[16px] bg-white btn-hover ">
        {btnText}
      </button>
      <h2 className="font-bold text-[38px] text- text-center mt-3">{h2Text}</h2>
      <p className="font-normal text-center text-sm max-w-xs lg:max-w-xl">{pText}</p>
    </div>
  );
}

export default SubContainer;

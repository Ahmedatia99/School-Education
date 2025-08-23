import React from "react";
type SubContainerParams = {
  btnText: string;
  h2Text: string;
  pText: string;
};

function SubContainer({ btnText, h2Text, pText }: SubContainerParams) {
  return (
    <div className=" sub-container flex flex-col items-center mb-15 mt-25 gap-2 ">
      <button className="border-3 rounded-md p-2 px-3 font-  text-[16px] bg-white btn-hover ">
        {btnText}
      </button>
      <h2 className="font-semibold text-xl  sm:text-[38px]  text-center mt-3">
        {h2Text}
      </h2>
      <p className="font-medium text-center text-[16px] w-[80%]">{pText}</p>

    </div>
  );
}

export default SubContainer;

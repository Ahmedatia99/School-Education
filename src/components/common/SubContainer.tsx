import React from "react";
type SubContainerParams = {
  btnText: string;
  h2Text: string;
  pText: string;
};
function SubContainer({ btnText, h2Text, pText }: SubContainerParams) {
  return (
    <div className="  flex flex-col items-center  ">
      <button className="border-3 rounded-md p-2 px-3 font-medium text-[16px]">
        {btnText}
      </button>
      <h2 className="font-bold text-[38px] text- text-center">{h2Text}</h2>
      <p className="font-medium text-center text-[16px] w-[80%]">{pText}</p>
    </div>
  );
}

export default SubContainer;

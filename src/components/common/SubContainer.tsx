type SubContainerParams = {
  btnText: string;
  h2Text: string;
  pText: string;
};

function SubContainer({ btnText, h2Text, pText }: SubContainerParams) {
  return (
    <div className=" sub-container flex flex-col items-center mb-15 mt-25 gap-2 ">
      <button className="border-3 rounded-xs p-2 px-3 font-medium  text-[16px] bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)]">
        {btnText}
      </button>
      <h2 className="font-bold capitalize text-sm  lg:text-5xl  text-center mt-3">
        {h2Text}
      </h2>
      <p className="font-medium text-dark text-center text-xs md:text-base max-w-4xl">
        {pText}
      </p>
    </div>
  );
}

export default SubContainer;

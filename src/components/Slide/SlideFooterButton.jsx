import React from "react";

const SlideFooterButton = ({ isLastSlide, slideNo }) => {
  return (
    <div className="slide-footer">
      <button className="absolute bottom-5 left-10 text-gray-500 font-Ralewy">
        {"<"} Back
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 py-1 slide-dots flex flex-row justify-around items-center  ">
        <div className="w-4 h-2 mx-2 bg-gray-500 rounded-full "></div>
        <div className="w-2 h-2 mx-2 bg-gray-500 rounded-full "></div>
        <div className="w-2 h-2 mx-2 bg-gray-500 rounded-full "></div>
        <div className="w-2 h-2 mx-2 bg-gray-500 rounded-full "></div>
      </div>
      <button className=" absolute bottom-5 right-10 bg-gray-700 rounded-md px-3 py-1 text-gray-100 hover:bg-gray-800 hover:text-gray-200  transition ease-in-out duration-100 shadow-sm">
        Next
      </button>
    </div>
  );
};

export default SlideFooterButton;

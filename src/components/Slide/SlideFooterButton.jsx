import React, { useContext } from "react";
import { ConnectContext } from "../../context/ConnectContext";

const SlideFooterButton = ({ isLastSlide, slideNo }) => {
  const { handleNextSlide, handleBackSlide } = useContext(ConnectContext);
  return (
    <div className="slide-footer">
      {slideNo > 1 && (
        <button
          className="absolute bottom-5 left-10 text-gray-500 font-Ralewy"
          onClick={handleBackSlide}
        >
          {"<"} Back
        </button>
      )}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 py-1 slide-dots flex flex-row justify-around items-center  ">
        <div
          className={` h-2 mx-2 bg-gray-500 rounded-full ${
            slideNo === 1 ? "w-4" : "w-2"
          } `}
        ></div>
        <div
          className={` h-2 mx-2 bg-gray-500 rounded-full ${
            slideNo === 2 ? "w-4" : "w-2"
          } `}
        ></div>
        <div
          className={` h-2 mx-2 bg-gray-500 rounded-full ${
            slideNo === 3 ? "w-4" : "w-2"
          } `}
        ></div>
        <div
          className={` h-2 mx-2 bg-gray-500 rounded-full ${
            slideNo === 4 ? "w-4" : "w-2"
          } `}
        ></div>
      </div>
      {!isLastSlide ? (
        <button
          className=" absolute bottom-5 right-10 bg-gray-700 rounded-md  px-3 py-1 text-gray-100 hover:bg-gray-800 hover:text-gray-200  transition ease-in-out duration-100 shadow-sm"
          onClick={handleNextSlide}
        >
          Next
        </button>
      ) : (
        <button className=" absolute bottom-5  right-10 bg-gray-700 rounded-md  px-3 py-1 text-gray-100 hover:bg-gray-800 hover:text-gray-200  transition ease-in-out duration-100 shadow-sm">
          Done
        </button>
      )}
    </div>
  );
};

export default SlideFooterButton;

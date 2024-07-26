import React from "react";
import ProgressBar from "../ProgressBar";

const SlideHeader = ({ Header, slideNo, totalSlide }) => {
  return (
    <>
      <div className="slide-header mb-5 font-Raleway font-semibold text-xl text-gray-500 w-full">
        <p>{Header}</p>
        <ProgressBar targetProgress={(slideNo / totalSlide) * 100} />
      </div>
    </>
  );
};

export default SlideHeader;

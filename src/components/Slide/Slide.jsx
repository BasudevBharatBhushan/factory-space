import React from "react";
import ProgressBar from "../../components/ProgressBar";
import SlideHeader from "./SlideHeader";
import SlideQuestioner from "./SlideQuestioner";
import { useNavigate } from "react-router-dom";
import SlideFooterButton from "./SlideFooterButton";

const Slide = ({
  Header = "Factory Space AI",
  slideQuestions,
  slideNo,
  totalSlide,
  isLastSlide,
}) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <div className="relative   w-full h-full xl:w-[60vw] xl:h-auto xl:min-h-[80vh] px-[2vw] pt-[6vh] pb-[3vh] bg-white rounded-none xl:rounded-xl flex flex-col justify-between lg:justify-start xl:justify-between items-start overflow-y-visible overflow-x-visible">
      {slideNo != 100 ? (
        <>
          {" "}
          <SlideHeader
            Header={Header}
            slideNo={slideNo}
            totalSlide={totalSlide}
          />
          {/* <ProgressBar targetProgress={(slideNo / totalSlide) * 100} /> */}
          <SlideQuestioner slideQuestions={slideQuestions} />
          <SlideFooterButton isLastSlide={isLastSlide} slideNo={slideNo} />
        </>
      ) : (
        <>
          <SlideHeader Header={Header} slideNo={slideNo} totalSlide={0} />

          <div className="flex flex-row justify-center items-center w-full h-full">
            <p className="font-semibold text-gray-600 font-Raleway text-xs lg:text-xl text-center">
              Thank you for expressing your interest in{" "}
              <span className="">Factory Space AI</span>
              <br />
              <span className="text-xs lg:text-base font-medium ">
                We sincerely appreciate your time and will reach out to you
                shortly.
              </span>
            </p>
          </div>

          <div className="w-full flex flex-row justify-center">
            <button
              className="px-3 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-gray-100 hover:text-gray-200"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          </div>
          <div></div>
        </>
      )}
    </div>
    // <div className="relative   w-full h-full xl:w-[60vw] xl:h-auto xl:min-h-[80vh] px-[2vw] pt-[6vh] pb-[3vh] bg-white rounded-none xl:rounded-xl flex flex-col justify-between lg:justify-start xl:justify-between items-start overflow-y-visible overflow-x-visible">

    // </div>
  );
};

export default Slide;

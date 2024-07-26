import React from "react";
import ProgressBar from "../../components/ProgressBar";
import SlideHeader from "./SlideHeader";
import SlideQuestioner from "./SlideQuestioner";
import SlideFooterButton from "./SlideFooterButton";

const Slide = ({
  Header = "Factory Space AI",
  slideQuestions,
  slideNo,
  totalSlide,
  isLastSlide,
}) => {
  return (
    <div className="relative   w-full h-full xl:w-[60vw] xl:h-auto xl:min-h-[80vh] px-[2vw] pt-[6vh] pb-[3vh] bg-white rounded-none xl:rounded-xl flex flex-col justify-between lg:justify-start xl:justify-between items-start overflow-y-visible overflow-x-visible">
      <SlideHeader Header={Header} slideNo={slideNo} totalSlide={totalSlide} />

      {/* <ProgressBar targetProgress={(slideNo / totalSlide) * 100} /> */}

      <SlideQuestioner slideQuestions={slideQuestions} />

      <SlideFooterButton isLastSlide={isLastSlide} slideNo={slideNo} />
    </div>
  );
};

export default Slide;

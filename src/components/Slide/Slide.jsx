import React from "react";
import ProgressBar from "../../components/ProgressBar";
import SlideHeader from "./SlideHeader";
import SlideQuestioner from "./SlideQuestioner";
import SlideFooterButton from "./SlideFooterButton";

const Slide = ({
  Header = "Factory Space AI",
  Questions,
  SlideNo,
  TotalSlide,
  isLastSlide,
}) => {
  const slideQuestions = [
    {
      id: 1,
      question: "Let's get started. Which of these best describe you?",
      description: "We'll help you set up based on your business needs.",
      type: "feedback",
      options: ["Manufacturer", "Trader", "Customer", "Other"],
    },
  ];

  return (
    <div>
      {" "}
      <div className="relative w-full h-full xl:w-[50vw] xl:h-[80vh] px-[2vw] py-[4vh] bg-white rounded-xl ">
        <SlideHeader Header={Header} />

        <ProgressBar targetProgress={50} />

        <SlideQuestioner slideQuestions={slideQuestions} />

        <SlideFooterButton isLastSlide={isLastSlide} SlideNo={SlideNo} />
      </div>
    </div>
  );
};

export default Slide;

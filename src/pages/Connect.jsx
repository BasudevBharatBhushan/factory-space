import React, { useState, useContext } from "react";
import Slide from "../components/Slide/Slide";
import { ManufacturerSlides, TraderSlides } from "../constants";
import { ConnectContext } from "../context/ConnectContext";

const Connect = () => {
  const { activeSlide, setActiveSlide, userType, setUserType } =
    useContext(ConnectContext);
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-purple-900 via-teal-800 to-purple-900 flex justify-center items-center overflow-x-visible overflow-y-visible">
      <>
        {activeSlide !== 100 ? (
          <Slide
            slideQuestions={
              userType === "Manufacturer"
                ? ManufacturerSlides[activeSlide].Questioner
                : TraderSlides[activeSlide].Questioner
            }
            slideNo={
              userType === "Manufacturer"
                ? ManufacturerSlides[activeSlide].SlideNo
                : TraderSlides[activeSlide].SlideNo
            }
            totalSlide={
              userType === "Manufacturer"
                ? ManufacturerSlides.length
                : TraderSlides.length
            }
            isLastSlide={
              userType === "Manufacturer"
                ? activeSlide === ManufacturerSlides.length - 1
                : activeSlide === TraderSlides.length - 1
            }
          />
        ) : (
          <Slide slideNo={100} />
        )}
      </>
    </div>
  );
};

export default Connect;

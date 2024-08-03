import React, { useState, useContext } from "react";
import Slide from "../components/Slide/Slide";
import { ManufacturerSlides, TraderSlides, OperatorSlides } from "../constants";
import { ConnectContext } from "../context/ConnectContext";
import { isAdmin } from "../helper";

const Connect = () => {
  const { activeSlide, setActiveSlide, userType, setUserType } =
    useContext(ConnectContext);
  return (
    <div className="w-screen h-[100vh]  bg-gradient-to-br from-purple-900 via-teal-800 to-purple-900 flex justify-center items-center overflow-x-visible overflow-y-visible">
      <>
        {activeSlide !== 100 ? (
          <Slide
            slideQuestions={
              userType === "Manufacturer"
                ? ManufacturerSlides[activeSlide].Questioner
                : userType === "Trader"
                ? TraderSlides[activeSlide].Questioner
                : OperatorSlides[activeSlide].Questioner
            }
            slideNo={
              userType === "Manufacturer"
                ? ManufacturerSlides[activeSlide].SlideNo
                : userType === "Trader"
                ? TraderSlides[activeSlide].SlideNo
                : OperatorSlides[activeSlide].SlideNo
            }
            totalSlide={
              userType === "Manufacturer"
                ? ManufacturerSlides.length
                : userType === "Trader"
                ? TraderSlides.length
                : OperatorSlides.length
            }
            isLastSlide={
              userType === "Manufacturer"
                ? activeSlide === ManufacturerSlides.length - 1
                : userType === "Trader"
                ? activeSlide === TraderSlides.length - 1
                : activeSlide === OperatorSlides.length - 1
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

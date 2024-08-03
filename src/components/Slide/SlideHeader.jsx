import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectContext } from "../../context/ConnectContext";
import ProgressBar from "../ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SlideHeader = ({ Header, slideNo, totalSlide }) => {
  const navigate = useNavigate();
  const { setActiveSlide } = useContext(ConnectContext);
  return (
    <>
      <div className="slide-header mb-5 font-Raleway font-semibold text-xl text-gray-800 w-full">
        <div className="flex flex-row justify-between">
          <p className="italic font-bold font-Raleway">{Header}</p>
          <FontAwesomeIcon
            onClick={() => {
              navigate("/");
              localStorage.clear();
              setActiveSlide(0);
            }}
            className="text-gray-400 cursor-pointer"
            icon={faXmark}
          />
        </div>
        <ProgressBar targetProgress={(slideNo / totalSlide) * 100} />
      </div>
    </>
  );
};

export default SlideHeader;

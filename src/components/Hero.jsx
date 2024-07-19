import React, { useState, useRef, useEffect, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {} from "gsap/all";
import { Thumbnail1, heroVideo2 } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faLeaf,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../context/ModalContext";
import { companyName, companyTagline } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-anim", {
      ease: "slow(0.7,0.7,false)",
      opacity: 0,
      y: 40,
      x: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  useGSAP(() => {
    gsap.from(".video-thumbnail", {
      ease: "power1.inOut",
      opacity: 0,
      duration: 1,
      delay: 1,
      x: 30,
    });
  }, []);

  useGSAP(() => {
    gsap.from(".play-icon", {
      ease: "power1.inOut",
      opacity: 0,
      duration: 1,
      delay: 1.5,
    });
  }, []);

  const { showConnectModal, setShowConnectModal, handleButtonClick } =
    useContext(ModalContext);

  const [videoClicked, setVideoClicked] = useState(false);

  const companyname = companyName.split(" ");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowConnectModal(false);
      }
    };

    if (showConnectModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showConnectModal]);

  const redirectToForm = (designation) => {
    if (designation === "Manufacturer") {
      setShowConnectModal(false);
      window.open(
        "https://docs.google.com/forms/d/1XNfBLlGWpefx6qtpxDP8MhkKi3izf5fN5wVbtrBYiUE/viewform?edit_requested=true",
        "_blank"
      );
    } else {
      setShowConnectModal(false);
      window.open(
        "https://docs.google.com/forms/d/1aQblb-4cxttXKdypYIF09-hgY2V0tVrwWF3YKK5sLFM/edit",
        "_blank"
      );
    }
  };

  const YoutubeEmbed = () => (
    <div className=" w-[85vw] xl:w-[38vw] rounded-3xl">
      <iframe
        // width= 100%,
        // height="315"
        style={{ width: "100%", aspectRatio: "16 / 9" }}
        className="rounded-3xl"
        src="https://www.youtube.com/embed/cvBaj0gTQl8?si=Uvm8kQdRMFhE5RJ9&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );

  return (
    <section className="w-full nav-height bg-gray-100">
      <div className="relative">
        <video
          className="pointer-events-none w-full h-full object-cover  left-0 top-0"
          autoPlay
          muted
          playsInline={true}
          key={heroVideo2}
        >
          <source src={heroVideo2} />
        </video>
        {/* <div
          className={`z-10 w-full h-full text-black font-Raleway grid grid-rows-3 xl:grid-rows-none xl:grid-cols-2 xl:content-start justify-items-center xl:items-start xl:pt-20 ${
            showConnectModal ? "blur-lg" : ""
          }`}
        >
          <div className=" flex flex-col justify-center xl:justify-evenly items-center xl:items-start  xl:my-2">
            <div className="company-info font-semibold text-3xl lg:text-7xl xl:text-6xl my-4 text-center xl:text-left">
              <p className="hero-anim">{companyName}</p>
              <p className="hero-anim text-base lg:text-xl xl:text-lg  font-normal text-gray-400 my-4 text-center xl:text-left">
                {companyTagline}
              </p>
            </div>

            <div className="  action-btns transition duration-500  hover:scale-110 ">
              <a
                href="#"
                className="hero-anim inline-flex items-center px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-200   text-white hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 font-semibold rounded-full  transition-colors  duration-300 "
                onClick={handleButtonClick}
              >
                Join the Waitlist
                <span className="ml-2 ">→</span>
              </a>
            </div>
          </div>

          {videoClicked ? (
            <YoutubeEmbed />
          ) : (
            <div className=" intro-video  drop-shadow-xl row-span-2 xl:row-span-1 ">
              <div className="relative" onClick={() => setVideoClicked(true)}>
                <img
                  className="video-thumbnail w-[85vw] xl:w-[38vw] rounded-3xl "
                  src={Thumbnail1}
                  alt=""
                />
                <FontAwesomeIcon
                  className="play-icon cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  size="4x"
                  icon={faCirclePlay}
                  color="white"
                />
              </div>
            </div>
          )}
        </div> */}
      </div>

      {showConnectModal && (
        <div
          ref={modalRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <p className="my-10 text-center text-xl lg:text-3xl xl:text-4xl text-black font-semibold hidden sm:block">
            Please Choose Your Designation
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center w-[40vw] lg:w-[50vw] xl:w-[30vw]">
            <p className="my-10 text-center text-xl  text-black font-semibold sm:hidden">
              Please Choose Your Designation
            </p>
            <div
              className="flex flex-col items-center text-gray-800 hover:scale-110 transition ease-in-out my-10 sm:my-0"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon
                className="cursor-pointer mx-10"
                size="4x"
                icon={faUser}
                onClick={() => redirectToForm("Manufacturer")}
              />
              <p className="font-semibold">Manufacturer</p>
            </div>

            <div
              className="flex flex-col items-center text-gray-300 hover:scale-110 transition ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon
                className="cursor-pointer mx-10"
                size="4x"
                icon={faUser}
                onClick={() => redirectToForm("Trader")}
              />
              <p className="font-semibold">Trader</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

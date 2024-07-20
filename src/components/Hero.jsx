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
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../context/ModalContext";
import { companyName, companyTagline } from "../constants";
import Header from "./Header";
import Footer from "./Footer";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".yt-embed", {
      ease: "power1.inOut",
      opacity: 0,
      duration: 3,
      delay: 1,
      scale: 0.5,
    });
  }, []);

  const { showConnectModal, setShowConnectModal, handleButtonClick } =
    useContext(ModalContext);

  const [videoClicked, setVideoClicked] = useState(false);

  const companyname = companyName.split(" ");
  const modalRef = useRef(null);
  useEffect(() => {
    if (videoClicked) {
      gsap.from(".yt-embed", {
        ease: "power1.inOut",
        opacity: 0,
        duration: 1,
        scale: 0.9,
      });
    }
  }, [videoClicked]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowConnectModal(false);
        setVideoClicked(false);
        console.log("clicked outside");
      }
    };

    if (videoClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [videoClicked]);

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
    <div
      ref={modalRef}
      className="yt-embed w-[85vw] xl:w-[38vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl z-10 "
    >
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
    <>
      <section className="relative  w-full   h-[70vh] lg:h-[80vh] xl:h-[85vh] text-white font-Raleway flex justify-center items-start ">
        <Header />
        <video
          className={` pointer-events-none w-full h-full object-cover absolute left-0 top-0 brightness-50 ${
            videoClicked ? "blur-lg" : ""
          }`}
          autoPlay
          muted
          loop
          playsInline={true}
          key={heroVideo2}
        >
          <source src={heroVideo2} />
        </video>
        <div
          className={`grid grid-cols-1 xl:grid-cols-2  items-end justify-items-center xl:justify-items-start justify-center content-center lg:content-center xl:content-around  w-[80vw] h-full px-1 xl:px-[5vw] pb-[10vh] my-3 xl:my-[10vh] z-10 ${
            videoClicked ? "blur-lg" : ""
          }`}
        >
          {/* div 1 */}
          <div className=" my-auto lg:my-16 xl:my-auto">
            <div className=" flex flex-col justify-center xl:justify-evenly items-center xl:items-start  xl:my-2">
              <div className="company-info font-semibold text-4xl lg:text-7xl xl:text-6xl my-4 text-center xl:text-left">
                <p className="hero-anim">{companyName}</p>
                <p className="hero-anim text-base lg:text-xl xl:text-xl  font-normal  my-4 text-center xl:text-left">
                  {companyTagline}
                </p>
              </div>
            </div>
          </div>

          {/* div 2 */}
          <div className="row-span-1 xl:row-span-2 my-10 flex justify-end w-full z-10">
            <div
              className=" w-full xl:w-80 border border-white  rounded-full hover:bg-white text-white hover:text-black hover:scale-105 duration-500 transition "
              onClick={() => setVideoClicked(true)}
            >
              <div
                className=" w-full h-full rounded-full px-6 py-4 cursor-pointer font-Roboto "
                style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <div className=" w-full h-full  flex justify-center items-center ">
                  <FontAwesomeIcon
                    icon={faPlay}
                    color=""
                    size="sm"
                    className="mr-3 inline "
                  />
                  <p className=" ">Watch the Factory Space Story</p>
                </div>
              </div>
            </div>
          </div>

          {/* div 3 */}
          <div className=" w-full xl:w-auto my-10  z-10">
            <div className="  action-btns transition duration-500  hover:scale-105 font-roboto">
              <a
                href="#"
                className=" hero-anim w-full xl:w-auto text-center xl:text-left  inline-flex items-center px-6 py-4 bg-white hover:bg-transparent border border-white text-black hover:text-white font-semibold rounded-full  transition-colors  duration-300 "
                onClick={handleButtonClick}
              >
                <p className=" w-full xl:w-auto">
                  Join the Waitlist
                  <span className="ml-2 ">→</span>
                </p>
              </a>
            </div>
          </div>
        </div>
        {videoClicked && <YoutubeEmbed />}
      </section>
    </>
  );
};

export default Hero;

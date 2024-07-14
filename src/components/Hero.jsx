import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {} from "gsap/all";
import { factoryBg, Thumbnail1, Pattern } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { companyName, companyTagline } from "../constants";
// import { heroVideo2 } from "../utils";
// import { heroVideo3 } from "../utils";

const Hero = () => {
  // useGSAP(() => {
  //   gsap.from("#company-subname", {
  //     ease: "power1.inOut",
  //     y: 40,
  //     delay: 2,
  //     opacity: 0,
  //   });
  //   gsap.from(".comp-name", {
  //     y: 0,
  //     stagger: 0.1,
  //     delay: 0.2,
  //     opacity: 0,
  //   });
  //   gsap.from("#company-moto", {
  //     ease: "power1.inOut",
  //     duration: 2,
  //     opacity: 0,
  //     delay: 2,
  //   });
  //   gsap.to(".heroanim", {
  //     fontSize: window.innerWidth < 768 ? 40 : 120,
  //     ease: "power1.out",
  //     opacity: 1,
  //     duration: 0.5,
  //     delay: 3,
  //   });
  // }, []);

  return (
    <section className="w-full nav-height bg-gray-100 ">
      <div className="z-10 w-full h-full text-black font-Raleway  grid grid-rows-3 xl:grid-rows-none xl:grid-cols-2 xl:content-start justify-items-center border xl:items-start xl:pt-20">
        <div className="border flex flex-col justify-center xl:justify-evenly items-center xl:items-start  xl:my-2">
          <div className=" company-info font-semibold text-3xl lg:text-7xl xl:text-5xl my-4 text-center xl:text-left">
            <p>{companyName}</p>
            <p className=" text-base lg:text-xl xl:text-lg  font-normal text-gray-400 my-4 text-center xl:text-left">
              {companyTagline}
            </p>
          </div>
          <div className="  action-btns   ">
            <a
              href="#"
              className="inline-flex items-center px-6 py-4 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors duration-300"
            >
              Join the Waitlist
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="border intro-video  drop-shadow-xl row-span-2 xl:row-span-1 ">
          <div className="relative">
            <img
              className=" w-[85vw] xl:w-[38vw] rounded-3xl "
              src={Thumbnail1}
              alt=""
            />
            <FontAwesomeIcon
              className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              size="4x"
              icon={faCirclePlay}
              color="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

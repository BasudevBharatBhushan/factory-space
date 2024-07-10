import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {} from "gsap/all";
import { heroVideo1 } from "../utils";
// import { heroVideo2 } from "../utils";
// import { heroVideo3 } from "../utils";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#company-subname", {
      ease: "power1.inOut",
      y: 40,
      delay: 2,
      opacity: 0,
    });
    gsap.from(".comp-name", {
      y: 0,
      stagger: 0.1,
      delay: 0.2,
      opacity: 0,
    });
    gsap.from("#company-moto", {
      ease: "power1.inOut",
      duration: 2,
      opacity: 0,
      delay: 2,
    });
    gsap.to(".heroanim", {
      fontSize: window.innerWidth < 768 ? 40 : 120,
      ease: "power1.out",
      opacity: 1,
      duration: 0.5,
      delay: 3,
    });
  }, []);

  const companyName = "Factory Space AI";

  return (
    <section className="w-full nav-height bg-black flex justify-center items-center relative">
      <div className="w-full h-full absolute top-0 left-0 z-10 text-white text-center flex flex-col justify-center items-center">
        <p
          id="company-name"
          className="heroanim font-bold text-3xl md:text-8xl opacity-80"
        >
          {companyName.split("").map((char, index) => (
            <span key={index} className="comp-name">
              {char}
            </span>
          ))}
        </p>
        <p
          id="company-subname"
          className="font-semibold text-3xl md:text-5xl opacity-40 mt-9"
        >
          Unique Value Proposition
        </p>
        {/* <p id="company-moto" className="mt-3 text-xl opacity-70">
      Empowering the digital media with the latest technology
    </p> */}
      </div>
      <video
        className="pointer-events-none w-full h-full object-cover"
        autoPlay
        muted
        playsInline={true}
        key={heroVideo1}
      >
        <source src={heroVideo1} />
      </video>
    </section>
  );
};

export default Hero;

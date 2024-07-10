import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Brief = () => {
  useGSAP(() => {
    gsap.from(".anim", {
      ease: "power1.inOut",
      y: 60,
      delay: 3,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".anim",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section className="  text-gray-600 w-full py-8 nav-height flex flex-col justify-center">
      <div className="p-8 ">
        <h1 className="anim font-extrabold text-4xl md:text-6xl mb-2">
          Factory Space AI
        </h1>
        <p className="anim font-semibold text-xl md:text-2xl text-gray-500 mt-8 mb-2">
          Introduction
        </p>
        <p className="anim font-extralight text-lg leading-8">
          Factory Space is revolutionizing the high-tech manufacturing sector
          with a unique multi-sided platform designed to maximize the
          utilization of industrial machinery, foster innovation, streamline the
          manufacturing process, address critical workforce challenges, and
          enhance operational efficiency through AI-driven technology. Our
          platform connects small-scale industry owners, individual
          entrepreneurs, manufacturers, quality control experts, equipment
          vendors, and skilled labor in a collaborative ecosystem that drives
          efficiency, reduces costs, and accelerates technological advancement.
        </p>
        <button className="anim  text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6 dark:focus:ring-yellow-900">
          Scroll to learn more
        </button>
      </div>
    </section>
  );
};

export default Brief;

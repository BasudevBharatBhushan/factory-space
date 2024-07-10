import React, { useState, useRef, useEffect } from "react";
import { problemStatements } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ProblemStatement = () => {
  //   useGSAP(() => {
  //     gsap.from(".anim-ps", {
  //       ease: "power1.inOut",
  //       y: 60,
  //       delay: 0.5,
  //       opacity: 0,
  //       duration: 1,
  //       //   stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: ".anim",
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: 1,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   }, []);

  return (
    <section className="bg-gray-300 text-gray-600 w-full h-full py-8">
      <div className="p-8">
        <h1 className="anim text-center font-extrabold text-4xl md:text-5xl mb-8 mt-4">
          Problem Statement
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 ">
        {problemStatements.map((problemStatement, index) => (
          <div
            key={index}
            className="anim-ps bg-white shadow-lg rounded-lg p-4 text-center transition-transform duration-300 hover:transform hover:scale-105"
          >
            <img
              src={problemStatement.picture}
              alt={problemStatement.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h1 className="text-lg font-bold mb-2">
                {problemStatement.title}
              </h1>
              <p className="text-sm">{problemStatement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemStatement;

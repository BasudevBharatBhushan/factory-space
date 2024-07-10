import React, { useState, useRef, useEffect } from "react";
import { problemStatements } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ProblemStatement = () => {
  return (
    <section className=" bg-gray-300 text-gray-600 w-full  nav-height">
      <div className="p-8">
        <h1 className="anim text-center font-extrabold text-4xl md:text-5xl mb-8 mt-">
          Problem Statement
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 justify-evenly ">
        {problemStatements.map((problemStatement, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 w-full md:w-1/4 text-center"
          >
            <img
              src={problemStatement.picture}
              alt={problemStatement.title}
              className="w-full h-44 object-cover rounded-t-lg"
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

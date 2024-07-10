import React from "react";
import { solutions } from "../constants";

const Solution = () => {
  return (
    <section className="p-8 bg-gray-100 py-20">
      <h1 className="font-extrabold text-4xl md:text-5xl mb-12 text-center text-gray-600 ">
        Proposed Solutions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            key={index}
          >
            <div className="bg-gray-600 py-4 ">
              <h2 className="font-bold text-lg md:text-2xl text-white px-6 truncate text-center">
                {solution.title}
              </h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-1">Benefit:</p>
                <p className="text-gray-600 truncate">{solution.benefit}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Value:</p>
                <p className="text-gray-600 truncate">{solution.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;

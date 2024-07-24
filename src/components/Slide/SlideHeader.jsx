import React from "react";

const SlideHeader = ({ Header }) => {
  return (
    <div className="slide-header mb-5 font-Raleway font-semibold text-2xl text-gray-500">
      <p>{Header}</p>
    </div>
  );
};

export default SlideHeader;

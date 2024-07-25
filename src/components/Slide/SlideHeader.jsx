import React from "react";

const SlideHeader = ({ Header }) => {
  return (
    <div className="slide-header mb-5 font-Raleway font-semibold text-xl text-gray-500">
      <p>{Header}</p>
    </div>
  );
};

export default SlideHeader;

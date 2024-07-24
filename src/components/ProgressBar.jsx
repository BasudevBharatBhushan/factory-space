import React, { useState, useEffect } from "react";

const ProgressBar = ({ targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(targetProgress);
  }, [targetProgress]);

  return (
    <div className="w-full bg-gray-200 h-1 rounded-full my-5">
      <div
        className="bg-gray-600 h-1 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

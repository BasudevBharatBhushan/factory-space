import React from "react";

const SlideQuestioner = ({ slideQuestions }) => {
  return (
    <>
      {slideQuestions.map((obj, index) => (
        <div className="slide-questioner mb-3 " key={index}>
          <p className=" text-xl text-gray-600 font-bold">{obj.question}</p>
          <p className="text-sm font-extralight text-gray-400">
            {obj.description}
          </p>
          {obj.type === "mcq" && (
            <div className="slide-question-choices p-3  grid grid-cols-2 justify-items-stretch gap-5">
              {obj.options.map((option, index) => (
                <div
                  className="choice-container h-16 px-5 border hover:border-gray-400 hover:bg-gray-50  rounded-md flex flex-row justify-start items-center cursor-pointer"
                  key={index}
                >
                  <div className="choice-box  rounded-full w-5 h-5 mr-5 border border-gray-500 " />
                  <div className="choice-option">
                    <p className="font-semibold text-lg">{option}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {obj.type === "input" && (
            <div className="slide-question-input p-3">
              <textarea
                className="border w-full rounded-md h-16 px-3 py-2 text-sm"
                type="text"
              />
            </div>
          )}

          {obj.type === "feedback" && (
            <div className="relative mt-6">
              <label
                htmlFor={`feedback-${index}`}
                className="absolute -top-3 left-2 bg-white px-1 text-sm font-medium text-gray-700"
              >
                {obj.question}
              </label>
              <textarea
                id={`feedback-${index}`}
                name={`feedback-${index}`}
                rows="4"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={obj.description}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SlideQuestioner;

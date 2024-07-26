import React, { useContext } from "react";
import { ConnectContext } from "../../context/ConnectContext";

const SlideQuestioner = ({ slideQuestions }) => {
  const {
    activeSlide,
    setActiveSlide,
    userType,
    setUserType,
    updateQuestionsResponse,
    questionsResponse,
  } = useContext(ConnectContext);
  console.log(questionsResponse);
  return (
    <>
      {slideQuestions.map((obj, index) => {
        {
          /* console.log(obj.id); */
        }
        return (
          <div className="slide-questioner mb-1 w-full " key={index}>
            <p className=" text-lg text-gray-600 font-bold">{obj.question}</p>
            <p className="text-xs font-extralight text-gray-400">
              {obj.description}
            </p>
            {obj.type === "mcq" && (
              <div className="slide-question-choices p-3 grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-5 mb-2">
                {obj.options.map((option, index) => {
                  const isSelected = questionsResponse.find(
                    (question) => question.response === option
                  );
                  return (
                    <div
                      className={`choice-container min-h-14 h-auto px-5 border ${
                        isSelected ? " border-gray-500 border-2 bg-gray-50" : ""
                      } hover:border-gray-400 hover:bg-gray-50 rounded-md flex flex-row justify-start items-center cursor-pointer`}
                      key={index}
                      onClick={() =>
                        updateQuestionsResponse({
                          id: obj.id,
                          response: option,
                        })
                      }
                    >
                      <div
                        className={`choice-box rounded-full w-4 h-4 mr-2 lg:w-5 lg:h-5 lg:mr-5 border  ${
                          isSelected
                            ? "border-4 border-gray-600"
                            : "border-gray-500"
                        }`}
                      />
                      <div className="choice-option">
                        <p className=" text-sm lg:font-normal ">{option}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {obj.type === "input" && (
              <div className="slide-question-input p-3">
                <textarea
                  className="border w-full rounded-md h-10 px-3 py-2 text-sm overflow-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  onChange={(e) =>
                    updateQuestionsResponse({
                      id: obj.id,
                      response: e.target.value,
                    })
                  }
                  value={(() => {
                    const question = questionsResponse.find(
                      (question) => question.id === obj.id
                    );

                    return question?.response || ""; // Ensure a default empty value if undefined
                  })()}
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
        );
      })}
    </>
  );
};

export default SlideQuestioner;

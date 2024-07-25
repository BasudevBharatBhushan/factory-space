import React, { useContext, useState, useEffect } from "react";

export const ConnectContext = React.createContext();

export const ConnectProvider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [userType, setUserType] = useState("Manufacturer");

  const [questionsResponse, setQuestionsResponse] = useState([]);

  const handleNextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const handleBackSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  const updateQuestionsResponse = (questionResponse) => {
    // Create a question object

    const { id, response } = questionResponse;

    if (id === 1) {
      setUserType(response);
    }

    // Check if the question is already in the array
    const existingQuestion = questionsResponse.find(
      (question) => question.id === id
    );

    // If the question is in the array, update it
    if (existingQuestion) {
      setQuestionsResponse(
        questionsResponse.map((question) =>
          question.id === id ? { ...question, response } : question
        )
      );
    } else {
      // If the question is not in the array, add it

      setQuestionsResponse([...questionsResponse, questionResponse]);
    }
  };

  useEffect(() => {
    //Delete all the Question respones except the id = 1
    setQuestionsResponse(
      questionsResponse.filter((question) => question.id === 1)
    );
  }, [userType]);

  return (
    <ConnectContext.Provider
      value={{
        activeSlide,
        setActiveSlide,
        handleNextSlide,
        handleBackSlide,
        userType,
        setUserType,
        updateQuestionsResponse,
        questionsResponse,
        setQuestionsResponse,
      }}
    >
      {children}
    </ConnectContext.Provider>
  );
};

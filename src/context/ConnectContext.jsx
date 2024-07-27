import React, { useContext, useState, useEffect } from "react";
import { postData, patchData } from "../helper";
import { useNavigate } from "react-router-dom";

export const ConnectContext = React.createContext();

export const ConnectProvider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [userType, setUserType] = useState("Manufacturer");

  const [questionsResponse, setQuestionsResponse] = useState([]);

  const handleNextSlide = () => {
    setActiveSlide(activeSlide + 1);
    saveUserData();
  };

  const handleDoneButton = () => {
    saveUserData();
    setActiveSlide(100);
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

  const saveUserData = async () => {
    try {
      /*
        Format for the questionsResponse array

        questionsResponse = [
        
        {
        
        id: 1,
        response: "Manufacturer",
        fieldName: "userType"
        
        },
        
        {
        id : 2,
        response: "Yes",
        fieldName: "isRegistered"
        
        }
        
        
        ]


        I have to save data to Firebase in the format

        {
        
        fieldName: {
            "stringValue": response
        }
        
        
        }


          */

      const data = {};

      if (questionsResponse.length === 0) {
        return;
      }

      questionsResponse.forEach((question) => {
        data[question.fieldName] = {
          stringValue: question.response,
        };
      });

      // Save the data to Firebase

      /// Check if documentID is available in the localstorage
      const documentID = localStorage.getItem("documentId");
      let responseData = null;

      // Check if documentID
      if (documentID) {
        // If documentID is available, update the data
        responseData = await patchData(data);
      } else {
        // If documentID is not available, post the data
        responseData = await postData(data);
      }

      console.log(responseData);
    } catch (error) {
      console.log(error);
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
        saveUserData,
        handleDoneButton,
      }}
    >
      {children}
    </ConnectContext.Provider>
  );
};

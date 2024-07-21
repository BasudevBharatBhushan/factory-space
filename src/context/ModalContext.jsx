import React, { useContext, useState, useEffect } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleButtonClick = () => {
    // setShowConnectModal(!showConnectModal);
    // window.location.href = "https://run.ply.io/run/7Kj5bxPd??";
    window.open("https://run.ply.io/run/7Kj5bxPd??", "_blank");
  };

  return (
    <ModalContext.Provider
      value={{
        showConnectModal,
        setShowConnectModal,
        handleButtonClick,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

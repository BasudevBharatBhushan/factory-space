import React, { useContext, useState, useEffect } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleButtonClick = () => {
    setShowConnectModal(!showConnectModal);
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

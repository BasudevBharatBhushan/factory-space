import React, { useContext } from "react";
import { navLists } from "../constants";
import { ModalContext } from "../context/ModalContext";

const Header = () => {
  const { handleButtonClick } = useContext(ModalContext);

  return (
    <header className="w-full py-4 px-5 sm:px-9  text-gray-400 bg-gray-100 font-Raleway">
      <nav className="flex w-full  justify-between">
        <div>
          <h1 className=" font-normal font-Raleway text-gray-400 text-2xl">
            Factory Space AI
          </h1>
        </div>
        <div className="flex  justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
              onClick={() => {
                if (nav === "Connect") {
                  handleButtonClick();
                }
              }}
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

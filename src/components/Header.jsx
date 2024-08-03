import React, { useContext, useState, useEffect } from "react";
import { navLists } from "../constants";
import { ModalContext } from "../context/ModalContext";

const Header = () => {
  const { handleButtonClick } = useContext(ModalContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` py-3 px-5 sm:px-[5vw] text-gray-400 font-Raleway fixed z-50 transition-all duration-300   ${
        isScrolled ? "bg-black w-full" : "w-full xl:w-[80vw]"
      }`}
    >
      <nav className="flex w-full justify-between">
        <div>
          <h1 className="font-bold font-Raleway text-white text-lg sm:text-2xl italic">
            factoryspace.ai
          </h1>
        </div>
        <div className="flex justify-center items-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-white font-medium hover:underline transition duration-500"
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

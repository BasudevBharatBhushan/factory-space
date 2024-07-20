import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { companyName } from "../constants";
import { ModalContext } from "../context/ModalContext";

const Footer = () => {
  const handleLetsConnect = () => {
    //Scroll to top
    window.scrollTo(0, 0);
    //Open Modal
    handleButtonClick();
  };

  const { handleButtonClick } = useContext(ModalContext);
  return (
    <footer className="bg-gray-800 text-gray-300 w-full  font-Raleway z-40 ">
      <div className=" xl:w-[80vw] mx-auto px-[5vw] py-12 ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="font-semibold text-3xl md:text-4xl text-white">
              {companyName}
            </h1>
            <div className="font-Roboto">
              <p className="font-normal text-sm text-gray-400 text-center sm:text-left">
                Address
              </p>
              <p className=" font-llght text-xs text-center md:text-left text-gray-300">
                123, 1st Floor, 4th Cross, 5th Main, 6th Sector, <br /> HSR
                Layout, Bangalore
              </p>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600  text-white font-medium text-sm rounded-full hover:to-gray-400 hover:scale-125 ease-in-out transition duration-300"
              onClick={handleLetsConnect}
            >
              Let's Connect
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h2 className="font-semibold text-lg xl:text-2xl text-white">
              Reach out to us
            </h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition duration-300 hover:scale-125 ease-in-out"
              >
                <FontAwesomeIcon size="lg" icon={faInstagram} />
              </a>
              <a
                href="#"
                className="hover:text-white transition duration-300 hover:scale-125 ease-in-out"
              >
                <FontAwesomeIcon size="lg" icon={faXTwitter} />
              </a>
              <a
                href="#"
                className="hover:text-white transition duration-300 hover:scale-125 ease-in-out"
              >
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </a>
            </div>
            <p className="text-sm font-Roboto">rajesh@factoryspace.ai</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-4 text-sm text-center text-gray-400 font-Roboto">
          © 2024 Factory Space. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

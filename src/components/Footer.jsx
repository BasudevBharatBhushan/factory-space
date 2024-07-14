import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { companyName } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 w-full font-Roboto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl text-white">
              {companyName}
            </h1>
            <p className="font-medium text-lg text-gray-400">Address</p>
            <p className="font-light text-sm md:text-base text-center md:text-left">
              123, 1st Floor, 4th Cross, 5th Main, 6th Sector, <br /> HSR
              Layout, Bangalore
            </p>
            <button
              className="mt-4 px-6 py-2 bg-gray-700 text-white font-medium text-sm rounded-full hover:bg-gray-600 transition duration-300"
              onClick={() => {
                window.location.href =
                  "https://docs.google.com/forms/d/1XNfBLlGWpefx6qtpxDP8MhkKi3izf5fN5wVbtrBYiUE/edit";
              }}
            >
              Let's Connect
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h2 className="font-bold text-2xl text-white">Reach out to us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon size="lg" icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon size="lg" icon={faXTwitter} />
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </a>
            </div>
            <p className="text-sm">rajesh@factoryspace.ai</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-4 text-sm text-center text-gray-400">
          © 2024 Factory Space. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

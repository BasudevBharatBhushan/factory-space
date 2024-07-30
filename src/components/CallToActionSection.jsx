import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faHeadset,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const CallToActionSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-[10vw] font-Roboto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Join the Revolution: Sign Up for Our Waiting List
      </h2>
      <p className="text-xl text-center mb-12">
        Take advantage of FactorySpace's elastic manufacturing capabilities
        today!
      </p>

      <div className="flex justify-center mb-12">
        <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300">
          Sign Up Now
        </button>
      </div>

      <div className="flex justify-center space-x-12">
        <TrustBadge icon={faCloud} text="100% Cloud-Based" />
        <TrustBadge icon={faHeadset} text="24/7 Customer Support" />
        <TrustBadge icon={faShield} text="Compliance with Industry Standards" />
      </div>
    </div>
  );
};

const TrustBadge = ({ icon, text }) => (
  <div className="flex flex-col items-center w-52">
    <div className="bg-yellow-400 rounded-full p-4 mb-4">
      <FontAwesomeIcon icon={icon} className="text-gray-900 text-3xl" />
    </div>
    <p className="text-sm text-center">{text}</p>
  </div>
);

export default CallToActionSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faHeadset,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CallToActionSection = () => {
  const Navigate = useNavigate();
  useGSAP(() => {
    gsap.from(".trust-badge", {
      ease: "slow(0.7,0.7,false)",
      delay: 3,
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      duration: 3,
      scrollTrigger: {
        trigger: ".call-to-action",
        start: "top 80%",
        end: "top 20%",
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16 px-[10vw] font-Roboto call-to-action">
      <h2 className="text-3xl font-bold text-center mb-8">
        Join the Revolution: Sign Up for Our Waiting List
      </h2>
      <p className="text-xl text-center mb-12">
        Take advantage of FactorySpace's elastic manufacturing capabilities
        today!
      </p>

      <div className="flex justify-center mb-12">
        <button
          className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600  hover:scale-110 transition duration-300"
          onClick={() => {
            Navigate("/connect");
          }}
        >
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
  <div className="trust-badge flex flex-col items-center w-52">
    <div className="bg-yellow-400 rounded-full p-4 mb-4">
      <FontAwesomeIcon icon={icon} className="text-gray-900 text-3xl" />
    </div>
    <p className="text-sm text-center">{text}</p>
  </div>
);

export default CallToActionSection;

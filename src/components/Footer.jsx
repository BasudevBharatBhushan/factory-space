import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { companyName } from "../constants";
import { ModalContext } from "../context/ModalContext";
import { socialLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const navigate = useNavigate();
  const [iconsReady, setIconsReady] = useState(false);
  const iconsRef = useRef([]);

  useEffect(() => {
    if (iconsRef.current.length === socialLinks.length) {
      setIconsReady(true);
    }
  }, []);
  // useGSAP(() => {
  //   if (iconsReady) {
  //     gsap.from(iconsRef.current, {
  //       opacity: 0,
  //       stagger: 0.1,
  //       duration: 1,
  //       scale: 0.5,
  //       scrollTrigger: {
  //         trigger: ".footer",
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: 1,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   }
  // }, [iconsReady]);

  const handleLetsConnect = () => {
    // window.scrollTo(0, 0);
    // handleButtonClick();
    navigate("/connect");
  };

  const { handleButtonClick } = useContext(ModalContext);
  return (
    <footer className="footer bg-gradient-to-b from-gray-900 to-black text-gray-300 w-full font-Raleway z-40 ">
      <div className="xl:w-[80vw] mx-auto px-[2vw] py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1 className="font-semibold text-3xl md:text-4xl text-white">
              {companyName}
            </h1>
            <div className="font-Roboto">
              <p className="font-normal text-sm text-gray-400 text-center sm:text-left">
                Address
              </p>
              <p className="font-light text-xs text-center md:text-left text-gray-300">
                123 Main St, <br /> Anytown USA 12345
              </p>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-yellow-400 text-gray-900 font-bold text-sm rounded-full hover:bg-yellow-500 transition duration-300 hover:scale-105"
              onClick={handleLetsConnect}
            >
              Let's Connect
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h2 className="font-semibold text-lg xl:text-2xl text-white">
              Reach out to us
            </h2>
            <div className="footer-social-icon flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  key={index}
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="social-icon text-yellow-400 hover:text-white transition duration-300 hover:scale-125 ease-in-out"
                >
                  <FontAwesomeIcon size="lg" icon={social.icon} />
                </a>
              ))}
            </div>
            <p className="text-sm font-Roboto">rajesh@factoryspace.ai</p>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="max-w-6xl mx-auto px-4 text-sm text-center text-gray-400 font-Roboto">
          © 2024 Factory Space. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

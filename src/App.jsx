import { useState, useContext } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ModalContext } from "./context/ModalContext";

import { Gear, wpLogo, heroVideo2 } from "./utils";

function App() {
  const { showConnectModal } = useContext(ModalContext);
  const redirectToWhatsApp = () => {
    window.open("https://wa.me/919916587952", "_blank");
  };

  useGSAP(() => {
    gsap.from(
      ".gear-icon",
      {
        // scale: 0.6,
        opacity: 0,
        duration: 2,
        repeat: 0,
      },
      []
    );
    gsap.to(
      ".gear-icon",

      {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "linear",
        scale: 1,
      }
    );
  }, []);

  return (
    <div className=" h-[100vh]   relative">
      <Hero />

      <Footer />
      {/* <img
        className="fixed bottom-4 right-4 text-yellow-500 animate-bounce w-20 cursor-pointer"
        src={wpLogo}
        alt="wp floating icon"
        onClick={redirectToWhatsApp}
      /> */}
    </div>
  );
}

export default App;

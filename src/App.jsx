import { useState } from "react";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Gear, wpLogo } from "./utils";

function App() {
  const [count, setCount] = useState(0);

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
    <>
      <img
        className="gear-icon w-40 sm:w-72 absolute opacity-5 top-16 left-4 lg:top-16 lg:left-16 xl:top-10 xl:left-20"
        src={Gear}
        alt=""
      />
      <Header />
      <Hero />

      <Footer />
      <img
        className="fixed bottom-4 right-4 text-yellow-500 animate-bounce w-20"
        src={wpLogo}
        alt="wp floating icon"
      />
    </>
  );
}

export default App;

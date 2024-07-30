import { useState, useContext } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import CallToActionSection from "../components/CallToActionSection";

const Home = () => {
  return (
    <div>
      <div className=" h-[100vh]   relative">
        <Hero />
        <MainContent />
        <CallToActionSection />
        <Footer />
        {/* <img
        className="fixed bottom-4 right-4 text-yellow-500 animate-bounce w-20 cursor-pointer"
        src={wpLogo}
        alt="wp floating icon"
        onClick={redirectToWhatsApp}
      /> */}
      </div>
    </div>
  );
};

export default Home;

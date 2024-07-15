import { useState } from "react";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { wpLogo } from "./utils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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

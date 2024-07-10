import { useState } from "react";
import Hero from "./components/Hero";
import Brief from "./components/Brief";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProblemStatement from "./components/ProblemStatement";
import Solution from "./components/Solution";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Brief />
      <ProblemStatement />
      <Solution />
      {/* <Client /> */}
      <Footer />
    </>
  );
}

export default App;

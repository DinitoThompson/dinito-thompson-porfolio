import React from "react";
//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import HeaderSocials from "./components/HeaderSocials";
//import GraphicDesign from "./components/GraphicDesign";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      {/* <GraphicDesign /> */}
      <Contact />
      <HeaderSocials State="hidden" />
    </div>
  );
}

export default App;

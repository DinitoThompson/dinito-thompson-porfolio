import React from "react";

import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import HeaderSocials from "./components/subComponents/HeaderSocials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <HeaderSocials />
    </div>
  );
}

export default App;

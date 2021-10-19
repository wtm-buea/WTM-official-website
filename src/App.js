import React from "react";
import Example from "./Example/Example";
import AOS from "aos";
import "aos/dist/aos.css";
import Comp1 from "./components/LandingPage/ComponentOne/Navbar/Navbar";
function App() {
  AOS.init();
  return <Comp1 />;
}

export default App;

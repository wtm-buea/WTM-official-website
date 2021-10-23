import React from "react";
//import Example from "./Example/Example";
import Vision from "./components/LandingPage/ComponentSix/vision/vision";
import Comp4 from "./components/LandingPage/ComponentFour/MainComp4";
import Hero from "./components/LandingPage/ComponentTwo/hero/hero";
import Navbar from "./components/LandingPage/ComponentOne/Navbar/Navbar";
function App() {
  return (
    <div>
       <Navbar/>
      <Hero />
      <Comp4 />
      <Vision />
    </div>
  );
  
}

export default App

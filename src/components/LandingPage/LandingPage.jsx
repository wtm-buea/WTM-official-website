import Comp1 from "./ComponentOne/Navbar/Navbar";
import Comp2 from "./ComponentTwo/hero/hero";
import Comp3 from "./ComponentThree/Main";
import Comp4 from "./ComponentFour/Comp4";
import Comp5 from "./ComponentFive/ComponentFive";
import Comp6 from "./ComponentSix/vision/vision";
import Comp7 from "./FooterComponent/FooterComponent";
import React from "react";

function LandingPage() {
  return (
    <>
      <Comp1 styles="navWrapper" />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Comp7 />
    </>
  );
}

export default LandingPage;

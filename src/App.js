import React from "react";
//import Example from "./Example/Example";
import Hero from "./components/LandingPage/ComponentTwo/hero/hero";
import Vision from "./components/LandingPage/ComponentSix/vision/vision";
import Comp4 from "./components/LandingPage/ComponentFour/MainComp4";
import COmp3 from "./components/LandingPage/ComponentThree/Main";
import ComponentFive from "./components/LandingPage/ComponentFive/ComponentFive";
import PastEvents from "./components/Events/ComponentThree/PastEvents";
import UpcomingEvents from "./components/Events/ComponentThree/UpcomingEvents";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SuccessStoies from "../src/components/SuccessStories/SecondSection/SecondSection";
function App() {
  return (
    <div>
      {/* <SuccessStoies /> */}
      <Hero />
      <COmp3 />
      <Comp4 />
      <ComponentFive />
      <Vision />
      <Router>
        <Route exact path="/PastEvents" component={PastEvents} />
        <Route exact pat h="/UpcomingEvents" component={UpcomingEvents} />
      </Router>
    </div>
  );
}

export default App;

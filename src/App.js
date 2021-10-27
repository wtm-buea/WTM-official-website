import React from "react";
//import Example from "./Example/Example";
import Hero from "./components/LandingPage/ComponentTwo/hero/hero";
import Vision from "./components/LandingPage/ComponentSix/vision/vision";
import Comp4 from "./components/LandingPage/ComponentFour/MainComp4";
import PastEvents from "./components/Events/ComponentThree/PastEvents";
import UpcomingEvents from "./components/Events/ComponentThree/UpcomingEvents";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
    <Hero />
    <Comp4 />
    <Vision />
    <Switch>
      <Route path="/PastEvents"><PastEvents/></Route>
      <Route path="/UpcomingEvents"><UpcomingEvents/></Route>
    </Switch>
    </div>
    </Router>
  )

  }
export default App;

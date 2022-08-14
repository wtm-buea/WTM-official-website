import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/events" component={Events} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

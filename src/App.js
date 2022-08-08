import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={LandingPage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

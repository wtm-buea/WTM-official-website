import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Events from "./components/Events/Events";
import SuccessStories from "./components/SuccessStories/SuccessStories";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/success-stories" element={<SuccessStories />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

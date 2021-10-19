import React from "react";
import Example from "./Example/Example";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div data-aos="fade-right" data-aos-delay="500">
      hey
    </div>
  );

}

export default App;

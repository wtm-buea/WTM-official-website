import React, { useState } from "react";
import "./Comp2.css";
//import { Wave } from "react-animated-text";
//import { Random } from "react-animated-text";

function Community() {
  const [pause, setpause] = useState(false);
  setTimeout(() => {
    setpause(true);
  }, 1000);
  return (
    <div className="jumbotron text-center">
    <div className="container">
      <p className="p-tag bg-secondary">
      The second section is the section containing Community Building. 
      You are required to create this section and make it mobile responsive. 
      Remember to put everything in a bootstrap container.
      </p>
      {/* <Wave text="EXAMPLE TEXT" /> */}
      {/* <Wave text="EXAMPLE TEXT" effect="" effectChange={2.2} /> */}
      {/* <Random
        text="sup alice"
        paused={pause}
        effect="verticalFadeOut"
        effectDirection="down"
        effectChange={7.0}
      /> */}
    </div>
    </div>
  );
}

export default Community;
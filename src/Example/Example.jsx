import React, { useState } from "react";
import "./Example.css";
import { Wave } from "react-animated-text";
import { Random } from "react-animated-text";

function Example() {
  const [pause, setpause] = useState(false);
  setTimeout(() => {
    setpause(true);
  }, 1000);
  return (
    <div>
      <p className="p-tag bg-secondary">
        This file is to show the way you have to organize your files when
        contributing. Happy coding!!
      </p>
      {/* <Wave text="EXAMPLE TEXT" /> */}
      {/* <Wave text="EXAMPLE TEXT" effect="" effectChange={2.2} /> */}
      <Random
        text="sup alice"
        paused={pause}
        effect="verticalFadeOut"
        effectDirection="down"
        effectChange={7.0}
      />
    </div>
  );
}

export default Example;

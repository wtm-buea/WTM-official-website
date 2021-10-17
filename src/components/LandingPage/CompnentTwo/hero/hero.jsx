import React from "react";
import "./herro.css";

function Hero() {
  return (
    <div>
      <div className="img-fluid">
        <div className="jumbotron text-center">
          <div className="container">
            <h1 className="text display-4 ">
              Women shouldn't be afraid to put themselves forward.
            </h1>
            <h4 className="text">
              WTM <i class="bi-star-fill"></i> Buea
            </h4>
            <h4 className="text">
              <i class="bi bi-dash-lg"></i> 2015 <i class="bi bi-dash-lg"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

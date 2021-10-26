import React from "react";
import "./Comp2.css";
import img3 from "C:/Users/ANGEL/Desktop/WTM-official-website/src/Assets/illustrations/3187910.jpg";

function Community() {
 
  return (
    <div>
      <div className="containers">
          <div className="row">
              <div className="column">
                <img src={img3} alt="Illustration"/>
              </div>

              <div className="column">
                      <h2 className="display-5 text-left font-weight-bold">Community Building</h2>
                      
                      <p className="text-left font-weight-bold p-tag">Giving back to the community is something we strongly beleive in,
                      so we organise events and give opportunities to ladies to learn and grow in the tech field.

                      </p>
                    
              </div>
              
          </div>
      </div>
    </div>
  );
}

export default Community;
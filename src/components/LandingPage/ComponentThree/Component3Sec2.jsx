import React from "react";
import img1 from "../../../Assets/icons/Vector.png";
import img2 from "../../../Assets/icons/ic_round-engineering.png";
import img3 from "../../../Assets/icons/healthicons_i-training-class.png";

import "./Component3.css";

function Comp3Section2() {
  const dataSet = [
    {
      id: 1,
      img: img1,
      title: "Tech Advice",
      body: "Once a member of the community,ladies get free counsel on tech fields",
    },
    {
      id: 2,
      img: img2,
      title: "Training Sessions",
      body: "Once a member of the community,ladies get free training in tech related areas",
    },
    {
      id: 3,
      img: img3,
      title: "Mentorship Programs",
      body: "We provide quality training for community members by senior engineers",
    },
  ];

  return (
    <div style={{ marginTop: "60px", marginBottom: "80px" }}>
      <div className="d-flex flex-column  align-items-md-center">
        <h2 className="heading-secondary-1">What we offer</h2>
        <span className="underline-normal"></span>
      </div>
      <div className="row mt-5">
        {dataSet.map((data) => {
          return <Data key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
}

const Data = ({ img, title, body }) => {
  return (
    <div className="col-sm-12 col-md-4">
      <img src={img} width="30px" height="50px" alt="icon" />
      <h3
        style={{
          fontSize: "25px",
          fontWeight: "600",
        }}
      >
        {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default Comp3Section2;

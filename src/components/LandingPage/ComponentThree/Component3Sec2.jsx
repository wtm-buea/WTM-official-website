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
      body: "Once a member of the community,ladies get free councel on tech fields",
    },
    {
      id: 2,
      img: img2,
      title: "Training Sessions",
      body: "Once a member of the community,ladies get free councel on tech fields",
    },
    {
      id: 3,
      img: img3,
      title: "Mentorship Programs",
      body: "We provide quality training for community members by senior enginerrs",
    },
  ];
  return (
    <div>
      <div className="d-flex flex-column  align-items-md-center">
        <p
          // className="font-weight-bold"
          style={{
            fontSize: "66px",
            fontWeight: "400",
          }}
        >
          What we offer
        </p>
        <div
          className="smallDiv"
          style={{
            width: "83px",
            height: "7px",
            backgroundColor: "#1CE9B6",
            borderRadius: "12px",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        ></div>
      </div>
      <div className="row mt-5">
        {dataSet.map((data) => {
          return (
            <Data key={data.id} {...data} />
          );
        })}
      </div>
    </div>
  );
}

const Data = (({ img, title, body }) => {
  return (
    <div className="col-md-4 col-12">
      <img src={img} width="30px" height="50px" alt="icon" />
      <h3
        className=""
        // className="font-weight-bold"
        style={{
          fontSize: "25px",
          fontWeight: "450",
        }}
      >
        {title}
      </h3>
      <p>{body}</p>
    </div>
  );
});

export default Comp3Section2;

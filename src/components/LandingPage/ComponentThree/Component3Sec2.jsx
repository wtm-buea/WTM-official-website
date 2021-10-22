import React from "react";
import img1 from "../../../Assets/icons/Vector.png";
import img2 from "../../../Assets/icons/ic_round-engineering.png";
import img3 from "../../../Assets/icons/healthicons_i-training-class.png";

function Comp3Section2() {
  const dataSet = [
    {
      img: img1,
      title: "Tech Advice",
      body: "Once a member of the community,ladies get free councel on tech fields",
    },
    {
      img: img2,
      title: "Training Sessions",
      body: "Once a member of the community,ladies get free councel on tech fields",
    },
    {
      img: img3,
      title: "Mentorship Programs",
      body: "We provide quality training for community members by senior enginerrs",
    },
  ];
  return (
    <div>
      <div className="d-flex flex-column  align-items-md-center">
        <p
          className="font-weight-bold"
          style={{
            fontSize: "35px",
          }}
        >
          What we offer
        </p>
        <div
          style={{
            width: "50px",
            height: "3px",
            backgroundColor: "#1CE9B6",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <div className="row mt-5">
        {dataSet.map((data) => {
          return (
            <div className="col-md-4 col-12 ">
              <img src={data.img} width="30px" height="50px" />
              <h3 className="font-weight-bold">{data.title}</h3>
              <p>{data.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comp3Section2;

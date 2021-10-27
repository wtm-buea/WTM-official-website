import React from "react";
import "./Componentfive.css";
import icon1 from "../../../Assets/icons/clarity_happy-face-line.png";
import icon2 from "../../../Assets/icons/Vector (1).png";
import icon3 from "../../../Assets/icons/gis_globe-users.png";
import vector from "../../../Assets/illustrations/Vector.png";

function ComponentFive() {
  const dataSet = [
    {
      icon: icon1,
      num: 120,
      title: "Events Organised",
    },
    {
      icon: icon2,
      num: 25,
      title: "Awards recieved",
    },
    {
      icon: icon3,
      num: "600+",
      title: "impacted members",
    },
  ];
  return (
    <div className="mainBox">
      <div
        style={{
          width: "100vw",
          height: "95vh",
        }}
      >
        <div className="main">
          <div
            className="container text-white "
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              height: "100%",
            }}
          >
            <div>
              <p className="heading text-white font-weight-bold">
                Why you should join our Community
              </p>
              <div
                style={{
                  width: "75px",
                  height: "3px",
                  borderRadius: 25,
                  backgroundColor: "#1CE9B6",
                }}
              ></div>
            </div>
            <div>
              <p className="mt-5  lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur ea, eius deleniti repudiandae corporis voluptates
                dignissimos nesciunt sed animi fuga molestiae repellat maxime
                nihil. Est commodi assumenda veniam itaque provident?
              </p>
            </div>
            <div>
              <p className="heading text-white font-weight-bold">Analytics</p>
              <div
                style={{
                  width: "75px",
                  height: "5px",
                  borderRadius: 25,
                  backgroundColor: "#1CE9B6",
                }}
              ></div>
            </div>
            <div className="row mt-5">
              {dataSet.map((data) => {
                return (
                  <div
                    className="bg-white ml-4 mb-3 pb-5 col-sm-3 col-7 d-flex flex-column align-items-lg-center   col-md-3 mr-3 pt-5"
                    style={{
                      borderRadius: 10,
                    }}
                  >
                    <img src={data.icon} className="img" />
                    <p className="font-weight-bold num">{data.num}</p>
                    <p className="font-weight-bold title">{data.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentFive;

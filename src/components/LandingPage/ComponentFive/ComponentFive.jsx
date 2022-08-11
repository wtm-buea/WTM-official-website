import React from "react";
import "./Componentfive.css";
import icon1 from "../../../Assets/icons/clarity_happy-face-line.png";
import icon2 from "../../../Assets/icons/Vector (1).png";
import icon3 from "../../../Assets/icons/gis_globe-users.png";

function ComponentFive() {
  const dataSet = [
    {
      id: 1,
      icon: icon1,
      num: 120,
      title: "Events Organised",
    },

    {
      id: 2,
      icon: icon2,
      num: 25,
      title: "Awards recieved",
    },

    {
      id: 3,
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
        }}
      >
        <div className="custom-shape-divider-top-1659920465">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="main" style={{ paddingTop: 200, paddingBottom: 30 }}>

          <div
            style={{
              margin: "0 auto",
              width: "80vw",
            }}
          >
            <div>
              <p className="heading text-white font-weight-bold">
                Why you should join our Community
              </p>
              <span
                className="underline-large"
                style={{ marginTop: "-38px" }}
              ></span>
            </div>
            <p className="mt-5 pr-5" style={{ fontWeight: 500, fontSize: "25px", color: "#fff", textAlign: "justify", width: "60vw" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <div>
              <p className="heading text-white font-weight-bold">Analytics</p>
              <span
                className="underline-bold"
                style={{ marginTop: "-38px" }}
              ></span>
            </div>
            <div className="row mt-5">
              {dataSet.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="bg-white ml-4 mb-3 pb-5 col-sm-3 col-7 d-flex flex-column align-items-lg-center   col-md-3 mr-3 pt-5"
                    style={{
                      borderRadius: 10,
                      boxShadow: "1px 2px 5px rgba(0,0,0,1.25)",
                    }}
                  >
                    <img src={data.icon} className="img" alt="icon" />
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

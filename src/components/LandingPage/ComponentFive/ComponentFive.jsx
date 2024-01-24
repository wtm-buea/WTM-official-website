import React from "react";
import "./Componentfive.css";
import icon1 from "../../../Assets/icons/clarity_happy-face-line.png";
import icon3 from "../../../Assets/icons/gis_globe-users.png";

function ComponentFive() {
  const dataSet = [
    {
      id: 1,
      icon: icon1,
      num: "120+",
      title: "Events organized",
    },

    // {
    //   id: 2,
    //   icon: icon2,
    //   num: "25",
    //   title: "Awards received",
    // },

    {
      id: 2,
      icon: icon3,
      num: "600+",
      title: "Impacted members",
    },
  ];
  return (
    <div className="mainBox">
      <div className="custom-shape-divider-top-1659920465">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="main">
        <div>
          <div>
            <p className="heading text-white font-weight-bold">
              Why you should join our Community
            </p>
            <span
              className="underline-large"
              style={{ marginTop: "-3.8rem" }}
            ></span>
          </div>
          <p className="mt-5 pr-5 why-us-details">
            We are a community of vibrant ladies passionate about driving
            innovative change in the techspace. We support and encourage one
            another through events, meetups, hackathons and mentorships.
          </p>

          <div>
            <p className="heading text-white font-weight-bold">Analytics</p>
            <span
              className="underline-bold"
              style={{ marginTop: "-38px" }}
            ></span>
          </div>
          <div className="row mt-5 analytics-details cardcontent">
            {dataSet.map((data) => {
              return (
                <div
                  key={data.id}
                  className="bg-white ml-4 mb-3 pb-5 col-sm-12   flex-column align-items-lg-center col-md-3 mr-3 pt-5"
                  style={{
                    borderRadius: 10,
                    boxShadow: "1px 2px 5px rgba(0,0,0,1.25)",
                  }}
                >
                  <img src={data.icon} className="data-icon" alt="icon" />
                  <span className="font-weight-bold num d-block">
                    {data.num}
                  </span>
                  <span className="font-weight-bold title d-block">
                    {data.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentFive;

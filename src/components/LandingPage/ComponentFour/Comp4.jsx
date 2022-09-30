import React from "react";
import Hand from "../../../Assets/icons/fa-regular_hand-point-right.png";
import img1 from "../../../Assets/images/vimma_award.jpeg";
import img2 from "../../../Assets/images/PN5A9405.png";

import "./Comp4.css";

export default function Comp4() {
  const dataList = [
    {
      id: 0,
      item: "Won the <a href='https://twitter.com/CMRNewsAgency/status/1558387923405471750?t=L2FSTERD4i37FrJpfejYOg&s=19' target='_blank' rel='noopener noreferrer'>Victoria International Media Merit Award</a> 2022"
    },

    {
      id: 1,
      item: "Won the women online safety hackathon for central africa",
    },

    {
      id: 2,
      item: "Mentored 100+ girls in Cameroon and central africa.",
    },

    {
      id: 3,
      item: "Organised several training sessions to help women in tech",
    }

  ];

  function createMarkup(item) {
    return { __html: item };
  }

  return (
    <div
      className="container-fluid"
      id="sectionAchievements"
    >
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="sectionHeading">
            <h3 className="heading-secondary-2">Our Achievements</h3>
            <span className="underline-bold ml-5"></span>
          </div>
          <span
            className="d-block"
            style={{
              fontWeight: "300",
              marginTop: 30,
              marginBottom: 40,
              fontSize: "20px",
            }}
          >
            WTM Buea has achieved so much during the past years. A few are listed
            below
          </span>
          <div>
            {dataList.map((data) => {
              return (
                <div className="d-flex align-items-center" key={data.id}>
                  <img src={Hand} width="30px" height="30px" alt="icon" />
                  <span
                    className="pl-3 achievement-details d-block"
                    style={{
                      fontWeight: "300",
                    }}
                    dangerouslySetInnerHTML={createMarkup(data.item)}
                  >
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-6 col-12 d-flex section-image">
          <div className="mt-5">
            <img
              alt="group_image"
              src={img1}
              className="group-image1"
            />
          </div>
          <div className="group-image2-box">
            <img
              alt="group_image"
              src={img2}
              className="group-image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Hand from "../../../Assets/icons/fa-regular_hand-point-right.png";
import img1 from "../../../Assets/images/03 copy.jpg";
import img2 from "../../../Assets/images/PN5A9405.JPG";
export default function Comp4() {

  const dataList = [
    {
      id: 1,
      item: "Won the women online safety hackerthon for central africa",
    },

    {
      id: 2,
      item: "Mentored 100+ girls in Cameroon and central africa.",
    },

    {
      id: 3,
      item: "Organised several training sessions to help women in tech",
    },

    {
      id: 4,
      item: "Organised several training sessions to help women in tech",
    },

    {
      id: 5,
      item: "Organised several training sessions to help women in tech",
    },

  ];
  return (
    <div className="row mt-5  bg-warning">
      <div className="col-md-6 col-12">
        <div>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "410",
            }}
          >
            Our Achievements
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
        <div className="mt-4">
          <p
            style={{
              fontWeight: "450",
            }}
          >
            WTM Buea has achieved so much during the past years. A few are
            listed below
          </p>
        </div>
        <div className="mt-4">
          {dataList.map((data) => {
            return (
              <div className="d-flex mt-3" key={data.id}>
                <img src={Hand} width="30px" height="30px" />
                <p
                  className="pl-3"
                  style={{
                    fontWeight: "300",
                  }}
                >
                  {data.item}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-md-6 col-12 d-flex">
        <div
          className="mr-3"
          style={{
            marginTop: 50,
            height: "35vh",
            width: "70%",
          }}
        >
          <img
            // className="mr-3"
            src={img1}
            width="100%"
            height="100%"
            style={{
              borderRadius: 20,
            }}
          />
        </div>
        <div
          className="mt-3"
          style={{
            width: "70%",
            height: "35vh",
          }}
        >
          <img
            src={img2}
            width="100%"
            height="100%"
            style={{
              borderRadius: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
}

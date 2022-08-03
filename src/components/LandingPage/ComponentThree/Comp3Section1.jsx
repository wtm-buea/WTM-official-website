import React from "react";

function Comp3Section1() {
  return (
    <div className=" mb-5 p-5 container-fluid">
      <div className="d-flex flex-column  align-items-center gap-1">
        <p
          className=" text"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "66px",
            // lineHeight: "77px",
            color: "#5C5A5A",
          }}
        >
          About Us
        </p>
        <div
          style={{
            position: "absolute",
            width: "83px",
            height: "7px",
            top: "123%",
            background: "#1CE9B6",
            borderRadius: "12px",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        ></div>
      </div>
      <div className="mt-5 text-center">
        <p
          className="text text-break"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontSize: "45px",
            fontWeight: "400",
            width: "105%",
            color: "#121212",
          }}
        >
          Google’s Women Techmakers program provides visibility,
          <br /> community, and resources for women in technology
        </p>
      </div>
    </div>
  );
}

export default Comp3Section1;

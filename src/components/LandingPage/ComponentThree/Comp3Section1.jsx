import React from "react";

function Comp3Section1() {
  return (
    <div className=" mb-5">
      <div className="d-flex flex-column  align-items-md-center">
        <p
          // className=
          style={{
            fontSize: "35px",
            fontWeight: "380",
          }}
        >
          About Us
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
      <div
        className="mt-5 text-md-center"
        style={{
          fontSize: "23px",
          //   textAlign: "center",
          fontWeight: "300",
        }}
      >
        <p>
          Google’s Women Techmakers program provides visibility, community, and
          resources for women in technology
        </p>
      </div>
    </div>
  );
}

export default Comp3Section1;

import React from "react";
import img1 from "../../../Assets/images/03 copy.jpg";
function SecondSection() {
  const data = [
    {
      image: img1,
      name: "Tambe Tabitha",
      email: "tabitha@gmail.com",
      year: "2018-2021",
    },
    {
      image: img1,
      name: "Jenniline Ebai",
      email: "jane@gmail.com",
      year: "2018-2021",
    },
  ];
  return (
    <div className="container">
      <div className="row ">
        {data.map((item) => (
          <div
            className="col d-flex justify-content-center mr-5"
            style={{
              backgroundColor: "white",
              boxShadow: "1px 3px 5px 2px rgba(0,0,0,0.25)",
            }}
          >
            <div>
              <div
                className="p-3"
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    borderRadius: 50,
                  }}
                  src={item.image}
                  width="60px"
                  height="60px"
                />
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {item.name}
              </p>
              <p style={{ textAlign: "center", fontSize: "18px" }}>
                {item.email}
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "17px",
                }}
              >
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;

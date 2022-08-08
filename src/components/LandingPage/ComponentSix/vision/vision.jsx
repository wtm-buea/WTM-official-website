import React from "react";
import "./vision.css";
import img2 from "../../../../Assets/illustrations/3081783.jpg";

function Vision() {
    return (
        <div className="container-fluid vision-main">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h2 className="heading-secondary-1">Our Vision </h2>
                    <span
                        className="underline-normal"
                        style={{ marginBottom: "40px", marginLeft: 5 }}
                    ></span>
                    <p style={{ width: "40vw", fontSize: 35, fontWeight: 500 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy .
                    </p>
                    <div style={{ fontSize: 40 }}>
                        <button
                            type="button"
                            className="btn rounded-0 btn-lg btn-info pt-3 pb-3"
                            style={{
                                fontSize: 40,
                                paddingLeft: 40,
                                paddingRight: 40
                            }}
                        >
                            Know More
                        </button>
                        &nbsp; &nbsp;{" "}
                        <button
                            type="button"
                            className="btn rounded-0 pt-3 pb-3"
                            style={{
                                fontSize: 40,
                                border: "1px solid #4CADF6",
                                paddingLeft: 40,
                                paddingRight: 40,
                                color: "#4CADF6"
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src={img2} className="img-fluid" alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Vision;

import React from "react";
import "./vision.css";
import img2 from "../../../../Assets/illustrations/3081783.jpg";

function Vision() {
    return (
        <div className="container-fluid vision-main">
            <div className="row">
                <div className="col-sm-12 col-md-6 our-vision-text">
                    <h2 className="heading-secondary-1">Our Vision</h2>
                    <span
                        className="underline-normal"
                        style={{ marginBottom: "4rem", marginLeft: ".5rem" }}
                    ></span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy .
                    </p>
                    <div>
                        <button
                            type="button"
                            className="btn rounded-0 btn-lg btn-info pt-3 pb-3 know-more-btn"
                        >
                            Know More
                        </button>
                        &nbsp; &nbsp;{" "}
                        <button
                            type="button"
                            className="btn rounded-0 pt-3 pb-3 contact-us-btn"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 our-vision-image">
                    <img src={img2} className="img-fluid" alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Vision;

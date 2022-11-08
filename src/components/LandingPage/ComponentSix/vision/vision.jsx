import React from "react";
import "./vision.css";
import img2 from "../../../../Assets/illustrations/3081783.jpg";

function Vision() {
    return (
        <div className="container-fluid vision-main">
            <div className="row">
                <div className="col-sm-12 col-md-6 our-vision-text">
                    <h2 className="heading-secondary-1">Our Mission</h2>
                    <span
                        className="underline-normal"
                        style={{ marginBottom: "4rem", marginLeft: ".5rem" }}
                    ></span>
                    <p>
                        We work to accomplish the following
                    </p>
                    <ul>
                        <li>To advance the inclusion of women and girls in technology careers;</li>
                        <li>To promote ICT-related capacity-building programs;</li>
                        <li>To build a Cameroon where all women and girls thrive in technology;</li>
                        <li>To provide visibility, community, and resources for women and girls in Technology;</li>
                    </ul>
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

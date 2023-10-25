import React from "react";
import "./vision.css";
import img2 from "../../../../Assets/illustrations/3081783.jpg";
import { Link } from "react-router-dom";

function Vision() {
  const subject = "Hello from WTM Website";
  const body = "Wanna say hello";
  const recipientEmail = "wtmbuea@gmail.com";

  const handleSendEmail = () => {
    const isGmail = /.*@gmail\.com$/.test(recipientEmail);
    const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    if (isGmail) {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          recipientEmail
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_blank"
      );
    } else {
      window.open(emailLink, "_blank");
    }
  };

  return (
    <div className="container-fluid vision-main">
      <div className="row">
        <div className="col-sm-12 col-md-6 our-vision-text">
          <h2 className="heading-secondary-1">Our Mission</h2>
          <span
            className="underline-normal"
            style={{ marginBottom: "4rem", marginLeft: ".5rem" }}
          ></span>
          <p>We work to accomplish the following</p>
          <ul className="list__items">
            <li>
              To advance the inclusion of women and girls in technology careers;
            </li>
            <li>To promote ICT-related capacity-building programs;</li>
            <li>
              To build a Cameroon where all women and girls thrive in
              technology;
            </li>
            <li>
              To provide visibility, community, and resources for women and
              girls in Technology;
            </li>
          </ul>
          <div>
            <Link to="/events">
              <button
                type="button"
                className="btn rounded-0 btn-lg btn-info pt-3 pb-3 know-more-btn cursor-pointer"
              >
                Know More
              </button>
            </Link>
            &nbsp; &nbsp;
            <button
              onClick={handleSendEmail}
              type="button"
              className="btn rounded-0 pt-3 pb-3 contact-us-btn cursor-pointer focus-none"
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

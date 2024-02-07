import React from "react";
import img1 from "../../../../Assets/images/DD-2023.jpg";
import img2 from "../../../../Assets/images/outreachy-2023.jpeg";
import img3 from "../../../../Assets/images/DD-2023.jpg";
import img4 from "../../../../Assets/images/iwd-2023.jpeg";
import img5 from "../../../../Assets/images/DareToBe-challenge-2023.jpeg";
import "../EventsMain.css";

function PastEvents(props) {
  const display = props.eventType === "past" ? "d-block" : "d-none";

  return (
    <div className={display}>
      <div className="container-fluid events-container">
        <h1 className="display-1 font-weight-normal">Past events</h1>
        <div className="row">
          <div className="col-md">
            <img className="img-fluid" src={img1} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              November 10, 2023 - DevFest-Diversity Dinner -{" "}
              <span>Capitol Banquet Hall Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">
              DevFest diversity dinner
            </h4>
            <p className="text-lg-left">
              DevFest is about celebrating developers all over the world.
              Diversity dinner is about celebrating ladies in tech who are
              bridging the digital divide gap everyday.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img className=" img-fluid" src={img2} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              August 19, 2023 - Opensource with Outreachy -{" "}
              <span>ActiveSpaces Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">
              OSS with Outreachy(December round)
            </h4>
            <p className="text-sm-left words">
              For the first time, GDG, GDSC and WTM Buea come together to help
              students apply for Outreachy! Outreachy is a program that provides
              paid internships to under-represented groups in open source
              software. This is a great opportunity for students to get their
              foot in the door of the open source community and gain valuable
              experience.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img className=" img-fluid" src={img5} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              April 8, 2023 - DareToBe Challenge -{" "}
              <span>Mountain Hub Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">DareToBe Challenge</h4>
            <p className="text-lg-left words">
              Being a part of a greater sentence, "dare to be" can be applied to
              so many different areas of our lives. WTM buea via this challenge,
              seeks to dare its community members on their creative, consistent,
              management and technical skills. Participants are called to build
              creative products that solve a problem in their community all
              through the month of March, and the closing event will happen on
              April 8th, where participants will be required to present their
              solutions infront of a panel of judges for a cash prize.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img className=" img-fluid" src={img4} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              March 11, 2023 - IWD WTM BUEA -{" "}
              <span>Eco tourism Hall Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">
              International Women's Day: Dare To Be
            </h4>
            <p className="text-lg-left words">
              International Women's day is a yearly event organised by Women
              Tech Makers Buea. It is usually our biggest event of the year. It
              features hands-on coding workshops, inspiring speakers, and
              networking opportunities. The theme for this year is Dare to be
              which challenges WTM BUEA community to go beyond its boundaries
              and Dare to be a lot more, and Contribute more to the tech
              industry.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img className=" img-fluid" src={img3} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              February 4, 2023 - Opensource with Outreachy -{" "}
              <span>ActiveSpaces Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">
              OSS with Outreachy(May round)
            </h4>
            <p className="text-lg-left words">
              WTM Buea aims to help students apply for Outreachy! Outreachy is a
              program that provides paid internships to under-represented groups
              in open source software. This is a great opportunity for students
              to get their foot in the door of the open source community and
              gain valuable experience.
            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md">
            <img className=" img-fluid" src={img3} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              August 19, 2023 - Opensource with Outreachy -{" "}
              <span>ActiveSpaces Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">OSS with Outreachy</h4>
            <p className="text-lg-left words">
              For the first time, GDG, GDSC and WTM Buea come together to help
              students apply for Outreachy! Outreachy is a program that provides
              paid internships to under-represented groups in open source
              software. This is a great opportunity for students to get their
              foot in the door of the open source community and gain valuable
              experience.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PastEvents;

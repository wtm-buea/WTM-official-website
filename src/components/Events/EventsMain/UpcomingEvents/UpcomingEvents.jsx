import React from "react";
import img3 from "../../../../Assets/images/mental-health-2024.jpeg";
import img2 from "../../../../Assets/images/WTM-IWD-2024-bevy-icon.png";
// import img3 from "../../../../Assets/images/mental-health-2024.jpeg";
// import img3 from "../../../../Assets/images/mental-health-2024.jpeg";
// import img3 from "../../../../Assets/images/mental-health-2024.jpeg";
import "../EventsMain.css";

function UpcomingEvents(props) {
  const display = props.eventType === "upcoming" ? "d-block" : "d-none";

  return (
    <div className={display}>
      <div className="container-fluid events-container">
        <h1 className="display-1 font-weight-normal">Upcoming events</h1>
        <div className="row">
          <div className="col-md">
            <img className="img-fluid" src={img3} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              January 29, 2024 - MENTAL HEALTH & WELLNESS -{" "}
              <span>Buea, CM</span>
            </h5>
            <a
              href="https://gdg.community.dev/events/details/google-gdg-buea-presents-wtm-buea-mental-health-and-safety-event/"
              alt="redirect link"
              className="display-4 font-weight-normal"
            >
              Mental Health & Safety{" "}
            </a>
            <p className="text-lg-left words">
              We Start off the year in good spririts and why not care for our
              mental health too. Anxiety, Imposer syndrome and a host of others
              are eating away at us daily because of the daunting field we find
              ourselves in. So we invite you to this event, to come hear from
              already experienced devs, psychologists and peers on better ways
              to improve on your mental health and bag a successful tech career.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <img className="img-fluid" src={img2} alt="Girls seated" />
          </div>
          <div className="col-md event-description">
            <h5 className="font-weight-bold">
              April 13, 2024 - IWD-2024 - <span>Buea, CM</span>
            </h5>
            <h4 className="display-4 font-weight-normal">
              International Women's Day 2024: Impact the Future
            </h4>
            <p className="text-lg-left words">
              Ateliers ou les femmes ayant reussi dans le monde de technologie
              viennet partager avec nous leurs experiences et
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;

import React, { useState } from "react";
import TextTruncate from 'react-text-truncate';
import Navbar from "../LandingPage/ComponentOne/Navbar/Navbar";
import "./SuccessStories.css";
import { stories } from "./stories.data";
import linkedInIcon from "../../Assets/icons/icon_linkedIn.jpg";

function SuccessStories() {
  const [less, toggleLess] = useState(true);
  const [more, toggleMore] = useState(false);

  const handleTruncate = () => {

  }
  return (
    <>
      <Navbar styles="navWrapperLight" />
      <div className="list container">
        <div className="row">
          {stories.map((item) => (
            <div
              class="card col-md-5 list-item"
            >
              <div className="card-header d-flex list-item-header">
                <img
                  src={item.image}
                  alt="item-img"
                />
                <span className="list-item-header-text">
                  <span className="name-text">
                    {item.name}
                  </span>
                  <span className="year">
                    {item.title}
                  </span>
                  <span className="connect">
                    <small className="text-primary">connect </small>
                    <a href={item.linkedIn}>
                      <img src={linkedInIcon} alt="linkedInIcon" className="icon-img" />
                    </a>
                  </span>
                </span>
              </div>
              <div class="card-body">
                <TextTruncate
                  line={8}
                  element="span"
                  truncateText="…"
                  text={item.description}
                  textTruncateChild={<a href="#">more</a>}
                  className="card-text d-block text-dark"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SuccessStories;

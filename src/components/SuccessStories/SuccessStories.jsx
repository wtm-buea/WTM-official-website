import React, { useState } from "react";
import Truncate from 'react-truncate';
import Navbar from "../LandingPage/ComponentOne/Navbar/Navbar";
import "./SuccessStories.css";
import { stories } from "./stories.data";
import linkedInIcon from "../../Assets/icons/icon_linkedIn.jpg";

function SuccessStories() {
  const [truncated, setTruncated] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleLines = () => {
    setExpanded(!expanded);
  }

  const handleTruncate = () => {
    setTruncated(truncated);
  }

  return (
    <>
      <Navbar styles="navWrapperLight" />
      <div className="story-list container">
        <h1 className="display-2 font-weight-normal text-dark page-heading">Success Stories</h1>
        <div className="row">
          {stories.map((item) => (
            <div
              className="card col-sm-12 col-md-5 story-list-item"
              key={item.id}
            >
              <div className="card-header d-flex story-list-item-header bg-white">
                <img
                  src={item.image}
                  alt="item-img"
                />
                <span className="story-list-item-header-text">
                  <span className="name-text">
                    {item.name}
                  </span>
                  <span className="year">
                    {item.title}
                  </span>
                  <span className="connect">
                    <small className="text-primary">connect </small>
                    <a href={item.linkedIn} target="_blank" rel="noopener noreferrer">
                      <img src={linkedInIcon} alt="linkedInIcon" className="icon-img" />
                    </a>
                  </span>
                </span>
              </div>
              <div className="card-desc text-justify">
                <Truncate
                  lines={!expanded && 8}
                  ellipsis={<span>... <button onClick={toggleLines} className="text-primary btn">more</button></span>}
                  onTruncate={handleTruncate}
                >
                  {item.description}
                </Truncate>
                {!truncated && expanded && (
                  <span> <button className="text-primary btn" onClick={toggleLines}>less</button></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SuccessStories;

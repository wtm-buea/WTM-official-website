import React, { useState } from "react";
import Navbar from "../LandingPage/ComponentOne/Navbar/Navbar";
import "./SuccessStories.css";
import { stories } from "./stories.data";
import linkedInIcon from "../../Assets/icons/icon_linkedIn.jpg";
import FooterComponent from "../LandingPage/FooterComponent/FooterComponent";

function SuccessStories() {
  const [truncated, setTruncated] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleLines = (item) => {
    item.isTruncated = !item.isTruncated;
    setExpanded(!expanded);
  };

  const handleTruncate = () => {
    setTruncated(truncated);
  };

  return (
    <>
      <Navbar styles="navWrapperLight" />
      <div className="story-list container">
        <h1 className="display-2 font-weight-normal text-dark page-heading">
          Success Stories
        </h1>
        <div className="row">
          {stories.map((item) => (
            <div
              className="card col-sm-12 col-md-5 story-list-item"
              key={item.id}
            >
              <div className="card-header d-flex story-list-item-header bg-white">
                <div className="user-image">
                  <img src={item.image} alt="item-img" />
                </div>
                <span className="story-list-item-header-text">
                  <span className="name-text">{item.name}</span>
                  <span className="year">{item.title}</span>
                  <span className="connect">
                    <small className="text-primary">connect </small>
                    <a
                      href={item.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedInIcon}
                        alt="linkedInIcon"
                        className="icon-img"
                      />
                    </a>
                  </span>
                </span>
              </div>
              <div className="card-desc text-justify">
                {item.description}
                {/* <Truncate
                  lines={!item.isTruncated && 8}
                  ellipsis={
                    <span>
                      ...{" "}
                      <button
                        onClick={() => toggleLines(item)}
                        className="text-primary btn"
                      >
                        more
                      </button>
                    </span>
                  }
                  onTruncate={handleTruncate}
                >
                  {item.description}
                </Truncate> */}
                {/* {!truncated && item.isTruncated && (
                  <span>
                    {" "}
                    <button
                      className="text-primary btn"
                      onClick={() => toggleLines(item)}
                    >
                      less
                    </button>
                  </span>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default SuccessStories;

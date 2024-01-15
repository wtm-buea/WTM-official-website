import NavBar from "./../LandingPage/ComponentOne/Navbar/Navbar";
import CommunityBuilding from "./CommunityBuilding/CommunityBuilding";
import EventsMain from "./EventsMain/EventsMain";
import React from "react";
import FooterComponent from "../LandingPage/FooterComponent/FooterComponent";

function Events() {
  return (
    <>
      <NavBar styles="navWrapperLight" />
      <CommunityBuilding />
      <EventsMain />
      <FooterComponent />
    </>
  );
}

export default Events;

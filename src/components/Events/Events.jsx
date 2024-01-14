import NavBar from "./../LandingPage/ComponentOne/Navbar/Navbar";
import CommunityBuilding from "./CommunityBuilding/CommunityBuilding";
import EventsMain from "./EventsMain/EventsMain";
import React from "react";

function Events() {
  return (
    <>
      <NavBar styles="navWrapperLight" />
      <CommunityBuilding />
      <EventsMain />
    </>
  );
}

export default Events;

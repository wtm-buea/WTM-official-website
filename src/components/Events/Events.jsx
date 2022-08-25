import NavBar from "./../LandingPage/ComponentOne/Navbar/Navbar";
import CommunityBuilding from "./CommunityBuilding/CommunityBuilding";
import EventsMain from "./EventsMain/EventsMain";

function Events() {
    return (
        <>
            <NavBar styles="navWrapperLight" />
            <CommunityBuilding />
            <EventsMain />
        </>
    )
}

export default Events;
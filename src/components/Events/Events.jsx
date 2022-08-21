import PastEvents from "./PastEvents/PastEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import NavBar from "./../LandingPage/ComponentOne/Navbar/Navbar";

function Events() {
    return (
        <>
            <NavBar styles="navWrapperLight" />
            <PastEvents />
            <UpcomingEvents />
        </>
    )
}

export default Events;
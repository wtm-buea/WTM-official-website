import PastEvents from "./PastEvents/PastEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import "./EventsMain.css";
import { useState } from "react";

function EventsMain() {
    const [eventType, setEventType] = useState('past');
    return (
        <>
            <div className="bg-light">
                <div className="events-tab"><p><a onClick={() => { setEventType('past') }}>Past events</a>&nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;<a onClick={() => { setEventType('upcoming') }}>Upcoming Events</a></p>
                    <div className="rectangle"></div>
                </div>
                <PastEvents eventType={eventType} />
                <UpcomingEvents eventType={eventType} />
            </div>
        </>
    )
}

export default EventsMain;
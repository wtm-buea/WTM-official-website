import PastEvents from "./PastEvents/PastEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import "./EventsMain.css";
import { useState } from "react";

function EventsMain() {
    const [eventType, setEventType] = useState("past");
    return (
        <>
            <div className="bg-light events-main-section">
                <div className="events-tab">
                    <span>
                        <a
                            href="#"
                            onClick={() => {
                                setEventType("past");
                            }}
                        >
                            Past Events
                        </a>
                        <div className="rectangle"></div>
                    </span>
                    <span>
                        <a
                            href="#"
                            onClick={() => {
                                setEventType("upcoming");
                            }}
                        >
                            Upcoming Events
                        </a>
                        <div className="rectangle"></div>
                    </span>
                </div>
                <PastEvents eventType={eventType} />
                <UpcomingEvents eventType={eventType} />
            </div>
        </>
    );
}

export default EventsMain;

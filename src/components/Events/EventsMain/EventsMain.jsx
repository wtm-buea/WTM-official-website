import PastEvents from "./PastEvents/PastEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import "./EventsMain.css";
import { useState } from "react";

function EventsMain() {
    const [eventType, setEventType] = useState("past");
    const [state, setState] = useState(true);
    return (
        <>
            <div className="bg-light events-main-section">
                <div className="events-tab">
                    <span>
                        <button
                            onClick={() => {
                                setEventType("past");
                                setState(!state);
                            }}
                        >
                            Past Events
                        </button>
                        <div className={state && eventType === 'past' ? "focus" : ""}></div>
                    </span>
                    <span>
                        <button
                            onClick={() => {
                                setEventType("upcoming");
                                setState(!state);
                            }}
                        >
                            Upcoming Events
                        </button>
                        <div className={state && eventType === 'upcoming' ? "focus" : ""}></div>
                    </span>
                </div>
                <PastEvents eventType={eventType} />
                <UpcomingEvents eventType={eventType} />
            </div>
        </>
    );
}

export default EventsMain;

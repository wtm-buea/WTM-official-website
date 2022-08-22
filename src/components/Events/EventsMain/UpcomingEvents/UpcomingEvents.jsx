import React from 'react'
import { Link } from 'react-router-dom';
import img3 from "../../../../Assets/images/Devfest_Buea_2019.JPG";
import './UpcomingEvents.css';

function UpcomingEvents(props) {
    const display = props.eventType === 'upcoming' ? 'd-block' : 'd-none';

    return (
        <div className={display}>
            <div className="container-fluid Event">
                <h1 className="display-1 font-weight-normal">Upcoming events</h1>
                <div className="row">
                    <div className="col-md">
                        <img className=" img-fluid" src={img3} alt="Girls seated" />
                    </div>
                    <div className="col-md word">
                        <h5 className="font-weight-bold">March 28, 2021 - IWD-WORKSHOP - <span className="texts">Buea, CM</span></h5>
                        <h4 className="display-4 font-weight-normal">International Women Day</h4>
                        <p className="text-lg-left words">Ateliers ou les femmes ayant reussi dans le monde de
                            technologie viennet partager avec nous leurs experiences et</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <img className=" img-fluid" src={img3} alt="Girls sitted" />
                    </div>
                    <div className="col-md word">
                        <h5 className="font-weight-bold">March 28, 2021 - IWD-WORKSHOP - <span className="texts">Buea, CM</span></h5>
                        <h4 className="display-4 font-weight-normal">International Women Day</h4>
                        <p className="text-lg-left words">Ateliers ou les femmes ayant reussi dans le monde de
                            technologie viennet partager avec nous leurs experiences et</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents;

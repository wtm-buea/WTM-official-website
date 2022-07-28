import React from 'react'
import img3 from "../../../Assets/images/PN5A9405.JPG";
import './PastEvents.css';
import UpcomingEvents from "./UpcomingEvents";
import { Link } from 'react-router-dom';

function PastEvents() {
    return (
        <div className="Event1">
            <div className="container bg-light">
                <div className="events"><p className="texts"><Link to='/PastEvents'>Past events</Link>&nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;<Link to='/UpcomingEvents'>Upcoming Events</Link></p>
                    <div className="rectangle"></div>
                </div>
                <h1 className="display-1 font-weight-normal">Past events</h1>
                <div className="row">
                    <div className="col-md">
                        <img className=" img-fluid" src={img3} alt="Girls sitted" />
                    </div>
                    <div className="col-md word">
                        <h5 className="font-weight-bold">March 28, 2021 - IWD-WORKSHOP - <a className="tex">Buea, CM</a></h5>
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
                        <h5 className="font-weight-bold">March 28, 2021 - IWD-WORKSHOP - <a className="tex">Buea, CM</a></h5>
                        <h4 className="display-4 font-weight-normal">International Women Day</h4>
                        <p className="text-lg-left words">Ateliers ou les femmes ayant reussi dans le monde de
                            technologie viennet partager avec nous leurs experiences et</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastEvents;

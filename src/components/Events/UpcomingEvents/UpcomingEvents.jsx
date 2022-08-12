import React from 'react'
import { Link } from 'react-router-dom';
import img3 from "../../../Assets/images/Devfest_Buea_2019.JPG";
import './UpcomingEvents.css';

function UpcomingEvents() {
    return (
        <div className="Event" >

            <div className="container bg-light">
                <div className="events"><p className="texts"><Link to='/PastEvents'>Past events</Link>&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Link to='/UpcomingEvents'>Upcoming Events</Link></p>
                    <div className="rectangle1"></div>
                </div>
                <h1 className="display-1 font-weight-normal">Upcoming events</h1>
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

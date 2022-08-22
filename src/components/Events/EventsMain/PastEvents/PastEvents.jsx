import React from 'react'
import img3 from "../../../../Assets/images/Devfest_Buea_2019.JPG";
import './PastEvents.css';

function PastEvents(props) {
    const display = props.eventType === 'past' ? 'd-block' : 'd-none';
    return (
        <div className={display}>
            <div className="container-fluid Event1">
                <h1 className="display-1 font-weight-normal">Past events</h1>
                <div className="row">
                    <div className="col-md">
                        <img className="img-fluid" src={img3} alt="Girls seated" />
                    </div>
                    <div className="col-md word">
                        <h5 className="font-weight-bold">March 28, 2021 - IWD-WORKSHOP - <span className="texts" href='#'>Buea, CM</span></h5>
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

export default PastEvents;

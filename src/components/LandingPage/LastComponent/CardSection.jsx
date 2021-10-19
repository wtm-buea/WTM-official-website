import React from "react"


import happy_face from '../../../Assets/icons/happy_face.svg';
import badge from '../../../Assets/icons/badge.svg';
import globe_users from '../../../Assets/icons/globe_users.svg'

import './LastComponent.css'


export default function CardSection(props) {


    return (
        <>
            <div className="row align-items-start">
                <div className="col-sm-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <img src={happy_face} alt="happy face" className="card_icon" />
                            <p className="font-weight-bolder lead">120</p>
                            <p>Events organized</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center">

                        <div className="card-body">
                            <img src={badge} alt="happy face" className="card_icon" />
                            <p className="font-weight-bolder lead">25</p>
                            <p>Awards received</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-center">

                        <div className="card-body">
                            <img src={globe_users} alt="happy face" className="card_icon" />
                            <p className="font-weight-bolder lead">600+</p>
                            <p>Impacted members</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



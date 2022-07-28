import React from 'react'
import './vision.css'
import img2 from "../../../../Assets/illustrations/3081783.jpg";

function Vision() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="display-5 text-left font-weight-bold">Our Vision </h2>
                        <i className="bi stroke bi-dash-lg"></i>
                        <p className="text-left font-weight-bold">Lorem ipsum is simply a dummy text for printin Lorem ipsum is simply a dummy text for printin
                            Lorem ipsum is simply a dummy text for printin
                        </p>
                        <button type="button" className="btn rounded-0 btn-lg btn-primary">Know More</button>
                        &nbsp; &nbsp; <button type="button" className="btn rounded-0 btn-lg btn-outline-info">Contact Us</button>
                    </div>
                    <div className="col-md-6">
                        <img src={img2} className="img-fluid" alt="Illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision;

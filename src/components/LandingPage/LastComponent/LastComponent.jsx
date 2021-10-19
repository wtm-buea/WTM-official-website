import React from 'react';
import HeadingSection from "./HeadingSection"
import CardSection from "./CardSection"
import './LastComponent.css'



export default function LastComponent() {

    return (
        <div className="container-fluid wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <HeadingSection heading="Why you should join our Community" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <HeadingSection heading="Analytics" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card_section">
                        <CardSection />

                    </div>
                </div>
            </div>


        </div>
    );

}
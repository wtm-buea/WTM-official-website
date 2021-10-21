import react from 'react';

import './FooterComponent.css'
import women_techmakers from '../../../Assets/images/women_techmakers.png'
import emailIcon from '../../../Assets/icons/email-icon.svg';
import locationIcon from '../../../Assets/icons/location-icon.svg';
import phoneIcon from '../../../Assets/icons/phone-icon.svg'

import fbIcon from '../../../Assets/icons/facebook-icon.svg';
import twitterIcon from '../../../Assets/icons/twitter-icon.svg';
import whatsappIcon from '../../../Assets/icons/whatsapp-icon.svg'
import slackIcon from '../../../Assets/icons/slack-icon.svg';


export default function FooterComponent() {
    return (
        <div className="container-fluid wrapper">
            <div class="row">
                <div className="col-sm-5 p-5">
                    <div className="text-center quote-box">
                        <div class="gradient-bar"></div>
                        <div class="p-5">
                            <img src={women_techmakers} alt="Women techmakers" class="img img-fluid" />
                            <h2 class="buea">Buea</h2>

                            <div className="pb-5 pt-5">
                                <span className="quote">“Surround yourself with a trusted and </span>
                                <span className="quote">loyal  team. It makes all the</span>
                                <span className="quote">difference"</span>
                            </div>



                            <span className="quote-author">
                                ~Alison Pincus
                            </span>
                        </div>




                    </div>
                </div>
                <div className="col-sm-3 pt-5 text-center">
                    <h2 class="quick-links">Quick Links</h2>

                    <ul className="links">
                        <li className="quick-links">Home</li>
                        <li className="quick-links">About</li>
                        <li className="quick-links">Achievements</li>
                        <li className="quick-links">Why Join?</li>
                        <li className="quick-links">Our Vision</li>

                    </ul>
                </div>
                <div className="col-sm-4 pt-5 text-center">

                    <h2 className="quick-links">Stay in touch</h2>

                    <div className="quick-links dashed-border">Women tech makers Buea</div>

                    <div className="contact-info">
                        <div class="row pt-2">
                            <div class="col-sm-2">
                                <img src={phoneIcon} className="img img-fluid" alt="phone" />
                            </div>
                            <div class="col-sm-10 quick-links">
                                675959794
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col-sm-2">
                                <img src={emailIcon} className="img img-fluid" alt="phone" />
                            </div>
                            <div class="col-sm-10 quick-links">
                                wtmnuea@gmail.com
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col-sm-2">
                                <img src={locationIcon} className="img img-fluid" alt="phone" />
                            </div>
                            <div class="col-sm-10 quick-links">
                                Buea,Cameroon
                            </div>
                        </div>

                    </div>

                    <div className="quick-links dashed-border">Want to keep in touch with us ?</div>
                    <div className="row">
                        <div className="col-sm-3 p-2">
                            <img className="img img-responsive social" src={fbIcon} alt="facebook" />
                        </div>
                        <div className="col-sm-3 p-2">
                            <img className="img img-responsive social" src={twitterIcon} alt="twitter" />
                        </div>
                        <div className="col-sm-3 p-2">
                            <img className="img img-responsive social" src={whatsappIcon} alt="whatsapp" />
                        </div>
                        <div className="col-sm-3 p-2">
                            <img className="img img-responsive social" src={slackIcon} alt="slack" />
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}
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
                <div className="col-md-5 p-5">
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
                <div className="col-md-3 pt-5 text-center">
                    <h2 class="quick-links">Quick Links</h2>

                    <ul className="links">
                        <li className="quick-links">Home</li>
                        <li className="quick-links">About</li>
                        <li className="quick-links">Achievements</li>
                        <li className="quick-links">Why Join?</li>
                        <li className="quick-links">Our Vision</li>

                    </ul>
                </div>
                <div className="col-md-4 p-5 text-center">

                    <h2 className="quick-links">Stay in touch</h2>

                    <div className="quick-links">Women tech makers Buea</div>
                    <div className="dashed">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>

                    <div className="contact-info">      
                            <div>
                                <img src={phoneIcon} className="img img-fluid" alt="phone" />
                                <span className="quick-links">675959794</span>
                            </div>
                             <div>
                                <img src={emailIcon} className="img img-fluid" alt="phone" />
                                <span className="quick-links">wtmnuea@gmail.com</span>
                            </div>
                            <div>
                                <img src={locationIcon} className="img img-fluid" alt="phone" />
                                <span className="quick-links">Buea,Cameroon</span>
                            </div>
                    </div>

                    <div className="quick-links">Want to keep in touch with us ?</div>
                    <div className="dashed">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                    <div className="social-container">
                        <a href="#"><img className="img img-responsive social" src={fbIcon} alt="facebook" /></a>
                        <a href="#"><img className="img img-responsive social" src={twitterIcon} alt="twitter" /></a>
                        <a href="#"><img className="img img-responsive social" src={whatsappIcon} alt="whatsapp" /></a>
                        <a href="#"><img className="img img-responsive social" src={slackIcon} alt="slack" /></a>

                    </div>

                </div>
            </div>




        </div>
    )
}
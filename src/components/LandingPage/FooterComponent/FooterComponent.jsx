import "./FooterComponent.css";
import women_techmakers from "../../../Assets/images/women_techmakers.png";
import emailIcon from "../../../Assets/icons/email-icon.svg";
import locationIcon from "../../../Assets/icons/location-icon.svg";
import phoneIcon from "../../../Assets/icons/phone-icon.svg";

import fbIcon from "../../../Assets/icons/facebook-icon.svg";
import twitterIcon from "../../../Assets/icons/twitter-icon.svg";
import whatsappIcon from "../../../Assets/icons/whatsapp-icon.svg";
import slackIcon from "../../../Assets/icons/slack-icon.svg";

export default function FooterComponent() {
    return (
        <div className="container-fluid wrapper">
            <div className="row">
                <div className="col-sm-12 col-md-5 p-5">
                    <div className="text-center quote-box">
                        <div className="gradient-bar"></div>
                        <div className="p-5">
                            <img
                                src={women_techmakers}
                                alt="Women techmakers"
                                className="img img-fluid logo"
                            />
                            <h2 className="buea">Buea</h2>

                            <div className="quote-details">
                                <span className="quote">
                                    “Surround yourself with a trusted and{" "}
                                </span>
                                <span className="quote">loyal team. It makes all the</span>
                                <span className="quote">difference"</span>
                            </div>
                            <span className="quote-author">
                                ~Alison Pincus
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col-md-3 pt-5">
                    <h2 className="quick-links">Quick Links</h2>

                    <ul className="list">
                        <li className="list-item">Home</li>
                        <li className="list-item">About</li>
                        <li className="list-item">Achievements</li>
                        <li className="list-item">Why Join?</li>
                        <li className="list-item">Our Vision</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 pt-5 p-3">
                    <h2 className="quick-links">Stay in touch</h2>

                    <ul className="list">
                        <li>Women tech makers Buea</li>
                        <li>
                            <span className="dashed-md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </li>
                        <li className="list-icon">
                            <img src={phoneIcon} className="img img-fluid" alt="phone" />
                            <span>675959794</span>
                        </li>
                        <li className="list-icon">
                            <img src={emailIcon} className="img img-fluid" alt="phone" />
                            <span>wtmbuea@gmail.com</span>
                        </li>
                        <li className="list-icon">
                            <img src={locationIcon} className="img img-fluid" alt="phone" />
                            <span>Buea,Cameroon</span>
                        </li>
                        <li>
                            Want to keep in touch with us ?
                        </li>
                        <li>
                            <span className="dashed-sm">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </li>
                        <li>
                            <div className="social-container">
                                <a href="/">
                                    <img
                                        className="img img-responsive"
                                        src={fbIcon}
                                        alt="facebook"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        className="img img-responsive"
                                        src={twitterIcon}
                                        alt="twitter"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        className="img img-responsive"
                                        src={whatsappIcon}
                                        alt="whatsapp"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        className="img img-responsive"
                                        src={slackIcon}
                                        alt="slack"
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import React from 'react'

function Hero() {
    return (
        <div>
            <div className="container container-fluid text-center">
                <h1>Women shouldn't be afraid to <br/> put themselves forward.</h1>
                <h4 class="text-center">WTM   Buea</h4>
                <h4>----  2015 ----</h4> 
            </div>
            <div className="container container-fluid text-center">
                <h2>About us</h2>
                <p>Google's Women Techmakers program provides visibility, community, and resources for women in technology</p>
                <h2>What we offer</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src="../Assets/icons/Vector.png" alt="Card logo"/>
                                <div className="card-block">
                                    <h4 className="card-title">Tech advice</h4>
                                    <p className="card-text">Once a member of the community, ladies get free councel on tech fields</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src="../Assets/icons/Vector.png" alt="Card logo"/>
                                <div className="card-block">
                                    <h4 className="card-title">Training Sessions</h4>
                                    <p className="card-text">Once a member of the community, ladies get free councel on tech fields</p>
                                </div>
                            </div>
                        </div>       
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <img className="card-img-top" src="../Assets/icons/Vector.png" alt="Card logo"/>
                                <div className="card-block">
                                    <h4 className="card-title">Mentorship programs</h4>
                                    <p className="card-text">we provide quality training for community members by senoir engineers</p>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md">
                            <div className="card">
                                <div className="card-block">
                                    <h3 className="card-title">Our achievements</h3>
                                    <p>WTM Buea has achieved so much during the past years. a few are listed below</p>
                                    <ul className="list">
                                        <li>Won the women online safety hackerthon for central africa</li>
                                        <li>Mentored 100+ girls in Cameroon and central africa</li>
                                        <li>Organised several training sessions to help women in tech</li>
                                        <li>Organised several training sessions to help women in tech</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src="../Assets." alt="former anbassador" className="box-img" />
                            <img src="../Assets." alt="meeting" className="box-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 class="text-left">Why you should join ur community</h2>
                <p>lorem ipsum is simply a dummy text of the printing and typesetting industry.</p>
                <p>lorem ipsum has been the industry standard dummy text ever since the 1500</p>
                <h2 class="text-left">Analytics</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-center">
                            <img src="" alt="" />
                            <div className="card-block">
                                <h2 className="card-title ">
                                    120
                                </h2>
                                <p>Events Organised</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-center">
                            <img src="" alt="" />
                            <div className="card-block">
                                <h2 className="card-title ">
                                    25
                                </h2>
                                <p>Awards received</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-center">
                            <img src="" alt="" />
                            <div className="card-block">
                                <h2 className="card-title">
                                    600+
                                </h2>
                                <p>Impacted members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <h2>Our vision</h2>
                            <p>Lorem ipsum is simply a dummy text for printin Lorem ipsum is simply a dummy text for printin
                            Lorem ipsum is simply a dummy text for printin
                            </p>
                            <button>Know More</button>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className="col-md">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;

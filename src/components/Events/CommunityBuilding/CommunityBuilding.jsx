import img from "../../../Assets/illustrations/3187910.jpg";
import "./CommunityBuilding.css";


function CommunityBuilding() {

    return (
        <div className="container-fluid section-community-building">
            <div className="row">
                <div className="col-sm-12 col-md-6 illustration-box">
                    <img src={img} alt="community_illustration" />
                </div>
                <div className="col-sm-12 col-md-6 section-description">
                    <h3>Community Building</h3>
                    <span>
                        Giving back to the community  is something we strongly beleive in
                        so we organise events and give opportunity to ladies to learn and grow in tech
                    </span>
                </div>
            </div>
        </div>
    )

}

export default CommunityBuilding;
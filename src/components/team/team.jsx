import Navbar from "../LandingPage/ComponentOne/Navbar/Navbar";
import "./team.css";
import img from "../../Assets/images/tiku-gaelle.jpeg";
import img2 from "../../Assets/images/nyenti-gilda.jpeg";
import img3 from "../../Assets/images/emily-ashley.jpeg";
import img4 from "../../Assets/images/tabot-quinuel.jpeg";
import img5 from "../../Assets/images/nyando-onongene.jpg";
import img6 from "../../Assets/images/kouti-divine.jpg";
import img7 from "../../Assets/images/kedju-precious.jpg";

const Team = () => {
  return (
    <>
      <Navbar styles="navWrapperLight" />
      <div className="sizedbox1"></div>
      <h2> Meet our team</h2>
      <div className="sizedbox2"></div>
      <div className="profileCard">
        <img className="imgCard" src={img} alt="tiku-gaelle" />
        <h3>Tiku Brenda Gaelle</h3>
        <h5>Community Ambassador</h5>
      </div>
      <br /> <br />
      <div className="teamContainer">
        <div className="profileCard">
          <img className="imgCard" src={img2} alt="tiku-gaelle" />
          <h3>Nyenti Precious Gilda</h3>
          <h5>Social Media & Content Creator/ PR</h5>
        </div>
        <div className="profileCard">
          <img className="imgCard" src={img3} alt="tiku-gaelle" />
          <h3>Efonde Emily Ashley</h3>
          <h5>Logistics Coordinator </h5>
        </div>
        <div className="profileCard">
          <img className="imgCard" src={img4} alt="tiku-gaelle" />
          <h3> Quinuel Ndip-Agbor</h3>
          <h5>Technology lead </h5>
        </div>
      </div>
      <br />
      <div className="teamContainer">
        <div className="profileCard">
          <img className="imgCard" src={img5} alt="tiku-gaelle" />
          <h3>Nyando Onongene</h3>
          <h5>Designer </h5>
        </div>
        <div className="profileCard">
          <img className="imgCard" src={img6} alt="tiku-gaelle" />
          <h3>Kouti Divine</h3>
          <h5>Opensource lead</h5>
        </div>
        <div className="profileCard">
          <img className="imgCard" src={img7} alt="tiku-gaelle" />
          <h3>Kedju Precious</h3>
          <h5>Technology Organizer </h5>
        </div>
      </div>
    </>
  );
};

export default Team;

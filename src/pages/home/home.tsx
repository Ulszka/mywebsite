import "./home.scss";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import Particles from "../../components/Particles/MyParticles";
import cv from "../../assets/documents/CV.pdf";

const Home = () => {
  return (
    <div className="home-div">
      <div className="canvas-absolute">
        <Particles />
      </div>
      <div className="welcome-div">
        <h4>
          Hello there! <br />
          Learn more about me by clicking
          <b>
            <NavLink to="/about"> here</NavLink>
          </b>
        </h4>
        <a href={cv} target="_blank" rel="noreferrer">
          <button className="cv-button">
            Download my CV
            <div className="download-icon">
              <i className="fas fa-cloud-download-alt"></i>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

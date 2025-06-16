import "./home.scss";
import cv from "../../assets/documents/CV.pdf";
import ukuleleBg from "../../assets/my_pictures/chosen/ukulele_3.webp";

const Home = () => {
  return (
    <div className="home-bg" style={{ backgroundImage: `url(${ukuleleBg})` }}>
      <div className="home-overlay">
        <div className="home-content">
          <h1>
            Hi, I'm Ula <span className="wave">👋</span>
          </h1>
          <p>
            Aspiring IT Project Manager ready to lead innovation in tech.
          </p>
          <div className="home-buttons">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <button className="cv-btn">
                <i className="fas fa-file-download"></i> Download my CV
              </button>
            </a>
            <a href="/about">
              <button className="story-btn">Discover my story</button>
            </a>
          </div>
          <ul className="home-key-points">
            <li>3+ years in IT project management</li>
            <li>Managed €950K+ budgets</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

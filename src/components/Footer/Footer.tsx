import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://www.linkedin.com/in/urszula-handzlik/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin footer-icon"></i>
      </a>
      {/* 
      <a href="https://m.me/ula.handzlik" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp-square footer-icon"></i>
      </a>
      */}
      <a
        href="https://m.me/ula.handzlik"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook-square footer-icon"></i>
      </a>
      <a
        href="https://github.com/Ulszka"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-brands fa-github-square footer-icon"></i>
      </a>
      <a
        href="https://gitlab.com/Ulszka/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-gitlab footer-icon"></i>
      </a>
    </div>
  );
};

export default Footer;

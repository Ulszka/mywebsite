import React from "react";
import "./contact.scss";
import profilePhoto from "../../assets/my_pictures/chosen/hippoGhibli.png"; // adjust path if needed

const Contact = () => {
  return (
    <div className="contact-div">
      <div className="contact-info">
        <h3 className="contact-title">Contact me</h3>
      <hr />
        <p>
          Feel free to contact me anytime if you have any questions. You can
          reach out to me on:
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ulszka/"
              className="contact-linkedin bold-600"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/48515052579"
              className="contact-whatsapp bold-600"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </li>
          <li>
            <a
              href="https://m.me/ula.handzlik"
              className="contact-messenger bold-600"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-messenger"></i> Messenger
            </a>
          </li>
        </ul>
        <p>I will get back to you as soon as possible.</p>
      </div>
      <img
        src={profilePhoto}
        alt="Urszula Handzlik"
        className="contact-photo"
      />
    </div>
  );
};

export default Contact;

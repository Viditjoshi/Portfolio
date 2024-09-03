import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const redirectToExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer">
      <div className="Footer-Container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Gov Hospital Near by,</p>
              <p>Gujarat Junagadh Mendarda 362260.</p>
            </div>
          </div>
          <div className="Phone">
            <h4>
              <FaPhone
                size={25}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 9586607262
            </h4>
          </div>
          <div className="Email">
            <h4>
              <FaMailBulk
                size={25}
                style={{ color: "white", marginRight: "2rem" }}
              />
              viditjoshi94@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About My Social Media</h4>
          <p>
            This is my Social Media PlatForm that show on Botton click on it and
            you have to get more information about me and my social media accout
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <div className="social">
            <FaLinkedin
              onClick={() =>
                redirectToExternalLink(
                  "https://www.linkedin.com/in/vidit-joshi-9828aa255"
                )
              }
              size={30}
              style={{ color: "white", marginRight: "2rem", cursor: "pointer" }}
            />
            <FaGithub
              onClick={() =>
                redirectToExternalLink("https://github.com/viditjoshi")
              }
              size={30}
              style={{ color: "white", marginRight: "2rem", cursor: "pointer" }}
            />
            <FaInstagram
              onClick={() =>
                redirectToExternalLink("https://instagram.com/viditjoshi07")
              }
              size={30}
              style={{ color: "white", marginRight: "2rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

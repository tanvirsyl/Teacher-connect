import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className="footer-distributed">
      <div className="footer-left">
        <h3>
          Learning<span>Point</span>
        </h3>

        <p className="footer-links">
          <a href="#">Home</a>·<a href="#">Blog</a>·
          <a href="#">Privacy Policy</a>·<a href="#">About Us</a>
        </p>

        <p className="footer-company-name">LearningPoint.com &copy; 2020</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Leading University</span> Sylhet, Bangladesh
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+880 123 456789</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:info@larning.com">info@learningpoint.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Learning Point</span>
          A Platform to connect student and teachers. All over the country.
          <br />
          -Website Developed by Tushar & Mifta-
        </p>

        <div className="footer-icons">
          <a href="#">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="#">
            <TwitterIcon></TwitterIcon>
          </a>
          <a href="#">
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href="#">
            <GitHubIcon></GitHubIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

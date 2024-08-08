import React, { Fragment } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import "../css/header.css";

function Header() {
  return (
    <Fragment>
      <div className="header-container">
        <Link to="/" className="logo">
          May
        </Link>
        <div className="center-section">
          <p className="name">May Thu Htet</p>
          <p className="role">Front-end Developer</p>
        </div>
        <div className="media">
          <a
            href="https://www.linkedin.com/in/may-thu-htet-266b2954/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="linkedInIcon" />
          </a>
          <a
            href="https://github.com/may-thu-htet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="gitHubIcon" />
          </a>
          {/* <a
            href="https://www.facebook.com/maythu.htet.98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a> */}
          {/* <a
            href="https://www.instagram.com/may_thu_htet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Header;

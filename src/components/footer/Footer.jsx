import React from "react";
import {
  FaGithub,
  FaGitlab,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://www.https://github.com/bmklei8p.com/" },
  { Social: <FaLinkedinIn />, link: "https://https://www.linkedin.com/in/bmkleinb/.linkedin.com/" },
  { Social: <FaGitlab />, link: "https://https://gitlab.com/bmklei8p.instagram.com/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-right">
          <p>
            © {new Date().getFullYear()} copyright{" "}
              Bryan Kleinberg
            all rights reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;

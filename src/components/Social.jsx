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

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;

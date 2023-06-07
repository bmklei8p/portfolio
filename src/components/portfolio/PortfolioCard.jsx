import React from "react";


const PortfolioModal = ({ project, onClose }) => {
  const { img, title, subTitle, info, date, techStack, portfolioLink, gitHubLink } = project;

return (
  <div className="modal-overlay">
    <div className="modal"> 
      <div className="modal-content">
        <div className="model-header">
          <h1 style={{display: "flex", justifyContent: "center"}}>{title}</h1>
        <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <div className="image-container">
            <img src={img} alt="" />
          </div>
          <div className="text-container">
            <h2 style={{fontWeight: "bold"}}>Project Information:</h2>
            <p>{info}</p>
            <br />
            <h3 style={{fontWeight: "bold"}}>Project Details:</h3>
            <p>Tech Stack: {techStack}</p>
            <hr style={{margin: "1em 0"}}></hr>
            <p>Date: {date}</p>
            <hr style={{margin: "1em 0"}}></hr>
            <p>GitHub Repo: <a href={gitHubLink}>github.com/bmklei8p/Fomore</a> </p>
            <hr style={{margin: "1em 0"}}></hr>
            <div>
              <p>Live Url: <a href={portfolioLink}>fomore.azurewebsites.net</a> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default PortfolioModal
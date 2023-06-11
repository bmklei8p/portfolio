import { forwardRef } from 'react';
import { IoMdClose } from 'react-icons/io'

const PortfolioModal = forwardRef(({ project, onClose}, ref) => {
  const { img, title, info, date, techStack, portfolioLink, gitHubLink } = project;

return (
  <div className="modal-overlay" ref={ref}>
    <div className="modal">
      <div className="modal-content">
        <div className="model-header">
          <h1 style={{display: "flex", justifyContent: "center", fontSize: "3rem"}}>{title}</h1>
        <span className="close" onClick={onClose}><IoMdClose /></span>
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
            <hr style={{margin: "0.5em 0"}}></hr>
            <p>Date: {date}</p>
            <hr style={{margin: "0.5em 0"}}></hr>
            <div>
              <p>Live Url: <a href={portfolioLink}>fomore.azurewebsites.net</a> </p>
              <hr style={{margin: "0.5em 0"}}></hr>
            </div>
            <p>GitHub Repo: <a href={gitHubLink}>github.com/bmklei8p/Fomore</a> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
});

export default PortfolioModal
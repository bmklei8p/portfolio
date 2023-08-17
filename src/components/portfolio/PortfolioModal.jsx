import { forwardRef, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io'


const PortfolioModal = forwardRef(({ project, onClose}, ref) => {
  const { img, title, info, date, techStack, portfolioLink, gitHubLink } = project;

  useEffect(() => {
    // Add the 'modal-open' class to the body when the modal is opened
    document.body.classList.add('modal-open');
    // Remove the 'modal-open' class from the body when the modal is closed
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);


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
            <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`front page of ${title} website`} />
            </a>
          </div>
          <div className="text-container">
            <h2 style={{fontWeight: "bold", marginBottom: "1rem", marginTop: "1rem"}}>Project Information:</h2>
            <p>{info}</p>
            <br />
            <h2 style={{fontWeight: "bold", marginBottom: "1rem"}}>Project Details:</h2>
            <p>Tech Stack: {techStack}</p>
            <hr style={{margin: "0.5em 0"}}></hr>
            <p>Date: {date}</p>
            <hr style={{margin: "0.5em 0"}}></hr>
            <div>
              {portfolioLink ? <p>Live Url: <a href={portfolioLink}>{portfolioLink}</a> </p> : null}
              {portfolioLink ? <hr style={{margin: "0.5em 0"}}></hr>: null}
            </div>
            <p>GitHub Repo: <a href={gitHubLink}>{gitHubLink}</a> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
});

export default PortfolioModal
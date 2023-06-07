import React, { useState } from 'react';

const ProjectCard = ({ title, subtitle, image, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={image} alt={title} onClick={handleImageClick} />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <h2>{details.title}</h2>
            <div className="project-details">
              <div className="project-image">
                <img src={details.image} alt={details.title} />
              </div>
              <div className="project-info">
                <h3>Project Info</h3>
                <p>{details.info}</p>
                <h3>Project Details</h3>
                <ul>
                  <li>Tech Stack: {details.techStack}</li>
                  <li>Date: {details.date}</li>
                  <li>URL: {details.url}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

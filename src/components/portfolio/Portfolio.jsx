import React, {useState} from "react";
import PortfolioModal from "./PortfolioCard";


const AllPortfolioContent = [
  {
    img: "img/portfolio/1.png",
    title: "Fomore",
    subTitle: "Web App",
    info: "lorem epsum blah blah blah",
    date: "December, 2022",
    techStack: "React, FastApi, MongoDB",
    alterText: "",
    gitHubLink: "https://github.com/bmklei8p/Fomore",
    portfolioLink:
      "https://fomore.azurewebsites.net/",
  },
  {
    img: "img/portfolio/3.jpg",
    title: "Formula 1 Pitstop",
    info: "lorem epsum blah blah blah",
    subTitle: "Web App",
    alterText: "Web App",
    techStack: "React, SpringBoot, Postgres",
    date: "July, 2023",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "img/portfolio/3.jpg",
    title: "B.O.S.S. App",
    info: "lorem epsum blah blah blah",
    subTitle: "Web App",
    alterText: "Web App",
    techStack: "React, Srping Boot, Postgres",
    date: "August, 2023",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },

];


const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
              <div className="portfolio-content row lightbox-gallery">
                {AllPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <img src={val.img} alt={"none"} onClick={() => handleImageClick(val)} />
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-link */}
                      </div>
                    </div>
                  </div>
                ))}
                {selectedProject && (
                  <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
                )}
              </div>
      </div>
    </div>
  );
};

export default Portfolio;



                        {/* <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={handleImageClick(val)}
                            />
                          )}
                        </Item> */}
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

// const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const AllPortfolioContent = [
  {
    img: "img/portfolio/1.jpg",
    title: "Fomore",
    subTitle: "Web App",
    alterText: "",
    portfolioLink:
      "https://fomore.azurewebsites.net/",
  },
  {
    img: "img/portfolio/3.jpg",
    title: "Formula 1 Pitstop",
    subTitle: "Nuna ios App",
    alterText: "Web App",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "img/portfolio/2.jpg",
    title: "Boss App",
    subTitle: "Themeforest Marke",
    alterText: "Web App",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },

];


const Portfolio = () => {
  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
        <Tabs>
          {/* <TabList className="filter d-flex justify-content-center">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList> */}
          {/* End tablist */}

          <Gallery>
            <TabPanel>
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
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>

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
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </Gallery>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;

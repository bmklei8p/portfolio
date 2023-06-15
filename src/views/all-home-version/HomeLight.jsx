import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeOne = () => {
  useDocumentTitle("Bryan Kleinberg Portfolio");
  return (
    <>
      {/* has scrollspy dependency */}
      <Header />

      {/* has text-loop dependency */}
      <Slider />

      {/* About Me */}
      <section style={{backgroundColor: "rgb(151 151 151)"}} id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/*  Skills */}
      <section style={{backgroundColor: "rgb(199 191 183)"}}  className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" style={{backgroundColor: "rgb(151 151 151)"}} className="section">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}


      {/* react-hook-from and axios */}
      {/* Contact */}
      <section style={{backgroundColor: "rgb(199 191 183)"}} id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact me</h4>
                </div>
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Feel free to get in touch for any reason. Always looking for new connections or projects.
                  </p>
                </div>
                {/* End .title */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    Apex NC, 27523<br />
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                    bmklei8p@gmail.com
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                    919-602-3440
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </>
  );
};

export default HomeOne;

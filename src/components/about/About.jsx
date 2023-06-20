import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box">
            <img src="img/about/bryanPortrait.jpg" alt="portrait of Bryan Kleinberg" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3>Bryan Kleinberg</h3>
            <h5>
              A <span className="color-theme">software engineer </span>
              based in <span className="color-theme">North Carolina</span>
            </h5>
            <p>
              I am a problem solver with experience managing the full production
              lifecycle from desigining to deployment. As a pharmacist turned software engineer,
              I have a critical attention to detail, a passion for lifelong learning, and
              experience managing in a small team, fast passed enviornment. Check out some of my projects below.
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>bmklei8p@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>919-602-3440</p>
                </div>
                <div className="media">
                  <label>Discord</label>
                  <p>bmkleinb</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/bryan_kleinberg_resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;

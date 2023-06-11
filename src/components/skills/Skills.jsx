import React from "react";
import { useState, useEffect } from 'react';


const skillsList = [
  { id: 1, imageSrc: "img/skills/java_icon.png", text: 'Java' },
  { id: 2, imageSrc: "img/skills/python_icon.png", text: 'Python' },
  { id: 3, imageSrc: "img/skills/typescript_icon.png", text: 'TypeScript' },
  { id: 4, imageSrc: "img/skills/react_icon.png", text: 'React' },
  { id: 5, imageSrc: "img/skills/javascript_icon.png", text: 'Javascript'},
  { id: 6, imageSrc: "img/skills/django_icon.png", text: 'Django' },
  { id: 7, imageSrc: "img/skills/fastapi_icon.png", text: 'FastApi' },
  { id: 8, imageSrc: "img/skills/postgres_icon.png", text: 'Postgres' },
  { id: 9, imageSrc: "img/skills/mongodb_icon.png", text: 'MongoDB' },
  { id: 10, imageSrc: "img/skills/docker_icon.png", text: 'Docker' },
  { id: 11, imageSrc: "img/skills/springboot_icon.png", text: 'Spring Boot' },
]
const Skills = () => {
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const educationStyleDesktop = {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

  const eductionStyleMobile = {
  }

  return (
    <>
      <div className="skills-row">
        <div className="col-lg-6 my-3" style={ desktop ? educationStyleDesktop : eductionStyleMobile}>
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2022</span>
              <h6>Software Engineering</h6>
              <p>Hack Reactor</p>
            </li>
            <li>
              <span className="dark-bg">2012-2016</span>
              <h6>Doctorate of Pharmacy</h6>
              <p>UNC Eshleman School of Pharmacy</p>
            </li>
            <li>
              <span className="dark-bg">2008-2012</span>
              <h6>Bachelors of Chemistry</h6>
              <p>North Carolina State University </p>
            </li>
          </ul>
        </div>


        <div className="col-lg-6 col-sm-12 my-3" style={ desktop ? educationStyleDesktop : {}} >
          <div className="sm-title">
            <h4 className="font-alt">Skills</h4>
          </div>
          <div className="skills-container">
            {skillsList.map(item => (
              <div key={item.id} className="col-lg-3 col-sm-4 my-3">
                <div className="skills-container">
                  <div className="skills-item">
                    <div className="skills-item-circle">
                    <img src={item.imageSrc} alt="icon" height={"64px"} width={"64px"}/>
                    </div>
                    <span className="color-theme">{item.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  // SiFastapi,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si"
import { 
  DiDjango,
} from "react-icons/di"
// import {
//   BiLogoSpringBoot,
// } from "react-icons/bi"
const skillsList = [
  { id: 1, imageSrc: <FaJava />, text: 'Java' },
  { id: 2, imageSrc: <FaPython />, text: 'Python' },
  { id: 3, imageSrc: <SiTypescript />, text: 'TypeScript' },
  { id: 4, imageSrc: <FaReact />, text: 'React' },
  { id: 5, imageSrc: <SiJavascript />, text: 'Javascript'},
  { id: 6, imageSrc: <DiDjango />, text: 'Django' },
  // { id: 7, imageSrc: <SiFastapi />, text: 'FastApi' },
  { id: 8, imageSrc: <SiPostgresql />, text: 'Postgres' },
  { id: 9, imageSrc: <SiMongodb />, text: 'MongoDB' },
  { id: 10, imageSrc: <FaDocker />, text: 'Docker' },
  // { id: 11, imageSrc: <BiLogoSpringBoot />, text: 'Spring Boot' },
]

const Skills = () => {
  return (
    <>
      <div className="skills-row">
        <div className="col-lg-6 my-3">
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
              <p>North Carolina State University . </p>
            </li>
          </ul>
        </div>


        <div className="col-lg-6 col-sm-12 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Skills</h4>
          </div>
          <div className="skills-container">
            {skillsList.map(item => (
              <div key={item.id} className="col-lg-3 col-sm-4 my-3">
                <div className="skills-container">
                  <div className="skills-item">
                    <div className="skills-item-circle">
                      {item.imageSrc}
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

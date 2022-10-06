import React from "react";
import { SkillsInfo } from "./Skills-info";
export const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="title reveal">
          <section className="section-title">My Skills</section>
        </div>
        <div className="content">
          <div className="left">
            <h2 className="content-title">My Skills and Experiences</h2>
            <p className="paragraph-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/><br/>
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              
            </p>
            <a href="#" className="btn">
              See More
            </a>
          </div>
          <div className="right">
            <SkillsInfo/>
          </div>
        </div>
      </div>
    </div>
  );
};

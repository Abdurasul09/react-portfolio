import React from "react";
import {FaAward} from "react-icons/fa";
import {FiBriefcase} from "react-icons/fi";
import {BiSupport} from "react-icons/bi";
export const Info = () => {
  return (
    <div className="about-info">
      <div className="about-box">
				<FaAward className="about-icon"/>
        <h3>Experience</h3>
        <span>2 Years Working</span>
      </div>
      <div className="about-box">
				<FiBriefcase className="about-icon"/>
        <h3>Completed</h3>
        <span>20 + Projects</span>
      </div>
      <div className="about-box">
        <BiSupport className="about-icon"/>
        <h3>Support</h3>
        <span>Online 24/7</span>
      </div>
    </div>
  );
};

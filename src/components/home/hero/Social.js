import React from "react";
import { BsInstagram } from "react-icons/bs";
import {ImLinkedin2} from "react-icons/im";import {AiFillGithub} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";

export const Social = () => {
  return (
    <div className="social">
      <a className="social-icon">
        <BsInstagram />
      </a>
			<a className="social-icon">
        <ImLinkedin2 />
      </a>
			<a className="social-icon">
        <AiFillGithub />
      </a>
			<a className="social-icon">
        <FaTelegramPlane />
      </a>
    </div>
  );
};



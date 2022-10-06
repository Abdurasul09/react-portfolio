import React from "react";
import { CgClose } from "react-icons/cg";
const Menu = ({ active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>
            <a className="link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default Menu;

// rafce



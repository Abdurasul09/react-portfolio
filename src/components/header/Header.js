import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import Menu from "./menu/Menu";
const Header = () => {
  // const [menuActive, setMenuActive] = useState(false);
  const [bg, setBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBg(true);
    } else {
      setBg(false);
    }
  };



  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const [menuActive, setMenuActive] = useState(false)
console.log(menuActive);

  









  return (
    <div className={bg ? "header active" : "header"}>
      <div className="container">
        <div className="content">
          <a href="#" className="logo">
            Ahmedov
          </a>
          <ul>
            <li>
              <a className="link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#skills">
                Skills
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
          <span
            className="burger"
            onClick={() => setMenuActive(!menuActive)}
          ></span>
        </div>
      </div>
      {/* <Menu active={menuActive} setActive={setMenuActive} /> */}
      <BurgerMenu active={menuActive} menuActive={setMenuActive}/>
    </div>
  );
};

export default Header;

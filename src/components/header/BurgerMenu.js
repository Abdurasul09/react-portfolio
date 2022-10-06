import React from 'react'

const BurgerMenu = ({active, menuActive}) => {
	return (
		<div
      className={active ? "menu active" : "menu"}
      onClick={() => active(false)}
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
        {/* <div>
          <CgClose />
        </div> */}
      </div>
    </div>
	)
}

export default BurgerMenu
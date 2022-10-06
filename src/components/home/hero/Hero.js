import { AiOutlineArrowRight } from "react-icons/ai";
import { Social } from "./Social";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-title">
            <Social />
            <div className="description">
              <h1>Rasul Ahmedov</h1>
              <h3>Frontend developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit magni quibusdam omnis, optio sequi adipisci4
              </p>
              <div className="btn-bock">
                <a href="#project" className="hero-btn">
                  View my work
                  <AiOutlineArrowRight className="icon-btn" />
                </a>
              </div>
            </div>
						<div className="home-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

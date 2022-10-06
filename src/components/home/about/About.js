import img from "./../../../assets/home-img.png";
import { FiDownload } from "react-icons/fi";
import { Info } from "./Info";
import CV from "./../../../assets/Ахмедов.А(резюме).docx";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
			<div className="title reveal">
          <section className="section-title">About me</section>
        </div>
        <div className="content">
          <div className="left">
            <img src={img} alt="profile image" />
          </div>
          <div className="right">
            <Info />
            <div className="about-description">
              <p>
                Frontend developer, I create web pages with UX / UI user
                interface, I have years of experience and many clients are happy
                with the projects carried of.
              </p>
            </div>

            <a download="" href={CV} className="btn">
              Download CV <FiDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

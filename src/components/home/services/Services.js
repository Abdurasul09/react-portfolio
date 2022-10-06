import React from "react";
import ServicesData from "./Services-data";

export const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="title reveal">
          <section className="section-title">My Services</section>
        </div>
        <div className="content">
          {ServicesData.map((el) => (
            <div key={el.id} className="info">
              <div className="service-icon">
                <img src={el.icon} width="50"/>
              </div>
              <h3>{el.name}</h3>
              <p>{el.description}</p>
              <a href="#" className="info-btn">{el.btn}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const ProjectsMenu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((el) => (
        <div key={el.id} className="section-center-block">
          <div className="block-info">
            <img src={el.img} width="350" />
          <h3 className="block-info-name">{el.name}</h3>
          </div>
        </div>
      ))}
      <a href="#" className=""></a>
    </div>
  );
};

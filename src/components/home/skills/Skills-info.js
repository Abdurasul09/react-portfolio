import React from "react";
import data from "./Skills-data";

export const SkillsInfo = () => {
  return (
    <div>
      {data.map((el) => (
        <div key={el.id} className="bar">
          <div className="info">  
            <span>{el.name}</span>
            <span>{el.percent}</span>
          </div>
					<div className={`line ${el.className}`}></div>
        </div>
      ))}
    </div>
  );
};

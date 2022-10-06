import React from "react";

export const ProjectsCategory = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
			<div className="btns">
      {categories.map((el, idx) => {
        return (
          <button className="project-btn" type="button" key={idx} onClick={() => filterItems(el)}>
            {el}
          </button>
        )
      })}
			</div>
    </div>
  );
};

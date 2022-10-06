import { ProjectsMenu } from "./Projects-menu";
import { ProjectsCategory } from "./ProjectsCategory";
import data from "./Projects-data";
import { useState } from "react";

const allCategories = ["All", ...new Set(data.map((el) => el.category))];
const Projects = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);
    if (category === "All") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((el) => el.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="projects">
      <div className="container">
        <div className="title reveal">
          <section className="section-title">Projects</section>
        </div>
        <div className="content">
          <ProjectsCategory categories={categories} filterItems={filterItems} />
          <ProjectsMenu items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

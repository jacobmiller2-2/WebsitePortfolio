import React from "react";

import ItemList from "../items/ItemList";

import { LIST_OPEN_DETAIL_LEFT } from "../items/variants";

import projects from "../../db/projects";

const ProjectLanding = () => {
  return <ItemList items={projects} variant={LIST_OPEN_DETAIL_LEFT} />;
};

export default ProjectLanding;

import React, { useEffect, useState } from "react";

import ItemList from "../items/ItemList";
import ItemDetail from "../items/ItemDetail";

import { OPEN_DETAIL_LEFT } from "../items/variants";

const Mock_Projects = [
  {
    title: "Portal App",
    description:
      "Allows clients to upload documents safely and securely to a business. The company can then view documents uploaded by clients, change client permissions, and much more. Contact us @ jacobmillerdev@gmail.com for more information.",
    media: null,
    url: "",
    detail: {
      description: "More complete Description",
    },
    contact: {
      email: "jacobmiller22@vt.edu",
      phone: "(804) 337 - 9016",
    },
  },
  {
    title: "Water App",
    description:
      "Allows users to track their consumption of water, create goals to drink more water, regulate how much water they should drink based off of their height, weight, and age. Contact us @ jacobmillerdev@gmail.com for more information.",
    media: null,
    url: "",
    detail: {
      description: "More complete Description",
    },
    contact: {
      email: "jacobmillerdev@gmail.com",
      phone: "(804) 337 - 9016",
    },
  },
  {
    title: "College Transit",
    description:
      'Allows users to locate and track Blacksburg Transit "BT" Buses across Blacksburg and Virginia Tech\'s Campus. Users can see the projected route each bus will follow, favorite routes they use the most, and see the capacity and number of passengers on each bus. Contact us @ jacobmillerdev@gmail.com for more information.',
    media: {
      type: "Image",
      payload: "./bus.png",
    },
    url: "",
    detail: {
      description: "More complete Description",
    },
    contact: {
      email: "jacobmiller22@vt.edu",
      phone: "(804) 337 - 9016",
    },
  },
];

const ProjectLanding = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Load Projects
    setProjects(Mock_Projects);
  }, []);

  const onProjectSelect = (project) => {
    setSelected(project);
  };

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="nine wide column">
            <ItemDetail item={selected} />
          </div>
          <div className="seven wide column">
            <ItemList items={projects} onItemSelect={onProjectSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLanding;

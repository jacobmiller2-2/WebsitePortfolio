import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch Projects
  }, []);

  const Mock_Projects = [
    {
      title: "Portal App",
      description:
        "Allows clients to upload documents safely and securely to a business. The company can then view documents uploaded by clients, change client permissions, and much more. Contact us @ jacobmillerdev@gmail.com for more information.",
      media: null,
      url: "",
    },
    {
      title: "Water App",
      description:
        "Allows users to track their consumption of water, create goals to drink more water, regulate how much water they should drink based off of their height, weight, and age. Contact us @ jacobmillerdev@gmail.com for more information.",
      media: {
        type: "Image",
        payload: "./bus.png",
      },
      url: "",
    },
    {
      title: "College Transit",
      description:
        'Allows users to locate and track Blacksburg Transit "BT" Buses across Blacksburg and Virginia Tech\'s Campus. Users can see the projected route each bus will follow, favorite routes they use the most, and see the capacity and number of passengers on each bus. Contact us @ jacobmillerdev@gmail.com for more information.',
      media: null,
      url: "",
    },
  ];

  const renderMedia = (media) => {
    if (!media) {
      return <i className="massive facebook icon"></i>;
    }
    switch (media.type) {
      case "Image":
        return <img className="ui image" src="./assets/bus.png"></img>;
    }
    return media;
  };

  const renderList = (items) => {
    return items.map((item) => {
      return (
        <div className="item" key={item.title}>
          <div className="ui tiny image">{renderMedia(item.media)}</div>

          <div
            className="middle aligned content"
            style={{ paddingLeft: "2rem" }}>
            <div className="ui header">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
          <div className="ui tiny image">
            <Link>
              <i className="huge external alternate black icon"></i>
            </Link>
            <a href={item.url}></a>
          </div>
        </div>
      );
    });
  };

  return <div className="ui divided items">{renderList(Mock_Projects)}</div>;
};

export default ProjectList;

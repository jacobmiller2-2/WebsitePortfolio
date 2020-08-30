import React from "react";

import "./Item.css";

const Item = ({ item, onItemSelect }) => {
  /**
   * Follows a set object structure -
    
      {
        title: "My Title",
        description:
          "Amazing Description",
        media: 
          type: "Image",
          payload: "./path/to/file",
        },
        url: "https://myurl.com",
        detail: {
          description: "More complete Description",
        },
        contact: {
          email: "email@emailaddress.com",
          phone: "1-800-phone-number",
        },
      },
   */

  const renderMedia = (media) => {
    if (!media) {
      return <i className="massive facebook icon"></i>;
    }
    switch (media.type) {
      case "Image":
        return (
          <img className="ui image" src="./assets/bus.png" alt="img"></img>
        );
      default:
        return media;
    }
  };

  const onItemClick = () => {
    if (onItemSelect) {
      onItemSelect(item);
    }
    return;
  };

  return (
    <div className="ui item" key={item.title} onClick={() => onItemClick()}>
      <div className="ui tiny image">{renderMedia(item.media)}</div>

      <div className="middle aligned content" style={{ paddingLeft: "2rem" }}>
        <div className="ui header">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
    </div>
  );
};

export default Item;

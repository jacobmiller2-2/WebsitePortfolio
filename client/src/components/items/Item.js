import React from "react";

const Item = ({ item, onItemSelect }) => {
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

  return (
    <div className="item" key={item.title} onClick={() => onItemSelect(item)}>
      <div className="ui tiny image">{renderMedia(item.media)}</div>

      <div className="middle aligned content" style={{ paddingLeft: "2rem" }}>
        <div className="ui header">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
      {/* <div className="ui tiny image">
            <Link>
              <i className="huge external alternate black icon"></i>
            </Link>
            <a href={item.url}></a>
          </div> */}
    </div>
  );
};

export default Item;

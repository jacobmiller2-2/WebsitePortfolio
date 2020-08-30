import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Item from "./Item";

const ItemList = ({ items, onItemSelect }) => {
  const renderList = (items) => {
    if (!items) {
      return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui huge text loader">Loading...</div>
          </div>
          <p></p>
        </div>
      );
    }

    return items.map((item) => {
      return <Item item={item} onItemSelect={onItemSelect} />;
    });
  };

  return (
    <div>
      <h1>List</h1>
      <div className="ui divided items">{renderList(items)}</div>
    </div>
  );
};

export default ItemList;

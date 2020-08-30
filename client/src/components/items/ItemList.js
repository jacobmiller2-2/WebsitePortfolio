import React, { useState } from "react";

import Item from "./Item";
import ItemDetail from "./ItemDetail";
import Loader from "../feedback/Loader";

import * as variants from "./variants";

const ItemList = ({ items, variant, title, itemContent, detailContent }) => {
  const [selected, setSelected] = useState(null);

  const onItemSelect = (item) => {
    setSelected(item);
    console.log("RERERE");
  };

  const renderFocusDetail = () => {
    if (!selected) {
      return (
        <div className="ui container">
          <div className="ui divided items">{renderItems(onItemSelect)}</div>
        </div>
      );
    }

    if (detailContent) {
      return detailContent(selected);
    }
    return <ItemDetail item={selected} />;
  };

  const renderNoDetail = () => {
    return;
  };

  const renderOpenDetailLeft = () => {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="nine wide column">
              <ItemDetail item={selected} />
            </div>
            <div className="seven wide column">
              <div className="ui divided items">
                {renderItems(onItemSelect)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderItems = (onItemSelect) => {
    if (itemContent) {
      if (!onItemSelect) {
      }
      return items.map((item) => {
        return itemContent(item, onItemSelect);
      });
    }

    return items.map((item) => {
      return <Item item={item} onItemSelect={onItemSelect} key={item.title} />;
    });
  };

  const renderList = () => {
    if (!items) {
      return <Loader />;
    }

    switch (variant) {
      case variants.LIST_FOCUS_DETAIL:
        return renderFocusDetail();
      case variants.LIST_NO_DETAIL:
        return renderNoDetail();
      default:
        return renderOpenDetailLeft();
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      {renderList()}
    </div>
  );
};

export default ItemList;

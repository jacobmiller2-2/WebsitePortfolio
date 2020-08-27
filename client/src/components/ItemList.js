import React from "react";

const ItemList = (props) => {
  console.log(props.items);
  return <div>{props.items}</div>;
};

export default ItemList;

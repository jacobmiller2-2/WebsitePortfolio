import React from "react";

import "./styles/Overview.css";

const Overview = () => {
  return (
    <div className="ui container">
      <div className="ui huge centered header">Jacob Miller</div>
      <img
        className="ui circular centered medium bordered image"
        alt="Professional Profile"
        src="./assets/Profile-Picture-Formal.png"></img>

      <div className="ui segment overview">
        My name is Jacob Miller and I am currently pursuing a B.S. in Computer
        Science as a Sophomore at Virginia Tech.
      </div>
    </div>
  );
};

export default Overview;

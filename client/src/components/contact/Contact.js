import React from "react";

import SocialInfoPane from "./SocialInfoPane";

const Contact = () => {
  const renderInfo = () => {
    return (
      <div>
        <div className="ui list">
          <div className="item">
            <div className="content">(804) 337 - 9016</div>
          </div>
          <div className="item">
            <i className="mail icon" />
            <div className="content">
              <a href="mailto:jacobmiller22@vt.edu">jacobmiller22@vt.edu</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="ui header">Jacob Miller</div>
      {renderInfo()}
    </div>
  );
};
export default Contact;

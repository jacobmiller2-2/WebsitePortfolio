import React from "react";

import "../styles/SocialInfoPane.css";

const SocialInfoPane = () => {
  return (
    <div className="ui wrapper">
      <a
        className="ui circular linkedin icon button"
        href="https://linkedin.com/in/jacobmiller22"
        target="_blank"
      >
        <i className="big linkedin icon" />
      </a>
      <a
        className="ui circular github icon black button"
        href="https://github.com/jacobmiller22"
        target="_blank"
      >
        <i className="big github icon"></i>
      </a>
      <a
        class="ui circular twitter icon button"
        href="https://twitter.com/jacobmiller22"
      >
        <i class="big twitter icon"></i>
      </a>
      <a
        className="ui circular linkify icon black button"
        href="https://jacobmiller22.com"
      >
        <i className="big linkify icon" />
      </a>
    </div>
  );
};

export default SocialInfoPane;

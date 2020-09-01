import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing  menu">
      <Link to="/" className="header link item">
        Jacob Miller
      </Link>
      <Link to="/courses" className="header link item">
        Courses
      </Link>
      <Link to="/projects" className="header link item">
        Projects
      </Link>
      <Link to="/contact" className="header link item">
        Contact
      </Link>
      <div className="right menu"></div>
    </div>
  );
};

export default Header;

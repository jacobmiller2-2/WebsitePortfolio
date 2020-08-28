import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CourseLanding from "./courses/CourseLanding";
import ProjectLanding from "./projects/ProjectLanding";
import Overview from "./Overview";

import Contact from "./contact/Contact";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Overview} />
          <Route path="/courses" exact component={CourseLanding} />
          <Route path="/projects" exact component={ProjectLanding} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

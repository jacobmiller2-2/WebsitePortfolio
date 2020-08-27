import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CourseList from "./courses/CourseList";
import ProjectList from "./projects/ProjectList";
import Overview from "./Overview";
import About from "./About";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Overview} />
          <Route path="/courses" exact component={CourseList} />
          <Route path="/projects" exact component={ProjectList} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

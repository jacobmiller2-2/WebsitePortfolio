import React from "react";
import { Link } from "react-router-dom";

import ItemList from "../items/ItemList";
import CourseDetail from "./CourseDetail";

import { LIST_FOCUS_DETAIL } from "../items/variants";

import courses from "../../db/courses";

const CourseLanding = (props) => {
  const courseItemContent = (item) => {
    const { subject, inProgress, title, courseNumber } = item;
    const header = `${title} - ${subject.abbrev}${courseNumber}`;

    const renderInProgress = () => {
      if (inProgress) {
        return (
          <div className="ui segemnt">
            <div className="ui active indeterminate inline text loader">
              In Progress...
            </div>
          </div>
        );
      }
      return <i className="huge green check circle icon"></i>;
    };

    return (
      <Link to={`/courses/${item.crn}`} className="item" key={item.crn}>
        <div className="middle aligned content" style={{ paddingLeft: "2rem" }}>
          <h2 className="ui dividing header">
            {header}
            <div className="ui sub header">{item.instructor}</div>
          </h2>
        </div>
        <h1 className="ui header">{item.finalGrade}</h1>
        <div>{renderInProgress()}</div>
      </Link>
    );
  };

  return (
    <div>
      <ItemList
        items={courses}
        itemContent={courseItemContent}
        detailContent={CourseDetail}
        variant={LIST_FOCUS_DETAIL}
      />
    </div>
  );
};

export default CourseLanding;

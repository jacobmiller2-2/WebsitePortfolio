import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import courses from "../../db/courses";

const CourseDetail = (props) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    courses.forEach((course) => {
      if (course.crn === props.match.params.id) {
        setCourse(course);
      }
    });
  }, [props.match.params.id]);

  if (!course) {
    return <div>Loading...</div>;
  }
  const { subject, title, courseNumber } = course;
  const header = `${title} - ${subject.abbrev}${courseNumber}`;
  return (
    <div>
      <Link to="/courses" className="ui button">
        Back
      </Link>
      <div className="ui header">{header}</div>
      <div className="ui"></div>
    </div>
  );
};

export default CourseDetail;

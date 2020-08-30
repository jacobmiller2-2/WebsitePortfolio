import React, { useEffect, useState } from "react";

import ItemList from "../items/ItemList";

import { LIST_NO_DETAIL } from "../items/variants";
const Mock_Courses = [
  {
    subject: {
      full: "Computer Science",
      abbrev: "CS",
    },
    course: {
      title: "Data Structures and Algorithms",
      courseNumber: "2114",
      crn: "n/a",
      instructor: "Margret Ellis",
      finalGrade: "B+",
    },
    inProgress: false,
  },
];

const CourseLanding = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Load Projects
    setCourses(Mock_Courses);
  }, []);

  const courseItemContent = (item) => {
    const onCourseClick = () => {
      console.log("clicked");
    };

    const { course, subject, inProgress } = item;
    return (
      <div className="item" key={course.crn} onClick={() => onCourseClick()}>
        <div className="middle aligned content" style={{ paddingLeft: "2rem" }}>
          <div className="ui header">{course.title}</div>
          <div className="description">{course.instructor}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ItemList
        items={courses}
        itemContent={courseItemContent}
        variant={LIST_NO_DETAIL}
      />
    </div>
  );
};

export default CourseLanding;

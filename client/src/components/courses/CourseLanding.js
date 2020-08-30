import React, { useEffect, useState } from "react";

import ItemList from "../items/ItemList";

import { LIST_NO_DETAIL } from "../items/variants";
const Mock_Courses = [
  {
    subject: {
      full: "Computer Science",
      abbrev: "CS",
    },
    title: "Data Structures and Algorithms",
    courseNumber: "2114",
    crn: "n/a",
    instructor: "Margaret Ellis",
    finalGrade: "B+",
    inProgress: false,
  },
  {
    subject: {
      full: "Computer Science",
      abbrev: "CS",
    },
    title: "Data Structures and Algorithms",
    courseNumber: "3114",
    crn: "83018",
    instructor: "Young Cao",
    finalGrade: "",
    inProgress: true,
  },
  {
    subject: {
      full: "Computer Science",
      abbrev: "CS",
    },
    title: "Computer Organization",
    courseNumber: "2505",
    crn: "12956",
    instructor: "Md Tausif",
    finalGrade: "B+",
    inProgress: false,
  },
  {
    subject: {
      full: "Computer Science",
      abbrev: "CS",
    },
    title: "Intro to Problem Solving in CS",
    courseNumber: "2104",
    crn: "82970",
    instructor: "David McPherson",
    finalGrade: "",
    inProgress: true,
  },
];

const CourseLanding = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Load Projects
    setCourses(Mock_Courses);
  }, []);

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
      return <i class="huge green check circle icon"></i>;
    };

    const onCourseClick = () => {
      console.log("clicked");
    };

    return (
      <div className="item" key={item.crn} onClick={() => onCourseClick()}>
        <div className="middle aligned content" style={{ paddingLeft: "2rem" }}>
          <div className="ui header">{header}</div>
          <div className="description">{item.instructor}</div>
        </div>
        <h1 className="ui header">{item.finalGrade}</h1>
        <div>{renderInProgress()}</div>
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

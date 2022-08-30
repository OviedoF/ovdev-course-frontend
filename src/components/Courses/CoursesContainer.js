import React from "react";
import styles from "./CoursesContainer.module.scss";
import CourseCard from "./CourseCard";
import clipPathAnimations from "../../animations/clipPath";

const CoursesContainer = ({ courses, text }) => {
  return (
    <section
      className={styles.section}
      style={clipPathAnimations.appearFromTopRight}
    >
      {text ? <h2>¿Qué te gustaría aprender hoy?</h2> : <></>}

      <div className={styles.courses_container}>
        {courses.map((el, index) => {
          return <CourseCard el={el} index={index} key={index} />;
        })}
      </div>
    </section>
  );
};

export default CoursesContainer;

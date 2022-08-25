import React from "react";
import styles from "./AboutSection.module.scss";
import Image from "next/dist/client/image";
import CourseCard from "./CourseCard";
import clipPathAnimations from "../../animations/clipPath";

const AboutSection = ({ courses }) => {
  return (
    <section
      className={styles.section}
      style={clipPathAnimations.appearFromTopRight}
    >
      <h2>¿Qué te gustaría aprender hoy?</h2>

      <div className={styles.courses_container}>
        {courses.map((el, index) => {
          return <CourseCard el={el} index={index} key={index} />;
        })}
      </div>
    </section>
  );
};

export default AboutSection;

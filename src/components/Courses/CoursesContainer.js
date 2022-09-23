import React, { useState, useEffect } from 'react';
import styles from "./CoursesContainer.module.scss";
import CourseCard from "./CourseCard";
import clipPathAnimations from "../../animations/clipPath";
import { useSelector } from 'react-redux';

const CoursesContainer = ({ courses, text }) => {
  const [coursesUser, setCoursesUser] = useState([]);
  const [coursesAdmin, setCoursesAdmin] = useState([]);
  const user = useSelector(state => state.auth);
  console.log(user.roles.includes('admin'));

  useEffect(() => {
    const coursesUserFilter = courses.filter(el => !el.onlyAdmin);
    setCoursesUser(coursesUserFilter);

    const coursesAdminFilter = courses.filter(el => el.onlyAdmin);
    setCoursesAdmin(coursesAdminFilter);
  }, []);

  return (
    <section
      className={styles.section}
      style={clipPathAnimations.appearFromTopRight}
    >
      {text ? <h2>¿Qué te gustaría aprender hoy?</h2> : <></>}

      <div className={styles.courses_container}>
        {coursesUser.map((el, index) => {
          return <CourseCard el={el} index={index} key={index} />;
        })}
      </div>

      {user.roles.includes('admin') && <h2 style={{marginTop: '100px'}}>Cursos Avanzados</h2>}
      {user.roles.includes('admin') &&       
      <div className={styles.courses_container}>
        {coursesAdmin.map((el, index) => {
          return <CourseCard el={el} index={index} key={index} />;
        })}
      </div>
      }

    </section>
  );
};

export default CoursesContainer;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProfileCourses.module.scss";

const ProfileCourses = ({ course }) => {
  return (
    <Link
      href={`/course/${course.course.dirname}/${course.lastTopic.filename}`}
      className="card"
      key={course.lastTopic._id}
    >
      <div className={styles.card}>

        <div className={styles.img_container}>
          <Image
            src={course.course.imageUrl}
            layout="fill"
            alt={`${course.course.name} image`}
            objectFit="cover"
          />
        </div>

        <div className={styles.text}>
          <h3>{course.course.name}</h3>
          <p>Te quedaste en... <span>{course.lastTopic.name}</span></p>
        </div>

      </div>
    </Link>
  );
};

export default ProfileCourses;

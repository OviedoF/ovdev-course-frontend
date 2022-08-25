import React from 'react';
import Image from 'next/dist/client/image';
import styles from './CoursePresentation.module.scss';

export default function CoursePresentation({course}) {
  return (
    <div className={styles.markdown}>
        <div className={styles.image_container}>
            <Image src={course.imageUrl} layout='fill' alt={`${course.name} imagen`} objectFit={'cover'} style={{opacity: '.3'}}/>

            <div className={styles.subImage_container}>
                <Image src={course.imageUrl} layout='fill' alt={`${course.name} imagen`} objectFit={'cover'} style={{opacity: '.9'}}/>
            </div>
        </div>

        <p>{course.description}</p>
    </div>
  )
}

import React from 'react';
import styles from './CourseCard.module.scss';
import Image from 'next/dist/client/image';
import Link from 'next/link'

const CourseCard = ({el, index}) => {
    return (
        <Link href={'/course/' + el.dirname}>
            <div className={styles.course_card} >
                <div className={styles.course_image_container}>
                    <Image src={el.imageUrl} layout='fill' alt={el.name} objectFit='cover'/>
                </div>
                
                <h3>{el.name}</h3>
                <p>{el.mini_description}</p>
            </div>
        </Link>
    );
}

export default CourseCard;

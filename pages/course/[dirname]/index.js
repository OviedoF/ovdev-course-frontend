import React from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import TopicsContainer from '../../../src/components/PageCourse/TopicsContainer';
import Content from '../../../src/components/PageCourse/Content';

export default function CoursePage({course}) {

  return (
    <main>
        <div className={styles.container}>

            <TopicsContainer dirname={course.dirname} topics={course.topics} />

            <Content course={course} />
        </div>
    </main>
  )
}

export async function getServerSideProps(context){
    const course = await axios(`http://localhost:4000/api/courses/${context.params.dirname}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            course
        }
    };
  }
import React from 'react';
import axios from 'axios';
import TopicsContainer from '../../../src/components/PageCourse/TopicsContainer';
import styles from './index.module.scss';
import Content from '../../../src/components/PageCourse/Content';

export default function TopicPage({course, topic}) {
    console.log(course)
    console.log(topic)

  return (
    <main>
        <div className={styles.container}>
            <TopicsContainer dirname={course.dirname} topics={course.topics} minimalize={true}/>

            <Content topic={topic} />
        </div>
    </main>
  )
};

export async function getServerSideProps(context){
    const course = await axios(`http://localhost:4000/api/courses/${context.params.dirname}`)
        .then(response => response.data)
        .catch(err => console.log(err));
    
    const topic = await axios(`http://localhost:4000/api/topics/${context.params.dirname}/${context.params.filename}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            course,
            topic
        }
    };
}
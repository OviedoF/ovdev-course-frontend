import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopicsContainer from '../../../src/components/PageCourse/TopicsContainer';
import styles from './index.module.scss';
import Content from '../../../src/components/PageCourse/Content';
import { useSelector, useDispatch } from 'react-redux';

export default function TopicPage({course, topic}) {
    const {user} = useSelector(state => state.auth);

    useEffect(() => {
        axios.post(`${process.env.API_HOST}/api/user/${user._id}/addCourse`, {
            courseId: course._id,
            lastTopicId: topic.topic._id
        })
    }, [course, topic, user]);

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
    const course = await axios(`${process.env.API_HOST}/api/courses/${context.params.dirname}`)
        .then(response => response.data)
        .catch(err => console.log(err));
    
    const topic = await axios(`${process.env.API_HOST}/api/topics/${context.params.dirname}/${context.params.filename}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            course,
            topic
        }
    };
}
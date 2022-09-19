import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import TopicsContainer from '../../../src/components/PageCourse/TopicsContainer';
import Content from '../../../src/components/PageCourse/Content';
import { useDispatch } from 'react-redux';
import { login } from '../../../src/actions/auth.actions';
import { getUserByToken } from '../../../src/helpers/token.helper';

export default function CoursePage({course}) {
    const dispatch = useDispatch();
    useEffect(() => {

        async function getUser(){
          const userFinded = await getUserByToken();
          
          if(userFinded) await dispatch( login(userFinded) );
        };
    
        getUser();
    }, [dispatch]);

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
    const course = await axios(`${process.env.API_HOST}/api/courses/${context.params.dirname}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            course
        }
    };
  }
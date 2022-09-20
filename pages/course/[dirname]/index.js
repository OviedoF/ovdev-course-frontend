import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import TopicsContainer from '../../../src/components/PageCourse/TopicsContainer';
import Content from '../../../src/components/PageCourse/Content';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserByToken } from '../../../src/helpers/token.helper';
import { activeScreen } from '../../../src/actions/screensActive.actions';
import { logout, login } from '../../../src/actions/auth.actions';

export default function CoursePage({course}) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {

    async function getUser(){
      const userFinded = await getUserByToken();

      if(userFinded == 'token expired'){
        dispatch( activeScreen('errorMessage', 'Tu sesión ha caducado, por favor reingresa.') );
        localStorage.removeItem('access-timestamp');
        localStorage.removeItem('x-access');
        dispatch( logout() );
        return router.push('/');
      }
      
      if(userFinded) return dispatch( login(userFinded) );

      dispatch( activeScreen('errorMessage', 'No estás logeado, por favor ingresa.') );
      router.push('/');
    };

    getUser();
}, [dispatch, router]);

  return (
    <main>
        <Head>
          <title>Curso {course.name} - OvDev Course</title>
        </Head>

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
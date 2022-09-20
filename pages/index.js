import React, { useState, useEffect } from 'react';
import CoursesContainer from '../src/components/Courses/CoursesContainer';
import Hero from '../src/components/Hero/Hero';
import axios from 'axios';
import IsLoading from '../src/components/screens/IsLoading';
import DoneMessage from '../src/components/screens/DoneMessage';
import ErrorMessage from '../src/components/screens/ErrorMessage';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByToken } from '../src/helpers/token.helper';
import {login, logout } from '../src/actions/auth.actions';
import Head from 'next/head';
import { activeScreen } from '../src/actions/screensActive.actions';

export default function Home({courses}) {
  const screensActive = useSelector(state => state.screensActive);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUser(){
      const userFinded = await getUserByToken();

      if(userFinded == 'token expired'){
        dispatch( activeScreen('errorMessage', 'Tu sesión ha caducado, por favor reingresa.') );
        localStorage.removeItem('access-timestamp');
        return dispatch( logout() );
      }
      
      if(userFinded) return dispatch( login(userFinded) );

      return dispatch( logout() );
    };

    getUser();
  }, [dispatch]);

  return (
    <main>
      <Head>
        <title>Curso Desarrollo Front-End - OvDev Course</title>
      </Head>

      {screensActive.isLoading ? <IsLoading /> : <></>}
      {screensActive.successMessage ? <DoneMessage /> : <></>}
      {screensActive.errorMessage ? <ErrorMessage message={error ? error : 'Indefinido'}/> : <></>}

      <Hero setError={setError}/>

      {auth ? <CoursesContainer courses={courses} text/> : <></>}
    </main>
  )
};

export async function getServerSideProps(){
  const courses = await axios.get(`${process.env.API_HOST}/api/courses`)
      .then(response => response.data)
      .catch(err => console.log(err));
 
  return {
      props: {
          courses
      }
  };
}

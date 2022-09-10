import React, { useState, useEffect } from 'react';
import CoursesContainer from '../src/components/Courses/CoursesContainer';
import Hero from '../src/components/Hero/Hero';
import axios from 'axios';
import IsLoading from '../src/components/screens/IsLoading';
import DoneMessage from '../src/components/screens/DoneMessage';
import ErrorMessage from '../src/components/screens/ErrorMessage';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByToken } from '../src/helpers/token.helper';
import {login } from '../src/actions/auth.actions';

export default function Home({courses}) {
  const screensActive = useSelector(state => state.screensActive);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUser(){
      const userFinded = await getUserByToken();
      
      if(userFinded) await dispatch( login(userFinded) );
    };

    getUser();
  }, []);

  return (
    <main>
      {screensActive.isLoading ? <IsLoading /> : <></>}
      {screensActive.successMessage ? <DoneMessage /> : <></>}
      {screensActive.errorMessage ? <ErrorMessage message={error ? error : 'Indefinido'}/> : <></>}

      <Hero setError={setError}/>

      {auth ? <CoursesContainer courses={courses} text/> : <></>}
    </main>
  )
};

export async function getServerSideProps(){
  const courses = await axios(`https://ovdevcourses-api.herokuapp.com/api/courses`)
      .then(response => response.data)
      .catch(err => console.log(err));
 
  return {
      props: {
          courses
      }
  };
}

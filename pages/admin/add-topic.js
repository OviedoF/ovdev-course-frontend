import React, { useState, useEffect } from 'react';
import AddTopicsForm from '../../src/components/admin/AddTopicsForm'
import axios from 'axios';
import { useSelector } from 'react-redux';
import IsLoading from '../../src/components/screens/IsLoading';
import DoneMessage from '../../src/components/screens/DoneMessage';
import ErrorMessage from '../../src/components/screens/ErrorMessage';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserByToken } from '../../src/helpers/token.helper';
import { activeScreen } from '../../src/actions/screensActive.actions';
import { logout, login } from '../../src/actions/auth.actions';

export default function AddTopic({courses}) {
    const coursesNames = courses.map(el => el.name);
    const screensActive = useSelector(state => state.screensActive);
    const [error, setError] = useState('');
    const user = useSelector(state => state.auth);

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
  
    useEffect(() => {
      if(!user || !user.roles.includes('admin')) router.replace('/');
    }, []);

  return (
    <main>
        <Head>
          <title>Agregar tópico - OvDev Course</title>
        </Head>

        {screensActive.isLoading ? <IsLoading /> : <></>}
        {screensActive.successMessage ? <DoneMessage type='Usuario'/> : <></>}
        {screensActive.errorMessage ? <ErrorMessage message={error}/> : <></>}
        

        <AddTopicsForm coursesNames={coursesNames} setError={setError}/>
        
        <style jsx>{`
            main{
                height: 100vh;
                display:flex;
                align-items: center;
                justify-content: center;
            }
        `}</style>
    </main>
  )
}

export async function getServerSideProps(){
    const courses = await axios(`${process.env.API_HOST}/api/courses`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            courses
        }
    };
  }
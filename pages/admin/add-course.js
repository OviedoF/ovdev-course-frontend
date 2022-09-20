import React, { useEffect } from 'react';
import AddCourseForm from '../../src/components/admin/AddCourseForm';
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

export default function AddCourse() {
  const screensActive = useSelector(state => state.screensActive);
  const router = useRouter();
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();

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
          <title>Agregar curso - OvDev Course</title>
        </Head>

        {screensActive.isLoading ? <IsLoading /> : <></>}
        {screensActive.successMessage ? <DoneMessage type='Curso'/> : <></>}
        {screensActive.errorMessage ? <ErrorMessage /> : <></>}
        
        <AddCourseForm />

        <style jsx>{`
            main{
                width: 100vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}</style>
    </main>
  )
}

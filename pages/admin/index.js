import React, { useState, useEffect } from 'react';
import RedirectCard from '../../src/components/admin/RedirectCard'
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserByToken } from '../../src/helpers/token.helper';
import { activeScreen } from '../../src/actions/screensActive.actions';
import { logout, login } from '../../src/actions/auth.actions';

export default function Admin() {
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
        <title>Admin Panel - OvDev Course</title>
      </Head>

      <RedirectCard text={'Agregar curso'} redirect='add-course'/>

      <RedirectCard text={'Agregar tópico'} redirect='add-topic'/>

      <RedirectCard text={'Ver mensajes'} redirect='messages'/>

      <RedirectCard text={'Administrar cuentas'} redirect='accounts'/>

      <style jsx>{`
        main{
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-wrap: wrap;
          height: 100vh;
        }
      `}</style>
    </main>
  )
}

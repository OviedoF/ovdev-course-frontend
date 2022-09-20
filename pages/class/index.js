import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserByToken } from '../../src/helpers/token.helper';
import { activeScreen } from '../../src/actions/screensActive.actions';
import { logout, login } from '../../src/actions/auth.actions';

const Index = () => {
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
                <title>Clases grabadas de desarrollo web - OvDev Course</title>
            </Head>

            <h1>Clases grabadas</h1>

            <h2>Clase 1 - HTML BÁSICO Y FUNDAMENTAL</h2>
            <hr />
            <p>1. Presentación del curso</p>
            <div><iframe src="https://www.loom.com/embed/9aa0cdbb75924ce8aa52bb94545de274" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>
            
            <p>2. HTML BÁSICO</p>
            <div><iframe src="https://www.loom.com/embed/c94d22a6f3d24765ae75360f6e1bf254" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>

            <p>3. HTML FUNDAMENTAL</p>
            <div><iframe src="https://www.loom.com/embed/c4b54fa8ee03409684b81c2d93ea4123" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>        
            
            <style jsx>{`
                h1{
                    font-size: 35px;
                    text-align: center;
                }

                h2{
                    font-size: 25px;
                    margin-top: 30px;
                }

                p{
                    margin-top: 50px;
                }

                div{
                    margin-top: 20px;
                    height: 500px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                div iframe{
                    width: 50%;
                    height: 100%;
                }
            `}</style>
            </main>
    );
}

export default Index;

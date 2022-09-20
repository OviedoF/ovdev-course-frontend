import React, { useState, useEffect } from 'react';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image';
import { getUserByToken } from '../src/helpers/token.helper';
import { useDispatch } from 'react-redux';
import { login, logout } from '../src/actions/auth.actions';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { activeScreen } from '../src/actions/screensActive.actions';

export default function ErrorPage() {
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
            <title>Error 404 página no encontrada - OvDev Course</title>
        </Head>
        <Image 
            src='https://res.cloudinary.com/syphhy/image/upload/v1661834435/mimis/aGpdDgw_460s-removebg-preview_wblfmr.png' 
            height={350} 
            width={350} 
            alt="cat sad meme"
        />

        <div className="container_text">
            <h1>Ey, parece que te has perdido!</h1>
            <h2>Esta página no existe o está en mantenimiento :(</h2>
            <h2>No estés triste, ten un abrazo y vuelve a la página principal</h2>

            <Link href={'/'}>
                <FontAwesomeIcon icon={faArrowLeftLong} style={{marginTop: '30px', height: '50px', cursor: 'pointer'}}/>
            </Link>
        </div>

        <style jsx>{`
            main{
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                height: 58vh;
            }    

            h1{
                font-size: 50px;
            }

            h2{
                margin-top: 20px;
                font-size: 25px;
            }
        `}</style>
    </main>
  )
}

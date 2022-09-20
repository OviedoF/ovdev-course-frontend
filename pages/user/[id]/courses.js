import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProfileCourses from "../../../src/components/profile/ProfileCourses";
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserByToken } from '../../../src/helpers/token.helper';
import { activeScreen } from '../../../src/actions/screensActive.actions';
import { logout, login } from '../../../src/actions/auth.actions';

const Courses = ({ coursesInProcess }) => {
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
          <title>Cursos en proceso - OvDev Course</title>
        </Head>
      
        <div className="container">
            {coursesInProcess.map((course) => {
              if(course.lastTopic) {
                return (
                  <ProfileCourses course={course} key={course.lastTopic._id}/>
                );
              }
            })}
        </div>


        <style jsx>{`
            main{
                display: flex;
                align-items: center;
                justify-content: center;
            }    

            .container{
                width: 100%;
                display: flex;
                margin-top: 40px;
                justify-content: space-evenly;
                flex-direction: row-reverse;
                flex-wrap: wrap;
            }
        `}</style>
    </main>
  );
};

export async function getServerSideProps(context) {
  const coursesInProcess = await axios(
    `${process.env.API_HOST}/api/user/${context.params.id}/getCoursesInProcess`
  )
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return {
    props: {
      coursesInProcess,
    },
  };
}

export default Courses;

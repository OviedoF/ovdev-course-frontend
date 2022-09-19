import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProfileCourses from "../../../src/components/profile/ProfileCourses";
import { useDispatch } from "react-redux";
import { getUserByToken } from "../../../src/helpers/token.helper";
import { login } from "../../../src/actions/auth.actions";

const Courses = ({ coursesInProcess }) => {
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

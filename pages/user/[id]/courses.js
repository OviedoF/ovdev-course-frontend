import React from "react";
import axios from "axios";
import ProfileCourses from "../../../src/components/profile/ProfileCourses";

const Courses = ({ coursesInProcess }) => {
  return (
    <main>
        <div className="container">
            {coursesInProcess.map((course) => {
            return (
                <ProfileCourses course={course} key={course.lastTopic._id}/>
            );
            })}
        </div>


        <style jsx>{`
            main{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 55vh;
            }    

            .container{
                width: 100%;
                display: flex;
                margin-top: 40px;
                justify-content: space-evenly;
                flex-direction: row-reverse;
            }
        `}</style>
    </main>
  );
};

export async function getServerSideProps(context) {
  const coursesInProcess = await axios(
    `http://localhost:4000/api/user/${context.params.id}/getCoursesInProcess`
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

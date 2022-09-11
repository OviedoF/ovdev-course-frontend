import React, { useState, useEffect } from 'react';
import AddTopicsForm from '../../src/components/admin/AddTopicsForm'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import IsLoading from '../../src/components/screens/IsLoading';
import DoneMessage from '../../src/components/screens/DoneMessage';
import ErrorMessage from '../../src/components/screens/ErrorMessage';

export default function AddTopic({courses}) {
    const coursesNames = courses.map(el => el.name);
    const screensActive = useSelector(state => state.screensActive);
    const [error, setError] = useState('');
    const router = useRouter();
    const user = useSelector(state => state.auth);
  
    useEffect(() => {
      if(!user || !user.roles.includes('admin')) router.replace('/');
    }, []);

  return (
    <main>
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
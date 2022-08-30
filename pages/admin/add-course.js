import React, { useEffect } from 'react';
import AddCourseForm from '../../src/components/admin/AddCourseForm';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import IsLoading from '../../src/components/screens/IsLoading';
import DoneMessage from '../../src/components/screens/DoneMessage';
import ErrorMessage from '../../src/components/screens/ErrorMessage';

export default function AddCourse() {
  const screensActive = useSelector(state => state.screensActive);
  const router = useRouter();
  const user = useSelector(state => state.auth);

  useEffect(() => {
    if(!user || !user.roles.includes('admin')) router.replace('/');
  }, []);

  return (
    <main>

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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopicsContainer from '../../../src/components/PageCourse/TopicsContainer';
import styles from './index.module.scss';
import Content from '../../../src/components/PageCourse/Content';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByToken } from '../../../src/helpers/token.helper';
import { login } from '../../../src/actions/auth.actions';
import IsLoading from '../../../src/components/screens/IsLoading';

export default function TopicPage({course, topic}) {
    const {user} = useSelector(state => state.auth);
    const [isLogin, setisLogin] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        async function getUser(){
          const userFinded = await getUserByToken();
          
          if(userFinded) {
            await dispatch( login(userFinded) );
            setisLogin(true);
          };
        };
    
        getUser();
    }, [dispatch]);

    useEffect(() => {
        if(!user) return;
        
        axios.post(`${process.env.API_HOST}/api/user/${user._id}/addCourse`, {
            courseId: course._id,
            lastTopicId: topic.topic._id
        })
    }, [course, topic, user]);

  return (
    <main>
        {isLogin 
        ? 
        <div className={styles.container}>
            <TopicsContainer dirname={course.dirname} topics={course.topics} minimalize={true}/>

            <Content topic={topic} />
        </div>
        :
        <IsLoading />}
    </main>
  )
};

export async function getServerSideProps(context){
    const course = await axios(`${process.env.API_HOST}/api/courses/${context.params.dirname}`)
        .then(response => response.data)
        .catch(err => console.log(err));
    
    const topic = await axios(`${process.env.API_HOST}/api/topics/${context.params.dirname}/${context.params.filename}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            course,
            topic
        }
    };
}
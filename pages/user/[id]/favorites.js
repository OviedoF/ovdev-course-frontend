import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { getUserByToken } from "../../../src/helpers/token.helper";
import { login } from "../../../src/actions/auth.actions";

const Favorites = ({topicsFavs}) => {
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
            {topicsFavs.map(topic => {
                return (
                <div key={topic._id} className='card'>
                    <div className="image-container">
                        <Image src={topic.course.imageUrl} layout='fill' alt={topic.course.name + ' image'} objectFit='cover'/>
                    </div>
                    <div className="text">
                        <h2>{topic.name}</h2>
                        <p>Curso {topic.course.name}</p>
                    </div>
                </div>)
            })}

            <style jsx>{`
                main{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .card{
                    margin-top: 30px;
                    width: 31%;
                    height: 300px;
                    background-color: #00000040;
                    cursor: pointer;
                }

                .card .text{
                    padding: 0px 10px;
                    box-sizing: border-box;
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }    

                .card h2{
                    font-size: 25px;
                    text-align: center;
                }

                .card p {
                    font-size: 14px;
                    text-align: center;
                }

                .image-container{
                    width: 100%;
                    height: 50%;
                    position: relative
                }

                @media screen and (max-width: 600px){
                    .card{
                        width: 100%;
                    }
                }
            `}</style>
        </main>
    );
}


export async function getServerSideProps(context) {
    const topicsFavs = await axios(
      `${process.env.API_HOST}/api/user/${context.params.id}/getfavs/complete`
    )
      .then((response) => response.data)
      .catch((err) => console.log(err));
  
    return {
      props: {
        topicsFavs,
      },
    };
  }

export default Favorites;


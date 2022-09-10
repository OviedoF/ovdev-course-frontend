import React from 'react';
import axios from 'axios';
import Image from 'next/image';

const Favorites = ({topicsFavs}) => {

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
            `}</style>
        </main>
    );
}


export async function getServerSideProps(context) {
    const topicsFavs = await axios(
      `https://ovdevcourses-api.herokuapp.com/api/user/${context.params.id}/getfavs/complete`
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


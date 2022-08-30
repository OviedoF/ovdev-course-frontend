import React from 'react'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image';

export default function ErrorPage() {
  return (
    <main>
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

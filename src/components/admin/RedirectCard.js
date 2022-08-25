import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RedirectCard({text, redirect}) {
    const router = useRouter();

  return (
    <div >
        <Link href={`${router.asPath}/${redirect}`} className='redirect'>
            <h2>{text}</h2>
        </Link>
        
        <style jsx>{`
                div{
                    background-color: #00000060;
                    width: 30%;
                    height: 40%;
                    cursor: pointer
                }

                h2{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 1s;
                }

                h2:hover{
                    background-color: #FFFFFF50;
                    font-size: 30px;
                }
        `}</style>
    </div>
  )
}

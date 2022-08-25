import React from 'react'
import { SyncLoader } from 'react-spinners'

export default function IsLoading() {
  return (
    <div>
        <SyncLoader color={'#FEFEFE'} loading={true} size={50}/>

        <style jsx>{`
            div{
                position: fixed;
                top: 0;
                left: 0;
                background-color: #00000080;
                width: 100%;
                height: 100%;
                z-index: 999999;
                display: flex;
                align-items: center;
                justify-content: center;
            }    
        `}</style>
    </div>
  )
}

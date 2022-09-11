import React from 'react';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
    const {message} = useSelector(state => state.screensActive);

    return (
        <div>
            <h2>¡Ha ocurrido un error!</h2>
            <p>{message ? message : 'error indefinido'}</p>

            <style jsx>{`
                div{
                    height: 13vh;
                    width: 60vw;
                    background-color: #dc3545;
                    color: #F2F2F2;
                    display: flex;
                    flex-direction: column;
                    font-size: 30px;
                    align-items: center;
                    justify-content: center;
                    border-bottom-right-radius: 15px;
                    border-bottom-left-radius: 15px;
                    position: fixed;
                    z-index: 9999999999999;
                    top: 0;
                    left: 20vw;
                    opacity: 0;
                    animation: appear 4s ease-in;
                }

                div p {
                    margin-top: 15px
                }

                @keyframes appear{
                    0%{
                        opacity: 0;
                    }

                    10%{
                        opacity: 1;
                    }

                    100%{
                        opacity: 0;
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

export default ErrorMessage;

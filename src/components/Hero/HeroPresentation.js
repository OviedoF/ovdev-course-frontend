import React from 'react';
import styles from './HeroPresentation.module.scss';

const HeroPresentation = () => {
    return (
        <div className={styles.presentation}>
            <h1>Bienvenido, developer!</h1>
            <h2>
                Aprende, crea
                y disfruta
                del desarrollo web
            </h2>

            <p>Comprende y adentráte en este amplio mundo del desarrollo web, y entiende la capacidad de lo que está dentro de los navegadores.</p>

            <div className={styles.buttons}>
                <button className={styles.black_button}>
                    Registrarse
                </button>
                
                <button className={styles.white_button}>
                    Explorar
                </button>
            </div>
        </div>
    );
}

export default HeroPresentation;

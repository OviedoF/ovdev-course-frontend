import React from 'react';
import styles from './HeroPresentation.module.scss';

const HeroPresentation = () => {
    return (
        <div className={styles.presentation}>
            <h1>Bienvenido al curso ov.dev!</h1>
            <h2>
                Aprende, crea
                y disfruta
                el desarrollo web
            </h2>

            <p>Comprende y adentráte en este amplio mundo del desarrollo web, y entiende la capacidad de lo que está dentro de los navegadores.</p>

        </div>
    );
}

export default HeroPresentation;

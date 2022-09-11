import React from 'react';
import styles from './FooterInfo.module.scss';
import Link from 'next/link';

const FooterInfo = () => {
    return (
        <div className={styles.info}>
            <div className={styles.about}>
                <h3>Sobre este proyecto</h3>
                <p>Este proyecto fue creado por Oviedo, Federico en Rafaela, Santa Fe, Argentina. La intención es crear un espacio de aprendizaje donde estén todos los apuntes y ejercicios del curso OvDev-Course, dicho curso está bajo mi marca personal OvDev.</p>
            </div>


            <div className={styles.links}>
                <h3>Links</h3>

                <ul>
                    <li><Link href={'/forum'}>Foros de consulta</Link></li>
                    <li><Link href={'/donate'}>Donaciones</Link></li>
                    <li><Link href={'/help'}>Contacto</Link></li>
                    <li><a href={'https://ovdev-portfolio.vercel.app/'} target={'_blank'} rel='noreferrer'>Conóceme</a></li>
                </ul>
            </div>
        </div>
    );
}

export default FooterInfo;

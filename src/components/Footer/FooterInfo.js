import React from 'react';
import styles from './FooterInfo.module.scss';

const FooterInfo = () => {
    return (
        <div className={styles.info}>
            <div className={styles.about}>
                <h3>Sobre este proyecto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique ipsam natus magnam laborum id, a velit nostrum accusantium expedita quis sequi asperiores sint dicta culpa iusto deserunt quas porro in rem aperiam sunt vitae unde voluptatum. Ut, unde culpa.</p>
            </div>

            <div className={styles.help}>
                <h3>Ayuda</h3>
                
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>

            <div className={styles.links}>
                <h3>Links</h3>

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterInfo;

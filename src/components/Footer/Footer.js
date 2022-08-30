import React from 'react';
import styles from './Footer.module.scss';
import FooterInfo from './FooterInfo';
import FooterCopyAndSocial from './FooterCopyAndSocial';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FooterInfo />

            <hr />

            <FooterCopyAndSocial />
        </footer>
    );
}

export default Footer;

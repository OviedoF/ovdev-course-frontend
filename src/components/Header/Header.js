import Navbar from './Navbar';
import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2><Link href={'/'}>ov.dev</Link></h2>

            <Navbar />
        </header>
    );
}

export default Header;

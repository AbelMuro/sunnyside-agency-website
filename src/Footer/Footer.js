import React from 'react';
import styles from './styles.module.css';
import logo from './images/logo.svg';

function Footer(){
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <img src={logo} className={styles.logo}/>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        About
                    </li>
                    <li className={styles.link}>
                        Services
                    </li>
                    <li className={styles.link}>
                        Projects
                    </li>
                </ul>
                <ul className={styles.socialLinks}>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
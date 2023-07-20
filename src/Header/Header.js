import React from 'react';
import MobileNavBar from './MobileNavBar';
import styles from './styles.module.css';
import logo from './images/logo.svg';
import arrow from './images/icon-arrow-down.svg';
import useMediaQuery from '../Hooks/useMediaQuery';

function Header() {
    const mobile = useMediaQuery('(max-width: 640px)');

    return(
        <header className={styles.container}>
            {mobile ? <MobileNavBar/> : 
            <nav className={styles.navbar}>
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
                    <li>
                        <button className={styles.contact}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>}
            <section className={styles.intro}>
                <h1 className={styles.title}>
                    we are creatives
                </h1>
                <img className={styles.arrow} src={arrow}/>
            </section>
        </header>
    )
}

export default Header
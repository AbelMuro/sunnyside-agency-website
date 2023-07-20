import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import logo from '../images/logo.svg';

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }


    useEffect(() => {
        if(open){
            dialogRef.current.style.display = 'flex';
            setTimeout(() => {
                if(!dialogRef.current) return;
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }

        else{
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!dialogRef.current) return;
                dialogRef.current.style.display = ''
            }, 200)
        }

    }, [open])

    return(
        <nav className={styles.container}>
            <img src={logo} className={styles.logo}/>
            <span className={styles.hamburger} onClick={handleOpen}></span>
            <dialog className={styles.dialog} ref={dialogRef}>
                <a className={styles.link}>
                    About
                </a>
                <a className={styles.link}>
                    Services
                </a>
                <a className={styles.link}>
                    Projects
                </a>
                <button className={styles.contact}>
                    Contact
                </button>
            </dialog>
        </nav>
    )
}

export default MobileNavBar;
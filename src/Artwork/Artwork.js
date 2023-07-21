import React from 'react';
import images from './images';
import styles from './styles.module.css';
import useMediaQuery from '../Hooks/useMediaQuery';

function Artwork () {
    const mobile = useMediaQuery('(max-width: 800px)');

    return(
        <div className={styles.container}>
            <img src={images[mobile ? 'milkbottlesMobile' : 'milkbottles']} className={styles.artwork}/>
            <img src={images[mobile ? 'orangeMobile' : 'orange']} className={styles.artwork}/>
            <img src={images[mobile ? 'coneMobile' : 'cone']} className={styles.artwork}/>
            <img src={images[mobile ? 'sugarcubesMobile' : 'sugarcubes']} className={styles.artwork}/>
        </div>
    )
}

export default Artwork;
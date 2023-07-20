import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import eggImage from './images/image-transform.jpg';
import cupImage from './images/image-stand-out.jpg';
import eggImageMobile from './images/image-transform-mobile.jpg';
import cupImageMobile from './images/image-stand-out-mobile.jpg';
import useMediaQuery from '../Hooks/useMediaQuery';

function CompanyDetails({title, desc, image, reverse, barcolor}) {
    const mobile = useMediaQuery('(max-width: 730px)')
    const containerRef = useRef();
    const imageRef = useRef();

    useEffect(() => {
        if(reverse)
            containerRef.current.style.flexDirection = mobile ? '' : 'row-reverse';
        else
            containerRef.current.style.flexDirection = mobile ? '' : 'row';
    }, [mobile])

    useEffect(() => {
        if(image === 'egg')
            imageRef.current.src = mobile ? eggImageMobile : eggImage;
        else
            imageRef.current.src = mobile ? cupImageMobile : cupImage;

    }, [mobile])

    return(
        <section className={styles.container} ref={containerRef}>
            <div className={styles.textbox}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <p className={styles.desc}>
                        {desc}
                    </p>
                    <button className={styles.learnMore}>
                        <span>Learn More</span>
                        <div className={styles.bar} style={{backgroundColor: barcolor}}></div>
                    </button>                     
                </div>
            </div>
            <img className={styles.image} ref={imageRef}/>

        </section>
    )
}
export default CompanyDetails;
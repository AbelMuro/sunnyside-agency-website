import React from 'react';
import styles from './styles.module.css';

function CompanyDetails() {
    return(
        <section className={styles.container}>
            <div className={styles.graphicDesign}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Graphic Design
                    </h1>
                    <p className={styles.desc}>
                        Great design makes you memorable. 
                        We deliver artwork that underscores your 
                        brand message and captures potential clients’ attention.
                    </p>                    
                </div>
            </div>
            <div className={styles.photography}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Photography
                    </h1>
                    <p className={styles.desc}>
                        Increase your credibility by getting 
                        the most stunning, high-quality photos 
                        that improve your business image.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CompanyDetails;
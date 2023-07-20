import React from 'react';
import styles from './styles.module.css';
import images from './images'

function ClientTestimonials() {
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                Client Testimonials
            </h1>
            <div className={styles.testimonial_container}>
                <img className={styles.client_image} src={images['emily']}/>
                <p className={styles.testimonial}>
                    We put our trust in Sunnyside and they delivered, 
                    making sure our needs were met and deadlines were always hit.
                </p>
                <div className={styles.client_details}>
                    <h2 className={styles.client_name}>
                        Emily R.
                    </h2>
                    <h3 className={styles.client_position}>
                        Marketing Director
                    </h3>
                </div>
            </div>
            <div className={styles.testimonial_container}>
                <img className={styles.client_image} src={images['thomas']}/>
                <p className={styles.testimonial}>
                    Sunnyside’s enthusiasm coupled with their keen interest 
                    in our brand’s success made it a satisfying and enjoyable experience.
                </p>
                <div className={styles.client_details}>
                    <h2 className={styles.client_name}>
                        Thomas S.
                    </h2>
                    <h3 className={styles.client_position}>
                        Chief Operating Officer
                    </h3>
                </div>
            </div>
            <div className={styles.testimonial_container}>
                <img className={styles.client_image} src={images['jennie']}/>
                <p className={styles.testimonial}>
                    Incredible end result! Our sales increased over 
                    400% when we worked with Sunnyside. Highly recommended!
                </p>
                <div className={styles.client_details}>
                    <h2 className={styles.client_name}>
                        Jennie F.
                    </h2>
                    <h3 className={styles.client_position}>
                        Business Owner
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default ClientTestimonials;
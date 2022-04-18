import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.copyright}>
                        2022 Life Calendar
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
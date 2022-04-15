import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.wrapper}>
                    
                    <Calendar />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
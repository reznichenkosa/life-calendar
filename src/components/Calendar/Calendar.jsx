import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Calendar.module.scss';

const Calendar = () => {
    const user = useSelector(state => state.user);
    const lifeExpectancyData = useSelector(state => state.lifeExpectancy);
    const lifeExcpectancy = lifeExpectancyData[user['gender']];
    const weeks = lifeExcpectancy * 52;
    const arr = [];
    const birthDate = new Date(user.birthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear() + (today.getMonth() - birthDate.getMonth() + 2) / 10;
    const myAge = age * 52;

    for (let i = 0; i < weeks; i++) {
        if (i < myAge) {
            arr.push(<span key={i} className={styles.item + " " + styles.item_spent}>{i % 52 === 0 && i/52 % 5 === 0 ? i/52 : ''}</span>)
        } else {
            arr.push(<span key={i} className={styles.item}>{i % 52 === 0 && i/52 % 5 === 0 ? i/52 : ''}</span>)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <span className={styles.item}></span>
                    - a week
                </div>
                <div className={styles.legendItem}>
                    <span className={styles.item + " " + styles.item_spent}></span>
                    - past weeks
                </div>
                <div className={styles.legendItem}>
                    <span className={styles.item}></span>
                    <span className={styles.item}></span>
                    <span className={styles.item}></span>
                    ... - a row = an year
                </div>
            </div>
            <div className={styles.calendar}>
                {arr}
            </div>
        </div>
        
    );
};

export default Calendar;
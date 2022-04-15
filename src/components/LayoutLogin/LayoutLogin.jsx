import React from 'react';
import styles from './LayoutLogin.module.scss';

const LayoutLogin = (props) => {
    return (
        <section className={styles.login}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LayoutLogin;
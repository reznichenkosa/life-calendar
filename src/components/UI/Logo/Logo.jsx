import React from 'react';
import styles from './Logo.module.scss';

const Logo = (props) => {
    const otherClass = props.className ? ' ' + props.className : '';
    return (
        <div {...props} className={styles.logo + otherClass}>
            Life <span>Calendar</span>
        </div>
    );
};

export default Logo;